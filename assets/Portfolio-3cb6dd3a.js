import{n as e,j as t}from"./index-14706107.js";const i=e.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`,o=e.li`
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
`,r=["HTML5 / CSS3 / JS","React","Node.js"],s=()=>t.jsx(i,{children:r.map(n=>t.jsx(o,{children:t.jsx("span",{children:n})},n))}),c=()=>t.jsx("section",{children:t.jsx(s,{})});export{c as default};
