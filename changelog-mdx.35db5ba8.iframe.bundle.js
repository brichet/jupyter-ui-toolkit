/*! For license information please see changelog-mdx.35db5ba8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_jupyter_web_components=self.webpackChunk_jupyter_web_components||[]).push([[221],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./docs/changelog.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>changelog});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");const CHANGELOG_namespaceObject="# Changelog\n\n\x3c!-- <START NEW CHANGELOG ENTRY> --\x3e\n\n## 0.11.0\n\n([Full Changelog](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/compare/@jupyter/react-components@0.10.1...1d655c9f8ec4566846a99b49844d613bb53171b5))\n\n### Enhancements made\n\n- Add listbox component [#65](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/65) ([@fcollonval](https://github.com/fcollonval))\n- Add anchor component [#64](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/64) ([@fcollonval](https://github.com/fcollonval))\n\n### Maintenance and upkeep improvements\n\n- Fix bump_version.py [#66](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/66) ([@fcollonval](https://github.com/fcollonval))\n- Bump word-wrap from 1.2.3 to 1.2.4 [#62](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/62) ([@dependabot](https://github.com/dependabot))\n\n### Contributors to this release\n\n([GitHub contributors page for this release](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/graphs/contributors?from=2023-07-18&to=2023-07-27&type=c))\n\n[@dependabot](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Adependabot+updated%3A2023-07-18..2023-07-27&type=Issues) | [@fcollonval](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Afcollonval+updated%3A2023-07-18..2023-07-27&type=Issues) | [@github-actions](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Agithub-actions+updated%3A2023-07-18..2023-07-27&type=Issues)\n\n\x3c!-- <END NEW CHANGELOG ENTRY> --\x3e\n\n## 0.10.1\n\n([Full Changelog](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/compare/v0.10.0...798a00a15d88ed289ecd80e7eaf7d627926e532e))\n\n### Bugs fixed\n\n- Fix jp-toolbar.positioning-region not filling jp-toolbar size [#60](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/60) ([@fcollonval](https://github.com/fcollonval))\n\n### Maintenance and upkeep improvements\n\n- Bump semver from 5.7.1 to 5.7.2 [#59](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/59) ([@dependabot](https://github.com/dependabot))\n- Bump stylelint from 14.16.1 to 15.10.1 [#58](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/58) ([@dependabot](https://github.com/dependabot))\n- Add support for monorepo version bumps [#56](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/56) ([@fcollonval](https://github.com/fcollonval))\n- Bump json5 from 1.0.1 to 1.0.2 [#55](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/55) ([@dependabot](https://github.com/dependabot))\n- Bump loader-utils from 2.0.0 to 2.0.4 [#54](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/54) ([@dependabot](https://github.com/dependabot))\n\n### Documentation improvements\n\n- Fix wrong select controls specification [#61](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/61) ([@fcollonval](https://github.com/fcollonval))\n- Improve the documentation [#57](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/57) ([@fcollonval](https://github.com/fcollonval))\n\n### Contributors to this release\n\n([GitHub contributors page for this release](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/graphs/contributors?from=2023-06-28&to=2023-07-18&type=c))\n\n[@dependabot](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Adependabot+updated%3A2023-06-28..2023-07-18&type=Issues) | [@fcollonval](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Afcollonval+updated%3A2023-06-28..2023-07-18&type=Issues) | [@github-actions](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Agithub-actions+updated%3A2023-06-28..2023-07-18&type=Issues)\n\n## 0.10.0\n\n([Full Changelog](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/compare/v0.9.1...d687dc2f1f656ac2e6782cf8ffc6edcbf6bcf6bb))\n\n### Maintenance and upkeep improvements\n\n- Modernize the code [#53](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/53) ([@fcollonval](https://github.com/fcollonval))\n\n### Documentation improvements\n\n- Move development installation to contribution guide [#48](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/48) ([@fcollonval](https://github.com/fcollonval))\n- Add installation section [#47](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/47) ([@fcollonval](https://github.com/fcollonval))\n- Add CDN usage [#46](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/46) ([@fcollonval](https://github.com/fcollonval))\n- Add badge of cdn source [#45](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/45) ([@Max-ChenFei](https://github.com/Max-ChenFei))\n\n### Other merged PRs\n\n- Bump webpack from 5.67.0 to 5.76.0 [#51](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/51) ([@dependabot](https://github.com/dependabot))\n- Bump http-cache-semantics from 4.1.0 to 4.1.1 [#50](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/50) ([@dependabot](https://github.com/dependabot))\n- Bump decode-uri-component from 0.2.0 to 0.2.2 [#43](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/43) ([@dependabot](https://github.com/dependabot))\n- Bump loader-utils from 1.4.0 to 1.4.1 [#41](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/41) ([@dependabot](https://github.com/dependabot))\n- Bump moment from 2.29.2 to 2.29.4 [#40](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/40) ([@dependabot](https://github.com/dependabot))\n- Bump terser from 4.8.0 to 4.8.1 [#39](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/39) ([@dependabot](https://github.com/dependabot))\n- Bump parse-url from 6.0.0 to 6.0.2 [#38](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/38) ([@dependabot](https://github.com/dependabot))\n- Bump async from 2.6.3 to 2.6.4 [#37](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/37) ([@dependabot](https://github.com/dependabot))\n- Bump moment from 2.29.1 to 2.29.2 [#36](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/36) ([@dependabot](https://github.com/dependabot))\n- Bump minimist from 1.2.5 to 1.2.6 [#35](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/pull/35) ([@dependabot](https://github.com/dependabot))\n\n### Contributors to this release\n\n([GitHub contributors page for this release](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/graphs/contributors?from=2022-03-21&to=2023-06-28&type=c))\n\n[@dependabot](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Adependabot+updated%3A2022-03-21..2023-06-28&type=Issues) | [@fcollonval](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Afcollonval+updated%3A2022-03-21..2023-06-28&type=Issues) | [@github-actions](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3Agithub-actions+updated%3A2022-03-21..2023-06-28&type=Issues) | [@Max-ChenFei](https://github.com/search?q=repo%3Ajupyterlab-contrib%2Fjupyter-ui-toolkit+involves%3AMax-ChenFei+updated%3A2022-03-21..2023-06-28&type=Issues)\n";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Changelog"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.UG,{children:CHANGELOG_namespaceObject})]})}const changelog=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);