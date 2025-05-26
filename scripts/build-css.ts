import { Buffer } from 'node:buffer'
import fs from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { transform } from 'lightningcss'
import { glob } from 'tinyglobby'
import { createGenerator } from 'unocss'
import config from '../uno.config'

export async function buildCSS() {
  const srcDir = fileURLToPath(new URL('../src', import.meta.url))

  const files = await glob('**/*.*', { cwd: join(srcDir, 'components') })

  const generater = await createGenerator(config)

  const tokens = new Set<string>()
  for (const file of files) {
    const content = await fs.readFile(join(srcDir, 'components', file), 'utf-8')
    await generater.applyExtractors(content, file, tokens)
  }

  const userStyle = await fs.readFile(join(srcDir, 'style.css'), 'utf-8').catch(() => '')

  const unoResult = await generater.generate(tokens)
  const input = [
    userStyle,
    unoResult.css,
  ].join('\n')

  try {
    const { code: css } = transform({
      code: Buffer.from(input, 'utf-8'),
      filename: 'style.css',
      targets: {
        chrome: 100,
      },
      minify: true,
    })
    await fs.writeFile(join(srcDir, '.generated/css.ts'), `export default ${JSON.stringify(String(css))}`)
  }
  catch (e: any) {
    console.error('Failed to build css', e)
    if (e.loc) {
      console.error('Error at line', e.loc.line, 'column', e.loc.column)
      console.error(input.split('\n')[e.loc.line - 1])
      console.error(`${' '.repeat(e.loc.column - 1)}^`)
    }
  }
}

buildCSS()
