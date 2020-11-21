import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import classNames from 'classnames';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import Col from '../grid/col';
import { FormContext, FormItemPrefixContext } from './context';
import ErrorList from './ErrorList';
var iconMap = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined
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
  var formContext = React.useContext(FormContext);
  var mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
  var className = classNames("".concat(baseClassName, "-control"), mergedWrapperCol.className);
  React.useEffect(function () {
    return function () {
      onDomErrorVisibleChange(false);
    };
  }, []); // Should provides additional icon if `hasFeedback`

  var IconNode = validateStatus && iconMap[validateStatus];
  var icon = hasFeedback && IconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(baseClassName, "-children-icon")
  }, /*#__PURE__*/React.createElement(IconNode, null)) : null; // Pass to sub FormItem should not with col info

  var subFormContext = _extends({}, formContext);

  delete subFormContext.labelCol;
  delete subFormContext.wrapperCol;
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: subFormContext
  }, /*#__PURE__*/React.createElement(Col, _extends({}, mergedWrapperCol, {
    className: className
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-control-input")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-control-input-content")
  }, children), icon), /*#__PURE__*/React.createElement(FormItemPrefixContext.Provider, {
    value: {
      prefixCls: prefixCls,
      status: status
    }
  }, /*#__PURE__*/React.createElement(ErrorList, {
    errors: errors,
    help: help,
    onDomErrorVisibleChange: onDomErrorVisibleChange
  })), extra && /*#__PURE__*/React.createElement("div", {
    className: "".concat(baseClassName, "-extra")
  }, extra)));
};

export default FormItemInput;