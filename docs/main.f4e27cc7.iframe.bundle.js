(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Button.stories.jsx":"./src/stories/Button.stories.jsx","./stories/Card.stories.jsx":"./src/stories/Card.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/Button/Button.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Button/styles/index.scss")),_styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=function Button(props){var _props$className=props.className,className=void 0===_props$className?"":_props$className,_props$styles=props.styles,customStyles=void 0===_props$styles?{}:_props$styles,_props$handleClick=props.handleClick,handleClick=void 0===_props$handleClick?function(){}:_props$handleClick,children=props.children,styles=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},_styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a),customStyles);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{className:"button ".concat(className),style:styles,onClick:handleClick,children:children})};Button.__docgenInfo={description:"",methods:[],displayName:"Button"},__webpack_exports__.default=Button,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/Button/Button.jsx"})},"./src/components/Button/styles/index.scss":function(module,exports,__webpack_require__){},"./src/components/Card/Card.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_styles_index_css__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Card/styles/index.css")),_styles_index_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Card=function Card(props){props.title,props.content,props.color,props.image;var _props$backdropFilter=props.backdropFilter,backdropFilter=void 0===_props$backdropFilter?"blur(15px)":_props$backdropFilter,children=props.children,styles=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},_styles_index_css__WEBPACK_IMPORTED_MODULE_2___default.a),{},{backdropFilter:backdropFilter});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"card",style:styles,children:children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card"},__webpack_exports__.default=Card,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.jsx"]={name:"Card",docgenInfo:Card.__docgenInfo,path:"src/components/Card/Card.jsx"})},"./src/components/Card/styles/index.css":function(module,exports,__webpack_require__){},"./src/components/index.js":function(module,exports,__webpack_require__){module.exports={Card:__webpack_require__("./src/components/Card/Card.jsx").default,Button:__webpack_require__("./src/components/Button/Button.jsx").default}},"./src/stories/Button.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"ButtonTitle",(function(){return ButtonTitle})),__webpack_require__.d(__webpack_exports__,"ButtonSizes",(function(){return ButtonSizes})),__webpack_require__.d(__webpack_exports__,"ButtonTextColor",(function(){return ButtonTextColor})),__webpack_require__.d(__webpack_exports__,"ButtonBgColor",(function(){return ButtonBgColor})),__webpack_require__.d(__webpack_exports__,"ButtonCustomStyles",(function(){return ButtonCustomStyles})),__webpack_require__.d(__webpack_exports__,"ButtonAdd",(function(){return ButtonAdd})),__webpack_require__.d(__webpack_exports__,"ButtonIcon",(function(){return ButtonIcon}));var _Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/index.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Example/Button",component:_components__WEBPACK_IMPORTED_MODULE_2__.Button,parameters:{backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"light",value:"#eeeeee"},{name:"gray",value:"#cccccc"},{name:"dark",value:"#222222"},{name:"black",value:"#000000"},{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"},{name:"image",value:"url(background.jpeg) fixed no-repeat center"}]}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"100vw",height:"100vh",display:"inline-grid"},children:Object.values(args).map((function(arg){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"100vw",alignItems:"center",justifyContent:"center",display:"inline-flex"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Button,Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},arg),{},{children:arg.children}))})}))})},Default=Template.bind({});Default.args=[{}];var ButtonTitle=Template.bind({});ButtonTitle.args=[{children:"Title Button"}];var ButtonSizes=Template.bind({});ButtonSizes.args=[{className:"sm",children:"Small size"},{className:"",children:"Default size"},{className:"lg",children:"Long size"}];var ButtonTextColor=Template.bind({});ButtonTextColor.args=[{className:"text-primary bg-glass",children:"Primary"},{className:"text-primary",children:"Primary"},{className:"text-secondary",children:"Secondary"},{className:"text-success",children:"Success"},{className:"text-warning",children:"Warning"},{className:"text-danger",children:"Danger"},{className:"text-info",children:"Info"},{className:"text-dark",children:"Dark"}];var ButtonBgColor=Template.bind({});ButtonBgColor.args=[{className:"bg-glass",children:"Background Glass"},{className:"bg-primary",children:"Background Primary"},{className:"bg-secondary",children:"Background Secondary"},{className:"bg-success",children:"Background Success"},{className:"bg-warning",children:"Background Warning"},{className:"bg-danger",children:"Background Danger"},{className:"bg-info",children:"Background Info"},{className:"bg-dark",children:"Background Dark"},{className:"bg-telegram",children:"Background Telegram"}];var ButtonCustomStyles=Template.bind({});ButtonCustomStyles.args=[{styles:{width:50,height:50,borderRadius:50,fontSize:"10px"},children:"Some title"}];var ButtonAdd=Template.bind({});ButtonAdd.args=[{styles:{width:25,height:25,borderRadius:25},handleClick:function handleClick(){return alert("Add click!")},children:"+"}];var ButtonIcon=Template.bind({});ButtonIcon.args=[{styles:{width:100,height:100,borderRadius:100},className:"text-success",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:"code-brackets.svg",alt:"</>"})}],Default.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <div style={{ \n  width: '100vw',\n  height: '100vh',\n  display: 'inline-grid',\n}}>{Object.values(args).map((arg) => <div style={{\n  width: '100vw',\n  alignItems: 'center',\n  justifyContent: 'center',\n  display: 'inline-flex',\n}}><Button {...arg}>{arg.children}</Button></div>)}</div>"}},Default.parameters),ButtonTitle.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <div style={{ \n  width: '100vw',\n  height: '100vh',\n  display: 'inline-grid',\n}}>{Object.values(args).map((arg) => <div style={{\n  width: '100vw',\n  alignItems: 'center',\n  justifyContent: 'center',\n  display: 'inline-flex',\n}}><Button {...arg}>{arg.children}</Button></div>)}</div>"}},ButtonTitle.parameters),ButtonSizes.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <div style={{ \n  width: '100vw',\n  height: '100vh',\n  display: 'inline-grid',\n}}>{Object.values(args).map((arg) => <div style={{\n  width: '100vw',\n  alignItems: 'center',\n  justifyContent: 'center',\n  display: 'inline-flex',\n}}><Button {...arg}>{arg.children}</Button></div>)}</div>"}},ButtonSizes.parameters),ButtonTextColor.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <div style={{ \n  width: '100vw',\n  height: '100vh',\n  display: 'inline-grid',\n}}>{Object.values(args).map((arg) => <div style={{\n  width: '100vw',\n  alignItems: 'center',\n  justifyContent: 'center',\n  display: 'inline-flex',\n}}><Button {...arg}>{arg.children}</Button></div>)}</div>"}},ButtonTextColor.parameters),ButtonBgColor.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <div style={{ \n  width: '100vw',\n  height: '100vh',\n  display: 'inline-grid',\n}}>{Object.values(args).map((arg) => <div style={{\n  width: '100vw',\n  alignItems: 'center',\n  justifyContent: 'center',\n  display: 'inline-flex',\n}}><Button {...arg}>{arg.children}</Button></div>)}</div>"}},ButtonBgColor.parameters),ButtonCustomStyles.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <div style={{ \n  width: '100vw',\n  height: '100vh',\n  display: 'inline-grid',\n}}>{Object.values(args).map((arg) => <div style={{\n  width: '100vw',\n  alignItems: 'center',\n  justifyContent: 'center',\n  display: 'inline-flex',\n}}><Button {...arg}>{arg.children}</Button></div>)}</div>"}},ButtonCustomStyles.parameters),ButtonAdd.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <div style={{ \n  width: '100vw',\n  height: '100vh',\n  display: 'inline-grid',\n}}>{Object.values(args).map((arg) => <div style={{\n  width: '100vw',\n  alignItems: 'center',\n  justifyContent: 'center',\n  display: 'inline-flex',\n}}><Button {...arg}>{arg.children}</Button></div>)}</div>"}},ButtonAdd.parameters),ButtonIcon.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <div style={{ \n  width: '100vw',\n  height: '100vh',\n  display: 'inline-grid',\n}}>{Object.values(args).map((arg) => <div style={{\n  width: '100vw',\n  alignItems: 'center',\n  justifyContent: 'center',\n  display: 'inline-flex',\n}}><Button {...arg}>{arg.children}</Button></div>)}</div>"}},ButtonIcon.parameters)},"./src/stories/Card.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Title",(function(){return Title}));var _Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_components__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/index.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Example/Card",component:_components__WEBPACK_IMPORTED_MODULE_2__.Card,parameters:{layout:"fullscreen",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"},{name:"light",value:"#eeeeee"},{name:"gray",value:"#cccccc"},{name:"dark",value:"#222222"},{name:"black",value:"#000000"},{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"},{name:"image",value:"url(https://images.pexels.com/photos/12079516/pexels-photo-12079516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=660)"}]}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Card,Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{children:args.children}))})},Default=Template.bind({});Default.args={};var Title=Template.bind({});Title.args={title:"New Title Card"},Default.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) =>  <div style={{ \n  width: '100%',\n  height: '100%',\n  position: 'absolute',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}}><Card {...args} >{args.children}</Card></div>"}},Default.parameters),Title.parameters=Object(_Users_vladislavdenisov_Projects_Pet_Projects_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) =>  <div style={{ \n  width: '100%',\n  height: '100%',\n  position: 'absolute',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}}><Card {...args} >{args.children}</Card></div>"}},Title.parameters)},"./src/stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.b,{title:"Introduction",mdxType:"Meta"}),Object(esm.b)("style",null,"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "),Object(esm.b)("h1",null,"Welcome to Storybook"),Object(esm.b)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(esm.b)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(esm.b)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(esm.b)("inlineCode",{parentName:"p"},"stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(esm.b)("a",{parentName:"p",href:"https://componentdriven.org"},Object(esm.b)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(esm.b)("div",{className:"subheading"},"Configure"),Object(esm.b)("div",{className:"link-list"},Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(esm.b)("img",{src:assets_plugin,alt:"plugin"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(esm.b)("img",{src:stackalt,alt:"Build"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(esm.b)("img",{src:colors,alt:"colors"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(esm.b)("img",{src:flow,alt:"flow"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(esm.b)("div",{className:"subheading"},"Learn"),Object(esm.b)("div",{className:"link-list"},Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(esm.b)("img",{src:repo,alt:"repo"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(esm.b)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},Object(esm.b)("img",{src:direction,alt:"direction"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(esm.b)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(esm.b)("img",{src:code_brackets,alt:"code"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.b)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(esm.b)("img",{src:comments,alt:"comments"}),Object(esm.b)("span",null,Object(esm.b)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(esm.b)("div",{className:"tip-wrapper"},Object(esm.b)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.b)("code",null,"stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))};__webpack_exports__.default=componentMeta},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);