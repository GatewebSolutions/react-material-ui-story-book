import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-Ca8FO3x4.js";import{f as w,M as o}from"./UploadFile-DFqK_S8i.js";import"./IconButton-CangU_Dd.js";import"./LoadingIndicator-CtIMO_kz.js";import"./Dot-BDEQoTpa.js";import"./Drawer-DfOUruCb.js";import"./ImageArray-TPP1nO7i.js";import"./ModalHost-B_4l9K_h.js";import"./Toaster-BsBKAXVk.js";import"./Box-BZPCmIMk.js";import"./Stack-CvuCBITj.js";import"./Close-B5DsKkKH.js";import"./useSlot-C1Nruy0n.js";import"./index-Cqt6gwg2.js";import"./Paper-BTzRMA5v.js";const q={title:"輸入元件/TextField",component:w,parameters:{layout:"centered"},tags:["autodocs"]},r={name:"預設",args:{label:"輸入框",placeholder:"請輸入"}},a={name:"密碼",args:{label:"密碼",type:"password",value:"password",allowShowPassword:!0}},j=()=>{const[x,g]=h.useState("");return e.jsxs(w,{label:"選擇框",select:!0,value:x,onChange:S=>g(S.target.value),allowClear:!0,children:[e.jsx(o,{value:"1",children:"選項1"},"1"),e.jsx(o,{value:"2",children:"選項2"},"2"),e.jsx(o,{value:"3",children:"選項3"},"3")]})},s={name:"選擇框",render:()=>e.jsx(j,{})};var t,n,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設',
  args: {
    label: '輸入框',
    placeholder: '請輸入'
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '密碼',
  args: {
    label: '密碼',
    type: 'password',
    value: 'password',
    allowShowPassword: true
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,i,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '選擇框',
  render: () => <Sample />
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const z=["Main","Password","Select2"];export{r as Main,a as Password,s as Select2,z as __namedExportsOrder,q as default};
