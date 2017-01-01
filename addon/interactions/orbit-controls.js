import Ember from 'ember';
import OrbitControls from 'three/orbit-controls';

const { computed: { reads }, getProperties, set, typeOf } = Ember;

export default Ember.Object.extend({

  camera: reads('container._camera'),
  renderer: reads('container._renderer'),

  options: {},

  init() {
    this._super(...arguments);
    this.setControls();

  },

  setControls() {
    const {
      camera,
      container,
      renderer
    } = getProperties(this, 'camera', 'container', 'renderer');

    let controls = new OrbitControls(camera, renderer.domElement);

    set(container, 'orbitControls', controls);
    set(this, 'controls', controls);

    this.updateOptions();

    if (typeOf(this.didCreateControls) === 'function') {
      this.didCreateControls();
    }

  },

  updateOptions() {
    let { options, controls } = getProperties(this, 'options', 'controls');

    Object.keys(options).forEach((key) => {
      controls[key] = options[key];
    });
  }

});
