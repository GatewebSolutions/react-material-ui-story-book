import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{a as p,b as m,c as x,C as u,d as C,e as h,u as g}from"./UploadFile-BC784BXx.js";import"./IconButton-C7TZo3wP.js";import"./LoadingIndicator-CFvrfqHI.js";import"./Dot-B9mOCWEB.js";import"./Drawer-DVHlSqrv.js";import"./ImageArray-B6nbxoZK.js";import"./ModalHost-BBXuWOX7.js";import"./index-CP2yOfOm.js";import"./Toaster-deFhNEyn.js";import{S as o}from"./Stack-DfZoL78O.js";import{T as y}from"./Close-BIYtYFSH.js";import{B as i}from"./Box-CKyb1BTN.js";import"./DefaultPropsProvider-DPw6QbrG.js";import"./Paper-D-0X-XNZ.js";import"./useSlot-CJXM9yHp.js";import"./index-C-s6R2hk.js";import"./emotion-react.browser.esm-DmwTtLmI.js";import"./index-CHPGiBxO.js";const G={title:"展示元件/Carousel",component:p,tags:["autodocs"]},f=()=>{const{api:s,selectedIndex:r,scrollSnaps:d}=g();return e.jsx(i,{sx:{display:"flex",gap:1},children:d.map((j,a)=>e.jsx(i,{onClick:()=>{s&&s.scrollTo(a)},sx:{cursor:"pointer",border:2,borderRadius:"50%",width:15,height:15,borderColor:r===a?"text.secondary":"divider"}},a))})},t={name:"預設",parameters:{layout:"centered"},render:()=>e.jsx(o,{spacing:1,sx:{width:500},children:e.jsx(p,{children:e.jsxs(o,{spacing:1,children:[e.jsx(m,{children:Array.from({length:5}).map((s,r)=>e.jsx(x,{children:e.jsx(u,{disableCardContent:!0,sx:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:5,height:200},children:e.jsx(y,{textAlign:"center",fontSize:"2rem",children:r+1})})},r))}),e.jsxs(i,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(o,{direction:"row",spacing:.5,children:[e.jsx(C,{size:"small"}),e.jsx(h,{size:"small"})]}),e.jsx(f,{})]})]})})})};var n,l,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設',
  parameters: {
    layout: 'centered'
  },
  render: () => <Stack spacing={1} sx={{
    width: 500
  }}>
      <Carousel>
        <Stack spacing={1}>
          <CarouselContent>
            {Array.from({
            length: 5
          }).map((_, index) =>
          // eslint-disable-next-line react/no-array-index-key
          <CarouselItem key={index}>
                <Card disableCardContent sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              height: 200
            }}>
                  <Typography textAlign="center" fontSize="2rem">
                    {index + 1}
                  </Typography>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <Stack direction="row" spacing={0.5}>
              <CarouselPrevious size="small" />
              <CarouselNext size="small" />
            </Stack>
            <Dot />
          </Box>
        </Stack>
      </Carousel>
    </Stack>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,G as default};
