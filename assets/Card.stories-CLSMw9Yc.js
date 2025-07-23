import{j as h}from"./jsx-runtime-BjG_zV1W.js";import{C as x}from"./UploadFile-BC784BXx.js";import{B as A}from"./IconButton-C7TZo3wP.js";import"./LoadingIndicator-CFvrfqHI.js";import"./Dot-B9mOCWEB.js";import"./Drawer-DVHlSqrv.js";import"./ImageArray-B6nbxoZK.js";import"./ModalHost-BBXuWOX7.js";import"./index-CP2yOfOm.js";import"./Toaster-deFhNEyn.js";import"./Box-CKyb1BTN.js";import"./DefaultPropsProvider-DPw6QbrG.js";import"./Stack-DfZoL78O.js";import"./Close-BIYtYFSH.js";import"./index-CHPGiBxO.js";import"./emotion-react.browser.esm-DmwTtLmI.js";import"./useSlot-CJXM9yHp.js";import"./index-C-s6R2hk.js";import"./Paper-D-0X-XNZ.js";const F={title:"展示元件/Card",component:x,parameters:{layout:"centered"},args:{title:"標題",children:"內容",sx:{minWidth:600,minHeight:300}},argTypes:{headerProps:{table:{disable:!0}},contentProps:{table:{disable:!0}},loading:{table:{disable:!0}},sx:{table:{disable:!0}},cardActions:{table:{disable:!0}}},tags:["autodocs"]},e={name:"預設"},r={name:"讀取中",argTypes:{loading:{table:{disable:!1}}},args:{loading:!0}},t={name:"含動作按鈕",argTypes:{cardActions:{table:{disable:!0}}},args:{cardActions:h.jsx(A,{variant:"outlined",children:"按鈕"})}},a={name:"不含標題",argTypes:{title:{table:{disable:!0}}},args:{title:void 0}},n={name:"不使用 CardContent",argTypes:{title:{table:{disable:!0}}},args:{title:void 0,disableCardContent:!0}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設'
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,m,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var T,y,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '不使用 CardContent',
  argTypes: {
    title: {
      table: {
        disable: true
      }
    }
  },
  args: {
    title: undefined,
    disableCardContent: true
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const G=["Main","Loading","WithAction","NoTitle","NoCardContent"];export{r as Loading,e as Main,n as NoCardContent,a as NoTitle,t as WithAction,G as __namedExportsOrder,F as default};
