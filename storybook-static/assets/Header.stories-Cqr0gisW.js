import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{B as a}from"./Button-CoQORuAy.js";const q=({logo:t,title:p,navItems:g=[],actions:h=[],variant:V="light",sticky:F=!1,className:G="",...M})=>{const U=`header--${V}`,$=F?"header--sticky":"";return e.jsxs("header",{className:["header",U,$,G].join(" "),...M,children:[e.jsxs("div",{className:"header__branding",children:[t&&e.jsx("div",{className:"header__logo",children:typeof t=="string"?e.jsx("img",{src:t,alt:`${p} logo`}):t}),p&&e.jsx("h1",{className:"header__title",children:p})]}),g.length>0&&e.jsx("nav",{className:"header__nav",children:e.jsx("ul",{className:"header__nav-list",children:g.map((s,u)=>e.jsx("li",{className:"header__nav-item",children:typeof s=="string"?e.jsx("a",{href:"/#",className:"header__nav-link",children:s}):s},u))})}),h.length>0&&e.jsx("div",{className:"header__actions",children:h.map((s,u)=>e.jsx("div",{className:"header__action",children:s},u))})]})};q.__docgenInfo={description:"",methods:[],displayName:"Header",props:{navItems:{defaultValue:{value:"[]",computed:!1},required:!1},actions:{defaultValue:{value:"[]",computed:!1},required:!1},variant:{defaultValue:{value:"'light'",computed:!1},required:!1},sticky:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Q={title:"Layouts/Header",component:q,tags:["autodocs"],parameters:{layout:"fullscreen"}},r={args:{title:"Application Name"}},o={args:{title:"App Name",navItems:["Home","Products","Services","About","Contact"]}},i={args:{title:"Dashboard",navItems:["Home","Analytics","Reports"],actions:[e.jsx(a,{label:"Login",size:"small"},"login"),e.jsx(a,{label:"Sign Up",primary:!0,size:"small"},"signup")]}},n={args:{title:"Dark App",variant:"dark",navItems:["Home","Features","Pricing"],actions:[e.jsx(a,{label:"Login",size:"small"},"login")]}},l={args:{title:"Brand App",variant:"primary",navItems:["Dashboard","Projects","Team","Settings"],actions:[e.jsx(a,{label:"My Account",size:"small"},"account")]}},c={args:{title:"Sticky Header",sticky:!0,navItems:["Home","Features","Pricing","Team","Contact"],actions:[e.jsx(a,{label:"Get Started",primary:!0,size:"small"},"action")]},parameters:{docs:{description:{story:"This header will stick to the top of the viewport when scrolling."}}}},d={args:{title:"Logo App",logo:e.jsx("div",{style:{width:"32px",height:"32px",backgroundColor:"#1ea7fd",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold"},children:"A"}),navItems:["Home","Products","Support"]}},m={args:{title:"Enterprise Suite",logo:e.jsx("div",{style:{width:"32px",height:"32px",backgroundColor:"#1ea7fd",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold"},children:"E"}),variant:"light",sticky:!0,navItems:["Dashboard","Analytics","Projects","Teams","Resources"],actions:[e.jsx(a,{label:"Settings",size:"small"},"settings"),e.jsx(a,{label:"Profile",primary:!0,size:"small"},"profile")]}};var y,v,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Application Name'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,b,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'App Name',
    navItems: ['Home', 'Products', 'Services', 'About', 'Contact']
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var k,S,_;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    navItems: ['Home', 'Analytics', 'Reports'],
    actions: [<Button key="login" label="Login" size="small" />, <Button key="signup" label="Sign Up" primary size="small" />]
  }
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var A,H,I;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Dark App',
    variant: 'dark',
    navItems: ['Home', 'Features', 'Pricing'],
    actions: [<Button key="login" label="Login" size="small" />]
  }
}`,...(I=(H=n.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var N,C,P;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Brand App',
    variant: 'primary',
    navItems: ['Dashboard', 'Projects', 'Team', 'Settings'],
    actions: [<Button key="account" label="My Account" size="small" />]
  }
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var w,z,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Sticky Header',
    sticky: true,
    navItems: ['Home', 'Features', 'Pricing', 'Team', 'Contact'],
    actions: [<Button key="action" label="Get Started" primary size="small" />]
  },
  parameters: {
    docs: {
      description: {
        story: 'This header will stick to the top of the viewport when scrolling.'
      }
    }
  }
}`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var B,D,W;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    // src/components/Header/Header.stories.jsx (continued)
    title: 'Logo App',
    logo: <div style={{
      width: '32px',
      height: '32px',
      backgroundColor: '#1ea7fd',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold'
    }}>A</div>,
    navItems: ['Home', 'Products', 'Support']
  }
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var L,R,E;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Enterprise Suite',
    logo: <div style={{
      width: '32px',
      height: '32px',
      backgroundColor: '#1ea7fd',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold'
    }}>E</div>,
    variant: 'light',
    sticky: true,
    navItems: ['Dashboard', 'Analytics', 'Projects', 'Teams', 'Resources'],
    actions: [<Button key="settings" label="Settings" size="small" />, <Button key="profile" label="Profile" primary size="small" />]
  }
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const X=["Simple","WithNavigation","WithActions","DarkTheme","PrimaryTheme","StickyHeader","WithLogo","Complex"];export{m as Complex,n as DarkTheme,l as PrimaryTheme,r as Simple,c as StickyHeader,i as WithActions,d as WithLogo,o as WithNavigation,X as __namedExportsOrder,Q as default};
