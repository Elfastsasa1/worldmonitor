var et=Object.defineProperty;var st=(p,g,t)=>g in p?et(p,g,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[g]=t;var o=(p,g,t)=>st(p,typeof g!="symbol"?g+"":g,t);import{P as L}from"./Panel-CJQVCfYg.js";import{t as i,g as it,a as T,L as at}from"./theme-colors-ToRFEbn-.js";import{d as rt,g as nt}from"./index-BhmrbbBS.js";import{r as ot,h as f,t as y,i as ct,s as E}from"./dom-utils-BodelmHa.js";import{s as J,e as c,u as P,a as k,j as H}from"./sanitize-D7dx0cA1.js";import"./map-layer-definitions-BCWegBzb.js";import{i as lt}from"./clerk-CAuJ7nO4.js";import{calculateStrategicRiskOverview as dt,getRecentAlerts as pt,getAlertCount as ht}from"./cross-module-integration-BaQePjQM.js";import{e as ut,h as mt,c as gt,i as vt}from"./cached-risk-scores-VPXOiY6C.js";import{A as R,Z as q,_ as ft,$ as yt,Y as bt,a0 as $t,a1 as kt}from"./gdelt-intel-DU-_Fjx7.js";import{a8 as St,bk as wt,bl as Ct,bm as Tt,bn as Et}from"./App-DyLzL2rx.js";import{b as x}from"./activation-DdoRK80V.js";import{r as I}from"./military-surge-BdmFo7lX.js";import{b as Pt}from"./news-context-CvrWW5B9.js";import{c as Lt,a as z,h as Dt,w as Rt}from"./scope-attribution-DA7XBdfA.js";import{P as X,a as F,b as N}from"./panel-scope-filter-CSSR8rsn.js";/* empty css                        */import{fetchAirportOpsSummary as W,fetchGoogleDates as Ft,fetchGoogleFlights as Nt,fetchAviationNews as xt,fetchFlightStatus as At,fetchAircraftPositions as O,fetchCarrierOps as It,fetchAirportFlights as Ot}from"./index-wPXk8AjD.js";import{a as Y,f as Mt}from"./board-time-DR5erZBz.js";function _t(p){switch(p){case"H04B":return i("components.defensePatents.cpcLabels.H04B");case"H01L":return i("components.defensePatents.cpcLabels.H01L");case"F42B":return i("components.defensePatents.cpcLabels.F42B");case"G06N":return i("components.defensePatents.cpcLabels.G06N");case"C12N":return i("components.defensePatents.cpcLabels.C12N");default:return p}}const Bt=["H04B","H01L","F42B","G06N","C12N"],jt={H04B:"📡",H01L:"💾",F42B:"💣",G06N:"🤖",C12N:"🧬"};let M=null;function Ht(){return M||(M=new rt(nt(),{fetch:(...p)=>globalThis.fetch(...p)})),M}class Vt extends L{constructor(){super({id:"defense-patents",title:i("components.defensePatents.title"),showCount:!0,infoTooltip:i("components.defensePatents.infoTooltip")});o(this,"viewMode","all");o(this,"patents",[]);o(this,"loading",!0);o(this,"error",null);this.element.classList.add("panel-tall"),this.fetchPatents()}async fetchPatents(){var t,e;this.loading=!0,this.error=null,this.render();try{const s=await Ht().listDefensePatents({cpcCode:"",assignee:"",limit:100});if(!((t=this.element)!=null&&t.isConnected))return;this.patents=s.patents??[],this.setCount(s.total??this.patents.length),this.error=null}catch(s){if(this.isAbortError(s)||!((e=this.element)!=null&&e.isConnected))return;this.error=i("components.defensePatents.error"),console.error("[DefensePatents] Fetch error:",s)}this.loading=!1,this.render()}render(){if(this.loading){ot(this.content,f("div",{className:"defense-patents-loading"},f("div",{className:"loading-spinner"}),f("span",null,i("components.defensePatents.loading"))));return}if(this.error){this.showError(this.error,()=>this.refresh());return}const t=[["all",i("components.defensePatents.tabs.all")],...Bt.map(s=>[s,_t(s)])],e=this.getFiltered();this.setContentNodes(f("div",{className:"defense-patents-panel"},f("div",{className:"panel-tabs"},...t.map(([s,r])=>f("button",{className:`panel-tab ${this.viewMode===s?"active":""}`,onClick:()=>{this.viewMode=s,this.render()}},r))),f("div",{className:"defense-patents-list"},...e.length>0?e.map(s=>this.buildRow(s)):[f("div",{className:"empty-state"},i("components.defensePatents.empty"))])))}getFiltered(){return this.viewMode==="all"?this.patents.slice(0,50):this.patents.filter(t=>t.cpcCode===this.viewMode).slice(0,30)}buildRow(t){const e=t.date?new Date(t.date).toLocaleDateString(it(),{month:"short",day:"numeric",year:"numeric"}):"",s=jt[t.cpcCode]??"🔬",r=J(t.url||"");return f("div",{className:"defense-patent-row"},f("div",{className:"patent-icon",title:t.cpcDesc||t.cpcCode},s),f("div",{className:"patent-body"},f("div",{className:"patent-header"},f("span",{className:"patent-assignee"},t.assignee),r?f("a",{href:r,target:"_blank",rel:"noopener",className:"patent-link",title:i("components.defensePatents.viewOnUspto")},"↗"):!1),f("div",{className:"patent-title"},t.title),f("div",{className:"patent-meta"},f("span",{className:`patent-cpc cpc-${t.cpcCode}`},t.cpcDesc||t.cpcCode),e?f("span",{className:"patent-date"},e):!1,t.patentId?f("span",{className:"patent-id"},t.patentId):!1)))}refresh(){this.fetchPatents()}}const Le=Object.freeze(Object.defineProperty({__proto__:null,DefensePatentsPanel:Vt},Symbol.toStringTag,{value:"Module"})),_=[{min:81,levelKey:"critical",colorVar:"--semantic-critical"},{min:66,levelKey:"high",colorVar:"--semantic-high"},{min:51,levelKey:"elevated",colorVar:"--semantic-elevated"},{min:31,levelKey:"normal",colorVar:"--semantic-normal"},{min:0,levelKey:"low",colorVar:"--semantic-low"}];class Ut extends L{constructor(){super({id:"strategic-risk",title:i("panels.strategicRisk"),showCount:!1,trackActivity:!0,infoTooltip:i("components.strategicRisk.infoTooltip")});o(this,"overview",null);o(this,"alerts",[]);o(this,"convergenceAlerts",[]);o(this,"freshnessSummary",null);o(this,"unsubscribeFreshness",null);o(this,"onLocationClick");o(this,"breakingAlerts",new Map);o(this,"boundOnBreaking",null);o(this,"breakingExpiryTimer",null);o(this,"lastRiskFingerprint","");this.init(),x(this.content,".risk-item-clickable, .risk-alert-clickable")}async init(){this.showLoading();try{let t=null;this.unsubscribeFreshness=R.subscribe(()=>{t&&clearTimeout(t),t=setTimeout(()=>{this.refresh()},500)}),this.boundOnBreaking=e=>{const s=e.detail;if(!(s!=null&&s.id))return;const r=s.threatLevel;r!=="critical"&&r!=="high"||(this.breakingAlerts.set(s.id,{threatLevel:r,timestamp:Date.now()}),this.refresh())},document.addEventListener("wm:breaking-news",this.boundOnBreaking),await this.refresh()}catch(t){console.error("[StrategicRiskPanel] Init error:",t),this.showError(i("common.failedRiskOverview"),()=>void this.refresh())}}async refresh(){var v,C,D;this.freshnessSummary=R.getSummary(),this.convergenceAlerts=ut();const t=1800*1e3,e=Date.now(),s=e-t,r=[];for(const[w,A]of this.breakingAlerts)A.timestamp<s&&r.push(w);for(const w of r)this.breakingAlerts.delete(w);if(this.breakingExpiryTimer&&clearTimeout(this.breakingExpiryTimer),this.breakingAlerts.size>0){let w=1/0;for(const U of this.breakingAlerts.values())U.timestamp<w&&(w=U.timestamp);const A=w+t-e+500;this.breakingExpiryTimer=setTimeout(()=>this.refresh(),Math.max(1e3,A))}let a=0;for(const w of this.breakingAlerts.values())a+=w.threatLevel==="critical"?15:8;a=Math.min(15,a);const n=St(),d=n==null?void 0:n.postures,l=n!=null&&n.stale?.5:1,h=await mt(this.signal);if(!((v=this.element)!=null&&v.isConnected))return!1;if(!h)return this.overview=null,this.alerts=[],this.setDataBadge("unavailable"),this.showError(i("common.failedRiskOverview"),()=>void this.refresh()),console.warn("[StrategicRiskPanel] Canonical backend risk scores unavailable"),!1;const b=dt(this.convergenceAlerts,d??void 0,a,l);this.overview=b,this.alerts=pt(24),this.applyCachedRiskOverview(h,b),console.log("[StrategicRiskPanel] Using cached scores from backend");const u=this.freshnessSummary?i("components.strategicRisk.sourcesDetail",{active:this.freshnessSummary.activeSources,total:this.freshnessSummary.totalSources}):void 0;this.setDataBadge("cached",u),this.render();const $=this.alerts.map(w=>w.id).sort().join(","),S=`${(C=this.overview)==null?void 0:C.compositeScore}|${(D=this.overview)==null?void 0:D.trend}|${$}`,m=S!==this.lastRiskFingerprint;return this.lastRiskFingerprint=S,m}cachedTrendToOverviewTrend(t){return t==="rising"||t==="escalating"?"escalating":t==="falling"||t==="de-escalating"?"de-escalating":"stable"}cachedTimestamp(t){const e=t.strategicRisk.lastUpdated??t.computedAt;if(!e)return null;const s=new Date(e);return Number.isNaN(s.getTime())?null:s}cachedTopRisks(t,e){const s=t.strategicRisk.contributors.filter(r=>r.score>0).slice(0,5).map(r=>`${r.country}: ${r.score} (${r.level})`);return s.length>0?s:e.filter(r=>r.score>0).slice(0,5).map(r=>`${r.name}: ${r.score} (${r.level})`)}applyCachedRiskOverview(t,e){var r;const s=t.cii.map(gt).sort((a,n)=>n.score-a.score);this.overview={...e,avgCIIDeviation:((r=s[0])==null?void 0:r.score)??t.strategicRisk.score,compositeScore:Math.max(0,Math.min(100,Math.round(t.strategicRisk.score))),trend:this.cachedTrendToOverviewTrend(t.strategicRisk.trend),topRisks:this.cachedTopRisks(t,s),unstableCountries:s.filter(a=>vt(a.score)).slice(0,5),timestamp:this.cachedTimestamp(t),degraded:t.degraded,stale:t.stale}}getScoreColor(t){return T(this.getFallbackScoreBand(t).colorVar)}getScoreLevel(t){return i(`countryBrief.levels.${this.getFallbackScoreBand(t).levelKey}`)}getFallbackScoreBand(t){return _.find(e=>t>=e.min)??_[_.length-1]}getTrendEmoji(t){switch(t){case"escalating":return"📈";case"de-escalating":return"📉";default:return"➡️"}}getTrendColor(t){switch(t){case"escalating":return T("--semantic-critical");case"de-escalating":return T("--semantic-normal");default:return T("--text-dim")}}getPriorityColor(t){switch(t){case"critical":return T("--semantic-critical");case"high":return T("--semantic-high");case"medium":return T("--semantic-elevated");case"low":return T("--semantic-normal")}}getPriorityEmoji(t){switch(t){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢"}}getTypeEmoji(t){switch(t){case"convergence":return"🎯";case"cii_spike":return"📊";case"cascade":return"🔗";case"sanctions":return"🚫";case"radiation":return"☢️";case"composite":return"⚠️";default:return"📍"}}renderFullData(){if(!this.overview||!this.freshnessSummary)return"";const t=this.overview.compositeScore,e=this.getScoreColor(t),s=this.getScoreLevel(t),r=Math.round(t/100*270);return`
      <div class="strategic-risk-panel">
        ${this.renderCachedRiskStateBanner()}

        <div class="risk-gauge">
          <div class="risk-score-container">
            <div class="risk-score-ring" style="--score-color: ${e}; --score-deg: ${r}deg;">
              <div class="risk-score-inner">
                <div class="risk-score" style="color: ${e}">${t}</div>
                <div class="risk-level" style="color: ${e}">${s}</div>
              </div>
            </div>
          </div>
          <div class="risk-trend-container">
            <span class="risk-trend-label">${i("components.strategicRisk.trend")}</span>
            <div class="risk-trend" style="color: ${this.getTrendColor(this.overview.trend)}">
              ${this.getTrendEmoji(this.overview.trend)} ${this.overview.trend==="escalating"?i("components.strategicRisk.trends.escalating"):this.overview.trend==="de-escalating"?i("components.strategicRisk.trends.deEscalating"):i("components.strategicRisk.trends.stable")}
            </div>
          </div>
        </div>

        ${this.renderMetrics()}
        ${this.renderFreshnessSurface()}
        ${this.renderTopRisks()}
        ${this.renderRecentAlerts()}

        <div class="risk-footer">
          <span class="risk-updated">${i("components.strategicRisk.updated",{time:this.formatOverviewTimestamp()})}</span>
          <button class="risk-refresh-btn">${i("components.strategicRisk.refresh")}</button>
        </div>
      </div>
    `}renderCachedRiskStateBanner(){if(!this.overview||!this.overview.degraded&&!this.overview.stale)return"";const t=[this.overview.degraded?i("components.strategicRisk.sourceStates.degraded"):"",this.overview.stale?i("components.strategicRisk.sourceStates.stale"):""].filter(Boolean);return`<div class="risk-status-banner risk-status-cached">
      <span class="risk-status-icon">!</span>
      <span class="risk-status-text">${i("components.strategicRisk.cachedCiiStatus",{states:t.join(" · ")})}</span>
    </div>`}renderFreshnessSurface(){if(!this.freshnessSummary)return"";const t=R.getAllSources().filter(e=>e.status!=="no_data"&&e.status!=="disabled").sort((e,s)=>{const r={error:0,very_stale:1,stale:2,fresh:3};return(r[e.status]??4)-(r[s.status]??4)}).slice(0,6);return t.length===0?"":`
      <div class="risk-section">
        <div class="risk-section-title">${i("components.strategicRisk.dataFreshness")}</div>
        <div class="risk-sources-compact">
          ${t.map(e=>`
            <span class="risk-source-chip" title="${c(e.healthStatus||e.status)}" style="border-color: ${q(e.status)}">
              <span class="risk-source-dot" style="color: ${q(e.status)}">${ft(e.status)}</span>
              <span class="risk-source-name">${c(e.name)}</span>
              <span class="risk-source-time">${c(R.getTimeSince(e.id))}</span>
            </span>
          `).join("")}
        </div>
      </div>
    `}renderMetrics(){if(!this.overview)return"";const t=ht();return`
      <div class="risk-metrics">
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.convergenceAlerts}</span>
          <span class="risk-metric-label">${i("components.strategicRisk.convergenceMetric")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.avgCIIDeviation.toFixed(1)}</span>
          <span class="risk-metric-label">${i("components.strategicRisk.ciiDeviation")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.infrastructureIncidents}</span>
          <span class="risk-metric-label">${i("components.strategicRisk.infraEvents")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${t.critical+t.high}</span>
          <span class="risk-metric-label">${i("components.strategicRisk.highAlerts")}</span>
        </div>
      </div>
    `}renderTopRisks(){if(!this.overview||this.overview.topRisks.length===0)return`<div class="risk-empty">${i("components.strategicRisk.noRisks")}</div>`;const t=this.overview.topConvergenceZones[0];return`
      <div class="risk-section">
        <div class="risk-section-title">${i("components.strategicRisk.topRisks")}</div>
        <div class="risk-list">
          ${this.overview.topRisks.map((e,s)=>s===0&&e.startsWith("Convergence:")&&t?`
                <div class="risk-item risk-item-clickable" data-lat="${t.lat}" data-lon="${t.lon}" role="button" tabindex="0">
                  <span class="risk-rank">${s+1}.</span>
                  <span class="risk-text">${c(e)}</span>
                  <span class="risk-location-icon">↗</span>
                </div>
              `:`
              <div class="risk-item">
                <span class="risk-rank">${s+1}.</span>
                <span class="risk-text">${c(e)}</span>
              </div>
            `).join("")}
        </div>
      </div>
    `}renderRecentAlerts(){if(this.alerts.length===0)return"";const t=this.alerts.slice(0,5);return`
      <div class="risk-section">
        <div class="risk-section-title">${i("components.strategicRisk.recentAlerts",{count:String(this.alerts.length)})}</div>
        <div class="risk-alerts">
          ${t.map(e=>{var n;const s=((n=e.location)==null?void 0:n.lat)&&e.location.lon,r=s?"risk-alert-clickable":"",a=s?`data-lat="${e.location.lat}" data-lon="${e.location.lon}" role="button" tabindex="0"`:"";return`
              <div class="risk-alert ${r}" style="border-left: 3px solid ${this.getPriorityColor(e.priority)}" ${a}>
                <div class="risk-alert-header">
                  <span class="risk-alert-type">${this.getTypeEmoji(e.type)}</span>
                  <span class="risk-alert-priority">${this.getPriorityEmoji(e.priority)}</span>
                  <span class="risk-alert-title">${c(e.title)}</span>
                  ${s?'<span class="risk-location-icon">↗</span>':""}
                </div>
                <div class="risk-alert-summary">${c(e.summary)}</div>
                <div class="risk-alert-time">${this.formatTime(e.timestamp)}</div>
              </div>
            `}).join("")}
        </div>
      </div>
    `}formatTime(t){const s=new Date().getTime()-t.getTime(),r=Math.floor(s/6e4),a=Math.floor(r/60);return r<1?i("components.strategicRisk.time.justNow"):r<60?i("components.strategicRisk.time.minutesAgo",{count:String(r)}):a<24?i("components.strategicRisk.time.hoursAgo",{count:String(a)}):t.toLocaleDateString()}formatOverviewTimestamp(){var t;return(t=this.overview)!=null&&t.timestamp?this.overview.timestamp.toLocaleTimeString():"&mdash;"}render(){this.freshnessSummary=R.getSummary();try{if(!this.overview){this.showLoading();return}this.setTrustedContent(y(this.renderFullData(),"legacy direct innerHTML migration")),this.attachEventListeners()}catch(t){console.error("[StrategicRiskPanel] Render error:",t),this.showError(i("common.failedRiskOverview"),()=>this.refresh())}}attachEventListeners(){const t=this.content.querySelector(".risk-refresh-btn");t&&t.addEventListener("click",()=>this.refresh()),this.content.querySelectorAll(".risk-source-enable").forEach(n=>{n.addEventListener("click",d=>{const l=d.target.dataset.panel;l&&this.emitEnablePanel(l)})}),this.content.querySelectorAll(".risk-action-btn").forEach(n=>{n.addEventListener("click",d=>{const l=d.target.dataset.action;l==="enable-core"?this.emitEnablePanels(["protests","intel","live-news"]):l==="enable-all"&&this.emitEnablePanels(["protests","intel","live-news","military","shipping"])})}),this.content.querySelectorAll(".risk-item-clickable").forEach(n=>{n.addEventListener("click",()=>{const d=parseFloat(n.dataset.lat||"0"),l=parseFloat(n.dataset.lon||"0");this.onLocationClick&&!Number.isNaN(d)&&!Number.isNaN(l)&&this.onLocationClick(d,l)})}),this.content.querySelectorAll(".risk-alert-clickable").forEach(n=>{n.addEventListener("click",()=>{const d=parseFloat(n.dataset.lat||"0"),l=parseFloat(n.dataset.lon||"0");this.onLocationClick&&!Number.isNaN(d)&&!Number.isNaN(l)&&this.onLocationClick(d,l)})})}emitEnablePanel(t){window.dispatchEvent(new CustomEvent("enable-panel",{detail:{panelId:t}}))}emitEnablePanels(t){t.forEach(e=>this.emitEnablePanel(e))}destroy(){this.boundOnBreaking&&(document.removeEventListener("wm:breaking-news",this.boundOnBreaking),this.boundOnBreaking=null),this.breakingExpiryTimer&&(clearTimeout(this.breakingExpiryTimer),this.breakingExpiryTimer=null),this.unsubscribeFreshness&&this.unsubscribeFreshness(),super.destroy()}getAlerts(){return this.alerts}setLocationClickHandler(t){this.onLocationClick=t}}const De=Object.freeze(Object.defineProperty({__proto__:null,StrategicRiskPanel:Ut},Symbol.toStringTag,{value:"Module"}));class qt extends L{constructor(t){super({id:"strategic-posture",title:i("panels.strategicPosture"),showCount:!1,trackActivity:!0,infoTooltip:i("components.strategicPosture.infoTooltip"),defaultRowSpan:2});o(this,"postures",[]);o(this,"vesselTimeouts",[]);o(this,"loadingElapsedInterval",null);o(this,"loadingStartTime",0);o(this,"onLocationClick");o(this,"lastTimestamp","");o(this,"isStale",!1);o(this,"staleRetryPending",!1);o(this,"staleRetryTimer",null);o(this,"refreshGuard",new at);o(this,"handleContentClick",t=>{var d;const e=t.target;if(!e)return;if(e.closest(".posture-refresh-btn")){this.refresh();return}const s=e.closest(".posture-deduce-btn");if(s){t.stopPropagation();try{const l=s.dataset.theater;if(!l)return;const h=JSON.parse(l),b=`What is the expected strategic impact of the current military posture in the ${h.shortName} theater?`;let u=`Theater: ${h.shortName} (${h.theaterName}). Military Assets: ${h.totalAircraft} aircraft, ${h.totalVessels} naval vessels. Readiness Level: ${h.postureLevel}. Assets breakdown: ${h.fighters} fighters, ${h.bombers} bombers, ${h.carriers} carriers, ${h.submarines} submarines. Focus/Target: ${h.targetNation||"Unknown"}.`;if(this.getLatestNews){const S=Pt(this.getLatestNews);S&&(u+=`

${S}`)}const $={query:b,geoContext:u,autoSubmit:!0};document.dispatchEvent(new CustomEvent("wm:deduct-context",{detail:$}))}catch(l){console.error("[StrategicPosturePanel] Failed to dispatch deduction event",l)}return}const r=e.closest(".posture-theater");if(!r||!this.content.contains(r))return;const a=parseFloat(r.dataset.lat||"0"),n=parseFloat(r.dataset.lon||"0");console.log("[StrategicPosturePanel] Theater clicked:",{lat:a,lon:n,dataLat:r.dataset.lat,dataLon:r.dataset.lon,element:(d=r.textContent)==null?void 0:d.slice(0,30),hasHandler:!!this.onLocationClick}),this.onLocationClick&&!Number.isNaN(a)&&!Number.isNaN(n)?(console.log("[StrategicPosturePanel] Calling onLocationClick with:",a,n),this.onLocationClick(a,n)):console.warn("[StrategicPosturePanel] No handler or invalid coords!",{hasHandler:!!this.onLocationClick,lat:a,lon:n})});this.getLatestNews=t,this.init(),this.content.addEventListener("click",this.handleContentClick),x(this.content,".posture-theater")}init(){this.showLoading(),this.fetchAndRender(),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),30*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),60*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),90*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),120*1e3))}isPanelVisible(){return!this.element.classList.contains("hidden")}async reaugmentVessels(){var e;if(!this.isPanelVisible()||this.postures.length===0)return;console.log("[StrategicPosturePanel] Re-augmenting with vessels...");const t=this.postures;await this.augmentWithVessels(t),t===this.postures&&(e=this.element)!=null&&e.isConnected&&this.render()}showLoading(){this.loadingStartTime=Date.now(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-loading">
          <div class="posture-loading-radar">
            <div class="posture-radar-sweep"></div>
            <div class="posture-radar-dot"></div>
          </div>
          <div class="posture-loading-title">${i("components.strategicPosture.scanningTheaters")}</div>
          <div class="posture-loading-stages">
            <div class="posture-stage active">
              <span class="posture-stage-dot"></span>
              <span>${i("components.strategicPosture.positions")}</span>
            </div>
            <div class="posture-stage pending">
              <span class="posture-stage-dot"></span>
              <span>${i("components.strategicPosture.navalVesselsLoading")}</span>
            </div>
            <div class="posture-stage pending">
              <span class="posture-stage-dot"></span>
              <span>${i("components.strategicPosture.theaterAnalysis")}</span>
            </div>
          </div>
          <div class="posture-loading-tip">${i("components.strategicPosture.connectingStreams")}</div>
          <div class="posture-loading-elapsed">${i("components.strategicPosture.elapsed",{elapsed:"0"})}</div>
          <div class="posture-loading-note">${i("components.strategicPosture.initialLoadNote")}</div>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.startLoadingTimer()}startLoadingTimer(){this.loadingElapsedInterval&&clearInterval(this.loadingElapsedInterval),this.loadingElapsedInterval=setInterval(()=>{const t=Math.floor((Date.now()-this.loadingStartTime)/1e3),e=this.content.querySelector(".posture-loading-elapsed");e&&(e.textContent=i("components.strategicPosture.elapsed",{elapsed:String(t)}))},1e3)}stopLoadingTimer(){this.loadingElapsedInterval&&(clearInterval(this.loadingElapsedInterval),this.loadingElapsedInterval=null)}showLoadingStage(t){const e=this.content.querySelectorAll(".posture-stage");e.length!==0&&e.forEach((s,r)=>{s.classList.remove("active","complete"),t==="aircraft"&&r===0?s.classList.add("active"):t==="vessels"?r===0?s.classList.add("complete"):r===1&&s.classList.add("active"):t==="analysis"&&(r<=1?s.classList.add("complete"):r===2&&s.classList.add("active"))})}async fetchAndRender(){var e,s,r,a;if(!((e=this.element)!=null&&e.isConnected)){this.runWhenConnected(()=>{this.fetchAndRender()});return}if(!this.isPanelVisible())return;const t=this.refreshGuard.begin();this.staleRetryTimer!==null&&(clearTimeout(this.staleRetryTimer),this.staleRetryTimer=null);try{this.showLoadingStage("aircraft");const n=this.staleRetryPending;this.staleRetryPending=!1;const d=await wt(this.signal,{forceRefresh:n});if(!this.refreshGuard.isCurrent(t)||!((s=this.element)!=null&&s.isConnected))return;if(!d||!((r=d.postures)!=null&&r.length)){this.showNoData();return}if(this.postures=d.postures.map(l=>({...l,byOperator:{...l.byOperator}})),this.lastTimestamp=d.timestamp,this.isStale=d.stale||!1,this.showLoadingStage("vessels"),await this.augmentWithVessels(this.postures),!this.refreshGuard.isCurrent(t)||!((a=this.element)!=null&&a.isConnected))return;this.showLoadingStage("analysis"),this.updateBadges(),this.render(),this.isStale&&!n&&(this.staleRetryPending=!0,this.staleRetryTimer!==null&&clearTimeout(this.staleRetryTimer),this.staleRetryTimer=setTimeout(()=>{this.staleRetryTimer=null,this.fetchAndRender()},3e3))}catch(n){if(!this.refreshGuard.isCurrent(t)||this.isAbortError(n))return;console.error("[StrategicPosturePanel] Fetch error:",n),this.showFetchError()}}async augmentWithVessels(t){try{const{fetchMilitaryVessels:e}=await Ct();if(t!==this.postures||this.signal.aborted)return;const{vessels:s}=await e();if(t!==this.postures||this.signal.aborted)return;if(console.log(`[StrategicPosturePanel] Got ${s.length} total military vessels`),s.length===0){this.restoreVesselCounts(),I(this.postures);return}for(const r of this.postures){if(!r.bounds)continue;const a=s.filter(n=>n.lat>=r.bounds.south&&n.lat<=r.bounds.north&&n.lon>=r.bounds.west&&n.lon<=r.bounds.east);r.destroyers=a.filter(n=>n.vesselType==="destroyer").length,r.frigates=a.filter(n=>n.vesselType==="frigate").length,r.carriers=a.filter(n=>n.vesselType==="carrier").length,r.submarines=a.filter(n=>n.vesselType==="submarine").length,r.patrol=a.filter(n=>n.vesselType==="patrol").length,r.auxiliaryVessels=a.filter(n=>n.vesselType==="auxiliary"||n.vesselType==="special"||n.vesselType==="amphibious"||n.vesselType==="icebreaker"||n.vesselType==="research"||n.vesselType==="unknown").length,r.totalVessels=a.length,a.length>0&&console.log(`[StrategicPosturePanel] ${r.shortName}: ${a.length} vessels`,a.map(n=>n.vesselType));for(const n of a){const d=n.operator||"unknown";r.byOperator[d]=(r.byOperator[d]||0)+1}}this.cacheVesselCounts(),I(this.postures),console.log("[StrategicPosturePanel] Augmented with",s.length,"vessels, posture levels recalculated")}catch(e){if(t!==this.postures||this.signal.aborted||Tt(e))return;console.warn("[StrategicPosturePanel] Failed to fetch vessels:",e),this.restoreVesselCounts(),I(this.postures)}}cacheVesselCounts(){try{const t={};for(const e of this.postures)e.totalVessels>0&&(t[e.theaterId]={destroyers:e.destroyers||0,frigates:e.frigates||0,carriers:e.carriers||0,submarines:e.submarines||0,patrol:e.patrol||0,auxiliaryVessels:e.auxiliaryVessels||0,totalVessels:e.totalVessels||0});localStorage.setItem("wm:vesselPosture",JSON.stringify({counts:t,ts:Date.now()}))}catch{}}restoreVesselCounts(){try{const t=localStorage.getItem("wm:vesselPosture");if(!t)return;const{counts:e,ts:s}=JSON.parse(t);if(Date.now()-s>1800*1e3)return;for(const r of this.postures){const a=e[r.theaterId];a&&(r.destroyers=a.destroyers,r.frigates=a.frigates,r.carriers=a.carriers,r.submarines=a.submarines,r.patrol=a.patrol,r.auxiliaryVessels=a.auxiliaryVessels,r.totalVessels=a.totalVessels)}console.log("[StrategicPosturePanel] Restored cached vessel counts")}catch{}}updatePostures(t){var s;const e=this.refreshGuard.begin();if(this.staleRetryTimer!==null&&(clearTimeout(this.staleRetryTimer),this.staleRetryTimer=null),this.staleRetryPending=!1,!t||!((s=t.postures)!=null&&s.length)){this.showNoData();return}this.postures=t.postures.map(r=>({...r,byOperator:{...r.byOperator}})),this.lastTimestamp=t.timestamp,this.isStale=t.stale||!1,this.augmentWithVessels(this.postures).then(()=>{var r;this.refreshGuard.isCurrent(e)&&(r=this.element)!=null&&r.isConnected&&(this.updateBadges(),this.render())})}updateBadges(){const t=this.postures.some(s=>s.postureLevel==="critical"),e=this.postures.some(s=>s.postureLevel==="elevated");t?this.setNewBadge(1,!0):e?this.setNewBadge(1,!1):this.clearNewBadge()}async refresh(){return this.fetchAndRender()}showNoData(){this.stopLoadingTimer(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-no-data">
          <div class="posture-no-data-icon pulse">📡</div>
          <div class="posture-no-data-title">${i("components.strategicPosture.acquiringData")}</div>
          <div class="posture-no-data-desc">
            ${i("components.strategicPosture.acquiringDesc")}
          </div>
          <div class="posture-data-sources">
            <div class="posture-source">
              <span class="posture-source-icon connecting">✈️</span>
              <span>${i("components.strategicPosture.openSkyAdsb")}</span>
            </div>
            <div class="posture-source">
              <span class="posture-source-icon waiting">🚢</span>
              <span>${i("components.strategicPosture.aisVesselStream")}</span>
            </div>
          </div>
          <button class="posture-retry-btn" data-panel-retry>↻ ${i("components.strategicPosture.retryNow")}</button>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.setRetryCallback(()=>this.refresh())}showFetchError(){this.stopLoadingTimer(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-no-data">
          <div class="posture-no-data-icon">⚠️</div>
          <div class="posture-no-data-title">${i("components.strategicPosture.feedRateLimited")}</div>
          <div class="posture-no-data-desc">
            ${i("components.strategicPosture.rateLimitedDesc")}
          </div>
          <div class="posture-error-hint">
            <strong>${i("components.strategicPosture.rateLimitedTip")}</strong>
          </div>
          <button class="posture-retry-btn" data-panel-retry>↻ ${i("components.strategicPosture.tryAgain")}</button>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.setRetryCallback(()=>this.refresh())}getPostureBadge(t){switch(t){case"critical":return`<span class="posture-badge posture-critical">${i("components.strategicPosture.badges.critical")}</span>`;case"elevated":return`<span class="posture-badge posture-elevated">${i("components.strategicPosture.badges.elevated")}</span>`;default:return`<span class="posture-badge posture-normal">${i("components.strategicPosture.badges.normal")}</span>`}}getTrendIcon(t,e){switch(t){case"increasing":return`<span class="posture-trend trend-up">↗ +${e}%</span>`;case"decreasing":return`<span class="posture-trend trend-down">↘ ${e}%</span>`;default:return`<span class="posture-trend trend-stable">→ ${i("components.strategicPosture.trendStable")}</span>`}}theaterDisplayName(t){const e=`components.strategicPosture.theaters.${t.theaterId}`,s=i(e);return s!==e?s:t.theaterName}renderTheater(t){const e=t.postureLevel!=="normal",s=this.theaterDisplayName(t);if(!e){const l=[];return t.totalAircraft>0&&l.push(`<span class="posture-chip air">✈️ ${t.totalAircraft}</span>`),t.totalVessels>0&&l.push(`<span class="posture-chip naval">⚓ ${t.totalVessels}</span>`),`
        <div class="posture-theater posture-compact" role="button" tabindex="0" data-lat="${t.centerLat}" data-lon="${t.centerLon}" title="${i("components.strategicPosture.clickToView",{name:c(s)})}">
          <span class="posture-name">${c(t.shortName)}</span>
          <div class="posture-chips">${l.join("")}</div>
          ${this.getPostureBadge(t.postureLevel)}
        </div>
      `}const r=[];t.fighters>0&&r.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.fighters")}">✈️ ${t.fighters}</span>`),t.tankers>0&&r.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.tankers")}">⛽ ${t.tankers}</span>`),t.awacs>0&&r.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.awacs")}">📡 ${t.awacs}</span>`),t.reconnaissance>0&&r.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.recon")}">🔍 ${t.reconnaissance}</span>`),t.transport>0&&r.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.transport")}">📦 ${t.transport}</span>`),t.bombers>0&&r.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.bombers")}">💣 ${t.bombers}</span>`),t.drones>0&&r.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.drones")}">🛸 ${t.drones}</span>`),r.length===0&&t.totalAircraft>0&&r.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.aircraft")}">✈️ ${t.totalAircraft}</span>`);const a=[];t.carriers>0&&a.push(`<span class="posture-stat carrier" title="${i("components.strategicPosture.units.carriers")}">🚢 ${t.carriers}</span>`),t.destroyers>0&&a.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.destroyers")}">⚓ ${t.destroyers}</span>`),t.frigates>0&&a.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.frigates")}">🛥️ ${t.frigates}</span>`),t.submarines>0&&a.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.submarines")}">🦈 ${t.submarines}</span>`),t.patrol>0&&a.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.patrol")}">🚤 ${t.patrol}</span>`),t.auxiliaryVessels>0&&a.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.auxiliary")}">⚓ ${t.auxiliaryVessels}</span>`),a.length===0&&t.totalVessels>0&&a.push(`<span class="posture-stat" title="${i("components.strategicPosture.units.navalVessels")}">⚓ ${t.totalVessels}</span>`);const n=r.length>0,d=a.length>0;return`
      <div class="posture-theater posture-expanded ${t.postureLevel}" role="button" tabindex="0" data-lat="${t.centerLat}" data-lon="${t.centerLon}" title="${i("components.strategicPosture.clickToViewMap")}">
        <div class="posture-theater-header">
          <span class="posture-name">${c(s)}</span>
          ${this.getPostureBadge(t.postureLevel)}
        </div>

        <div class="posture-forces">
          ${n?`<div class="posture-force-row"><span class="posture-domain">${i("components.strategicPosture.domains.air")}</span><div class="posture-stats">${r.join("")}</div></div>`:""}
          ${d?`<div class="posture-force-row"><span class="posture-domain">${i("components.strategicPosture.domains.sea")}</span><div class="posture-stats">${a.join("")}</div></div>`:""}
        </div>

        <div class="posture-footer">
          ${t.strikeCapable?`<span class="posture-strike">⚡ ${i("components.strategicPosture.strike")}</span>`:""}
          ${this.getTrendIcon(t.trend,t.changePercent)}
          ${t.targetNation?`<span class="posture-focus">→ ${c(t.targetNation)}</span>`:""}
          ${lt()?`<button class="posture-deduce-btn" title="Deduce Situation with AI" style="background: none; border: none; cursor: pointer; opacity: 0.7; font-size: 1.1em; transition: opacity 0.2s; margin-left: auto;" data-theater='${c(JSON.stringify(t))}'>🧠</button>`:""}
        </div>
      </div>
    `}render(){this.stopLoadingTimer();const t=[...this.postures].sort((a,n)=>{const d={critical:0,elevated:1,normal:2};return(d[a.postureLevel]??2)-(d[n.postureLevel]??2)}),e=this.lastTimestamp?new Date(this.lastTimestamp).toLocaleTimeString():new Date().toLocaleTimeString(),r=`
      <div class="posture-panel">
        ${this.isStale?`<div class="posture-stale-warning">⚠️ ${i("components.strategicPosture.staleWarning")}</div>`:""}

        <details class="posture-emoji-key">
          <summary>💡 ${i("components.strategicPosture.emojiKeyLabel")}</summary>
          <div class="posture-emoji-key-body">
            <div class="posture-emoji-key-section">${i("components.strategicPosture.emojiKeyAir")}</div>
            <div class="posture-emoji-key-item"><span>✈️</span><span>${i("components.strategicPosture.units.fighters")}</span></div>
            <div class="posture-emoji-key-item"><span>⛽</span><span>${i("components.strategicPosture.units.tankers")}</span></div>
            <div class="posture-emoji-key-item"><span>📡</span><span>${i("components.strategicPosture.units.awacs")}</span></div>
            <div class="posture-emoji-key-item"><span>🔍</span><span>${i("components.strategicPosture.units.recon")}</span></div>
            <div class="posture-emoji-key-item"><span>📦</span><span>${i("components.strategicPosture.units.transport")}</span></div>
            <div class="posture-emoji-key-item"><span>💣</span><span>${i("components.strategicPosture.units.bombers")}</span></div>
            <div class="posture-emoji-key-item"><span>🛸</span><span>${i("components.strategicPosture.units.drones")}</span></div>
            <div class="posture-emoji-key-section">${i("components.strategicPosture.emojiKeyNaval")}</div>
            <div class="posture-emoji-key-item"><span>🚢</span><span>${i("components.strategicPosture.units.carriers")}</span></div>
            <div class="posture-emoji-key-item"><span>⚓</span><span>${i("components.strategicPosture.units.destroyers")}</span></div>
            <div class="posture-emoji-key-item"><span>🛥️</span><span>${i("components.strategicPosture.units.frigates")}</span></div>
            <div class="posture-emoji-key-item"><span>🦈</span><span>${i("components.strategicPosture.units.submarines")}</span></div>
            <div class="posture-emoji-key-item"><span>🚤</span><span>${i("components.strategicPosture.units.patrol")}</span></div>
            <div class="posture-emoji-key-item"><span>⚓</span><span>${i("components.strategicPosture.units.auxiliary")}</span></div>
          </div>
        </details>

        ${t.map(a=>this.renderTheater(a)).join("")}

        <div class="posture-footer">
          <span class="posture-updated">${this.isStale?"⚠️ ":""}${i("components.strategicPosture.updated")} ${e}</span>
          <button class="posture-refresh-btn" title="${i("components.strategicPosture.refresh")}" aria-label="${i("components.strategicPosture.refresh")}">↻</button>
        </div>
      </div>
    `;this.setSafeContent(P(r,"legacy Panel.setContent() migration"))}setLocationClickHandler(t){console.log("[StrategicPosturePanel] setLocationClickHandler called, handler:",typeof t),this.onLocationClick=t,console.log("[StrategicPosturePanel] Handler stored, onLocationClick now:",typeof this.onLocationClick)}getPostures(){return this.postures}show(){const t=this.element.classList.contains("hidden");super.show(),t&&this.fetchAndRender()}destroy(){this.refreshGuard.begin(),this.stopLoadingTimer(),this.staleRetryTimer!==null&&(clearTimeout(this.staleRetryTimer),this.staleRetryTimer=null),this.vesselTimeouts.forEach(t=>clearTimeout(t)),this.vesselTimeouts=[],super.destroy()}}const Re=Object.freeze(Object.defineProperty({__proto__:null,StrategicPosturePanel:qt},Symbol.toStringTag,{value:"Module"})),zt=async()=>{const p=await bt();return p.success?p.data:null},Wt=p=>Lt(p.country),tt=["state-based","non-state","one-sided"],V={"state-based":"UCDP_VIOLENCE_TYPE_STATE_BASED","non-state":"UCDP_VIOLENCE_TYPE_NON_STATE","one-sided":"UCDP_VIOLENCE_TYPE_ONE_SIDED"};function G(p){return tt.reduce((g,t)=>{var e;return g+(((e=p[V[t]])==null?void 0:e.count)??0)},0)}class Yt extends L{constructor(t={}){super({id:"ucdp-events",title:i("panels.ucdpEvents"),showCount:!0,trackActivity:!0,infoTooltip:i("components.ucdpEvents.infoTooltip"),defaultRowSpan:2});o(this,"events",[]);o(this,"aggregates");o(this,"hasLoadedEvents",!1);o(this,"activeTab","state-based");o(this,"onEventClick");o(this,"scopeFilter");o(this,"loadFullSet");o(this,"fullEvents",null);o(this,"fullSetState","idle");o(this,"fullSetRequest",0);this.loadFullSet=t.loadFullSet??zt,this.scopeFilter=new X({content:this.content,onChange:()=>this.renderContent()}),this.showLoading(i("common.loadingUcdpEvents")),this.content.addEventListener("click",e=>{var a;const s=e.target.closest(".panel-tab");if(s!=null&&s.dataset.tab){this.activeTab=s.dataset.tab,this.renderContent();return}const r=e.target.closest(".ucdp-row");if(r){const n=Number(r.dataset.lat),d=Number(r.dataset.lon);Number.isFinite(n)&&Number.isFinite(d)&&((a=this.onEventClick)==null||a.call(this,n,d))}}),x(this.content,".ucdp-row")}setEventClickHandler(t){this.onEventClick=t}setEvents(t,e){this.events=t,this.aggregates=e,this.hasLoadedEvents=!0,this.fullEvents=null,this.fullSetState="idle",this.fullSetRequest++,this.ensureFullSetForScope(),this.renderContent()}applyScope(t){this.scopeFilter.setScope(t)&&(this.fullSetState==="failed"&&(this.fullSetState="idle"),this.ensureFullSetForScope(),this.hasLoadedEvents&&!this.showingLoadFailure&&this.renderContent())}showError(t,e,s){this.scopeFilter.hideStrip(),super.showError(t,e,s)}showLoading(t){var e;(e=this.scopeFilter)==null||e.hideStrip(),super.showLoading(t)}get holdsProjection(){return this.aggregates!==void 0}ensureFullSetForScope(){if(!this.scopeFilter.scope||!this.hasLoadedEvents||!this.holdsProjection||this.fullEvents||this.fullSetState!=="idle")return;this.fullSetState="loading";const t=++this.fullSetRequest;this.loadFullSet().then(e=>{t===this.fullSetRequest&&(e&&e.length>0?(this.fullEvents=e,this.fullSetState="idle"):this.fullSetState="failed",this.showingLoadFailure||this.renderContent())},()=>{t===this.fullSetRequest&&(this.fullSetState="failed",this.showingLoadFailure||this.renderContent())})}hasData(){return this.hasLoadedEvents}renderContent(){if(!this.scopeFilter.scope){this.scopeFilter.hideStrip(),this.setCount(this.aggregates?G(this.aggregates):this.events.length),this.renderEvents(this.events,this.aggregates,null);return}const t=this.fullEvents??this.events,e=this.scopeFilter.view(t,Wt);if(!e.partition){this.scopeFilter.renderStrip(e);const a=this.fullEvents?void 0:this.aggregates;this.setCount(a?G(a):t.length),this.renderEvents(t,a,null);return}const s=this.holdsProjection&&!this.fullEvents;if(e.emptyByFocus&&s&&this.fullSetState==="loading"){this.showLoading(i("focus.filter.loadingConflict"));return}this.scopeFilter.renderStrip(e,void 0,s&&this.fullSetState!=="idle"?i(this.fullSetState==="loading"?"focus.filter.partialConflictLoading":"focus.filter.partialConflict"):void 0);const r=e.rows.map(a=>a.item);if(this.setCount(r.length),e.emptyByFocus){const a=s?i("focus.filter.emptyConflictPartial"):i("focus.filter.emptyConflict");this.setSafeContent(P(F(a),"focus empty state: escaped by focusedEmptyHtml"));return}this.renderEvents(r,void 0,new Map(e.rows.map(a=>[a.item,a])))}renderEvents(t,e,s){var $,S;const r=t.filter(m=>m.type_of_violence===this.activeTab),a=[{key:"state-based",label:i("components.ucdpEvents.stateBased")},{key:"non-state",label:i("components.ucdpEvents.nonState")},{key:"one-sided",label:i("components.ucdpEvents.oneSided")}],n={"state-based":0,"non-state":0,"one-sided":0};if(e)for(const m of tt)n[m]=(($=e[V[m]])==null?void 0:$.count)??0;else for(const m of t)n[m.type_of_violence]+=1;const d=e?((S=e[V[this.activeTab]])==null?void 0:S.totalDeaths)??0:r.reduce((m,v)=>m+v.deaths_best,0),l=a.map(m=>`<button class="panel-tab ${m.key===this.activeTab?"active":""}" data-tab="${m.key}">${m.label} <span class="ucdp-tab-count">${n[m.key]}</span></button>`).join(""),h=s?r:r.slice(0,50);let b;if(h.length===0)b=`<div class="panel-empty">${i("common.noEventsInCategory")}</div>`;else{const m=h.map(v=>{const C=v.type_of_violence==="state-based"?"ucdp-deaths-state":v.type_of_violence==="non-state"?"ucdp-deaths-nonstate":"ucdp-deaths-onesided",D=v.deaths_best>0?`<span class="${C}">${v.deaths_best}</span> <small class="ucdp-range">(${v.deaths_low}-${v.deaths_high})</small>`:'<span class="ucdp-deaths-zero">0</span>',w=`${c(v.side_a)} vs ${c(v.side_b)}`;return`<tr class="ucdp-row" data-lat="${v.latitude}" data-lon="${v.longitude}" tabindex="0">
          <td class="ucdp-country">${c(yt(v.country))}${N(s==null?void 0:s.get(v))}</td>
          <td class="ucdp-deaths">${D}</td>
          <td class="ucdp-date">${v.date_start}</td>
          <td class="ucdp-actors">${w}</td>
        </tr>`}).join("");b=`
        <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table ucdp-table">
            <thead>
              <tr>
                <th scope="col">${i("components.ucdpEvents.country")}</th>
                <th scope="col">${i("components.ucdpEvents.deaths")}</th>
                <th scope="col">${i("components.ucdpEvents.date")}</th>
                <th scope="col">${i("components.ucdpEvents.actors")}</th>
              </tr>
            </thead>
            <tbody>${m}</tbody>
          </table>
        </div>`}const u=r.length>h.length?`<div class="panel-more">${i("components.ucdpEvents.moreNotShown",{count:r.length-h.length})}</div>`:"";this.setSafeContent(P(`
      <div class="ucdp-panel-content">
        <div class="ucdp-header">
          <div class="panel-tabs">${l}</div>
          ${d>0?`<span class="ucdp-total-deaths">${i("components.ucdpEvents.deathsCount",{count:d.toLocaleString()})}</span>`:""}
        </div>
        ${b}
        ${u}
      </div>
    `,"legacy Panel.setContent() migration"))}}const Fe=Object.freeze(Object.defineProperty({__proto__:null,UcdpEventsPanel:Yt},Symbol.toStringTag,{value:"Module"})),Gt="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",Kt="https://creativecommons.org/licenses/by/4.0/";class Qt extends L{constructor(){super({id:"ukmto-incidents",title:i("panels.ukmtoIncidents"),showCount:!0});o(this,"snapshot",{incidents:[],fetchedAt:0,dataAvailable:!1,stale:!1});o(this,"onLocationClick");this.content.addEventListener("click",t=>{var r;const e=t.target.closest("button[data-id]"),s=this.snapshot.incidents.find(a=>a.id===(e==null?void 0:e.dataset.id));s!=null&&s.location&&((r=this.onLocationClick)==null||r.call(this,s.location.latitude,s.location.longitude))})}setLocationClickHandler(t){this.onLocationClick=t}setData(t){this.snapshot=t,this.setCount(t.incidents.length);const e=s=>new Date(s).toISOString().replace("T"," ").slice(0,16)+" UTC";this.setSafeContent(k`
      <div class="ukmto-status" role="status">${t.dataAvailable?t.stale?i("ukmto.stale"):i("ukmto.current"):i("ukmto.unavailable")}
        ${t.fetchedAt?e(t.fetchedAt):""}</div>
      <p class="ukmto-attribution"><a href="${$t}" target="_blank" rel="noopener noreferrer">UKMTO</a> (<a href="${Gt}" target="_blank" rel="noopener noreferrer license">OGL v3.0</a>) via <a href="${kt}" target="_blank" rel="noopener noreferrer">hormuz.data-tracking.net</a> (<a href="${Kt}" target="_blank" rel="noopener noreferrer license">CC BY 4.0</a>) · ${i("ukmto.reportedClaims")}</p>
      ${t.dataAvailable&&t.incidents.length===0?k`<div class="panel-empty">${i("ukmto.empty")}</div>`:""}
      <div class="ukmto-list">${H(t.incidents.map(s=>k`
        <article class="ukmto-incident">
          <button type="button" data-id="${s.id}" class="ukmto-location">UKMTO ${s.incidentNumber} · ${s.incidentType} · ${s.place}</button>
          <div class="ukmto-dates">${i("ukmto.occurred")}: ${e(s.occurredAt)}${s.reportedAt>0?k`<br>${i("ukmto.reported")}: ${e(s.reportedAt)}`:""}</div>
          <p>${s.description}</p>
        </article>`))}</div>`)}}const Ne=Object.freeze(Object.defineProperty({__proto__:null,UkmtoIncidentsPanel:Qt},Symbol.toStringTag,{value:"Module"})),Zt={spike:"spike",persistent:"persistent",elevated:"elevated",normal:"normal"};class Jt extends L{constructor(){super({id:"thermal-escalation",title:i("components.thermalEscalation.title"),showCount:!0,trackActivity:!0,infoTooltip:i("components.thermalEscalation.infoTooltip")});o(this,"clusters",[]);o(this,"fetchedAt",null);o(this,"summary",{clusterCount:0,elevatedCount:0,spikeCount:0,persistentCount:0,conflictAdjacentCount:0,highRelevanceCount:0});o(this,"onLocationClick");this.showLoading(i("components.thermalEscalation.loading")),this.content.addEventListener("click",t=>{var a;const e=t.target.closest(".te-card");if(!e)return;const s=Number(e.dataset.lat),r=Number(e.dataset.lon);Number.isFinite(s)&&Number.isFinite(r)&&((a=this.onLocationClick)==null||a.call(this,s,r))}),x(this.content,".te-card")}setLocationClickHandler(t){this.onLocationClick=t}setData(t){this.clusters=t.clusters,this.fetchedAt=t.fetchedAt,this.summary=t.summary,this.setCount(t.clusters.length),this.render()}render(){if(this.clusters.length===0){this.setSafeContent(P(`<div class="panel-empty">${c(i("components.thermalEscalation.empty"))}</div>`,"legacy Panel.setContent() migration"));return}const t=this.fetchedAt&&this.fetchedAt.getTime()>0?i("components.thermalEscalation.footer.updated",{time:this.fetchedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}):"";this.setSafeContent(P(`
      <div class="te-panel">
        ${this.renderSummary()}
        <div class="te-list">
          ${this.clusters.map(e=>this.renderCard(e)).join("")}
        </div>
        ${t?`<div class="te-footer">${c(t)}</div>`:""}
      </div>
    `,"legacy Panel.setContent() migration"))}renderSummary(){const{clusterCount:t,elevatedCount:e,spikeCount:s,persistentCount:r,conflictAdjacentCount:a,highRelevanceCount:n}=this.summary,d=[{val:e,label:i("components.thermalEscalation.summary.elevated"),cls:"te-stat-elevated"},{val:s,label:i("components.thermalEscalation.summary.spikes"),cls:"te-stat-spike"},{val:r,label:i("components.thermalEscalation.summary.persist"),cls:"te-stat-persistent"},{val:a,label:i("components.thermalEscalation.summary.conflict"),cls:"te-stat-conflict"},{val:n,label:i("components.thermalEscalation.summary.strategic"),cls:"te-stat-strategic"}].filter(l=>l.val>0);return`
      <div class="te-summary">
        <div class="te-stat">
          <span class="te-stat-val">${t}</span>
          <span class="te-stat-label">${c(i("components.thermalEscalation.summary.total"))}</span>
        </div>
        ${d.map(l=>`
        <div class="te-stat ${l.cls}">
          <span class="te-stat-val">${l.val}</span>
          <span class="te-stat-label">${c(l.label)}</span>
        </div>`).join("")}
      </div>
    `}renderCard(t){const e=Zt[t.status]??"normal",s=t.persistenceHours>=24?`${Math.round(t.persistenceHours/24)}d`:`${Math.round(t.persistenceHours)}h`,r=t.totalFrp>=1e3?`${(t.totalFrp/1e3).toFixed(1)}k`:t.totalFrp.toFixed(0),a=t.countDelta>0?"+":"",n=t.countDelta>0?"pos":t.countDelta<0?"neg":"",d=t.context==="conflict_adjacent"?`<span class="te-badge te-badge-conflict">${c(i("components.thermalEscalation.badges.conflictAdjacent"))}</span>`:t.context==="energy_adjacent"?`<span class="te-badge te-badge-energy">${c(i("components.thermalEscalation.badges.energyAdjacent"))}</span>`:t.context==="industrial"?`<span class="te-badge te-badge-industrial">${c(i("components.thermalEscalation.badges.industrial"))}</span>`:"",l=[`<span class="te-badge te-badge-${e}">${c(t.status)}</span>`,d,t.strategicRelevance==="high"?`<span class="te-badge te-badge-strategic">${c(i("components.thermalEscalation.badges.strategic"))}</span>`:""].filter(Boolean).join(""),h=Xt(t.lastDetectedAt);return`
      <div class="te-card te-card-${e}" data-lat="${t.lat}" data-lon="${t.lon}" role="button" tabindex="0">
        <div class="te-card-accent"></div>
        <div class="te-card-body">
          <div class="te-region">${c(t.regionLabel)}</div>
          <div class="te-meta">${c(i("components.thermalEscalation.observations",{count:t.observationCount}))} · ${c(i("components.thermalEscalation.sources",{count:t.uniqueSourceCount}))}</div>
          <div class="te-badges">${l}</div>
        </div>
        <div class="te-metrics">
          <div class="te-frp">${c(r)} <span class="te-frp-unit">MW</span></div>
          <div class="te-delta ${n}">${c(`${a}${Math.round(t.countDelta)}`)} · z${t.zScore.toFixed(1)}</div>
          <div class="te-persist">${c(s)}</div>
          <div class="te-last">${c(h)}</div>
        </div>
      </div>
    `}}function Xt(p){const g=Date.now()-p.getTime();if(g<3600*1e3){const e=Math.max(1,Math.floor(g/6e4));return i("components.thermalEscalation.age.minutesAgo",{count:e})}if(g<1440*60*1e3){const e=Math.max(1,Math.floor(g/36e5));return i("components.thermalEscalation.age.hoursAgo",{count:e})}const t=Math.floor(g/(1440*60*1e3));return t<30?i("components.thermalEscalation.age.daysAgo",{count:t}):p.toISOString().slice(0,10)}const xe=Object.freeze(Object.defineProperty({__proto__:null,ThermalEscalationPanel:Jt},Symbol.toStringTag,{value:"Module"})),te=50,ee=3600*1e3,se=180*1e3;class ie extends L{constructor(){super({id:"oref-sirens",title:i("panels.orefSirens"),showCount:!0,trackActivity:!0,infoTooltip:i("components.orefSirens.infoTooltip")});o(this,"alerts",[]);o(this,"historyCount24h",0);o(this,"totalHistoryCount",0);o(this,"historyWaves",[]);o(this,"historyFetchInFlight",!1);o(this,"historyLastFetchAt",0);this.showLoading(i("components.orefSirens.checking"))}setData(t){if(!t.configured){this.setSafeContent(k`<div class="panel-empty">${i("components.orefSirens.notConfigured")}</div>`),this.setCount(0);return}const e=this.alerts.length;this.alerts=t.alerts||[],this.historyCount24h=t.historyCount24h||0,this.totalHistoryCount=t.totalHistoryCount||0,this.setCount(this.alerts.length||this.historyCount24h||this.totalHistoryCount),e===0&&this.alerts.length>0&&this.setNewBadge(this.alerts.length),this.render(),this.loadHistory()}loadHistory(){this.historyFetchInFlight||Date.now()-this.historyLastFetchAt<se||(this.historyFetchInFlight=!0,this.historyLastFetchAt=Date.now(),Et().then(t=>{var e;(e=t.history)!=null&&e.length&&(this.historyWaves=t.history,this.render())}).catch(t=>{console.warn("[OrefSirensPanel] History fetch failed:",t)}).finally(()=>{this.historyFetchInFlight=!1}))}formatAlertTime(t){try{const e=new Date(t).getTime();if(!Number.isFinite(e))return"";const s=Date.now()-e;if(s<6e4)return i("components.orefSirens.justNow");const r=Math.floor(s/6e4);if(r<60)return`${r}m`;const a=Math.floor(r/60);return a<24?`${a}h`:`${Math.floor(a/24)}d`}catch{return""}}formatWaveTime(t){try{const e=new Date(t);return Number.isFinite(e.getTime())?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})+" "+e.toLocaleDateString(void 0,{month:"short",day:"numeric"}):""}catch{return""}}renderHistoryWaves(){if(!this.historyWaves.length)return this.historyCount24h>0?k`<div class="oref-history-section">
          <div class="oref-history-title">${i("components.orefSirens.historySummary",{count:String(this.historyCount24h),waves:"..."})}</div>
          <div class="oref-wave-list" style="opacity:0.5;text-align:center;padding:8px">${i("components.orefSirens.loadingHistory",{defaultValue:"Loading history..."})}</div>
        </div>`:k``;const t=Date.now(),e=this.historyWaves.map(a=>({wave:a,ts:new Date(a.timestamp).getTime()}));e.sort((a,n)=>n.ts-a.ts);const s=e.slice(0,te),r=H(s.map(({wave:a,ts:n})=>{const d=t-n<ee,l=d?"oref-wave-row oref-wave-recent":"oref-wave-row",h=d?k`<span class="oref-recent-badge">RECENT</span>`:k``,b=a.alerts.map(m=>m.title||m.cat),u=[...new Set(b)],$=a.alerts.reduce((m,v)=>{var C;return m+(((C=v.data)==null?void 0:C.length)||0)},0),S=u.join(", ")+($>0?` - ${$} areas`:"");return k`<div class="${l}">
        <div class="oref-wave-header">
          <span class="oref-wave-time">${this.formatWaveTime(a.timestamp)}</span>
          ${h}
        </div>
        <div class="oref-wave-summary">${S}</div>
      </div>`}));return k`<div class="oref-history-section">
      <div class="oref-history-title">${i("components.orefSirens.historySummary",{count:String(this.historyCount24h),waves:String(s.length)})}</div>
      <div class="oref-wave-list">${r}</div>
    </div>`}render(){const t=this.renderHistoryWaves();if(this.alerts.length===0){this.setSafeContent(k`
        <div class="oref-panel-content">
          <div class="oref-status oref-ok">
            <span class="oref-status-icon">&#x2705;</span>
            <span>${i("components.orefSirens.noAlerts")}</span>
          </div>
          ${t}
        </div>
      `);return}const e=H(this.alerts.slice(0,20).map(s=>{const r=(s.data||[]).join(", "),a=this.formatAlertTime(s.alertDate);return k`<div class="oref-alert-row">
        <div class="oref-alert-header">
          <span class="oref-alert-title">${s.title||s.cat}</span>
          <span class="oref-alert-time">${a}</span>
        </div>
        <div class="oref-alert-areas">${r}</div>
      </div>`}));this.setSafeContent(k`
      <div class="oref-panel-content">
        <div class="oref-status oref-danger">
          <span class="oref-pulse"></span>
          <span>${i("components.orefSirens.activeSirens",{count:String(this.alerts.length)})}</span>
        </div>
        <div class="oref-list">${e}</div>
        ${t}
      </div>
    `)}}const Ae=Object.freeze(Object.defineProperty({__proto__:null,OrefSirensPanel:ie},Symbol.toStringTag,{value:"Module"})),ae={normal:"var(--color-success, #22c55e)",minor:"#f59e0b",moderate:"#f97316",major:"#ef4444",severe:"#dc2626",unknown:"#9ca3af"},K={scheduled:"#6b7280",boarding:"#3b82f6",departed:"#8b5cf6",airborne:"#22c55e",landed:"#14b8a6",arrived:"#0ea5e9",cancelled:"#ef4444",diverted:"#f59e0b",unknown:"#6b7280"};function Q(p){return p==null?"—":String(Math.round(p))}function B(p){return p?p.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}):"—"}function Z(p){return p?p<60?`${p}m`:`${Math.floor(p/60)}h ${p%60}m`:"—"}function j(){const p=new Date;return`${p.getFullYear()}-${String(p.getMonth()+1).padStart(2,"0")}-${String(p.getDate()).padStart(2,"0")}`}const re=["ops","flights","airlines","tracking","news","prices"],ne={ops:"Ops",flights:"Flights",airlines:"Airlines",tracking:"Track",news:"News",prices:"Prices"};class oe extends L{constructor(){var r;super({id:"airline-intel",title:i("panels.airlineIntel"),trackActivity:!0,infoTooltip:i("components.airlineIntel.infoTooltip")});o(this,"activeTab","ops");o(this,"airports");o(this,"opsData",[]);o(this,"flightsData",[]);o(this,"flightsAirport","");o(this,"carriersData",[]);o(this,"trackingData",[]);o(this,"trackingFlightData",[]);o(this,"trackingQuery","");o(this,"newsData",[]);o(this,"googleFlightsData",[]);o(this,"datesData",[]);o(this,"pricesMode","search");o(this,"pricesCabin","ECONOMY");o(this,"pricesDegraded",!1);o(this,"pricesError","");o(this,"pricesOrigin","IST");o(this,"pricesDest","");o(this,"pricesDep","");o(this,"datesStart","");o(this,"datesEnd","");o(this,"datesTripDuration",7);o(this,"datesRoundTrip",!0);o(this,"loading",!1);o(this,"refreshTimer",null);o(this,"liveIndicator");o(this,"tabBar");o(this,"scopeFilter");const t=Y.get();this.airports=t.airports.slice(0,8);const e=t.routes[0];if(e){const a=e.split("-");a[0]&&(this.pricesOrigin=a[0]),a[1]&&(this.pricesDest=a[1])}else this.pricesOrigin=this.airports[0]??"IST",this.pricesDest=this.airports[1]??"";const s=document.createElement("button");s.className="icon-btn",s.title=i("common.refresh"),s.textContent="↻",s.addEventListener("click",()=>this.refresh()),this.header.appendChild(s),this.liveIndicator=document.createElement("span"),this.liveIndicator.className="live-badge",this.liveIndicator.textContent="● LIVE",this.liveIndicator.style.cssText="display:none;color:#22c55e;font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;letter-spacing:0.5px;white-space:nowrap;",(r=this.header.querySelector(".panel-title"))==null||r.after(this.liveIndicator),this.tabBar=document.createElement("div"),this.tabBar.className="panel-tabs",re.forEach(a=>{const n=document.createElement("button");n.className=`panel-tab${a===this.activeTab?" active":""}`,n.textContent=ne[a],n.dataset.tab=a,n.addEventListener("click",()=>this.switchTab(a)),this.tabBar.appendChild(n)}),this.element.insertBefore(this.tabBar,this.content),this.scopeFilter=new X({content:this.content,onChange:()=>this.renderTab()}),this.content.classList.add("airline-intel-content"),this.content.addEventListener("click",a=>{const n=a.target,d=n.closest("[data-price-mode]");if(d){this.pricesMode=d.dataset.priceMode,this.pricesError="",this.pricesDegraded=!1,this.renderTab();return}(n.id==="priceSearchBtn"||n.closest("#priceSearchBtn"))&&this.handleFlightSearch(),(n.id==="datesSearchBtn"||n.closest("#datesSearchBtn"))&&this.handleDatesSearch(),(n.id==="trackSearchBtn"||n.closest("#trackSearchBtn"))&&this.handleTrackSearch(),(n.id==="trackClearBtn"||n.closest("#trackClearBtn"))&&(this.trackingQuery="",this.trackingFlightData=[],this.trackingData=[],this.loadTab("tracking"))}),this.content.addEventListener("keydown",a=>{a.key==="Enter"&&!ct(a)&&a.target.id==="trackQueryInput"&&this.handleTrackSearch()}),this.runWhenConnected(()=>{this.refresh(),this.refreshTimer=setInterval(()=>void this.refresh(),5*6e4)})}toggle(t){this.element.style.display=t?"":"none"}destroy(){this.refreshTimer&&clearInterval(this.refreshTimer),super.destroy()}applyScope(t){this.scopeFilter.setScope(t)&&this.renderTab()}scopeCandidates(){const t=this.scopeFilter.scope;return t?[...t.chosen,...t.neighbours]:[]}flightCountries(t){var n,d;const e=[(n=t.origin)==null?void 0:n.iata,(d=t.destination)==null?void 0:d.iata].map(l=>l?z(l):null),s=e.filter(l=>!!l);if(s.length===e.length)return s;const r=new Set(this.scopeCandidates());return s.filter(l=>r.has(l))}updateLivePositions(t){this.trackingQuery||(this.trackingData=t,this.activeTab==="tracking"&&this.renderTab())}setLiveMode(t){this.liveIndicator.style.display=t?"":"none"}handleFlightSearch(){var l,h,b,u;const t=(((l=this.content.querySelector("#priceFromInput"))==null?void 0:l.value)||"").toUpperCase().trim(),e=(((h=this.content.querySelector("#priceToInput"))==null?void 0:h.value)||"").toUpperCase().trim(),s=((b=this.content.querySelector("#priceDepInput"))==null?void 0:b.value)||"",r=((u=this.content.querySelector("#priceCabinSelect"))==null?void 0:u.value)||"ECONOMY",a=this.content.querySelector("#priceInlineErr"),n=/^[A-Z]{3}$/;if(!n.test(t)||!n.test(e)){a&&(a.textContent="Enter valid 3-letter airport codes (for example, DXB)");return}const d=j();if(s&&s<d){a&&(a.textContent="Departure date must be today or future");return}a&&(a.textContent=""),this.pricesOrigin=t,this.pricesDest=e,this.pricesDep=s,this.pricesCabin=r,this.loadTab("prices")}handleDatesSearch(){var u,$,S,m,v,C,D;const t=(((u=this.content.querySelector("#datesFromInput"))==null?void 0:u.value)||"").toUpperCase().trim(),e=((($=this.content.querySelector("#datesToInput"))==null?void 0:$.value)||"").toUpperCase().trim(),s=((S=this.content.querySelector("#datesStartInput"))==null?void 0:S.value)||"",r=((m=this.content.querySelector("#datesEndInput"))==null?void 0:m.value)||"",a=((v=this.content.querySelector("#datesRoundTripCheck"))==null?void 0:v.checked)??!0,n=parseInt(((C=this.content.querySelector("#datesTripDurInput"))==null?void 0:C.value)||"7",10),d=((D=this.content.querySelector("#datesCabinSelect"))==null?void 0:D.value)||"ECONOMY",l=this.content.querySelector("#datesInlineErr"),h=/^[A-Z]{3}$/;if(!h.test(t)||!h.test(e)){l&&(l.textContent="Enter valid 3-letter airport codes (for example, DXB)");return}if(!s||!r){l&&(l.textContent="Enter start and end dates");return}if(s<j()){l&&(l.textContent="Start date must be today or future");return}if(s>=r){l&&(l.textContent="Start date must be before end date");return}if(a&&(Number.isNaN(n)||n<1)){l&&(l.textContent="Trip duration must be at least 1 day");return}if((new Date(r).getTime()-new Date(s).getTime())/864e5>30){l&&(l.textContent="Choose a range of at most 31 days");return}l&&(l.textContent=""),this.pricesOrigin=t,this.pricesDest=e,this.datesStart=s,this.datesEnd=r,this.datesRoundTrip=a,this.datesTripDuration=Number.isNaN(n)?7:n,this.pricesCabin=d,this.loadTab("prices")}handleTrackSearch(){var e;const t=(((e=this.content.querySelector("#trackQueryInput"))==null?void 0:e.value)||"").trim().toUpperCase();this.trackingQuery=t,this.trackingFlightData=[],this.trackingData=[],this.loadTab("tracking")}switchTab(t){this.activeTab=t,this.tabBar.querySelectorAll(".panel-tab").forEach(e=>{e.classList.toggle("active",e.dataset.tab===t)}),this.renderTab(),(t==="ops"&&!this.opsData.length||t==="flights"&&!this.flightsData.length||t==="airlines"&&!this.carriersData.length||t==="tracking"&&!this.trackingData.length||t==="news"&&!this.newsData.length)&&this.loadTab(t)}async refresh(){const t=this.activeTab!=="prices";if(!this.element.isConnected){this.runWhenConnected(()=>{this.refresh()});return}this.activeTab!=="ops"&&this.loadOps(),t&&this.loadTab(this.activeTab)}async loadOps(){this.opsData=await W(this.airports),this.activeTab==="ops"&&this.renderTab()}async loadTab(t){this.loading=!0,this.renderTab();try{switch(t){case"ops":this.opsData=await W(this.airports);break;case"flights":{const e=this.airports[0]??"IST";this.flightsData=await Ot(e,"both",30),this.flightsAirport=e;break}case"airlines":this.carriersData=await It(this.airports);break;case"tracking":this.trackingQuery?/^[A-Z]{2}\d{1,4}$/.test(this.trackingQuery)?this.trackingFlightData=await At(this.trackingQuery):/^[0-9A-F]{6}$/i.test(this.trackingQuery)?this.trackingData=await O({icao24:this.trackingQuery.toLowerCase()}):this.trackingData=await O({callsign:this.trackingQuery}):this.trackingData=await O({});break;case"news":{const e=[...this.airports,...Y.get().airlines];this.newsData=await xt(e,24,20);break}case"prices":{if(this.pricesMode==="dates"){const e=await Ft({origin:this.pricesOrigin,destination:this.pricesDest,startDate:this.datesStart,endDate:this.datesEnd,tripDuration:this.datesTripDuration,isRoundTrip:this.datesRoundTrip,cabinClass:this.pricesCabin});this.datesData=e.dates,this.pricesDegraded=e.degraded,this.pricesError=e.error}else{const e=this.pricesDep||new Date(Date.now()+6048e5).toISOString().slice(0,10),s=await Nt({origin:this.pricesOrigin,destination:this.pricesDest,departureDate:e,cabinClass:this.pricesCabin});this.googleFlightsData=s.flights,this.pricesDegraded=s.degraded,this.pricesError=s.error}break}}}catch{}this.loading=!1,this.renderTab()}renderLoading(){E(this.content,y(`<div class="panel-loading">${i("common.loading")}</div>`,"legacy direct innerHTML migration"))}renderTab(){if(this.loading){this.scopeFilter.hideStrip(),this.renderLoading();return}switch((this.activeTab==="airlines"||this.activeTab==="tracking"||this.activeTab==="prices")&&this.scopeFilter.renderStrip(null,i("focus.filter.tabNotFiltered")),this.activeTab){case"ops":this.renderOps();break;case"flights":this.renderFlights();break;case"airlines":this.renderAirlines();break;case"tracking":this.renderTracking();break;case"news":this.renderNews();break;case"prices":this.renderPrices();break}}renderOps(){if(!this.opsData.length){this.scopeFilter.hideStrip(),this.setTrustedContent(y(`<div class="no-data">${i("components.airlineIntel.noOpsData")}</div>`,"legacy direct innerHTML migration"));return}const t=this.scopeFilter.view(this.opsData,s=>z(s.iata));if(this.scopeFilter.renderStrip(t),t.emptyByFocus){this.setTrustedContent(y(F(i("focus.filter.emptyAirports")),"focus empty state: escaped by focusedEmptyHtml"));return}const e=t.rows.map(({item:s,...r})=>`
      <div class="ops-row">
        <div class="ops-iata">${c(s.iata)}</div>
        <div class="ops-name">${c(s.name||s.iata)}${N(r)}</div>
        <div class="ops-severity" style="color:${ae[s.severity]??"#aaa"}">${s.severity.toUpperCase()}</div>
        <div class="ops-delay">${s.avgDelayMinutes>0?`+${s.avgDelayMinutes}m`:"—"}</div>
        <div class="ops-cancel">${s.cancellationRate>0?`${s.cancellationRate.toFixed(1)}% cxl`:""}</div>
        ${s.closureStatus?'<div class="ops-closed">CLOSED</div>':""}
        ${s.notamFlags.length?'<div class="ops-notam">⚠️ NOTAM</div>':""}
      </div>`).join("");this.setTrustedContent(y(`<div class="ops-grid">${e}</div>`,"legacy direct innerHTML migration"))}renderFlights(){if(!this.flightsData.length){this.scopeFilter.hideStrip(),this.setTrustedContent(y(`<div class="no-data">${i("components.airlineIntel.noFlights")}</div>`,"legacy direct innerHTML migration"));return}const t=this.scopeFilter.view(this.flightsData,s=>this.flightCountries(s));if(this.scopeFilter.renderStrip(t),t.emptyByFocus){this.setTrustedContent(y(F(i("focus.filter.emptyFlights")),"focus empty state: escaped by focusedEmptyHtml"));return}const e=t.rows.map(({item:s,...r})=>{const a=K[s.status]??"#6b7280",n=Mt(s,this.flightsAirport);return`
        <div class="flight-row">
          <div class="flight-num">${c(s.flightNumber)}</div>
          <div class="flight-route">${c(s.origin.iata)} → ${c(s.destination.iata)}${N(r)}</div>
          <div class="flight-time">${B(n)}</div>
          <div class="flight-delay" style="color:${s.delayMinutes>0?"#f97316":"#aaa"}">${s.delayMinutes>0?`+${s.delayMinutes}m`:""}</div>
          <div class="flight-status" style="color:${a}">${c(s.status)}</div>
        </div>`}).join("");this.setTrustedContent(y(`<div class="flights-list">${e}</div>`,"legacy direct innerHTML migration"))}renderAirlines(){if(!this.carriersData.length){this.setTrustedContent(y(`<div class="no-data">${i("components.airlineIntel.noCarrierData")}</div>`,"legacy direct innerHTML migration"));return}const t=this.carriersData.slice(0,15).map(e=>`
      <div class="carrier-row">
        <div class="carrier-name">${c(e.carrierName||e.carrierIata)}</div>
        <div class="carrier-flights">${e.totalFlights} flt</div>
        <div class="carrier-delay" style="color:${e.delayPct>30?"#ef4444":"#aaa"}">${e.delayPct.toFixed(1)}% delayed</div>
        <div class="carrier-cancel">${e.cancellationRate.toFixed(1)}% cxl</div>
      </div>`).join("");this.setTrustedContent(y(`<div class="carriers-list">${t}</div>`,"legacy direct innerHTML migration"))}renderTracking(){const t=this.trackingQuery?'<button id="trackClearBtn" class="icon-btn" style="padding:4px 8px;color:#9ca3af" title="Back to live feed" aria-label="Back to live feed">×</button>':"",e=`
      <div class="track-search" style="display:flex;gap:6px;padding:8px 0 6px">
        <input id="trackQueryInput" class="price-input" placeholder="Flight (EK3) or callsign (UAE3)" value="${c(this.trackingQuery)}" style="flex:1;min-width:0">
        ${t}<button id="trackSearchBtn" class="icon-btn" style="padding:4px 10px">Track</button>
      </div>`;if(this.loading){E(this.content,y(`${e}<div class="panel-loading">${i("common.loading")}</div>`,"legacy direct innerHTML migration"));return}if(this.trackingFlightData.length){const r=this.trackingFlightData.map(a=>{const n=a.estimatedDeparture?`Dep ${B(a.estimatedDeparture)}`:"",d=a.estimatedArrival?` · Arr ${B(a.estimatedArrival)}`:"",l=K[a.status]??"#6b7280";return`
          <div class="track-flight-card" style="padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;gap:8px;align-items:baseline">
              <strong>${c(a.flightNumber)}</strong>
              <span style="color:#9ca3af;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${c(a.carrier.name||a.carrier.iata)}</span>
              <span style="color:${l};font-size:calc(11px * var(--wm-panel-effective-scale, 1));margin-left:auto">${c(a.status)}</span>
            </div>
            <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${c(a.origin.iata)} → ${c(a.destination.iata)}${n?` · ${n}`:""}${d}</div>
            ${a.aircraftType?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:#6b7280">${c(a.aircraftType)}</div>`:""}
            ${a.gate||a.terminal?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:#6b7280">${a.gate?`Gate ${c(a.gate)}`:""}${a.terminal?`${a.gate?" · ":""}T${c(a.terminal)}`:""}</div>`:""}
            ${a.delayMinutes>0?`<div style="color:#f97316;font-size:calc(12px * var(--wm-panel-effective-scale, 1))">+${a.delayMinutes}m delay</div>`:""}
          </div>`}).join("");E(this.content,y(`${e}<div>${r}</div>`,"legacy direct innerHTML migration"));return}if(this.trackingData.length){const r=this.trackingData.slice(0,20).map(a=>`
        <div class="track-row">
          <div class="track-cs">${c(a.callsign||a.icao24)}</div>
          <div class="track-alt">${Q(a.altitudeFt)} ft</div>
          <div class="track-spd">${Q(a.groundSpeedKts)} kts</div>
          <div class="track-pos">${a.lat.toFixed(2)}, ${a.lon.toFixed(2)}</div>
        </div>`).join("");E(this.content,y(`${e}<div class="tracking-list">${r}</div>`,"legacy direct innerHTML migration"));return}const s=this.trackingQuery?`<div class="no-data">No results for <strong>${c(this.trackingQuery)}</strong>.</div>`:`<div class="no-data">${i("components.airlineIntel.noTrackingData")}</div>`;E(this.content,y(`${e}${s}`,"legacy direct innerHTML migration"))}renderNews(){if(!this.newsData.length){this.scopeFilter.hideStrip(),this.setTrustedContent(y(`<div class="no-data">${i("components.airlineIntel.noNews")}</div>`,"legacy direct innerHTML migration"));return}const t=this.scopeCandidates(),e=this.scopeFilter.view(this.newsData,r=>Dt(Rt(r.title,r.sourceName),t));if(this.scopeFilter.renderStrip(e),e.emptyByFocus){this.setTrustedContent(y(F(i("focus.filter.emptyAviationNews")),"focus empty state: escaped by focusedEmptyHtml"));return}const s=e.rows.map(({item:r,...a})=>`
      <div class="news-item" style="padding:8px 0;border-bottom:1px solid var(--border,#2a2a2a)">
        <a href="${J(r.url)}" target="_blank" rel="noopener" class="news-link">${c(r.title)}</a>
        <div class="news-meta" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim,#888);margin-top:2px">${c(r.sourceName)} · ${r.publishedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}${N(a)}</div>
      </div>`).join("");E(this.content,y(`<div class="news-list" style="padding:0 4px">${s}</div>`,"legacy direct innerHTML migration"))}renderPrices(){const t=this.pricesMode==="search",e=`
      <div class="price-mode-toggle">
        <button class="price-mode-btn${t?" active":""}" data-price-mode="search">${c(i("components.airlineIntel.searchFlights"))}</button>
        <button class="price-mode-btn${t?"":" active"}" data-price-mode="dates">${c(i("components.airlineIntel.bestDates"))}</button>
      </div>`,s=this.pricesDegraded?`<div class="gf-degraded">${c(i("components.airlineIntel.degradedResults"))}</div>`:"";if(t){const r=this.pricesDep||new Date(Date.now()+6048e5).toISOString().slice(0,10),a=`
        <div class="price-controls">
          <input id="priceFromInput" class="price-input" placeholder="From" aria-label="Origin airport code" maxlength="3" value="${c(this.pricesOrigin)}" style="width:54px">
          <span style="color:#6b7280" aria-hidden="true">→</span>
          <input id="priceToInput" class="price-input" placeholder="To" aria-label="Destination airport code" maxlength="3" value="${c(this.pricesDest)}" style="width:54px">
          <input id="priceDepInput" class="price-input" type="date" aria-label="Departure date" value="${c(r)}" style="width:128px">
          <select id="priceCabinSelect" class="price-input" aria-label="Cabin class" style="width:110px">
            <option value="ECONOMY"${this.pricesCabin==="ECONOMY"?" selected":""}>Economy</option>
            <option value="PREMIUM_ECONOMY"${this.pricesCabin==="PREMIUM_ECONOMY"?" selected":""}>Premium Economy</option>
            <option value="BUSINESS"${this.pricesCabin==="BUSINESS"?" selected":""}>Business</option>
            <option value="FIRST"${this.pricesCabin==="FIRST"?" selected":""}>First</option>
          </select>
          <button id="priceSearchBtn" class="icon-btn" style="padding:4px 10px">${i("header.search")}</button>
        </div>
        <div id="priceInlineErr" style="color:#ef4444;font-size:calc(11px * var(--wm-panel-effective-scale, 1));min-height:14px"></div>`;let n;this.googleFlightsData.length?n=`<div class="gf-list">${this.googleFlightsData.map(l=>{const h=l.stops===0?i("components.airlineIntel.nonstop"):`${l.stops} stop`,b=l.legs.map(u=>`
              <div class="gf-leg">
                <span class="gf-airline">${c(u.airlineCode)} ${c(u.flightNumber)}</span>
                <span>${c(u.departureAirport)} ${c(u.departureDatetime.slice(11,16))}</span>
                <span>→</span>
                <span>${c(u.arrivalAirport)} ${c(u.arrivalDatetime.slice(11,16))}</span>
                <span class="gf-dur">(${Z(u.durationMinutes)})</span>
              </div>`).join("");return`
            <div class="gf-card">
              <div class="gf-summary">
                <span class="gf-price">${Math.round(l.price).toLocaleString()}</span>
                <span class="gf-total-dur">${Z(l.durationMinutes)}</span>
                <span class="gf-stops">${c(h)}</span>
              </div>
              ${b}
            </div>`}).join("")}</div>`:this.pricesError?n=`<div class="no-data" style="color:#ef4444">${c(this.pricesError)}</div>`:n=`<div class="no-data">${c(i("components.airlineIntel.enterRouteAndDate"))}</div>`,E(this.content,y(`${e}${a}${s}${n}`,"legacy direct innerHTML migration"))}else{const r=`
        <div class="price-controls">
          <input id="datesFromInput" class="price-input" placeholder="From" maxlength="3" value="${c(this.pricesOrigin)}" style="width:54px">
          <span style="color:#6b7280">→</span>
          <input id="datesToInput" class="price-input" placeholder="To" maxlength="3" value="${c(this.pricesDest)}" style="width:54px">
          <input id="datesStartInput" class="price-input" type="date" value="${c(this.datesStart||j())}" style="width:128px">
          <input id="datesEndInput" class="price-input" type="date" value="${c(this.datesEnd)}" style="width:128px">
          <label style="display:flex;align-items:center;gap:4px;font-size:calc(12px * var(--wm-panel-effective-scale, 1))">
            <input id="datesRoundTripCheck" type="checkbox" ${this.datesRoundTrip?"checked":""}>${c(i("components.airlineIntel.roundTrip"))}
          </label>
          <label style="display:flex;align-items:center;gap:4px;font-size:calc(12px * var(--wm-panel-effective-scale, 1))">
            ${c(i("components.airlineIntel.tripDays"))}:
            <input id="datesTripDurInput" class="price-input" type="number" min="1" value="${this.datesTripDuration}" style="width:44px">
          </label>
          <select id="datesCabinSelect" class="price-input" aria-label="Cabin class" style="width:110px">
            <option value="ECONOMY"${this.pricesCabin==="ECONOMY"?" selected":""}>Economy</option>
            <option value="PREMIUM_ECONOMY"${this.pricesCabin==="PREMIUM_ECONOMY"?" selected":""}>Premium Economy</option>
            <option value="BUSINESS"${this.pricesCabin==="BUSINESS"?" selected":""}>Business</option>
            <option value="FIRST"${this.pricesCabin==="FIRST"?" selected":""}>First</option>
          </select>
          <button id="datesSearchBtn" class="icon-btn" style="padding:4px 10px">${i("header.search")}</button>
        </div>
        <div id="datesInlineErr" style="color:#ef4444;font-size:calc(11px * var(--wm-panel-effective-scale, 1));min-height:14px"></div>`;let a;if(this.datesData.length){const n=[...this.datesData].sort((u,$)=>u.price-$.price),d=n.map(u=>u.price),l=d[Math.floor(d.length*.2)]??1/0,h=d[Math.floor(d.length*.8)]??-1/0;a=`<div class="dp-list">${n.map(u=>{const $=u.price<=l?"dp-cheap":u.price>=h?"dp-expensive":"";return`
            <div class="dp-row">
              <span class="dp-date">${c(u.date)}</span>
              ${u.returnDate?`<span class="dp-return">${c(u.returnDate)}</span>`:""}
              <span class="dp-price ${$}">${Math.round(u.price).toLocaleString()}</span>
            </div>`}).join("")}</div>`}else this.pricesError?a=`<div class="no-data" style="color:#ef4444">${c(this.pricesError)}</div>`:a=`<div class="no-data">${c(i("components.airlineIntel.enterDateRange"))}</div>`;E(this.content,y(`${e}${r}${s}${a}`,"legacy direct innerHTML migration"))}}}const Ie=Object.freeze(Object.defineProperty({__proto__:null,AirlineIntelPanel:oe},Symbol.toStringTag,{value:"Module"}));export{Ie as A,Le as D,Ae as O,De as S,xe as T,Fe as U,Re as a,Ne as b};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["panels-defense-uOZhDPm5.js"]=1;