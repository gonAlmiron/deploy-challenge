"use strict";

var _server = _interopRequireDefault(require("./services/server"));
var _logger = _interopRequireDefault(require("./logs/logger"));
var _config = _interopRequireDefault(require("./config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PUERTO || _config["default"].PUERTO;
_server["default"].listen(PORT, function () {
  return _logger["default"].info("Server UP - Escuchando en el puerto ".concat(PORT, " - PID WORKER ").concat(process.pid, " "));
});
_server["default"].on('error', function (err) {
  return _logger["default"].error(err);
});