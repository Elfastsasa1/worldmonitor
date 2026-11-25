import{ci as D,ai as ue,cj as ye}from"./App-DyLzL2rx.js";import{t as n}from"./theme-colors-ToRFEbn-.js";import{d as fe,c as ve}from"./main-k_5Od7i9.js";import{e as a}from"./sanitize-D7dx0cA1.js";import{p as he}from"./feeds-aP-ckBfk.js";import{x as be}from"./gdelt-intel-DU-_Fjx7.js";import{h as J}from"./analytics-UdF1aNpQ.js";import{s as x,t as K}from"./dom-utils-BodelmHa.js";import"./web-origin-CYWcatKL.js";import"./clerk-CAuJ7nO4.js";import"./map-layer-definitions-BCWegBzb.js";import"./panel-gating-B4-XUkuA.js";import"./entitlements-iEraPnPS.js";import"./convex-client-C_8ewSzp.js";import"./i18n-url-C-jHRZJm.js";import"./safe-storage-D7AmwIPS.js";import"./runtime-config-tgv8gRzl.js";import"./tauri-bridge-CDOUxP2F.js";import"./i18n-qlunRAMb.js";import"./widget-store-iHraSiA2.js";import"./index-uHNHG_pv.js";import"./storage-quota-BtyHkWgJ.js";import"./panel-storage-BeMdmZSX.js";import"./auth-state-DLqMTLIu.js";import"./index-BhmrbbBS.js";import"./persistent-cache-CQ4JFXkz.js";import"./debugbear-rum-EsMiF_vs.js";import"./sensitive-url-params-D8a3nWur.js";import"./storage-facility-registry-store-CQnfNIeM.js";import"./base-DbUvRUGw.js";import"./markets-DAj2UmR6.js";import"./panels-XFlv2Kkw.js";import"./corroboration-CzofwUIz.js";import"./source-provenance-hRte-cNu.js";import"./cached-risk-scores-VPXOiY6C.js";import"./news-credibility-DMHd6Jdx.js";import"./ai-flow-settings-BBzyqZr1.js";import"./cross-domain-storage-D1yhRKx4.js";import"./cloud-prefs-sync-D2OclP-M.js";import"./pinned-webcams-BupNXo_I.js";import"./settings-persistence-upJO8T2e.js";import"./panel-display-name-WdCStULx.js";import"./layout-batch-B4TGoGo3.js";import"./continuous-BtUwol-9.js";import"./select-CaWymDL1.js";import"./user-location-CuXnc-7H.js";import"./analysis-framework-store-CEBP11JL.js";import"./tab-store-DkGwkIkz.js";import"./referral-capture-nfgYfkjR.js";import"./checkout-B__hYH-o.js";/* empty css                         */import"./globe-marker-probe-CYyPnhKX.js";import"./theme-manager-C55ZS66X.js";import"./font-settings-B6XmwZwl.js";import"./audience-profile-urgLNiEm.js";import"./satellites-5POFc2R_.js";import"./country-names-CcW7ij-o.js";import"./desktop-cloud-auth-9ofESYTf.js";import"./desktop-cloud-access-hint-B048b0JR.js";const ee=ye/1e3;let p=null,N=null;function te(m,t){const s=m.indexOf(":");if(s===-1)return{};const b=m.slice(0,s).trim(),$=m.slice(s+1).trim().replace("{key}",t.trim());return{[b]:$}}function z(m,t){const s=t.indexOf(":");if(s===-1)return null;const b=t.slice(0,s).trim(),$=t.slice(s+1).trim(),i=m[b];if(!i)return null;const M=$.indexOf("{key}"),f=$.slice(0,M).trim();return f&&!i.startsWith(f)?null:i.slice(f?f.length+1:0).trim()||null}function se(m){const t=m.match(/\(([^)]+)\)\s*$/);return(t==null?void 0:t[1])??m}function Et(m){var Q,X;_();const t=m.existingSpec;p=document.createElement("div"),p.className="modal-overlay active",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),fe(p,{reload:"blocking"}),p.setAttribute("aria-label",n("mcp.modalTitle"));const s=document.createElement("div");s.className="modal mcp-connect-modal";const b=D.map(e=>`
    <button class="mcp-preset-card" data-url="${a(e.serverUrl)}"
      data-tool="${a(e.defaultTool??"")}"
      data-args="${a(JSON.stringify(e.defaultArgs??{}))}"
      data-title="${a(e.defaultTitle??e.name)}"
      data-auth-note="${a(e.authNote??"")}"
      data-api-key-header="${a(e.apiKeyHeader??"")}">
      <span class="mcp-preset-icon">${e.icon}</span>
      <span class="mcp-preset-info">
        <span class="mcp-preset-name">${a(e.name)}</span>
        <span class="mcp-preset-desc">${a(e.description)}</span>
      </span>
      ${e.authNote?'<span class="mcp-preset-key-badge">🔑</span>':""}
    </button>
  `).join(""),$=(t==null?void 0:t.customHeaders)??{},i=t?D.find(e=>e.serverUrl===t.serverUrl&&e.apiKeyHeader):void 0,M=i!=null&&i.apiKeyHeader?z($,i.apiKeyHeader):null,f=!t||!!M,oe=M??"",ce=f?"":ae($);x(s,K(`
    <div class="modal-header">
      <span class="modal-title">${a(n("mcp.modalTitle"))}</span>
      <button class="modal-close" aria-label="${a(n("common.close"))}">✕</button>
    </div>
    <div class="mcp-connect-body">
      ${t?"":`
      <div class="mcp-presets-section">
        <label class="mcp-label">${a(n("mcp.quickConnect"))}</label>
        <div class="mcp-presets-list">${b}</div>
      </div>
      <div class="mcp-section-divider"><span>${a(n("mcp.or"))}</span></div>
      `}
      <div class="mcp-form-group">
        <label class="mcp-label">${a(n("mcp.serverUrl"))}</label>
        <input class="mcp-input mcp-server-url" type="url"
          placeholder="https://my-mcp-server.com/mcp"
          value="${a((t==null?void 0:t.serverUrl)??"")}" />
      </div>
      <div class="mcp-form-group mcp-api-key-group" style="${f?"":"display:none"}">
        <label class="mcp-label">${a(n("mcp.apiKey"))}</label>
        <input class="mcp-input mcp-api-key" type="text" autocomplete="off"
          placeholder="${a(n("mcp.apiKeyPlaceholder"))}"
          value="${a(oe)}" />
        <span class="mcp-api-key-hint"></span>
        <button type="button" class="mcp-auth-mode-btn mcp-to-advanced">${a(n("mcp.useCustomHeaders"))}</button>
      </div>
      <div class="mcp-form-group mcp-auth-header-group" style="${f?"display:none":""}">
        <label class="mcp-label">${a(n("mcp.authHeader"))} <span class="mcp-optional">(${n("mcp.optional")})</span></label>
        <input class="mcp-input mcp-auth-header" type="text"
          placeholder="Authorization: Bearer token123; x-api-key: key456"
          value="${a(ce)}" />
        <button type="button" class="mcp-auth-mode-btn mcp-to-simple" style="display:none">${a(n("mcp.useApiKey"))}</button>
      </div>
      <div class="mcp-connect-actions">
        <button class="btn btn-secondary mcp-connect-btn">${a(n("mcp.connectBtn"))}</button>
        <span class="mcp-connect-status"></span>
      </div>
      <div class="mcp-tools-section" style="display:none">
        <label class="mcp-label">${a(n("mcp.selectTool"))}</label>
        <div class="mcp-tools-list"></div>
      </div>
      <div class="mcp-tool-config" style="display:none">
        <div class="mcp-form-group">
          <label class="mcp-label">${a(n("mcp.toolArgs"))}</label>
          <textarea class="mcp-input mcp-tool-args" rows="3" placeholder="{}"></textarea>
          <span class="mcp-args-error" style="display:none;color:var(--red)"></span>
        </div>
        <div class="mcp-form-group">
          <label class="mcp-label">${a(n("mcp.panelTitle"))}</label>
          <input class="mcp-input mcp-panel-title" type="text"
            placeholder="${a(n("mcp.panelTitlePlaceholder"))}"
            value="${a((t==null?void 0:t.title)??"")}" />
        </div>
        <div class="mcp-form-group mcp-refresh-group">
          <label class="mcp-label">${a(n("mcp.refreshEvery"))}</label>
          <input class="mcp-input mcp-refresh-input" type="number" min="${ee}" max="86400"
            value="${t?Math.round(t.refreshIntervalMs/1e3):ee}" />
          <span class="mcp-refresh-unit">${a(n("mcp.seconds"))}</span>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost mcp-cancel-btn">${a(n("common.cancel"))}</button>
      <button class="btn btn-primary mcp-add-btn" disabled>${a(n("mcp.addPanel"))}</button>
    </div>
  `,"legacy direct innerHTML migration")),p.appendChild(s),document.body.appendChild(p),N=ve(p,{onEscape:()=>_()}),N.activate();let O=[],g=t?{name:t.toolName}:null;const G="Authorization: Bearer {key}";let y=(i==null?void 0:i.apiKeyHeader)??(f?G:"");const S=s.querySelector(".mcp-server-url"),H=s.querySelector(".mcp-api-key-group"),E=s.querySelector(".mcp-api-key"),C=s.querySelector(".mcp-api-key-hint"),ne=s.querySelector(".mcp-to-advanced"),k=s.querySelector(".mcp-auth-header-group"),L=s.querySelector(".mcp-auth-header"),A=s.querySelector(".mcp-to-simple"),w=s.querySelector(".mcp-connect-btn"),d=s.querySelector(".mcp-connect-status"),U=s.querySelector(".mcp-tools-section"),T=s.querySelector(".mcp-tools-list"),j=s.querySelector(".mcp-tool-config"),q=s.querySelector(".mcp-tool-args"),R=s.querySelector(".mcp-args-error"),I=s.querySelector(".mcp-panel-title"),le=s.querySelector(".mcp-refresh-input"),V=s.querySelector(".mcp-add-btn");function re(){return H.style.display!=="none"}function P(){if(re()&&y){const e=E.value.trim();return e?te(y,e):{}}return Z(L.value)}function ie(){var l;const e=(l=D.find(r=>r.serverUrl===S.value.trim()))==null?void 0:l.apiKeyHeader;if(!e)return!0;const o=e.slice(0,e.indexOf(":")).trim(),c=Object.entries(P()).find(([r])=>r.toLowerCase()===o.toLowerCase());return!!c&&z({[o]:c[1]},e)!==null}function W(){return g!==null&&ie()}function v(){V.disabled=!W()}S.addEventListener("input",v),E.addEventListener("input",v),L.addEventListener("input",v);function Y(e){y=e.apiKeyHeader??"",H.style.display="",k.style.display="none",A.style.display="none",e.authNote?C.textContent=se(e.authNote):C.textContent=""}function pe(e=!0){e&&y&&E.value.trim()&&(L.value=ae(te(y,E.value.trim()))),H.style.display="none",k.style.display="",y&&(A.style.display="")}ne.addEventListener("click",()=>{pe(!0),v()}),A.addEventListener("click",()=>{if(y){const e=Z(L.value),o=z(e,y);o&&(E.value=o)}H.style.display="",k.style.display="none",A.style.display="none",v()}),f&&(i!=null&&i.authNote)&&(C.textContent=se(i.authNote)),t||S.addEventListener("input",()=>{const e=S.value.trim(),o=Array.from(s.querySelectorAll(".mcp-preset-card")),c=o.find(l=>l.dataset.url===e);if(c){o.forEach(h=>h.classList.remove("selected")),c.classList.add("selected");const l=c.dataset.apiKeyHeader??"",r=c.dataset.authNote??"";l?Y({apiKeyHeader:l,authNote:r}):(y="",H.style.display="none",C.textContent="",k.style.display="",A.style.display="none")}else o.forEach(l=>l.classList.remove("selected")),y=G,H.style.display="",C.textContent="",k.style.display="none",A.style.display="none";v()}),s.querySelectorAll(".mcp-preset-card").forEach(e=>{e.addEventListener("click",()=>{s.querySelectorAll(".mcp-preset-card").forEach(h=>h.classList.remove("selected")),e.classList.add("selected"),S.value=e.dataset.url??"";const o=e.dataset.apiKeyHeader??"",c=e.dataset.authNote??"";o?(Y({apiKeyHeader:o,authNote:c}),E.value="",d.textContent="",d.className="mcp-connect-status"):(y="",H.style.display="none",k.style.display="",A.style.display="none",L.value="",c?(d.textContent=`🔑 ${c}`,d.className="mcp-connect-status mcp-status-info"):(d.textContent="",d.className="mcp-connect-status"));const l=e.dataset.tool,r=e.dataset.args,u=e.dataset.title;l&&(g={name:l,description:""},q.value=r||"{}",u&&(I.value=u),j.style.display="",U.style.display="",x(T,K(`<div class="mcp-tool-item selected"><span class="mcp-tool-name">${a(l)}</span></div>`,"legacy direct innerHTML migration"))),v()})}),t&&(q.value=Object.keys(t.toolArgs).length?JSON.stringify(t.toolArgs,null,2):"{}",j.style.display="",U.style.display="",x(T,K(`<div class="mcp-tool-item selected">${a(t.toolName)}</div>`,"legacy direct innerHTML migration")),v());function Z(e){const o=e.trim();if(!o)return{};const c={};for(const l of o.split(/;\s+(?=[A-Za-z0-9_-]+\s*:)/)){const r=l.indexOf(":");if(r===-1)continue;const u=l.slice(0,r).trim(),h=l.slice(r+1).trim();u&&(c[u]=h)}return c}function me(e){x(T,K("","legacy direct innerHTML migration"));for(const o of e){const c=document.createElement("div");c.className="mcp-tool-item";const l=o.description?o.description.length>100?o.description.slice(0,97)+"…":o.description:"";x(c,K(`
        <span class="mcp-tool-name">${a(o.name)}</span>
        ${l?`<span class="mcp-tool-desc">${a(l)}</span>`:""}
      `,"legacy direct innerHTML migration")),c.addEventListener("click",()=>{T.querySelectorAll(".mcp-tool-item").forEach(u=>u.classList.remove("selected")),c.classList.add("selected"),g=o,I.value||(I.value=o.name);const r=o.inputSchema;if(r!=null&&r.properties){const u={};for(const[h,de]of Object.entries(r.properties)){const B=de;B.default!==void 0&&B.default!==null&&(u[h]=B.default)}q.value=Object.keys(u).length?JSON.stringify(u,null,2):"{}"}else q.value="{}";j.style.display="",v()}),T.appendChild(c)}}w.addEventListener("click",async()=>{const e=S.value.trim();if(e){J("mcp-connect-attempt"),d.textContent=n("mcp.connecting"),d.className="mcp-connect-status mcp-status-loading",w.disabled=!0;try{const o=P(),c=await be(he("/api/mcp-proxy"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"tools/list",serverUrl:e,customHeaders:o}),signal:AbortSignal.timeout(2e4)}),l=await c.json();if(!c.ok||l.error)throw new Error(l.error||`HTTP ${c.status}`);O=l.tools??[],d.textContent=n("mcp.foundTools",{count:String(O.length)}),d.className="mcp-connect-status mcp-status-ok",J("mcp-connect-success",{toolCount:O.length}),U.style.display="",me(O)}catch(o){const c=o instanceof Error?o.message:String(o);d.textContent=`${n("mcp.connectFailed")}: ${c}`,d.className="mcp-connect-status mcp-status-error"}finally{w.disabled=!1}}}),V.addEventListener("click",()=>{if(!g||!W())return;J("mcp-panel-add",{tool:g.name}),R.style.display="none";let e={};try{e=JSON.parse(q.value||"{}")}catch{R.textContent=n("mcp.invalidJson"),R.style.display="";return}const c={id:(t==null?void 0:t.id)??`mcp-${crypto.randomUUID()}`,title:I.value.trim()||g.name,serverUrl:S.value.trim(),customHeaders:P(),toolName:g.name,toolArgs:e,refreshIntervalMs:ue(parseInt(le.value,10)*1e3),createdAt:(t==null?void 0:t.createdAt)??Date.now(),updatedAt:Date.now()};_(),m.onComplete(c)});const F=()=>_();(Q=s.querySelector(".modal-close"))==null||Q.addEventListener("click",F),(X=s.querySelector(".mcp-cancel-btn"))==null||X.addEventListener("click",F),p.addEventListener("click",e=>{e.target===p&&F()})}function ae(m){const t=Object.entries(m);return t.length?t.map(([s,b])=>`${s}: ${b}`).join("; "):""}function _(){N==null||N.deactivate(),N=null,p==null||p.remove(),p=null}export{_ as closeMcpConnectModal,Et as openMcpConnectModal};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["McpConnectModal-DyW_972S.js"]=1;