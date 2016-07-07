require("babel-register")();
require("mock-local-storage")();

var mockCssModules = require("mock-css-modules");
mockCssModules.register(["sass", ".scss"]);

var jsdom = require("jsdom").jsdom;

var exposed = ["window", "navigator", "document"];

global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(function(property) {
  if (typeof global[property] === "undefined") {
    exposed.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: "node.js"
};

documentRef = document;

// Test helpers
var React = require("react");
var chai = require("chai");
var sinon = require("sinon");
var enzyme = require("enzyme");
var chaiEnzyme = require("chai-enzyme");

chai.use(chaiEnzyme());

global.React = React;
global.expect = chai.expect;
global.spy = sinon.spy;
global.mount = enzyme.mount;
global.shallow = enzyme.shallow;
global.render = enzyme.render;
