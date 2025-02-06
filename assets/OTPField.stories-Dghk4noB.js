import{j as p}from"./jsx-runtime-C-_spy54.js";import{r as d}from"./index-B15s1MKD.js";import{O as n}from"./UploadFile-BPYl8iz1.js";import"./IconButton-517FYYfc.js";import"./LoadingIndicator-BKHM4zrS.js";import"./Dot-DqeqdxLH.js";import"./Drawer-DonUTrRj.js";import"./ImageArray-BErDTG-F.js";import"./ModalHost-EL7ilCOB.js";import"./Toaster-DA9ukB1k.js";import"./Box-CiQ7EFZj.js";import"./Stack-DrGCopUt.js";import"./Close-CR7m1xrj.js";import"./useSlot-CrIsEobu.js";import"./index-61hMdujB.js";import"./Paper-DqiRWCBd.js";const w={title:"輸入元件/OTPField",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e=()=>{const[s,i]=d.useState("123456"),m=t=>{i(t)};return p.jsx(n,{length:5,autoFocus:!0,sx:{width:300},gap:1,TextFieldsProps:t=>({type:"text",size:"medium",placeholder:String(t)}),value:s,onChange:m})};e.__docgenInfo={description:"",methods:[],displayName:"Primary"};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
