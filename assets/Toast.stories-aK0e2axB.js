import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as s}from"./IconButton-CangU_Dd.js";import{T as e,t}from"./Toaster-BsBKAXVk.js";import{B as c}from"./Box-BZPCmIMk.js";import{S as l}from"./Stack-CvuCBITj.js";import"./index-Ca8FO3x4.js";import"./useSlot-C1Nruy0n.js";import"./index-Cqt6gwg2.js";import"./Paper-BTzRMA5v.js";const k={title:"反饋元件/Toast",component:e,tags:["autodocs"]},a={name:"預設",render:()=>o.jsxs(c,{padding:4,children:[o.jsx(e,{}),o.jsxs(l,{spacing:2,direction:"row",children:[o.jsx(s,{color:"info",variant:"outlined",onClick:()=>t.info({message:"this is a info toast."}),children:"Info Modal"}),o.jsx(s,{color:"success",variant:"outlined",onClick:()=>t.success({message:"this is a success toast."}),children:"Success Modal"}),o.jsx(s,{color:"error",variant:"outlined",onClick:()=>t.error({message:"this is a error toast."}),children:"Error Modal"}),o.jsx(s,{color:"warning",variant:"outlined",onClick:()=>t.warning({message:"this is a warning toast."}),children:"Warning Modal"})]})]})};var r,i,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const M=["Main"];export{a as Main,M as __namedExportsOrder,k as default};
