require("babel-register")();

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
