import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as t}from"./IconButton-Oqcd_hC8.js";import{T as e,t as s}from"./Toaster-BiwoIiea.js";import{B as c}from"./Box-4S6i-Boh.js";import{S as l}from"./Stack-BZ4gPDOg.js";import"./index-Ca8FO3x4.js";import"./DefaultPropsProvider-7SHxphPT.js";import"./emotion-react.browser.esm-HaEZ-V4Z.js";import"./useSlot-WwuVVAry.js";import"./index-Y5FPcgfC.js";import"./Paper-BKWJiPnQ.js";const j={title:"反饋元件/Toast",component:e,tags:["autodocs"]},r={name:"預設",render:()=>o.jsxs(c,{padding:4,children:[o.jsx(e,{}),o.jsxs(l,{spacing:2,direction:"row",children:[o.jsx(t,{color:"info",variant:"outlined",onClick:()=>s.info({message:"this is a info toast."}),children:"Info Modal"}),o.jsx(t,{color:"success",variant:"outlined",onClick:()=>s.success({message:"this is a success toast."}),children:"Success Modal"}),o.jsx(t,{color:"error",variant:"outlined",onClick:()=>s.error({message:"this is a error toast."}),children:"Error Modal"}),o.jsx(t,{color:"warning",variant:"outlined",onClick:()=>s.warning({message:"this is a warning toast."}),children:"Warning Modal"})]})]})};var a,i,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設',
  render: () => <Box padding={4}>
      <Toaster />
      <Stack spacing={2} direction="row">
        <Button color="info" variant="outlined" onClick={() => toast.info({
        message: 'this is a info toast.'
      })}>
          Info Modal
        </Button>
        <Button color="success" variant="outlined" onClick={() => toast.success({
        message: 'this is a success toast.'
      })}>
          Success Modal
        </Button>
        <Button color="error" variant="outlined" onClick={() => toast.error({
        message: 'this is a error toast.'
      })}>
          Error Modal
        </Button>
        <Button color="warning" variant="outlined" onClick={() => toast.warning({
        message: 'this is a warning toast.'
      })}>
          Warning Modal
        </Button>
      </Stack>
    </Box>
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const v=["Main"];export{r as Main,v as __namedExportsOrder,j as default};
