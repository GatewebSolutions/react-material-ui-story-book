import{j as p}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-Ca8FO3x4.js";import{O as n}from"./UploadFile-DFqK_S8i.js";import"./IconButton-CangU_Dd.js";import"./LoadingIndicator-CtIMO_kz.js";import"./Dot-BDEQoTpa.js";import"./Drawer-DfOUruCb.js";import"./ImageArray-TPP1nO7i.js";import"./ModalHost-B_4l9K_h.js";import"./Toaster-BsBKAXVk.js";import"./Box-BZPCmIMk.js";import"./Stack-CvuCBITj.js";import"./Close-B5DsKkKH.js";import"./useSlot-C1Nruy0n.js";import"./index-Cqt6gwg2.js";import"./Paper-BTzRMA5v.js";const w={title:"輸入元件/OTPField",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e=()=>{const[s,i]=d.useState("123456"),m=t=>{i(t)};return p.jsx(n,{length:5,autoFocus:!0,sx:{width:300},gap:1,TextFieldsProps:t=>({type:"text",size:"medium",placeholder:String(t)}),value:s,onChange:m})};e.__docgenInfo={description:"",methods:[],displayName:"Primary"};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const _=["Primary"];export{e as Primary,_ as __namedExportsOrder,w as default};
