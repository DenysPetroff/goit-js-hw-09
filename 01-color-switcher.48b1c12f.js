const t={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]")};let o;t.buttonStop.disabled=!0,t.buttonStart.addEventListener("click",(function(){t.buttonStart.disabled=!0,t.buttonStop.disabled=!1,o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3)})),t.buttonStop.addEventListener("click",(function(){t.buttonStart.disabled=!1,t.buttonStop.disabled=!0,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.48b1c12f.js.map
