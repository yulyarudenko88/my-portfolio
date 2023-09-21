import{n as i,P as o,j as t,G as f,u as b,I as v,L as j,a as k,r as _}from"./index-e92dd421.js";const S=i.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`,w=i.li`
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
`,y=({options:e,onFilterClick:a})=>t.jsx(S,{children:e.map(r=>t.jsx(w,{children:t.jsx("button",{type:"button",onClick:()=>{a(r)},children:r})},r.trim()))});y.propTypes={options:o.array,onFilterClick:o.func};function P(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(e)}const R=i.li`
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
`,C=i.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 110%;
`,L=i.ul`
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 5;
  background-color: rgb(245, 245, 245, 0.8);
  padding: 8px;
  display: flex;
  gap: 8px;
`,T=i.span`
  color: var(--primary-text-color);
  letter-spacing: 2px;
  text-transform: uppercase;
`,F=i.ul`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 16px;
`,u=i.li`
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
`,m=({id:e,posterPath:a,overview:r,options:n,sitePath:s,githubPage:c})=>{const l=b();return t.jsx(v.Provider,{value:{className:"project-links"},children:t.jsxs(R,{children:[t.jsx(j,{to:`${e}`,state:l,children:t.jsx(C,{src:a,alt:r})}),t.jsx(L,{children:n.map((p,d)=>t.jsx("li",{children:t.jsx(T,{children:p})},`${d} + ${p}.trim()`))}),t.jsxs(F,{children:[t.jsx(u,{children:t.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to github",children:t.jsx(k,{})})}),t.jsx(u,{children:t.jsx("a",{href:s,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to website",children:t.jsx(P,{})})})]})]},e)})};m.propTypes={id:o.number.isRequired,posterPath:o.string.isRequired,overview:o.string.isRequired,options:o.array.isRequired,sitePath:o.string.isRequired,githubPage:o.string.isRequired};const I=i.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  align-items: stretch;
  grid-template-areas:
    'card1 card2 card2'
    'card3 card4 card5'
    'card6 card6 card7'
    'card8 card9 card10';
`,x=({projects:e,selectedFilter:a})=>{const r=a==="All"?e:e.filter(n=>n.options.includes(a));return t.jsx(I,{children:r==null?void 0:r.map(({id:n,poster_path:s,overview:c,options:l,site_path:p,github_page:d})=>{let h="";return s?h=`https://image.tmdb.org/t/p/w400/${s}`:h="https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png",t.jsx(m,{id:n,posterPath:h,overview:c,options:l,sitePath:p,githubPage:d},n)})})};x.propTypes={projects:o.array,selectedFilter:o.string};const g=i.section`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`,M=[{id:1,poster_path:"",overview:"My portfolio project",options:["React"],site_path:"https://yulyarudenko88.github.io/my-portfolio/",github_page:"https://github.com/yulyarudenko88/my-portfolio"},{id:2,poster_path:"",overview:"Smart Orange project",options:["HTML5 / CSS3 / JS"],site_path:"https://yulyarudenko88.github.io/Smart_Orange_Test/",github_page:"https://github.com/yulyarudenko88/Smart_Orange_Test"},{id:3,poster_path:"",overview:"SoYummy project",options:["React","Node.js"],site_path:"https://serhii-vasylenko.github.io/goit-final-project/",github_page:"https://github.com/yulyarudenko88/goit-final-project"},{id:4,poster_path:"",overview:"FoodSta project",options:["HTML5 / CSS3 / JS"],site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},{id:5,poster_path:"",overview:"Phonebook project",options:["React"],site_path:"https://yulyarudenko88.github.io/goit-react-hw-08-phonebook/",github_page:"https://github.com/yulyarudenko88/goit-react-hw-08-phonebook"},{id:6,poster_path:"",overview:"Search movies project",options:["React"],site_path:"https://yulyarudenko88.github.io/goit-react-hw-05-movies/",github_page:"https://github.com/yulyarudenko88/goit-react-hw-05-movies"},{id:7,poster_path:"",overview:"WebStudio project",options:["HTML5 / CSS3 / JS"],site_path:"https://yulyarudenko88.github.io/goit-markup-hw-08/",github_page:"https://github.com/yulyarudenko88/goit-markup-hw-08"}],O=["All","HTML5 / CSS3 / JS","React","Node.js"],q=()=>{const[e,a]=_.useState("All"),r=n=>{a(n)};return t.jsxs(t.Fragment,{children:[t.jsx(g,{children:t.jsx(y,{options:O,onFilterClick:r})}),t.jsx(g,{children:t.jsx(x,{projects:M,selectedFilter:e})})]})};export{q as default};
