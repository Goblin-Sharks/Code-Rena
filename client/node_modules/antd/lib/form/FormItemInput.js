"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));

var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));

var _col = _interopRequireDefault(require("../grid/col"));

var _context = require("./context");

var _ErrorList = _interopRequireDefault(require("./ErrorList"));

var iconMap = {
  success: _CheckCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  validating: _LoadingOutlined["default"]
};

var FormItemInput = function FormItemInput(_ref) {
  var prefixCls = _ref.prefixCls,
      status = _ref.status,
      wrapperCol = _ref.wrapperCol,
      children = _ref.children,
      help = _ref.help,
      errors = _ref.errors,
      onDomErrorVisibleChange = _ref.onDomErrorVisibleChange,
      hasFeedback = _ref.hasFeedback,
      validateStatus = _ref.validateStatus,
      extra = _ref.extra;
  var baseClassName = "".concat(prefixCls, "-item");
  var formContext = React.useContext(_context.FormContext);
  var mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
  var className = (0, _classnames["default"])("".concat(baseClassName, "-control"), mergedWrapperCol.className);
  React.useEffect(function () {
    return function () {
      onDomErrorVisibleChange(false);
    };
  }, []); // Should provides additional icon if `hasFeedback`

  var IconNode = validateStatus && iconMap[validateStatus];
  var icon = hasFeedback && IconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(baseClassName, "-children-icon")
  }, /*#__PURE__*/React.createElement(IconNode, null)) : null; // Pass to sub FormItem should not with col info

  var subFormContext = (0, _extends2["default"])({}, formContext);
  delete subFormContext.labelCol;
  delete subFormContext.wrapperCol;
  return /*#__PURE__*/React.createElement(_context.FormContext.Provider, {
    value: subFormContext
  }, /*#__PURE__*/React.createElement(_col["default"], (0, _extends2["default"])({}, mergedWrapperCol, {
    className: className
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-control-input")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-control-input-content")
  }, children), icon), /*#__PURE__*/React.createElement(_context.FormItemPrefixContext.Provider, {
    value: {
      prefixCls: prefixCls,
      status: status
    }
  }, /*#__PURE__*/React.createElement(_ErrorList["default"], {
    errors: errors,
    help: help,
    onDomErrorVisibleChange: onDomErrorVisibleChange
  })), extra && /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-extra")
  }, extra)));
};

var _default = FormItemInput;
exports["default"] = _default;