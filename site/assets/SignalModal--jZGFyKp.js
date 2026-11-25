const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/trending-keywords-BCSRQWK9.js","assets/news-credibility-DMHd6Jdx.js","assets/corroboration-CzofwUIz.js","assets/source-provenance-hRte-cNu.js","assets/App-DyLzL2rx.js","assets/web-origin-CYWcatKL.js","assets/main-k_5Od7i9.js","assets/clerk-CAuJ7nO4.js","assets/analytics-UdF1aNpQ.js","assets/safe-storage-D7AmwIPS.js","assets/auth-state-DLqMTLIu.js","assets/convex-client-C_8ewSzp.js","assets/i18n-url-C-jHRZJm.js","assets/tauri-bridge-CDOUxP2F.js","assets/theme-colors-ToRFEbn-.js","assets/i18n-qlunRAMb.js","assets/sensitive-url-params-D8a3nWur.js","assets/dom-utils-BodelmHa.js","assets/debugbear-rum-EsMiF_vs.js","assets/panels-XFlv2Kkw.js","assets/runtime-config-tgv8gRzl.js","assets/entitlements-iEraPnPS.js","assets/tab-store-DkGwkIkz.js","assets/map-layer-definitions-BCWegBzb.js","assets/globe-marker-probe-CYyPnhKX.js","assets/theme-manager-C55ZS66X.js","assets/font-settings-B6XmwZwl.js","assets/sanitize-D7dx0cA1.js","assets/panel-gating-B4-XUkuA.js","assets/widget-store-iHraSiA2.js","assets/index-uHNHG_pv.js","assets/storage-quota-BtyHkWgJ.js","assets/panel-storage-BeMdmZSX.js","assets/index-BhmrbbBS.js","assets/persistent-cache-CQ4JFXkz.js","assets/gdelt-intel-DU-_Fjx7.js","assets/storage-facility-registry-store-CQnfNIeM.js","assets/base-DbUvRUGw.js","assets/markets-DAj2UmR6.js","assets/feeds-aP-ckBfk.js","assets/cached-risk-scores-VPXOiY6C.js","assets/ai-flow-settings-BBzyqZr1.js","assets/cross-domain-storage-D1yhRKx4.js","assets/cloud-prefs-sync-D2OclP-M.js","assets/pinned-webcams-BupNXo_I.js","assets/settings-persistence-upJO8T2e.js","assets/panel-display-name-WdCStULx.js","assets/layout-batch-B4TGoGo3.js","assets/continuous-BtUwol-9.js","assets/select-CaWymDL1.js","assets/user-location-CuXnc-7H.js","assets/analysis-framework-store-CEBP11JL.js","assets/referral-capture-nfgYfkjR.js","assets/checkout-B__hYH-o.js","assets/audience-profile-urgLNiEm.js","assets/satellites-5POFc2R_.js","assets/country-names-CcW7ij-o.js","assets/desktop-cloud-auth-9ofESYTf.js","assets/desktop-cloud-access-hint-B048b0JR.js","assets/keyword-spike-core-D9m6pciM.js","assets/dashboard-styles-CAzLzP7U.css"])))=>i.map(i=>d[i]);
var y=Object.defineProperty;var b=(c,s,i)=>s in c?y(c,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):c[s]=i;var m=(c,s,i)=>b(c,typeof s!="symbol"?s+"":s,i);import{_ as S}from"./clerk-CAuJ7nO4.js";import{e as n,s as k}from"./sanitize-D7dx0cA1.js";import{t,a as u}from"./theme-colors-ToRFEbn-.js";import"./map-layer-definitions-BCWegBzb.js";import{g as C}from"./analysis-constants-0xeb9YRW.js";import{s as h,t as x}from"./dom-utils-BodelmHa.js";import{d as w,c as E}from"./main-k_5Od7i9.js";import"./web-origin-CYWcatKL.js";import"./i18n-qlunRAMb.js";import"./i18n-url-C-jHRZJm.js";import"./safe-storage-D7AmwIPS.js";/* empty css                         */import"./analytics-UdF1aNpQ.js";import"./auth-state-DLqMTLIu.js";import"./convex-client-C_8ewSzp.js";import"./tauri-bridge-CDOUxP2F.js";import"./sensitive-url-params-D8a3nWur.js";import"./debugbear-rum-EsMiF_vs.js";import"./panels-XFlv2Kkw.js";import"./runtime-config-tgv8gRzl.js";import"./entitlements-iEraPnPS.js";import"./tab-store-DkGwkIkz.js";import"./globe-marker-probe-CYyPnhKX.js";import"./theme-manager-C55ZS66X.js";import"./font-settings-B6XmwZwl.js";function $(c){if(typeof c=="number"&&Number.isFinite(c))return c;if(typeof c=="string"&&c.trim()!==""){const s=Number(c);if(Number.isFinite(s))return s}}function A(c){const s=c.data&&typeof c.data=="object"?c.data:{},i=c.location??void 0,p=$(s.lat)??$(i==null?void 0:i.lat),a=$(s.lon)??$(i==null?void 0:i.lon);if(p===void 0||a===void 0)return null;const d=typeof s.regionName=="string"?s.regionName:void 0,o=typeof(i==null?void 0:i.name)=="string"?i.name:void 0,r=d||o;return r?{lat:p,lon:a,regionName:r}:{lat:p,lon:a}}const f=12;function L(c){S(()=>import("./trending-keywords-BCSRQWK9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60])).then(s=>s.suppressTrendingTerm(c)).catch(s=>{console.warn("[SignalModal] suppressTrendingTerm failed (chunk load?):",s)})}class es{constructor(){m(this,"element");m(this,"currentSignals",[]);m(this,"audioEnabled",!0);m(this,"audio",null);m(this,"onLocationClick");m(this,"escHandler",s=>{s.key==="Escape"&&this.hide()});m(this,"focusTrap",null);this.element=document.createElement("div"),this.element.className="signal-modal-overlay",this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-modal","true"),w(this.element,{reload:"safe"}),h(this.element,x(`
      <div class="signal-modal">
        <div class="signal-modal-header">
          <span class="signal-modal-title">🎯 ${t("modals.signal.title")}</span>
          <button class="signal-modal-close" aria-label="Close">×</button>
        </div>
        <div class="signal-modal-content"></div>
        <div class="signal-modal-footer">
          <label class="signal-audio-toggle">
            <input type="checkbox" checked>
            <span>${t("modals.signal.soundAlerts")}</span>
          </label>
          <button class="signal-dismiss-btn">${t("modals.signal.dismiss")}</button>
        </div>
      </div>
    `,"legacy direct innerHTML migration")),document.body.appendChild(this.element),this.setupEventListeners(),this.initAudio();const s=this.element.querySelector(".signal-modal");s==null||s.addEventListener("animationend",()=>{s.style.willChange="auto"},{once:!0})}initAudio(){this.audio=new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQYjfKapmWswEjCJvuPQfSoXZZ+3qqBJESSP0unGaxMJVYiytrFeLhR6p8znrFUXRW+bs7V3Qx1hn8Xjp1cYPnegprhkMCFmoLi1k0sZTYGlqqlUIA=="),this.audio.volume=.3}setupEventListeners(){var i,p;(i=this.element.querySelector(".signal-modal-close"))==null||i.addEventListener("click",()=>{this.hide()}),(p=this.element.querySelector(".signal-dismiss-btn"))==null||p.addEventListener("click",()=>{this.hide()}),this.element.addEventListener("click",a=>{a.target.classList.contains("signal-modal-overlay")&&this.hide()});const s=this.element.querySelector('input[type="checkbox"]');s==null||s.addEventListener("change",()=>{this.audioEnabled=s.checked}),this.element.addEventListener("click",a=>{const d=a.target;if(d.classList.contains("location-link")){const o=parseFloat(d.dataset.lat||"0"),r=parseFloat(d.dataset.lon||"0");this.onLocationClick&&!Number.isNaN(o)&&!Number.isNaN(r)&&(this.onLocationClick(o,r),this.hide());return}if(d.classList.contains("suppress-keyword-btn")){const o=(d.dataset.term||"").trim();if(!o)return;L(o),this.currentSignals=this.currentSignals.filter(r=>{const e=r.data.term;return typeof e!="string"||e.toLowerCase()!==o.toLowerCase()}),this.renderSignals()}})}setLocationClickHandler(s){this.onLocationClick=s}activateEsc(s=!0){document.addEventListener("keydown",this.escHandler),s&&(this.focusTrap??(this.focusTrap=E(this.element,{initialFocus:()=>this.element.querySelector(".signal-modal-close")})),this.focusTrap.activate())}show(s){s.length!==0&&(document.fullscreenElement||(this.currentSignals=[...s,...this.currentSignals].slice(0,50),this.renderSignals(),this.element.classList.add("active"),this.activateEsc(!1),this.playSound()))}showSignal(s){this.currentSignals=[s],this.renderSignals(),this.element.classList.add("active"),this.activateEsc()}showAlert(s){if(document.fullscreenElement)return;const i=this.element.querySelector(".signal-modal-content"),p={critical:u("--semantic-critical"),high:u("--semantic-high"),medium:u("--semantic-low"),low:u("--text-dim")},d={cii_spike:"📊",convergence:"🌍",cascade:"⚡",sanctions:"🚫",radiation:"☢️",composite:"🔗"}[s.type]||"⚠️",o=p[s.priority]||"#ff9944";let r="";if(s.components.ciiChange){const e=s.components.ciiChange,l=e.change>0?"+":"";r+=`
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.country")}</span>
          <span class="context-value">${n(e.countryName)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.scoreChange")}</span>
          <span class="context-value">${e.previousScore} → ${e.currentScore} (${l}${e.change})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.instabilityLevel")}</span>
          <span class="context-value" style="text-transform: uppercase; color: ${o}">${e.level}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.primaryDriver")}</span>
          <span class="context-value">${n(e.driver)}</span>
        </div>
      `}if(s.components.convergence){const e=s.components.convergence;r+=`
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.location")}</span>
          <button class="location-link" data-lat="${e.lat}" data-lon="${e.lon}">${e.lat.toFixed(2)}°, ${e.lon.toFixed(2)}° ↗</button>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.eventTypes")}</span>
          <span class="context-value">${e.types.join(", ")}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.eventCount")}</span>
          <span class="context-value">${t("modals.signal.eventCountValue",{count:e.totalEvents})}</span>
        </div>
      `}if(s.components.cascade){const e=s.components.cascade;r+=`
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.source")}</span>
          <span class="context-value">${n(e.sourceName)} (${n(e.sourceType)})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.countriesAffected")}</span>
          <span class="context-value">${e.countriesAffected}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.impactLevel")}</span>
          <span class="context-value">${n(e.highestImpact)}</span>
        </div>
      `}if(s.components.sanctions){const e=s.components.sanctions;r+=`
        <div class="signal-context-item">
          <span class="context-label">Country</span>
          <span class="context-value">${n(e.countryName)} (${n(e.countryCode)})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Pressure</span>
          <span class="context-value">${e.entryCount} designations${e.newEntryCount>0?` · +${e.newEntryCount} new`:""}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Top program</span>
          <span class="context-value">${n(e.topProgram)} (${e.topProgramCount})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Vessels / aircraft</span>
          <span class="context-value">${e.vesselCount} / ${e.aircraftCount}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Dataset size</span>
          <span class="context-value">${e.totalCount}${e.datasetDate?` · ${new Date(e.datasetDate).toISOString().slice(0,10)}`:""}</span>
        </div>
      `}if(s.components.radiation){const e=s.components.radiation;r+=`
        <div class="signal-context-item">
          <span class="context-label">Station</span>
          <span class="context-value">${n(e.siteName)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Reading</span>
          <span class="context-value">${e.value.toFixed(1)} ${n(e.unit)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Baseline</span>
          <span class="context-value">${e.baselineValue.toFixed(1)} ${n(e.unit)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Delta / z-score</span>
          <span class="context-value">+${e.delta.toFixed(1)} / ${e.zScore.toFixed(2)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Confidence</span>
          <span class="context-value">${n(e.confidence)}${e.corroborated?" · confirmed":""}${e.conflictingSources?" · conflicting":""}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Sources</span>
          <span class="context-value">${n(e.contributingSources.join(" + "))} (${e.sourceCount})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Anomalies in batch</span>
          <span class="context-value">${e.anomalyCount} total (${e.spikeCount} spike, ${e.elevatedCount} elevated, ${e.corroboratedCount} confirmed)</span>
        </div>
      `}h(i,x(`
      <div class="signal-item" style="border-left-color: ${o}">
        <div class="signal-type">${d} ${s.type.toUpperCase().replace("_"," ")}</div>
        <div class="signal-title">${n(s.title)}</div>
        <div class="signal-description">${n(s.summary)}</div>
        <div class="signal-meta">
          <span class="signal-confidence" style="background: ${o}22; color: ${o}">${s.priority.toUpperCase()}</span>
          <span class="signal-time">${this.formatTime(s.timestamp)}</span>
        </div>
        <div class="signal-context">
          ${r}
        </div>
        ${s.countries.length>0?`
          <div class="signal-topics">
            ${s.countries.map(e=>`<span class="signal-topic">${n(e)}</span>`).join("")}
          </div>
        `:""}
      </div>
    `,"legacy direct innerHTML migration")),this.element.classList.add("active"),this.activateEsc()}playSound(){var s;this.audioEnabled&&this.audio&&(this.audio.currentTime=0,(s=this.audio.play())==null||s.catch(()=>{}))}hide(){var s;this.element.classList.remove("active"),document.removeEventListener("keydown",this.escHandler),(s=this.focusTrap)==null||s.deactivate()}renderSignals(){const s=this.element.querySelector(".signal-modal-content"),i={prediction_leads_news:`🔮 ${t("modals.signal.predictionLeading")}`,news_leads_markets:`📰 ${t("modals.signal.newsLeading")}`,silent_divergence:`🔇 ${t("modals.signal.silentDivergence")}`,velocity_spike:`🔥 ${t("modals.signal.velocitySpike")}`,keyword_spike:`📊 ${t("modals.signal.keywordSpike")}`,convergence:`◉ ${t("modals.signal.convergence")}`,triangulation:`△ ${t("modals.signal.triangulation")}`,flow_drop:`🛢️ ${t("modals.signal.flowDrop")}`,flow_price_divergence:`📈 ${t("modals.signal.flowPriceDivergence")}`,geo_convergence:`🌐 ${t("modals.signal.geoConvergence")}`,explained_market_move:`✓ ${t("modals.signal.marketMove")}`,sector_cascade:`📊 ${t("modals.signal.sectorCascade")}`,military_surge:`🛩️ ${t("modals.signal.militarySurge")}`},p=this.currentSignals.map(a=>{var v;const d=C(a.type),o=a.data,r=o==null?void 0:o.newsCorrelation,e=o==null?void 0:o.focalPointContext,l=A(a);return`
        <div class="signal-item ${n(a.type)}">
          <div class="signal-type">${i[a.type]||n(a.type)}</div>
          <div class="signal-title">${n(a.title)}</div>
          <div class="signal-description">${n(a.description)}</div>
          <div class="signal-meta">
            <span class="signal-confidence">${t("modals.signal.confidence")}: ${Math.round(a.confidence*100)}%</span>
            <span class="signal-time">${this.formatTime(a.timestamp)}</span>
          </div>
          ${a.data.explanation?`
            <div class="signal-explanation">${n(a.data.explanation)}</div>
          `:""}
          ${e&&e.length>0?`
            <div class="signal-focal-points">
              <div class="focal-points-header">📡 ${t("modals.signal.focalPoints")}</div>
              ${e.map(g=>`<div class="focal-point-item">${n(g)}</div>`).join("")}
            </div>
          `:""}
          ${r?`
            <div class="signal-news-correlation">
              <div class="news-correlation-header">📰 ${t("modals.signal.newsCorrelation")}</div>
              <pre class="news-correlation-text">${n(r)}</pre>
            </div>
          `:""}
          ${l?`
            <div class="signal-location">
              <button class="location-link" data-lat="${l.lat}" data-lon="${l.lon}">
                📍 ${t("modals.signal.viewOnMap")}: ${l.regionName?n(l.regionName):`${l.lat.toFixed(2)}°, ${l.lon.toFixed(2)}°`}
              </button>
            </div>
          `:""}
          <div class="signal-context">
            <div class="signal-context-item why-matters">
              <span class="context-label">${t("modals.signal.whyItMatters")}</span>
              <span class="context-value">${n(d.whyItMatters)}</span>
            </div>
            <div class="signal-context-item actionable">
              <span class="context-label">${t("modals.signal.action")}</span>
              <span class="context-value">${n(d.actionableInsight)}</span>
            </div>
            <div class="signal-context-item confidence-note">
              <span class="context-label">${t("modals.signal.note")}</span>
              <span class="context-value">${n(d.confidenceNote)}</span>
            </div>
          </div>
          ${(v=a.data.relatedTopics)!=null&&v.length?`
            <div class="signal-topics">
              ${a.data.relatedTopics.map(g=>`<span class="signal-topic">${n(g)}</span>`).join("")}
            </div>
          `:""}
          ${this.renderSpikeEvidence(a)}
          ${a.type==="keyword_spike"&&typeof(o==null?void 0:o.term)=="string"?`
            <div class="signal-actions">
              <button class="suppress-keyword-btn" data-term="${n(o.term)}">${t("modals.signal.suppress")}</button>
            </div>
          `:""}
        </div>
      `}).join("");h(s,x(p,"legacy direct innerHTML migration"))}renderSpikeEvidence(s){if(s.type!=="keyword_spike")return"";const i=s.data,p=Array.isArray(i.sourceNames)?i.sourceNames.filter(l=>typeof l=="string"&&l.trim().length>0):[],a=Array.isArray(i.articles)?i.articles.filter(l=>!!l&&typeof l.title=="string"&&l.title.length>0):[];if(p.length===0&&a.length===0)return"";const d=p.slice(0,f),o=p.length-d.length,r=p.length?`
      <div class="signal-sources">
        <span class="signal-sources-label">${t("header.sources")}</span>
        ${d.map(l=>`<span class="signal-source-chip">${n(l)}</span>`).join("")}
        ${o>0?`<span class="signal-source-chip signal-source-chip-more">+${o}</span>`:""}
      </div>
    `:"",e=a.length?`
      <div class="signal-articles">
        <div class="signal-articles-header">📰 ${t("popups.relatedHeadlines")}</div>
        ${a.slice(0,f).map(l=>{const v=typeof l.link=="string"?k(l.link):"",g=n(l.title);return`
            <div class="signal-article-item">
              <span class="news-source">${n(l.source??"")}</span>
              ${v?`<a class="news-title" href="${v}" target="_blank" rel="noopener noreferrer">${g}</a>`:`<span class="news-title">${g}</span>`}
            </div>
          `}).join("")}
      </div>
    `:"";return`${r}${e}`}formatTime(s){return s.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}getElement(){return this.element}}export{es as SignalModal};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["SignalModal--jZGFyKp.js"]=1;