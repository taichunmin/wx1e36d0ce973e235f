var _typeof = require("./typeof"), assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(e, r) {
    if (r && ("object" === _typeof(r) || "function" == typeof r)) return r;
    if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized(e);
}

module.exports = _possibleConstructorReturn;