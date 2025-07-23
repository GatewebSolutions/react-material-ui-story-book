import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as s,q as h,E as b}from"./UploadFile-BC784BXx.js";import{c as g}from"./IconButton-C7TZo3wP.js";import"./LoadingIndicator-CFvrfqHI.js";import"./Dot-B9mOCWEB.js";import"./Drawer-DVHlSqrv.js";import"./ImageArray-B6nbxoZK.js";import"./ModalHost-BBXuWOX7.js";import"./index-CP2yOfOm.js";import"./Toaster-deFhNEyn.js";import{L as f}from"./Link-YtQCeeKZ.js";import"./Box-CKyb1BTN.js";import"./DefaultPropsProvider-DPw6QbrG.js";import"./Stack-DfZoL78O.js";import"./Close-BIYtYFSH.js";import"./index-CHPGiBxO.js";import"./emotion-react.browser.esm-DmwTtLmI.js";import"./useSlot-CJXM9yHp.js";import"./index-C-s6R2hk.js";import"./Paper-D-0X-XNZ.js";const I=g(e.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),y=g(e.jsx("path",{d:"M13 13v8h8v-8zM3 21h8v-8H3zM3 3v8h8V3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66z"}),"Widgets"),A={title:"導航元件/BreadCrumb",component:s,tags:["autodocs"]},i=[{name:"首頁",icon:I},{name:"產品",icon:y},{name:"編輯產品",icon:b}],r={name:"預設",argTypes:{extractCurrent:{description:"是否要凸顯當前頁面",control:{type:"boolean"}},currentPosition:{description:"凸顯當前頁面的位置",options:["top","bottom"],control:{type:"radio"}},items:{description:"導航項目 (使用 , 分割)",control:"text"}},args:{extractCurrent:!1,currentPosition:"top",items:"首頁, 產品, 編輯產品"},render:({items:t,...n})=>e.jsx(s,{...n,children:t.split(",").map((v,a)=>e.jsx(h,{component:f,sx:{display:"flex",alignItems:"center"},underline:"hover",href:"#",isLast:a===i.length-1,onClick:m=>{m.stopPropagation(),m.preventDefault()},children:v.trim()},a))})},o={name:"包含圖示",render:()=>e.jsx(s,{children:i.map((t,n)=>e.jsxs(h,{component:f,sx:{display:"flex",alignItems:"center"},underline:"hover",href:"#",isLast:n===i.length-1,children:[t.icon&&e.jsx(t.icon,{sx:{fontSize:20,marginRight:1}}),t.name]},t.name))})};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '預設',
  argTypes: {
    extractCurrent: {
      description: '是否要凸顯當前頁面',
      control: {
        type: 'boolean'
      }
    },
    currentPosition: {
      description: '凸顯當前頁面的位置',
      options: ['top', 'bottom'],
      control: {
        type: 'radio'
      }
    },
    items: {
      description: '導航項目 (使用 , 分割)',
      control: 'text'
    }
  },
  args: {
    extractCurrent: false,
    currentPosition: 'top',
    items: '首頁, 產品, 編輯產品'
  },
  render: ({
    items,
    ...prop
  }) => <Breadcrumbs {...prop}>
      {(items as string).split(',').map((menu, index) => <BreadcrumbItem
    // eslint-disable-next-line react/no-array-index-key
    key={index} component={Link} sx={{
      display: 'flex',
      alignItems: 'center'
    }} underline="hover" href="#" isLast={index === menus.length - 1} onClick={event => {
      event.stopPropagation();
      event.preventDefault();
    }}>
          {menu.trim()}
        </BreadcrumbItem>)}
    </Breadcrumbs>
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,x;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '包含圖示',
  render: () => <Breadcrumbs>
      {menus.map((menu, index) => <BreadcrumbItem key={menu.name} component={Link} sx={{
      display: 'flex',
      alignItems: 'center'
    }} underline="hover" href="#" isLast={index === menus.length - 1}>
          {menu.icon && <menu.icon sx={{
        fontSize: 20,
        marginRight: 1
      }} />}
          {menu.name}
        </BreadcrumbItem>)}
    </Breadcrumbs>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const F=["Default","WithIcon"];export{r as Default,o as WithIcon,F as __namedExportsOrder,A as default};
