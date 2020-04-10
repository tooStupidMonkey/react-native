const rootImportOpts = {
  root: __dirname,
  rootPathPrefix: '@/',
  rootPathSuffix: 'src',
};

const rootImportOptsAlternative = {
  rootPathPrefix: '#/'
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          "paths": [
            rootImportOpts,
            rootImportOptsAlternative
          ]
        }
      ]
    ]
  };
};
