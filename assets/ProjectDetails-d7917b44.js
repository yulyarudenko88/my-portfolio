import{G as u,n as e,L as m,a as f,u as b,j as t,C as v}from"./index-35e8344d.js";import{P as j}from"./ProjectLinks-d6cfcb68.js";function k(o){return u({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"}}]})(o)}const y=e(m)`
  display: inline-block;
  margin-bottom: 16px;
  padding: 10px 20px;
  background-color: transparent;
  transition: background-color var(--transition-duration) var(--timing-function);

  &:hover,
  &:focus {
    background-color: rgba(245, 245, 245, 0.3);
  }
`,w=e.div`
  padding-top: 30px;
  padding-bottom: 50px;
  /* padding-left: 16px; */
  padding-right: 40%;
  /* height: 100vh; */
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
    color:var(--white-text-color);
`,S=e.h1`
  font-size: 24px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`,r=e.p`
  font-size: 14px;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  span:not(:last-child) {
    font-weight: 600;
  }
`,L=e.h2`
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 16px 0px;
`,T=e.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,I=e.li`
  padding: 8px;
  background-color: rgba(245, 245, 245, 0.3);
`,P={title:"FULLSTACK developer",poster:"",desc:"SoYummy is a single-page responsive websites, oriented to any device (mobile, tablet, desktop). FoodSta was created so you can enjoy your favorite food anywhere!",technology_stack:["HTML","SASS","GIT"],type:"Team",role:"developer",completed:"worked on the responsive layout of the Subscribe section, performed a simple validation of the form using SCSS",site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},_=()=>{var n;const{projectId:o}=f(),s=((n=b().state)==null?void 0:n.pathname)??"/portfolio",{title:p,desc:l,technology_stack:a,type:c,role:d,completed:g,site_path:h,github_page:x}=P;return t.jsx(w,{children:t.jsxs(v,{children:[t.jsx(y,{to:s,children:t.jsx(k,{style:{width:"30px",height:"30px"}})}),t.jsx(S,{children:`${p} ${o}`}),t.jsxs("div",{children:[t.jsx(r,{children:l}),c==="Team"&&t.jsxs(r,{children:["It is a ",t.jsx("span",{children:"team"})," project. I was a ",t.jsx("span",{children:d})," and"," ",t.jsx("span",{children:g})]})]}),t.jsx(L,{children:"Technology Stack"}),t.jsx(T,{children:a==null?void 0:a.map(i=>t.jsx(I,{children:i},i))}),t.jsx(j,{sitePath:h,githubPage:x,position:"static"})]})})};export{_ as default};
