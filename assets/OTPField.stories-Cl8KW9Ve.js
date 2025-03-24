import{j as p}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-Ca8FO3x4.js";import{O as n}from"./UploadFile-CoAxSKxY.js";import"./IconButton-Oqcd_hC8.js";import"./LoadingIndicator-DDoW1Hdx.js";import"./Dot-PwSJpuBs.js";import"./Drawer-DQRJfvLh.js";import"./ImageArray-CU5MLgq_.js";import"./ModalHost-BUSrp5gR.js";import"./Toaster-BiwoIiea.js";import"./Box-4S6i-Boh.js";import"./DefaultPropsProvider-7SHxphPT.js";import"./Stack-BZ4gPDOg.js";import"./Close-DecDHrN0.js";import"./index-DfaYEv-Z.js";import"./emotion-react.browser.esm-HaEZ-V4Z.js";import"./useSlot-WwuVVAry.js";import"./index-Y5FPcgfC.js";import"./Paper-BKWJiPnQ.js";const E={title:"輸入元件/OTPField",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e=()=>{const[s,i]=d.useState("123456"),m=t=>{i(t)};return p.jsx(n,{length:5,autoFocus:!0,sx:{width:300},gap:1,TextFieldsProps:t=>({type:"text",size:"medium",placeholder:String(t)}),value:s,onChange:m})};e.__docgenInfo={description:"",methods:[],displayName:"Primary"};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
