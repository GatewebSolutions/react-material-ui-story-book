import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-Ca8FO3x4.js";import{B as u}from"./IconButton-Oqcd_hC8.js";import{D as p}from"./Drawer-DQRJfvLh.js";import{B as m}from"./Box-4S6i-Boh.js";import"./Stack-BZ4gPDOg.js";import"./DefaultPropsProvider-7SHxphPT.js";import"./emotion-react.browser.esm-HaEZ-V4Z.js";import"./LoadingIndicator-DDoW1Hdx.js";import"./Close-DecDHrN0.js";import"./index-DfaYEv-Z.js";import"./useSlot-WwuVVAry.js";import"./index-Y5FPcgfC.js";import"./Paper-BKWJiPnQ.js";const B=t=>t.reduce((n,o)=>({...n,[o]:{table:{disable:!0}}}),{}),q={title:"反饋元件/Drawer",component:p,parameters:{layout:"fullscreen"},argTypes:{...B(["headerProps","contentProps","actionsProps","onClose","onSubmit","customActions","loadingOptions","anchor"])},tags:["autodocs"]},i={name:"預設",args:{title:"標題",children:"內容",showCloseIcon:!0,disableBackdropClick:!1,submitText:"確定",cancelText:"取消",loading:!1},render:({children:t,...n})=>{const[o,s]=c.useState(!1),a=()=>s(!0),r=()=>s(!1);return e.jsxs(m,{padding:4,children:[e.jsx(u,{variant:"contained",onClick:a,children:"Open drawer"}),e.jsx(p,{title:"title",open:o,onClose:r,onSubmit:r,...n,children:e.jsx("div",{children:t})})]})}},l={name:"讀取資料",render:()=>{const[t,n]=c.useState(!1),[o,s]=c.useState(!1),a=()=>{n(!0),s(!0),setTimeout(()=>{s(!1)},2e3)},r=()=>n(!1);return e.jsxs(m,{padding:4,children:[e.jsx(u,{variant:"contained",onClick:a,children:"Open drawer"}),e.jsx(p,{loading:o,title:"title",open:t,onClose:r,onSubmit:r,children:e.jsx("div",{children:"content"})})]})}},d={name:"發送API請求",render:()=>{const[t,n]=c.useState(!1),o=()=>n(!0),s=()=>n(!1),a=()=>new Promise(r=>{setTimeout(()=>{r()},2e3)});return e.jsxs(m,{padding:4,children:[e.jsx(u,{variant:"contained",onClick:o,children:"Open drawer"}),e.jsx(p,{title:"title",open:t,onClose:s,onSubmit:a,children:e.jsx("div",{children:"content"})})]})}};var h,C,O;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '預設',
  args: {
    title: '標題',
    children: '內容',
    showCloseIcon: true,
    disableBackdropClick: false,
    submitText: '確定',
    cancelText: '取消',
    loading: false
  },
  render: ({
    children,
    ...props
  }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <Box padding={4}>
        <Button variant="contained" onClick={handleOpen}>
          Open drawer
        </Button>
        <Drawer title="title" open={open} onClose={handleClose} onSubmit={handleClose} {...props}>
          <div>{children}</div>
        </Drawer>
      </Box>;
  }
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var x,f,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '讀取資料',
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleOpen = () => {
      setOpen(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    const handleClose = () => setOpen(false);
    return <Box padding={4}>
        <Button variant="contained" onClick={handleOpen}>
          Open drawer
        </Button>
        <Drawer loading={loading} title="title" open={open} onClose={handleClose} onSubmit={handleClose}>
          <div>content</div>
        </Drawer>
      </Box>;
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,v,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '發送API請求',
  render: () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = () => new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    return <Box padding={4}>
        <Button variant="contained" onClick={handleOpen}>
          Open drawer
        </Button>
        <Drawer title="title" open={open} onClose={handleClose} onSubmit={handleSubmit}>
          <div>content</div>
        </Drawer>
      </Box>;
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const z=["Main","Loading","Async"];export{d as Async,l as Loading,i as Main,z as __namedExportsOrder,q as default};
