import{n as o,P as r,j as t,u as b,I as f,L as j,a as v,r as k}from"./index-a3f9b9b9.js";import{M as _}from"./index.esm-0ebc696b.js";const S=o.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`,w=o.li`
  display: flex;
  align-items: center;
  gap: 16px;

  &:not(:last-child)::after {
    content: '|';
  }

  button {
    display: inline-flex;
    padding: 0; 
    border: 0 solid transparent;
    background-color:transparent;

    font-family: var(--secondary-font-family);
    font-size: 16px;
    color: inherit;
    letter-spacing: 2px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: color var(--transition-duration) var(--timing-function);

    &:hover,
    &:focus,
    &.active {
      color: var(--active-text-color);
    }
  }
`,y=({options:i,onFilterClick:a})=>t.jsx(S,{children:i.map(e=>t.jsx(w,{children:t.jsx("button",{type:"button",onClick:()=>{a(e)},children:e})},e.trim()))});y.propTypes={options:r.array,onFilterClick:r.func};const P=o.li`
  padding: 0px 0px 50% 0px;
  overflow: hidden;
  position: relative;

  &:nth-of-type(1) {
    grid-area: card1;
  }
  &:nth-of-type(2) {
    grid-area: card2;
  }
  &:nth-of-type(3) {
    grid-area: card3;
  }
  &:nth-of-type(4) {
    grid-area: card4;
  }
  &:nth-of-type(5) {
    grid-area: card5;
  }
  &:nth-of-type(6) {
    grid-area: card6;
  }
  &:nth-of-type(7) {
    grid-area: card7;
  }
  &:nth-of-type(8) {
    grid-area: card8;
  }
  &:nth-of-type(9) {
    grid-area: card9;
  }
  &:nth-of-type(10) {
    grid-area: card10;
  }
`,R=o.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 110%;
`,C=o.ul`
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 5;
  background-color: rgb(245, 245, 245, 0.8);
  padding: 8px;
  display: flex;
  gap: 8px;
`,T=o.span`
  color: var(--primary-text-color);
  letter-spacing: 2px;
  text-transform: uppercase;
`,L=o.ul`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 16px;
`,u=o.li`
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
`,m=({id:i,posterPath:a,overview:e,options:n,sitePath:s,githubPage:c})=>{const l=b();return t.jsx(f.Provider,{value:{className:"project-links"},children:t.jsxs(P,{children:[t.jsx(j,{to:`${i}`,state:l,children:t.jsx(R,{src:a,alt:e})}),t.jsx(C,{children:n.map((p,d)=>t.jsx("li",{children:t.jsx(T,{children:p})},`${d} + ${p}.trim()`))}),t.jsxs(L,{children:[t.jsx(u,{children:t.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to github",children:t.jsx(v,{})})}),t.jsx(u,{children:t.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to website",children:t.jsx(_,{})})})]})]},i)})};m.propTypes={id:r.number.isRequired,posterPath:r.string.isRequired,overview:r.string.isRequired,options:r.array.isRequired,sitePath:r.string.isRequired,githubPage:r.string.isRequired};const F=o.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  align-items: stretch;
  grid-template-areas:
    'card1 card2 card2'
    'card3 card4 card5'
    'card6 card6 card7'
    'card8 card9 card10';
`,x=({projects:i,selectedFilter:a})=>{const e=a==="All"?i:i.filter(n=>n.options.includes(a));return t.jsx(F,{children:e==null?void 0:e.map(({id:n,poster_path:s,overview:c,options:l,site_path:p,github_page:d})=>{let h="";return s?h=`https://image.tmdb.org/t/p/w400/${s}`:h="https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png",t.jsx(m,{id:n,posterPath:h,overview:c,options:l,sitePath:p,githubPage:d},n)})})};x.propTypes={projects:r.array,selectedFilter:r.string};const g=o.section`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`,O=[{id:1,poster_path:"",overview:"My portfolio project",options:["React"],site_path:"https://yulyarudenko88.github.io/my-portfolio/",github_page:"https://github.com/yulyarudenko88/my-portfolio"},{id:2,poster_path:"",overview:"Smart Orange project",options:["HTML5 / CSS3 / JS"],site_path:"https://yulyarudenko88.github.io/Smart_Orange_Test/",github_page:"https://github.com/yulyarudenko88/Smart_Orange_Test"},{id:3,poster_path:"",overview:"SoYummy project",options:["React","Node.js"],site_path:"https://serhii-vasylenko.github.io/goit-final-project/",github_page:"https://github.com/yulyarudenko88/goit-final-project"},{id:4,poster_path:"",overview:"FoodSta project",options:["HTML5 / CSS3 / JS"],site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},{id:5,poster_path:"",overview:"Phonebook project",options:["React"],site_path:"https://yulyarudenko88.github.io/goit-react-hw-08-phonebook/",github_page:"https://github.com/yulyarudenko88/goit-react-hw-08-phonebook"},{id:6,poster_path:"",overview:"Search movies project",options:["React"],site_path:"https://yulyarudenko88.github.io/goit-react-hw-05-movies/",github_page:"https://github.com/yulyarudenko88/goit-react-hw-05-movies"},{id:7,poster_path:"",overview:"WebStudio project",options:["HTML5 / CSS3 / JS"],site_path:"https://yulyarudenko88.github.io/goit-markup-hw-08/",github_page:"https://github.com/yulyarudenko88/goit-markup-hw-08"}],I=["All","HTML5 / CSS3 / JS","React","Node.js"],J=()=>{const[i,a]=k.useState("All"),e=n=>{a(n)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{children:t.jsx(y,{options:I,onFilterClick:e})}),t.jsx(g,{children:t.jsx(x,{projects:O,selectedFilter:i})})]})};export{J as default};
