import{n as r,j as t,G as x,P as o,u as m,I as f,L as b,a as v}from"./index-373bbef3.js";const j=r.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`,k=r.li`
  display: flex;
  align-items: center;
  gap: 16px;

  &:not(:last-child)::after {
    content: '|';
  }

  span {
    display: inline-flex;
    padding-top: 32px;
    padding-bottom: 32px;

    font-family: var(--secondary-font-family);
    font-size: 16px;
    color: inherit;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: color var(--transition-duration) var(--timing-function);

    &:hover,
    &:focus,
    &.active {
      color: var(--active-text-color);
    }
  }
`,_=["HTML5 / CSS3 / JS","React","Node.js"],w=()=>t.jsx(j,{children:_.map(e=>t.jsx(k,{children:t.jsx("span",{children:e})},e))});function S(e){return x({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(e)}const P=r.li`
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
`,L=r.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 110%;
`,R=r.ul`
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 5;
  background-color: rgb(245, 245, 245, 0.8);
  padding: 8px;
  display: flex;
  gap: 8px;
`,I=r.span`
  color: var(--primary-text-color);
  letter-spacing: 2px;
  text-transform: uppercase;
`,M=r.ul`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 16px;
`,h=r.li`
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
`,g=({id:e,posterPath:a,overview:n,options:s,sitePath:p,githubPage:c})=>{const i=m();return t.jsx(f.Provider,{value:{className:"project-links"},children:t.jsxs(P,{children:[t.jsx(b,{to:`${e}`,state:i,children:t.jsx(L,{src:a,alt:n})}),t.jsx(R,{children:s.map((l,y)=>t.jsx("li",{children:t.jsx(I,{children:l})},`${y} + ${l}.trim()`))}),t.jsxs(M,{children:[t.jsx(h,{children:t.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to github",children:t.jsx(v,{})})}),t.jsx(h,{children:t.jsx("a",{href:p,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to website",children:t.jsx(S,{})})})]})]},e)})};g.propTypes={id:o.number.isRequired,posterPath:o.string.isRequired,overview:o.string.isRequired,options:o.array.isRequired,sitePath:o.string.isRequired,githubPage:o.string.isRequired};const T=r.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  align-items: stretch;
  grid-template-areas:
    'card1 card2 card2'
    'card3 card4 card5'
    'card6 card6 card7'
    'card8 card9 card10';
`,d=[{id:1,poster_path:"",overview:"My portfolio project",options:["React","Node.js"],site_path:"https://yulyarudenko88.github.io/my-portfolio/",github_page:"https://github.com/yulyarudenko88/my-portfolio"},{id:2,poster_path:"",overview:"Smart Orange project",options:["HTML5 / CSS3 / JS"],site_path:"https://yulyarudenko88.github.io/Smart_Orange_Test/",github_page:"https://github.com/yulyarudenko88/Smart_Orange_Test"},{id:3,poster_path:"",overview:"SoYummy project",options:["React","Node.js"],site_path:"https://serhii-vasylenko.github.io/goit-final-project/",github_page:"https://github.com/yulyarudenko88/goit-final-project"},{id:4,poster_path:"",overview:"FoodSta project",options:["HTML5 / CSS3 / JS"],site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},{id:5,poster_path:"",overview:"Phonebook project",options:["React"],site_path:"https://yulyarudenko88.github.io/goit-react-hw-08-phonebook/",github_page:"https://github.com/yulyarudenko88/goit-react-hw-08-phonebook"},{id:6,poster_path:"",overview:"Search movies project",options:["React"],site_path:"https://yulyarudenko88.github.io/goit-react-hw-05-movies/",github_page:"https://github.com/yulyarudenko88/goit-react-hw-05-movies"},{id:7,poster_path:"",overview:"WebStudio project",options:["HTML5 / CSS3 / JS"],site_path:"https://yulyarudenko88.github.io/goit-markup-hw-08/",github_page:"https://github.com/yulyarudenko88/goit-markup-hw-08"}],u=()=>t.jsx(T,{children:d==null?void 0:d.map(({id:e,poster_path:a,overview:n,options:s,site_path:p,github_page:c})=>{let i="";return a?i=`https://image.tmdb.org/t/p/w400/${a}`:i="https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png",t.jsx(g,{id:e,posterPath:i,overview:n,options:s,sitePath:p,githubPage:c},e)})});u.propTypes={projects:o.array};const O=()=>t.jsxs(t.Fragment,{children:[t.jsx("section",{children:t.jsx(w,{})}),t.jsx("section",{children:t.jsx(u,{})})]});export{O as default};
