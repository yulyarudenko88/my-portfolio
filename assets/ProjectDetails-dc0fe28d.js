import{n,P as s,j as e,I as m,a as x,b,C as j}from"./index-a3f9b9b9.js";import{M as f}from"./index.esm-0ebc696b.js";const y=`
  display: flex;
  gap: 16px;
`,v=`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 16px;
`,k=n.ul`
  ${({position:t})=>t==="static"?y:v}
`,l=n.li`
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  z-index: 5;
  background-color: rgb(245, 245, 245, 0.8);
  transition: border-color var(--transition-duration) var(--timing-function);
  svg {
    transition: transform var(--transition-duration) var(--timing-function);
  }

  &:hover,
  &:focus {
    border-color: var(--secondary-text-color);
    svg {
      transform: scale(1.05);
    }
  }
`,p=({sitePath:t,githubPage:o,position:r})=>e.jsx(m.Provider,{value:{className:"project-links"},children:e.jsxs(k,{position:r,children:[e.jsx(l,{children:e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to github",children:e.jsx(x,{})})},o),e.jsx(l,{children:e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to website",children:e.jsx(f,{})})},t)]})});p.propTypes={sitePath:s.string.isRequired,githubPage:s.string.isRequired,position:s.string.isRequired};const S=n.div`
  padding-top: 50px;
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
      rgba(47, 48, 58, 0.9),
      rgba(47, 48, 58, 0.4)
    ),
    url('https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png');
    color:var(--white-text-color);

`,w={title:"FULLSTACK developer",poster:"",desc:"SoYummy is a single-page responsive websites, oriented to any device (mobile, tablet, desktop). FoodSta was created so you can enjoy your favorite food anywhere!",technology_stack:["HTML","SASS","GIT"],type:"Team",role:"developer",completed:"worked on the responsive layout of the Subscribe section, performed a simple validation of the form using SCSS",site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},P=()=>{const{projectId:t}=b(),{title:o,desc:r,technology_stack:i,type:d,role:c,completed:g,site_path:h,github_page:u}=w;return e.jsx(S,{children:e.jsxs(j,{children:[e.jsx("h1",{children:`${o} ${t}`}),e.jsx("p",{children:r}),d==="Team"&&e.jsx("p",{children:`It is a team project. I was a ${c} and ${g}`}),e.jsx("h2",{children:"Technology Stack"}),e.jsx("ul",{style:{marginTop:"auto"},children:i==null?void 0:i.map(a=>e.jsx("li",{children:a},a))}),e.jsx(p,{sitePath:h,githubPage:u,position:"static"})]})})};export{P as default};
