const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BoYAvTS8.js","./index-B15s1MKD.js"])))=>i.map(i=>d[i]);
import{_ as l}from"./iframe-CgNy_aVg.js";import{r as s,R as n}from"./index-B15s1MKD.js";import{H as p,A as h,C as E,D as d}from"./index--0n0C8Bk.js";import{c as R}from"./client-IkApllXZ.js";import"./jsx-runtime-C-_spy54.js";import"./index-61hMdujB.js";import"./index-Cu4lwwaE.js";import"./index-DA6FO7Ty.js";import"./index-ogSvIofg.js";var i=new Map;function f(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var v=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var w=async(e,t,r)=>{let o=await x(t,r);if(f()){o.render(e);return}let{promise:a,resolve:u}=Promise.withResolvers();return o.render(s.createElement(v,{callback:u},e)),a},_=(e,t)=>{let r=i.get(e);r&&(r.unmount(),i.delete(e))},x=async(e,t)=>{let r=i.get(e);return r||(r=R.createRoot(e,t),i.set(e,r)),r},g={code:E,a:h,...p},y=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},S=class{constructor(){this.render=async(e,t,r)=>{let o={...g,...t==null?void 0:t.components},a=d;return new Promise((u,c)=>{l(async()=>{const{MDXProvider:m}=await import("./index-BoYAvTS8.js");return{MDXProvider:m}},__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:m})=>w(n.createElement(y,{showException:c,key:Math.random()},n.createElement(m,{components:o},n.createElement(a,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{_(e)}}};export{S as DocsRenderer,g as defaultComponents};
