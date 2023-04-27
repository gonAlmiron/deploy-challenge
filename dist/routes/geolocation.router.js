"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _geolocation = require("../controllers/geolocation.controller");
var router = (0, _express.Router)();
router.use('/', _geolocation.geoLocationController);
var _default = router;
exports["default"] = _default;