import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{S as r,F as s}from"./UploadFile-FdIITQAW.js";import"./IconButton-Unpa2Xe7.js";import"./LoadingIndicator-C5-qVK_h.js";import"./Dot-CCuTFD9l.js";import"./Drawer-BXYrkBkN.js";import"./ImageArray-BzAlE_QO.js";import"./ModalHost-B2jQsgU6.js";import"./index-DRjF_FHU.js";import"./Toaster-BDHQRNhb.js";import{S as b}from"./Stack-DXPTSUcZ.js";import"./Box-DJSu9vb-.js";import"./Close-J4W4B9gR.js";import"./useSlot-CxzLyBS3.js";import"./index-Ce3zGP_a.js";import"./Paper-C-g9tD_6.js";const _={title:"輸入元件/Switch",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={name:"預設",args:{size:"medium"}},t={name:"尺寸",render:()=>e.jsxs(b,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(r,{}),e.jsx(r,{size:"small"})]})},o={name:"包含標籤",render:()=>e.jsxs(b,{spacing:2,children:[e.jsx(s,{control:e.jsx(r,{defaultChecked:!0}),label:"Label"}),e.jsx(s,{disabled:!0,control:e.jsx(r,{}),label:"Disabled"})]})};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
