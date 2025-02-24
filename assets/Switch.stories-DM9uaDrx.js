import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as r,F as s}from"./UploadFile-DFqK_S8i.js";import"./IconButton-CangU_Dd.js";import"./LoadingIndicator-CtIMO_kz.js";import"./Dot-BDEQoTpa.js";import"./Drawer-DfOUruCb.js";import"./ImageArray-TPP1nO7i.js";import"./ModalHost-B_4l9K_h.js";import"./index-Ca8FO3x4.js";import"./Toaster-BsBKAXVk.js";import{S as b}from"./Stack-CvuCBITj.js";import"./Box-BZPCmIMk.js";import"./Close-B5DsKkKH.js";import"./useSlot-C1Nruy0n.js";import"./index-Cqt6gwg2.js";import"./Paper-BTzRMA5v.js";const _={title:"輸入元件/Switch",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={name:"預設",args:{size:"medium"}},t={name:"尺寸",render:()=>e.jsxs(b,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(r,{}),e.jsx(r,{size:"small"})]})},o={name:"包含標籤",render:()=>e.jsxs(b,{spacing:2,children:[e.jsx(s,{control:e.jsx(r,{defaultChecked:!0}),label:"Label"}),e.jsx(s,{disabled:!0,control:e.jsx(r,{}),label:"Disabled"})]})};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設',
  args: {
    size: 'medium'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,l,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <Stack direction="row" alignItems="center" spacing={2}>
      <Switch />
      <Switch size="small" />
    </Stack>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '包含標籤',
  render: () => <Stack spacing={2}>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </Stack>
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const y=["Main","Size","WithLabel"];export{a as Main,t as Size,o as WithLabel,y as __namedExportsOrder,_ as default};
