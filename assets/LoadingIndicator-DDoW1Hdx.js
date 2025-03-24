import{c as d,g as w,a as R,s as T,b as A,S as $}from"./Stack-BZ4gPDOg.js";import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-Ca8FO3x4.js";import{T as N,B as I}from"./Close-DecDHrN0.js";import{m as j,b as M,C as L}from"./IconButton-Oqcd_hC8.js";import{u as _,a as U}from"./DefaultPropsProvider-7SHxphPT.js";import{c as g,k as y}from"./emotion-react.browser.esm-HaEZ-V4Z.js";import{B as h}from"./Box-4S6i-Boh.js";function te(e,n){if(!e)return n;if(typeof e=="function"||typeof n=="function")return r=>{const i=typeof n=="function"?n(r):n,s=typeof e=="function"?e({...r,...i}):e,c=d(r==null?void 0:r.className,i==null?void 0:i.className,s==null?void 0:s.className);return{...i,...s,...!!c&&{className:c},...(i==null?void 0:i.style)&&(s==null?void 0:s.style)&&{style:{...i.style,...s.style}},...(i==null?void 0:i.sx)&&(s==null?void 0:s.sx)&&{sx:[...Array.isArray(i.sx)?i.sx:[i.sx],...Array.isArray(s.sx)?s.sx:[s.sx]]}}};const a=n,t=d(a==null?void 0:a.className,e==null?void 0:e.className);return{...n,...e,...!!t&&{className:t},...(a==null?void 0:a.style)&&(e==null?void 0:e.style)&&{style:{...a.style,...e.style}},...(a==null?void 0:a.sx)&&(e==null?void 0:e.sx)&&{sx:[...Array.isArray(a.sx)?a.sx:[a.sx],...Array.isArray(e.sx)?e.sx:[e.sx]]}}}function B(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function F(e){return parseFloat(e)}function q(e){return w("MuiSkeleton",e)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const z=e=>{const{classes:n,variant:a,animation:t,hasChildren:r,width:i,height:s}=e;return A({root:["root",a,t,r&&"withChildren",r&&!i&&"fitContent",r&&!s&&"heightAuto"]},q,n)},l=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,m=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,X=typeof l!="string"?g`
        animation: ${l} 2s ease-in-out 0.5s infinite;
      `:null,D=typeof m!="string"?g`
        &::after {
          animation: ${m} 2s linear 0.5s infinite;
        }
      `:null,E=T("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,n[a.variant],a.animation!==!1&&n[a.animation],a.hasChildren&&n.withChildren,a.hasChildren&&!a.width&&n.fitContent,a.hasChildren&&!a.height&&n.heightAuto]}})(j(({theme:e})=>{const n=B(e.shape.borderRadius)||"px",a=F(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:U(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:t})=>t.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:t})=>t.hasChildren&&!t.width,style:{maxWidth:"fit-content"}},{props:({ownerState:t})=>t.hasChildren&&!t.height,style:{height:"auto"}},{props:{animation:"pulse"},style:X||{animation:`${l} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:D||{"&::after":{animation:`${m} 2s linear 0.5s infinite`}}}]}})),b=u.forwardRef(function(n,a){const t=_({props:n,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:s="span",height:c,style:v,variant:k="text",width:C,...f}=t,p={...t,animation:r,component:s,variant:k,hasChildren:!!f.children},x=z(p);return o.jsx(E,{as:s,ref:a,className:d(x.root,i),ownerState:p,...f,style:{width:C,height:c,...v}})}),W=u.forwardRef(({children:e,loading:n,...a},t)=>o.jsx(N,{ref:t,color:"primary.main",...a,sx:{display:"flex",fontSize:"1.25rem",fontWeight:"bold","&:before":{content:'""',borderLeft:"5px solid",borderRadius:20,borderColor:"primary.main",mr:1},...a==null?void 0:a.sx},children:n?o.jsx(b,{variant:"text",sx:{width:"100%"}}):e}));W.__docgenInfo={description:"`DecorativeTitle` 在標題前加上裝飾線。\n\n@example\n\n```tsx\n<DecorativeTitle>Decorative Title</DecorativeTitle>\n```",methods:[],displayName:"DecorativeTitle",props:{loading:{required:!1,tsType:{name:"boolean"},description:"If `true`, the title will show loading effect."}}};function Y({count:e,height:n}){return o.jsx($,{spacing:2,component:"div","aria-label":"loading content",children:Array(e||3).fill(null).map((a,t)=>t).map(a=>o.jsx(b,{variant:"rounded",height:n||40},a))})}Y.__docgenInfo={description:`用來顯示載入中的內容，通常用在列表或表格中。

預設會顯示 3 個長條狀 Skeleton 元件。

參考 [Material-UI Skeleton](https://mui.com/material-ui/react-skeleton/)`,methods:[],displayName:"LoadingContent",props:{count:{required:!1,tsType:{name:"number"},description:`The Skeleton count.

@default 3`},height:{required:!1,tsType:{name:"number"},description:`Each Skeleton height.

@default 40`}}};function K({sx:e,children:n=o.jsx(L,{}),...a}){return o.jsx(I,{sx:M({zIndex:t=>t.zIndex.drawer+1e3},e),...a,children:n})}K.__docgenInfo={description:"`LoadingFullScreen` 全螢幕讀取中，通常用於非同步操作時提示使用者等待。\n\n參考 [Material-UI Backdrop](https://mui.com/material-ui/react-backdrop/)",methods:[],displayName:"LoadingFullScreen",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The loading indicator of the backdrop.\n\n@default\n\n```jsx\n<CircularProgress />\n```",defaultValue:{value:"<CircularProgress />",computed:!1}}}};const G=e=>e<3?3:e>5?5:e,O=(e,n)=>({animation:`bounce-loading ${e}s ${n*.07}s infinite ease-in-out`,animationFillMode:"both","@keyframes bounce-loading":{"33%":{transform:"translateY(10px)"},"66%":{transform:"translateY(-10px)"},"100%":{transform:"translateY(0)"}}}),H=(e,n)=>({animation:`pulse-loading ${e}s ${n*.12/1}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,animationFillMode:"both","@keyframes pulse-loading":{"0%":{transform:"scale(1)",opacity:1},"50%":{transform:"scale(0.1)",opacity:.7},"80%":{transform:"scale(1)",opacity:1}}}),J=(e,n)=>({animation:`beat-loading ${e}s ${n%2?0:`${.35/1}`}s infinite linear`,animationFillMode:"both","@keyframes beat-loading":{"50%":{transform:"scale(0.75)",opacity:.2},"100%":{transform:"scale(1)",opacity:1}}}),Q=u.forwardRef(({type:e="bounce",frequency:n=.75,count:a=3},t)=>o.jsx(h,{ref:t,display:"flex",alignItems:"center",justifyContent:"center","data-testid":"loading-indicator",children:Array.from({length:G(a)}).map((r,i)=>o.jsx(h,{sx:{margin:"2px",width:"12px",height:"12px",bgcolor:"primary.main",borderRadius:"50%",...e==="bounce"&&O(n,i),...e==="pulse"&&H(n,i),...e==="beat"&&J(n,i)}},i))}));Q.__docgenInfo={description:"`LoadingIndicator` 是一個用來顯示載入中的元件。",methods:[],displayName:"GwLoadingIndicator",props:{type:{required:!1,tsType:{name:"union",raw:"'bounce' | 'pulse' | 'beat'",elements:[{name:"literal",value:"'bounce'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'beat'"}]},description:`類型

@default 'bounce'`,defaultValue:{value:"'bounce'",computed:!1}},count:{required:!1,tsType:{name:"number"},description:`顆數

@default 3`,defaultValue:{value:"3",computed:!1}},frequency:{required:!1,tsType:{name:"number"},description:`頻率 (s)

@default 0.75`,defaultValue:{value:"0.75",computed:!1}}}};export{W as D,Q as L,b as S,Y as a,K as b,te as m};
