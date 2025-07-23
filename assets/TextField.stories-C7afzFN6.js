import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-CP2yOfOm.js";import{k as w,M as s}from"./UploadFile-BC784BXx.js";import"./IconButton-C7TZo3wP.js";import"./LoadingIndicator-CFvrfqHI.js";import"./Dot-B9mOCWEB.js";import"./Drawer-DVHlSqrv.js";import"./ImageArray-B6nbxoZK.js";import"./ModalHost-BBXuWOX7.js";import"./Toaster-deFhNEyn.js";import"./Box-CKyb1BTN.js";import"./DefaultPropsProvider-DPw6QbrG.js";import"./Stack-DfZoL78O.js";import"./Close-BIYtYFSH.js";import"./index-CHPGiBxO.js";import"./emotion-react.browser.esm-DmwTtLmI.js";import"./useSlot-CJXM9yHp.js";import"./index-C-s6R2hk.js";import"./Paper-D-0X-XNZ.js";const B={title:"輸入元件/TextField",component:w,parameters:{layout:"centered"},tags:["autodocs"]},r={name:"預設",args:{label:"輸入框",placeholder:"請輸入"}},a={name:"密碼",args:{label:"密碼",type:"password",value:"password",allowShowPassword:!0}},j=()=>{const[x,g]=h.useState("");return e.jsxs(w,{label:"選擇框",select:!0,value:x,onChange:S=>g(S.target.value),allowClear:!0,children:[e.jsx(s,{value:"1",children:"選項1"},"1"),e.jsx(s,{value:"2",children:"選項2"},"2"),e.jsx(s,{value:"3",children:"選項3"},"3")]})},o={name:"選擇框",render:()=>e.jsx(j,{})};var t,n,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設',
  args: {
    label: '輸入框',
    placeholder: '請輸入'
  }
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '密碼',
  args: {
    label: '密碼',
    type: 'password',
    value: 'password',
    allowShowPassword: true
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,d,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '選擇框',
  render: () => <Sample />
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const D=["Main","Password","Select2"];export{r as Main,a as Password,o as Select2,D as __namedExportsOrder,B as default};
