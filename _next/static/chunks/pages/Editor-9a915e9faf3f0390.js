(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{2919:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Editor",function(){return t(4589)}])},1639:function(n,e,t){"use strict";t.d(e,{z:function(){return p}});var r,i=t(5893),o=(t(7294),t(2125));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function s(){var n=a(["\n  display: block;\n  background: ",";\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n  width: fit-content;\n\n  :disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return s=function(){return n},n}function l(){var n=a(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return l=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var f=o.ZP.button.withConfig({componentId:"sc-96b76b10-0"})(s(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)})),d=o.ZP.div.withConfig({componentId:"sc-96b76b10-1"})(l()),p=function(n){var e=n.children,t=n.status,r=u(n,["children","status"]);return(0,i.jsx)(f,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({type:"button",status:null!==t&&void 0!==t?t:"PRIMARY"},r,{children:(0,i.jsx)(d,{children:e})}))}},4589:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Ne}});var r=t(5893),i=t(7294),o=t(9008),c=t(4931),u=t(1664),a=t.n(u),s=t(2125),l=t(9327),f=t(9352),d=t(471),p=t(8193);function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return h(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function x(){var n=m(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return x=function(){return n},n}function v(){var n=m(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 20%);\n  z-index: 5;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  display: ",";\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 500;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n"]);return v=function(){return n},n}function g(){var n=m([""]);return g=function(){return n},n}var j=s.ZP.div.withConfig({componentId:"sc-5cff3129-0"})(x()),y=s.ZP.div.withConfig({componentId:"sc-5cff3129-1"})(v(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"initial":"none"})),w=s.ZP.div.withConfig({componentId:"sc-5cff3129-2"})(g()),O=function(n){var e=n.children,t=n.title,o=b(i.useState(!1),2),c=o[0],u=o[1];return(0,r.jsxs)(j,{children:[(0,r.jsx)(y,{visible:c,children:t}),(0,r.jsx)(w,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:e})]})},C=t(5623),E=t(2971),A=t(1163),I=t(1639);function P(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function S(){var n=P(["\n  from { transform: scale(0.6); opacity: 0; }\n  to { transform: scale(1); opacity: 1; };\n"]);return S=function(){return n},n}function R(){var n=P(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 6;\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return R=function(){return n},n}function N(){var n=P(["\n  min-width: 440px;\n  width: fit-content;\n  animation: "," 220ms ease-in-out;\n"]);return N=function(){return n},n}function T(){var n=P(["\n  color: ",";\n  font-size: 20px !important;\n  margin: 0;\n"]);return T=function(){return n},n}function _(){var n=P(["\n  background: ",";\n  padding: 16px;\n  border-radius: 5px 5px 0 0;\n"]);return _=function(){return n},n}function z(){var n=P(["\n  color: ",";\n  background: ",";\n  padding: 16px;\n  overflow: hidden scroll;\n"]);return z=function(){return n},n}function Z(){var n=P(["\n  display: flex;\n  flex-direction: row-reverse;\n  background: ",";\n  padding: 16px;\n  border-radius: 0 0 5px 5px;\n  gap: 10px;\n"]);return Z=function(){return n},n}var k=(0,s.F4)(S()),D=s.ZP.div.withConfig({componentId:"sc-b363e4d8-0"})(R()),G=s.ZP.div.withConfig({componentId:"sc-b363e4d8-1"})(N(),k),L=s.ZP.h2.withConfig({componentId:"sc-b363e4d8-2"})(T(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),U=s.ZP.div.withConfig({componentId:"sc-b363e4d8-3"})(_(),(function(n){return n.theme.MODAL_BACKGROUND})),V=s.ZP.div.withConfig({componentId:"sc-b363e4d8-4"})(z(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.MODAL_BACKGROUND})),M=s.ZP.div.withConfig({componentId:"sc-b363e4d8-5"})(Z(),(function(n){return n.theme.BACKGROUND_SECONDARY})),J=function(n){var e=n.children,t=n.visible,i=n.setVisible;return t?(0,r.jsx)(D,{onClick:function(n){n.currentTarget===n.target&&i((function(n){return!n}))},children:(0,r.jsx)(G,{children:e})}):null};function B(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function K(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return B(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Y(){var n=F(["\n  background: ",";\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  line-height: 32px;\n  padding: 12px 8px;\n  width: 100%;\n  margin-bottom: 10px;\n  height: 30px;\n"]);return Y=function(){return n},n}function H(){var n=F(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return H=function(){return n},n}function X(){var n=F(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border: 2px dashed ",';\n  border-radius: 5px;\n  width: 100%;\n  padding: 16px;\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return X=function(){return n},n}function $(){var n=F(["\n  color: ",";\n"]);return $=function(){return n},n}function W(){var n=F(["\n  color: ",";\n  margin-bottom: 0;\n"]);return W=function(){return n},n}J.Header=function(n){var e=n.children;return(0,r.jsx)(U,{children:(0,r.jsx)(L,{children:e})})},J.Content=function(n){var e=n.children;return(0,r.jsx)(V,{children:e})},J.Controls=function(n){var e=n.children,t=n.setVisible;return(0,r.jsxs)(M,{children:[(0,r.jsx)(I.z,{onClick:function(){return t(!1)},children:"Close"}),e]})};var q=s.ZP.input.withConfig({componentId:"sc-741e717b-0"})(Y(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),Q=(0,s.ZP)(J.Content).withConfig({componentId:"sc-741e717b-1"})(H()),nn=s.ZP.label.withConfig({componentId:"sc-741e717b-2"})(X(),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY})),en=s.ZP.span.withConfig({componentId:"sc-741e717b-3"})($(),(function(n){return n.theme.INTERACTIVE_NORMAL})),tn=s.ZP.h3.withConfig({componentId:"sc-741e717b-4"})(W(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),rn=function(n){var e,t=n.visible,o=n.setVisible,u=(0,E.ZR)().dispatch,a=K(i.useState(""),2),s=a[0],l=a[1],f=K(i.useState(null),2),d=f[0],h=f[1];return i.useEffect((function(){return function(){h(null),l("")}}),[t]),(0,r.jsxs)(J,{visible:t,setVisible:o,children:[(0,r.jsx)(J.Header,{children:"Import JSON"}),(0,r.jsxs)(Q,{children:[(0,r.jsx)(q,{value:s,onChange:function(n){return l(n.target.value)},type:"url",placeholder:"URL of JSON to fetch"}),(0,r.jsxs)(nn,{children:[(0,r.jsx)("input",{onChange:function(n){var e;n.target.files&&h(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===d||void 0===d?void 0:d.name),(0,r.jsx)(p.aBR,{size:48}),(0,r.jsx)(tn,{children:"Click Here to Upload JSON"}),(0,r.jsx)(en,{children:null!==(e=null===d||void 0===d?void 0:d.name)&&void 0!==e?e:"None"})]})]}),(0,r.jsx)(J.Controls,{setVisible:o,children:(0,r.jsx)(I.z,{status:"SECONDARY",onClick:function(){if(s)return h(null),c.ZP.loading("Loading...",{id:"toastFetch"}),fetch(s).then((function(n){return n.json()})).then((function(n){u({type:C.n.SET_JSON,payload:JSON.stringify(n)}),o(!1)})).catch((function(){return c.ZP.error("Failed to fetch JSON!")})).finally((function(){return c.ZP.dismiss("toastFetch")}));if(d){var n=new FileReader;n.readAsText(d,"UTF-8"),n.onload=function(n){var e;u({type:C.n.SET_JSON,payload:null===(e=n.target)||void 0===e?void 0:e.result}),o(!1)}}},disabled:!(d||s),children:"Import"})})]})},on=function(n){var e=n.visible,t=n.setVisible,i=(0,E.ZR)().dispatch;return(0,r.jsxs)(J,{visible:e,setVisible:t,children:[(0,r.jsx)(J.Header,{children:"Clear JSON"}),(0,r.jsx)(J.Content,{children:"Are you sure you want to clear JSON?"}),(0,r.jsx)(J.Controls,{setVisible:t,children:(0,r.jsx)(I.z,{status:"DANGER",onClick:function(){i({type:C.n.SET_JSON,payload:"{}"}),c.ZP.success("Cleared JSON and removed from memory."),t(!1)},children:"Confirm"})})]})},cn=t(1485),un=t(2300);function an(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function sn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return an(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return an(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ln(){var n,e,t=(n=["\n  background: ",";\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  line-height: 32px;\n  padding: 12px 8px;\n  width: 100%;\n  margin-bottom: 10px;\n  height: 30px;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return ln=function(){return t},t}var fn=s.ZP.input.withConfig({componentId:"sc-9a90346e-0"})(ln(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),dn=function(n){var e=n.visible,t=n.setVisible,o=(0,E.ZR)().json,u=sn(i.useState(""),2),a=u[0],s=u[1],l=sn((0,cn.m9)(),2),f=(l[0],l[1]);i.useEffect((function(){var n=(0,un.cv)(o);s("https://jsonvisio.com/editor?json=".concat(n))}),[o]);return(0,r.jsxs)(J,{visible:e,setVisible:t,children:[(0,r.jsx)(J.Header,{children:"Create a Share Link"}),(0,r.jsx)(J.Content,{children:(0,r.jsx)(fn,{value:a,type:"url",readOnly:!0})}),(0,r.jsx)(J.Controls,{setVisible:t,children:(0,r.jsx)(I.z,{status:"SECONDARY",onClick:function(){f(a),c.ZP.success("Link copied to clipboard."),t(!1)},children:"Copy"})})]})},pn=t(155);function hn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function bn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return hn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return hn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function xn(){var n=mn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: fit-content;\n  background: ",";\n  padding: 4px;\n  border-right: 1px solid ",";\n"]);return xn=function(){return n},n}function vn(){var n=mn(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 600;\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n\n  ",";\n\n  svg {\n    padding: 8px;\n    vertical-align: middle;\n  }\n\n  a {\n    display: flex;\n  }\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n"]);return vn=function(){return n},n}function gn(){var n=mn(["\n  color: ",";\n"]);return gn=function(){return n},n}function jn(){var n=mn(["\n  transform: rotate(",");\n"]);return jn=function(){return n},n}function yn(){var n=mn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div:nth-child(n + 1) {\n    border-bottom: 1px solid ",";\n  }\n"]);return yn=function(){return n},n}function wn(){var n=mn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div,\n  a:nth-child(0) {\n    border-top: 1px solid ",";\n  }\n"]);return wn=function(){return n},n}function On(){var n=mn(["\n  color: ",";\n"]);return On=function(){return n},n}function Cn(){var n=mn(["\n  color: ",";\n"]);return Cn=function(){return n},n}var En=s.ZP.div.withConfig({componentId:"sc-d87f8689-0"})(xn(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),An=s.ZP.div.withConfig({componentId:"sc-d87f8689-1"})(vn(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){var e=n.theme;return n.beta&&"\n    &::after {\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      bottom: 0;\n      right: 0;\n      content: 'Beta';\n      font-size: 10px;\n      font-weight: 500;\n      background: ".concat(e.BLURPLE,";\n      border-radius: 4px;\n      color: ").concat(e.FULL_WHITE,";\n      padding: 2px;\n      height: 14px;\n      z-index: 0;\n    }\n  ")}),(function(n){return n.theme.INTERACTIVE_HOVER})),In=s.ZP.span.withConfig({componentId:"sc-d87f8689-2"})(gn(),(function(n){var e=n.theme;return n.secondary?e.INTERACTIVE_NORMAL:e.ORANGE})),Pn=(0,s.ZP)(l.S$H).withConfig({componentId:"sc-d87f8689-3"})(jn(),(function(n){var e=n.rotate;return"".concat(e,"deg")})),Sn=s.ZP.nav.withConfig({componentId:"sc-d87f8689-4"})(yn(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),Rn=s.ZP.nav.withConfig({componentId:"sc-d87f8689-5"})(wn(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),Nn=s.ZP.div.withConfig({componentId:"sc-d87f8689-6"})(On(),(function(n){return n.theme.FULL_WHITE}));var Tn=(0,s.ZP)(pn.iP_).withConfig({componentId:"sc-d87f8689-7"})(Cn(),(function(n){return n.theme.ORANGE})),_n=function(){var n,e=(0,E.ZR)(),t=e.json,o=e.settings,u=e.dispatch,s=(0,A.useRouter)(),l=bn(i.useState(!1),2),h=l[0],b=l[1],m=bn(i.useState(!1),2),x=m[0],v=m[1],g=bn(i.useState(!1),2),j=g[0],y=g[1];return(0,r.jsxs)(En,{children:[(0,r.jsxs)(Sn,{children:[(0,r.jsx)(a(),{passHref:!0,href:"/",children:(0,r.jsx)(An,{onClick:function(){return s.push("/")},children:(0,r.jsxs)(Nn,{children:[(0,r.jsx)(In,{children:"J"}),(0,r.jsx)(In,{secondary:!0,children:"V"})]})})}),(0,r.jsx)(O,{title:"Import File",children:(0,r.jsx)(An,{onClick:function(){return b(!0)},children:(0,r.jsx)(p.O1u,{})})}),(0,r.jsx)(O,{title:"Rotate Layout",children:(0,r.jsx)(An,{onClick:function(){return u({type:C.n.TOGGLE_LAYOUT})},children:(0,r.jsx)(Pn,{rotate:(n=o.layout,"LEFT"===n?90:"UP"===n?180:"RIGHT"===n?270:360)})})}),(0,r.jsx)(O,{title:o.expand?"Shrink Nodes":"Expand Nodes",children:(0,r.jsx)(An,{title:"Toggle Expand/Collapse",onClick:function(){u({type:C.n.TOGGLE_EXPAND}),(0,c.ZP)("".concat(o.expand?"Collapsed":"Expanded"," nodes."))},children:o.expand?(0,r.jsx)(d.DUJ,{}):(0,r.jsx)(d.q6J,{})})}),(0,r.jsx)(O,{title:"Clear JSON",children:(0,r.jsx)(An,{onClick:function(){return v(!0)},children:(0,r.jsx)(p.VPh,{})})}),(0,r.jsx)(O,{title:"Save JSON",children:(0,r.jsx)(An,{onClick:function(){var n=document.createElement("a"),e=new Blob([t],{type:"text/plain"});n.href=window.URL.createObjectURL(e),n.download="jsonvisio.json",n.click()},children:(0,r.jsx)(p.JMf,{})})}),(0,r.jsx)(O,{title:"Share",children:(0,r.jsx)(An,{onClick:function(){return y(!0)},children:(0,r.jsx)(p.uFt,{})})}),(0,r.jsx)(O,{title:"".concat(o.performance?"Disable":"Enable"," Performance Mode (Beta)"),children:(0,r.jsx)(An,{onClick:function(){var n=o.performance?"Disabled Performance Mode\nSearch Node & Save Image enabled.":"Enabled Performance Mode\nSearch Node & Save Image disabled.";(0,c.ZP)(n,{icon:(0,r.jsx)(Tn,{size:36}),duration:3e3}),u({type:C.n.TOGGLE_PERFORMANCE})},beta:!0,children:(0,r.jsx)(d.qvZ,{color:o.performance?"#0073FF":void 0})})})]}),(0,r.jsxs)(Rn,{children:[(0,r.jsx)(An,{children:(0,r.jsx)(a(),{href:"https://twitter.com/aykutsarach",children:(0,r.jsx)("a",{"aria-label":"Twitter",rel:"me",target:"_blank",children:(0,r.jsx)(p.h3E,{})})})}),(0,r.jsx)(An,{children:(0,r.jsx)(a(),{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,r.jsx)("a",{"aria-label":"GitHub",rel:"me",target:"_blank",children:(0,r.jsx)(p.RrF,{})})})}),(0,r.jsx)(An,{children:(0,r.jsx)(a(),{href:"https://www.patreon.com/aykutsarac",children:(0,r.jsx)("a",{"aria-label":"Patreon",rel:"me",target:"_blank",children:(0,r.jsx)(f.cu7,{})})})})]}),(0,r.jsx)(rn,{visible:h,setVisible:b}),(0,r.jsx)(on,{visible:x,setVisible:v}),(0,r.jsx)(dn,{visible:j,setVisible:y})]})};function zn(){var n,e,t=(n=["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 600;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return zn=function(){return t},t}var Zn=s.ZP.div.withConfig({componentId:"sc-132d618-0"})(zn(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),kn=function(){var n=(0,A.useRouter)();return(0,r.jsxs)(Zn,{children:["This app is not compatible with your device!",(0,r.jsx)(I.z,{className:"incompatible",onClick:function(){return n.push("/")},children:"Go Back"})]})},Dn=t(524);t(7786);function Gn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Ln(){var n=Gn(["\n  display: flex;\n  height: 100vh;\n"]);return Ln=function(){return n},n}function Un(){var n=Gn(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return Un=function(){return n},n}function Vn(){var n=Gn(["\n  position: relative !important;\n  display: flex;\n  background: ",';\n\n  div[class*="sash-module_sash"] {\n    z-index: 3;\n  }\n']);return Vn=function(){return n},n}var Mn=s.ZP.div.withConfig({componentId:"sc-60570b21-0"})(Ln()),Jn=s.ZP.div.withConfig({componentId:"sc-60570b21-1"})(Un()),Bn=(0,s.ZP)(Dn.o).withConfig({componentId:"sc-60570b21-2"})(Vn(),(function(n){return n.theme.BACKGROUND_SECONDARY})),Kn=t(9604),Fn=t(8485),Yn=t(5434);function Hn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Xn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function $n(){var n=Xn(["\n  z-index: 5;\n"]);return $n=function(){return n},n}function Wn(){var n=Xn(["\n  display: flex;\n  width: 100%;\n  padding: 4px 16px;\n  height: 36px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  pointer-events: ",";\n  background: ",";\n  box-shadow: 0 1px 0px ",";\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    box-shadow: none;\n  }\n"]);return Wn=function(){return n},n}function qn(){var n=Xn(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  gap: 10px;\n  font-size: 16px;\n"]);return qn=function(){return n},n}function Qn(){var n=Xn(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  font-size: 12px;\n  padding: 12px;\n  margin: 0;\n  word-wrap: break-word;\n  white-space: pre-line;\n"]);return Qn=function(){return n},n}var ne=s.ZP.div.withConfig({componentId:"sc-ac28434b-0"})($n()),ee=s.ZP.button.withConfig({componentId:"sc-ac28434b-1"})(Wn(),(function(n){var e=n.theme;return n.error?e.TEXT_DANGER:e.TEXT_POSITIVE}),(function(n){return!n.error&&"none"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.TEXT_DANGER})),te=s.ZP.span.withConfig({componentId:"sc-ac28434b-2"})(qn()),re=s.ZP.pre.withConfig({componentId:"sc-ac28434b-3"})(Qn(),(function(n){return n.theme.TEXT_DANGER}),(function(n){return n.theme.SILVER_DARK})),ie=function(n){var e=n.error,t=n.setError;return(0,r.jsxs)(ne,{children:[(0,r.jsxs)(ee,{error:!!e.message,onClick:function(){return t((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Hn(n,e,t[e])}))}return n}({},n,{isExpanded:!n.isExpanded})}))},children:[(0,r.jsxs)(te,{children:[e.message?(0,r.jsx)(Yn.pKf,{size:20}):(0,r.jsx)(Yn.S5G,{size:20}),e.message?"Error":"JSON Valid"]}),e.message&&(e.isExpanded?(0,r.jsx)(Yn.Faw,{size:22}):(0,r.jsx)(Yn.Yc6,{size:22}))]}),e.isExpanded&&e.message&&(0,r.jsx)(re,{children:e.message})]})};function oe(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function ce(){var n=oe(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 10;\n"]);return ce=function(){return n},n}function ue(){var n=oe(["\n  font-weight: 600;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return ue=function(){return n},n}function ae(){var n=oe(["\n  color: #faa81a;\n"]);return ae=function(){return n},n}function se(){var n=oe(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return se=function(){return n},n}var le=s.ZP.div.withConfig({componentId:"sc-40c9a20d-0"})(ce(),(function(n){return n.theme.BLACK_DARK})),fe=s.ZP.h2.withConfig({componentId:"sc-40c9a20d-1"})(ue()),de=s.ZP.span.withConfig({componentId:"sc-40c9a20d-2"})(ae()),pe=s.ZP.div.withConfig({componentId:"sc-40c9a20d-3"})(se()),he=function(n){var e=n.message;return(0,r.jsxs)(le,{children:[(0,r.jsxs)(fe,{children:[(0,r.jsx)(de,{children:"JSON"})," Visio"]}),(0,r.jsx)(pe,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})};function be(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function me(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function xe(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){me(n,e,t[e])}))}return n}function ve(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return be(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return be(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function je(){var n=ge(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  user-select: none;\n"]);return je=function(){return n},n}function ye(){var n=ge(["\n  display: grid;\n  height: calc(100vh - 36px);\n  grid-template-columns: 100%;\n  grid-template-rows: minmax(0, 1fr);\n"]);return ye=function(){return n},n}Kn._m.config({paths:{vs:"/monaco-editor/min/vs"}});var we=s.ZP.div.withConfig({componentId:"sc-86762aac-0"})(je()),Oe={formatOnPaste:!0,minimap:{enabled:!1}},Ce=s.ZP.div.withConfig({componentId:"sc-86762aac-1"})(ye()),Ee=function(){var n=(0,E.ZR)(),e=n.json,t=n.settings,o=n.dispatch,c=ve(i.useState(""),2),u=c[0],a=c[1],s=ve(i.useState({message:"",isExpanded:!0}),2),l=s[0],f=s[1],d=i.useMemo((function(){return t.lightmode?"light":"vs-dark"}),[t.lightmode]);return i.useEffect((function(){a(JSON.stringify(JSON.parse(e),null,2))}),[e]),i.useEffect((function(){var n=setTimeout((function(){try{if(!u)return f((function(n){return xe({},n,{message:""})})),o({type:C.n.SET_JSON,payload:"[]"});(0,Fn.Z)(u),o({type:C.n.SET_JSON,payload:u}),f((function(n){return xe({},n,{message:""})}))}catch(n){f((function(e){return xe({},e,{message:n.message})}))}}),1500);return function(){return clearTimeout(n)}}),[u,o]),(0,r.jsxs)(we,{children:[(0,r.jsx)(ie,{error:l,setError:f}),(0,r.jsx)(Ce,{children:(0,r.jsx)(Kn.ZP,{height:"100%",defaultLanguage:"json",value:u,theme:d,options:Oe,loading:(0,r.jsx)(he,{message:"Loading Editor..."}),onChange:function(n){return a(n)}})})]})},Ae=(0,t(5152).default)((function(){return Promise.all([t.e(556),t.e(434),t.e(987),t.e(240),t.e(395)]).then(t.bind(t,8395))}),{loadableGenerated:{webpack:function(){return[8395]}},ssr:!1}),Ie=function(){var n=(0,E.ZR)().settings;return(0,r.jsxs)(Bn,{children:[(0,r.jsx)(Dn.o.Pane,{preferredSize:400,minSize:300,maxSize:600,visible:!n.hideEditor,children:(0,r.jsx)(Ee,{})}),(0,r.jsx)(Dn.o.Pane,{children:(0,r.jsx)(Ae,{})})]})},Pe=function(){return(0,r.jsxs)(Mn,{children:[(0,r.jsx)(_n,{}),(0,r.jsx)(Jn,{children:(0,r.jsx)(Ie,{})}),(0,r.jsx)(kn,{})]})};function Se(){var n,e,t=(n=[""],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Se=function(){return t},t}var Re=s.ZP.div.withConfig({componentId:"sc-d6876296-0"})(Se()),Ne=function(){return(0,r.jsxs)(Re,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Editor | JSON Visio"}),(0,r.jsx)("meta",{name:"description",content:"View your JSON data in graphs instantly."})]}),(0,r.jsx)(Pe,{})]})}}},function(n){n.O(0,[774,90,937,228,260,955,617,831,951,888,179],(function(){return e=2919,n(n.s=e);var e}));var e=n.O();_N_E=e}]);