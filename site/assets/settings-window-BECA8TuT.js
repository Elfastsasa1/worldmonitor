import{t as a,S as l}from"./theme-colors-ToRFEbn-.js";import{S as u}from"./base-DbUvRUGw.js";import"./markets-DAj2UmR6.js";import"./feeds-aP-ckBfk.js";import{A as r,V as P,g as p,D as T,a as h,b as L,c as C,F as D,u as $}from"./panels-XFlv2Kkw.js";import{d as c}from"./widget-store-iHraSiA2.js";import{l as F,s as _}from"./index-uHNHG_pv.js";import{g as k}from"./panel-display-name-WdCStULx.js";import{e as o}from"./sanitize-D7dx0cA1.js";import{s as E,t as v}from"./dom-utils-BodelmHa.js";import{i as H}from"./clerk-CAuJ7nO4.js";import"./i18n-qlunRAMb.js";import"./i18n-url-C-jHRZJm.js";import"./web-origin-CYWcatKL.js";import"./safe-storage-D7AmwIPS.js";import"./persistent-cache-CQ4JFXkz.js";import"./tauri-bridge-CDOUxP2F.js";import"./storage-quota-BtyHkWgJ.js";import"./map-layer-definitions-BCWegBzb.js";import"./source-provenance-hRte-cNu.js";import"./runtime-config-tgv8gRzl.js";import"./entitlements-iEraPnPS.js";import"./convex-client-C_8ewSzp.js";import"./panel-storage-BeMdmZSX.js";import"./auth-state-DLqMTLIu.js";function ae(){var f;const m=document.getElementById("app");if(!m)return;document.title=`${a("header.settings")} - World Monitor`;const s=F(u.panels,T),b=new Set(Object.keys(r));for(const n of Object.keys(s))!b.has(n)&&n!=="runtime-config"&&delete s[n];const w=new Set(P[l]??[]);for(const n of Object.keys(r))n in s||(s[n]={...p(n,l),enabled:w.has(n)});const S=H();function g(){const A=Object.entries(s).filter(([e])=>(e!=="runtime-config"||S)&&(!e.startsWith("cw-")||c())).map(([e,t])=>{const i=r[e]?p(e,l):t;return`
        <div class="panel-toggle-item ${t.enabled?"active":""}" data-panel="${o(e)}">
          <div class="panel-toggle-checkbox">${t.enabled?"✓":""}</div>
          <span class="panel-toggle-label">${o(k(e,i.name??t.name))}</span>
        </div>
      `}).join(""),d=document.getElementById("panelToggles");d&&(E(d,v(A,"legacy direct innerHTML migration")),d.querySelectorAll(".panel-toggle-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.panel,i=s[t];if(i){const y=r[t]?p(t,l):i;if(!i.enabled&&!h(t,y,c())||!i.enabled&&!c()&&L(t)&&C(s)>=D)return;$(i,!i.enabled),_(u.panels,s),g()}})}))}E(m,v(`
    <div class="settings-window-shell">
      <div class="settings-window-header">
        <div class="settings-window-header-text">
          <span class="settings-window-title">${o(a("header.settings"))}</span>
          <p class="settings-window-caption">${o(a("header.panelDisplayCaption"))}</p>
        </div>
        <button type="button" class="modal-close" id="settingsWindowClose" aria-label="${o(a("common.close"))}">×</button>
      </div>
      <div class="panel-toggle-grid" id="panelToggles"></div>
    </div>
  `,"legacy direct innerHTML migration")),(f=document.getElementById("settingsWindowClose"))==null||f.addEventListener("click",()=>{window.close()}),g()}export{ae as initSettingsWindow};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["settings-window-BECA8TuT.js"]=1;