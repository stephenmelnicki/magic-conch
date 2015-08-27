"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var responses = ["Maybe someday.", "Nothing.", "Neither.", "I don't think so.", "No.", "Yes.", "Try asking again.", "[In a very insulting, sarcastic-like tone] No."];

exports["default"] = function (robot) {
  robot.respond(/(.*)\?/i, function (msg) {
    msg.send(msg.random(responses));
  });

  robot.hear(/all hail the magic conch/i, function (msg) {
    msg.send("Woo loo loo loo loo!");
  });
};

module.exports = exports["default"];