import{j as y}from"./jsx-runtime-BjG_zV1W.js";import{C as f}from"./UploadFile-DFqK_S8i.js";import{B as h}from"./IconButton-CangU_Dd.js";import"./LoadingIndicator-CtIMO_kz.js";import"./Dot-BDEQoTpa.js";import"./Drawer-DfOUruCb.js";import"./ImageArray-TPP1nO7i.js";import"./ModalHost-B_4l9K_h.js";import"./index-Ca8FO3x4.js";import"./Toaster-BsBKAXVk.js";import"./Box-BZPCmIMk.js";import"./Stack-CvuCBITj.js";import"./Close-B5DsKkKH.js";import"./useSlot-C1Nruy0n.js";import"./index-Cqt6gwg2.js";import"./Paper-BTzRMA5v.js";const O={title:"展示元件/Card",component:f,parameters:{layout:"centered"},args:{title:"標題",children:"內容",sx:{minWidth:600,minHeight:300}},argTypes:{headerProps:{table:{disable:!0}},contentProps:{table:{disable:!0}},loading:{table:{disable:!0}},sx:{table:{disable:!0}},cardActions:{table:{disable:!0}}},tags:["autodocs"]},e={name:"預設"},a={name:"讀取中",argTypes:{loading:{table:{disable:!1}}},args:{loading:!0}},r={name:"含動作按鈕",argTypes:{cardActions:{table:{disable:!0}}},args:{cardActions:y.jsx(h,{variant:"outlined",children:"按鈕"})}},t={name:"不含標題",argTypes:{title:{table:{disable:!0}}},args:{title:void 0}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設'
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '讀取中',
  argTypes: {
    loading: {
      table: {
        disable: false
      }
    }
  },
  args: {
    loading: true
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '含動作按鈕',
  argTypes: {
    cardActions: {
      table: {
        disable: true
      }
    }
  },
  args: {
    cardActions: <Button variant="outlined">按鈕</Button>
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '不含標題',
  argTypes: {
    title: {
      table: {
        disable: true
      }
    }
  },
  args: {
    title: undefined
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const R=["Main","Loading","WithAction","NoContent"];export{a as Loading,e as Main,t as NoContent,r as WithAction,R as __namedExportsOrder,O as default};
