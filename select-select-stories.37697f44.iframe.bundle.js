"use strict";(self.webpackChunk_jupyter_web_components=self.webpackChunk_jupyter_web_components||[]).push([[5980],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/select/select.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAutoWidth:()=>WithAutoWidth,WithCustomIndicator:()=>WithCustomIndicator,WithDisabled:()=>WithDisabled,WithOpen:()=>WithOpen,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_utilities_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utilities/storybook/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Select",argTypes:{isOpen:{control:"boolean"},isDisabled:{control:"boolean"},customIndicator:{control:"boolean"},numberOfChildren:{control:"number"},isMinimal:{control:"boolean"},hasAutoWidth:{control:"boolean"},onChange:{action:"changed",table:{disable:!0}}}},Template=(args,context)=>{var _a,_b;const{globals:{backgrounds,accent},parameters}=context;(0,_utilities_storybook__WEBPACK_IMPORTED_MODULE_1__.D)(accent,parameters.backgrounds,backgrounds);const container=document.createElement("div"),index=null!==(_a=args.numberOfChildren)&&void 0!==_a?_a:3;container.insertAdjacentHTML("afterbegin",`<jp-select \n      ${args.isDisabled?"disabled":""}\n      ${args.isMinimal?"minimal":""}\n      ${args.hasAutoWidth?"autowidth":""}\n    >\n      ${args.customIndicator?(0,_utilities_storybook__WEBPACK_IMPORTED_MODULE_1__.f)("sliders-h","indicator"):""}\n        ${new Array(null!==(_b=args.numberOfChildren)&&void 0!==_b?_b:3).fill(0).map(((_,index)=>`<jp-option value="${index}">Option ${index+1}</jp-option>`)).join("\n")}\n        <jp-option value="${index}">This is a very long option ${index+1}</jp-option>\n    </jp-select>`);const select=container.firstChild;return args.isOpen&&select.setAttribute("open",""),args.onChange&&select.addEventListener("change",args.onChange),select},Default={render:Template.bind({})};Default.args={isOpen:!1,isDisabled:!1,customIndicator:!1,numberOfChildren:3,isMinimal:!1,hasAutoWidth:!1,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("select-onchange")};const WithOpen={render:Template.bind({})};WithOpen.args=Object.assign(Object.assign({},Default.args),{isOpen:!0});const WithAutoWidth={render:Template.bind({})};WithAutoWidth.args=Object.assign(Object.assign({},Default.args),{hasAutoWidth:!0});const WithDisabled={render:Template.bind({})};WithDisabled.args=Object.assign(Object.assign({},Default.args),{isDisabled:!0});const WithCustomIndicator={render:Template.bind({})};WithCustomIndicator.args=Object.assign(Object.assign({},Default.args),{customIndicator:!0}),Default.parameters=Object.assign(Object.assign({},Default.parameters),{docs:Object.assign(Object.assign({},null===(_a=Default.parameters)||void 0===_a?void 0:_a.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_c=null===(_b=Default.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),WithOpen.parameters=Object.assign(Object.assign({},WithOpen.parameters),{docs:Object.assign(Object.assign({},null===(_d=WithOpen.parameters)||void 0===_d?void 0:_d.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_f=null===(_e=WithOpen.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),WithAutoWidth.parameters=Object.assign(Object.assign({},WithAutoWidth.parameters),{docs:Object.assign(Object.assign({},null===(_g=WithAutoWidth.parameters)||void 0===_g?void 0:_g.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_j=null===(_h=WithAutoWidth.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),WithDisabled.parameters=Object.assign(Object.assign({},WithDisabled.parameters),{docs:Object.assign(Object.assign({},null===(_k=WithDisabled.parameters)||void 0===_k?void 0:_k.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_m=null===(_l=WithDisabled.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),WithCustomIndicator.parameters=Object.assign(Object.assign({},WithCustomIndicator.parameters),{docs:Object.assign(Object.assign({},null===(_o=WithCustomIndicator.parameters)||void 0===_o?void 0:_o.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_q=null===(_p=WithCustomIndicator.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})});const __namedExportsOrder=["Default","WithOpen","WithAutoWidth","WithDisabled","WithCustomIndicator"]},"./src/utilities/storybook/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>setTheme,f:()=>getFaIcon});var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@microsoft/fast-colors/dist/parse-color.js"),_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/color.ts"),_design_tokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/design-tokens.ts");function getFaIcon(iconName,slotName){const objectName=iconName.split("-").map((part=>part[0].toUpperCase()+part.slice(1))).reduce(((agg,part)=>agg+part),"fa");_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.vI.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[objectName]);const copy=(0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qv)({prefix:"fas",iconName}).node.item(0).cloneNode(!0);return slotName&&copy.setAttribute("slot",slotName),copy.outerHTML}function setTheme(accent,parameters,backgrounds){var _a,_b,_c;const backgroundColor=null!==(_c=null!==(_a=(backgrounds=null!=backgrounds?backgrounds:{}).value)&&void 0!==_a?_a:null===(_b=parameters.values)||void 0===_b?void 0:_b.filter((v=>v.name===parameters.default))[0].value)&&void 0!==_c?_c:"#252526",parsedColor=(0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.lu)(backgroundColor),dark=(0,_color__WEBPACK_IMPORTED_MODULE_1__._T)(_color__WEBPACK_IMPORTED_MODULE_1__.wd.create(parsedColor.r,parsedColor.g,parsedColor.b));_design_tokens__WEBPACK_IMPORTED_MODULE_2__.q2.setValueFor(document.body,dark?_color__WEBPACK_IMPORTED_MODULE_1__.he.DarkMode:_color__WEBPACK_IMPORTED_MODULE_1__.he.LightMode);const parsedAccentColor=(0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.lu)(null!=accent?accent:"#DA1A5F");parsedAccentColor&&_design_tokens__WEBPACK_IMPORTED_MODULE_2__.au.setValueFor(document.body,_color__WEBPACK_IMPORTED_MODULE_1__.vD.from(_color__WEBPACK_IMPORTED_MODULE_1__.wd.create(parsedAccentColor.r,parsedAccentColor.g,parsedAccentColor.b)))}}}]);