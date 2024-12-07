/*! For license information please see components-Transition-transitio-stories.10ef4cb9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmingyue_design=self.webpackChunkmingyue_design||[]).push([[551],{"./src/components/Transition/transitio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicTransition:()=>BasicTransition,LeftTransition:()=>LeftTransition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_transition__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Transition/transition.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Transition",component:_transition__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{animation:{control:"select",options:["zoom-in-top","zoom-in-left","zoom-in-right","zoom-in-bottom"]}},args:{animation:"zoom-in-top",timeout:300,in:!0}},BasicTransition={args:{animation:"zoom-in-top",timeout:300,wrapper:!0},render:args=>{const[show,setShow]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const timer=setTimeout((()=>{setShow(!0)}),3e3);return()=>clearTimeout(timer)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>setShow(!show),children:"Toggle"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_transition__WEBPACK_IMPORTED_MODULE_1__.A,{...args,in:show,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"hello world"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"hello world"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"hello world"})]})})]})}},LeftTransition={args:{animation:"zoom-in-left",timeout:300,wrapper:!0},render:args=>{const[show,setShow]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const timer=setTimeout((()=>{setShow(!0)}),3e3);return()=>clearTimeout(timer)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>setShow(!show),children:"Toggle"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_transition__WEBPACK_IMPORTED_MODULE_1__.A,{...args,in:show,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"hello world"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"hello world"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"hello world"})]})})]})}},__namedExportsOrder=["BasicTransition","LeftTransition"];BasicTransition.parameters={...BasicTransition.parameters,docs:{...BasicTransition.parameters?.docs,source:{originalSource:"{\n  args: {\n    animation: \"zoom-in-top\",\n    timeout: 300,\n    wrapper: true\n  },\n  render: args => {\n    const [show, setShow] = useState(false); // 避免使用 'in' 作为变量名，因为它是保留字\n\n    React.useEffect(() => {\n      // 使用 useEffect 来处理副作用\n      const timer = setTimeout(() => {\n        setShow(true);\n      }, 3000);\n      return () => clearTimeout(timer); // 清理副作用\n    }, []); // 空依赖数组，仅在组件挂载时执行\n\n    return <div>\n        <button onClick={() => setShow(!show)}>Toggle</button>\n        <Transition {...args} in={show}>\n          <div>\n            <h2>hello world</h2>\n            <h2>hello world</h2>\n            <h2>hello world</h2>\n          </div>\n        </Transition>\n      </div>;\n  }\n}",...BasicTransition.parameters?.docs?.source}}},LeftTransition.parameters={...LeftTransition.parameters,docs:{...LeftTransition.parameters?.docs,source:{originalSource:"{\n  args: {\n    animation: \"zoom-in-left\",\n    timeout: 300,\n    wrapper: true\n  },\n  render: args => {\n    const [show, setShow] = useState(false); // 避免使用 'in' 作为变量名，因为它是保留字\n\n    React.useEffect(() => {\n      // 使用 useEffect 来处理副作用\n      const timer = setTimeout(() => {\n        setShow(true);\n      }, 3000);\n      return () => clearTimeout(timer); // 清理副作用\n    }, []); // 空依赖数组，仅在组件挂载时执行\n\n    return <div>\n        <button onClick={() => setShow(!show)}>Toggle</button>\n        <Transition {...args} in={show}>\n          <div>\n            <h2>hello world</h2>\n            <h2>hello world</h2>\n            <h2>hello world</h2>\n          </div>\n        </Transition>\n      </div>;\n  }\n}",...LeftTransition.parameters?.docs?.source}}}},"./src/components/Transition/transition.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_transition_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Transition=props=>{console.log("ttt",props);const{animation,children,classNames,timeout,wrapper,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.A,{classNames:classNames||animation,timeout,...restProps,children:wrapper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children}):children})},__WEBPACK_DEFAULT_EXPORT__=Transition;Transition.__docgenInfo={description:"",methods:[],displayName:"Transition",props:{animation:{required:!1,tsType:{name:"union",raw:'| "zoom-in-top"\n| "zoom-in-left"\n| "zoom-in-right"\n| "zoom-in-bottom"',elements:[{name:"literal",value:'"zoom-in-top"'},{name:"literal",value:'"zoom-in-left"'},{name:"literal",value:'"zoom-in-right"'},{name:"literal",value:'"zoom-in-bottom"'}]},description:""},classNames:{required:!1,tsType:{name:"string"},description:""},wrapper:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);