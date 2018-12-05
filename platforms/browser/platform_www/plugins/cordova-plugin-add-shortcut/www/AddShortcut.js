cordova.define("cordova-plugin-add-shortcut.AddShortcut", function(require, exports, module) { var exec    = require('cordova/exec');
var channel = require('cordova/channel');

exports.addShortcut = function(success, error) {
    exec(success, error, "AddShortcut", "addShortcut");
};

exports.removeShortcut = function(success, error) {
    exec(success, error, "AddShortcut", "removeShortcut");
};

});
