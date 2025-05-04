import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{B as u}from"./Button-CoQORuAy.js";const d=({title:o,subtitle:l,children:z,elevation:W="medium",rounded:I=!0,className:V="",...D})=>{const Y=`card--elevation-${W}`,O=I?"card--rounded":"";return e.jsxs("div",{className:["card",Y,O,V].join(" "),...D,children:[o&&e.jsx("h3",{className:"card__title",children:o}),l&&e.jsx("div",{className:"card__subtitle",children:l}),e.jsx("div",{className:"card__content",children:z})]})};d.__docgenInfo={description:"",methods:[],displayName:"Card",props:{elevation:{defaultValue:{value:"'medium'",computed:!1},required:!1},rounded:{defaultValue:{value:"true",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const G={title:"Components/Card",component:d,tags:["autodocs"],parameters:{layout:"padded"}},a={args:{children:"This is a basic card with just content."}},r={args:{title:"Card Title",children:"This card has a title and content."}},s={args:{title:"Card Title",subtitle:"This is the card subtitle",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is a card with a title, subtitle and content."}),e.jsx("p",{children:"You can add multiple paragraphs or components inside."})]})}},t={args:{title:"Flat Card",elevation:"low",children:"This card has minimal elevation."}},i={args:{title:"Elevated Card",elevation:"high",children:"This card has high elevation."}},n={args:{title:"Square Card",rounded:!1,children:"This card has square corners instead of rounded ones."}},c={render:()=>e.jsxs(d,{title:"Card with Actions",subtitle:"Interactive elements inside a card",children:[e.jsx("p",{children:"This card contains action buttons that you can interact with."}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:[e.jsx(u,{label:"Accept",primary:!0,size:"small"}),e.jsx(u,{label:"Decline",size:"small"})]})]})};var p,h,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This is a basic card with just content.'
  }
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,v,T;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    children: 'This card has a title and content.'
  }
}`,...(T=(v=r.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,x,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    subtitle: 'This is the card subtitle',
    children: <>
        <p>This is a card with a title, subtitle and content.</p>
        <p>You can add multiple paragraphs or components inside.</p>
      </>
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,b,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Flat Card',
    elevation: 'low',
    children: 'This card has minimal elevation.'
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var _,w,y;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Elevated Card',
    elevation: 'high',
    children: 'This card has high elevation.'
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var q,A,B;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Square Card',
    rounded: false,
    children: 'This card has square corners instead of rounded ones.'
  }
}`,...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,N,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Card title="Card with Actions" subtitle="Interactive elements inside a card">
      <p>This card contains action buttons that you can interact with.</p>
      <div style={{
      display: 'flex',
      gap: '8px',
      marginTop: '16px'
    }}>
        <Button label="Accept" primary size="small" />
        <Button label="Decline" size="small" />
      </div>
    </Card>
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const H=["Basic","WithTitle","Complete","Flat","Elevated","Square","WithActions"];export{a as Basic,s as Complete,i as Elevated,t as Flat,n as Square,c as WithActions,r as WithTitle,H as __namedExportsOrder,G as default};
