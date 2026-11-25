var kt=Object.defineProperty;var Et=(n,p,e)=>p in n?kt(n,p,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[p]=e;var g=(n,p,e)=>Et(n,typeof p!="symbol"?p+"":p,e);import{P as L}from"./Panel-CJQVCfYg.js";import{BLS_METRO_IDS as Oe,getNationalDebtData as It,getEurostatCountryData as Dt}from"./index-D3TAJW85.js";import{t as o,a as be,L as Ft}from"./theme-colors-ToRFEbn-.js";import{u as D,e as r,s as dt}from"./sanitize-D7dx0cA1.js";import{isFeatureAvailable as ne}from"./runtime-config-tgv8gRzl.js";import{b4 as Ue,b5 as Lt,b6 as Mt,b7 as _t,aT as Nt,av as Bt,aP as Ot}from"./App-DyLzL2rx.js";import"./map-layer-definitions-BCWegBzb.js";import{i as re}from"./clerk-CAuJ7nO4.js";import{s as ve,m as Ut}from"./sparkline-BTOgeOir.js";import{W as X,a as ee,b as Ge,e as ut}from"./main-k_5Od7i9.js";import{i as Gt,t as He}from"./index-uHNHG_pv.js";import{t as _,s as B,h as le}from"./dom-utils-BodelmHa.js";import{D as pt,f as Ht,a as jt,b as qt,c as Vt,d as zt,e as Wt,M as Kt,S as Yt,g as Zt}from"./index-CG4GwYzP.js";import{t as je,Q as Jt,R as ye,U as Qt,V as Xt,K as es}from"./gdelt-intel-DU-_Fjx7.js";import{c as ts}from"./chokepoint-coverage-BCzl8MQe.js";import{S as $e,r as ss,g as as}from"./index-DToOFxrX.js";import{T as is}from"./transit-chart-JbmoHPF5.js";import{s as ns,g as we}from"./auth-state-DLqMTLIu.js";import{h as de}from"./panel-gating-B4-XUkuA.js";import{f as qe}from"./analytics-UdF1aNpQ.js";import{b as ht}from"./activation-DdoRK80V.js";import{C as rs}from"./country-port-clusters-BZwuKcKc.js";import{C as os}from"./china-factory-clusters-CnArIcnt.js";import{g as cs,r as ls}from"./china-activity-nowcast-view-DNf78Occ.js";import{G as ue}from"./gulf-fdi-Brj4tDHY.js";import{b as V,a as K,M as mt,g as Y,E as ce,r as Q}from"./index-BhmrbbBS.js";import{F as ds}from"./FoodPricesCard-CdyAYj_0.js";import{n as us,h as Se,i as ps,c as hs}from"./macro-tiles-china-t3oIeZIr.js";import{C as ms}from"./ciss-staleness-BTjV3-Om.js";function vt(n){return n<20?"#27ae60":n<40?"#f1c40f":n<60?"#e67e22":n<80?"#e74c3c":"#8e44ad"}function vs(n,p){return n==="ICSA"?p>=1e3?(p/1e3).toFixed(0)+"K":p.toFixed(0):n==="VIXCLS"?p.toFixed(2):n==="STLFSI4"||n==="GSCPI"?p.toFixed(3):p.toFixed(2)}const Ve="wm:economic-stress:last-notified-level";function fs(n){if(typeof Notification>"u"||Notification.permission!=="granted")return;const p=n>=85?2:n>=70?1:0;if(p!==0)try{const e=parseInt(sessionStorage.getItem(Ve)??"0",10);if(p<=e)return;sessionStorage.setItem(Ve,String(p)),new Notification("Economic Stress Alert",{body:`Composite stress index reached ${n.toFixed(1)} (${n>=85?"Critical":"Severe"})`,icon:"/favico/favicon-32x32.png",tag:"economic-stress"})}catch{}}function gs(n){if(n.missing)return`<div style="background:rgba(255,255,255,0.02);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.05)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em">${r(n.label)}</span>
        <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#888">N/A</span>
      </div>
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:#666;font-style:italic">Data unavailable</div>
    </div>`;const p=vt(n.score),e=Math.min(100,Math.max(0,n.score)).toFixed(1),t=vs(n.id,n.rawValue);return`<div style="background:rgba(255,255,255,0.04);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.07)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
      <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em">${r(n.label)}</span>
      <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${r(t)}</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px">
      <div style="flex:1;background:rgba(255,255,255,0.07);border-radius:3px;height:5px;overflow:hidden">
        <div style="height:100%;width:${e}%;background:${p};border-radius:3px;transition:width 0.3s"></div>
      </div>
      <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${p};min-width:28px;text-align:right">${n.score.toFixed(0)}</span>
    </div>
  </div>`}function Ce(n){return n.value===null?"N/A":n.unit==="$B"?`$${n.value.toLocaleString()}B`:`${n.value.toLocaleString()}${n.unit}`}function Ae(n){if(n.change===null)return"No change";const p=n.change>0?"+":"";return n.unit==="$B"?`${n.change<0?"-$":`${p}$`}${Math.abs(n.change).toLocaleString()}B`:`${p}${n.change.toLocaleString()}${n.unit}`}function Te(n){return n===null||n===0?"neutral":n>0?"positive":"negative"}function bs(n){var i,c,d,f;const p=new Map(n.map(m=>[m.id,m])),e=((i=p.get("VIXCLS"))==null?void 0:i.value)??null,t=((c=p.get("T10Y2Y"))==null?void 0:c.value)??null,s=((d=p.get("UNRATE"))==null?void 0:d.value)??null,a=((f=p.get("FEDFUNDS"))==null?void 0:f.value)??null;let l=0;return e!==null&&(l+=e>=25?2:e>=18?1:0),t!==null&&(l+=t<=0?2:t<.5?1:0),s!==null&&(l+=s>=4.5?1:0),a!==null&&(l+=a>=5?1:a<=2?-1:0),l>=4?{label:o("components.economic.pressure.stress"),detail:o("components.economic.pressure.stressDetail"),className:"macro-pressure-stress"}:l>=2?{label:o("components.economic.pressure.watch"),detail:o("components.economic.pressure.watchDetail"),className:"macro-pressure-watch"}:{label:o("components.economic.pressure.steady"),detail:o("components.economic.pressure.steadyDetail"),className:"macro-pressure-steady"}}class ys extends L{constructor(){super({id:"economic",title:o("panels.economic"),defaultRowSpan:2,infoTooltip:o("components.economic.infoTooltip")});g(this,"fredData",[]);g(this,"blsData",[]);g(this,"spendingData",null);g(this,"bisData",null);g(this,"stressData",null);g(this,"lastUpdate",null);g(this,"activeTab","indicators");g(this,"fredState","loading");g(this,"fredErrorMsg","");this.content.addEventListener("click",e=>{const t=e.target.closest(".panel-tab");t!=null&&t.dataset.tab&&(this.activeTab=t.dataset.tab,this.render())})}update(e){this.fredData=e,this.fredState="ok",this.fredErrorMsg="",this.lastUpdate=new Date,this.render()}setFredError(e){this.fredState="error",this.fredErrorMsg=e,this.render()}setFredRetrying(e){this.fredState="retrying",this.fredErrorMsg=e!==void 0?`${o("common.retrying")} (${e}s)`:o("common.retrying"),this.render()}updateSpending(e){this.spendingData=e,this.render()}updateBis(e){this.bisData=e,this.render()}updateBls(e){this.blsData=e,this.render()}updateStress(e){this.stressData=e,Number.isFinite(e.compositeScore)&&fs(e.compositeScore),this.render()}setLoading(e){e&&(this.fredState="loading",this.fredErrorMsg="")}render(){var c,d;const e=this.spendingData&&((c=this.spendingData.awards)==null?void 0:c.length)>0,t=this.bisData&&((d=this.bisData.policyRates)==null?void 0:d.length)>0,s=this.blsData.length>0,a=`
      <div class="panel-tabs">
        <button class="panel-tab ${this.activeTab==="indicators"?"active":""}" data-tab="indicators">
          ${o("components.economic.indicators")}
        </button>
        ${e?`
          <button class="panel-tab ${this.activeTab==="spending"?"active":""}" data-tab="spending">
            Recent awards
          </button>
        `:""}
        ${t?`
          <button class="panel-tab ${this.activeTab==="centralBanks"?"active":""}" data-tab="centralBanks">
            ${o("components.economic.centralBanks")}
          </button>
        `:""}
        ${s?`
          <button class="panel-tab ${this.activeTab==="labor"?"active":""}" data-tab="labor">
            ${o("components.economic.laborMarket")}
          </button>
        `:""}
        <button class="panel-tab ${this.activeTab==="stress"?"active":""}" data-tab="stress">
          Stress Index
        </button>
      </div>
    `;let l="";switch(this.activeTab){case"indicators":l=this.renderIndicators();break;case"spending":l=this.renderSpending();break;case"centralBanks":l=this.renderCentralBanks();break;case"labor":l=this.renderLabor();break;case"stress":l=this.renderStress();break}const i=this.lastUpdate?this.lastUpdate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";this.setSafeContent(D(`
      ${a}
      <div class="economic-content">
        ${l}
      </div>
      <div class="economic-footer">
        <span class="economic-source">${this.getSourceLabel()} • ${i}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}getSourceLabel(){switch(this.activeTab){case"indicators":return"FRED";case"spending":return"USASpending.gov";case"centralBanks":return"BIS";case"labor":return"BLS";case"stress":return"FRED"}}renderIndicators(){if(this.fredData.length===0){if(re()&&!ne("economicFred"))return`<div class="economic-empty">${o("components.economic.fredKeyMissing")}</div>`;if(this.fredState==="error"||this.fredState==="retrying"){const i=this.fredState==="retrying",c=i?o("common.upstreamUnavailable"):this.fredErrorMsg,d=c.includes("—")?c.slice(0,c.indexOf("—")).trimEnd():c,f=i?`<div class="panel-error-countdown">${r(this.fredErrorMsg)}</div>`:"";return`
          <div class="panel-error-state">
            <div class="panel-loading-radar panel-error-radar">
              <div class="panel-radar-sweep"></div>
              <div class="panel-radar-dot error"></div>
            </div>
            <div class="panel-error-msg">${r(d)}</div>
            ${f}
          </div>
        `}return`<div class="economic-empty">${o("components.economic.noIndicatorData")}</div>`}const e=bs(this.fredData),t=["VIXCLS","T10Y2Y","FEDFUNDS","UNRATE"],s=this.fredData.filter(i=>t.includes(i.id)),a=this.fredData.filter(i=>!t.includes(i.id)),l=[...s,...a];return`
      <div class="economic-content-macro">
        <div class="macro-pressure-card ${e.className}">
          <div class="macro-pressure-label">${o("components.economic.pressure.label")}</div>
          <div class="macro-pressure-value">${r(e.label)}</div>
          <div class="macro-pressure-detail">${r(e.detail)}</div>
        </div>
        <div class="macro-summary-grid">
          ${s.map(i=>`
            <div class="macro-summary-card">
              <div class="macro-summary-head">
                <span class="indicator-name">${r(i.name)}</span>
                <span class="indicator-id">${r(i.id)}</span>
              </div>
              <div class="macro-summary-value">${r(Ce(i))}</div>
              <div class="macro-summary-change ${Te(i.change)}">${r(Ae(i))}</div>
            </div>
          `).join("")}
        </div>
        <div class="economic-indicators">
          ${l.map(i=>{var c;return`
            <div class="economic-indicator" data-series="${r(i.id)}">
              <div class="indicator-header">
                <span class="indicator-name">${r(i.name)}</span>
                <span class="indicator-id">${r(i.id)}</span>
              </div>
              <div class="indicator-value">
                <span class="value">${r(Ce(i))}</span>
                <span class="change ${Te(i.change)}">${r(Ae(i))}</span>
              </div>
              <div class="indicator-date">${r(i.date)}</div>
              ${ve(((c=i.observations)==null?void 0:c.map(d=>d.value))??[],i.change!==null&&i.change>=0?"#4caf50":"#f44336",120,28,"display:block;margin:2px 0")}
            </div>
          `}).join("")}
        </div>
      </div>
    `}renderSpending(){var l;if(!this.spendingData||!((l=this.spendingData.awards)!=null&&l.length))return`<div class="economic-empty">${o("components.economic.noSpending")}</div>`;const{awards:e,totalAmount:t,periodStart:s,periodEnd:a}=this.spendingData;return`
      <div class="spending-summary">
        <div class="spending-total">
          ${r(Ue(t))} ${o("components.economic.in")} ${r(String(e.length))} ${o("components.economic.awards")}
          <span class="spending-period">${r(s)} / ${r(a)}</span>
        </div>
      </div>
      <div class="spending-list">
        ${e.slice(0,8).map(i=>`
          <div class="spending-award">
            <div class="award-header">
              <span class="award-icon">${r(Lt(i.awardType))}</span>
              <span class="award-amount">${r(Ue(i.amount))}</span>
            </div>
            <div class="award-recipient">${r(i.recipientName)}</div>
            <div class="award-agency">${r(i.agency)}</div>
            ${i.description?`<div class="award-desc">${r(i.description.slice(0,100))}${i.description.length>100?"...":""}</div>`:""}
          </div>
        `).join("")}
      </div>
    `}renderCentralBanks(){var d,f,m;if(!this.bisData||!((d=this.bisData.policyRates)!=null&&d.length))return`<div class="economic-empty">${o("components.economic.noBisData")}</div>`;const e=be("--semantic-normal"),t=be("--semantic-critical"),s=be("--text-dim"),a=[...this.bisData.policyRates].sort((v,u)=>u.rate-v.rate),l=`
      <div class="bis-section">
        <div class="bis-section-title">${o("components.economic.policyRate")}</div>
        <div class="economic-indicators">
          ${a.map(v=>{const u=v.rate-v.previousRate,b=u<0?e:u>0?t:s,h=u<0?o("components.economic.cut"):u>0?o("components.economic.hike"):o("components.economic.hold"),y=u<0?"▼":u>0?"▲":"–";return`
              <div class="economic-indicator">
                <div class="indicator-header">
                  <span class="indicator-name">${r(v.centralBank)}</span>
                  <span class="indicator-id">${r(v.countryCode)}</span>
                </div>
                <div class="indicator-value">
                  <span class="value">${r(String(v.rate))}%</span>
                  <span class="change" style="color: ${r(b)}">${r(y)} ${r(h)}</span>
                </div>
                <div class="indicator-date">${r(v.date)}</div>
              </div>`}).join("")}
        </div>
      </div>
    `;let i="";((f=this.bisData.exchangeRates)==null?void 0:f.length)>0&&(i=`
        <div class="bis-section">
          <div class="bis-section-title">${o("components.economic.realEer")}</div>
          <div class="economic-indicators">
            ${this.bisData.exchangeRates.map(v=>{const u=v.realChange>0?t:v.realChange<0?e:s,b=v.realChange>0?"▲":v.realChange<0?"▼":"–";return`
                <div class="economic-indicator">
                  <div class="indicator-header">
                    <span class="indicator-name">${r(v.countryName)}</span>
                    <span class="indicator-id">${r(v.countryCode)}</span>
                  </div>
                  <div class="indicator-value">
                    <span class="value">${r(String(v.realEer))}</span>
                    <span class="change" style="color: ${r(u)}">${r(b)} ${r(v.realChange>0?"+":"")}${r(String(v.realChange))}%</span>
                  </div>
                  <div class="indicator-date">${r(v.date)}</div>
                </div>`}).join("")}
          </div>
        </div>
      `);let c="";if(((m=this.bisData.creditToGdp)==null?void 0:m.length)>0){const v=[...this.bisData.creditToGdp].sort((u,b)=>b.creditGdpRatio-u.creditGdpRatio);c=`
        <div class="bis-section">
          <div class="bis-section-title">${o("components.economic.creditToGdp")}</div>
          <div class="economic-indicators">
            ${v.map(u=>{const b=u.creditGdpRatio-u.previousRatio,h=b>0?t:b<0?e:s,y=b>0?"▲":b<0?"▼":"–",w=b!==0?`${b>0?"+":""}${Math.round(b*10)/10}pp`:"–";return`
                <div class="economic-indicator">
                  <div class="indicator-header">
                    <span class="indicator-name">${r(u.countryName)}</span>
                    <span class="indicator-id">${r(u.countryCode)}</span>
                  </div>
                  <div class="indicator-value">
                    <span class="value">${r(String(u.creditGdpRatio))}%</span>
                    <span class="change" style="color: ${r(h)}">${r(y)} ${r(w)}</span>
                  </div>
                  <div class="indicator-date">${r(u.date)}</div>
                </div>`}).join("")}
          </div>
        </div>
      `}return l+i+c}renderLabor(){if(this.blsData.length===0)return`<div class="economic-empty">${o("components.economic.noIndicatorData")}</div>`;const e=this.blsData.filter(a=>!Oe.has(a.id)),t=this.blsData.filter(a=>Oe.has(a.id)),s=a=>{var l;return`
      <div class="economic-indicator" data-series="${r(a.id)}">
        <div class="indicator-header">
          <span class="indicator-name">${r(a.name)}</span>
          <span class="indicator-id">${r(a.id)}</span>
        </div>
        <div class="indicator-value">
          <span class="value">${r(Ce(a))}</span>
          <span class="change ${Te(a.change)}">${r(Ae(a))}</span>
        </div>
        <div class="indicator-date">${r(a.date)}</div>
        ${ve(((l=a.observations)==null?void 0:l.map(i=>i.value))??[],a.change!==null&&a.change>=0?"#4caf50":"#f44336",120,28,"display:block;margin:2px 0")}
      </div>`};return`
      <div class="economic-content-macro">
        <div class="economic-indicators">
          ${e.map(s).join("")}
        </div>
        ${t.length>0?`
          <div class="bis-section">
            <div class="bis-section-title">${o("components.economic.metroUnemployment")}</div>
            <div class="economic-indicators">
              ${t.map(s).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}renderStress(){const e=this.stressData;if(!e||e.unavailable||!Number.isFinite(e.compositeScore))return'<div class="economic-empty">Stress index data unavailable</div>';const t=vt(e.compositeScore),s=Math.min(100,Math.max(0,e.compositeScore)).toFixed(1),a=e.components.map(i=>gs(i)).join(""),l=e.seededAt?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-align:right;margin-top:8px">Updated ${new Date(e.seededAt).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</div>`:"";return`<div style="padding:12px 0">
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">Composite Score</div>
        <div style="font-size:calc(38px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${t};line-height:1">${e.compositeScore.toFixed(1)}</div>
        <div style="display:inline-block;margin-top:6px;padding:3px 10px;border-radius:12px;background:${t}22;border:1px solid ${t}66;font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${t}">${r(e.label)}</div>
      </div>
      <div style="margin-bottom:16px">
        <div style="position:relative;height:12px;border-radius:6px;overflow:visible;background:linear-gradient(to right,#27ae60 0%,#f1c40f 20%,#e67e22 40%,#e74c3c 60%,#8e44ad 80%,#8e44ad 100%);margin-bottom:4px">
          <div style="position:absolute;top:-4px;left:calc(${s}% - 2px);width:4px;height:20px;background:#fff;border-radius:2px;box-shadow:0 0 4px rgba(0,0,0,0.6)"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          <span>Low</span><span>Moderate</span><span>Elevated</span><span>Severe</span><span>Critical</span>
        </div>
      </div>
      ${a?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px">${a}</div>`:""}
      ${l}
    </div>`}}const Ya=Object.freeze(Object.defineProperty({__proto__:null,EconomicPanel:ys},Symbol.toStringTag,{value:"Module"}));class F extends Error{constructor(e,t){super(t);g(this,"retryable",!0);this.code=e,this.name="RetryableProcurementSearchError"}}const Re={query:"",buyer:"",country:"",source:"",sort:"closing_soon",pageSize:25,cursor:"",minAutomationScore:0},$s=30,ze="Search official global procurement opportunities using visible filters.",We=8,Ke=16,Ye=32,ws=1500,Ss=new RegExp(ut),ft=[["","All sources"],["sam","SAM.gov"],["ted","TED"],["contracts-finder","Contracts Finder"],["canada-buys","CanadaBuys"],["gets","GETS"],["world-bank","World Bank"],["colombia-secop","Colombia SECOP II"],["kenya-ppip","Kenya PPIP"],["south-africa-etenders","South Africa eTenders"],["chile-mercado-publico","Chile Mercado Público"],["brazil-pncp","Brazil PNCP"],["ukraine-prozorro","Ukraine Prozorro"],["bulgaria-eop","Bulgaria EOP"],["latvia-iub","Latvia IUB"],["poland-bzp","Poland BZP"],["pakistan-ppra","Pakistan PPRA"],["pakistan-epads","Pakistan EPADS"],["georgia-spa","Georgia SPA"],["armenia-armeps","Armenia ARMEPS"],["albania-app","Albania APP"],["dominican-republic-dgcp","Dominican Republic DGCP"],["malaysia-myprocurement","Malaysia MyProcurement"]],gt=[["closing_soon","Closing soon"],["newest","Newest"],["estimated_value","Estimated value"],["relevance","Technology relevance"]],Cs=new Set(ft.map(([n])=>n)),As=new Set(gt.map(([n])=>n));function Ze(n,p){return n===p?" selected":""}function Ts(n){if(!n)return null;const p=new Date(n);return Number.isFinite(p.getTime())?p:null}class Rs extends L{constructor(){super({id:"global-procurement",title:"Global Procurement",defaultRowSpan:2,showCount:!0,premium:"locked",infoTooltip:"Search active official procurement opportunities. Results are seed-backed and source health is reported explicitly."});g(this,"data",null);g(this,"filters",{...Re});g(this,"requestHandler",null);g(this,"principalResetHandler",null);g(this,"loading",!1);g(this,"pendingAgentInvocation",null);g(this,"settlingAgentForm",null);g(this,"nextAgentInvocationId",0);g(this,"agentToolActive",!1);g(this,"requestStarting",!1);g(this,"activeRequestController",null);g(this,"activeRequestPreviousFilters",null);g(this,"lifecycleEpoch",0);g(this,"contentRevision",0);g(this,"disposed",!1);this.showLoading("Loading procurement opportunities…");for(const e of["pointerdown","mousedown","click","beforeinput","keydown"])this.content.addEventListener(e,t=>this.guardPendingFormInteraction(t),{capture:!0});for(const e of["input","change"])this.content.addEventListener(e,t=>this.restorePendingFormValues(t),{capture:!0});this.content.addEventListener("submit",e=>{const t=e.target.closest("[data-procurement-filters]");if(!t)return;e.preventDefault();const s=e;if(s.agentInvoked!==!0){if(this.loading||this.pendingAgentInvocation!==null||this.settlingAgentForm!==null)return;const c=this.readFilters(t);if(!c.ok){t.reportValidity();return}const d={...this.filters};this.filters=c.filters,this.setAgentToolActive(!1),this.request({...this.filters,cursor:""},!1,d);return}if(typeof s.respondWith!="function")return;if(this.loading||this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.respondWithRetryableFailure(s,new F("request_in_progress","A procurement search is already in progress. Retry after the visible results finish updating."));return}if(!this.canDeclareTool()||t.getAttribute("toolname")!==X){this.respondWithRetryableFailure(s,new F("panel_unavailable","The procurement search form is not currently available. Retry after the panel is visible and its data is ready."));return}const a=this.readFilters(t);if(!a.ok){this.respondWithRetryableFailure(s,a.error);return}const l={...this.filters};this.filters=a.filters;const i=this.beginAgentInvocation(t,l);try{s.respondWith(i.promise)}catch{this.filters={...i.previousFilters},this.failAgentInvocation(i.id,new F("response_channel_unavailable","The procurement search response channel was unavailable. Retry the search."));return}this.setAgentToolActive(!0),this.request({...this.filters,cursor:""},!1,i.previousFilters)||(this.filters={...i.previousFilters},this.failAgentInvocation(i.id,new F("request_not_started","The procurement search could not start because the panel is not ready. Retry when the form is available.")))}),this.content.addEventListener("click",e=>{var s;const t=e.target;if(t.closest("[data-procurement-load-more]")){if(this.loading||this.pendingAgentInvocation!==null||this.settlingAgentForm!==null)return;const a=(s=this.data)==null?void 0:s.nextCursor;a&&this.request({...this.filters,cursor:a},!0);return}if(t.closest("[data-procurement-reset]")){if(this.pendingAgentInvocation!==null){this.cancelAgentOperation();return}if(this.loading||this.settlingAgentForm!==null)return;this.cancelAgentOperation();const a={...this.filters};this.filters={...Re},this.request({...this.filters},!1,a)}}),this.content.addEventListener("reset",e=>{e.target.closest("[data-procurement-filters]")&&this.cancelAgentOperation()}),typeof window<"u"&&(window.addEventListener("toolactivated",e=>{e.toolName!==X||!this.canDeclareTool()||this.setAgentToolActive(!0)},{signal:this.signal}),window.addEventListener("toolcancel",e=>{e.toolName===X&&this.cancelAgentOperation()},{signal:this.signal}),window.addEventListener("resize",()=>this.handlePanelVisibilityChange(),{signal:this.signal}))}setRequestHandler(e){if(this.requestHandler=e,this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.syncAgentFormVisualState();return}this.syncDeclarativeToolState()}setPrincipalResetHandler(e){this.principalResetHandler=e}setLoading(e,t=!1){const s=++this.contentRevision,a=e&&!this.requestStarting?this.pendingAgentInvocation:null;if(a){this.abortActiveRequest(),this.failAgentInvocation(a.id,new F("superseded","The procurement search was superseded by a newer refresh. Retry the search.")),this.loading=e,this.syncAgentFormVisualState(),this.deferAfterAgentSettlement(()=>{if(!(this.pendingAgentInvocation!==null||this.settlingAgentForm!==null||this.disposed||this.contentRevision!==s)){if(e&&!t&&!this.data){this.showLoading("Loading procurement opportunities…");return}this.render()}});return}if(this.loading=e,this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.syncAgentFormVisualState(),this.pendingAgentInvocation===null&&this.deferAfterAgentSettlement(()=>{if(!(this.settlingAgentForm!==null||this.disposed||this.contentRevision!==s)){if(e&&!t&&!this.data){this.showLoading("Loading procurement opportunities…");return}this.render()}});return}if(this.syncDeclarativeToolState(),e&&!t&&!this.data){this.showLoading("Loading procurement opportunities…");return}this.render()}update(e,t=!1){var l;if(this.disposed)return;const s=++this.contentRevision;if(this.activeRequestPreviousFilters=null,this.loading=!1,t&&this.data){const i=new Map(this.data.tenders.map(c=>[c.id,c]));e.tenders.forEach(c=>i.set(c.id,c)),this.data={...e,tenders:[...i.values()]}}else this.data=e;this.setCount(this.data.total);const a=(l=this.pendingAgentInvocation)==null?void 0:l.id;if(a!==void 0){if(!this.renderAgentTerminalResult()){this.failAgentInvocation(a,new F("response_target_unavailable","The procurement results view was replaced before the search completed. Retry on the current panel."));return}if(!e.dataAvailable){this.failAgentInvocation(a,new F("procurement_unavailable","Procurement sources are currently unavailable, so the search could not return a reliable result. Retry later."));return}this.resolveAgentInvocation(a,this.agentResult(e));return}if(this.settlingAgentForm!==null){this.deferAfterAgentSettlement(()=>{this.settlingAgentForm!==null||this.disposed||this.contentRevision!==s||this.render()});return}this.syncDeclarativeToolState(),this.render()}showUnavailable(){var s;if(this.disposed)return;const e=++this.contentRevision;this.activeRequestPreviousFilters=null,this.loading=!1,this.data=null,this.setCount(0);const t=(s=this.pendingAgentInvocation)==null?void 0:s.id;if(t!==void 0){this.renderAgentTerminalError("Procurement opportunities are currently unavailable."),this.failAgentInvocation(t,new F("procurement_unavailable","Procurement sources are currently unavailable, so the search did not complete. Retry later.")),this.deferAfterAgentSettlement(()=>{this.disposed||this.pendingAgentInvocation!==null||this.settlingAgentForm!==null||this.contentRevision!==e||this.showError("Procurement opportunities are currently unavailable.",()=>this.request({...this.filters},!1),60)});return}if(this.settlingAgentForm!==null){this.deferAfterAgentSettlement(()=>{this.settlingAgentForm!==null||this.disposed||this.contentRevision!==e||this.showError("Procurement opportunities are currently unavailable.",()=>this.request({...this.filters},!1),60)});return}this.showError("Procurement opportunities are currently unavailable.",()=>this.request({...this.filters},!1),60)}clear(){this.contentRevision+=1,this.abortActiveRequest();const e=this.pendingAgentInvocation,t=e!==null||this.settlingAgentForm!==null;if(e&&this.failAgentInvocation(e.id,new F("panel_unavailable","The procurement panel became unavailable before the search completed. Retry after access is restored.")),this.data=null,this.filters={...Re},this.loading=!1,this.setCount(0),t){const s=this.settlingAgentForm??(e==null?void 0:e.form);s&&this.syncRenderedFilters(s,!1),this.deferAfterAgentSettlement(()=>{this.settlingAgentForm!==null||this.disposed||this.data!==null||super.clearSensitiveContent()});return}super.clearSensitiveContent()}clearSensitiveContent(){var e;this.clear(),(e=this.principalResetHandler)==null||e.call(this)}showGatedCta(e,t){const s=++this.lifecycleEpoch,a=this.pendingAgentInvocation!==null||this.settlingAgentForm!==null;if(this.cancelForUnavailablePanel(),a){this.deferAfterAgentSettlement(()=>{!this.disposed&&this.lifecycleEpoch===s&&super.showGatedCta(e,t)});return}super.showGatedCta(e,t)}showLocked(e=[]){const t=++this.lifecycleEpoch,s=this.pendingAgentInvocation!==null||this.settlingAgentForm!==null;if(this.cancelForUnavailablePanel(),s){this.deferAfterAgentSettlement(()=>{!this.disposed&&this.lifecycleEpoch===t&&super.showLocked(e)});return}super.showLocked(e)}unlockPanel(){this.lifecycleEpoch+=1;const e=this.isLocked;super.unlockPanel(),e&&this.syncDeclarativeToolState()}hide(){const e=this.pendingAgentInvocation!==null||this.settlingAgentForm!==null;super.hide(),this.cancelForUnavailablePanel(),!e&&this.data&&!this.isLocked&&this.render()}show(){super.show(),this.syncDeclarativeToolState(),this.data&&!this.isLocked&&this.render()}notifyConnected(){super.notifyConnected(),this.syncDeclarativeToolState(),this.data&&!this.isLocked&&this.render()}destroy(){if(this.disposed)return;const e=this.pendingAgentInvocation!==null||this.settlingAgentForm!==null;if(this.lifecycleEpoch+=1,this.disposed=!0,this.cancelForUnavailablePanel(),e){this.deferAfterAgentSettlement(()=>{super.destroy()});return}super.destroy()}request(e,t,s=this.filters){var c;if(!this.requestHandler||this.loading||this.disposed||this.isLocked||!this.isPanelToolVisible())return!1;this.abortActiveRequest();const a=new AbortController;this.activeRequestController=a,this.activeRequestPreviousFilters={...s},this.filters={...e,cursor:""};const l=((c=this.pendingAgentInvocation)==null?void 0:c.id)??null;let i;this.requestStarting=!0;try{this.setLoading(!0,t),i=this.requestHandler(e,t,a.signal)}catch{return a.abort(),this.activeRequestController===a&&(this.activeRequestController=null),this.activeRequestPreviousFilters&&(this.filters={...this.activeRequestPreviousFilters}),this.activeRequestPreviousFilters=null,this.loading=!1,l===null?this.render():this.syncAgentFormVisualState(),!1}finally{this.requestStarting=!1}return Promise.resolve(i).then(()=>{const d=this.activeRequestController===a;d&&(this.activeRequestController=null),this.handleRequestHandlerSettled(l,a.signal),d&&(this.activeRequestPreviousFilters=null)},()=>{const d=this.activeRequestController===a;d&&(this.activeRequestController=null),!this.disposed&&!a.signal.aborted&&this.showUnavailable(),d&&(this.activeRequestPreviousFilters=null)}),!0}readFilters(e){const t=new FormData(e),s=String(t.get("query")??""),a=String(t.get("buyer")??""),l=String(t.get("country")??""),i=String(t.get("source")??""),c=String(t.get("sort")||"closing_soon");return s.length>ee||a.length>ee?{ok:!1,error:new F("invalid_arguments",`Procurement query and buyer filters must be at most ${ee} characters.`)}:l&&!Ss.test(l)?{ok:!1,error:new F("invalid_arguments","The procurement country filter must be exactly two ASCII letters.")}:!Cs.has(i)||!As.has(c)?{ok:!1,error:new F("invalid_arguments","The procurement source or sort filter is not available.")}:{ok:!0,filters:{query:s.trim(),buyer:a.trim(),country:l.toUpperCase(),source:i,sort:c,pageSize:25,cursor:"",minAutomationScore:t.get("techRelevant")?$s:0}}}render(){if(this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.syncAgentFormVisualState();return}const e=this.renderControls();this.setTrustedContent(_(`
      ${e}
      <div data-procurement-results>${this.renderResultsMarkup()}</div>
    `,"escaped global procurement controls and results"))}renderResultsMarkup(){const e=this.data;if(!e)return'<div class="economic-empty">No procurement snapshot is available yet.</div>';const t=e.sourceStatuses.map(c=>{const d=c.lastSuccessfulAt?` · last success ${new Date(c.lastSuccessfulAt).toLocaleString()}`:"";return`${c.source}: ${c.state} (${c.recordCount})${d}`}).join(" · "),s=e.availability==="partial"?'<div class="economic-warning">Partial coverage — healthy sources remain visible while one or more sources are unavailable.</div>':e.availability==="stale"?'<div class="economic-warning">Showing stale last-good opportunities while all source refreshes are failing.</div>':e.availability==="empty"?'<div class="economic-empty">Official sources returned no matching open opportunities.</div>':e.dataAvailable?"":'<div class="economic-warning">The canonical procurement snapshot is unavailable.</div>',a=e.tenders.map(c=>this.renderTenderCard(c)).join(""),l=e.tenders.length,i=e.nextCursor?`<button type="button" class="debt-load-more" data-procurement-load-more${this.loading?" disabled":""}>${this.loading?"Loading…":"Load more"} <span class="debt-load-more-count">(${Math.max(0,e.total-l)} remaining)</span></button>`:"";return`
      ${s}
      <div class="global-procurement-summary">Showing ${l.toLocaleString()} of ${e.total.toLocaleString()} matching opportunities</div>
      ${a?`<div class="spending-list global-procurement-list">${a}</div>`:""}
      ${i}
      <div class="economic-footer"><span class="economic-source">${r(t)}${e.fetchedAt?` · snapshot ${r(new Date(e.fetchedAt).toLocaleString())}`:""}</span></div>
    `}renderControls(){const t=this.canDeclareTool()?` toolname="${X}" tooldescription="${ze}" toolautosubmit`:"";return`<form class="global-procurement-controls${this.agentToolActive||this.pendingAgentInvocation?" webmcp-tool-active":""}" data-procurement-filters aria-busy="${this.loading}"${t}>
      <input class="global-procurement-input" name="query" data-procurement-query type="search" maxlength="${ee}" value="${r(String(this.filters.query||""))}" placeholder="Search title or description" aria-label="Search procurement opportunities" toolparamdescription="Words to match in opportunity titles or descriptions.">
      <input class="global-procurement-input" name="buyer" type="search" maxlength="${ee}" value="${r(String(this.filters.buyer||""))}" placeholder="Buyer" aria-label="Filter by buyer" toolparamdescription="Buyer or contracting authority name to match.">
      <input class="global-procurement-input global-procurement-country" name="country" data-procurement-country type="text" minlength="${Ge}" maxlength="${Ge}" pattern="${ut}" value="${r(String(this.filters.country||""))}" placeholder="Country" aria-label="Filter by ISO country code" toolparamdescription="Optional two-letter ISO 3166-1 alpha-2 country code; normalized to uppercase.">
      <select class="global-procurement-select" name="source" data-procurement-source aria-label="Filter by source" toolparamdescription="Official procurement source to search; select All sources to search every source.">
        ${ft.map(([a,l])=>`<option value="${a}"${Ze(this.filters.source,a)}>${l}</option>`).join("")}
      </select>
      <select class="global-procurement-select" name="sort" data-procurement-sort aria-label="Sort opportunities" toolparamdescription="Ordering for matching procurement opportunities.">
        ${gt.map(([a,l])=>`<option value="${a}"${Ze(this.filters.sort,a)}>${l}</option>`).join("")}
      </select>
      <label class="global-procurement-toggle" title="Shows only opportunities whose title, description, or categories matched technology keywords. Keyword relevance evidence only — not an indication of bidding eligibility.">
        <input type="checkbox" name="techRelevant" data-procurement-tech-relevant toolparamdescription="Whether to show only opportunities with technology-relevance keyword evidence."${(this.filters.minAutomationScore||0)>0?" checked":""}${this.loading?" disabled":""}>
        Technology relevant only
      </label>
      <button type="submit" class="global-procurement-apply"${this.loading?" disabled":""}>Apply</button>
      <button type="button" class="global-procurement-reset" data-procurement-reset aria-label="Reset filters or cancel the active search" title="Reset filters or cancel the active search"${this.loading?" disabled":""}>Reset</button>
    </form>`}canDeclareTool(){var e;return!this.disposed&&!this.isLocked&&this.element.isConnected&&this.isPanelToolVisible()&&this.requestHandler!==null&&((e=this.data)==null?void 0:e.dataAvailable)===!0&&!this.loading&&this.settlingAgentForm===null}isPanelToolVisible(){return this.element.classList.contains("hidden")?!1:!(typeof window<"u"&&Gt()&&this.element.classList.contains("mobile-cat-hidden"))}respondWithRetryableFailure(e,t){var s;try{(s=e.respondWith)==null||s.call(e,Promise.resolve(this.failureResult(t)))}catch{}}beginAgentInvocation(e,t){var d;const s=(d=this.pendingAgentInvocation)==null?void 0:d.id;s!==void 0&&this.failAgentInvocation(s,new F("superseded","The procurement search was superseded by a newer agent request. Retry the earlier search if it is still needed."));const a=++this.nextAgentInvocationId;let l;const i=new Promise(f=>{l=f}),c={id:a,form:e,previousFilters:t,promise:i,resolve:l};return this.pendingAgentInvocation=c,c}resolveAgentInvocation(e,t){const s=this.pendingAgentInvocation;!s||s.id!==e||(this.pendingAgentInvocation=null,this.settlingAgentForm=s.form,this.setAgentToolActive(!1),s.resolve(t),this.syncDeclarativeToolStateAfterSettlement(s.form))}failAgentInvocation(e,t){this.resolveAgentInvocation(e,this.failureResult(t))}failureResult(e){return{ok:!1,code:String(e.code||"request_failed").slice(0,64),message:String(e.message||"The procurement search failed. Retry later.").slice(0,320),retryable:!0}}handleRequestHandlerSettled(e,t){var a;if(t.aborted||e===null||((a=this.pendingAgentInvocation)==null?void 0:a.id)!==e||!this.loading)return;const s=++this.contentRevision;this.loading=!1,this.failAgentInvocation(e,new F("request_did_not_settle","The procurement search ended without a terminal result. Retry the search.")),this.deferAfterAgentSettlement(()=>{this.pendingAgentInvocation===null&&this.settlingAgentForm===null&&this.data&&!this.isLocked&&!this.disposed&&this.contentRevision===s&&this.render()})}agentResult(e){const t=e.countryCoverage==="observed"||e.countryCoverage==="not_requested"?e.countryCoverage:"unknown",s=Array.isArray(e.appliedFilters)?e.appliedFilters:[],a={ok:!0,matchCount:Math.max(0,Number.isSafeInteger(e.total)?e.total:0),availability:String(e.availability||"available").slice(0,32),countryCoverage:t,appliedFilters:s.slice(0,Ke).map(l=>String(l).slice(0,Ye)),appliedFiltersTruncated:s.length>Ke||s.some(l=>String(l).length>Ye),sourceStatusSummary:e.sourceStatuses.slice(0,We).map(l=>({source:String(l.source||"unknown").slice(0,48),state:String(l.state||"unknown").slice(0,32),recordCount:Math.max(0,Number.isSafeInteger(l.recordCount)?l.recordCount:0)})),sourceStatusesTruncated:e.sourceStatuses.length>We};for(;JSON.stringify(a).length>ws;){const l=a.sourceStatusSummary[a.sourceStatusSummary.length-1],i=a.appliedFilters[a.appliedFilters.length-1];if(l&&(!i||JSON.stringify(l).length>=JSON.stringify(i).length)){a.sourceStatusSummary.pop(),a.sourceStatusesTruncated=!0;continue}if(i){a.appliedFilters.pop(),a.appliedFiltersTruncated=!0;continue}break}return a}setAgentToolActive(e){this.agentToolActive=e,this.syncAgentFormVisualState()}syncAgentFormVisualState(){const e=this.pendingAgentInvocation,t=(e==null?void 0:e.form)??this.content.querySelector("[data-procurement-filters]");if(!t)return;const s=e!==null;t.classList.toggle("webmcp-tool-active",this.agentToolActive||s),t.classList.toggle("webmcp-request-pending",s),t.setAttribute("aria-busy",String(this.loading));for(const a of t.querySelectorAll("input, select, button"))s&&!a.matches("[data-procurement-reset]")?a.setAttribute("aria-disabled","true"):a.removeAttribute("aria-disabled")}syncDeclarativeToolStateAfterSettlement(e){this.deferAfterAgentSettlement(()=>{if(this.settlingAgentForm===e&&(this.settlingAgentForm=null),this.pendingAgentInvocation!==null)return;const t=this.content.querySelector("[data-procurement-filters]");t&&this.syncRenderedFilters(t,!0),this.syncDeclarativeToolState()})}renderAgentTerminalResult(){var s;const e=(s=this.pendingAgentInvocation)==null?void 0:s.form,t=this.content.querySelector("[data-procurement-results]");return!e||!t||!e.isConnected||!t.isConnected||!this.content.contains(e)?!1:(this.syncRenderedFilters(e,!1),e.setAttribute("aria-busy","false"),B(t,_(this.renderResultsMarkup(),"escaped global procurement terminal results")),!0)}renderAgentTerminalError(e){var a;const t=this.content.querySelector("[data-procurement-results]"),s=(a=this.pendingAgentInvocation)==null?void 0:a.form;s==null||s.setAttribute("aria-busy","false"),t&&B(t,_(`<div class="economic-warning">${r(e)}</div>`,"escaped global procurement terminal error"))}syncRenderedFilters(e,t){const s=e.elements.namedItem("query"),a=e.elements.namedItem("buyer"),l=e.elements.namedItem("country"),i=e.elements.namedItem("source"),c=e.elements.namedItem("sort"),d=e.elements.namedItem("techRelevant");if(s&&(s.value=String(this.filters.query||""),t&&(s.defaultValue=s.value)),a&&(a.value=String(this.filters.buyer||""),t&&(a.defaultValue=a.value)),l&&(l.value=String(this.filters.country||""),t&&(l.defaultValue=l.value)),i&&(i.value=String(this.filters.source||""),t))for(const f of i.options)f.defaultSelected=f.selected;if(c&&(c.value=String(this.filters.sort||"closing_soon"),t))for(const f of c.options)f.defaultSelected=f.selected;d&&(d.checked=(this.filters.minAutomationScore||0)>0,t&&(d.defaultChecked=d.checked))}guardPendingFormInteraction(e){const t=this.pendingAgentInvocation,s=e.target instanceof Element?e.target:null;!t||!s||!t.form.contains(s)||e instanceof KeyboardEvent&&e.key==="Tab"||s.closest("[data-procurement-reset]")||(e.preventDefault(),e.stopImmediatePropagation())}restorePendingFormValues(e){const t=this.pendingAgentInvocation,s=e.target instanceof Element?e.target:null;!t||!s||!t.form.contains(s)||(e.stopImmediatePropagation(),this.syncRenderedFilters(t.form,!1))}syncDeclarativeToolState(){if(this.pendingAgentInvocation!==null||this.settlingAgentForm!==null){this.syncAgentFormVisualState();return}const e=this.content.querySelector("[data-procurement-filters]");e&&(this.canDeclareTool()?(e.setAttribute("toolname",X),e.setAttribute("tooldescription",ze),e.setAttribute("toolautosubmit","")):(e.removeAttribute("toolname"),e.removeAttribute("tooldescription"),e.removeAttribute("toolautosubmit")),this.syncAgentFormVisualState())}removeDeclarativeToolAttributes(){if(this.settlingAgentForm!==null)return;const e=this.content.querySelector("[data-procurement-filters]");if(e){e.removeAttribute("toolname"),e.removeAttribute("tooldescription"),e.removeAttribute("toolautosubmit"),e.classList.remove("webmcp-tool-active","webmcp-request-pending"),e.setAttribute("aria-busy",String(this.loading));for(const t of e.querySelectorAll("input, select, button"))t.removeAttribute("aria-disabled")}}handlePanelVisibilityChange(){if(!this.disposed){if(!this.isPanelToolVisible()){this.pendingAgentInvocation!==null?this.cancelForUnavailablePanel():this.removeDeclarativeToolAttributes();return}this.syncDeclarativeToolState()}}deferAfterAgentSettlement(e){setTimeout(e,0)}abortActiveRequest(e=!1){const t=this.activeRequestController;this.activeRequestController=null;const s=this.activeRequestPreviousFilters;this.activeRequestPreviousFilters=null;const a=e&&s!==null;return a&&(this.filters={...s}),t==null||t.abort(),a}cancelForUnavailablePanel(){const e=this.loading,t=this.pendingAgentInvocation,s=this.abortActiveRequest(!0);if(this.loading=!1,(e||s||t!==null)&&(this.contentRevision+=1),t){this.filters={...t.previousFilters},this.failAgentInvocation(t.id,new F("panel_unavailable","The procurement panel became unavailable before the search completed. Retry after it is restored.")),this.agentToolActive=!1;return}this.agentToolActive=!1,s&&this.settlingAgentForm===null&&!this.disposed&&this.render(),this.removeDeclarativeToolAttributes()}cancelAgentOperation(){const e=this.pendingAgentInvocation;if(this.setAgentToolActive(!1),!e)return;const t=++this.contentRevision;this.abortActiveRequest(),this.loading=!1,this.filters={...e.previousFilters},this.syncRenderedFilters(e.form,!1),this.failAgentInvocation(e.id,new F("canceled","The procurement search was canceled before it completed. Retry if results are still needed.")),this.deferAfterAgentSettlement(()=>{this.pendingAgentInvocation===null&&this.settlingAgentForm===null&&this.data&&!this.isLocked&&!this.disposed&&this.contentRevision===t&&this.render()})}renderTenderCard(e){var f,m,v;const t=dt(e.officialUrl),s=Ts(e.deadline),a=s?Math.ceil((s.getTime()-Date.now())/864e5):null,l=a!==null&&a>=0&&a<=3,i=(f=e.money)!=null&&f.amount&&e.money.amount>0?`${e.money.currency||""} ${e.money.amount.toLocaleString()}`.trim():"",c=[e.source,e.buyer,e.countryCode,i,s?`Closes ${s.toLocaleDateString()}`:"",l?"CLOSING SOON":""].filter(u=>!!u).map(u=>r(u)).join(" · "),d=(v=(m=e.automationFit)==null?void 0:m.matchReasons)!=null&&v.length?`<div class="award-agency">Technology relevance (keyword evidence, not bidding eligibility): ${r(e.automationFit.matchReasons.join(", "))}</div>`:"";return`<article class="spending-award global-procurement-card">
      <div class="award-header"><span class="award-amount">${r(e.status.toUpperCase())}</span><span class="award-icon">${l?"⏰":"📄"}</span></div>
      <div class="award-recipient">${r(e.title)}</div>
      <div class="award-agency">${c}</div>
      ${e.description?`<div class="award-desc">${r(e.description.slice(0,240))}${e.description.length>240?"…":""}</div>`:""}
      ${d}
      ${t?`<a href="${t}" target="_blank" rel="noopener noreferrer nofollow" class="award-agency">Official notice ↗</a>`:""}
    </article>`}}const Za=Object.freeze(Object.defineProperty({__proto__:null,GlobalProcurementPanel:Rs},Symbol.toStringTag,{value:"Module"})),bt="wm-consumer-prices-v1",xs="wm-consumer-prices-settings-changed",Je="wm-consumer-prices-open-tab",Ps=["overview","categories","movers","spread","health","world"],Qe={market:Zt,basket:pt,range:"30d",tab:"overview",categoryFilter:null};function ks(){try{const n=localStorage.getItem(bt);if(n)return{...Qe,...JSON.parse(n)}}catch{}return{...Qe}}function J(n){try{localStorage.setItem(bt,JSON.stringify(n)),window.dispatchEvent(new CustomEvent(xs,{detail:n}))}catch{}}function z(n,p=!1){if(n==null||n===0)return'<span class="cp-badge cp-badge--neutral">—</span>';const e=p?n>0?"cp-badge--red":"cp-badge--green":n>0?"cp-badge--green":"cp-badge--red",t=n>0?"+":"";return`<span class="cp-badge ${e}">${t}${n.toFixed(1)}%</span>`}function Es(n){return Math.abs(n)<.5?'<span class="cp-pressure cp-pressure--steady">Stable</span>':n>=2?'<span class="cp-pressure cp-pressure--stress">Rising</span>':n>.5?'<span class="cp-pressure cp-pressure--watch">Mild Rise</span>':'<span class="cp-pressure cp-pressure--green">Easing</span>'}function te(n){return n==null||n===0?"Unknown":n<60?`${n}m ago`:n<1440?`${Math.round(n/60)}h ago`:`${Math.round(n/1440)}d ago`}function se(n){return n==null?"cp-fresh--unknown":n<=60?"cp-fresh--ok":n<=240?"cp-fresh--warn":"cp-fresh--stale"}function Is(n){return n==null?"cp-infl--unknown":n>=10?"cp-infl--high":n>=5?"cp-infl--warn":n<0?"cp-infl--deflation":"cp-infl--ok"}function Xe(n){return n==null?"—":`${n>=0?"+":""}${n.toFixed(1)}%`}class Ds extends L{constructor(){super({id:"consumer-prices",title:o("panels.consumerPrices"),defaultRowSpan:2,infoTooltip:o("components.consumerPrices.infoTooltip")});g(this,"overview",null);g(this,"categories",null);g(this,"movers",null);g(this,"spread",null);g(this,"freshness",null);g(this,"allMarkets",[]);g(this,"globalInflation",null);g(this,"inflationLoading",!1);g(this,"inflationFilter","");g(this,"settings",ks());g(this,"fetchGeneration",0);g(this,"activeRequestKey",null);g(this,"openTabHandler",e=>{var s;const t=(s=e.detail)==null?void 0:s.tab;!t||!Ps.includes(t)||(this.settings.tab=t,J(this.settings),this.render(),t==="world"&&this.globalInflation===null&&this.loadGlobalInflation())});this.content.addEventListener("click",e=>this.handleClick(e)),this.content.addEventListener("input",e=>this.handleInput(e)),typeof window<"u"&&window.addEventListener(Je,this.openTabHandler)}destroy(){var e;this.fetchGeneration++,this.activeRequestKey=null,typeof window<"u"&&window.removeEventListener(Je,this.openTabHandler),(e=super.destroy)==null||e.call(this)}handleClick(e){const t=e.target,s=t.closest("[data-market]");if(s!=null&&s.dataset.market){const d=s.dataset.market;this.settings.market=d,this.settings.basket=d==="all"?pt:`essentials-${d}`,this.settings.tab="overview",J(this.settings),this.fetchData();return}const a=t.closest(".panel-tab");if(a!=null&&a.dataset.tab){this.settings.tab=a.dataset.tab,J(this.settings),this.render();return}const l=t.closest("[data-category]");if(l!=null&&l.dataset.category){this.settings.categoryFilter=l.dataset.category,this.settings.tab="movers",J(this.settings),this.render();return}const i=t.closest("[data-range]");if(i!=null&&i.dataset.range){this.settings.range=i.dataset.range,J(this.settings),this.fetchData();return}t.closest("[data-clear-filter]")&&(this.settings.categoryFilter=null,J(this.settings),this.render())}handleInput(e){const t=e.target;if(!(t instanceof HTMLInputElement)||t.dataset.inflationFilter===void 0||(this.inflationFilter=t.value,this.globalInflation===null||this.globalInflation.length===0))return;const s=this.visibleInflationRows(),a=this.content.querySelector(".cp-world-table tbody");a&&B(a,_(this.inflationTbodyHtml(s),"escaped IMF inflation rows"));const l=this.content.querySelector(".cp-world-count");l&&(l.textContent=this.inflationCountText(s))}async loadGlobalInflation(){var e;if(!this.inflationLoading){this.inflationLoading=!0;try{const t=await Mt();if(!((e=this.element)!=null&&e.isConnected))return;this.globalInflation=t,this.settings.tab==="world"&&this.render()}finally{this.inflationLoading=!1}}}async fetchData(){const e={market:this.settings.market,basket:this.settings.basket,range:this.settings.range},t=JSON.stringify([e.market,e.basket,e.range]);if(this.activeRequestKey===t)return;const s=++this.fetchGeneration;this.activeRequestKey=t,this.showLoading();const a=()=>{var l;return s===this.fetchGeneration&&((l=this.element)==null?void 0:l.isConnected)===!0&&this.settings.market===e.market&&this.settings.basket===e.basket&&this.settings.range===e.range};try{if(e.market==="all"){const m=await Ht();if(!a())return;this.allMarkets=m,this.render();return}const[l,i,c,d,f]=await Promise.all([jt(e.market,e.basket),qt(e.market,e.basket,e.range),Vt(e.market,e.range),zt(e.market,e.basket),Wt(e.market)]);if(!a())return;if(this.overview=l,this.categories=i,this.movers=c,this.spread=d,this.freshness=f,[l,i,c,d,f].some(m=>m.upstreamUnavailable)){this.showError(void 0,()=>{this.fetchData()});return}this.render()}catch(l){if(!a())return;console.error("[ConsumerPrices] fetch failed:",l),this.showError(void 0,()=>{this.fetchData()})}finally{s===this.fetchGeneration&&(this.activeRequestKey=null)}}render(){var b;const e=[{id:"overview",label:o("components.consumerPrices.tabs.overview")},{id:"categories",label:o("components.consumerPrices.tabs.categories")},{id:"movers",label:o("components.consumerPrices.tabs.movers")},{id:"spread",label:o("components.consumerPrices.tabs.spread")},{id:"health",label:o("components.consumerPrices.tabs.health")},{id:"world",label:o("components.consumerPrices.tabs.world")}],s=this.settings.market==="all"||this.settings.tab==="world"?e.filter(h=>h.id==="overview"||h.id==="world"):e;s.some(h=>h.id===this.settings.tab)||(this.settings.tab="overview");const{tab:a,range:l,categoryFilter:i,market:c}=this.settings,d=`
      <div class="panel-tabs">
        ${s.map(h=>`
          <button class="panel-tab${a===h.id?" active":""}" data-tab="${h.id}">
            ${r(h.label)}
          </button>
        `).join("")}
      </div>
    `,f=`
      <div class="cp-market-bar">
        ${Kt.map(h=>`
          <button class="cp-market-btn${c===h.code?" active":""}" data-market="${h.code}">${h.label}</button>
        `).join("")}
      </div>
    `,m=`
      <div class="cp-range-bar">
        ${["7d","30d","90d"].map(h=>`
          <button class="cp-range-btn${l===h?" active":""}" data-range="${h}">${h}</button>
        `).join("")}
      </div>
    `;if(a==="world"){this.setSafeContent(D(`
        <div class="consumer-prices-panel">
          ${d}
          <div class="cp-body">${this.renderWorldInflation()}</div>
        </div>
      `,"legacy Panel.setContent() migration"));return}if(c==="all"){this.setSafeContent(D(`
        <div class="consumer-prices-panel">
          ${f}
          ${d}
          <div class="cp-body">${this.renderGlobalOverview()}</div>
        </div>
      `,"legacy Panel.setContent() migration"));return}if((b=this.overview)==null?void 0:b.upstreamUnavailable){this.setSafeContent(D(`
        <div class="consumer-prices-panel">
          ${f}
          ${d}
          <div class="cp-body cp-seeding-state">
            <div class="cp-seeding-icon">📊</div>
            <div class="cp-seeding-title">Data collection in progress</div>
            <div class="cp-seeding-sub">Retail prices are being aggregated — check back in a few hours.</div>
          </div>
        </div>
      `,"legacy Panel.setContent() migration"));return}let u="";switch(a){case"overview":u=this.renderOverview();break;case"categories":u=m+this.renderCategories();break;case"movers":u=m+(i?`<div class="cp-filter-bar">Filtered: <strong>${r(i)}</strong> <button data-clear-filter aria-label="Clear category filter">✕</button></div>`:"")+this.renderMovers();break;case"spread":u=this.renderSpread();break;case"health":u=this.renderHealth();break}this.setSafeContent(D(`
      <div class="consumer-prices-panel">
        ${f}
        ${d}
        <div class="cp-body">${u}</div>
      </div>
    `,"legacy Panel.setContent() migration"))}renderGlobalOverview(){if(this.allMarkets.length===0)return'<div class="cp-empty-state">Loading global data…</div>';const e=Yt.map(t=>{const s=this.allMarkets.find(c=>c.marketCode===t.code);if(!(s&&s.asOf&&s.asOf!=="0"&&!s.upstreamUnavailable))return`
          <tr class="cp-global-row" data-market="${t.code}">
            <td class="cp-global-flag">${t.label}</td>
            <td colspan="4" class="cp-global-pending">Pending data</td>
          </tr>`;const l=z(s.wowPct,!0),i=se(s.freshnessLagMin>0?s.freshnessLagMin:null);return`
        <tr class="cp-global-row" data-market="${t.code}">
          <td class="cp-global-flag">${t.label}</td>
          <td class="cp-global-index">${s.essentialsIndex>0?s.essentialsIndex.toFixed(1):"—"}</td>
          <td class="cp-global-wow">${l}</td>
          <td class="cp-global-spread">${s.retailerSpreadPct>0?`${s.retailerSpreadPct.toFixed(1)}%`:"—"}</td>
          <td class="cp-global-fresh ${i}">${s.freshnessLagMin>0?te(s.freshnessLagMin):"—"}</td>
        </tr>`}).join("");return`
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
      <table class="wm-table cp-global-table">
        <thead>
          <tr>
            <th scope="col">Market</th><th scope="col">Index</th><th scope="col">WoW</th><th scope="col">Spread</th><th scope="col">Updated</th>
          </tr>
        </thead>
        <tbody>${e}</tbody>
      </table>
      </div>
      <div class="cp-global-hint">Tap a market row to drill in</div>
    `}visibleInflationRows(){const e=this.globalInflation??[],t=this.inflationFilter.trim().toLowerCase();return t?e.filter(s=>s.name.toLowerCase().includes(t)||s.iso2.toLowerCase().includes(t)):e}inflationCountText(e){const t=e.length===1?o("components.consumerPrices.world.countSingular"):o("components.consumerPrices.world.countPlural");return`${e.length} ${t}`}inflationTbodyHtml(e){return e.length===0?`<tr><td colspan="4" class="cp-global-pending">${r(o("components.consumerPrices.world.noMatches"))}</td></tr>`:e.map(t=>{const s=Is(t.inflationPct);return`
        <tr class="cp-global-row">
          <td class="cp-global-flag">${r(t.name)}</td>
          <td class="cp-infl-yoy ${s}">${Xe(t.inflationPct)}</td>
          <td class="cp-infl-eop">${Xe(t.cpiEopPct)}</td>
          <td class="cp-infl-year">${t.year??"—"}</td>
        </tr>`}).join("")}renderWorldInflation(){if(this.globalInflation===null)return this.inflationLoading||this.loadGlobalInflation(),`<div class="cp-empty-state">${r(o("components.consumerPrices.world.loading"))}</div>`;if(this.globalInflation.length===0)return this.renderEmptyState(o("components.consumerPrices.world.empty"));const e=this.visibleInflationRows();return`
      <div class="cp-world-controls">
        <input type="search" class="cp-world-filter" data-inflation-filter
          placeholder="${r(o("components.consumerPrices.world.filterPlaceholder"))}"
          value="${r(this.inflationFilter)}" />
        <span class="cp-world-count">${r(this.inflationCountText(e))}</span>
      </div>
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
      <table class="wm-table cp-global-table cp-world-table">
        <thead>
          <tr>
            <th scope="col">${r(o("components.consumerPrices.world.country"))}</th>
            <th scope="col">${r(o("components.consumerPrices.world.inflationYoY"))}</th>
            <th scope="col">${r(o("components.consumerPrices.world.endOfPeriod"))}</th>
            <th scope="col">${r(o("components.consumerPrices.world.year"))}</th>
          </tr>
        </thead>
        <tbody>${this.inflationTbodyHtml(e)}</tbody>
      </table>
      </div>
      <div class="cp-global-hint">${r(o("components.consumerPrices.world.source"))}</div>
    `}renderOverview(){var t;const e=this.overview;return!e||!e.asOf||e.asOf==="0"?this.renderEmptyState("No price data available yet"):`
      <div class="cp-overview-grid">
        <div class="cp-stat-card">
          <div class="cp-stat-label">Essentials Basket</div>
          <div class="cp-stat-value">${e.essentialsIndex>0?e.essentialsIndex.toFixed(1):"—"}</div>
          <div class="cp-stat-sub">Index (base 100)</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Value Basket</div>
          <div class="cp-stat-value">${e.valueBasketIndex>0?e.valueBasketIndex.toFixed(1):"—"}</div>
          <div class="cp-stat-sub">Index (base 100)</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Week-over-Week</div>
          <div class="cp-stat-value">${z(e.wowPct,!0)}</div>
          <div class="cp-stat-sub">${Es(e.wowPct)}</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Month-over-Month</div>
          <div class="cp-stat-value">${z(e.momPct,!0)}</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Retailer Spread</div>
          <div class="cp-stat-value">${e.retailerSpreadPct>0?`${e.retailerSpreadPct.toFixed(1)}%`:"—"}</div>
          <div class="cp-stat-sub">Cheapest vs most exp.</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Coverage</div>
          <div class="cp-stat-value">${e.coveragePct>0?`${e.coveragePct.toFixed(0)}%`:"—"}</div>
          <div class="cp-stat-sub ${se(e.freshnessLagMin)}">
            ${te(e.freshnessLagMin)}
          </div>
        </div>
      </div>
      ${(t=e.topCategories)!=null&&t.length?`
        <div class="cp-section-label">Top Category Movers</div>
        <div class="cp-category-mini">
          ${e.topCategories.slice(0,5).map(s=>this.renderCategoryMini(s)).join("")}
        </div>
      `:""}
    `}renderCategoryMini(e){var s;const t=(s=e.sparkline)!=null&&s.length?ve(e.sparkline,"var(--accent)",40,16):"";return`
      <div class="cp-cat-mini-row" data-category="${r(e.slug)}">
        <span class="cp-cat-name">${r(e.name)}</span>
        <span class="cp-cat-spark">${t}</span>
        ${z(e.momPct,!0)}
      </div>
    `}renderCategories(){var t;const e=(t=this.categories)==null?void 0:t.categories;return e!=null&&e.length?`
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
      <table class="wm-table cp-table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">WoW</th>
            <th scope="col">Month-over-month change</th>
            <th scope="col">Trend</th>
            <th scope="col">Coverage</th>
          </tr>
        </thead>
        <tbody>
          ${e.map(s=>{var a;return`
            <tr class="cp-cat-row" data-category="${r(s.slug)}">
              <td><strong>${r(s.name)}</strong></td>
              <td>${z(s.wowPct,!0)}</td>
              <td>${z(s.momPct,!0)}</td>
              <td>${(a=s.sparkline)!=null&&a.length?ve(s.sparkline,"var(--accent)",48,18,"",{label:`${s.name} price trend`}):"—"}</td>
              <td>${s.coveragePct>0?`${s.coveragePct.toFixed(0)}%`:"—"}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
      </div>
    `:this.renderEmptyState("No category data yet")}renderMovers(){const e=this.movers;if(!e)return this.renderEmptyState("No price movement data yet");const{categoryFilter:t}=this.settings,s=i=>!t||i.category===t,a=(e.risers??[]).filter(s).slice(0,8),l=(e.fallers??[]).filter(s).slice(0,8);return!a.length&&!l.length?this.renderEmptyState("No movers for this selection"):`
      <div class="cp-movers-grid">
        <div class="cp-movers-col">
          <div class="cp-col-header cp-col-header--up">Rising</div>
          ${a.map(i=>this.renderMoverRow(i,"up")).join("")||'<div class="cp-empty-col">None</div>'}
        </div>
        <div class="cp-movers-col">
          <div class="cp-col-header cp-col-header--down">Falling</div>
          ${l.map(i=>this.renderMoverRow(i,"down")).join("")||'<div class="cp-empty-col">None</div>'}
        </div>
      </div>
    `}renderMoverRow(e,t){const s=e.changePct>0?"+":"";return`
      <div class="cp-mover-row cp-mover-row--${t}">
        <div class="cp-mover-title">${r(e.title)}</div>
        <div class="cp-mover-meta">
          <span class="cp-mover-cat">${r(e.category)}</span>
          <span class="cp-mover-retailer">${r(e.retailerSlug)}</span>
        </div>
        <div class="cp-mover-pct">${s}${e.changePct.toFixed(1)}%</div>
      </div>
    `}renderSpread(){var t;const e=this.spread;return(t=e==null?void 0:e.retailers)!=null&&t.length?`
      <div class="cp-spread-header">
        <span>Spread: <strong>${e.spreadPct.toFixed(1)}%</strong></span>
        <span class="cp-spread-basket">${r(e.basketSlug)} · ${r(e.currencyCode)}</span>
      </div>
      <div class="cp-spread-list">
        ${e.retailers.map((s,a)=>this.renderSpreadRow(s,a,e.currencyCode)).join("")}
      </div>
    `:this.renderEmptyState("Retailer comparison starts once data is collected")}renderSpreadRow(e,t,s){const a=t===0;return`
      <div class="cp-spread-row ${a?"cp-spread-row--cheapest":""}">
        <div class="cp-spread-rank">#${t+1}</div>
        <div class="cp-spread-name">${r(e.name)}</div>
        <div class="cp-spread-total">${s} ${e.basketTotal.toFixed(2)}</div>
        <div class="cp-spread-delta">${a?'<span class="cp-badge cp-badge--green">Cheapest</span>':z(e.deltaVsCheapestPct,!0)}</div>
        <div class="cp-spread-items">${e.itemCount} items</div>
        <div class="cp-spread-fresh ${se(e.freshnessMin)}">${te(e.freshnessMin)}</div>
      </div>
    `}renderHealth(){var t;const e=this.freshness;return(t=e==null?void 0:e.retailers)!=null&&t.length?`
      <div class="cp-health-summary">
        <span>Overall freshness: <strong class="${se(e.overallFreshnessMin)}">${te(e.overallFreshnessMin)}</strong></span>
        ${e.stalledCount>0?`<span class="cp-stalled-badge">${e.stalledCount} stalled</span>`:""}
      </div>
      <div class="cp-health-list">
        ${e.retailers.map(s=>`
          <div class="cp-health-row">
            <span class="cp-health-name">${r(s.name)}</span>
            <span class="cp-health-status cp-health-status--${s.status}">${s.status}</span>
            <span class="cp-health-rate">${s.parseSuccessRate>0?`${s.parseSuccessRate.toFixed(0)}% parse`:"—"}</span>
            <span class="cp-health-fresh ${se(s.freshnessMin)}">${te(s.freshnessMin)}</span>
          </div>
        `).join("")}
      </div>
    `:this.renderEmptyState("Health data not yet available")}renderEmptyState(e){return`<div class="cp-empty-state">${r(e)}</div>`}}const Ja=Object.freeze(Object.defineProperty({__proto__:null,ConsumerPricesPanel:Ds},Symbol.toStringTag,{value:"Module"}));class Fs extends L{constructor(){super({id:"trade-policy",title:o("panels.tradePolicy"),defaultRowSpan:2,infoTooltip:o("components.tradePolicy.infoTooltip")});g(this,"restrictionsData",null);g(this,"tariffsData",null);g(this,"flowsData",null);g(this,"barriersData",null);g(this,"revenueData",null);g(this,"comtradeData",null);g(this,"activeTab","restrictions");g(this,"loadGuard",new Ft);this.content.addEventListener("click",e=>{const t=e.target.closest(".panel-tab");if(!t)return;const s=t.dataset.tab;s&&s!==this.activeTab&&(this.activeTab=s,this.render())})}clearSensitiveContent(){this.loadGuard.begin(),this.restrictionsData=null,this.tariffsData=null,this.flowsData=null,this.barriersData=null,this.revenueData=null,this.comtradeData=null,super.clearSensitiveContent()}unlockPanel(){super.unlockPanel(),this.content.hasChildNodes()||this.render()}beginDataLoad(){return this.loadGuard.begin()}acceptsDataLoad(e){return this.loadGuard.isCurrent(e)&&!this.isLocked&&!this.signal.aborted}updateRestrictions(e){this.restrictionsData=e,this.render()}updateTariffs(e){this.tariffsData=e,this.render()}updateFlows(e){this.flowsData=e,this.render()}updateBarriers(e){this.barriersData=e,this.render()}updateComtradeFlows(e){this.comtradeData=e,this.render()}updateRevenue(e){this.revenueData=e,re()&&!ne("wtoTrade")&&this.activeTab!=="revenue"&&(this.activeTab="revenue"),this.render()}render(){var b,h,y,w,A,R,I,x,$,S,C,P,O,N,k,G,H,q,E;const e=!re()||ne("wtoTrade"),t=e&&this.tariffsData&&((b=this.tariffsData.datapoints)==null?void 0:b.length)>0,s=e&&this.flowsData&&((h=this.flowsData.flows)==null?void 0:h.length)>0,a=e&&this.barriersData&&((y=this.barriersData.barriers)==null?void 0:y.length)>0,l=this.revenueData&&((w=this.revenueData.months)==null?void 0:w.length)>0,i=this.comtradeData&&((A=this.comtradeData.flows)==null?void 0:A.length)>0;if(!e&&!l&&!i){this.setSafeContent(D(`<div class="economic-empty">${o("components.tradePolicy.apiKeyMissing")}</div>`,"legacy Panel.setContent() migration"));return}!e&&this.activeTab!=="revenue"&&this.activeTab!=="comtrade"&&(this.activeTab="revenue");const c=`
      <div class="panel-tabs">
        ${e?`<button class="panel-tab ${this.activeTab==="restrictions"?"active":""}" data-tab="restrictions">
          ${o("components.tradePolicy.overview")}
        </button>`:""}
        ${t?`<button class="panel-tab ${this.activeTab==="tariffs"?"active":""}" data-tab="tariffs">
          ${o("components.tradePolicy.tariffs")}
        </button>`:""}
        ${s?`<button class="panel-tab ${this.activeTab==="flows"?"active":""}" data-tab="flows">
          ${o("components.tradePolicy.flows")}
        </button>`:""}
        ${a?`<button class="panel-tab ${this.activeTab==="barriers"?"active":""}" data-tab="barriers">
          ${o("components.tradePolicy.barriers")}
        </button>`:""}
        ${l?`<button class="panel-tab ${this.activeTab==="revenue"?"active":""}" data-tab="revenue">
          ${o("components.tradePolicy.revenue")}
        </button>`:""}
        ${i?`<button class="panel-tab ${this.activeTab==="comtrade"?"active":""}" data-tab="comtrade">
          ${o("components.tradePolicy.strategicFlows")}
        </button>`:""}
      </div>
    `,d=this.activeTab==="restrictions"?(((I=(R=this.restrictionsData)==null?void 0:R.restrictions)==null?void 0:I.length)??0)>0:this.activeTab==="tariffs"?((($=(x=this.tariffsData)==null?void 0:x.datapoints)==null?void 0:$.length)??0)>0:this.activeTab==="flows"?(((C=(S=this.flowsData)==null?void 0:S.flows)==null?void 0:C.length)??0)>0:this.activeTab==="barriers"?(((O=(P=this.barriersData)==null?void 0:P.barriers)==null?void 0:O.length)??0)>0:this.activeTab==="comtrade"?(((k=(N=this.comtradeData)==null?void 0:N.flows)==null?void 0:k.length)??0)>0:(((H=(G=this.revenueData)==null?void 0:G.months)==null?void 0:H.length)??0)>0,f=this.activeTab==="restrictions"?this.restrictionsData:this.activeTab==="tariffs"?this.tariffsData:this.activeTab==="flows"?this.flowsData:this.activeTab==="barriers"?this.barriersData:this.activeTab==="comtrade"?this.comtradeData:this.revenueData,m=!d&&(f!=null&&f.upstreamUnavailable)?`<div class="economic-warning">${this.activeTab==="revenue"?o("components.tradePolicy.treasuryUnavailable"):this.activeTab==="comtrade"?o("components.tradePolicy.comtradeUnavailable"):o("components.tradePolicy.upstreamUnavailable")}</div>`:"";let v="";switch(this.activeTab){case"restrictions":v=this.renderRestrictions();break;case"tariffs":v=this.renderTariffs();break;case"flows":v=this.renderFlows();break;case"barriers":v=this.renderBarriers();break;case"revenue":v=this.renderRevenue();break;case"comtrade":v=this.renderComtradeFlows();break}const u=this.activeTab==="comtrade"?o("components.tradePolicy.sourceComtrade"):this.activeTab==="revenue"?o("components.tradePolicy.sourceTreasury"):(this.activeTab==="tariffs"||this.activeTab==="restrictions")&&((E=(q=this.tariffsData)==null?void 0:q.effectiveTariffRate)!=null&&E.sourceName)?`${o("components.tradePolicy.sourceWto")} / ${this.tariffsData.effectiveTariffRate.sourceName}`:o("components.tradePolicy.sourceWto");this.setSafeContent(D(`
      ${c}
      ${m}
      <div class="economic-content">${v}</div>
      <div class="economic-footer">
        <span class="economic-source">${r(u)}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}renderRestrictions(){var e;return!this.restrictionsData||!((e=this.restrictionsData.restrictions)!=null&&e.length)?`<div class="economic-empty">${o("components.tradePolicy.noOverviewData")}</div>`:`${this.renderRestrictionsContext()}
    <div class="trade-restrictions-list">
      ${this.restrictionsData.restrictions.map(t=>{const s=t.status==="high"?"status-active":t.status==="moderate"?"status-notified":"status-terminated",a=t.status==="high"?o("components.tradePolicy.highTariff"):t.status==="moderate"?o("components.tradePolicy.moderateTariff"):o("components.tradePolicy.lowTariff"),l=this.renderSourceUrl(t.sourceUrl);return`<div class="trade-restriction-card">
          <div class="trade-restriction-header">
            <span class="trade-country">${r(t.reportingCountry)}</span>
            <span class="trade-badge">${r(t.measureType)}</span>
            <span class="trade-status ${s}">${a}</span>
          </div>
          <div class="trade-restriction-body">
            <div class="trade-sector">${r(t.productSector)}</div>
            ${t.description?`<div class="trade-description">${r(t.description)}</div>`:""}
            ${this.renderRestrictionEffectiveContext(t.reportingCountry)}
            ${t.affectedCountry?`<div class="trade-affected">Affects: ${r(t.affectedCountry)}</div>`:""}
          </div>
          <div class="trade-restriction-footer">
            ${t.notifiedAt?`<span class="trade-date">${r(t.notifiedAt)}</span>`:""}
            ${l}
          </div>
        </div>`}).join("")}
    </div>`}renderRestrictionsContext(){const e=this.getEffectiveTariffGapSummary();if(!e)return`<div class="trade-policy-note">${o("components.tradePolicy.overviewNoteNoEffective")}</div>`;const t=e.gap>0?"+":"",s=this.renderSourceUrl(e.effectiveRate.sourceUrl);return`<div class="trade-policy-note">
      ${o("components.tradePolicy.usBaselineLabel")}: <strong>${e.baseline.tariffRate.toFixed(1)}%</strong>.
      ${o("components.tradePolicy.effectiveTariffRateLabel")}: <strong>${e.effectiveRate.tariffRate.toFixed(1)}%</strong>.
      ${o("components.tradePolicy.gapLabel")}: <strong>${t}${e.gap.toFixed(1)}pp</strong>.
      ${o("components.tradePolicy.overviewNoteTail")}
      ${s}
    </div>`}renderTariffs(){var i;if(!this.tariffsData||!((i=this.tariffsData.datapoints)!=null&&i.length))return`<div class="economic-empty">${o("components.tradePolicy.noTariffData")}</div>`;const e=[...this.tariffsData.datapoints].sort((c,d)=>d.year-c.year),t=e[0]??null,s=this.tariffsData.effectiveTariffRate??null,a=this.renderTariffSummary(t,s),l=e.map(c=>`<tr>
        <td>${c.year}</td>
        <td>${c.tariffRate.toFixed(1)}%</td>
        <td>${r(c.productSector||"—")}</td>
      </tr>`).join("");return`${a}
    <div class="trade-tariffs-table">
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
        <table class="wm-table">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">${o("components.tradePolicy.mfnAppliedRate")}</th>
              <th scope="col">Sector</th>
            </tr>
          </thead>
          <tbody>${l}</tbody>
        </table>
      </div>
    </div>`}renderTariffSummary(e,t){if(!e)return"";const s=o("components.tradePolicy.wtoBaselineMeta",{year:String(e.year)}),a=`
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${o("components.tradePolicy.baselineMfnTariff")}</div>
        <div class="trade-tariff-value">${e.tariffRate.toFixed(1)}%</div>
        <div class="trade-tariff-meta">${r(s)}</div>
      </div>
    `;if(!t)return`<div class="trade-tariff-summary">
        ${a}
        <div class="trade-tariff-card trade-tariff-card-muted">
          <div class="trade-tariff-label">${o("components.tradePolicy.effectiveTariffRateLabel")}</div>
          <div class="trade-tariff-value">—</div>
          <div class="trade-tariff-meta">${o("components.tradePolicy.noEffectiveCoverageForCountry")}</div>
        </div>
      </div>`;const l=t.tariffRate-e.tariffRate,i=l>0?"+":"",c=l>=0?"trade-tariff-gap-above":"trade-tariff-gap-below",d=[t.sourceName,t.observationPeriod,t.updatedAt?`Updated ${t.updatedAt}`:""].filter(Boolean),f=this.renderSourceUrl(t.sourceUrl);return`<div class="trade-tariff-summary">
      ${a}
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${o("components.tradePolicy.effectiveTariffRateLabel")}</div>
        <div class="trade-tariff-value">${t.tariffRate.toFixed(1)}%</div>
        <div class="trade-tariff-meta">
          ${r(d.join(" | "))}
          ${f?`<span class="trade-tariff-source">${f}</span>`:""}
        </div>
      </div>
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${o("components.tradePolicy.gapLabel")}</div>
        <div class="trade-tariff-value ${c}">${i}${l.toFixed(1)}pp</div>
        <div class="trade-tariff-meta">${o("components.tradePolicy.effectiveMinusBaseline")}</div>
      </div>
    </div>`}getLatestBaselineTariffPoint(){var e,t;return(t=(e=this.tariffsData)==null?void 0:e.datapoints)!=null&&t.length?[...this.tariffsData.datapoints].sort((s,a)=>a.year-s.year)[0]??null:null}getEffectiveTariffGapSummary(){var s;const e=this.getLatestBaselineTariffPoint(),t=((s=this.tariffsData)==null?void 0:s.effectiveTariffRate)??null;return!e||!t?null:{baseline:e,effectiveRate:t,gap:t.tariffRate-e.tariffRate}}renderRestrictionEffectiveContext(e){if(e!=="United States")return"";const t=this.getEffectiveTariffGapSummary();if(!t)return"";const s=t.gap>0?"+":"";return`<div class="trade-policy-inline-note">
      ${o("components.tradePolicy.effectiveTariffRateLabel")}: ${t.effectiveRate.tariffRate.toFixed(1)}%
      <span class="trade-policy-inline-sep">|</span>
      ${o("components.tradePolicy.gapVsMfnLabel")}: ${s}${t.gap.toFixed(1)}pp
    </div>`}renderFlows(){var e;return!this.flowsData||!((e=this.flowsData.flows)!=null&&e.length)?`<div class="economic-empty">${o("components.tradePolicy.noFlowData")}</div>`:`<div class="trade-flows-list">
      ${this.flowsData.flows.map(t=>{const s=t.yoyExportChange>=0?"▲":"▼",a=t.yoyImportChange>=0?"▲":"▼",l=t.yoyExportChange>=0?"change-positive":"change-negative",i=t.yoyImportChange>=0?"change-positive":"change-negative";return`<div class="trade-flow-card">
          <div class="trade-flow-year">${t.year}</div>
          <div class="trade-flow-metrics">
            <div class="trade-flow-metric">
              <span class="trade-flow-label">${o("components.tradePolicy.exports")}</span>
              <span class="trade-flow-value">$${t.exportValueUsd.toFixed(0)}M</span>
              <span class="trade-flow-change ${l}">${s} ${Math.abs(t.yoyExportChange).toFixed(1)}%</span>
            </div>
            <div class="trade-flow-metric">
              <span class="trade-flow-label">${o("components.tradePolicy.imports")}</span>
              <span class="trade-flow-value">$${t.importValueUsd.toFixed(0)}M</span>
              <span class="trade-flow-change ${i}">${a} ${Math.abs(t.yoyImportChange).toFixed(1)}%</span>
            </div>
          </div>
        </div>`}).join("")}
    </div>`}renderBarriers(){var e;return!this.barriersData||!((e=this.barriersData.barriers)!=null&&e.length)?`<div class="economic-empty">${o("components.tradePolicy.noBarriers")}</div>`:`<div class="trade-barriers-list">
      ${this.barriersData.barriers.map(t=>{const s=this.renderSourceUrl(t.sourceUrl);return`<div class="trade-barrier-card">
          <div class="trade-barrier-header">
            <span class="trade-country">${r(t.notifyingCountry)}</span>
            <span class="trade-badge">${r(t.measureType)}</span>
          </div>
          <div class="trade-barrier-body">
            <div class="trade-barrier-title">${r(t.title)}</div>
            ${t.productDescription?`<div class="trade-sector">${r(t.productDescription)}</div>`:""}
            ${t.objective?`<div class="trade-description">${r(t.objective)}</div>`:""}
          </div>
          <div class="trade-barrier-footer">
            ${t.dateDistributed?`<span class="trade-date">${r(t.dateDistributed)}</span>`:""}
            ${s}
          </div>
        </div>`}).join("")}
    </div>`}renderRevenue(){var x;if(!this.revenueData||!((x=this.revenueData.months)!=null&&x.length))return`<div class="economic-empty">${o("components.tradePolicy.noRevenueData")}</div>`;const e=this.revenueData.months,s=e[e.length-1].fiscalYear,a=e.filter($=>$.fiscalYear===s),l=a.length,c=e.filter($=>$.fiscalYear===s-1).slice(0,l),d=a.reduce(($,S)=>$+S.monthlyAmountBillions,0),f=c.reduce(($,S)=>$+S.monthlyAmountBillions,0),m=f>0?(d-f)/f*100:0,v=m>=0?"change-negative":"change-positive",u=m>=0?"▲":"▼",b=`
      <div class="trade-revenue-summary">
        <div class="trade-revenue-headline">
          <span class="trade-revenue-label">${o("components.tradePolicy.fytdLabel",{year:String(s)})}</span>
          <span class="trade-revenue-value">$${d.toFixed(1)}B</span>
        </div>
        <div class="trade-revenue-compare">
          ${o("components.tradePolicy.vsPriorFy",{year:String(s-1)})}: $${f.toFixed(1)}B
          <span class="${v}">${u} ${Math.abs(m).toFixed(0)}%</span>
        </div>
      </div>
    `,h=c.length>0?f/c.length:0,y=[...e].slice(-12),w=Math.max(...y.map($=>$.monthlyAmountBillions),1),R=`<div class="trade-revenue-chart">${y.map($=>{const S=Math.round($.monthlyAmountBillions/w*100),C=$.recordDate.slice(0,7),P=$.monthlyAmountBillions>h*1.5;return`<div class="trade-chart-col" title="${C}: $${$.monthlyAmountBillions.toFixed(1)}B">
        <div class="trade-chart-bar${P?" trade-chart-spike":""}" style="height:${S}%"></div>
        <div class="trade-chart-label">${$.recordDate.slice(5,7)}</div>
      </div>`}).join("")}</div>`,I=[...e].reverse().slice(0,24).map($=>`<tr${$.monthlyAmountBillions>h*2?' class="trade-revenue-spike"':""}>
        <td>${$.recordDate}</td>
        <td>$${$.monthlyAmountBillions.toFixed(1)}B</td>
        <td>$${$.fytdAmountBillions.toFixed(1)}B</td>
      </tr>`).join("");return`${b}
    ${R}
    <div class="trade-tariffs-table">
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
        <table class="wm-table">
          <thead>
            <tr>
              <th scope="col">${o("components.tradePolicy.colDate")}</th>
              <th scope="col">${o("components.tradePolicy.colMonthly")}</th>
              <th scope="col">${o("components.tradePolicy.colFytd")}</th>
            </tr>
          </thead>
          <tbody>${I}</tbody>
        </table>
      </div>
    </div>`}renderComtradeFlows(){var f;const e=`<p class="trade-comtrade-scope" data-comtrade-scope="national">${r(o("components.tradePolicy.comtradeNationalScope"))}</p>`,t=(f=this.comtradeData)==null?void 0:f.flows;if(!(t!=null&&t.length))return`${e}<div class="economic-empty">${o("components.tradePolicy.noComtradeData")}</div>`;const s=t.filter(m=>m.partnerCode==="0"||m.partnerCode==="000"),a=s.length>0?s:t,l=new Map;for(const m of a){const v=`${m.reporterCode}:${m.cmdCode}:${m.year}`,u=l.get(v);(!u||m.tradeValueUsd>u.tradeValueUsd)&&l.set(v,m)}const i=new Map;for(const m of l.values()){const v=`${m.reporterCode}:${m.cmdCode}`,u=i.get(v);(!u||m.year>u.year)&&i.set(v,m)}const d=[...i.values()].sort((m,v)=>m.isAnomaly!==v.isAnomaly?m.isAnomaly?-1:1:Math.abs(v.yoyChange)-Math.abs(m.yoyChange)).map(m=>{const v=m.yoyChange>=0?"▲":"▼",u=m.yoyChange>=0?"change-positive":"change-negative",b=`${v} ${Math.abs(m.yoyChange*100).toFixed(0)}%`,h=m.tradeValueUsd>=1e9?`$${(m.tradeValueUsd/1e9).toFixed(1)}B`:`$${(m.tradeValueUsd/1e6).toFixed(0)}M`,y=m.isAnomaly?`<span style="margin-left:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;letter-spacing:0.05em;padding:1px 5px;border-radius:3px;background:rgba(255,68,68,0.15);color:var(--red);vertical-align:middle;text-transform:uppercase">${o("components.tradePolicy.anomalyBadge")}</span>`:"";return`<tr class="${m.isAnomaly?"trade-anomaly-row":""}">
        <td>${r(m.reporterName)}${y}</td>
        <td>${r(m.cmdDesc)}</td>
        <td>${h} <span class="trade-flow-year">${m.year}</span></td>
        <td class="${u}">${b}</td>
      </tr>`}).join("");return`${e}<div class="trade-tariffs-table">
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
        <table class="wm-table">
          <thead><tr>
            <th scope="col">${o("components.tradePolicy.colReporter")}</th>
            <th scope="col">${o("components.tradePolicy.colCommodity")}</th>
            <th scope="col">${o("components.tradePolicy.colTradeValue")}</th>
            <th scope="col">${o("components.tradePolicy.yoyChange")}</th>
          </tr></thead>
          <tbody>${d}</tbody>
        </table>
      </div>
    </div>`}renderSourceUrl(e){if(!e)return"";try{const t=new URL(e);if(t.protocol==="http:"||t.protocol==="https:")return`<a href="${r(e)}" target="_blank" rel="noopener" class="trade-source-link">Source</a>`}catch{}return""}}const Qa=Object.freeze(Object.defineProperty({__proto__:null,TradePolicyPanel:Fs},Symbol.toStringTag,{value:"Module"}));class Ls extends L{constructor(){super({id:"sanctions-pressure",title:o("components.sanctionsPressure.title"),showCount:!0,trackActivity:!0,defaultRowSpan:2,infoTooltip:o("components.sanctionsPressure.infoTooltip")});g(this,"data",null);this.showLoading(o("components.sanctionsPressure.loading"))}setData(e){this.data=e,this.setCount(e.totalCount),this.render()}render(){var v;if(!this.data||this.data.totalCount===0){this.setSafeContent(D(`<div class="economic-empty">${r(o("components.sanctionsPressure.unavailable"))}</div>`,"legacy Panel.setContent() migration"));return}const e=this.data,t=`
      <div class="sanctions-summary">
        ${this.renderSummaryCard(o("components.sanctionsPressure.summary.new"),e.newEntryCount,e.newEntryCount>0?"highlight":"")}
        ${this.renderSummaryCard(o("components.sanctionsPressure.summary.sema"),e.semaError?`${e.semaCount} · ${e.semaError}`:e.semaCount,e.semaError?"highlight":"")}
        ${this.renderSummaryCard(o("components.sanctionsPressure.summary.vessels"),e.vesselCount)}
        ${this.renderSummaryCard(o("components.sanctionsPressure.summary.aircraft"),e.aircraftCount)}
      </div>
    `,s=e.countries.length>0?e.countries.slice(0,8).map(u=>this.renderCountryRow(u)).join(""):`<div class="economic-empty">${r(o("components.sanctionsPressure.empty.countries"))}</div>`,a=e.flagRegistries.length>0?`<div class="sanctions-section">
          <div class="sanctions-section-title">${r(o("components.sanctionsPressure.sections.flagRegistries"))}</div>
          <div class="sanctions-list">${e.flagRegistries.slice(0,6).map(u=>this.renderFlagRegistryRow(u)).join("")}</div>
        </div>`:"",l=(v=e.regulationTargets)!=null&&v.length?`<div class="sanctions-section">
          <div class="sanctions-section-title">${r(o("components.sanctionsPressure.sections.regulationTargets"))}</div>
          <div class="sanctions-row-meta">${r(o("components.sanctionsPressure.targetExplanation"))}</div>
          <div class="sanctions-list">${e.regulationTargets.slice(0,6).map(u=>this.renderCountryRow(u)).join("")}</div>
        </div>`:"",i=e.unattributed,c=i&&i.entryCount>0?`<div class="sanctions-row">
          <div class="sanctions-row-main">
            <div class="sanctions-row-title">${r(o("components.sanctionsPressure.fallbacks.unattributed"))}</div>
            <div class="sanctions-row-meta">${r(o("components.sanctionsPressure.designations",{count:i.entryCount}))}</div>
          </div>
          <div class="sanctions-row-flags">${this.renderAssetCounts(i)}</div>
        </div>`:"",d=e.entries.length>0?e.entries.slice(0,10).map(u=>this.renderEntryRow(u)).join(""):`<div class="economic-empty">${r(o("components.sanctionsPressure.empty.entries"))}</div>`,f=e.programs.length>0?e.programs.slice(0,6).map(u=>this.renderProgramRow(u)).join(""):`<div class="economic-empty">${r(o("components.sanctionsPressure.empty.programs"))}</div>`,m=[o("components.sanctionsPressure.footer.updated",{time:e.fetchedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),e.datasetDate?o("components.sanctionsPressure.footer.dataset",{date:e.datasetDate.toISOString().slice(0,10)}):"",o("components.sanctionsPressure.footer.source")].filter(Boolean).join(" · ");this.setSafeContent(D(`
      <div class="sanctions-panel-content">
        ${t}
        ${c}
        <div class="sanctions-sections">
          <div class="sanctions-section">
            <div class="sanctions-section-title">${r(o("components.sanctionsPressure.sections.countries"))}</div>
            <div class="sanctions-list">${s}</div>
          </div>
          ${a}
          ${l}
          <div class="sanctions-section">
            <div class="sanctions-section-title">${r(o("components.sanctionsPressure.sections.entries"))}</div>
            <div class="sanctions-list">${d}</div>
          </div>
          <div class="sanctions-section">
            <div class="sanctions-section-title">${r(o("components.sanctionsPressure.sections.programs"))}</div>
            <div class="sanctions-list">${f}</div>
          </div>
        </div>
        <div class="economic-footer">${r(m)}</div>
      </div>
    `,"legacy Panel.setContent() migration"))}renderSummaryCard(e,t,s=""){return`
      <div class="sanctions-summary-card ${s?`sanctions-summary-card-${s}`:""}">
        <span class="sanctions-summary-label">${r(e)}</span>
        <span class="sanctions-summary-value">${r(String(t))}</span>
      </div>
    `}renderCountryRow(e){const t=e.newEntryCount>0?`<span class="sanctions-pill sanctions-pill-new">${r(o("components.sanctionsPressure.pills.newCount",{count:e.newEntryCount}))}</span>`:"";return`
      <div class="sanctions-row">
        <div class="sanctions-row-main">
          <div class="sanctions-row-title">${r(e.countryName)}</div>
          <div class="sanctions-row-meta">${r(e.countryCode)} · ${r(o("components.sanctionsPressure.designations",{count:e.entryCount}))}</div>
        </div>
        <div class="sanctions-row-flags">${t}${this.renderAssetCounts(e)}</div>
      </div>
    `}renderFlagRegistryRow(e){const t=e.newVesselCount+e.newAircraftCount,s=t>0?`<span class="sanctions-pill sanctions-pill-new">${r(o("components.sanctionsPressure.pills.newCount",{count:t}))}</span>`:"";return`
      <div class="sanctions-row">
        <div class="sanctions-row-main">
          <div class="sanctions-row-title">${r(e.countryName)}</div>
          <div class="sanctions-row-meta">${r(e.countryCode)}</div>
        </div>
        <div class="sanctions-row-flags">${s}${this.renderAssetCounts(e)}</div>
      </div>
    `}renderAssetCounts({vesselCount:e,aircraftCount:t}){const s=e>0?`<span class="sanctions-pill">🚢 ${e}</span>`:"",a=t>0?`<span class="sanctions-pill">✈ ${t}</span>`:"";return s+a}renderProgramRow(e){return`
      <div class="sanctions-row">
        <div class="sanctions-row-main">
          <div class="sanctions-row-title">${r(e.program)}</div>
          <div class="sanctions-row-meta">${r(o("components.sanctionsPressure.designations",{count:e.entryCount}))}</div>
        </div>
        <div class="sanctions-row-flags">
          ${e.newEntryCount>0?`<span class="sanctions-pill sanctions-pill-new">${r(o("components.sanctionsPressure.pills.newCount",{count:e.newEntryCount}))}</span>`:""}
        </div>
      </div>
    `}renderEntryRow(e){const t=e.countryNames[0]||e.countryCodes[0]||e.note.split(" · ")[0]||o("components.sanctionsPressure.fallbacks.unattributed"),s=e.programs[0]||o("components.sanctionsPressure.fallbacks.program"),a=e.note?`<div class="sanctions-entry-note">${r(e.note)}</div>`:"",l=e.effectiveAt?e.effectiveAt.toISOString().slice(0,10):o("components.sanctionsPressure.fallbacks.undated"),i=(e.sourceLists||[]).map(c=>`<span class="sanctions-pill">${r(c)}</span>`).join("");return`
      <div class="sanctions-entry">
        <div class="sanctions-entry-top">
          <span class="sanctions-entry-name">${r(e.name)}</span>
          <span class="sanctions-pill sanctions-pill-type">${r(e.entityType)}</span>
          ${e.isNew?`<span class="sanctions-pill sanctions-pill-new">${r(o("components.sanctionsPressure.pills.new"))}</span>`:""}
          ${i}
        </div>
        <div class="sanctions-entry-meta">${r(t)} · ${r(s)} · ${r(l)}</div>
        ${a}
      </div>
    `}}const Xa=Object.freeze(Object.defineProperty({__proto__:null,SanctionsPressurePanel:Ls},Symbol.toStringTag,{value:"Module"})),Ms=new Set(["hormuz_strait","malacca_strait","suez","bab_el_mandeb"]),_s=new Set(Object.keys(rs).filter(n=>n!=="_comment"&&n.length===2)),Ns=(()=>{const n=new Intl.DisplayNames(["en"],{type:"region"});return Object.keys(_t).map(p=>{const e=_s.has(p),t=n.of(p)??p;return{iso2:p,label:e?t:`${t} (not seeded)`,seeded:e}}).sort((p,e)=>p.label.localeCompare(e.label))})();function et(n){return n?n.todayCountsAvailable??(n.todayTotal??0)>0:!1}class Bs extends L{constructor(){super({id:"supply-chain",title:o("panels.supplyChain"),defaultRowSpan:2,infoTooltip:o("components.supplyChain.infoTooltip")});g(this,"shippingData",null);g(this,"chokepointData",null);g(this,"mineralsData",null);g(this,"mineralProductionData",null);g(this,"mineralsStage","mine");g(this,"stressData",null);g(this,"activeTab","chokepoints");g(this,"expandedChokepoint",null);g(this,"pendingFocusChokepoint",null);g(this,"transitChart",new is);g(this,"chartObserver",null);g(this,"chartMountTimer",null);g(this,"historyCache",new Map);g(this,"historyInflight",new Set);g(this,"bypassUnsubscribe",null);g(this,"bypassGateTracked",!1);g(this,"onDismissScenario",null);g(this,"onScenarioActivate",null);g(this,"activeScenarioState",null);g(this,"scenarioControls",new Map);g(this,"scenarioRunState",new Map);g(this,"pendingImmediateRender",!1);g(this,"scenarioPollController",null);ht(this.content,".trade-restriction-header"),this.content.addEventListener("input",e=>{this.captureScenarioControls(e.target)}),this.content.addEventListener("change",e=>{var a;const t=this.captureScenarioControls(e.target);if(!t)return;(a=this.scenarioPollController)==null||a.abort();const s=t.dataset.scenarioId;s&&this.scenarioRunState.delete(s),this.renderFromUser()}),this.content.addEventListener("click",e=>{const t=e.target.closest("[data-mineral-stage]");if((t==null?void 0:t.dataset.mineralStage)==="mine"||(t==null?void 0:t.dataset.mineralStage)==="refinery"){const i=t.dataset.mineralStage;i!==this.mineralsStage&&(this.mineralsStage=i,this.render());return}const s=e.target.closest(".panel-tab");if(s!=null&&s.dataset.tab){const i=s.dataset.tab;i!==this.activeTab&&(this.clearTransitChart(),this.activeTab=i,this.render());return}const a=e.target.closest(".sc-scenario-trigger");if(a){e.stopPropagation();const i=e.target.closest(".sc-scenario-btn");i&&!i.disabled&&this.runScenario(a,i);return}const l=e.target.closest(".trade-restriction-card");if(l!=null&&l.dataset.cpId){const i=this.expandedChokepoint===l.dataset.cpId?null:l.dataset.cpId;i||this.clearTransitChart(),this.expandedChokepoint=i,this.pendingFocusChokepoint=l.dataset.cpId??null,this.render()}})}captureScenarioControls(e){var f;const t=(e==null?void 0:e.closest(".sc-scenario-trigger"))??null;if(!t)return null;const s=t.dataset.scenarioId;if(!s)return null;const a=((f=t.querySelector(".sc-scenario-country-select"))==null?void 0:f.value)??"",l=t.querySelector(".sc-scenario-severity"),i=$e.find(m=>m.id===s),c=(l==null?void 0:l.value)??"",d=c===""?(i==null?void 0:i.disruptionPct)??0:Number(c);return Number.isFinite(d)&&this.scenarioControls.set(s,{iso2:a,disruptionPct:d}),t}setScenarioRunState(e,t){t==="idle"?this.scenarioRunState.delete(e):this.scenarioRunState.set(e,t),this.renderFromUser()}restoreChokepointHeaderFocus(){var s;const e=this.pendingFocusChokepoint;if(this.pendingFocusChokepoint=null,!e)return;const t=this.content.querySelectorAll(".trade-restriction-card");for(const a of t)if(a.dataset.cpId===e){(s=a.querySelector(".trade-restriction-header"))==null||s.focus();return}}clearTransitChart(){this.chartMountTimer&&(clearTimeout(this.chartMountTimer),this.chartMountTimer=null),this.chartObserver&&(this.chartObserver.disconnect(),this.chartObserver=null),this.transitChart.destroy(),this.bypassUnsubscribe&&(this.bypassUnsubscribe(),this.bypassUnsubscribe=null),this.bypassGateTracked=!1}updateShippingRates(e){this.shippingData=e,this.render()}updateChokepointStatus(e){this.chokepointData=e,this.render()}updateCriticalMinerals(e){this.mineralsData=e,this.render()}updateMineralProduction(e){this.mineralProductionData=e,this.render()}clearMineralProduction(){this.mineralProductionData=null,this.render()}updateShippingStress(e){this.stressData=e,this.render()}renderFromUser(){this.pendingImmediateRender=!0,this.render()}render(){var m,v,u,b,h,y,w,A,R,I,x,$,S,C,P,O;const e=this.pendingImmediateRender;this.pendingImmediateRender=!1,this.clearTransitChart();const t=`
      <div class="panel-tabs">
        <button class="panel-tab ${this.activeTab==="chokepoints"?"active":""}" data-tab="chokepoints">
          ${o("components.supplyChain.chokepoints")}
        </button>
        <button class="panel-tab ${this.activeTab==="shipping"?"active":""}" data-tab="shipping">
          ${o("components.supplyChain.shipping")}
        </button>
        <button class="panel-tab ${this.activeTab==="indicators"?"active":""}" data-tab="indicators">
          ${o("components.supplyChain.economicIndicators")}
        </button>
        <button class="panel-tab ${this.activeTab==="minerals"?"active":""}" data-tab="minerals">
          ${o("components.supplyChain.minerals")}
        </button>
        <button class="panel-tab ${this.activeTab==="stress"?"active":""}" data-tab="stress">
          Stress
        </button>
      </div>
    `,s=this.activeTab==="chokepoints"?(((v=(m=this.chokepointData)==null?void 0:m.chokepoints)==null?void 0:v.length)??0)>0:this.activeTab==="shipping"?(((b=(u=this.shippingData)==null?void 0:u.indices)==null?void 0:b.length)??0)>0||this.chokepointData!==null:this.activeTab==="indicators"?(((y=(h=this.shippingData)==null?void 0:h.indices)==null?void 0:y.length)??0)>0:this.activeTab==="stress"?(((A=(w=this.stressData)==null?void 0:w.carriers)==null?void 0:A.length)??0)>0:(((I=(R=this.mineralProductionData)==null?void 0:R.commodities)==null?void 0:I.length)??0)>0||((($=(x=this.mineralsData)==null?void 0:x.minerals)==null?void 0:$.length)??0)>0,a=this.activeTab==="chokepoints"?this.chokepointData:this.activeTab==="shipping"||this.activeTab==="indicators"?this.shippingData:this.activeTab==="stress"?this.stressData:(C=(S=this.mineralProductionData)==null?void 0:S.commodities)!=null&&C.length?this.mineralProductionData:this.mineralsData,l=this.activeTab==="chokepoints"&&this.chokepointData?ts(this.chokepointData):a!=null&&a.upstreamUnavailable&&!s?o("components.supplyChain.upstreamUnavailable"):"",i=l?`<div class="economic-warning">${r(l)}</div>`:"";let c="";switch(this.activeTab){case"chokepoints":c=this.renderChokepoints();break;case"shipping":c=this.renderShipping();break;case"indicators":c=this.renderIndicators();break;case"minerals":c=this.renderMinerals();break;case"stress":c=this.renderStress();break}const d=D(`
      ${t}
      ${i}
      <div class="economic-content">${c}</div>
    `,"legacy Panel.setContent() migration"),f=()=>{this.restoreChokepointHeaderFocus();for(const N of this.content.querySelectorAll(".sc-scenario-trigger")){const k=this.scenarioControls.get(N.dataset.scenarioId),G=N.querySelector(".sc-scenario-country-select");G&&(G.value=(k==null?void 0:k.iso2)??"");const H=N.querySelector(".sc-scenario-severity");H&&k&&(H.value=String(k.disruptionPct))}this.activeScenarioState&&this.renderScenarioBanner()};if(e?this.setSafeContentImmediate(d,f):this.setSafeContent(d,f),this.activeTab==="chokepoints"&&this.expandedChokepoint){const N=this.expandedChokepoint,k=(O=(P=this.chokepointData)==null?void 0:P.chokepoints)==null?void 0:O.find(E=>E.name===N),G=()=>{const E=this.content.querySelector(`[data-chart-cp="${N}"]`);if(!E)return!1;const T=(k==null?void 0:k.id)??"";if(!T)return E.textContent=o("components.supplyChain.historyUnavailable")||"History unavailable",!0;const j=this.historyCache.get(T);return j&&j.length?(E.removeAttribute("style"),E.style.marginTop="8px",E.style.minHeight="200px",E.textContent="",this.transitChart.mount(E,j),!0):(this.historyInflight.has(T)||(this.historyInflight.add(T),Jt(T).then(U=>{this.historyInflight.delete(T);const M=this.content.querySelector(`[data-chart-cp-id="${T}"]`);M&&(U.history.length?(this.historyCache.set(T,U.history),M.removeAttribute("style"),M.style.marginTop="8px",M.style.minHeight="200px",M.textContent="",this.transitChart.mount(M,U.history)):M.textContent=o("components.supplyChain.historyUnavailable")||"History unavailable")}).catch(()=>{this.historyInflight.delete(T);const U=this.content.querySelector(`[data-chart-cp-id="${T}"]`);U&&(U.textContent=o("components.supplyChain.historyUnavailable")||"History unavailable")})),!0)},H=()=>{const E=this.content.querySelector(`[data-bypass-cp="${(k==null?void 0:k.id)??""}"]`);return E?(this.renderBypassSection(E,(k==null?void 0:k.id)??""),!0):!1},q=()=>H()?(G(),!0):!1;this.chartObserver=new MutationObserver(()=>{var E;q()&&(this.chartMountTimer&&(clearTimeout(this.chartMountTimer),this.chartMountTimer=null),(E=this.chartObserver)==null||E.disconnect(),this.chartObserver=null)}),this.chartObserver.observe(this.content,{childList:!0,subtree:!0}),this.chartMountTimer=setTimeout(()=>{q()&&(this.chartObserver&&(this.chartObserver.disconnect(),this.chartObserver=null),this.chartMountTimer=null)},220)}}renderBypassSection(e,t){if(!t)return;const s=()=>'<div class="sc-bypass-gate"><span class="sc-bypass-lock">🔒</span><span class="sc-bypass-gate-text">Bypass corridors available with PRO</span></div>',a=c=>{const d=c.slice(0,3);if(!d.length)return'<div class="sc-bypass-error">No bypass options available</div>';const f=d.map(m=>{const v=m.addedTransitDays>0?`+${m.addedTransitDays}d`:"-",u=m.addedCostMultiplier>1?`+${((m.addedCostMultiplier-1)*100).toFixed(0)}%`:"-",h={WAR_RISK_TIER_UNSPECIFIED:"Normal",WAR_RISK_TIER_WAR_ZONE:"War Zone",WAR_RISK_TIER_CRITICAL:"Critical",WAR_RISK_TIER_HIGH:"High",WAR_RISK_TIER_ELEVATED:"Elevated",WAR_RISK_TIER_NORMAL:"Normal"}[m.bypassWarRiskTier]??m.bypassWarRiskTier;return`<tr><td>${r(m.name)}</td><td>${v}</td><td>${u}</td><td>${r(h)}</td></tr>`}).join("");return`<div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title"><table class="wm-table sc-bypass-table">
        <thead><tr><th scope="col">Corridor</th><th scope="col">+Days</th><th scope="col">+Cost</th><th scope="col">Risk</th></tr></thead>
        <tbody>${f}</tbody>
      </table></div>`},l=(c,d)=>{if(!c){B(e,_(s(),"legacy direct innerHTML migration")),this.bypassGateTracked||(qe("bypass-corridors"),this.bypassGateTracked=!0);return}d!==void 0&&B(e,_(a(d),"legacy direct innerHTML migration"))};if(!de(we())){l(!1),this.bypassUnsubscribe&&this.bypassUnsubscribe(),this.bypassUnsubscribe=ns(c=>{if(de(c)){if(this.bypassUnsubscribe&&(this.bypassUnsubscribe(),this.bypassUnsubscribe=null),!this.content.contains(e))return;B(e,_('<div class="sc-bypass-loading">Loading bypass options…</div>',"legacy direct innerHTML migration")),je(t,"container",100).then(d=>{this.content.contains(e)&&B(e,_(a(d.options),"legacy direct innerHTML migration"))}).catch(()=>{this.content.contains(e)&&B(e,_('<div class="sc-bypass-error">Bypass data unavailable</div>',"legacy direct innerHTML migration"))})}});return}je(t,"container",100).then(c=>{this.content.contains(e)&&l(!0,c.options)}).catch(()=>{this.content.contains(e)&&B(e,_('<div class="sc-bypass-error">Bypass data unavailable</div>',"legacy direct innerHTML migration"))})}renderChokepoints(){var a,l,i;if(!this.chokepointData||!((a=this.chokepointData.chokepoints)!=null&&a.length))return`<div class="economic-empty">${o("components.supplyChain.noChokepoints")}</div>`;const e=(l=this.activeScenarioState)==null?void 0:l.result,t=new Set((e==null?void 0:e.affectedChokepointIds)??[]),s=((i=e==null?void 0:e.template)==null?void 0:i.disruptionPct)??null;return`<div class="trade-restrictions-list">
      ${[...this.chokepointData.chokepoints].sort((c,d)=>d.disruptionScore-c.disruptionScore).map(c=>{var q,E;const d=t.has(c.id),f=c.status==="red"?"status-active":c.status==="yellow"?"status-notified":"status-terminated",m=c.status==="red"?"sc-dot-red":c.status==="yellow"?"sc-dot-yellow":"sc-dot-green",v=[c.navigationalWarningsAvailable===!0?`${c.activeWarnings} ${o("components.supplyChain.warnings")}`:"",c.aisSnapshotAvailable===!0?`${c.aisDisruptions} ${o("components.supplyChain.aisDisruptions")}`:""].filter(Boolean).map(T=>`<span>${T}</span>`).join(""),u=c.transitSummary,b=(u==null?void 0:u.wowChangePct)??0,h=u&&b!==0,y=et(u),w=h?`<span class="${b>=0?"change-positive":"change-negative"}">${b>=0?"▲":"▼"}${Math.abs(b).toFixed(1)}%</span>`:"",A=(u==null?void 0:u.disruptionPct)??0,R=A>10?"sc-disrupt-red":A>3?"sc-disrupt-yellow":"sc-disrupt-green",I=(u==null?void 0:u.riskLevel)==="critical"||(u==null?void 0:u.riskLevel)==="high"?"sc-disrupt-red":(u==null?void 0:u.riskLevel)==="elevated"||(u==null?void 0:u.riskLevel)==="moderate"?"sc-disrupt-yellow":"sc-disrupt-green",x=this.expandedChokepoint===c.name,$=x&&(u==null?void 0:u.dataAvailable)!==!1?`<div data-chart-cp="${r(c.name)}" data-chart-cp-id="${r(c.id)}" style="margin-top:8px;min-height:200px;display:flex;align-items:center;justify-content:center;color:var(--text-dim,#888);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${o("components.supplyChain.loadingHistory")||"Loading transit history…"}</div>`:"",S=c.warRiskTier??"WAR_RISK_TIER_NORMAL",C={WAR_RISK_TIER_WAR_ZONE:"War Zone",WAR_RISK_TIER_CRITICAL:"Critical",WAR_RISK_TIER_HIGH:"High",WAR_RISK_TIER_ELEVATED:"Elevated",WAR_RISK_TIER_NORMAL:"Normal"},O=`<span class="sc-war-risk-badge sc-war-risk-badge--${{WAR_RISK_TIER_WAR_ZONE:"war",WAR_RISK_TIER_CRITICAL:"critical",WAR_RISK_TIER_HIGH:"high",WAR_RISK_TIER_ELEVATED:"elevated",WAR_RISK_TIER_NORMAL:"normal"}[S]??"normal"}">${C[S]??"Normal"}</span>`,N=x?`<div class="sc-bypass-section" data-bypass-cp="${r(c.id)}"><div class="sc-bypass-heading">Bypass Options</div><div class="sc-bypass-loading">Loading bypass options…</div></div>`:"",k=x?(()=>{var Be;const T=$e.find(Z=>Z.affectedChokepointIds.includes(c.id)&&Z.type!=="tariff_shock");if(!T)return"";const j=de(we()),U=this.scenarioControls.get(T.id)??{iso2:"",disruptionPct:T.disruptionPct},M=this.activeScenarioState,ge=(M==null?void 0:M.scenarioId)===T.id&&(M.result.scopedIso2??"")===U.iso2&&((Be=M.result.template)==null?void 0:Be.disruptionPct)===U.disruptionPct,_e=this.scenarioRunState.get(T.id),Ne=_e==="running",Rt=["sc-scenario-btn",j?"":"sc-scenario-btn--gated",ge?"sc-scenario-btn--active":""].filter(Boolean).join(" "),xt=Ne?"Computing…":ge?"Active":_e==="error"?"Error — retry":"Simulate Closure",Pt=[j?"":'data-gated="1"',ge||Ne?"disabled":""].filter(Boolean).join(" ");return`<div class="sc-scenario-trigger" data-scenario-id="${r(T.id)}" data-chokepoint-id="${r(c.id)}">
            <div class="sc-scenario-section-label">Scenario settings</div>
            <div class="sc-scenario-controls">
              <label class="sc-scenario-control sc-scenario-control--country">Country
                <select class="sc-scenario-country-select" aria-label="Scenario country">
                  <option value="">All seeded countries</option>
                  ${Ns.map(Z=>`<option value="${Z.iso2}"${Z.seeded?"":" disabled"}>${r(Z.label)}</option>`).join("")}
                </select>
              </label>
              <label class="sc-scenario-control">Closure severity (%)
                <input class="sc-scenario-severity" type="number" min="0" max="100" step="1" value="${U.disruptionPct}" aria-label="Closure severity (%)">
              </label>
            </div>
            <div class="sc-scenario-actions"><p class="sc-scenario-hint">${T.durationDays} days is descriptive only. Coverage is checked when the run completes.</p>
            <button class="${Rt}" ${Pt} aria-label="Simulate ${r(T.name)}">
              ${xt}
            </button></div>
          </div>`})():"",H=d&&s!=null&&s>c.disruptionScore?`<span class="trade-badge">${c.disruptionScore}/100</span> <span class="trade-badge trade-badge--projected" style="background:#7f1d1d;color:#fff;margin-left:4px">→ ${s}/100</span>`:`<span class="trade-badge">${c.disruptionScore}/100</span>`;return`<div class="trade-restriction-card${x?" expanded":""}${d?" scenario-affected":""}" data-cp-id="${r(c.name)}" style="cursor:pointer${d?";border-left:3px solid #dc2626":""}">
          <div class="trade-restriction-header" role="button" tabindex="0" aria-expanded="${x?"true":"false"}">
            <span class="trade-country">${r(c.name)}</span>
            <span class="sc-status-dot ${m}"></span>
            ${H}
            <span class="trade-status ${f}">${r(c.status)}</span>
          </div>
          <div class="trade-restriction-body">
            ${d&&(e!=null&&e.template)?`<div class="sc-metric-row" style="white-space:normal;background:#7f1d1d22;padding:4px 6px;border-radius:3px;margin-bottom:4px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
              <span style="color:#fca5a5;font-weight:600">⚠ Projected under scenario: ${e.template.disruptionPct}% closure for ${e.template.durationDays} days${e.template.costShockMultiplier>1?` (+${Math.round((e.template.costShockMultiplier-1)*100)}% cost)`:""}</span>
            </div>`:""}
            <div class="sc-metric-row"${v||(q=c.directions)!=null&&q.length?"":" hidden"}>
              ${v}
              ${(E=c.directions)!=null&&E.length?`<span>${c.directions.map(T=>r(T)).join("/")}</span>`:""}
            </div>
            ${u&&u.dataAvailable===!1?`<div class="sc-metric-row" style="opacity:0.5;font-size:calc(11px * var(--wm-panel-effective-scale, 1))"><span>${o("components.supplyChain.transitDataUnavailable")||"Transit data unavailable (upstream partial)"}</span></div>`:""}
            ${u&&u.dataAvailable!==!1&&(y||h||A>0)?`<div class="sc-metric-row">
              ${y?`<span>${u.todayTotal} ${o("components.supplyChain.vessels")}</span>`:""}
              ${h?`<span>${o("components.supplyChain.wowChange")}: ${w}</span>`:""}
              ${A>0?`<span>${o("components.supplyChain.disruption")}: <span class="${R}">${A.toFixed(1)}%</span></span>`:""}
            </div>`:""}
            ${u!=null&&u.riskLevel?`<div class="sc-metric-row">
              <span>${o("components.supplyChain.riskLevel")}: <span class="${I}">${r(u.riskLevel)}</span></span>
              <span>${u.incidentCount7d} ${o("components.supplyChain.incidents7d")}</span>
            </div>`:""}
            <div class="sc-metric-row">${O}</div>
            ${c.flowEstimate?(()=>{const T=c.flowEstimate,j=Math.round(T.flowRatio*100),U=T.disrupted||j<85?"#ef4444":j<95?"#f59e0b":"var(--text-dim,#888)",M=T.hazardAlertLevel&&T.hazardAlertName?`<span style="background:#ea580c;color:#fff;font-size:calc(9px * var(--wm-panel-effective-scale, 1));padding:1px 5px;border-radius:3px">&#9888; ${r(T.hazardAlertName.toUpperCase())}</span>`:"";return`<div class="sc-metric-row" style="color:${U}">
                <span>~${T.currentMbd} mb/d <span style="opacity:0.7">(${j}% of ${T.baselineMbd} baseline)</span></span>${M}
              </div>`})():Ms.has(c.id)?`<div class="sc-metric-row" style="color:var(--text-dim,#888);font-size:calc(11px * var(--wm-panel-effective-scale, 1));opacity:0.7">
                <span>${o("components.supplyChain.flowUnavailable")}</span>
              </div>`:""}
            ${c.description?`<div class="trade-description">${r(c.description)}</div>`:""}
            <div class="trade-affected">${c.affectedRoutes.slice(0,3).map(T=>r(T)).join(", ")}</div>
            ${$}
            ${N}
            ${k}
          </div>
        </div>`}).join("")}
    </div>`}renderShipping(){var s,a;const e=(a=(s=this.shippingData)==null?void 0:s.indices)==null?void 0:a.length,t=this.renderDisruptionSnapshot();return!e&&!t?`<div class="economic-empty">${o("components.supplyChain.noShipping")}</div>`:`<div class="trade-restrictions-list">
      ${t}
      ${e?this.renderFredIndices():""}
    </div>`}renderDisruptionSnapshot(){if(this.chokepointData===null)return`<div class="trade-sector" style="padding:8px;opacity:0.6">${o("components.supplyChain.loadingCorridors")}</div>`;const e=this.chokepointData.chokepoints;if(!(e!=null&&e.length))return"";const t=[...e].sort((i,c)=>c.disruptionScore-i.disruptionScore),s=t.filter(i=>i.disruptionScore>0),l=(s.length>0?s:t.slice(0,5)).map(i=>{const c=i.transitSummary,d=i.status==="red"?"sc-dot-red":i.status==="yellow"?"sc-dot-yellow":"sc-dot-green",f=(c==null?void 0:c.wowChangePct)??0,m=et(c),v=f!==0?`<span class="${f>=0?"change-positive":"change-negative"}">${f>=0?"▲":"▼"}${Math.abs(f).toFixed(1)}%</span>`:"-",u=(c==null?void 0:c.disruptionPct)??0,b=u>10?"sc-disrupt-red":u>3?"sc-disrupt-yellow":"sc-disrupt-green",h=(c==null?void 0:c.riskLevel)||"-",y=h==="critical"||h==="high"?"sc-disrupt-red":h==="elevated"||h==="moderate"?"sc-disrupt-yellow":"";return`<tr>
        <td><span class="sc-status-dot ${d}"></span> ${r(i.name)}</td>
        <td>${m&&c?c.todayTotal:"-"}</td>
        <td>${v}</td>
        <td><span class="${b}">${u>0?u.toFixed(1)+"%":"-"}</span></td>
        <td>${y?`<span class="${y}">${r(h)}</span>`:r(h)}</td>
      </tr>`}).join("");return`<div style="margin-bottom:8px">
      <div class="trade-sector" style="font-weight:600;margin-bottom:4px">${o("components.supplyChain.corridorDisruption")}</div>
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
        <table class="wm-table sc-disruption-table">
          <thead><tr>
            <th scope="col">${o("components.supplyChain.corridor")}</th>
            <th scope="col">${o("components.supplyChain.vessels")}</th>
            <th scope="col">${o("components.supplyChain.wowChange")}</th>
            <th scope="col">${o("components.supplyChain.disruption")}</th>
            <th scope="col">${o("components.supplyChain.risk")}</th>
          </tr></thead>
          <tbody>${l}</tbody>
        </table>
      </div>
    </div>`}renderFredIndices(){var i,c;if(re()&&!ne("supplyChain")||!((c=(i=this.shippingData)==null?void 0:i.indices)!=null&&c.length))return"";const e=new Set(["SCFI","CCFI"]),t=new Set(["BDI","BCI","BPI","BSI","BHSI"]),s=this.shippingData.indices.filter(d=>e.has(d.indexId)),a=this.shippingData.indices.filter(d=>t.has(d.indexId)),l=(d,f)=>{if(!f.length)return"";const m=f.map(v=>{const u=v.changePct>=0?"change-positive":"change-negative",b=v.changePct>=0?"▲":"▼",h=this.renderSparkline(v.history.map(w=>w.value),v.history.map(w=>w.date));return`<div class="trade-restriction-card">
          ${v.spikeAlert?`<div class="economic-warning">${o("components.supplyChain.spikeAlert")}</div>`:""}
          <div class="trade-restriction-header">
            <span class="trade-country">${r(v.name)}</span>
            <span class="trade-badge">${v.currentValue.toFixed(0)} ${r(v.unit)}</span>
            <span class="trade-flow-change ${u}">${b} ${Math.abs(v.changePct).toFixed(1)}%</span>
          </div>
          <div class="trade-restriction-body">
            ${h}
          </div>
        </div>`}).join("");return`<div class="trade-sector" style="font-weight:600;margin:8px 0 4px">${r(d)}</div>${m}`};return[l(o("components.supplyChain.containerRates"),s),l(o("components.supplyChain.bulkShipping"),a)].join("")}renderIndicators(){var l,i;if(re()&&!ne("supplyChain"))return"";if(!((i=(l=this.shippingData)==null?void 0:l.indices)!=null&&i.length))return`<div class="economic-empty">${o("components.supplyChain.noShipping")}</div>`;const e=new Set(["SCFI","CCFI"]),t=new Set(["BDI","BCI","BPI","BSI","BHSI"]),s=this.shippingData.indices.filter(c=>!e.has(c.indexId)&&!t.has(c.indexId));return s.length?`<div class="trade-restrictions-list">${s.map(c=>{const d=c.changePct>=0?"change-positive":"change-negative",f=c.changePct>=0?"▲":"▼",m=this.renderSparkline(c.history.map(u=>u.value),c.history.map(u=>u.date));return`<div class="trade-restriction-card">
          ${c.spikeAlert?`<div class="economic-warning">${o("components.supplyChain.spikeAlert")}</div>`:""}
          <div class="trade-restriction-header">
            <span class="trade-country">${r(c.name)}</span>
            <span class="trade-badge">${c.currentValue.toFixed(0)} ${r(c.unit)}</span>
            <span class="trade-flow-change ${d}">${f} ${Math.abs(c.changePct).toFixed(1)}%</span>
          </div>
          <div class="trade-restriction-body">
            ${m}
          </div>
        </div>`}).join("")}</div>`:`<div class="economic-empty">${o("components.supplyChain.noShipping")}</div>`}renderStress(){var f;if(!this.stressData||!((f=this.stressData.carriers)!=null&&f.length))return'<div class="economic-empty">Shipping stress data unavailable</div>';const{stressScore:e,stressLevel:t,carriers:s}=this.stressData,a=t==="critical"?"#e74c3c":t==="elevated"?"#e67e22":t==="moderate"?"#f1c40f":"#27ae60",l=Math.round(Math.min(100,Math.max(0,e))),c=`<div style="margin-bottom:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
        <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em">Composite Stress Score</span>
        <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 7px;border-radius:3px;background:${t==="critical"?"rgba(231,76,60,0.15)":t==="elevated"?"rgba(230,126,34,0.15)":t==="moderate"?"rgba(241,196,15,0.15)":"rgba(39,174,96,0.15)"};color:${a}">${r(t.toUpperCase())}</span>
      </div>
      <div style="position:relative;height:6px;border-radius:3px;background:rgba(255,255,255,0.08)">
        <div style="position:absolute;left:0;top:0;height:100%;width:${l}%;border-radius:3px;background:${a};transition:width 0.4s"></div>
      </div>
      <div style="text-align:right;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">${e.toFixed(1)}/100</div>
    </div>`,d=s.map(m=>{var y;const v=m.changePct>=0?"change-positive":"change-negative",u=m.changePct>=0?"▲":"▼",b=m.carrierType==="etf"?"ETF":m.carrierType==="index"?"IDX":"CARR",h=((y=m.sparkline)==null?void 0:y.length)>=2?this.renderSparkline(m.sparkline):"";return`<div class="trade-restriction-card">
        <div class="trade-restriction-header">
          <span class="trade-country" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${r(m.symbol)}</span>
          <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));padding:1px 5px;border-radius:2px;background:rgba(255,255,255,0.06);color:var(--text-dim)">${b}</span>
          <span class="trade-badge">${m.price.toFixed(2)}</span>
          <span class="trade-flow-change ${v}">${u} ${Math.abs(m.changePct).toFixed(2)}%</span>
        </div>
        <div class="trade-restriction-body" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${r(m.name)}${h}</div>
      </div>`}).join("");return`<div class="trade-restrictions-list">${c}${d}</div>`}renderSparkline(e,t){if(e.length<2)return"";const s=Math.min(...e),l=Math.max(...e)-s||1,i=200,c=40,d=t!=null&&t.length?c+14:c,f=e.map((v,u)=>{const b=u/(e.length-1)*i,h=c-(v-s)/l*(c-4)-2;return`${b.toFixed(1)},${h.toFixed(1)}`}).join(" "),m=t!=null&&t.length?`
      <text x="0" y="${d-1}" fill="var(--text-dim,#888)" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1))" text-anchor="start">${r(t[0].slice(0,7))}</text>
      <text x="${i}" y="${d-1}" fill="var(--text-dim,#888)" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1))" text-anchor="end">${r(t[t.length-1].slice(0,7))}</text>
    `:"";return`<svg width="${i}" height="${d}" viewBox="0 0 ${i} ${d}" style="display:block;margin:4px 0">
      <polyline points="${f}" fill="none" stroke="var(--accent-primary, #4fc3f7)" stroke-width="1.5" />
      ${m}
    </svg>`}renderMinerals(){var a,l;const e=this.mineralProductionData;if((a=e==null?void 0:e.commodities)!=null&&a.length){const i=this.mineralsStage,c=e.commodities.map(f=>{const m=i==="refinery"?f.refinery:f.mine;if(!m)return`<tr>
            <td>${r(f.commodity)}</td>
            <td colspan="2">${r(o("components.supplyChain.stageUnavailable"))}</td>
          </tr>`;const v=m.countries.filter(w=>!w.withheld&&!w.residual&&w.share!=null).slice(0,3).map(w=>`${r(w.country)} ${(w.share??0).toFixed(0)}%`).join(", "),u=m.countries.find(w=>w.residual&&w.share!=null),b=u?` <span class="sc-mineral-residual">+${(u.share??0).toFixed(0)}% ${r(u.country||"other")}</span>`:"",h=m.withheldCount>0?` <span class="sc-risk-moderate">${r(o("components.supplyChain.withheldNote"))}</span>`:"",y=m.year&&m.year!==e.dataYear?` <span class="sc-mineral-vintage">(${r(String(m.year))})</span>`:"";return`<tr>
          <td>${r(f.commodity)}${y}</td>
          <td>${v||"—"}${b}${h}</td>
          <td>${m.hhi.toFixed(0)}</td>
        </tr>`}).join(""),d=e.dataYear?String(e.dataYear):"";return`<div class="trade-tariffs-table">
        <div class="panel-tabs" style="margin-bottom:8px">
          <button class="panel-tab ${i==="mine"?"active":""}" data-mineral-stage="mine">${o("components.supplyChain.mineStage")}</button>
          <button class="panel-tab ${i==="refinery"?"active":""}" data-mineral-stage="refinery">${o("components.supplyChain.refineryStage")}</button>
        </div>
        <p class="sc-mineral-caption">${o("components.supplyChain.productionCaption")}${d?` (${r(d)})`:""}</p>
        <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table">
            <thead>
              <tr>
                <th scope="col">${o("components.supplyChain.mineral")}</th>
                <th scope="col">${o("components.supplyChain.topProducers")}</th>
                <th scope="col" title="Herfindahl-Hirschman Index measures producer concentration, from 0 to 10,000. Higher values mean fewer producers dominate supply.">Concentration index</th>
              </tr>
            </thead>
            <tbody>${c}</tbody>
          </table>
        </div>
      </div>`}if(!this.mineralsData||!((l=this.mineralsData.minerals)!=null&&l.length))return`<div class="economic-empty">${o("components.supplyChain.noMinerals")}</div>`;const t=this.mineralsData.minerals.map(i=>{const c=i.riskRating==="critical"?"sc-risk-critical":i.riskRating==="high"?"sc-risk-high":i.riskRating==="moderate"?"sc-risk-moderate":"sc-risk-low",d=i.topProducers.slice(0,3).map(f=>`${r(f.country)} ${f.sharePct.toFixed(0)}%`).join(", ");return`<tr>
        <td>${r(i.mineral)}</td>
        <td>${d}</td>
        <td>${i.hhi.toFixed(0)}</td>
        <td><span class="${c}">${r(i.riskRating)}</span></td>
      </tr>`}).join(""),s=de(we())?"":`<p class="sc-mineral-caption">${r(o("components.supplyChain.productionProLocked"))}</p>`;return`<div class="trade-tariffs-table">
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
        <table class="wm-table">
          <thead>
            <tr>
              <th scope="col">${o("components.supplyChain.mineral")}</th>
              <th scope="col">${o("components.supplyChain.topProducers")}</th>
              <th scope="col" title="Herfindahl-Hirschman Index measures producer concentration, from 0 to 10,000. Higher values mean fewer producers dominate supply.">Concentration index</th>
              <th scope="col">${o("components.supplyChain.risk")}</th>
            </tr>
          </thead>
          <tbody>${t}</tbody>
        </table>
      </div>
      ${s}
    </div>`}showScenarioSummary(e,t){this.activeScenarioState={scenarioId:e,result:t},this.render()}renderScenarioBanner(){var I,x;const e=this.activeScenarioState;if(!e)return;const{scenarioId:t,result:s}=e;(I=this.content.querySelector(".sc-scenario-banner"))==null||I.remove();const l=s.topImpactCountries.slice(0,5).map($=>{const S=$.partialEvidence===!0,C=S?` <span class="sc-scenario-partial" title="${r(`Only ${$.evaluatedRecords??0} of ${$.requestedRecords??0} requested country/sector records were available; this is a lower bound, not low exposure.`)}">(partial evidence)</span>`:"";return`<div class="sc-scenario-country"><span class="sc-scenario-country-code">${r($.iso2)}</span><div><strong>${S?"≥":""}${$.totalImpact.toFixed(2)} score units</strong><span class="sc-scenario-relative">${$.impactPct.toFixed(0)}% relative ${C}</span></div></div>`}).join(""),i=document.createElement("div");i.className="sc-scenario-banner";const c=((x=$e.find($=>$.id===t))==null?void 0:x.name)??t.replace(/-/g," "),d=s.template,f=d?`<dl class="sc-scenario-metrics">
      <div><dt>Closure</dt><dd aria-label="${d.disruptionPct}% closure">${d.disruptionPct}%<small>${s.affectedChokepointIds.length} chokepoint${s.affectedChokepointIds.length===1?"":"s"}</small></dd></div>
      <div><dt>Duration</dt><dd>${d.durationDays} days<small>descriptive only</small></dd></div>
      <div><dt>Cost multiplier</dt><dd>${d.costShockMultiplier.toFixed(2)}×<small>modeled freight cost</small></dd></div>
    </dl>`:"",m=(d==null?void 0:d.disruptionPct)===0?"No physical route disruption is highlighted.":"Map highlights disrupted routes.",v=s.coverage,u=(v==null?void 0:v.records)??[],b=$=>u.filter(S=>S.state===$).length,h=v&&v.status!=="unknown",y=h?`${v.status==="complete"?"Complete within seeded scope":"Partial coverage"}: ${b("evaluated")}/${u.length} country/sector records evaluated`:"Unknown coverage: the country/sector manifest could not be read for this run. No broad exposure conclusion is supported.",w=[[b("missing"),"missing"],[b("malformed"),"malformed"],[b("incomplete_routes"),"incomplete routes"],[b("not_seeded"),"not seeded"],[u.filter($=>$.basis==="flow_weighted").length,"flow-weighted"],[u.filter($=>$.basis==="country_route_fallback").length,"geographic fallback"],[u.filter($=>$.rawImpact===0).length,"valid zero impacts"]],A=h?w.filter(([$])=>$>0).map(([$,S])=>`<span>${$} ${S}</span>`).join(""):"";B(i,_(['<div class="sc-scenario-top"><div class="sc-scenario-heading">','<span class="sc-scenario-section-label">Scenario result</span>',`<h3 class="sc-scenario-name">${r(c)}</h3>`,`<span class="sc-scenario-scope">Country scope: ${r(s.scopedIso2||"All seeded countries")}</span></div>`,'<button class="sc-scenario-dismiss" aria-label="Dismiss scenario">×</button></div>',f,l?`<div class="sc-scenario-countries">${l}</div>`:"",'<div class="sc-scenario-coverage-block"><span class="sc-scenario-section-label">Evidence coverage</span>',`<p class="sc-scenario-coverage">${r(y)}</p>`,A?`<div class="sc-scenario-coverage-counts">${A}</div>`:"","</div>",`<details class="sc-scenario-evidence"><summary>Country/sector evidence <span>${u.length} records</span></summary><ul></ul></details>`,`<div class="sc-scenario-footer"><p class="sc-scenario-hint">Raw impact is a modeled relative score, not currency or lost trade. Duration does not change the score. ${m}</p>`,'<button class="sc-scenario-export">Download scenario JSON</button></div>'].join(""),"scenario result presentation"));const R=i.querySelector("details");R.addEventListener("toggle",()=>{const $=R.querySelector("ul");if(R.open&&!$.childElementCount){const S=u.map(C=>`<li>${r(C.iso2)} / HS ${r(C.hs2)}: ${r(C.state.replace(/_/g," "))}${C.basis?`, ${C.basis==="flow_weighted"?"flow-weighted":"geographic fallback"}`:""}${C.rawImpact!==void 0?`, ${C.rawImpact.toFixed(2)} score units`:""}. Cache date: ${r(C.fetchedAt||"unknown")}; trade observation date: unknown.</li>`).join("");B($,_(S,"scenario evidence requested by user"))}}),i.querySelector(".sc-scenario-export").addEventListener("click",()=>{const $={scenarioId:t,result:s,units:"relative score units, not currency or lost trade",durationBasis:"descriptive only",observationDate:"unknown",source:"HS2 chokepoint exposure model; flow_weighted uses recorded Comtrade shares with modeled routes; country_route_fallback uses geography"},S=URL.createObjectURL(new Blob([JSON.stringify($,null,2)],{type:"application/json"})),C=document.createElement("a");C.href=S,C.download=`scenario-${t}-${s.scopedIso2||"all"}.json`,C.click(),setTimeout(()=>URL.revokeObjectURL(S),1e3)}),i.querySelector(".sc-scenario-dismiss").addEventListener("click",()=>{var $;return($=this.onDismissScenario)==null?void 0:$.call(this)}),this.content.prepend(i)}hideScenarioSummary(){this.activeScenarioState=null,this.render()}setOnDismissScenario(e){this.onDismissScenario=e}setOnScenarioActivate(e){this.onScenarioActivate=e}async runScenario(e,t){var m,v;if(t.dataset.gated==="1"){qe("scenario-engine");return}const s=e.dataset.scenarioId,a=e.querySelector(".sc-scenario-severity");if(!a.value||!a.reportValidity())return;const l=e.querySelector(".sc-scenario-country-select").value,i=Number(a.value);(m=this.scenarioPollController)==null||m.abort();for(const[u,b]of this.scenarioRunState)b==="running"&&this.scenarioRunState.delete(u);const c=new AbortController;this.scenarioPollController=c;const{signal:d}=c;this.setScenarioRunState(s,"running");const f=u=>{this.scenarioPollController===c&&this.setScenarioRunState(s,u)};try{const u=AbortSignal.any([d,AbortSignal.timeout(2e4)]),h=(await ss({scenarioId:s,iso2:l,disruptionPct:i},{signal:u})).jobId;let y=null;for(let w=0;w<60;w++){if(d.aborted){f("idle");return}if(!this.content.isConnected)return;w>0&&await new Promise(R=>setTimeout(R,1e3));const A=await as(h,{signal:d});if(A.status==="done"){const R=A.result;if(!R||!Array.isArray(R.topImpactCountries))throw new Error("done without valid result");y=R;break}if(A.status==="failed")throw new Error("Scenario failed")}if(!y)throw new Error("Timeout — scenario worker may be down");if(d.aborted){f("idle");return}if(!this.content.isConnected)return;this.scenarioRunState.delete(s),(v=this.onScenarioActivate)==null||v.call(this,s,y)}catch(u){if(u instanceof Error&&u.name==="AbortError"){f("idle");return}console.error("[scenario] run failed:",u),f("error")}}}const ei=Object.freeze(Object.defineProperty({__proto__:null,SupplyChainPanel:Bs},Symbol.toStringTag,{value:"Module"})),yt={port:"Ports",aviation:"Aviation",hazard:"Hazards",power_energy:"Power / energy",strategic_industry:"Strategic industry",trade:"Trade"},Ie={available:"Available",partial:"Partial",stale:"Stale",unavailable:"Unavailable"},Os="The active map renderer centers this corridor but cannot draw its boundary or nodes. Use the WebGL 2D map on a supported device to view the overlay.";function xe(n,p){if(!n||!Number.isFinite(Date.parse(n)))return"Time unavailable";const e=new Date(n);return p==="year"?String(e.getUTCFullYear()):p==="month"?e.toLocaleString(void 0,{year:"numeric",month:"short",timeZone:"UTC"}):p==="day"?e.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}):new Date(n).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"UTC",timeZoneName:"short"})}function Us(n){var t;const p=n.sourceUrl?dt(n.sourceUrl):"",e=p?`<a href="${r(p)}" target="_blank" rel="noopener noreferrer">${r(n.publisher.name)}</a>`:r(n.publisher.name);return`
    <li class="china-corridor-source" data-source-availability="${n.availability}">
      <div class="china-corridor-source__summary">${r(n.summary)}</div>
      <div class="china-corridor-source__meta">
        <span>${e}</span>
        <span>source ${r(n.availability)}</span>
        <span>observed ${r(xe(n.observationTime,n.observationTimePrecision))} (${r(n.observationTimePrecision)})</span>
        <span>released ${r(xe(n.releaseTime,n.releaseTimePrecision))} (${r(n.releaseTimePrecision)})</span>
        <span>retrieved ${r(xe(n.retrievalTime,n.retrievalTimePrecision))} (${r(n.retrievalTimePrecision)})</span>
        <span>transport ${r(n.transportFreshness)}</span>
        <span>content ${r(n.contentFreshness)}</span>
        <span>revision ${r(((t=n.revision)==null?void 0:t.state)??"unknown")}</span>
      </div>
    </li>`}function Gs(n){const p=n.sourceSignals.length>0?`<ul class="china-corridor-sources">${n.sourceSignals.map(Us).join("")}</ul>`:`<p class="china-corridor-missing">${r(n.reason??"No reviewed source signal is available.")}</p>`;return`
    <article class="china-corridor-condition" data-family="${n.family}" data-availability="${n.availability}">
      <header>
        <h4>${r(yt[n.family])}</h4>
        <span class="china-corridor-status china-corridor-status--${n.availability}">
          ${r(Ie[n.availability])}
        </span>
      </header>
      <div class="china-corridor-provider">Provider family: ${r(n.providerId)}</div>
      ${p}
    </article>`}class Hs extends L{constructor(){super({id:"china-corridors",title:"China Logistics Corridors",className:"panel-wide",defaultRowSpan:2,infoTooltip:"Transparent control towers for four reviewed China logistics corridors. Each condition retains its own source, time, availability, and freshness; no aggregate risk score is produced."});g(this,"response",{generatedAt:"",corridors:[]});g(this,"selectedId",null);g(this,"selectedFamilies",new Set(ye));g(this,"onCorridorSelect",null);g(this,"showRendererHint",!1);this.content.addEventListener("click",e=>this.handleClick(e)),this.content.addEventListener("keydown",e=>this.handleKeydown(e))}setOnCorridorSelect(e){this.onCorridorSelect=e}setRendererSupportsOverlay(e){const t=!e;t!==this.showRendererHint&&(this.showRendererHint=t,this.selectedId!==null&&this.render())}async fetchData(){this.hasData()||this.showLoading();const e=await Qt();return e.corridors.length===0?(this.hasData()||this.showError("China corridor data unavailable",()=>void this.fetchData()),!1):(this.setData(e),!0)}hasData(){return this.response.corridors.length>0}setData(e){var t;this.response=e,this.selectedId??(this.selectedId=((t=e.corridors[0])==null?void 0:t.id)??null),this.render()}hasComtradeBackedSelection(){return Xt.some(e=>this.selectedFamilies.has(e))}selectedCorridor(){return this.response.corridors.find(e=>e.id===this.selectedId)??null}selectCorridor(e,t=!1){var l;const s=this.response.corridors.find(i=>i.id===e);if(!s)return;this.selectedId=s.id;const a=(l=this.onCorridorSelect)==null?void 0:l.call(this,s);this.showRendererHint=a===!1,this.render(()=>{var i;t&&((i=this.content.querySelector(`[role="tab"][data-corridor-id="${s.id}"]`))==null||i.focus())})}handleClick(e){const t=e.target,s=t.closest("[data-corridor-id]");if(s!=null&&s.dataset.corridorId){this.selectCorridor(s.dataset.corridorId);return}const a=t.closest("[data-family-filter]"),l=a==null?void 0:a.dataset.familyFilter;!l||!ye.includes(l)||(this.selectedFamilies.has(l)?this.selectedFamilies.delete(l):this.selectedFamilies.add(l),this.render())}handleKeydown(e){const t=e.target.closest('[role="tab"][data-corridor-id]');if(!t||!["ArrowRight","ArrowLeft","Home","End"].includes(e.key))return;const s=this.response.corridors.map(i=>i.id),a=s.indexOf(t.dataset.corridorId);if(a<0)return;e.preventDefault();let l;if(e.key==="Home")l=s[0];else if(e.key==="End")l=s[s.length-1];else{const i=e.key==="ArrowRight"?1:-1;l=s[(a+i+s.length)%s.length]}l&&this.selectCorridor(l,!0)}render(e){const t=this.selectedCorridor();if(!t)return;const s=this.response.corridors.map(i=>{const c=i.conditions.filter(d=>d.availability==="available").length;return`<button id="china-corridor-tab-${i.id}" role="tab" data-corridor-id="${i.id}" aria-selected="${i.id===t.id}" aria-controls="china-corridor-tabpanel" tabindex="${i.id===t.id?"0":"-1"}">
        <strong>${r(i.name)}</strong>
        <small>${c}/${i.conditions.length} families available · ${r(Ie[i.availability])}</small>
      </button>`}).join(""),a=ye.map(i=>`<button type="button" class="panel-tab china-corridor-filter${this.selectedFamilies.has(i)?" active":""}" data-family-filter="${i}" aria-pressed="${this.selectedFamilies.has(i)}">${r(yt[i])}</button>`).join(""),l=t.conditions.filter(i=>this.selectedFamilies.has(i.family)).map(Gs).join("");this.setSafeContent(D(`
      <div class="china-corridor-panel">
        <div class="china-corridor-compare" role="tablist" aria-label="Compare China logistics corridors">${s}</div>
        <div class="panel-tabs china-corridor-filters" role="group" aria-label="Signal-family filters">${a}</div>
        <section id="china-corridor-tabpanel" role="tabpanel" aria-labelledby="china-corridor-tab-${t.id}">
          <div class="china-corridor-detail__heading">
            <div>
              <h3>${r(t.name)}</h3>
              <p class="china-corridor-description">${r(t.description)}</p>
            </div>
            <span class="china-corridor-status china-corridor-status--${t.availability}">${r(Ie[t.availability])}</span>
          </div>
          ${this.showRendererHint?`<p class="china-corridor-renderer-hint" role="status">${r(Os)}</p>`:""}
          ${this.hasComtradeBackedSelection()?`<p class="china-corridor-comtrade-scope" data-comtrade-scope="national">${r(os)}</p>`:""}
          <div class="china-corridor-conditions">${l||'<p class="china-corridor-missing">Select at least one signal family.</p>'}</div>
        </section>
      </div>
    `,"China corridor values are escaped before rendering"),e)}}const ti=Object.freeze(Object.defineProperty({__proto__:null,ChinaCorridorPanel:Hs},Symbol.toStringTag,{value:"Module"}));class js extends L{constructor(){super({id:"china-activity-nowcast",title:"China Activity Nowcast",className:"panel-wide",defaultRowSpan:2,infoTooltip:"A deterministic directional comparison of revision-aware official activity and reviewed proxy families. Missing and stale inputs are excluded; this is not a replacement GDP estimate."});g(this,"response",null)}async fetchData(){this.hasData()||this.showLoading();const e=await cs();return this.setData(e),e.state!=="insufficient_data"}hasData(){return this.response!==null}setData(e){this.response=e,this.render()}render(){this.response!==null&&this.setSafeContent(D(ls(this.response),"China activity nowcast renderer escapes every dynamic value before constructing markup"))}}const si=Object.freeze(Object.defineProperty({__proto__:null,ChinaActivityNowcastPanel:js},Symbol.toStringTag,{value:"Module"}));function tt(n){return{ports:o("components.investments.sectors.ports"),pipelines:o("components.investments.sectors.pipelines"),energy:o("components.investments.sectors.energy"),datacenters:o("components.investments.sectors.datacenters"),airports:o("components.investments.sectors.airports"),railways:o("components.investments.sectors.railways"),telecoms:o("components.investments.sectors.telecoms"),water:o("components.investments.sectors.water"),logistics:o("components.investments.sectors.logistics"),mining:o("components.investments.sectors.mining"),"real-estate":o("components.investments.sectors.realEstate"),manufacturing:o("components.investments.sectors.manufacturing")}[n]||n}const qs={operational:"#22c55e","under-construction":"#f59e0b",announced:"#60a5fa",rumoured:"#a78bfa",cancelled:"#ef4444",divested:"#6b7280"},Vs={SA:"🇸🇦",UAE:"🇦🇪"};function zs(n){return n===void 0?o("components.investments.undisclosed"):n>=1e5?`$${(n/1e3).toFixed(0)}B`:n>=1e3?`$${(n/1e3).toFixed(1)}B`:`$${n.toLocaleString()}M`}class Ws extends L{constructor(e){super({id:"gcc-investments",title:o("panels.gccInvestments"),showCount:!0,infoTooltip:o("components.investments.infoTooltip")});g(this,"filters",{investingCountry:"ALL",sector:"ALL",entity:"ALL",status:"ALL",search:""});g(this,"sortKey","assetName");g(this,"sortAsc",!0);g(this,"filtersExpanded",!1);g(this,"onInvestmentClick");this.onInvestmentClick=e,this.setupEventDelegation(),ht(this.content,".fdi-row"),this.render()}getFiltered(){const{investingCountry:e,sector:t,entity:s,status:a,search:l}=this.filters,i=l.toLowerCase();return ue.filter(c=>!(e!=="ALL"&&c.investingCountry!==e||t!=="ALL"&&c.sector!==t||s!=="ALL"&&c.investingEntity!==s||a!=="ALL"&&c.status!==a||i&&!c.assetName.toLowerCase().includes(i)&&!c.targetCountry.toLowerCase().includes(i)&&!c.description.toLowerCase().includes(i)&&!c.investingEntity.toLowerCase().includes(i))).sort((c,d)=>{const f=this.sortKey,m=c[f]??"",v=d[f]??"",u=m<v?-1:m>v?1:0;return this.sortAsc?u:-u})}render(e=!1){const t=this.getFiltered(),s=He(ue.map(h=>h.investingEntity)),a=He(ue.map(h=>h.sector)),l=h=>this.sortKey===h?"fdi-sort fdi-sort-active":"fdi-sort",i=(h,y)=>this.sortKey===h?`${y} ${this.sortAsc?"↑":"↓"}`:y,c=this.filters.investingCountry!=="ALL"||this.filters.sector!=="ALL"||this.filters.entity!=="ALL"||this.filters.status!=="ALL",d=t.map(h=>{const y=qs[h.status]||"#6b7280",w=Vs[h.investingCountry]||"",A=tt(h.sector),R=h.yearAnnounced??h.yearOperational??"—";return`
        <div class="fdi-row" data-id="${r(h.id)}" role="button" tabindex="0">
          <div class="fdi-row-line1">
            <span class="fdi-flag">${w}</span>
            <span class="fdi-asset-name">${r(h.assetName)}</span>
            <span class="fdi-entity-sub">${r(h.investingEntity)}</span>
            <span class="fdi-usd">${r(zs(h.investmentUSD))}</span>
          </div>
          <div class="fdi-row-line2">
            <span class="fdi-country">${r(h.targetCountry)}</span>
            <span class="fdi-sector-badge">${r(A)}</span>
            <span class="fdi-status-label"><span class="fdi-status-dot" style="background:${y}"></span>${r(h.status)}</span>
            <span class="fdi-year">${R}</span>
          </div>
        </div>`}).join(""),f=this.content.querySelector(".fdi-list");if(e&&f){B(f,_(d||`<div class="fdi-empty">${o("components.investments.noMatch")}</div>`,"Escaped investment rows")),this.countEl&&(this.countEl.textContent=String(t.length));return}const m=this.filtersExpanded||c?"fdi-filter-toggle fdi-filters-active":"fdi-filter-toggle",v=this.filtersExpanded?"fdi-filters fdi-filters-open":"fdi-filters",u=h=>this.filters.status===h?" selected":"",b=`
      <div class="fdi-search-row">
        <input class="fdi-search" type="text"
          placeholder="${o("components.investments.searchPlaceholder")}"
          value="${r(this.filters.search)}"/>
        <button class="${m}" data-action="toggle-filters" title="Filters" aria-label="Toggle filters" aria-pressed="${this.filtersExpanded}">⚙</button>
      </div>
      <div class="${v}">
        <select class="fdi-filter" data-filter="investingCountry" aria-label="Filter by investing country">
          <option value="ALL">🌐 ${o("components.investments.allCountries")}</option>
          <option value="SA"${this.filters.investingCountry==="SA"?" selected":""}>🇸🇦 ${o("components.investments.saudiArabia")}</option>
          <option value="UAE"${this.filters.investingCountry==="UAE"?" selected":""}>🇦🇪 ${o("components.investments.uae")}</option>
        </select>
        <select class="fdi-filter" data-filter="sector" aria-label="Filter by sector">
          <option value="ALL">${o("components.investments.allSectors")}</option>
          ${a.map(h=>`<option value="${h}"${this.filters.sector===h?" selected":""}>${r(tt(h))}</option>`).join("")}
        </select>
        <select class="fdi-filter" data-filter="entity" aria-label="Filter by entity">
          <option value="ALL">${o("components.investments.allEntities")}</option>
          ${s.map(h=>`<option value="${r(h)}"${this.filters.entity===h?" selected":""}>${r(h)}</option>`).join("")}
        </select>
        <select class="fdi-filter" data-filter="status" aria-label="Filter by status">
          <option value="ALL">${o("components.investments.allStatuses")}</option>
          <option value="operational"${u("operational")}>${o("components.investments.operational")}</option>
          <option value="under-construction"${u("under-construction")}>${o("components.investments.underConstruction")}</option>
          <option value="announced"${u("announced")}>${o("components.investments.announced")}</option>
          <option value="rumoured"${u("rumoured")}>${o("components.investments.rumoured")}</option>
          <option value="divested"${u("divested")}>${o("components.investments.divested")}</option>
        </select>
        <div class="fdi-sort-pills">
          <button class="${l("assetName")}" data-sort="assetName">${i("assetName",o("components.investments.asset"))}</button>
          <button class="${l("investmentUSD")}" data-sort="investmentUSD">${i("investmentUSD",o("components.investments.investment"))}</button>
          <button class="${l("targetCountry")}" data-sort="targetCountry">${i("targetCountry",o("components.investments.country"))}</button>
          <button class="${l("yearAnnounced")}" data-sort="yearAnnounced">${i("yearAnnounced",o("components.investments.year"))}</button>
        </div>
      </div>
      <div class="fdi-list">
        ${d||`<div class="fdi-empty">${o("components.investments.noMatch")}</div>`}
      </div>`;this.setTrustedContent(_(b,"Escaped investment rows and filters")),this.countEl&&(this.countEl.textContent=String(t.length))}setupEventDelegation(){this.content.addEventListener("input",e=>{const t=e.target;t.classList.contains("fdi-search")&&(this.filters.search=t.value,this.render(!0))}),this.content.addEventListener("change",e=>{const t=e.target.closest(".fdi-filter");if(t){const s=t.dataset.filter;this.filters[s]=t.value,this.render()}}),this.content.addEventListener("click",e=>{const t=e.target;if(t.closest('[data-action="toggle-filters"]')){this.filtersExpanded=!this.filtersExpanded,this.render();return}const a=t.closest(".fdi-sort");if(a){const i=a.dataset.sort;this.sortKey===i?this.sortAsc=!this.sortAsc:(this.sortKey=i,this.sortAsc=!0),this.render();return}const l=t.closest(".fdi-row");if(l){const i=ue.find(c=>c.id===l.dataset.id);i&&this.onInvestmentClick&&this.onInvestmentClick(i)}})}}const ai=Object.freeze(Object.defineProperty({__proto__:null,InvestmentsPanel:Ws},Symbol.toStringTag,{value:"Module"})),st=K(()=>new mt(Y(),{fetch:es}));function Pe(n,p){if(p.length===0)return"";const e=p.map(t=>`
    <div class="market-item">
      <div class="market-info">
        <span class="market-name">${t.flag} ${r(t.name)}</span>
        <span class="market-symbol">${r(t.country||t.symbol)}</span>
      </div>
      <div class="market-data">
        ${Ut(t.sparkline,t.change)}
        <span class="market-price">${r(Nt(t.symbol,t.price))}</span>
        <span class="market-change ${Bt(t.change)}">${Ot(t.change)}</span>
      </div>
    </div>
  `).join("");return`<div class="gulf-section"><div class="gulf-section-title">${r(n)}</div>${e}</div>`}class Ks extends L{constructor(){super({id:"gulf-economies",title:o("panels.gulfEconomies"),infoTooltip:o("components.gulfEconomies.infoTooltip")})}async fetchData(){var p,e,t,s;try{const a=V("gulfQuotes");if((p=a==null?void 0:a.quotes)!=null&&p.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderGulf(a),st().listGulfQuotes({}).then(i=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=i.quotes)!=null&&d.length)||this.renderGulf(i)}).catch(()=>{});return}const l=await st().listGulfQuotes({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderGulf(l)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(o("common.failedMarketData"),()=>void this.fetchData())}}renderGulf(p){var l;if(!((l=p.quotes)!=null&&l.length)){const i=p.rateLimited?o("common.rateLimitedMarket"):o("common.failedMarketData");this.showError(i,()=>void this.fetchData());return}const e=p.quotes.filter(i=>i.type==="index"),t=p.quotes.filter(i=>i.type==="currency"),s=p.quotes.filter(i=>i.type==="oil"),a=Pe(o("panels.gulfIndices"),e)+Pe(o("panels.gulfCurrencies"),t)+Pe(o("panels.gulfOil"),s);this.setSafeContent(D(a,"legacy Panel.setContent() migration"))}}const ii=Object.freeze(Object.defineProperty({__proto__:null,GulfEconomiesPanel:Ks},Symbol.toStringTag,{value:"Module"})),at=K(()=>new ce(Y(),{fetch:Q}));class Ys extends L{constructor(){super({id:"grocery-basket",title:o("panels.groceryBasket"),infoTooltip:o("components.groceryBasket.infoTooltip")})}async fetchData(){var p,e,t,s;try{const a=V("groceryBasket");if((p=a==null?void 0:a.countries)!=null&&p.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderBasket(a),at().listGroceryBasketPrices({}).then(i=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=i.countries)!=null&&d.length)||this.renderBasket(i)}).catch(()=>{});return}const l=await at().listGroceryBasketPrices({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderBasket(l)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(o("common.failedMarketData"),()=>void this.fetchData())}}renderBasket(p){var v,u,b;if(!((v=p.countries)!=null&&v.length)){this.showError(o("common.failedMarketData"),()=>void this.fetchData());return}const e=p.countries,t=((b=(u=e[0])==null?void 0:u.items)==null?void 0:b.map(h=>h.itemId))??[],s=(p.basketVersion??0)>=3,a=e.map(h=>`<th scope="col" class="gb-country-header" title="${r(h.name)}">${r(h.flag)}<br><span class="gb-country-name">${r(h.name)}</span></th>`).join(""),l=t.map(h=>{var $,S;const y=(S=($=e[0])==null?void 0:$.items)==null?void 0:S.find(C=>C.itemId===h),w=e.map(C=>{var P,O;return(O=(P=C.items)==null?void 0:P.find(N=>N.itemId===h))==null?void 0:O.usdPrice}).filter(C=>C!=null&&C>0),A=w.length>1?Math.min(...w):null,R=w.length>1?Math.max(...w):null,I=.001,x=e.map(C=>{var G;const P=(G=C.items)==null?void 0:G.find(H=>H.itemId===h);if(!(P!=null&&P.available)||!P.usdPrice||!P.localPrice)return'<td class="gb-cell gb-na">—</td>';const O=s&&R!==null&&Math.abs(P.usdPrice-R)<I;return`<td class="gb-cell ${s&&A!==null&&Math.abs(P.usdPrice-A)<I?"gb-cheapest":O?"gb-priciest":""}">$${P.usdPrice.toFixed(2)}<span class="gb-local">${P.localPrice.toFixed(2)} ${r(C.currency)}</span></td>`}).join("");return`<tr><td class="gb-item-name">${r((y==null?void 0:y.itemName)??h)}<span class="gb-unit">${r((y==null?void 0:y.unit)??"")}</span></td>${x}</tr>`}).join(""),i=`<tr class="gb-total-row"><td class="gb-item-name"><strong>Observed total</strong></td>${e.map(h=>{const y=h.items.filter(S=>S.available&&S.usdPrice>0).length,w=s&&y===t.length&&y>0,A=w&&h.code===p.cheapestCountry,R=w&&h.code===p.mostExpensiveCountry,I=A?"gb-cheapest":R?"gb-priciest":"";let x="";if(w&&p.wowAvailable&&h.wowPct!=null){const S=h.wowPct>=0?"▲":"▼";x=`<span class="gb-wow ${h.wowPct>=0?"bm-wow-up":"bm-wow-down"}">${S}${Math.abs(h.wowPct).toFixed(1)}%</span>`}const $=y>0?`$${h.totalUsd.toFixed(2)}`:"—";return`<td class="gb-cell gb-total ${I}"><strong>${$}</strong><span class="gb-local">${y}/${t.length}</span>${x}</td>`}).join("")}</tr>`;let c="";if(s&&p.wowAvailable&&p.wowAvgPct!==void 0){const h=p.wowAvgPct,y=h>=0?"▲":"▼";c=`<div class="bm-wow-summary">Basket avg: <span class="${h>=0?"bm-wow-up":"bm-wow-down"}">${y}${Math.abs(h).toFixed(1)}% WoW</span></div>`}const d=p.fetchedAt?new Date(p.fetchedAt).toLocaleDateString():"",m=`
      <div class="gb-wrapper">
        <div class="bm-wow-summary">${s?"Rankings and WoW use full baskets.":"Awaiting standardized basket prices."}</div>
        ${c}
        <div class="gb-scroll table-scroll table-scroll-pinned-start" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table gb-table">
            <thead><tr><th scope="col" class="gb-item-col">${o("panels.groceryItem")}</th>${a}</tr></thead>
            <tbody>${l}${i}</tbody>
          </table>
        </div>
        ${d?`<div class="gb-updated">${o("components.status.updatedAt",{time:d})}</div>`:""}
      </div>
    `;this.setSafeContent(D(m,"legacy Panel.setContent() migration"))}}const ni=Object.freeze(Object.defineProperty({__proto__:null,GroceryBasketPanel:Ys},Symbol.toStringTag,{value:"Module"})),it=K(()=>new ce(Y(),{fetch:Q}));class Zs extends L{constructor(){super({id:"bigmac",title:o("panels.bigmac"),infoTooltip:o("components.bigmac.infoTooltip")})}async fetchData(){var p,e,t,s;try{const a=V("bigmac");if((p=a==null?void 0:a.countries)!=null&&p.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderIndex(a),it().listBigMacPrices({}).then(i=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=i.countries)!=null&&d.length)||this.renderIndex(i)}).catch(()=>{});return}const l=await it().listBigMacPrices({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderIndex(l)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(o("common.failedMarketData"),()=>void this.fetchData())}}renderIndex(p){var m,v,u;if(!((m=p.countries)!=null&&m.length)){this.showError(o("common.failedMarketData"),()=>void this.fetchData());return}const e=[...p.countries].filter(b=>b.usdPrice!=null&&b.usdPrice>0).sort((b,h)=>h.usdPrice-b.usdPrice),t=(v=e[0])==null?void 0:v.code,s=(u=e[e.length-1])==null?void 0:u.code,a=p.wowAvailable&&p.wowAvgPct!==void 0,l=a?`<th scope="col" class="gb-cell">${o("panels.bigmacWow")}</th>`:"",i=e.map(b=>{const h=b.code===s?"gb-cheapest":b.code===t?"gb-priciest":"";let y="";if(a){const w=b.wowPct??null;if(w==null)y='<td class="gb-cell gb-na">—</td>';else{const A=w>=0?"▲":"▼";y=`<td class="gb-cell ${w>=0?"bm-wow-up":"bm-wow-down"}">${A}${Math.abs(w).toFixed(1)}%</td>`}}return`<tr>
        <td class="gb-item-name">${r(b.flag)} ${r(b.name)}</td>
        <td class="gb-cell ${h}">$${b.usdPrice.toFixed(2)}</td>
        ${y}
      </tr>`}).join("");let c="";if(a){const b=p.wowAvgPct,h=b>=0?"▲":"▼";c=`<div class="bm-wow-summary">Global avg: <span class="${b>=0?"bm-wow-up":"bm-wow-down"}">${h}${Math.abs(b).toFixed(1)}% ${o("panels.bigmacWow")}</span></div>`}const d=p.fetchedAt?new Date(p.fetchedAt).toLocaleDateString():"",f=`
      <div class="gb-wrapper">
        ${c}
        <div class="gb-scroll table-scroll table-scroll-pinned-start" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table gb-table">
            <thead><tr>
              <th scope="col" class="gb-item-col">${o("panels.bigmacCountry")}</th>
              <th scope="col" class="gb-cell">USD</th>
              ${l}
            </tr></thead>
            <tbody>${i}</tbody>
          </table>
        </div>
        ${d?`<div class="gb-updated">${o("components.status.updatedAt",{time:d})}</div>`:""}
      </div>
    `;this.setSafeContent(D(f,"legacy Panel.setContent() migration"))}}const ri=Object.freeze(Object.defineProperty({__proto__:null,BigMacPanel:Zs},Symbol.toStringTag,{value:"Module"})),ke=K(()=>new ce(Y(),{fetch:Q})),De=480,Fe=140,oe=36,$t=12,wt=8,St=20,nt=De-oe-$t,rt=Fe-wt-St,Le=[{key:"ffpi",color:"#f5a623",label:"Food"},{key:"cereals",color:"#7ed321",label:"Cereals"},{key:"meat",color:"#e86c6c",label:"Meat"},{key:"dairy",color:"#74c8e8",label:"Dairy"},{key:"oils",color:"#b57ce8",label:"Oils"},{key:"sugar",color:"#f0c36a",label:"Sugar"}];function Ct(n,p){return p<=1?oe+nt/2:oe+n/(p-1)*nt}function At(n,p,e){const t=e-p||1;return wt+rt-(n-p)/t*rt}function Js(n,p,e,t){return n.map((a,l)=>{const i=a[p];return!Number.isFinite(i)||i<=0?null:`${Ct(l,n.length).toFixed(1)},${At(i,e,t).toFixed(1)}`}).filter(Boolean).join(" ")}function Qs(n){if(!n.length)return"";const p=[];for(const i of n)for(const c of Le){const d=i[c.key];Number.isFinite(d)&&d>0&&p.push(d)}const e=Math.floor(Math.min(...p)*.96),t=Math.ceil(Math.max(...p)*1.02),s=[0,1,2,3].map(i=>{const c=e+(t-e)/3*i,d=At(c,e,t);return`
      <line x1="${oe}" y1="${d.toFixed(1)}" x2="${De-$t}" y2="${d.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${(oe-3).toFixed(0)}" y="${d.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${c.toFixed(0)}</text>`}).join(""),a=n.map((i,c)=>{if(c%3!==0&&c!==n.length-1)return"";const d=Ct(c,n.length),f=i.date;return`<text x="${d.toFixed(1)}" y="${Fe-St+12}" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">${r(f)}</text>`}).join(""),l=Le.map(i=>{const c=Js(n,i.key,e,t);return c?`<polyline points="${c}" fill="none" stroke="${i.color}" stroke-width="${i.key==="ffpi"?2:1.2}" opacity="${i.key==="ffpi"?1:.7}"/>`:""}).join("");return`<svg viewBox="0 0 ${De} ${Fe}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="FAO food price index history by commodity group" style="width:100%;height:auto;display:block">${s}${a}${l}</svg>`}function Xs(){return Le.map(n=>`<span class="fao-legend-item"><span class="fao-legend-dot" style="background:${n.color}"></span>${r(o(`components.faoFoodPriceIndex.${n.key}`))}</span>`).join("")}class ea extends L{constructor(){super({id:"fao-food-price-index",defaultRowSpan:3,title:o("panels.faoFoodPriceIndex"),infoTooltip:o("components.faoFoodPriceIndex.infoTooltip")});g(this,"monthly",le("div",{className:"fao-monthly-context"}));g(this,"local",le("div"));g(this,"foodPrices");this.foodPrices=new ds(this.local),this.setContentNodes(this.local,this.monthly)}async fetchData(){await Promise.all([this.fetchMonthly(),this.fetchLocal()])}async fetchLocal(){try{const e=await ke().getFoodPrices({});if(this.element.isConnected){const t=e.sources??[];e.unavailable||t.length===0?this.foodPrices.showError(()=>void this.fetchLocal()):this.foodPrices.update(t)}}catch{this.element.isConnected&&this.foodPrices.showError(()=>void this.fetchLocal())}}async fetchMonthly(){var e,t,s,a;try{const l=V("faoFoodPriceIndex");if((e=l==null?void 0:l.points)!=null&&e.length){if(!((t=this.element)!=null&&t.isConnected))return;this.renderChart(l),ke().getFaoFoodPriceIndex({}).then(c=>{var d,f;!((d=this.element)!=null&&d.isConnected)||!((f=c.points)!=null&&f.length)||this.renderChart(c)}).catch(()=>{});return}const i=await ke().getFaoFoodPriceIndex({});if(!((s=this.element)!=null&&s.isConnected))return;this.renderChart(i)}catch(l){if(this.isAbortError(l)||!((a=this.element)!=null&&a.isConnected))return;this.showMonthlyError()}}showMonthlyError(){this.monthly.replaceChildren(le("p",{},o("common.failedMarketData")),le("button",{type:"button",onclick:()=>void this.fetchMonthly()},o("common.retry")))}renderChart(e){var v;if(!((v=e.points)!=null&&v.length)){this.showMonthlyError();return}const t=e.momPct>=0?"+":"",s=e.yoyPct>=0?"+":"",a=e.momPct>=0?"fao-up":"fao-down",l=e.yoyPct>=0?"fao-up":"fao-down",i=e.points[e.points.length-1],c=`
      <div class="fao-headline">
        <div class="fao-headline-primary">
          <span class="fao-index-value">${e.currentFfpi.toFixed(1)}</span>
          <span class="fao-index-label">${r(o("components.faoFoodPriceIndex.indexLabel"))}</span>
        </div>
        <div class="fao-headline-changes">
          <span class="fao-change ${a}">${t}${e.momPct.toFixed(1)}% ${r(o("components.faoFoodPriceIndex.mom"))}</span>
          <span class="fao-change ${l}">${s}${e.yoyPct.toFixed(1)}% ${r(o("components.faoFoodPriceIndex.yoy"))}</span>
        </div>
        <div class="fao-as-of">${r(o("components.faoFoodPriceIndex.asOf"))} ${r((i==null?void 0:i.date)??"")}</div>
      </div>`,d=Qs(e.points),f=`<div class="fao-legend">${Xs()}</div>`,m=`<div class="fao-base-note">${r(o("components.faoFoodPriceIndex.baseNote"))}</div>`;B(this.monthly,_(`<h3>${r(o("components.foodPrices.global"))}</h3><div class="fao-food-price-index-panel">${c}${d}${f}${m}</div>`,"Escaped FAO chart labels and numeric values"))}}const oi=Object.freeze(Object.defineProperty({__proto__:null,FaoFoodPriceIndexPanel:ea},Symbol.toStringTag,{value:"Module"})),ta={AFG:"🇦🇫",ALB:"🇦🇱",DZA:"🇩🇿",AGO:"🇦🇴",ARG:"🇦🇷",ARM:"🇦🇲",AUS:"🇦🇺",AUT:"🇦🇹",AZE:"🇦🇿",BHS:"🇧🇸",BHR:"🇧🇭",BGD:"🇧🇩",BLR:"🇧🇾",BEL:"🇧🇪",BLZ:"🇧🇿",BEN:"🇧🇯",BTN:"🇧🇹",BOL:"🇧🇴",BIH:"🇧🇦",BWA:"🇧🇼",BRA:"🇧🇷",BRN:"🇧🇳",BGR:"🇧🇬",BFA:"🇧🇫",BDI:"🇧🇮",CPV:"🇨🇻",KHM:"🇰🇭",CMR:"🇨🇲",CAN:"🇨🇦",CAF:"🇨🇫",TCD:"🇹🇩",CHL:"🇨🇱",CHN:"🇨🇳",COL:"🇨🇴",COM:"🇰🇲",COD:"🇨🇩",COG:"🇨🇬",CRI:"🇨🇷",CIV:"🇨🇮",HRV:"🇭🇷",CYP:"🇨🇾",CZE:"🇨🇿",DNK:"🇩🇰",DJI:"🇩🇯",DOM:"🇩🇴",ECU:"🇪🇨",EGY:"🇪🇬",SLV:"🇸🇻",GNQ:"🇬🇶",ERI:"🇪🇷",EST:"🇪🇪",SWZ:"🇸🇿",ETH:"🇪🇹",FJI:"🇫🇯",FIN:"🇫🇮",FRA:"🇫🇷",GAB:"🇬🇦",GMB:"🇬🇲",GEO:"🇬🇪",DEU:"🇩🇪",GHA:"🇬🇭",GRC:"🇬🇷",GTM:"🇬🇹",GIN:"🇬🇳",GNB:"🇬🇼",GUY:"🇬🇾",HTI:"🇭🇹",HND:"🇭🇳",HKG:"🇭🇰",HUN:"🇭🇺",ISL:"🇮🇸",IND:"🇮🇳",IDN:"🇮🇩",IRN:"🇮🇷",IRQ:"🇮🇶",IRL:"🇮🇪",ISR:"🇮🇱",ITA:"🇮🇹",JAM:"🇯🇲",JPN:"🇯🇵",JOR:"🇯🇴",KAZ:"🇰🇿",KEN:"🇰🇪",KOR:"🇰🇷",KWT:"🇰🇼",KGZ:"🇰🇬",LAO:"🇱🇦",LVA:"🇱🇻",LBN:"🇱🇧",LSO:"🇱🇸",LBR:"🇱🇷",LBY:"🇱🇾",LTU:"🇱🇹",LUX:"🇱🇺",MAC:"🇲🇴",MDG:"🇲🇬",MWI:"🇲🇼",MYS:"🇲🇾",MDV:"🇲🇻",MLI:"🇲🇱",MLT:"🇲🇹",MRT:"🇲🇷",MUS:"🇲🇺",MEX:"🇲🇽",MDA:"🇲🇩",MNG:"🇲🇳",MNE:"🇲🇪",MAR:"🇲🇦",MOZ:"🇲🇿",MMR:"🇲🇲",NAM:"🇳🇦",NPL:"🇳🇵",NLD:"🇳🇱",NZL:"🇳🇿",NIC:"🇳🇮",NER:"🇳🇪",NGA:"🇳🇬",MKD:"🇲🇰",NOR:"🇳🇴",OMN:"🇴🇲",PAK:"🇵🇰",PAN:"🇵🇦",PNG:"🇵🇬",PRY:"🇵🇾",PER:"🇵🇪",PHL:"🇵🇭",POL:"🇵🇱",PRT:"🇵🇹",QAT:"🇶🇦",ROU:"🇷🇴",RUS:"🇷🇺",RWA:"🇷🇼",SAU:"🇸🇦",SEN:"🇸🇳",SRB:"🇷🇸",SLE:"🇸🇱",SGP:"🇸🇬",SVK:"🇸🇰",SVN:"🇸🇮",SOM:"🇸🇴",ZAF:"🇿🇦",SSD:"🇸🇸",ESP:"🇪🇸",LKA:"🇱🇰",SDN:"🇸🇩",SUR:"🇸🇷",SWE:"🇸🇪",CHE:"🇨🇭",TWN:"🇹🇼",TJK:"🇹🇯",TZA:"🇹🇿",THA:"🇹🇭",TLS:"🇹🇱",TGO:"🇹🇬",TTO:"🇹🇹",TUN:"🇹🇳",TUR:"🇹🇷",TKM:"🇹🇲",UGA:"🇺🇬",UKR:"🇺🇦",ARE:"🇦🇪",GBR:"🇬🇧",USA:"🇺🇸",URY:"🇺🇾",UZB:"🇺🇿",VEN:"🇻🇪",VNM:"🇻🇳",YEM:"🇾🇪",ZMB:"🇿🇲",ZWE:"🇿🇼"},sa={AFG:"Afghanistan",ALB:"Albania",DZA:"Algeria",AGO:"Angola",ARG:"Argentina",ARM:"Armenia",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BTN:"Bhutan",BOL:"Bolivia",BIH:"Bosnia & Herzegovina",BWA:"Botswana",BRA:"Brazil",BRN:"Brunei",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",CPV:"Cabo Verde",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",CAF:"Central African Rep.",TCD:"Chad",CHL:"Chile",CHN:"China",COL:"Colombia",COM:"Comoros",COD:"Dem. Rep. Congo",COG:"Congo",CRI:"Costa Rica",CIV:"Cote d'Ivoire",HRV:"Croatia",CYP:"Cyprus",CZE:"Czech Republic",DNK:"Denmark",DJI:"Djibouti",DOM:"Dominican Rep.",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",SWZ:"Eswatini",ETH:"Ethiopia",FJI:"Fiji",FIN:"Finland",FRA:"France",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GRC:"Greece",GTM:"Guatemala",GIN:"Guinea",GNB:"Guinea-Bissau",GUY:"Guyana",HTI:"Haiti",HND:"Honduras",HKG:"Hong Kong SAR",HUN:"Hungary",ISL:"Iceland",IND:"India",IDN:"Indonesia",IRN:"Iran",IRQ:"Iraq",IRL:"Ireland",ISR:"Israel",ITA:"Italy",JAM:"Jamaica",JPN:"Japan",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KOR:"Korea (South)",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Laos",LVA:"Latvia",LBN:"Lebanon",LSO:"Lesotho",LBR:"Liberia",LBY:"Libya",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao SAR",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MRT:"Mauritania",MUS:"Mauritius",MEX:"Mexico",MDA:"Moldova",MNG:"Mongolia",MNE:"Montenegro",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NPL:"Nepal",NLD:"Netherlands",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",MKD:"North Macedonia",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",POL:"Poland",PRT:"Portugal",QAT:"Qatar",ROU:"Romania",RUS:"Russia",RWA:"Rwanda",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SLE:"Sierra Leone",SGP:"Singapore",SVK:"Slovakia",SVN:"Slovenia",SOM:"Somalia",ZAF:"South Africa",SSD:"South Sudan",ESP:"Spain",LKA:"Sri Lanka",SDN:"Sudan",SUR:"Suriname",SWE:"Sweden",CHE:"Switzerland",TWN:"Taiwan",TJK:"Tajikistan",TZA:"Tanzania",THA:"Thailand",TLS:"Timor-Leste",TGO:"Togo",TTO:"Trinidad & Tobago",TUN:"Tunisia",TUR:"Turkey",TKM:"Turkmenistan",UGA:"Uganda",UKR:"Ukraine",ARE:"United Arab Emirates",GBR:"United Kingdom",USA:"United States",URY:"Uruguay",UZB:"Uzbekistan",VEN:"Venezuela",VNM:"Vietnam",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"};function aa(n){return ta[n]??"🌐"}function ot(n){return sa[n]??n}function pe(n){return!Number.isFinite(n)||n<=0?"$0":n>=1e12?`$${(n/1e12).toFixed(1)}T`:n>=1e9?`$${(n/1e9).toFixed(1)}B`:n>=1e6?`$${(n/1e6).toFixed(1)}M`:`$${Math.round(n).toLocaleString()}`}function ie(n){if(!n.perSecondRate||!n.baselineTs)return n.debtUsd??0;const p=(Date.now()-Number(n.baselineTs))/1e3;return(n.debtUsd??0)+n.perSecondRate*p}function ia(n,p){const e=[...n];return p==="total"?e.sort((t,s)=>ie(s)-ie(t)):p==="gdp-ratio"?e.sort((t,s)=>(s.debtToGdp??0)-(t.debtToGdp??0)):p==="growth"&&e.sort((t,s)=>(s.annualGrowth??0)-(t.annualGrowth??0)),e}const ae=20,fe=class fe extends L{constructor(){super({id:"national-debt",title:"National Debt Clock",showCount:!0,infoTooltip:"Live national debt estimates for 150+ countries. Data anchored at 2024-01-01 and accruing using IMF deficit projections."});g(this,"entries",[]);g(this,"filteredEntries",[]);g(this,"sortMode","total");g(this,"searchQuery","");g(this,"loading",!1);g(this,"lastFetch",0);g(this,"visibleCount",ae);g(this,"tickerInterval",null);g(this,"tickerElements",new Map);g(this,"lastTickerValues",new Map);g(this,"connectRefreshQueued",!1);g(this,"connectionObserver",null);g(this,"connectRetryFrames",0);g(this,"REFRESH_INTERVAL",360*60*1e3);this.content.addEventListener("click",e=>{const t=e.target,s=t.closest("[data-sort]");if(s!=null&&s.dataset.sort){this.sortMode=s.dataset.sort,this.visibleCount=ae,this.applyFilters(),this.render();return}t.closest(".debt-load-more")&&(this.visibleCount+=ae,this.render())}),this.content.addEventListener("input",e=>{const t=e.target;t.classList.contains("debt-search")&&(this.searchQuery=t.value,this.visibleCount=ae,this.applyFilters(),this.render())})}async refresh(){var e,t,s;if(!this.loading&&!(Date.now()-this.lastFetch<this.REFRESH_INTERVAL&&this.entries.length>0)){if(!((e=this.element)!=null&&e.isConnected)){this.queueRefreshWhenConnected();return}this.loading=!0,this.showLoadingState();try{const a=await It();if(!((t=this.element)!=null&&t.isConnected)){this.queueRefreshWhenConnected();return}this.entries=a.entries??[],this.lastFetch=Date.now(),this.applyFilters(),this.setCount(this.filteredEntries.length),this.render()}catch(a){if(!((s=this.element)!=null&&s.isConnected))return;console.error("[NationalDebtPanel] Error fetching data:",a),this.showError("Failed to load national debt data")}finally{this.loading=!1}}}queueRefreshWhenConnected(){if(this.connectRefreshQueued)return;this.connectRefreshQueued=!0;const e=()=>{var s,a;return(s=this.element)!=null&&s.isConnected?(this.connectRefreshQueued=!1,this.connectRetryFrames=0,(a=this.connectionObserver)==null||a.disconnect(),this.connectionObserver=null,this.refresh(),!0):!1};if(e())return;if(typeof MutationObserver<"u"){const s=document.body??document.documentElement;if(s){const a=new MutationObserver(()=>{e()});a.observe(s,{childList:!0,subtree:!0}),this.connectionObserver=a;return}}(typeof requestAnimationFrame=="function"?requestAnimationFrame:s=>(globalThis.setTimeout(()=>s(Date.now()),0),0))(()=>{var s;if(this.connectRefreshQueued=!1,(s=this.element)!=null&&s.isConnected){this.connectRetryFrames=0,this.refresh();return}if(this.connectRetryFrames>=fe.MAX_CONNECT_RETRY_FRAMES){this.connectRetryFrames=0;return}this.connectRetryFrames+=1,this.queueRefreshWhenConnected()})}showLoadingState(){this.setSafeContent(D(`
      <div style="display:flex;align-items:center;justify-content:center;height:80px;color:var(--text-dim);font-size:calc(13px * var(--wm-panel-effective-scale, 1));">
        Loading debt data from IMF...
      </div>
    `,"legacy Panel.setContent() migration"))}applyFilters(){const e=this.searchQuery.toLowerCase().trim(),t=e?this.entries.filter(s=>s.iso3.toLowerCase().includes(e)||ot(s.iso3).toLowerCase().includes(e)):this.entries;this.filteredEntries=ia(t,this.sortMode)}get deficitCount(){return this.entries.filter(e=>e.perSecondRate>0).length}get surplusCount(){return this.entries.filter(e=>e.perSecondRate===0).length}getGlobalDebt(){return this.entries.reduce((e,t)=>e+ie(t),0)}getSourceLabel(){var t;let e="";for(const s of this.entries){const a=(t=s.source)==null?void 0:t.trim();a&&a.length>e.length&&(e=a)}return e||"IMF WEO"}render(){if(this.entries.length===0){this.stopTicker(),this.showError("No data available");return}const e=`
      <div class="debt-panel-container">
        <div class="debt-summary">
          <div class="debt-summary-card debt-summary-card-deficit debt-summary-card-world">
            <span class="debt-summary-label">World Debt</span>
            <span class="debt-summary-value debt-global-ticker">${r(pe(this.getGlobalDebt()))}</span>
          </div>
          <div class="debt-summary-card debt-summary-card-warning">
            <span class="debt-summary-label">In Deficit</span>
            <span class="debt-summary-value">${this.deficitCount}</span>
          </div>
          <div class="debt-summary-card debt-summary-card-surplus">
            <span class="debt-summary-label">Running Surplus</span>
            <span class="debt-summary-value">${this.surplusCount}</span>
          </div>
        </div>
        <div class="debt-controls">
          <div class="debt-sort-tabs">
            <button class="debt-tab${this.sortMode==="total"?" active":""}" data-sort="total">Total Debt</button>
            <button class="debt-tab${this.sortMode==="gdp-ratio"?" active":""}" data-sort="gdp-ratio">Debt/GDP</button>
            <button class="debt-tab${this.sortMode==="growth"?" active":""}" data-sort="growth">1Y Growth</button>
          </div>
          <input class="debt-search" type="text" placeholder="Search country..." value="${r(this.searchQuery)}">
        </div>
        <div class="debt-list">
          ${this.filteredEntries.slice(0,this.visibleCount).map((t,s)=>this.renderRow(t,s+1)).join("")}
        </div>
        ${this.visibleCount<this.filteredEntries.length?`
        <button class="debt-load-more">
          Load ${Math.min(ae,this.filteredEntries.length-this.visibleCount)} more
          <span class="debt-load-more-count">(${this.filteredEntries.length-this.visibleCount} remaining)</span>
        </button>`:""}
        <div class="debt-footer">
          <span class="debt-source">Source: ${r(this.getSourceLabel())}</span>
          <span class="debt-updated">Updated: ${new Date(this.lastFetch).toLocaleDateString()}</span>
        </div>
      </div>
    `;this.setSafeContent(D(e,"legacy Panel.setContent() migration"),()=>this.startTicker())}renderRow(e,t){const s=ie(e),a=r(ot(e.iso3)),l=aa(e.iso3),i=pe(s),c=Number.isFinite(e.debtToGdp)&&e.debtToGdp>0?`${e.debtToGdp.toFixed(1)}%`:"—",d=Number.isFinite(e.annualGrowth)&&e.annualGrowth!==0?`${e.annualGrowth>0?"+":""}${e.annualGrowth.toFixed(1)}%`:"—",f=e.annualGrowth>5?"debt-growth-high":e.annualGrowth>0?"debt-growth-mid":"";return`
      <div class="debt-row" data-iso3="${r(e.iso3)}">
        <div class="debt-rank">${t}</div>
        <div class="debt-flag">${l}</div>
        <div class="debt-info">
          <div class="debt-name">${a}</div>
          <div class="debt-meta">
            <span class="debt-ratio">${c} of GDP</span>
            <span class="debt-growth ${f}">${d} year over year</span>
          </div>
        </div>
        <div class="debt-ticker" data-iso3="${r(e.iso3)}">${r(i)}</div>
      </div>
    `}startTicker(){if(this.stopTicker(),this.filteredEntries.length===0)return;this.tickerElements.clear(),this.lastTickerValues.clear();const e=this.content.querySelector(".debt-global-ticker");e&&this.tickerElements.set("__global__",e);const t=this.content.querySelector(".debt-list");if(t)for(const s of this.filteredEntries.slice(0,this.visibleCount)){const a=t.querySelector(`.debt-ticker[data-iso3="${s.iso3}"]`);a&&this.tickerElements.set(s.iso3,a)}this.tickerInterval=setInterval(()=>{const s=this.tickerElements.get("__global__");if(s){const a=pe(this.getGlobalDebt());this.lastTickerValues.get("__global__")!==a&&(s.textContent=a,this.lastTickerValues.set("__global__",a))}for(const a of this.filteredEntries.slice(0,this.visibleCount)){const l=this.tickerElements.get(a.iso3);if(!l)continue;const i=pe(ie(a));this.lastTickerValues.get(a.iso3)!==i&&(l.textContent=i,this.lastTickerValues.set(a.iso3,i))}},1e3)}stopTicker(){this.tickerInterval!==null&&(clearInterval(this.tickerInterval),this.tickerInterval=null),this.tickerElements.clear(),this.lastTickerValues.clear()}destroy(){var e;(e=this.connectionObserver)==null||e.disconnect(),this.connectionObserver=null,this.connectRefreshQueued=!1,this.connectRetryFrames=0,this.stopTicker(),super.destroy()}};g(fe,"MAX_CONNECT_RETRY_FRAMES",8);let Me=fe;const ci=Object.freeze(Object.defineProperty({__proto__:null,NationalDebtPanel:Me},Symbol.toStringTag,{value:"Module"})),na=K(()=>new ce(Y(),{fetch:Q}));function W(n){return`${n.toFixed(1)}%`}function ra(n){return`$${n.toLocaleString(void 0,{maximumFractionDigits:0})}B`}function oa(n){if(n.length<13)return{value:null,prior:null,date:""};const p=n[n.length-1],e=n[n.length-13],t=n[n.length-2],s=n[n.length-14]??n[n.length-13];if(!p||!e)return{value:null,prior:null,date:""};const a=e.value>0?(p.value-e.value)/e.value*100:null,l=s&&t&&s.value>0?(t.value-s.value)/s.value*100:null;return{value:a,prior:l,date:p.date}}function he(n){const p=n[n.length-1];if(!n.length||!p)return{value:null,prior:null,date:""};const e=n[n.length-2];return{value:p.value,prior:(e==null?void 0:e.value)??null,date:p.date}}function ca(n,p,e){return e||n===0?"neutral":(p?n<0:n>0)?"positive":"negative"}function ct(n){const p=n.value!==null?r(n.format(n.value)):"N/A",e=n.value!==null&&n.prior!==null?n.value-n.prior:null,t=n.deltaFormat??n.format,s=e!==null?`${e>=0?"+":""}${t(e)} vs prior`:"",a=e!==null?ca(e,n.lowerIsBetter,n.neutral??!1):"neutral";return`<div class="macro-summary-card">
    <div class="macro-summary-head">
      <span class="indicator-name">${r(n.label)}</span>
    </div>
    <div class="macro-summary-value">${p}</div>
    ${s?`<div class="macro-summary-change ${a}">${r(s)}</div>`:""}
    <div class="indicator-date">${r(n.date)}</div>
  </div>`}const la=["DE","FR","IT","ES"];function da(n){if(!n)return"";const p=/^(\d{4})-(\d{2})$/.exec(n);if(p){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(p[2]??"0",10)-1];return t?`${t} ${p[1]??n}`:n}return n}function Ee(n,p){var i;const e=[],t=[];let s="";for(const c of la){const d=(i=n.countries[c])==null?void 0:i[p];d&&typeof d.value=="number"&&Number.isFinite(d.value)&&(e.push(d.value),(!s||d.date>s)&&(s=d.date)),d!=null&&d.hasPrior&&Number.isFinite(d.priorValue)&&t.push(d.priorValue)}if(e.length===0)return{value:null,prior:null,date:""};const a=Math.round(e.reduce((c,d)=>c+d,0)/e.length*100)/100,l=t.length===e.length?Math.round(t.reduce((c,d)=>c+d,0)/t.length*100)/100:null;return{value:a,prior:l,date:da(s)}}class ua extends L{constructor(){super({id:"macro-tiles",title:"Macro Indicators",showCount:!1,infoTooltip:o("components.macroTiles.infoTooltip")});g(this,"_hasData",!1);g(this,"_tab","us");g(this,"_usTiles",[]);g(this,"_eurostat",null);g(this,"_estrObs",[]);g(this,"_china",null);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");((t==null?void 0:t.dataset.tab)==="us"||(t==null?void 0:t.dataset.tab)==="eu"||(t==null?void 0:t.dataset.tab)==="cn")&&(this._tab=t.dataset.tab,this._render())}),this.content.addEventListener("keydown",e=>{if(!(e instanceof KeyboardEvent))return;const t=e.target.closest('[role="tab"][data-tab]');if(!t||!["ArrowRight","ArrowLeft","Home","End"].includes(e.key))return;const s=this._availableTabs(),a=s.indexOf(t.dataset.tab);if(a<0)return;e.preventDefault();const l=e.key==="Home"?s[0]:e.key==="End"?s[s.length-1]:s[(a+(e.key==="ArrowRight"?1:-1)+s.length)%s.length];l&&(this._tab=l,this._render(()=>{var i;(i=this.content.querySelector(`[data-tab="${l}"]`))==null||i.focus()}))})}async fetchData(){var e,t,s,a,l;this.showLoading();try{const i=na(),c=V("chinaMacro"),d=V("chinaReleaseCalendar"),f=us(c,d),[m,v,u]=await Promise.allSettled([i.getFredSeriesBatch({seriesIds:["CPIAUCSL","UNRATE","GDP","FEDFUNDS","ESTR"],limit:14}),Dt(),f??i.getChinaMacroSnapshot({})]),b=m.status==="fulfilled"?m.value.results??{}:{};this._estrObs=((e=b.ESTR)==null?void 0:e.observations)??[],v.status==="fulfilled"&&!v.value.unavailable&&(this._eurostat=v.value),this._china=u.status==="fulfilled"?u.value:null;const h=oa(((t=b.CPIAUCSL)==null?void 0:t.observations)??[]),y=he(((s=b.UNRATE)==null?void 0:s.observations)??[]),w=he(((a=b.GDP)==null?void 0:a.observations)??[]),A=he(((l=b.FEDFUNDS)==null?void 0:l.observations)??[]);this._usTiles=[{id:"cpi",label:"Consumer price inflation (annual)",...h,lowerIsBetter:!0,format:W,deltaFormat:$=>$.toFixed(2)},{id:"unrate",label:"Unemployment",...y,lowerIsBetter:!0,format:W},{id:"gdp",label:"Economic output (billions)",...w,lowerIsBetter:!1,format:ra,deltaFormat:$=>`${$.toLocaleString(void 0,{maximumFractionDigits:0})}B`},{id:"fed",label:"Fed Funds Rate",...A,lowerIsBetter:!1,neutral:!0,format:W}];const R=this._usTiles.some($=>$.value!==null),I=this._eurostat!==null,x=Se(this._china);return!R&&!I&&!x?(this._hasData||this.showError("Macro data unavailable",()=>void this.fetchData()),!1):(!R&&this._tab==="us"&&(this._tab=x?"cn":"eu"),!x&&this._tab==="cn"&&(this._tab=R?"us":"eu"),this._hasData=!0,this._render(),!0)}catch(i){return this._hasData||this.showError(i instanceof Error?i.message:"Failed to load",()=>void this.fetchData()),!1}}_render(e){const t=this._availableTabs(),s={us:"US",eu:"Euro Area",cn:"China"},a=`<div class="panel-tabs macro-tiles-tabs" role="tablist" aria-label="Macro economy">
      ${t.map(c=>`<button type="button" id="macro-tiles-tab-${c}" role="tab" aria-selected="${this._tab===c}" aria-controls="macro-tiles-tabpanel" tabindex="${this._tab===c?"0":"-1"}" class="panel-tab${this._tab===c?" active":""}" data-tab="${c}">${s[c]}</button>`).join("")}
    </div>`;let l;this._tab==="us"?l=`<div class="macro-summary-grid">${this._usTiles.map(ct).join("")}</div>`:this._tab==="eu"?l=this._buildEuBody():l=this._buildChinaBody();const i=`macro-tiles-tab-${this._tab}`;this.setSafeContent(D(`${a}<div id="macro-tiles-tabpanel" class="macro-tiles-tabpanel" role="tabpanel" aria-labelledby="${i}">${l}</div>`,"legacy Panel.setContent() migration"),e)}_availableTabs(){return Se(this._china)?["us","eu","cn"]:["us","eu"]}_buildChinaBody(){if(!Se(this._china)||!this._china)return'<div class="macro-summary-empty">China macro data unavailable</div>';const e=ps(this._china)?"":'<div class="macro-quality-note macro-quality-note--degraded" role="status">Official China macro pulse is degraded; stale or delayed observations remain visible below.</div>',t=this._china.indicators.map(hs).join(""),s=new Date().toISOString().slice(0,10),a=this._china.releaseEvents.filter(i=>i.countryCode==="CN"&&i.releaseDate>=s).sort((i,c)=>i.releaseDate.localeCompare(c.releaseDate)).slice(0,3),l=a.length>0?`<section class="macro-release-calendar" aria-label="China release calendar">
          <div class="macro-release-calendar__heading">China release calendar</div>
          ${a.map(i=>`<div class="macro-release-calendar__event"><span>${r(i.event)}</span><span>${r(i.releaseDate)} · ${r(i.status)}</span></div>`).join("")}
        </section>`:'<div class="macro-release-calendar__empty">China release calendar unavailable</div>';return`${e}<div class="macro-summary-grid macro-summary-grid--china">${t}</div>${l}`}_buildEuBody(){if(!this._eurostat)return'<div class="macro-summary-empty">Euro Area data unavailable</div>';const e=Ee(this._eurostat,"cpi"),t=Ee(this._eurostat,"unemployment"),s=Ee(this._eurostat,"gdpGrowth"),a=he(this._estrObs),l=[{id:"eu-cpi",label:"Harmonised consumer price inflation (annual)",value:e.value,prior:e.prior,date:e.date,lowerIsBetter:!0,format:W},{id:"eu-un",label:"Unemployment",value:t.value,prior:t.prior,date:t.date,lowerIsBetter:!0,format:W},{id:"eu-gdp",label:"Economic growth (quarterly)",value:s.value,prior:s.prior,date:s.date,lowerIsBetter:!1,format:W},{id:"eu-estr",label:"Euro short-term rate",...a,lowerIsBetter:!1,neutral:!0,format:W}];return l.some(i=>i.value!==null)?`<div class="macro-summary-grid">${l.map(ct).join("")}</div>
      <div class="economic-source macro-summary-source">Eurostat · ECB · avg DE, FR, IT, ES</div>`:'<div class="macro-summary-empty">Euro Area data unavailable</div>'}}const li=Object.freeze(Object.defineProperty({__proto__:null,MacroTilesPanel:ua},Symbol.toStringTag,{value:"Module"})),pa=K(()=>new mt(Y(),{fetch:Q})),ha=K(()=>new ce(Y(),{fetch:Q}));function ma(n){return n==="Low Stress"?"#27ae60":n==="Moderate Stress"?"#f39c12":n==="Elevated Stress"?"#e67e22":"#c0392b"}function va(n){return n==="Low Stress"?o("components.fsi.interpretation.low"):n==="Moderate Stress"?o("components.fsi.interpretation.moderate"):n==="Elevated Stress"?o("components.fsi.interpretation.elevated"):o("components.fsi.interpretation.severe")}function Tt(n){return n==="Low Stress"?o("components.fsi.labels.lowStress"):n==="Moderate Stress"?o("components.fsi.labels.moderateStress"):n==="Elevated Stress"?o("components.fsi.labels.elevatedStress"):n==="Severe Stress"||n==="High Stress"?o("components.fsi.labels.severeStress"):n}function fa(n){return n==="Low"?o("components.fsi.cissLabels.low"):n==="Moderate"?o("components.fsi.cissLabels.moderate"):n==="Elevated"?o("components.fsi.cissLabels.elevated"):n==="High"?o("components.fsi.cissLabels.high"):n}function lt(n){return n==="Low"?"#27ae60":n==="Moderate"?"#f39c12":n==="Elevated"?"#e67e22":"#c0392b"}function ga(n){const p=Date.parse(n);return Number.isFinite(p)?Date.now()-p>ms:!1}function me(n,p){return`<div style="background:rgba(255,255,255,0.04);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.07)">
    <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">${r(n)}</div>
    <div style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text)">${r(p)}</div>
  </div>`}class ba extends L{constructor(){super({id:"fsi",title:o("components.fsi.title"),showCount:!1,infoTooltip:o("components.fsi.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){var e,t,s,a,l,i;this.showLoading();try{const c=V("fearGreedIndex");let d=0,f="",m=0,v=0,u=0,b=0;if(c&&!c.unavailable){const y=c.headerMetrics??{};d=Number(((e=y==null?void 0:y.fsi)==null?void 0:e.value)??0),f=String(((t=y==null?void 0:y.fsi)==null?void 0:t.label)??""),m=Number(((s=y==null?void 0:y.fsi)==null?void 0:s.hygPrice)??0),v=Number(((a=y==null?void 0:y.fsi)==null?void 0:a.tltPrice)??0),Number.isFinite(m)||(m=0),Number.isFinite(v)||(v=0),u=Number(((l=y==null?void 0:y.vix)==null?void 0:l.value)??0),b=Number(((i=y==null?void 0:y.hySpread)==null?void 0:i.value)??0)}if(d<=0){const w=await pa().getFearGreedIndex({});!w.unavailable&&w.fsiValue>0&&(d=w.fsiValue,f=w.fsiLabel,m=w.hygPrice,v=w.tltPrice,u=w.vix,b=w.hySpread)}if(d<=0)return this._hasData||this.showError(o("components.fsi.errors.unavailable"),()=>void this.fetchData()),!1;let h=null;try{const y=V("euFsi");if(y&&!y.unavailable&&Number.isFinite(y.latestValue))h=y;else{const A=await ha().getEuFsi({});!A.unavailable&&Number.isFinite(A.latestValue)&&(h=A)}}catch{}return this._hasData=!0,this.render({fsiValue:d,fsiLabel:f,hygPrice:m,tltPrice:v,vix:u,hySpread:b},h),!0}catch(c){return this._hasData||this.showError(c instanceof Error?c.message:o("components.fsi.errors.failedToLoad"),()=>void this.fetchData()),!1}}render(e,t){const{fsiValue:s,fsiLabel:a,hygPrice:l,tltPrice:i,vix:c,hySpread:d}=e,f=ma(a),m=Math.min(Math.max(s/2.5*100,0),100),v=va(a),u=t?t.stale||ga(t.latestDate):!1,b=t?`<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.07)">
          <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px">${r(o("components.fsi.cissTitle"))}</div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
            <div style="font-size:calc(28px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${lt(t.label)};line-height:1">${t.latestValue.toFixed(4)}</div>
            <div>
              <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${lt(t.label)}">${r(fa(t.label))}</div>
              <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:${u?"#e67e22":"var(--text-dim)"}">${r(t.latestDate?new Date(t.latestDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"")}</div>
            </div>
          </div>
          ${u?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:#e67e22;background:rgba(230,126,34,0.1);border-radius:4px;padding:4px 6px;margin-bottom:8px">⚠ ${r(o("components.fsi.cissStale"))}</div>`:""}
          <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:6px;overflow:hidden">
            <div style="height:100%;width:${(t.latestValue*100).toFixed(1)}%;background:linear-gradient(90deg,#27ae60,#f39c12,#c0392b);border-radius:4px"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:3px">
            <span>${r(o("components.fsi.scale.noStress"))}</span><span>${r(o("components.fsi.scale.extremeStress"))}</span>
          </div>
        </div>`:"",h=`<div style="padding:12px 0">
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:4px">${r(o("components.fsi.usFsiValue"))}</div>
        <div style="font-size:calc(36px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${f};line-height:1">${s.toFixed(4)}</div>
        <div style="font-size:calc(13px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${f};margin-top:4px">${r(Tt(a))}</div>
      </div>
      <div style="margin:0 0 12px">
        <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:3px">
          <span>${r(o("components.fsi.scale.highStress"))}</span><span>${r(o("components.fsi.scale.lowStress"))}</span>
        </div>
        <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:8px;overflow:hidden">
          <div style="height:100%;width:${m.toFixed(1)}%;background:linear-gradient(90deg,#c0392b,#f39c12,#27ae60);border-radius:4px"></div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px">
        ${me(o("components.fsi.metrics.vix"),c>0?c.toFixed(2):o("components.fsi.notAvailable"))}
        ${me(o("components.fsi.metrics.hySpread"),d>0?d.toFixed(2)+"%":o("components.fsi.notAvailable"))}
        ${me(o("components.fsi.metrics.hygPrice"),l>0?"$"+l.toFixed(2):o("components.fsi.notAvailable"))}
        ${me(o("components.fsi.metrics.tltPrice"),i>0?"$"+i.toFixed(2):o("components.fsi.notAvailable"))}
      </div>
      <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);background:rgba(255,255,255,0.03);border-radius:6px;padding:8px 10px;border-left:3px solid ${f}">
        ${r(v)}
      </div>
      ${b}
    </div>`;this.setSafeContent(D(h,"legacy Panel.setContent() migration"))}}const di=Object.freeze(Object.defineProperty({__proto__:null,FSIPanel:ba,fsiLabelDisplay:Tt},Symbol.toStringTag,{value:"Module"}));export{ri as B,Ja as C,Ya as E,oi as F,Za as G,ai as I,li as M,ci as N,Xa as S,Qa as T,ei as a,ti as b,si as c,ii as d,ni as e,di as f};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["panels-economy-B63qyRcp.js"]=1;