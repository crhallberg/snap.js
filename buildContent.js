const fs = require('fs')

function tryReadFile(fileName, { fallbackValue }) {
  try {
    return fs.readFileSync(fileName, 'utf-8')
  } catch (error) {
    if (error.code === 'ENOENT') {
      return fallbackValue
    }
    throw error;
  }
}

function buildContentFile({ sourcePath, destPath }) {
  const entryInfo = JSON.parse(fs.readFileSync(`${sourcePath}/info.json`, 'utf-8'))

  const entries = entryInfo.map(({categoryHeading, entries}) => {
    const loadedEntries = entries.map(name => {
      const entryBasePath = `${sourcePath}/${name}`
      return {
        name,
        manifest: JSON.parse(fs.readFileSync(`${entryBasePath}/manifest.json`, 'utf-8')),
        description: fs.readFileSync(`${entryBasePath}/description.md`, 'utf-8'),
        src: fs.readFileSync(`${entryBasePath}/src.js`, 'utf-8'),
        test: tryReadFile(`${entryBasePath}/test.js`, ''),
      }
    })
    return {categoryHeading, entries: loadedEntries}
  })

  fs.writeFileSync(destPath, JSON.stringify(entries), 'utf-8')
}

buildContentFile({
  sourcePath: './content/utils',
  destPath: './public/utilsContent.json',
})

buildContentFile({
  sourcePath: './content/nolodash',
  destPath: './public/nolodashContent.json',
})
