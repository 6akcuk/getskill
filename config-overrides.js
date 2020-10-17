const path = require('path')
const { addBabelPlugin, babelInclude, override } = require('customize-cra')
const { addReactRefresh } = require('customize-cra-react-refresh')

function onlyInDevelopmentMode(...customizers) {
  return (config, env) =>
    customizers.reduce(
      (cfg, customizer) => (env === 'production' ? cfg : customizer(cfg, env) || cfg),
      config,
    )
}

/* config-overrides.js */
module.exports = override(
  addBabelPlugin(['@babel/plugin-transform-typescript', { allowNamespaces: true }]),

  babelInclude([path.resolve('src/')]),

  onlyInDevelopmentMode(addBabelPlugin(['styled-components', { displayName: true, fileName: false }])),

  addReactRefresh(),
)
