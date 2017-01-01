/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-3d-orbit-controls',

  isDevelopingAddon: function() {
    return true;
  },

  included(app) {
    if (!isFastBoot()) {
      app.import('vendor/orbit-controls.js', {
        exports: {
          'three/orbit-controls': ['default']
        }
      });
    }

    return this._super.included.apply(this, arguments);
  }

};

// Checks to see whether this build is targeting FastBoot. Note that we cannot
// check this at boot time--the environment variable is only set once the build
// has started, which happens after this file is evaluated.
function isFastBoot() {
  return process.env.EMBER_CLI_FASTBOOT === 'true';
}
