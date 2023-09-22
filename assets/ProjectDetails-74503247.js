import{G as u,n as o,L as m,a as b,u as f,j as t,C as v}from"./index-91dd73eb.js";import{P as j}from"./ProjectLinks-10c0a5d1.js";function k(e){return u({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"}}]})(e)}const y=o(m)`
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
`,w=o.div`
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
`,S=o.h1`
  font-size: 24px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`,i=o.p`
  font-size: 14px;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  span:not(:last-child) {
    font-weight: 600;
  }
`,L=o.h2`
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 16px 0px;
`,C=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,T=o.li`
  padding: 8px;
  background-color: rgba(245, 245, 245, 0.3);
`,P={title:"FULLSTACK developer",poster:"",desc:"SoYummy is a single-page responsive websites, oriented to any device (mobile, tablet, desktop). FoodSta was created so you can enjoy your favorite food anywhere!",technology_stack:["HTML","SASS","GIT"],type:"Team",role:"developer",completed:"worked on the responsive layout of the Subscribe section, performed a simple validation of the form using SCSS",site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},_=()=>{var r;const{projectId:e}=b(),s=((r=f().state)==null?void 0:r.pathname)??"/portfolio",{title:l,desc:p,technology_stack:a,type:c,role:d,completed:g,site_path:h,github_page:x}=P;return t.jsx(w,{children:t.jsxs(v,{children:[t.jsx(y,{to:s,children:t.jsx(k,{style:{width:"30px",height:"30px"}})}),t.jsx(S,{children:`${l} ${e}`}),t.jsxs("div",{children:[t.jsx(i,{children:p}),c==="Team"&&t.jsxs(i,{children:["It is a ",t.jsx("span",{children:"team"})," project. I was a ",t.jsx("span",{children:d})," and"," ",t.jsx("span",{children:g})]})]}),t.jsx(L,{children:"Technology Stack"}),t.jsx(C,{children:a==null?void 0:a.map(n=>t.jsx(T,{children:n},n))}),t.jsx(j,{sitePath:h,githubPage:x,position:"static",bgColor:"transparent",fill:"rgb(255, 255, 255)",hoverFocusParams:{bgColor:"rgba(245, 245, 245, 0.3)",borderColor:"rgba(245, 245, 245, 0.3)"}})]})})};export{_ as default};
