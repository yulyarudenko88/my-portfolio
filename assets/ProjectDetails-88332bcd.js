import{G as x,n as o,L as u,b,u as m,j as t,C as f}from"./index-0dadc537.js";import{P as v}from"./ProjectLinks-0c66c9a2.js";function j(e){return x({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"}}]})(e)}const k=o(u)`
  display: inline-block;
  margin-bottom: 16px;
  padding: 10px 20px;
  border: 1px solid transparent;
  background-color: transparent;
  transition: background-color var(--transition-duration) var(--timing-function),
    border-color var(--transition-duration) var(--timing-function);

  &:hover,
  &:focus {
    background-color: rgba(245, 245, 245, 0.3);
    border-color: rgba(245, 245, 245, 0.3);
  }
`,y=o.div`
  padding-top: 30px;
  padding-bottom: 50px;
  padding-right: 40%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgb(47, 48, 58),
      rgba(47, 48, 58, 0.8),
      rgba(47, 48, 58, 0.4)
    ),
    url('https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png');
  color: var(--white-text-color);
`,w=o.h1`
  font-size: 24px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`,n=o.p`
  font-size: 14px;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  span:not(:last-child) {
    font-weight: 600;
  }
`,S=o.h2`
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 16px 0px;
`,L=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,C=o.li`
  padding: 8px;
  background-color: rgba(245, 245, 245, 0.3);
`,T={title:"FULLSTACK developer",poster:"",desc:"SoYummy is a single-page responsive websites, oriented to any device (mobile, tablet, desktop). FoodSta was created so you can enjoy your favorite food anywhere!",technology_stack:["HTML","SASS","GIT"],type:"Team",role:"developer",completed:"worked on the responsive layout of the Subscribe section, performed a simple validation of the form using SCSS",site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},A=()=>{const{projectId:e}=b(),i=m().state??"/portfolio",{title:s,desc:l,technology_stack:r,type:p,role:c,completed:d,site_path:g,github_page:h}=T;return t.jsx(y,{children:t.jsxs(f,{children:[t.jsx(k,{to:i,children:t.jsx(j,{style:{width:"30px",height:"30px"}})}),t.jsx(w,{children:`${s} ${e}`}),t.jsxs("div",{children:[t.jsx(n,{children:l}),p==="Team"&&t.jsxs(n,{children:["It is a ",t.jsx("span",{children:"team"})," project. I was a ",t.jsx("span",{children:c})," and"," ",t.jsx("span",{children:d})]})]}),t.jsx(S,{children:"Technology Stack"}),t.jsx(L,{children:r==null?void 0:r.map(a=>t.jsx(C,{children:a},a))}),t.jsx(v,{sitePath:g,githubPage:h,position:"static",bgColor:"transparent",fill:"rgb(255, 255, 255)",hoverFocusParams:{bgColor:"rgba(245, 245, 245, 0.3)",borderColor:"rgba(245, 245, 245, 0.3)"}})]})})};export{A as default};
