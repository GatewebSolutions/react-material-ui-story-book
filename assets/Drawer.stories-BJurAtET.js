import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-Ca8FO3x4.js";import{B as u}from"./IconButton-CangU_Dd.js";import{D as p}from"./Drawer-DfOUruCb.js";import{B as m}from"./Box-BZPCmIMk.js";import"./Stack-CvuCBITj.js";import"./LoadingIndicator-CtIMO_kz.js";import"./Close-B5DsKkKH.js";import"./useSlot-C1Nruy0n.js";import"./index-Cqt6gwg2.js";import"./Paper-BTzRMA5v.js";const B=t=>t.reduce((n,o)=>({...n,[o]:{table:{disable:!0}}}),{}),M={title:"反饋元件/Drawer",component:p,parameters:{layout:"fullscreen"},argTypes:{...B(["headerProps","contentProps","actionsProps","onClose","onSubmit","customActions","loadingOptions","anchor"])},tags:["autodocs"]},l={name:"預設",args:{title:"標題",children:"內容",showCloseIcon:!0,disableBackdropClick:!1,submitText:"確定",cancelText:"取消",loading:!1},render:({children:t,...n})=>{const[o,s]=c.useState(!1),r=()=>s(!0),a=()=>s(!1);return e.jsxs(m,{padding:4,children:[e.jsx(u,{variant:"contained",onClick:r,children:"Open drawer"}),e.jsx(p,{title:"title",open:o,onClose:a,onSubmit:a,...n,children:e.jsx("div",{children:t})})]})}},i={name:"讀取資料",render:()=>{const[t,n]=c.useState(!1),[o,s]=c.useState(!1),r=()=>{n(!0),s(!0),setTimeout(()=>{s(!1)},2e3)},a=()=>n(!1);return e.jsxs(m,{padding:4,children:[e.jsx(u,{variant:"contained",onClick:r,children:"Open drawer"}),e.jsx(p,{loading:o,title:"title",open:t,onClose:a,onSubmit:a,children:e.jsx("div",{children:"content"})})]})}},d={name:"發送API請求",render:()=>{const[t,n]=c.useState(!1),o=()=>n(!0),s=()=>n(!1),r=()=>new Promise(a=>{setTimeout(()=>{a()},2e3)});return e.jsxs(m,{padding:4,children:[e.jsx(u,{variant:"contained",onClick:o,children:"Open drawer"}),e.jsx(p,{title:"title",open:t,onClose:s,onSubmit:r,children:e.jsx("div",{children:"content"})})]})}};var h,C,O;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var x,f,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var S,v,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const _=["Main","Loading","Async"];export{d as Async,i as Loading,l as Main,_ as __namedExportsOrder,M as default};
