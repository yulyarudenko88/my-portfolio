import{n as s,P as o,j as t,u as f,L as b,a as x,C as j}from"./index-ed2d9af2.js";import{P as v}from"./ProjectLinks-7143a86e.js";const k=s.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`,S=s.li`
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
`,g=({options:r,onFilterClick:i})=>t.jsx(k,{children:r.map(e=>t.jsx(S,{children:t.jsx("button",{type:"button",onClick:()=>{i(e)},children:e})},e.trim()))});g.propTypes={options:o.array,onFilterClick:o.func};const _=s.li`
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
`,w=s.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 110%;
`,P=s.ul`
  position: absolute;
  right: 0;
  top: 20px;
  z-index: 5;
  background-color: rgb(245, 245, 245, 0.8);
  padding: 8px;
  display: flex;
  gap: 8px;
`,C=s.span`
  color: var(--primary-text-color);
  letter-spacing: 2px;
  text-transform: uppercase;
`,y=({id:r,posterPath:i,overview:e,options:a,sitePath:n,githubPage:c})=>{const l=f();return t.jsxs(_,{children:[t.jsx(b,{to:`${r}`,state:l,children:t.jsx(w,{src:i,alt:e})}),t.jsx(P,{children:a.map((p,d)=>t.jsx("li",{children:t.jsx(C,{children:p})},`${d} + ${p}.trim()`))}),t.jsx(v,{sitePath:n,githubPage:c,position:"absolute"})]},r)};y.propTypes={id:o.number.isRequired,posterPath:o.string.isRequired,overview:o.string.isRequired,options:o.array.isRequired,sitePath:o.string.isRequired,githubPage:o.string.isRequired};const R=s.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  align-items: stretch;
  grid-template-areas:
    'card1 card2 card2'
    'card3 card4 card5'
    'card6 card6 card7'
    'card8 card9 card10';
`,m=({projects:r,filterOption:i})=>{const e=i==="All"?r:r.filter(a=>a.options.includes(i));return t.jsx(R,{children:e==null?void 0:e.map(({id:a,poster_path:n,overview:c,options:l,site_path:p,github_page:d})=>{let h="";return n?h=`https://image.tmdb.org/t/p/w400/${n}`:h="https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png",t.jsx(y,{id:a,posterPath:h,overview:c,options:l,sitePath:p,githubPage:d},a)})})};m.propTypes={projects:o.array,filterOption:o.string};const u=s.section`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`,T=[{id:1,poster_path:"",overview:"My portfolio project",options:["React"],site_path:"https://yulyarudenko88.github.io/my-portfolio/",github_page:"https://github.com/yulyarudenko88/my-portfolio"},{id:2,poster_path:"",overview:"Smart Orange project",options:["HTML5 / CSS3 / JS"],site_path:"https://yulyarudenko88.github.io/Smart_Orange_Test/",github_page:"https://github.com/yulyarudenko88/Smart_Orange_Test"},{id:3,poster_path:"",overview:"SoYummy project",options:["React","Node.js"],site_path:"https://serhii-vasylenko.github.io/goit-final-project/",github_page:"https://github.com/yulyarudenko88/goit-final-project"},{id:4,poster_path:"",overview:"FoodSta project",options:["HTML5 / CSS3 / JS"],site_path:"https://mar1k85.github.io/monkey-business-team/",github_page:"https://github.com/yulyarudenko88/FoodSta-team-project"},{id:5,poster_path:"",overview:"Phonebook project",options:["React"],site_path:"https://yulyarudenko88.github.io/goit-react-hw-08-phonebook/",github_page:"https://github.com/yulyarudenko88/goit-react-hw-08-phonebook"},{id:6,poster_path:"",overview:"Search movies project",options:["React"],site_path:"https://yulyarudenko88.github.io/goit-react-hw-05-movies/",github_page:"https://github.com/yulyarudenko88/goit-react-hw-05-movies"},{id:7,poster_path:"",overview:"WebStudio project",options:["HTML5 / CSS3 / JS"],site_path:"https://yulyarudenko88.github.io/goit-markup-hw-08/",github_page:"https://github.com/yulyarudenko88/goit-markup-hw-08"}],L=["All","HTML5 / CSS3 / JS","React","Node.js"],F=()=>{const[r,i]=x(),e=r.get("filter")||"All",a=n=>{i({filter:n})};return t.jsxs(j,{children:[t.jsx(u,{children:t.jsx(g,{options:L,onFilterClick:a})}),t.jsx(u,{children:t.jsx(m,{projects:T,filterOption:e})})]})};export{F as default};
