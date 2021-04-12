const APP_FLAVOR = process.env.APP_FLAVOR || 'dev';

module.exports = {
  common: require(`./${APP_FLAVOR}/common.json`),
  firebase: require(`./${APP_FLAVOR}/firebase.json`),
};

// TODO: Update PROD config
// TODO: Modify API uri
