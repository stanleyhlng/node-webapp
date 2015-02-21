'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var NodeWebappApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    NodeWebappApp = require('../../../src/scripts/components/NodeWebappApp.js');
    component = React.createElement(NodeWebappApp);
  });

  it('should create a new instance of NodeWebappApp', function () {
    expect(component).toBeDefined();
  });
});
