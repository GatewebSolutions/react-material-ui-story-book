import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{c as Oe,r as A}from"./index-CP2yOfOm.js";import{c as ne,I as re,b as Fe}from"./IconButton-C7TZo3wP.js";import{M as xe,T as ke,C as Re}from"./Close-BIYtYFSH.js";import{B as M}from"./Box-CKyb1BTN.js";import{S as qe}from"./Stack-DfZoL78O.js";const Pe=ne(m.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),Ne=ne(m.jsx("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined"),je=ne(m.jsx("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download"),Me=ne(m.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew"),Le=ne(m.jsx("path",{d:"m20.41 8.41-4.83-4.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.42M7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z"}),"TextSnippet"),Ue=ne(m.jsx("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"}),"VisibilityOutlined");var Ae={exports:{}};(function(n,e){(function(t,a){n.exports=a()})(Oe,function(){var t=1e3,a=6e4,r=36e5,d="millisecond",p="second",y="minute",R="hour",b="day",k="week",T="month",U="quarter",f="year",S="date",le="Invalid Date",pe=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ae=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(u){var l=["th","st","nd","rd"],i=u%100;return"["+u+(l[(i-20)%10]||l[i]||l[0])+"]"}},N=function(u,l,i){var s=String(u);return!s||s.length>=l?u:""+Array(l+1-s.length).join(i)+u},D={s:N,z:function(u){var l=-u.utcOffset(),i=Math.abs(l),s=Math.floor(i/60),o=i%60;return(l<=0?"+":"-")+N(s,2,"0")+":"+N(o,2,"0")},m:function u(l,i){if(l.date()<i.date())return-u(i,l);var s=12*(i.year()-l.year())+(i.month()-l.month()),o=l.clone().add(s,T),c=i-o<0,h=l.clone().add(s+(c?-1:1),T);return+(-(s+(i-o)/(c?o-h:h-o))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(u){return{M:T,y:f,w:k,d:b,D:S,h:R,m:y,s:p,ms:d,Q:U}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(u){return u===void 0}},J="en",F={};F[J]=X;var E="$isDayjsObject",ge=function(u){return u instanceof de||!(!u||!u[E])},se=function u(l,i,s){var o;if(!l)return J;if(typeof l=="string"){var c=l.toLowerCase();F[c]&&(o=c),i&&(F[c]=i,o=c);var h=l.split("-");if(!o&&h.length>1)return u(h[0])}else{var v=l.name;F[v]=l,o=v}return!s&&o&&(J=o),o||!s&&J},C=function(u,l){if(ge(u))return u.clone();var i=typeof l=="object"?l:{};return i.date=u,i.args=arguments,new de(i)},w=D;w.l=se,w.i=ge,w.w=function(u,l){return C(u,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var de=function(){function u(i){this.$L=se(i.locale,null,!0),this.parse(i),this.$x=this.$x||i.x||{},this[E]=!0}var l=u.prototype;return l.parse=function(i){this.$d=function(s){var o=s.date,c=s.utc;if(o===null)return new Date(NaN);if(w.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var h=o.match(pe);if(h){var v=h[2]-1||0,q=(h[7]||"0").substring(0,3);return c?new Date(Date.UTC(h[1],v,h[3]||1,h[4]||0,h[5]||0,h[6]||0,q)):new Date(h[1],v,h[3]||1,h[4]||0,h[5]||0,h[6]||0,q)}}return new Date(o)}(i),this.init()},l.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},l.$utils=function(){return w},l.isValid=function(){return this.$d.toString()!==le},l.isSame=function(i,s){var o=C(i);return this.startOf(s)<=o&&o<=this.endOf(s)},l.isAfter=function(i,s){return C(i)<this.startOf(s)},l.isBefore=function(i,s){return this.endOf(s)<C(i)},l.$g=function(i,s,o){return w.u(i)?this[s]:this.set(o,i)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(i,s){var o=this,c=!!w.u(s)||s,h=w.p(i),v=function(Q,P){var _=w.w(o.$u?Date.UTC(o.$y,P,Q):new Date(o.$y,P,Q),o);return c?_:_.endOf(b)},q=function(Q,P){return w.w(o.toDate()[Q].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(P)),o)},O=this.$W,x=this.$M,j=this.$D,ee="set"+(this.$u?"UTC":"");switch(h){case f:return c?v(1,0):v(31,11);case T:return c?v(1,x):v(0,x+1);case k:var G=this.$locale().weekStart||0,te=(O<G?O+7:O)-G;return v(c?j-te:j+(6-te),x);case b:case S:return q(ee+"Hours",0);case R:return q(ee+"Minutes",1);case y:return q(ee+"Seconds",2);case p:return q(ee+"Milliseconds",3);default:return this.clone()}},l.endOf=function(i){return this.startOf(i,!1)},l.$set=function(i,s){var o,c=w.p(i),h="set"+(this.$u?"UTC":""),v=(o={},o[b]=h+"Date",o[S]=h+"Date",o[T]=h+"Month",o[f]=h+"FullYear",o[R]=h+"Hours",o[y]=h+"Minutes",o[p]=h+"Seconds",o[d]=h+"Milliseconds",o)[c],q=c===b?this.$D+(s-this.$W):s;if(c===T||c===f){var O=this.clone().set(S,1);O.$d[v](q),O.init(),this.$d=O.set(S,Math.min(this.$D,O.daysInMonth())).$d}else v&&this.$d[v](q);return this.init(),this},l.set=function(i,s){return this.clone().$set(i,s)},l.get=function(i){return this[w.p(i)]()},l.add=function(i,s){var o,c=this;i=Number(i);var h=w.p(s),v=function(x){var j=C(c);return w.w(j.date(j.date()+Math.round(x*i)),c)};if(h===T)return this.set(T,this.$M+i);if(h===f)return this.set(f,this.$y+i);if(h===b)return v(1);if(h===k)return v(7);var q=(o={},o[y]=a,o[R]=r,o[p]=t,o)[h]||1,O=this.$d.getTime()+i*q;return w.w(O,this)},l.subtract=function(i,s){return this.add(-1*i,s)},l.format=function(i){var s=this,o=this.$locale();if(!this.isValid())return o.invalidDate||le;var c=i||"YYYY-MM-DDTHH:mm:ssZ",h=w.z(this),v=this.$H,q=this.$m,O=this.$M,x=o.weekdays,j=o.months,ee=o.meridiem,G=function(P,_,ie,ue){return P&&(P[_]||P(s,c))||ie[_].slice(0,ue)},te=function(P){return w.s(v%12||12,P,"0")},Q=ee||function(P,_,ie){var ue=P<12?"AM":"PM";return ie?ue.toLowerCase():ue};return c.replace(ae,function(P,_){return _||function(ie){switch(ie){case"YY":return String(s.$y).slice(-2);case"YYYY":return w.s(s.$y,4,"0");case"M":return O+1;case"MM":return w.s(O+1,2,"0");case"MMM":return G(o.monthsShort,O,j,3);case"MMMM":return G(j,O);case"D":return s.$D;case"DD":return w.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return G(o.weekdaysMin,s.$W,x,2);case"ddd":return G(o.weekdaysShort,s.$W,x,3);case"dddd":return x[s.$W];case"H":return String(v);case"HH":return w.s(v,2,"0");case"h":return te(1);case"hh":return te(2);case"a":return Q(v,q,!0);case"A":return Q(v,q,!1);case"m":return String(q);case"mm":return w.s(q,2,"0");case"s":return String(s.$s);case"ss":return w.s(s.$s,2,"0");case"SSS":return w.s(s.$ms,3,"0");case"Z":return h}return null}(P)||h.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(i,s,o){var c,h=this,v=w.p(s),q=C(i),O=(q.utcOffset()-this.utcOffset())*a,x=this-q,j=function(){return w.m(h,q)};switch(v){case f:c=j()/12;break;case T:c=j();break;case U:c=j()/3;break;case k:c=(x-O)/6048e5;break;case b:c=(x-O)/864e5;break;case R:c=x/r;break;case y:c=x/a;break;case p:c=x/t;break;default:c=x}return o?c:w.a(c)},l.daysInMonth=function(){return this.endOf(T).$D},l.$locale=function(){return F[this.$L]},l.locale=function(i,s){if(!i)return this.$L;var o=this.clone(),c=se(i,s,!0);return c&&(o.$L=c),o},l.clone=function(){return w.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},u}(),ye=de.prototype;return C.prototype=ye,[["$ms",d],["$s",p],["$m",y],["$H",R],["$W",b],["$M",T],["$y",f],["$D",S]].forEach(function(u){ye[u[1]]=function(l){return this.$g(l,u[0],u[1])}}),C.extend=function(u,l){return u.$i||(u(l,de,C),u.$i=!0),C},C.locale=se,C.isDayjs=ge,C.unix=function(u){return C(1e3*u)},C.en=F[J],C.Ls=F,C.p={},C})})(Ae);const Te=(n,e=new Date().getTime().toString(),t)=>{const a=typeof n=="string"?n:URL.createObjectURL(n),r=document.createElement("a");r.id=`download-${new Date().getTime()}`,document.body.appendChild(r),r.download=e,r.href=a,r.target="_blank",r.click()},Se=(n,e)=>{if(e.length===0)return!0;const t=n.type,a=n.name.includes(".")?`.${n.name.split(".").pop().toLowerCase()}`:"";return e.some(r=>r.startsWith(".")?a===r.toLowerCase():r===t?!0:r.endsWith("/*")?r.split("/")[0]===t.split("/")[0]:!1)},Qe=n=>typeof n!="number"?"":n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),$e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],Xe=(n,e=0)=>{if(n===0)return"0 Bytes";const t=1024,a=Math.floor(Math.log(n)/Math.log(t));return`${(n/t**a).toFixed(e)} ${$e[a]}`},en=({value:n,defaultValue:e})=>{if(n===void 0&&e===void 0)throw new Error("Either `value` or `defaultValue` must be provided.");const t=n!==void 0,[a,r]=A.useState(e),d=A.useCallback(y=>{t||r(y)},[t]);return[t?n:a,d]};function nn(n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}const B=Symbol.for("@ts-pattern/matcher"),We=Symbol.for("@ts-pattern/isVariadic"),he="@ts-pattern/anonymous-select-key",we=n=>!!(n&&typeof n=="object"),ce=n=>n&&!!n[B],z=(n,e,t)=>{if(ce(n)){const a=n[B](),{matched:r,selections:d}=a.match(e);return r&&d&&Object.keys(d).forEach(p=>t(p,d[p])),r}if(we(n)){if(!we(e))return!1;if(Array.isArray(n)){if(!Array.isArray(e))return!1;let a=[],r=[],d=[];for(const p of n.keys()){const y=n[p];ce(y)&&y[We]?d.push(y):d.length?r.push(y):a.push(y)}if(d.length){if(d.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(e.length<a.length+r.length)return!1;const p=e.slice(0,a.length),y=r.length===0?[]:e.slice(-r.length),R=e.slice(a.length,r.length===0?1/0:-r.length);return a.every((b,k)=>z(b,p[k],t))&&r.every((b,k)=>z(b,y[k],t))&&(d.length===0||z(d[0],R,t))}return n.length===e.length&&n.every((p,y)=>z(p,e[y],t))}return Reflect.ownKeys(n).every(a=>{const r=n[a];return(a in e||ce(d=r)&&d[B]().matcherType==="optional")&&z(r,e[a],t);var d})}return Object.is(e,n)},Z=n=>{var e,t,a;return we(n)?ce(n)?(e=(t=(a=n[B]()).getSelectionKeys)==null?void 0:t.call(a))!=null?e:[]:Array.isArray(n)?oe(n,Z):oe(Object.values(n),Z):[]},oe=(n,e)=>n.reduce((t,a)=>t.concat(e(a)),[]);function L(n){return Object.assign(n,{optional:()=>ze(n),and:e=>I(n,e),or:e=>Be(n,e),select:e=>e===void 0?Ie(n):Ie(e,n)})}function ze(n){return L({[B]:()=>({match:e=>{let t={};const a=(r,d)=>{t[r]=d};return e===void 0?(Z(n).forEach(r=>a(r,void 0)),{matched:!0,selections:t}):{matched:z(n,e,a),selections:t}},getSelectionKeys:()=>Z(n),matcherType:"optional"})})}function I(...n){return L({[B]:()=>({match:e=>{let t={};const a=(r,d)=>{t[r]=d};return{matched:n.every(r=>z(r,e,a)),selections:t}},getSelectionKeys:()=>oe(n,Z),matcherType:"and"})})}function Be(...n){return L({[B]:()=>({match:e=>{let t={};const a=(r,d)=>{t[r]=d};return oe(n,Z).forEach(r=>a(r,void 0)),{matched:n.some(r=>z(r,e,a)),selections:t}},getSelectionKeys:()=>oe(n,Z),matcherType:"or"})})}function g(n){return{[B]:()=>({match:e=>({matched:!!n(e)})})}}function Ie(...n){const e=typeof n[0]=="string"?n[0]:void 0,t=n.length===2?n[1]:typeof n[0]=="string"?void 0:n[0];return L({[B]:()=>({match:a=>{let r={[e??he]:a};return{matched:t===void 0||z(t,a,(d,p)=>{r[d]=p}),selections:r}},getSelectionKeys:()=>[e??he].concat(t===void 0?[]:Z(t))})})}function $(n){return typeof n=="number"}function V(n){return typeof n=="string"}function H(n){return typeof n=="bigint"}L(g(function(n){return!0}));const Y=n=>Object.assign(L(n),{startsWith:e=>{return Y(I(n,(t=e,g(a=>V(a)&&a.startsWith(t)))));var t},endsWith:e=>{return Y(I(n,(t=e,g(a=>V(a)&&a.endsWith(t)))));var t},minLength:e=>Y(I(n,(t=>g(a=>V(a)&&a.length>=t))(e))),length:e=>Y(I(n,(t=>g(a=>V(a)&&a.length===t))(e))),maxLength:e=>Y(I(n,(t=>g(a=>V(a)&&a.length<=t))(e))),includes:e=>{return Y(I(n,(t=e,g(a=>V(a)&&a.includes(t)))));var t},regex:e=>{return Y(I(n,(t=e,g(a=>V(a)&&!!a.match(t)))));var t}});Y(g(V));const W=n=>Object.assign(L(n),{between:(e,t)=>W(I(n,((a,r)=>g(d=>$(d)&&a<=d&&r>=d))(e,t))),lt:e=>W(I(n,(t=>g(a=>$(a)&&a<t))(e))),gt:e=>W(I(n,(t=>g(a=>$(a)&&a>t))(e))),lte:e=>W(I(n,(t=>g(a=>$(a)&&a<=t))(e))),gte:e=>W(I(n,(t=>g(a=>$(a)&&a>=t))(e))),int:()=>W(I(n,g(e=>$(e)&&Number.isInteger(e)))),finite:()=>W(I(n,g(e=>$(e)&&Number.isFinite(e)))),positive:()=>W(I(n,g(e=>$(e)&&e>0))),negative:()=>W(I(n,g(e=>$(e)&&e<0)))});W(g($));const K=n=>Object.assign(L(n),{between:(e,t)=>K(I(n,((a,r)=>g(d=>H(d)&&a<=d&&r>=d))(e,t))),lt:e=>K(I(n,(t=>g(a=>H(a)&&a<t))(e))),gt:e=>K(I(n,(t=>g(a=>H(a)&&a>t))(e))),lte:e=>K(I(n,(t=>g(a=>H(a)&&a<=t))(e))),gte:e=>K(I(n,(t=>g(a=>H(a)&&a>=t))(e))),positive:()=>K(I(n,g(e=>H(e)&&e>0))),negative:()=>K(I(n,g(e=>H(e)&&e<0)))});K(g(H));L(g(function(n){return typeof n=="boolean"}));L(g(function(n){return typeof n=="symbol"}));L(g(function(n){return n==null}));L(g(function(n){return n!=null}));class De extends Error{constructor(e){let t;try{t=JSON.stringify(e)}catch{t=e}super(`Pattern matching error: no pattern matches value ${t}`),this.input=void 0,this.input=e}}const be={matched:!1,value:void 0};function Ee(n){return new fe(n,be)}class fe{constructor(e,t){this.input=void 0,this.state=void 0,this.input=e,this.state=t}with(...e){if(this.state.matched)return this;const t=e[e.length-1],a=[e[0]];let r;e.length===3&&typeof e[1]=="function"?r=e[1]:e.length>2&&a.push(...e.slice(1,e.length-1));let d=!1,p={};const y=(b,k)=>{d=!0,p[b]=k},R=!a.some(b=>z(b,this.input,y))||r&&!r(this.input)?be:{matched:!0,value:t(d?he in p?p[he]:p:this.input,this.input)};return new fe(this.input,R)}when(e,t){if(this.state.matched)return this;const a=!!e(this.input);return new fe(this.input,a?{matched:!0,value:t(this.input,this.input)}:be)}otherwise(e){return this.state.matched?this.state.value:e(this.input)}exhaustive(e=_e){return this.state.matched?this.state.value:e(this.input)}run(){return this.exhaustive()}returnType(){return this}}function _e(n){throw new De(n)}const Ce=({imageUrl:n,title:e,pdf:t})=>{const[a,r]=A.useState(!1);return n?m.jsxs(m.Fragment,{children:[m.jsx(re,{size:"small",sx:{color:"#fff"},onClick:()=>r(!0),"aria-label":"preview",children:m.jsx(Ue,{})}),m.jsx(xe,{open:a,children:m.jsxs(M,{sx:{p:1,display:"flex",flexDirection:"column",height:"100vh"},children:[m.jsxs(M,{children:[m.jsx(ke,{variant:"h2",sx:{flexGrow:1,lineHeight:"40px",textAlign:"center",fontSize:"1.5rem",fontWeight:"bold",color:"#fff"},children:e}),m.jsx(re,{sx:{position:"absolute",top:0,right:0,color:"#fff"},onClick:()=>r(!1),"aria-label":"close",children:m.jsx(Re,{})})]}),m.jsx(M,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",overflowY:"auto",msOverflowStyle:"none","&::-webkit-scrollbar":{display:"none"}},children:t?m.jsx(M,{component:"iframe",src:`${n}#toolbar=0`,width:"100%",height:"100%",title:e}):m.jsx(M,{component:"img",src:n,alt:"image",sx:{maxWidth:"100%",objectFit:"contain"}})})]})})]}):null};Ce.__docgenInfo={description:"",methods:[],displayName:"PreviewModal",props:{imageUrl:{required:!1,tsType:{name:"string"},description:"The image source to be displayed."},title:{required:!1,tsType:{name:"string"},description:"The title of the image."},pdf:{required:!1,tsType:{name:"boolean"},description:"If true, the image is a pdf file and will be displayed in an iframe."}}};const me="application/pdf",ve=({image:n,imageName:e,acceptMimeTypes:t=["image/*",me],onChange:a,onTypeError:r,size:d="medium",shape:p="square",disablePreview:y=!1,enableOpenNewWindow:R=!0,enableDownload:b=!1,deletable:k=!0,error:T,...U})=>{const[f,S]=A.useState(n);A.useEffect(()=>{S(n)},[n]);const le=F=>{if(!F.target.files||F.target.files.length===0)return;const E=F.target.files[0];if(!Se(E,t)){r==null||r();return}if(a){a(F,E);return}S(E)},pe=()=>{if(a){a({},void 0);return}S(void 0)},ae=A.useMemo(()=>f?typeof f=="string"?f.endsWith(".png")||f.endsWith(".jpeg")||f.endsWith(".jpg")||f.endsWith(".pdf"):f.type.startsWith("image/")||f.type===me:!1,[f]),X=A.useMemo(()=>f?typeof f=="string"?f.includes(".pdf"):f.type===me:!1,[f]),N=A.useMemo(()=>{if(typeof f=="string")return f;if(f)return URL.createObjectURL(X?new Blob([f],{type:`${me};charset=utf-8`}):f)},[f,X]),D=A.useMemo(()=>e||(typeof f=="string"?f.split("/").pop():f==null?void 0:f.name),[f,e]),J=async()=>{if(!N)return;if(N.startsWith("blob")){Te(N,D);return}const E=await(await fetch(N)).blob();Te(E,D)};return m.jsx(M,{...U,sx:Fe({p:f?1:0,border:2,borderStyle:f?"solid":"dashed",borderRadius:p==="square"?4:"50%",borderColor:T?"error.main":"divider",width:d==="small"?80:100,height:d==="small"?80:100,overflow:"hidden",aspectRatio:"1/1",position:"relative",backgroundColor:"background.paper","&:hover":{...!f&&{borderColor:"primary.main"},"& .action":{opacity:1}}},U==null?void 0:U.sx),children:f?m.jsxs(m.Fragment,{children:[m.jsx(M,{component:"div",className:"action",sx:{position:"absolute",background:"rgba(0, 0, 0, 0.45)",width:"calc(100% - 16px)",height:"calc(100% - 16px)",borderRadius:p==="square"?void 0:"50%",opacity:0,transition:"opacity 0.3s ease-in-out"},children:m.jsxs(qe,{direction:"row",justifyContent:"center",alignItems:"center",height:"100%",flexWrap:"wrap",children:[!y&&ae&&m.jsx(Ce,{imageUrl:N,title:D,pdf:X}),R&&ae&&m.jsx(re,{component:"a",size:"small",sx:{color:"#fff"},href:N,target:"_blank","aria-label":"open in new window",children:m.jsx(Me,{})}),k&&m.jsx(re,{size:"small",sx:{color:"#fff"},onClick:pe,"aria-label":"delete",children:m.jsx(Ne,{})}),b&&m.jsx(re,{size:"small",sx:{color:"#fff"},onClick:J,"aria-label":"download",children:m.jsx(je,{})})]})}),m.jsx(m.Fragment,{children:Ee({isImage:ae,isPdfFile:X}).with({isImage:!0,isPdfFile:!0},()=>m.jsx(M,{component:"iframe",src:`${N}#toolbar=0`,width:"100%",height:"100%",title:D,sx:{"*":{msOverflowStyle:"none","&::-webkit-scrollbar":{display:"none"}}}})).with({isImage:!0,isPdfFile:!1},()=>m.jsx(M,{component:"img",src:N,alt:D,sx:{width:"100%",height:"100%",objectFit:"contain"}})).otherwise(()=>m.jsxs(M,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[m.jsx(Le,{}),m.jsx(ke,{variant:"body2",sx:{width:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:D})]}))})]}):m.jsxs(M,{component:"label",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:p==="square"?void 0:"50%",height:"100%",cursor:"pointer"},children:[m.jsx(Pe,{sx:{color:"divider"}}),m.jsx(M,{component:"input",type:"file",onClick:F=>{F.target.value="",F.stopPropagation()},sx:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1},onChange:le,accept:t==null?void 0:t.join(","),role:"textbox","aria-label":"upload"})]})})};ve.__docgenInfo={description:"`ImageField` 上傳圖片，主要是用來包裝上傳圖片的 input，並提供預覽功能。",methods:[],displayName:"ImageField",props:{image:{required:!1,tsType:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}]},description:"The image source to be displayed."},imageName:{required:!1,tsType:{name:"string"},description:"The image name."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the component.

@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:`The shape of the component.

@default 'square'`,defaultValue:{value:"'square'",computed:!1}},disablePreview:{required:!1,tsType:{name:"boolean"},description:`If true, the preview will be hidden.

@default false`,defaultValue:{value:"false",computed:!1}},enableOpenNewWindow:{required:!1,tsType:{name:"boolean"},description:`If true, the open new window button will be hidden.

@default false`,defaultValue:{value:"true",computed:!1}},enableDownload:{required:!1,tsType:{name:"boolean"},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`,defaultValue:{value:"false",computed:!1}},deletable:{required:!1,tsType:{name:"boolean"},description:`If true, the image can be deleted.

@default true`,defaultValue:{value:"true",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"If true, the input will be error state."},acceptMimeTypes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']",defaultValue:{value:"['image/*', PDF_MIME_TYPE]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}}},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},onTypeError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the type is error."}}};const Ve=({maxCount:n=1,images:e,defaultConfig:t,onAdd:a,onDelete:r})=>{const[d,p]=A.useState(e??[]);A.useEffect(()=>{p(e??[])},[e]);const y=(b,k)=>{if(!k)return;const T={id:Date.now(),image:k,imageName:k.name};if(a){a(T,[...d,T]);return}p(U=>[...U,T])},R=b=>{if(r){const k=d.find(T=>T.id===b);if(!k)return;r(b,k,d.filter(T=>T.id!==b));return}p(k=>k.filter(T=>T.id!==b))};return m.jsxs(qe,{direction:"row",alignItems:"center",gap:1,flexWrap:"wrap",children:[d.map(({id:b,...k})=>m.jsx(ve,{...t,...k,onChange:(T,U)=>{U||R(b)}},b)),n>d.length&&m.jsx(ve,{...t,onChange:y})]})};Ve.__docgenInfo={description:"`ImageArray` 將多個 `ImageField` 包裝成陣列，並提供新增、刪除功能。",methods:[],displayName:"ImageArray",props:{maxCount:{required:!1,tsType:{name:"number"},description:`The maximum number of images.

@default 1`,defaultValue:{value:"1",computed:!1}},images:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]}],raw:"ImageInfo[]"},description:"The images to be displayed."},defaultConfig:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'size' | 'disablePreview' | 'deletable' | 'acceptMimeTypes' | 'error' | 'onTypeError'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'disablePreview'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"},{name:"literal",value:"'error'"},{name:"literal",value:"'onTypeError'"}]}],raw:`Pick<
  ImageFieldProps,
  'size' | 'disablePreview' | 'deletable' | 'acceptMimeTypes' | 'error' | 'onTypeError'
>`},description:"The default configuration of the image field."},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(newImage: ImageInfo, newImages: ImageInfo[]) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]},name:"newImage"},{type:{name:"Array",elements:[{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]}],raw:"ImageInfo[]"},name:"newImages"}],return:{name:"void"}}},description:`The callback fired when the value is be added.

@param newImage - The new image.
@param newImages - The new images.`},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: number, deleteFile: ImageInfo, newImages: ImageInfo[]) => void",signature:{arguments:[{type:{name:"number"},name:"id"},{type:{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]},name:"deleteFile"},{type:{name:"Array",elements:[{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If \`true\`, you can download the file.
   *
   * Note: When using an external URL as the source (i.e., a string URL),
   * it will only work if the URL is from the same origin
   * or if the target server includes appropriate CORS headers
   * (e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
   * the download attribute and open the file in a new tab instead of downloading it.
   *
   * For full control over cross-origin downloads, consider fetching the file as a Blob
   * (via \`fetch\`) and passing it to this function instead.
   *
   * @default false
   */
  enableDownload?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"enableDownload",value:{name:"boolean",required:!1},description:`If \`true\`, you can download the file.

Note: When using an external URL as the source (i.e., a string URL),
it will only work if the URL is from the same origin
or if the target server includes appropriate CORS headers
(e.g., \`Access-Control-Allow-Origin\`). Otherwise, most browsers will ignore
the download attribute and open the file in a new tab instead of downloading it.

For full control over cross-origin downloads, consider fetching the file as a Blob
(via \`fetch\`) and passing it to this function instead.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]}],raw:"ImageInfo[]"},name:"newImages"}],return:{name:"void"}}},description:`The callback fired when the value is be deleted.

@param id - The id of the image.
@param deleteFile - The file to be deleted.
@param newImages  - The new images.`}}};export{Pe as A,ve as I,Ve as a,Xe as b,Qe as f,nn as m,en as u,Se as v};
