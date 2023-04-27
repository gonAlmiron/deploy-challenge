"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _data = _interopRequireDefault(require("./data.router"));
var _geolocation = _interopRequireDefault(require("./geolocation.router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.use('/data', _data["default"]);
router.use('/location', _geolocation["default"]);
var _default = router;
exports["default"] = _default;