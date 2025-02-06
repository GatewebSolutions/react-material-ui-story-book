import{j as o}from"./jsx-runtime-C-_spy54.js";import{B as s}from"./IconButton-517FYYfc.js";import{T as e,t}from"./Toaster-DA9ukB1k.js";import{B as c}from"./Box-CiQ7EFZj.js";import{S as l}from"./Stack-DrGCopUt.js";import"./index-B15s1MKD.js";import"./useSlot-CrIsEobu.js";import"./index-61hMdujB.js";import"./Paper-DqiRWCBd.js";const k={title:"反饋元件/Toast",component:e,tags:["autodocs"]},a={name:"預設",render:()=>o.jsxs(c,{padding:4,children:[o.jsx(e,{}),o.jsxs(l,{spacing:2,direction:"row",children:[o.jsx(s,{color:"info",variant:"outlined",onClick:()=>t.info({message:"this is a info toast."}),children:"Info Modal"}),o.jsx(s,{color:"success",variant:"outlined",onClick:()=>t.success({message:"this is a success toast."}),children:"Success Modal"}),o.jsx(s,{color:"error",variant:"outlined",onClick:()=>t.error({message:"this is a error toast."}),children:"Error Modal"}),o.jsx(s,{color:"warning",variant:"outlined",onClick:()=>t.warning({message:"this is a warning toast."}),children:"Warning Modal"})]})]})};var r,i,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
