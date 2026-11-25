import{t as r}from"./theme-colors-ToRFEbn-.js";import{g as l,s as o}from"./cross-domain-storage-D1yhRKx4.js";import{s as c,t as d}from"./dom-utils-BodelmHa.js";const t="wm-layer-warning-dismissed";let n=null;function w(i){if(l(t)||n||window.self!==window.top||new URLSearchParams(window.location.search).get("alert")==="false")return;const e=document.createElement("div");e.className="layer-warn-overlay",c(e,d(`
    <div class="layer-warn-dialog">
      <div class="layer-warn-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
      <div class="layer-warn-text">
        <strong>${r("components.deckgl.layerWarningTitle")}</strong>
        <p>${r("components.deckgl.layerWarningBody",{threshold:i})}</p>
      </div>
      <label class="layer-warn-dismiss">
        <input type="checkbox" />
        <span>${r("components.deckgl.layerWarningDismiss")}</span>
      </label>
      <button class="layer-warn-ok">${r("components.deckgl.layerWarningOk")}</button>
    </div>`,"legacy direct innerHTML migration"));const s=()=>{const a=e.querySelector(".layer-warn-dismiss input");a!=null&&a.checked&&o(t),e.classList.add("layer-warn-out"),setTimeout(()=>{e.remove(),n=null},200)};e.querySelector(".layer-warn-ok").addEventListener("click",s),e.addEventListener("click",a=>{a.target===e&&s()}),document.body.appendChild(e),n=e,requestAnimationFrame(()=>e.classList.add("layer-warn-in"))}export{w as s};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["layer-warning-COR_RpyZ.js"]=1;