import{j as p}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-CP2yOfOm.js";import{O as n}from"./UploadFile-BC784BXx.js";import"./IconButton-C7TZo3wP.js";import"./LoadingIndicator-CFvrfqHI.js";import"./Dot-B9mOCWEB.js";import"./Drawer-DVHlSqrv.js";import"./ImageArray-B6nbxoZK.js";import"./ModalHost-BBXuWOX7.js";import"./Toaster-deFhNEyn.js";import"./Box-CKyb1BTN.js";import"./DefaultPropsProvider-DPw6QbrG.js";import"./Stack-DfZoL78O.js";import"./Close-BIYtYFSH.js";import"./index-CHPGiBxO.js";import"./emotion-react.browser.esm-DmwTtLmI.js";import"./useSlot-CJXM9yHp.js";import"./index-C-s6R2hk.js";import"./Paper-D-0X-XNZ.js";const E={title:"輸入元件/OTPField",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e=()=>{const[s,i]=d.useState("123456"),m=t=>{i(t)};return p.jsx(n,{length:5,autoFocus:!0,sx:{width:300},gap:1,TextFieldsProps:t=>({type:"text",size:"medium",placeholder:String(t)}),value:s,onChange:m})};e.__docgenInfo={description:"",methods:[],displayName:"Primary"};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('123456');
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return <OTPField length={5} autoFocus sx={{
    width: 300
  }} gap={1} TextFieldsProps={(index: number) => ({
    type: 'text',
    size: 'medium',
    placeholder: String(index)
  })} value={value} onChange={handleChange} />;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const z=["Primary"];export{e as Primary,z as __namedExportsOrder,E as default};
