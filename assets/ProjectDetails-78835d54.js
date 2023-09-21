import{n as l,a as h,j as e,C as g}from"./index-bcd838bc.js";import{P as m}from"./ProjectLinks-c72ef837.js";const u=l.div`
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

`,b={title:"FULLSTACK developer",poster:"",desc:"SoYummy is a single-page responsive websites, oriented to any device (mobile, tablet, desktop). FoodSta was created so you can enjoy your favorite food anywhere!",technology_stack:["HTML","SASS","GIT"],type:"Team",role:"developer",completed:"worked on the responsive layout of the Subscribe section, performed a simple validation of the form using SCSS",site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},y=()=>{const{projectId:a}=h(),{title:i,desc:r,technology_stack:t,type:s,role:n,completed:p,site_path:d,github_page:c}=b;return e.jsx(u,{children:e.jsxs(g,{children:[e.jsx("h1",{children:`${i} ${a}`}),e.jsx("p",{children:r}),s==="Team"&&e.jsx("p",{children:`It is a team project. I was a ${n} and ${p}`}),e.jsx("h2",{children:"Technology Stack"}),e.jsx("ul",{style:{marginTop:"auto"},children:t==null?void 0:t.map(o=>e.jsx("li",{children:o},o))}),e.jsx(m,{sitePath:d,githubPage:c,position:"static"})]})})};export{y as default};
