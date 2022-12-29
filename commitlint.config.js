/* eslint-disable @typescript-eslint/no-var-requires */
// const { readdirSync: readDirectory } = require('fs')
// const DEFAULT_SCOPES = ['root']

// const packageDirNames = readDirectory('./packages', { withFileTypes: true })
//   .filter((entry) => entry.isDirectory())
//   .map((dir) => dir.name)
// const appsDirNames = readDirectory('./apps', { withFileTypes: true })
//   .filter((entry) => entry.isDirectory())
//   .map((dir) => dir.name)

// const scopes = DEFAULT_SCOPES.concat(packageDirNames, appsDirNames)

module.exports = {
  extends: ['@commitlint/config-conventional'],
  // rules: {
  //   // Override this rule to explicitly state your own (scope)s.
  //   'scope-enum': [
  //     2, // Throw error when (scope) is not one of these values.
  //     'always',
  //     scopes,
  //   ],
  // },
}
