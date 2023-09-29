import{G as d,n as l,P as t,j as n,I as g,c as p}from"./index-a19dc433.js";function u(r){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(r)}const b=`
  display: flex;
  gap: 16px;
`,h=`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 16px;
`,x=l.ul`
  ${({position:r})=>r==="static"?b:h}
`,a=l.li`
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  z-index: 5;
  background-color: ${({bgColor:r})=>r};
  transition: border-color var(--transition-duration) var(--timing-function),
    background-color var(--transition-duration) var(--timing-function);
  svg {
    fill: ${({fill:r})=>r};
    transition: transform var(--transition-duration) var(--timing-function);
  }

  &:hover,
  &:focus {
    background-color: ${r=>{var o;return(o=r.hoverFocusParams)==null?void 0:o.bgColor}};
    border-color: ${r=>{var o;return(o=r.hoverFocusParams)==null?void 0:o.borderColor}};

    svg {
      transform: scale(1.05);
    }
  }
`,v=({sitePath:r,githubPage:o,position:c,fill:i="rgb(97, 97, 97)",bgColor:e="rgba(245, 245, 245, 0.8)",hoverFocusParams:s={bgColor:"rgba(245, 245, 245, 0.8)",borderColor:"rgb(97, 97, 97)"}})=>n.jsx(g.Provider,{value:{className:"project-links"},children:n.jsxs(x,{position:c,children:[n.jsx(a,{bgColor:e,fill:i,hoverFocusParams:s,children:n.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to github",children:n.jsx(p,{})})},o),n.jsx(a,{bgColor:e,fill:i,hoverFocusParams:s,children:n.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to website",children:n.jsx(u,{})})},r)]})});v.propTypes={sitePath:t.string.isRequired,githubPage:t.string.isRequired,position:t.string.isRequired,bgColor:t.string,fill:t.string,hoverFocusParams:t.shape({bgColor:t.string,borderColor:t.string})};export{v as P};
