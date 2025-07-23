import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{D as o}from"./Dot-B9mOCWEB.js";import{S as m}from"./Stack-DfZoL78O.js";import"./index-CP2yOfOm.js";import"./Box-CKyb1BTN.js";import"./DefaultPropsProvider-DPw6QbrG.js";const f={title:"展示元件/Dot",component:o,parameters:{layout:"centered"},argTypes:{color:{control:{type:"color",presetColors:["red","green"]}}},tags:["autodocs"]},e={name:"預設",args:{color:"primary",label:"狀態",size:8,placement:"end"}},a={name:"顏色",render:()=>r.jsxs(m,{spacing:1,justifyContent:"start",children:[r.jsx(o,{color:"red",label:"default"}),r.jsx(o,{color:"primary",label:"primary"}),r.jsx(o,{color:"secondary",label:"secondary"}),r.jsx(o,{color:"success",label:"success"}),r.jsx(o,{color:"warning",label:"warning"}),r.jsx(o,{color:"error",label:"error"}),r.jsx(o,{color:"info",label:"info"})]})};var s,t,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設',
  args: {
    color: 'primary',
    label: '狀態',
    size: 8,
    placement: 'end'
  }
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var c,n,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '顏色',
  render: () => <Stack spacing={1} justifyContent="start">
      <Dot color="red" label="default" />
      <Dot color="primary" label="primary" />
      <Dot color="secondary" label="secondary" />
      <Dot color="success" label="success" />
      <Dot color="warning" label="warning" />
      <Dot color="error" label="error" />
      <Dot color="info" label="info" />
    </Stack>
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const j=["Main","Variant"];export{e as Main,a as Variant,j as __namedExportsOrder,f as default};
