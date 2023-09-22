import{G as a,n as i,P as n,j as r,I as l,b as c}from"./index-35e8344d.js";function d(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(t)}const p=`
  display: flex;
  gap: 16px;
`,x=`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  gap: 16px;
`,h=i.ul`
  ${({position:t})=>t==="static"?p:x}
`,o=i.li`
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  z-index: 5;
  background-color: rgba(245, 245, 245, 0.8);
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
`,u=({sitePath:t,githubPage:e,position:s})=>r.jsx(l.Provider,{value:{className:"project-links"},children:r.jsxs(h,{position:s,children:[r.jsx(o,{children:r.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to github",children:r.jsx(c,{})})},e),r.jsx(o,{children:r.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer nofollow",title:"link to website",children:r.jsx(d,{})})},t)]})});u.propTypes={sitePath:n.string.isRequired,githubPage:n.string.isRequired,position:n.string.isRequired};export{u as P};
