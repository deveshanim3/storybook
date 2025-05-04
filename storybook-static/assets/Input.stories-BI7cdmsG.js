import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-D4lIrffr.js";const v=({label:e,placeholder:g,type:f="text",helperText:r,error:l=!1,value:n,onChange:x,disabled:o=!1,required:a=!1,className:B="",...Y})=>{const u=`input-${(e==null?void 0:e.toLowerCase().replace(/\s+/g,"-"))||Math.random().toString(36).substring(2,9)}`,M=l?"input--error":"",O=o?"input--disabled":"";return s.jsxs("div",{className:["input-wrapper",M,O,B].join(" "),children:[e&&s.jsxs("label",{className:"input__label",htmlFor:u,children:[e," ",a&&s.jsx("span",{className:"input__required",children:"*"})]}),s.jsx("input",{type:f,id:u,className:"input__field",placeholder:g,value:n,onChange:x,disabled:o,required:a,"aria-describedby":r?`${u}-helper`:void 0,...Y}),r&&s.jsx("div",{id:`${u}-helper`,className:`input__helper-text ${l?"input__helper-text--error":""}`,children:r})]})};v.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const A={title:"Components/Input",component:v,tags:["autodocs"],parameters:{layout:"padded"}},c={args:{placeholder:"Enter text"}},d={args:{label:"Username",placeholder:"Enter your username"}},i={args:{label:"Password",type:"password",placeholder:"Enter your password",helperText:"Password must be at least 8 characters"}},p={args:{label:"Email",placeholder:"Enter your email",helperText:"Please enter a valid email address",error:!0,value:"invalid-email"}},m={args:{label:"Disabled Input",placeholder:"You cannot edit this field",disabled:!0}},h={args:{label:"Full Name",placeholder:"Enter your full name",required:!0}},t=()=>{const[e,g]=b.useState(""),[f,r]=b.useState(!1),[l,n]=b.useState("Enter a username (min 3 characters)"),x=o=>{const a=o.target.value;g(a),a.length<3&&a.length>0?(r(!0),n("Username must be at least 3 characters")):(r(!1),n("Enter a username (min 3 characters)"))};return s.jsx(v,{label:"Interactive Username",placeholder:"Start typing...",value:e,onChange:x,error:f,helperText:l})};t.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var E,y,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text'
  }
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var S,w,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var V,T,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters'
  }
}`,...(q=(T=i.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var N,j,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'Please enter a valid email address',
    error: true,
    value: 'invalid-email'
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var H,P,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this field',
    disabled: true
  }
}`,...(U=(P=m.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,D,$;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true
  }
}`,...($=(D=h.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var F,L,R;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Enter a username (min 3 characters)');
  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
    if (newValue.length < 3 && newValue.length > 0) {
      setError(true);
      setHelperText('Username must be at least 3 characters');
    } else {
      setError(false);
      setHelperText('Enter a username (min 3 characters)');
    }
  };
  return <Input label="Interactive Username" placeholder="Start typing..." value={value} onChange={handleChange} error={error} helperText={helperText} />;
}`,...(R=(L=t.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const G=["Basic","WithLabel","WithHelperText","WithError","Disabled","Required","Interactive"];export{c as Basic,m as Disabled,t as Interactive,h as Required,p as WithError,i as WithHelperText,d as WithLabel,G as __namedExportsOrder,A as default};
