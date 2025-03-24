import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as i,b as n,c as m,C as l,d as p,e as d}from"./UploadFile-CoAxSKxY.js";import"./IconButton-Oqcd_hC8.js";import"./LoadingIndicator-DDoW1Hdx.js";import"./Dot-PwSJpuBs.js";import"./Drawer-DQRJfvLh.js";import"./ImageArray-CU5MLgq_.js";import"./ModalHost-BUSrp5gR.js";import"./index-Ca8FO3x4.js";import"./Toaster-BiwoIiea.js";import{B as u}from"./Box-4S6i-Boh.js";import{T as c}from"./Close-DecDHrN0.js";import"./Stack-BZ4gPDOg.js";import"./DefaultPropsProvider-7SHxphPT.js";import"./Paper-BKWJiPnQ.js";import"./useSlot-WwuVVAry.js";import"./index-Y5FPcgfC.js";import"./emotion-react.browser.esm-HaEZ-V4Z.js";import"./index-DfaYEv-Z.js";const O={title:"展示元件/Carousel",component:i,tags:["autodocs"]},r={name:"預設",parameters:{layout:"centered"},render:()=>e.jsx(u,{width:500,children:e.jsxs(i,{children:[e.jsx(n,{children:Array.from({length:5}).map((C,t)=>e.jsx(m,{children:e.jsx("div",{className:"p-1",children:e.jsx(l,{disableCardContent:!0,sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(c,{variant:"h1",children:t+1})})})},t))}),e.jsx(p,{}),e.jsx(d,{})]})})};var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設',
  parameters: {
    layout: 'centered'
  },
  render: () => <Box width={500}>
      <Carousel>
        <CarouselContent>
          {Array.from({
          length: 5
        }).map((_, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <CarouselItem key={index}>
              <div className="p-1">
                <Card disableCardContent sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                  <Typography variant="h1">{index + 1}</Typography>
                </Card>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Box>
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const R=["Default"];export{r as Default,R as __namedExportsOrder,O as default};
