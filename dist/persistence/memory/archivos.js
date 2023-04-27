"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locations = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var dirPath = _path["default"].join(__dirname, '../../input') || _path["default"].join(__dirname, '../../../dist/input');

// Lectura de los archivos .json
var fileNames = _fs["default"].readdirSync(dirPath).filter(function (name) {
  return name.endsWith('.json');
});
// Conversion de archivos .json a una variable con el contenido de todos los archivos en formato .json
var locations = fileNames.map(function (name) {
  var filePath = _path["default"].join(dirPath, name);
  var fileContent = _fs["default"].readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
});
exports.locations = locations;