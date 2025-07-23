import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as r}from"./Delete-5oLm9gt9.js";import{I as a}from"./IconButton-C7TZo3wP.js";import{S as z}from"./Stack-DfZoL78O.js";import"./index-CP2yOfOm.js";import"./DefaultPropsProvider-DPw6QbrG.js";import"./emotion-react.browser.esm-DmwTtLmI.js";const E={title:"通用元件/IconButton",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={name:"預設",render:()=>e.jsx(a,{children:e.jsx(r,{fontSize:"inherit"})})},t={name:"尺寸",render:()=>e.jsxs(z,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(a,{"aria-label":"delete",size:"small",children:e.jsx(r,{fontSize:"inherit"})}),e.jsx(a,{"aria-label":"delete",size:"small",children:e.jsx(r,{fontSize:"small"})}),e.jsx(a,{"aria-label":"delete",size:"large",component:"a",href:"/",children:e.jsx(r,{})})]})},o={name:"讀取中",args:{children:e.jsx(r,{}),loading:!0}},s={name:"禁用",args:{children:e.jsx(r,{}),disabled:!0}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設',
  render: () => <IconButton>
      <DeleteIcon fontSize="inherit" />
    </IconButton>
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <Stack spacing={1} direction="row" alignItems="center">
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" size="large" component="a" href="/">
        <DeleteIcon />
      </IconButton>
    </Stack>
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,I,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '讀取中',
  args: {
    children: <DeleteIcon />,
    loading: true
  }
}`,...(g=(I=o.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var S,h,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    children: <DeleteIcon />,
    disabled: true
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const L=["Main","Sizes","Loading","Disable"];export{s as Disable,o as Loading,n as Main,t as Sizes,L as __namedExportsOrder,E as default};
