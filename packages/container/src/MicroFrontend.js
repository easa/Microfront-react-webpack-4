import React, { useEffect } from "react";

function MicroFrontend({ name, host, history }) {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    const renderMicroFrontend = () => {
      if (typeof window[`render${name}`] === 'function') {
        window[`render${name}`](`${name}-container`, history);
      } else {
        console.error(`can't load "${name}" package!`, window[`render${name}`])
      }
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      }).catch(e => { console.log(e) });

    return () => {
      window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };
  });

  return <main id={`${name}-container`} />;
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
