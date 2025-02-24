import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-Ca8FO3x4.js";import{T as C,B as w}from"./Close-B5DsKkKH.js";import{g as S,a as R,u as T,s as $,c as I,d as j,b as M,S as A}from"./Stack-CvuCBITj.js";import{m as L,d as h,k as g,b as _,C as U}from"./IconButton-CangU_Dd.js";import{B as f}from"./Box-BZPCmIMk.js";function D(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(e){return parseFloat(e)}function B(e){return S("MuiSkeleton",e)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const F=e=>{const{classes:t,variant:a,animation:n,hasChildren:r,width:i,height:s}=e;return j({root:["root",a,n,r&&"withChildren",r&&!i&&"fitContent",r&&!s&&"heightAuto"]},B,t)},l=g`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,d=g`
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
`,q=typeof l!="string"?h`
        animation: ${l} 2s ease-in-out 0.5s infinite;
      `:null,V=typeof d!="string"?h`
        &::after {
          animation: ${d} 2s linear 0.5s infinite;
        }
      `:null,z=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(L(({theme:e})=>{const t=D(e.shape.borderRadius)||"px",a=N(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:M(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${t}/${Math.round(a/.6*10)/10}${t}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:q||{animation:`${l} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:V||{"&::after":{animation:`${d} 2s linear 0.5s infinite`}}}]}})),b=c.forwardRef(function(t,a){const n=T({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:s="span",height:p,style:y,variant:v="text",width:x,...u}=n,m={...n,animation:r,component:s,variant:v,hasChildren:!!u.children},k=F(m);return o.jsx(z,{as:s,ref:a,className:I(k.root,i),ownerState:m,...u,style:{width:x,height:p,...y}})}),P=c.forwardRef(({children:e,loading:t,...a},n)=>o.jsx(C,{ref:n,color:"primary.main",...a,sx:{display:"flex",fontSize:"1.25rem",fontWeight:"bold","&:before":{content:'""',borderLeft:"5px solid",borderRadius:20,borderColor:"primary.main",mr:1},...a==null?void 0:a.sx},children:t?o.jsx(b,{variant:"text",sx:{width:"100%"}}):e}));P.__docgenInfo={description:"`DecorativeTitle` 在標題前加上裝飾線。\n\n@example\n\n```tsx\n<DecorativeTitle>Decorative Title</DecorativeTitle>\n```",methods:[],displayName:"DecorativeTitle",props:{loading:{required:!1,tsType:{name:"boolean"},description:"If `true`, the title will show loading effect."}}};function X({count:e,height:t}){return o.jsx(A,{spacing:2,component:"div","aria-label":"loading content",children:Array(e||3).fill(null).map((a,n)=>n).map(a=>o.jsx(b,{variant:"rounded",height:t||40},a))})}X.__docgenInfo={description:`用來顯示載入中的內容，通常用在列表或表格中。

預設會顯示 3 個長條狀 Skeleton 元件。

參考 [Material-UI Skeleton](https://mui.com/material-ui/react-skeleton/)`,methods:[],displayName:"LoadingContent",props:{count:{required:!1,tsType:{name:"number"},description:`The Skeleton count.

@default 3`},height:{required:!1,tsType:{name:"number"},description:`Each Skeleton height.

@default 40`}}};function E({sx:e,children:t=o.jsx(U,{}),...a}){return o.jsx(w,{sx:_({zIndex:n=>n.zIndex.drawer+1e3},e),...a,children:t})}E.__docgenInfo={description:"`LoadingFullScreen` 全螢幕讀取中，通常用於非同步操作時提示使用者等待。\n\n參考 [Material-UI Backdrop](https://mui.com/material-ui/react-backdrop/)",methods:[],displayName:"LoadingFullScreen",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The loading indicator of the backdrop.\n\n@default\n\n```jsx\n<CircularProgress />\n```",defaultValue:{value:"<CircularProgress />",computed:!1}}}};const W=e=>e<3?3:e>5?5:e,Y=(e,t)=>({animation:`bounce-loading ${e}s ${t*.07}s infinite ease-in-out`,animationFillMode:"both","@keyframes bounce-loading":{"33%":{transform:"translateY(10px)"},"66%":{transform:"translateY(-10px)"},"100%":{transform:"translateY(0)"}}}),K=(e,t)=>({animation:`pulse-loading ${e}s ${t*.12/1}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,animationFillMode:"both","@keyframes pulse-loading":{"0%":{transform:"scale(1)",opacity:1},"50%":{transform:"scale(0.1)",opacity:.7},"80%":{transform:"scale(1)",opacity:1}}}),G=(e,t)=>({animation:`beat-loading ${e}s ${t%2?0:`${.35/1}`}s infinite linear`,animationFillMode:"both","@keyframes beat-loading":{"50%":{transform:"scale(0.75)",opacity:.2},"100%":{transform:"scale(1)",opacity:1}}}),O=c.forwardRef(({type:e="bounce",frequency:t=.75,count:a=3},n)=>o.jsx(f,{ref:n,display:"flex",alignItems:"center",justifyContent:"center","data-testid":"loading-indicator",children:Array.from({length:W(a)}).map((r,i)=>o.jsx(f,{sx:{margin:"2px",width:"12px",height:"12px",bgcolor:"primary.main",borderRadius:"50%",...e==="bounce"&&Y(t,i),...e==="pulse"&&K(t,i),...e==="beat"&&G(t,i)}},i))}));O.__docgenInfo={description:"`LoadingIndicator` 是一個用來顯示載入中的元件。",methods:[],displayName:"GwLoadingIndicator",props:{type:{required:!1,tsType:{name:"union",raw:"'bounce' | 'pulse' | 'beat'",elements:[{name:"literal",value:"'bounce'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'beat'"}]},description:`類型

@default 'bounce'`,defaultValue:{value:"'bounce'",computed:!1}},count:{required:!1,tsType:{name:"number"},description:`顆數

@default 3`,defaultValue:{value:"3",computed:!1}},frequency:{required:!1,tsType:{name:"number"},description:`頻率 (s)

@default 0.75`,defaultValue:{value:"0.75",computed:!1}}}};export{P as D,O as L,b as S,X as a,E as b};
