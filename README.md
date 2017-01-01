# Ember 3D Orbit Controls

Offers Three.js Orbit Controls functionality for [Ember 3D](https://github.com/willviles/ember-3d), an Ember Addon for using [Three.js](https://github.com/mrdoob/three.js).

Orbit controls perform orbiting, dollying (zooming), and panning with mouse, mousewheel, touch, and arrow key support. Check out the official [example](https://threejs.org/examples/misc_controls_orbit.html).

## Installation

Ensure you've installed Ember 3D:

`ember install ember-3d`

Then install Ember 3D Orbit Controls

`ember install ember-3d-orbit-controls`

## Mixin

Ember 3D Orbit Controls enables you to use the [OrbitControlsInteractionMixin](https://github.com/willviles/ember-3d-orbit-controls/blob/master/addon/interactions/orbit-controls.js), which registers orbit controls as `orbitControls` on the scene component. You may also pass an options POJO which will be used to set up the controls.

```javascript
// app/3d/scene-id/interactions/orbit-controls.js
import OrbitControlsInteractionMixin from 'ember-3d-orbit-controls/interactions/orbit-controls';

export default OrbitControlsInteractionMixin.extend({

  options: {
    enableZoom: false,
    enablePan: false,
    maxPolarAngle: Math.PI / 2
  }

});

```

For more information on available options, check out the Three.js code for [Orbit Controls](https://github.com/mrdoob/three.js/blob/576c75dadaf04c76b10e3f9b6e36f9af53e3896c/examples/js/controls/OrbitControls.js).

<!-- ## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/). -->
