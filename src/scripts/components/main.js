"use strict";

var NodeWebappApp = require('./NodeWebappApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={NodeWebappApp}>
    <Route name="/" handler={NodeWebappApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
