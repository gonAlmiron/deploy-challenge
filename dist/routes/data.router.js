"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _data = require("../controllers/data.controller");
var router = (0, _express.Router)();
router.get('/', _data.getDataController);
var _default = router;
exports["default"] = _default;