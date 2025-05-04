import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-D4lIrffr.js";import{B as t}from"./Button-CoQORuAy.js";const a=({isOpen:o,onClose:s,title:l,children:w,footer:u,size:N="medium",closeOnOverlayClick:B=!0,className:F="",...T})=>{if(n.useEffect(()=>{const r=z=>{o&&z.key==="Escape"&&s()};return document.addEventListener("keydown",r),o&&(document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",r),document.body.style.overflow="visible"}},[o,s]),!o)return null;const L=r=>{B&&r.target===r.currentTarget&&s()},E=`modal--${N}`;return e.jsx("div",{className:"modal-overlay",onClick:L,"aria-modal":"true",role:"dialog",children:e.jsxs("div",{className:["modal",E,F].join(" "),...T,children:[e.jsxs("div",{className:"modal__header",children:[l&&e.jsx("h2",{className:"modal__title",children:l}),e.jsx("button",{className:"modal__close-button",onClick:s,"aria-label":"Close",children:"×"})]}),e.jsx("div",{className:"modal__content",children:w}),u&&e.jsx("div",{className:"modal__footer",children:u})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{defaultValue:{value:"'medium'",computed:!1},required:!1},closeOnOverlayClick:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const H={title:"Components/Modal",component:a,tags:["autodocs"],parameters:{layout:"centered"},decorators:[o=>e.jsx("div",{style:{width:"100%",height:"100vh",padding:"20px"},children:e.jsx(o,{})})]},i=()=>{const[o,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Open Modal",primary:!0,onClick:()=>s(!0)}),e.jsxs(a,{isOpen:o,onClose:()=>s(!1),title:"Basic Modal",children:[e.jsx("p",{children:"This is a basic modal with a title and content."}),e.jsx("p",{children:"Click outside or the X button to close it."})]})]})},c=()=>{const[o,s]=n.useState(!1),l=e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Cancel",onClick:()=>s(!1)}),e.jsx(t,{label:"Confirm",primary:!0,onClick:()=>s(!1)})]});return e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Open Modal with Footer",primary:!0,onClick:()=>s(!0)}),e.jsx(a,{isOpen:o,onClose:()=>s(!1),title:"Modal with Footer",footer:l,children:e.jsx("p",{children:"This modal has a custom footer with action buttons."})})]})},d=()=>{const[o,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Open Small Modal",primary:!0,onClick:()=>s(!0)}),e.jsx(a,{isOpen:o,onClose:()=>s(!1),title:"Small Modal",size:"small",children:e.jsx("p",{children:"This is a small modal."})})]})},p=()=>{const[o,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Open Large Modal",primary:!0,onClick:()=>s(!0)}),e.jsx(a,{isOpen:o,onClose:()=>s(!1),title:"Large Modal",size:"large",children:e.jsxs("div",{style:{minHeight:"400px"},children:[e.jsx("p",{children:"This is a large modal with more content."}),e.jsx("p",{children:"It has enough space for complex forms or detailed information."})]})})]})},m=()=>{const[o,s]=n.useState(!1),l=e.jsx(t,{label:"Close",primary:!0,onClick:()=>s(!1)});return e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Open Modal (No Close on Overlay)",primary:!0,onClick:()=>s(!0)}),e.jsxs(a,{isOpen:o,onClose:()=>s(!1),title:"Focused Modal",closeOnOverlayClick:!1,footer:l,children:[e.jsx("p",{children:"This modal will not close when clicking outside."}),e.jsx("p",{children:"You must use the close button or the button in the footer."})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};c.__docgenInfo={description:"",methods:[],displayName:"WithFooter"};d.__docgenInfo={description:"",methods:[],displayName:"Small"};p.__docgenInfo={description:"",methods:[],displayName:"Large"};m.__docgenInfo={description:"",methods:[],displayName:"NoCloseOnOverlay"};var h,f,O;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button label="Open Modal" primary onClick={() => setIsOpen(true)} />
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Basic Modal">
        <p>This is a basic modal with a title and content.</p>
        <p>Click outside or the X button to close it.</p>
      </Modal>
    </>;
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var x,C,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const footer = <>
      <Button label="Cancel" onClick={() => setIsOpen(false)} />
      <Button label="Confirm" primary onClick={() => setIsOpen(false)} />
    </>;
  return <>
      <Button label="Open Modal with Footer" primary onClick={() => setIsOpen(true)} />
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal with Footer" footer={footer}>
        <p>This modal has a custom footer with action buttons.</p>
      </Modal>
    </>;
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var g,j,M;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button label="Open Small Modal" primary onClick={() => setIsOpen(true)} />
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Small Modal" size="small">
        <p>This is a small modal.</p>
      </Modal>
    </>;
}`,...(M=(j=d.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var b,I,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button label="Open Large Modal" primary onClick={() => setIsOpen(true)} />
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Large Modal" size="large">
        <div style={{
        minHeight: '400px'
      }}>
          <p>This is a large modal with more content.</p>
          <p>It has enough space for complex forms or detailed information.</p>
        </div>
      </Modal>
    </>;
}`,...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var v,_,S;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const footer = <Button label="Close" primary onClick={() => setIsOpen(false)} />;
  return <>
      <Button label="Open Modal (No Close on Overlay)" primary onClick={() => setIsOpen(true)} />
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Focused Modal" closeOnOverlayClick={false} footer={footer}>
        <p>This modal will not close when clicking outside.</p>
        <p>You must use the close button or the button in the footer.</p>
      </Modal>
    </>;
}`,...(S=(_=m.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const X=["Basic","WithFooter","Small","Large","NoCloseOnOverlay"];export{i as Basic,p as Large,m as NoCloseOnOverlay,d as Small,c as WithFooter,X as __namedExportsOrder,H as default};
