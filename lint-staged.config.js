module.exports = {
  './**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  './**/*.(ts|tsx|js)': (filename) => [
    `npx eslint --fix ${filename.join(' ')}`,
    `npx prettier --write ${filename.join(' ')}`,
  ],
  './**/*.(md|json)': (filename) => `npx prettier --write ${filename.join(' ')}`,
}
