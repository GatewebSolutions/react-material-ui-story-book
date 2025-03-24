import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as s,p as h,E as b}from"./UploadFile-CoAxSKxY.js";import{c as g}from"./IconButton-Oqcd_hC8.js";import"./LoadingIndicator-DDoW1Hdx.js";import"./Dot-PwSJpuBs.js";import"./Drawer-DQRJfvLh.js";import"./ImageArray-CU5MLgq_.js";import"./ModalHost-BUSrp5gR.js";import"./index-Ca8FO3x4.js";import"./Toaster-BiwoIiea.js";import{L as f}from"./Link-DnL-w9Si.js";import"./Box-4S6i-Boh.js";import"./DefaultPropsProvider-7SHxphPT.js";import"./Stack-BZ4gPDOg.js";import"./Close-DecDHrN0.js";import"./index-DfaYEv-Z.js";import"./emotion-react.browser.esm-HaEZ-V4Z.js";import"./useSlot-WwuVVAry.js";import"./index-Y5FPcgfC.js";import"./Paper-BKWJiPnQ.js";const I=g(e.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),y=g(e.jsx("path",{d:"M13 13v8h8v-8zM3 21h8v-8H3zM3 3v8h8V3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66z"}),"Widgets"),A={title:"導航元件/BreadCrumb",component:s,tags:["autodocs"]},i=[{name:"首頁",icon:I},{name:"產品",icon:y},{name:"編輯產品",icon:b}],r={name:"預設",argTypes:{extractCurrent:{description:"是否要凸顯當前頁面",control:{type:"boolean"}},currentPosition:{description:"凸顯當前頁面的位置",options:["top","bottom"],control:{type:"radio"}},items:{description:"導航項目 (使用 , 分割)",control:"text"}},args:{extractCurrent:!1,currentPosition:"top",items:"首頁, 產品, 編輯產品"},render:({items:t,...n})=>e.jsx(s,{...n,children:t.split(",").map((v,a)=>e.jsx(h,{component:f,sx:{display:"flex",alignItems:"center"},underline:"hover",href:"#",isLast:a===i.length-1,onClick:m=>{m.stopPropagation(),m.preventDefault()},children:v.trim()},a))})},o={name:"包含圖示",render:()=>e.jsx(s,{children:i.map((t,n)=>e.jsxs(h,{component:f,sx:{display:"flex",alignItems:"center"},underline:"hover",href:"#",isLast:n===i.length-1,children:[t.icon&&e.jsx(t.icon,{sx:{fontSize:20,marginRight:1}}),t.name]},t.name))})};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
