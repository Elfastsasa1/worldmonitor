const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D3TAJW85.js","assets/index-BhmrbbBS.js","assets/theme-colors-ToRFEbn-.js","assets/clerk-CAuJ7nO4.js","assets/web-origin-CYWcatKL.js","assets/i18n-qlunRAMb.js","assets/i18n-url-C-jHRZJm.js","assets/safe-storage-D7AmwIPS.js","assets/map-layer-definitions-BCWegBzb.js","assets/persistent-cache-CQ4JFXkz.js","assets/tauri-bridge-CDOUxP2F.js","assets/storage-quota-BtyHkWgJ.js","assets/debugbear-rum-EsMiF_vs.js","assets/sensitive-url-params-D8a3nWur.js","assets/widget-store-iHraSiA2.js","assets/index-uHNHG_pv.js","assets/panel-storage-BeMdmZSX.js","assets/auth-state-DLqMTLIu.js","assets/entitlements-iEraPnPS.js","assets/convex-client-C_8ewSzp.js","assets/gdelt-intel-DU-_Fjx7.js","assets/runtime-config-tgv8gRzl.js","assets/sanitize-D7dx0cA1.js","assets/corroboration-CzofwUIz.js","assets/source-provenance-hRte-cNu.js","assets/panel-gating-B4-XUkuA.js","assets/analytics-UdF1aNpQ.js","assets/fx-rates-CeS5uvx2.js"])))=>i.map(i=>d[i]);
var Kt=Object.defineProperty;var Qt=(a,i,e)=>i in a?Kt(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e;var g=(a,i,e)=>Qt(a,typeof i!="symbol"?i+"":i,e);import{P as _}from"./Panel-CJQVCfYg.js";import{t as d,S as He,b as wt,L as St,g as _t}from"./theme-colors-ToRFEbn-.js";import{s as Jt,a as Zt}from"./_sparkline-span-Bv_WKQ5H.js";import{av as M,aO as ze,aP as O,aQ as kt,aR as ea,aS as ta,aT as aa,aU as sa,aV as ia,aW as na,aX as ra,aY as Ct,aZ as qe,a_ as W,a$ as oa,b0 as la,b1 as ca}from"./App-DyLzL2rx.js";import"./map-layer-definitions-BCWegBzb.js";import{_ as da}from"./clerk-CAuJ7nO4.js";import{e as o,u as w,s as pa,a as k,j as z}from"./sanitize-D7dx0cA1.js";import{m as K,s as ma}from"./sparkline-BTOgeOir.js";import"./markets-DAj2UmR6.js";import"./feeds-aP-ckBfk.js";import"./panels-XFlv2Kkw.js";import{c as Oe}from"./watchlist-modal-ONO47yHn.js";import{r as ua,c as fa,g as ha,P as Z,o as va}from"./market-chart-modal-DwcAA_yC.js";import{g as F,a as I,b as ga,c as ya,d as ba,e as xa,f as $a,h as wa,i as Sa}from"./stock-fundamentals-display-BdKFnC_N.js";import{W as Et}from"./WatchlistTableView-DAhbLluU.js";import{f as _a}from"./wsb-tickers-SxLT2krS.js";import{describeFreshness as ka}from"./persistent-cache-CQ4JFXkz.js";import{F as Ca}from"./FrameworkSelector-TAlZ4ycO.js";import{h as Ea}from"./panel-gating-B4-XUkuA.js";import{b as Pa}from"./activation-DdoRK80V.js";import{F as Aa}from"./fx-rates-CeS5uvx2.js";import{b as U,a as A,E as fe,g as E,r as R,M as N,e as Da,I as Ra}from"./index-BhmrbbBS.js";import{E as Fa,J as Ta,K as Pt}from"./gdelt-intel-DU-_Fjx7.js";import{i as Ma,a as Na,p as Pe}from"./news-market-correlation-CaMZ0E_r.js";import{fetchMultipleStocks as Ia}from"./index-m5ca7NjE.js";import{a as Ae,c as me,i as La}from"./web-origin-CYWcatKL.js";import{f as za,c as Oa,n as Ba,o as Ua}from"./nq-pulse-content-DPaSxkC0.js";import{n as Ye,c as ja,f as Ga,a as Ha}from"./nq-catalysts-content-DF3hxAoZ.js";const qa={MARKET_QUOTE_UNAVAILABLE_REASON_UNSPECIFIED:"components.markets.unavailable.notFound",MARKET_QUOTE_UNAVAILABLE_REASON_NOT_FOUND:"components.markets.unavailable.notFound",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_ERROR:"components.markets.unavailable.providerError",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_RATE_LIMITED:"components.markets.unavailable.rateLimited",MARKET_QUOTE_UNAVAILABLE_REASON_PROVIDER_NOT_CONFIGURED:"components.markets.unavailable.notConfigured",MARKET_QUOTE_UNAVAILABLE_REASON_REQUEST_LIMIT_EXCEEDED:"components.markets.unavailable.requestLimit",MARKET_QUOTE_UNAVAILABLE_REASON_UPSTREAM_BUDGET_EXHAUSTED:"components.markets.unavailable.budget",MARKET_QUOTE_UNAVAILABLE_REASON_SEED_UNAVAILABLE:"components.markets.unavailable.seed"};function Ya(a){const i=d(qa[a.reason]??"components.markets.unavailable.notFound"),e=a.symbols.join(", ");return a.overflow>0?d("components.markets.unavailable.symbolsMore",{symbols:e,count:a.overflow,reason:i}):d("components.markets.unavailable.symbols",{symbols:e,reason:i})}class Va extends _{constructor(){super({id:"markets",title:d("panels.markets"),infoTooltip:d("components.markets.infoTooltip")});g(this,"_markets",[]);g(this,"_marketsRateLimited",!1);g(this,"_marketsUnavailable",[]);g(this,"_disclosures",null);this.header.appendChild(Oe()),ea(this.content,()=>this._markets,e=>{sa(e.symbol)?ia(e.symbol,e):va(e)})}renderMarkets(e,t,s){this._markets=e,this._marketsRateLimited=!!t,this._marketsUnavailable=s??[],this._renderMarketsAndDisclosures()}renderDisclosures(e){this._disclosures=e??null,this._renderMarketsAndDisclosures()}_renderMarketsAndDisclosures(){const e=ua(this._disclosures),t=this._markets.map((n,r)=>`
      <div${ta(n,r,d("components.markets.chart.title",{symbol:n.display}))}>
        <div class="market-info">
          <span class="market-name">${o(n.name)}</span>
          <span class="market-symbol">${o(n.display)}</span>
        </div>
        <div class="market-data">
          ${K(n.sparkline,n.change)}
          <span class="market-price">${o(aa(n.symbol,n.price))}</span>
          <span class="market-change ${M(n.change)}">${O(n.change)}</span>
        </div>
      </div>
    `).join(""),s=fa({hasMarkets:this._markets.length>0,marketsHtml:t,disclosureHtml:e,unavailableMessage:this._marketsRateLimited?d("common.rateLimitedMarket"):d("common.failedMarketData"),unavailableSymbolLines:ha(this._marketsUnavailable).map(Ya)});if(s.kind==="retry"){this.showRetrying(s.message);return}this.setSafeContent(w(s.html,"legacy Panel.setContent() migration"))}}class Wa extends _{constructor(){super({id:"heatmap",title:d("panels.heatmap"),infoTooltip:d("components.heatmap.infoTooltip")});g(this,"_tab","performance");g(this,"_heatmapData",[]);g(this,"_sectorBars",[]);g(this,"_valuations",{});g(this,"_staleValuationSymbols",new Set);this.content.addEventListener("click",e=>{const t=this.tabFromEvent(e);t&&this.selectTab(t)}),this.content.addEventListener("keydown",e=>{if(e.repeat||e.key!=="Enter"&&e.key!==" ")return;const t=this.tabFromEvent(e);t&&(e.preventDefault(),this.selectTab(t))})}tabFromEvent(e){var s;const t=(s=e.target.closest("[data-tab]"))==null?void 0:s.dataset.tab;return t==="performance"||t==="valuations"?t:null}selectTab(e){this._tab=e,this._render("user")}renderHeatmap(e,t){this._heatmapData=e,this._sectorBars=t??[],this._render()}updateValuations(e,t){if(e===void 0)return;if(this._staleValuationSymbols=new Set((t??[]).map(n=>n.toUpperCase())),Object.keys(e).length===0){this._valuations={},this._tab==="valuations"&&(this._tab="performance"),this._render();return}const s={};for(const[n,r]of Object.entries(e))s[n]={trailingPE:(r==null?void 0:r.trailingPE)??null,forwardPE:(r==null?void 0:r.forwardPE)??null,beta:(r==null?void 0:r.beta)??null,ytdReturn:(r==null?void 0:r.ytdReturn)??null,threeYearReturn:(r==null?void 0:r.threeYearReturn)??null,fiveYearReturn:(r==null?void 0:r.fiveYearReturn)??null};this._valuations=s,this._render()}_buildTabBar(){return Object.keys(this._valuations).length>0?`<div class="panel-tabs" style="margin-bottom:8px">
      <button class="panel-tab${this._tab==="performance"?" active":""}" data-tab="performance" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">Performance</button>
      <button class="panel-tab${this._tab==="valuations"?" active":""}" data-tab="valuations" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">Valuations</button>
    </div>`:""}_render(e="data"){if(this._heatmapData.length===0){this.showRetrying(d("common.failedSectorData"));return}const t=this._buildTabBar(),s=this._tab==="valuations"&&Object.keys(this._valuations).length>0?this._renderValuations():this._renderPerformance(),n=w(t+s,"legacy Panel.setContent() migration");if(e==="user"){this.setSafeContentImmediate(n,()=>this.restoreSelectedTabFocus());return}this.setSafeContent(n)}restoreSelectedTabFocus(){var e;(e=this.content.querySelector(`.panel-tab[data-tab="${this._tab}"]`))==null||e.focus()}_renderPerformance(){const t='<div class="heatmap">'+this._heatmapData.map(l=>{const c=l.change??0,m=l.symbol?`<div class="sector-ticker">${o(l.symbol)}</div>`:"";return`
        <div class="heatmap-cell ${kt(c)}">
          ${m}
          <div class="sector-change ${M(c)}">${O(c)}</div>
          <div class="sector-name">${o(l.name)}</div>
        </div>
      `}).join("")+"</div>";if(this._sectorBars.length===0)return t;const s=[...this._sectorBars].filter(l=>Number.isFinite(l.change1d)).sort((l,c)=>c.change1d-l.change1d);if(s.length===0)return t;const n=Math.max(...s.map(l=>Math.abs(l.change1d)),3),r='<div class="heatmap-bar-chart">'+s.map(l=>{const c=Math.min(Math.abs(l.change1d)/n*100,100).toFixed(1),m=l.change1d>=0,p=m?"var(--green)":"var(--red)",f=m?"+":"";return`<div class="heatmap-bar-row">
  <span class="heatmap-bar-label">${o(l.symbol)}</span>
  <div class="heatmap-bar-track"><div class="heatmap-bar-fill" style="width:${c}%;background:${p}"></div></div>
  <span class="heatmap-bar-value ${m?"positive":"negative"}">${f}${l.change1d.toFixed(2)}%</span>
</div>`}).join("")+"</div>";return t+r}_renderValuations(){const e=Object.entries(this._valuations).map(([u,y])=>({symbol:u,...y})).filter(u=>u.forwardPE!==null||u.trailingPE!==null);if(e.length===0)return'<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">No valuation data available</div>';const t=[...e].sort((u,y)=>(u.forwardPE??u.trailingPE??999)-(y.forwardPE??y.trailingPE??999)),s=t.map(u=>u.forwardPE??u.trailingPE??0).filter(u=>u>0),n=(s.length>0?s[Math.floor(s.length/2)]:void 0)??20,r=Math.max(...s,30),l=new Map(this._heatmapData.map(u=>[u.symbol,u.name])),c=u=>u!==null?u.toFixed(1):"--",m=u=>{if(u===null)return"--";const y=u*100;return`${y>=0?"+":""}${y.toFixed(1)}%`},p=u=>u!==null?u.toFixed(2):"--",f=u=>u===null?"var(--text-dim)":u<n*.8?"var(--green)":u>n*1.2?"var(--red)":"#e6a817",v='<div class="heatmap-bar-chart" style="margin-bottom:12px">'+t.map(u=>{const y=u.forwardPE??u.trailingPE??0,$=Math.min(y/r*100,100).toFixed(1),S=f(y>0?y:null),x=l.get(u.symbol)??u.symbol;return`<div class="heatmap-bar-row">
  <span class="heatmap-bar-label" title="${o(u.symbol)}">${o(x)}</span>
  <div class="heatmap-bar-track"><div class="heatmap-bar-fill" style="width:${$}%;background:${S}"></div></div>
  <span class="heatmap-bar-value" style="color:${S}">${y>0?y.toFixed(1)+"x":"--"}</span>
</div>`}).join("")+"</div>",h=`<div style="overflow-x:auto">
<table class="wm-table">
  <thead><tr>
    <th scope="col">Sector</th>
    <th scope="col" style="text-align:right">Trail P/E</th>
    <th scope="col" style="text-align:right">Fwd P/E</th>
    <th scope="col" style="text-align:right">Beta</th>
    <th scope="col" style="text-align:right">Year to date</th>
  </tr></thead>
  <tbody>${t.map(u=>{const y=l.get(u.symbol)??u.symbol,$=this._staleValuationSymbols.has(u.symbol.toUpperCase()),S=$?' <span title="Last known value; not refreshed this cycle" style="color:var(--text-dim);font-size:calc(9px * var(--wm-panel-effective-scale, 1))">(stale)</span>':"";return`<tr${$?' style="opacity:0.65"':""}>
  <td style="white-space:nowrap">${o(y)}${S}</td>
  <td style="text-align:right;color:${f(u.trailingPE)}">${c(u.trailingPE)}</td>
  <td style="text-align:right;color:${f(u.forwardPE)}">${c(u.forwardPE)}</td>
  <td style="text-align:right">${p(u.beta)}</td>
  <td style="text-align:right;color:${u.ytdReturn===null?"var(--text-dim)":u.ytdReturn>=0?"var(--green)":"var(--red)"}">${m(u.ytdReturn)}</td>
</tr>`}).join("")}</tbody>
</table></div>`;return v+h}}function ve(a,i,e=""){switch(a){case"PHYSICAL_DIVERGENCE_STATE_OK":return"";case"PHYSICAL_DIVERGENCE_STATE_INSUFFICIENT_HISTORY":return d("components.commodities.divergence.states.insufficientHistory",{count:i,required:Z.history.minimumPoints});case"PHYSICAL_DIVERGENCE_STATE_STALE_INPUT":return e===Z.reasons.physicalPrintStale?`${d("components.commodities.physical")}: ${d("popups.expired")}`:e===Z.reasons.paperSnapshotStale?`${d("components.commodities.paper")}: ${d("popups.expired")}`:e===Z.reasons.fxSnapshotStale?`FX: ${d("popups.expired")}`:d("components.commodities.divergence.states.staleInput");case"PHYSICAL_DIVERGENCE_STATE_MISSING_INPUT":return d("components.commodities.divergence.states.missingInput");case"PHYSICAL_DIVERGENCE_STATE_UNSPECIFIED":throw new Error("Physical divergence state is unspecified");default:{const t=a;throw new Error(`Unknown physical divergence state: ${String(t)}`)}}}function Xa(a){switch(a){case"PHYSICAL_PREMIUM_REGIME_NORMAL":return d("components.commodities.divergence.regimes.normal");case"PHYSICAL_PREMIUM_REGIME_ELEVATED":return d("components.commodities.divergence.regimes.elevated");case"PHYSICAL_PREMIUM_REGIME_STRESSED":return d("components.commodities.divergence.regimes.stressed");case"PHYSICAL_PREMIUM_REGIME_EXTREME":return d("components.commodities.divergence.regimes.extreme");case"PHYSICAL_PREMIUM_REGIME_UNSPECIFIED":throw new Error("Ok physical divergence reading has no regime");default:{const i=a;throw new Error(`Unknown physical premium regime: ${String(i)}`)}}}function Ka(a){switch(a){case"PHYSICAL_PREMIUM_REGIME_NORMAL":return"var(--green)";case"PHYSICAL_PREMIUM_REGIME_ELEVATED":return"var(--yellow)";case"PHYSICAL_PREMIUM_REGIME_STRESSED":return"var(--orange, #f97316)";case"PHYSICAL_PREMIUM_REGIME_EXTREME":return"var(--red)";case"PHYSICAL_PREMIUM_REGIME_UNSPECIFIED":throw new Error("Ok physical divergence reading has no regime color");default:{const i=a;throw new Error(`Unknown physical premium regime color: ${String(i)}`)}}}function Ve(a){switch(a){case"PHYSICAL_PREMIUM_TREND_WIDENING":return"↑";case"PHYSICAL_PREMIUM_TREND_STABLE":return"→";case"PHYSICAL_PREMIUM_TREND_NARROWING":return"↓";case"PHYSICAL_PREMIUM_TREND_UNSPECIFIED":throw new Error("Ok physical divergence reading has no trend");default:{const i=a;throw new Error(`Unknown physical premium trend: ${String(i)}`)}}}const We=[{symbol:"EURUSD=X",label:"EUR",flag:"🇪🇺",multiply:!1},{symbol:"GBPUSD=X",label:"GBP",flag:"🇬🇧",multiply:!1},{symbol:"USDJPY=X",label:"JPY",flag:"🇯🇵",multiply:!0},{symbol:"USDCNY=X",label:"CNY",flag:"🇨🇳",multiply:!0},{symbol:"USDINR=X",label:"INR",flag:"🇮🇳",multiply:!0},{symbol:"AUDUSD=X",label:"AUD",flag:"🇦🇺",multiply:!1},{symbol:"USDCHF=X",label:"CHF",flag:"🇨🇭",multiply:!0},{symbol:"USDCAD=X",label:"CAD",flag:"🇨🇦",multiply:!0},{symbol:"USDTRY=X",label:"TRY",flag:"🇹🇷",multiply:!0}];class Qa extends _{constructor(){super({id:"commodities",title:d("panels.commodities"),infoTooltip:d("components.commodities.infoTooltip")});g(this,"_tab","commodities");g(this,"_commodityData",[]);g(this,"_fxRates",[]);g(this,"_physicalPremiums",[]);g(this,"_physicalPremiumFxAsOf","");g(this,"_physicalDivergence",null);g(this,"_physicalDivergenceUnavailable",!1);g(this,"_physicalComparisonAttempted",!1);g(this,"revealActiveTab",()=>{const e=this.content.querySelector(":scope > .panel-tabs"),t=e==null?void 0:e.querySelector(".panel-tab.active");if(!e||!t||e.scrollWidth<=e.clientWidth)return;const s=e.getBoundingClientRect(),n=t.getBoundingClientRect();n.left<s.left?e.scrollLeft+=n.left-s.left:n.right>s.right-24&&(e.scrollLeft+=n.right-(s.right-24))});this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]"),s=t==null?void 0:t.dataset.tab;s&&this.selectTab(s)})}getActiveTab(){return this._tab}shouldRefreshPhysicalComparison(){return!this._physicalComparisonAttempted||this._tab==="physical"||this._physicalPremiums.length===0||this._physicalDivergenceUnavailable}selectTab(e){if(!["commodities","physical","fx","xau"].includes(e))return{ok:!1,status:"invalid",effectiveTab:this._tab,reason:"unknown_tab"};const t=e;return t==="commodities"||t==="physical"&&this._physicalPremiums.length>0||t==="fx"&&this._fxRates.length>0||t==="xau"&&He==="commodity"&&this._commodityData.some(n=>n.symbol==="GC=F"&&n.price!==null)?this._tab===t?{ok:!0,status:"skipped",effectiveTab:this._tab}:(this._tab=t,this._render(),{ok:!0,status:"applied",effectiveTab:this._tab}):{ok:!1,status:"denied",effectiveTab:this._tab,reason:"tab_unavailable"}}renderCommodities(e){this._commodityData=e,this._render()}updateFxRates(e){this._fxRates=e,this._render()}updatePhysicalPremiums(e){var t;this._physicalComparisonAttempted=!0,this._physicalPremiums=e.premiums,this._physicalPremiumFxAsOf=((t=e.fx)==null?void 0:t.asOf)??"",this._render()}updatePhysicalDivergence(e){this._physicalComparisonAttempted=!0,this._physicalDivergence=e,this._physicalDivergenceUnavailable=!1,this._render()}showPhysicalDivergenceUnavailable(){this._physicalComparisonAttempted=!0,this._physicalDivergence=null,this._physicalDivergenceUnavailable=!0,this._render()}clearPhysicalPremiums(){this._physicalPremiums=[],this._physicalPremiumFxAsOf="",this._physicalDivergence=null,this._physicalDivergenceUnavailable=!1,this._physicalComparisonAttempted=!1,this._tab==="physical"&&(this._tab="commodities"),this._render()}_buildTabBar(e,t,s){const n=d("components.commodities.commodities"),r=[`<button class="panel-tab${this._tab==="commodities"?" active":""}" data-tab="commodities" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">${n}</button>`];return e&&r.push(`<button class="panel-tab${this._tab==="physical"?" active":""}" data-tab="physical" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">${d("components.commodities.physicalPremiums")}</button>`),t&&r.push(`<button class="panel-tab${this._tab==="fx"?" active":""}" data-tab="fx" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">EUR FX</button>`),s&&r.push(`<button class="panel-tab${this._tab==="xau"?" active":""}" data-tab="xau" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">XAU/FX</button>`),r.length>1?`<div class="panel-tabs" style="margin-bottom:8px">${r.join("")}</div>`:""}_renderPhysicalPremiums(){const e=this._physicalPremiums.map(s=>{var u;if(!s.physical||!s.paper)return"";const n=s.metal==="gold"?"gold":"silver",r=d(`components.commodities.metals.${n}`),l=s.physical.unit==="kilogram"?"kg":"g",c=s.physical.price.toLocaleString(void 0,{maximumFractionDigits:2}),m=s.paper.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),p=`${s.premiumUsdPerOz>=0?"+":"-"}$${Math.abs(s.premiumUsdPerOz).toFixed(2)}`,f=`${s.premiumPct>=0?"+":""}${s.premiumPct.toFixed(2)}%`,v=(u=this._physicalDivergence)==null?void 0:u.readings.find(y=>y.metal===s.metal),b=v?this._physicalDivergenceCohortMatches(v,s):!1,h=this._physicalDivergenceUnavailable?"":v&&b?this._renderPhysicalDivergenceReading(v):this._renderPhysicalDivergenceState("PHYSICAL_DIVERGENCE_STATE_MISSING_INPUT",0);return`<div class="commodity-item physical-premium-item">
        <div class="commodity-name">${o(r)}</div>
        <div class="commodity-price">${o(d("components.commodities.physical"))}: CNY ${o(c)}/${l}</div>
        <div class="commodity-price">${o(d("components.commodities.paper"))}: $${o(m)}/oz</div>
        <div class="commodity-change ${M(s.premiumPct)}">${o(d("components.commodities.premium"))}: ${o(p)}/oz (${o(f)})</div>
        ${h}
        <div style="margin-top:4px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)" title="${o(s.physical.source)}">${o(s.physical.source)}<br>${o(d("components.commodities.asOf",{date:s.physical.asOf}))}</div>
      </div>`});return`${this._renderPhysicalDivergenceComposite()}<div class="commodities-grid">${e.join("")}</div>`}_renderPhysicalDivergenceReading(e){if(e.state!=="PHYSICAL_DIVERGENCE_STATE_OK")return this._renderPhysicalDivergenceState(e.state,e.historyPoints,e.reason);const t=Xa(e.regime),s=Ka(e.regime),n=Ve(e.trend5d),r=Ve(e.trend20d);return`<div class="physical-divergence-state" style="display:flex;align-items:center;gap:6px;margin-top:4px;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">
      <span style="border:1px solid ${s};color:${s};border-radius:999px;padding:1px 6px">${o(t)}</span>
      <span title="${o(d("components.commodities.divergence.fiveDayTrend"))}">${o(n)} 5d</span>
      <span title="${o(d("components.commodities.divergence.twentyDayTrend"))}">${o(r)} 20d</span>
    </div>`}_renderPhysicalDivergenceState(e,t,s=""){return`<div class="physical-divergence-state" style="margin-top:4px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(ve(e,t,s))}</div>`}_renderPhysicalDivergenceComposite(){var n,r,l;if(this._physicalDivergenceUnavailable)return`<div class="physical-divergence-transport-error" style="margin-bottom:8px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(d("common.failedMarketData"))}</div>`;const e=(n=this._physicalDivergence)==null?void 0:n.composite;if(!e)return"";let t;if(!this._physicalPremiums.every(c=>{var p;const m=(p=this._physicalDivergence)==null?void 0:p.readings.find(f=>f.metal===c.metal);return m?this._physicalDivergenceCohortMatches(m,c):!1}))t=ve("PHYSICAL_DIVERGENCE_STATE_MISSING_INPUT",0);else if(e.state==="PHYSICAL_DIVERGENCE_STATE_OK"){if(e.index==null)throw new Error("Ok physical divergence composite has no index");t=d("components.commodities.divergence.compositeValue",{value:e.index.toFixed(1)})}else{const c=((r=this._physicalDivergence)==null?void 0:r.readings.find(m=>m.state===e.state))??((l=this._physicalDivergence)==null?void 0:l.readings.find(m=>m.state!=="PHYSICAL_DIVERGENCE_STATE_OK"));t=ve(e.state,(c==null?void 0:c.historyPoints)??0,(c==null?void 0:c.reason)??e.reason)}return`<div class="physical-divergence-composite" style="margin-bottom:8px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(t)}</div>`}_physicalDivergenceCohortMatches(e,t){var s,n,r;return e.physicalAsOf===((s=t.physical)==null?void 0:s.asOf)&&e.paperAsOf===Date.parse(((n=t.paper)==null?void 0:n.asOf)??"")&&((r=e.provenance)==null?void 0:r.fxAsOf)===Date.parse(this._physicalPremiumFxAsOf)}_renderXau(){const e=this._commodityData.find(r=>r.symbol==="GC=F"&&r.price!==null);if(!(e!=null&&e.price))return'<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">Gold price unavailable</div>';const t=e.price,s=new Map(this._commodityData.filter(r=>{var l;return(l=r.symbol)==null?void 0:l.endsWith("=X")}).map(r=>[r.symbol,r])),n=We.map(r=>{const l=s.get(r.symbol);if(!(l!=null&&l.price)||!Number.isFinite(l.price))return null;const c=r.multiply?t*l.price:t/l.price;if(!Number.isFinite(c)||c<=0)return null;const m=Math.round(c).toLocaleString();return`<div class="commodity-item">
        <div class="commodity-name">${o(r.flag)} XAU/${o(r.label)}</div>
        <div class="commodity-price" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1))">${o(m)}</div>
      </div>`}).filter(Boolean);return n.length===0?`<div class="commodities-grid">${We.map(l=>`<div class="commodity-item">
          <div class="commodity-name">${o(l.flag)} XAU/${o(l.label)}</div>
          <div class="commodity-price" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1))">--</div>
        </div>`).join("")}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">FX rates unavailable</div>`:`<div class="commodities-grid">${n.join("")}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Computed from GC=F + Yahoo FX</div>`}_render(){const e=this._physicalPremiums.length>0,t=this._fxRates.length>0,s=He==="commodity"&&this._commodityData.some(c=>c.symbol==="GC=F"&&c.price!==null);this._tab==="xau"&&!s&&(this._tab="commodities"),this._tab==="physical"&&!e&&(this._tab="commodities");const n=this._buildTabBar(e,t,s);if(this._tab==="physical"&&e){this.setSafeContent(w(n+this._renderPhysicalPremiums(),"legacy Panel.setContent() migration"),this.revealActiveTab);return}if(this._tab==="fx"&&t){const c=this._fxRates.map(m=>{const p=m.change1d??null,f=p!==null?`${p>0?"+":""}${p.toFixed(4)}`:"",v=p===null||p===0?"":p>0?"change-positive":"change-negative";return`<div class="commodity-item">
          <div class="commodity-name">EUR/${o(m.currency)}</div>
          <div class="commodity-price">${o(m.rate.toFixed(4))}</div>
          ${f?`<div class="commodity-change ${o(v)}">${o(f)}</div>`:""}
        </div>`}).join("");this.setSafeContent(w(n+`<div class="commodities-grid">${c}</div><div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Source: ECB</div>`,"legacy Panel.setContent() migration"),this.revealActiveTab);return}if(this._tab==="xau"&&s){this.setSafeContent(w(n+this._renderXau(),"legacy Panel.setContent() migration"),this.revealActiveTab);return}const r=this._commodityData.filter(c=>{var m;return typeof c.price=="number"&&Number.isFinite(c.price)&&!((m=c.symbol)!=null&&m.endsWith("=X"))});if(r.length===0){if(!t&&!e){this.showRetrying(d("common.failedCommodities"));return}this.setSafeContent(w(n+`<div style="padding:8px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${d("common.failedCommodities")}</div>`,"legacy Panel.setContent() migration"),this.revealActiveTab);return}const l='<div class="commodities-grid">'+r.map(c=>{const m=K(c.sparkline,c.change,60,18);return`
        <div class="commodity-item">
          <div class="commodity-name">${o(c.display)}</div>
          ${m?m+Jt(c):'<div class="commodity-spark-empty" aria-hidden="true"></div>'}
          <div class="commodity-price">${o(ze(c.price))}</div>
          <div class="commodity-change ${M(c.change)}">${O(c.change)}</div>
        </div>
      `}).join("")+"</div>";this.setSafeContent(w(n+l,"legacy Panel.setContent() migration"),this.revealActiveTab)}}class Ja extends _{constructor(){super({id:"crypto",title:d("panels.crypto"),infoTooltip:d("components.crypto.infoTooltip")})}renderCrypto(i){if(i.length===0){this.showRetrying(d("common.failedCryptoData"));return}const e=i.map(t=>`
      <div class="market-item">
        <div class="market-info">
          <span class="market-name">${o(t.name)}</span>
          <span class="market-symbol">${o(t.symbol)}</span>
        </div>
        <div class="market-data">
          ${K(t.sparkline,t.change)}
          <span class="market-price">${o(Number.isFinite(t.price)&&Math.abs(t.price)>=1?`$${t.price.toLocaleString()}`:ze(t.price))}</span>
          <span class="market-change ${M(t.change)}">${O(t.change)}</span>
        </div>
      </div>
    `).join("");this.setSafeContent(w(e,"legacy Panel.setContent() migration"))}}class Za extends _{constructor(){super({id:"crypto-heatmap",title:"Crypto Sectors"})}renderSectors(i){if(i.length===0){this.showRetrying(d("common.failedSectorData"));return}const e='<div class="heatmap">'+i.map(t=>{const s=t.change??0;return`
        <div class="heatmap-cell ${kt(s)}">
          <div class="sector-name">${o(t.name)}</div>
          <div class="sector-change ${M(s)}">${O(s)}</div>
        </div>
      `}).join("")+"</div>";this.setSafeContent(w(e,"legacy Panel.setContent() migration"))}}class he extends _{renderTokens(i){if(i.length===0){this.showRetrying(d("common.failedCryptoData"));return}const e=i.map(t=>`
      <div class="market-item">
        <div class="market-info">
          <span class="market-name">${o(t.name)}</span>
          <span class="market-symbol">${o(t.symbol)}</span>
        </div>
        <div class="market-data">
          <span class="market-price">${o(Number.isFinite(t.price)&&Math.abs(t.price)>=1?`$${t.price.toLocaleString(void 0,{maximumFractionDigits:t.price<1?6:2})}`:ze(t.price))}</span>
          <span class="market-change ${M(t.change24h)}">${O(t.change24h)}</span>
          <span class="market-change market-change--7d ${M(t.change7d)}">${O(t.change7d)}W</span>
        </div>
      </div>
    `).join("");this.setSafeContent(w(e,"legacy Panel.setContent() migration"))}}class es extends he{constructor(){super({id:"defi-tokens",title:"DeFi Tokens",infoTooltip:d("components.defiTokens.infoTooltip")})}}class ts extends he{constructor(){super({id:"ai-tokens",title:"AI Tokens",infoTooltip:d("components.aiTokens.infoTooltip")})}}class as extends he{constructor(){super({id:"other-tokens",title:"Alt Tokens",infoTooltip:d("components.altTokens.infoTooltip")})}}const Dn=Object.freeze(Object.defineProperty({__proto__:null,AiTokensPanel:ts,CommoditiesPanel:Qa,CryptoHeatmapPanel:Za,CryptoPanel:Ja,DefiTokensPanel:es,HeatmapPanel:Wa,MarketPanel:Va,OtherTokensPanel:as,TokenListPanel:he},Symbol.toStringTag,{value:"Module"}));function ge(a){const i=Number.isFinite(a)?a.toFixed(2):"0.00";return`${a>=0?"+":""}${i}%`}function ss(a){const i=Number.isFinite(a)?a.toFixed(2):"0.00";return`${a>=.15?"Bullish":a<=-.15?"Bearish":"Neutral"} (${a>=0?"+":""}${i})`}function Xe(a,i){return Number.isFinite(a)?`${i==="USD"?"$":""}${a.toFixed(2)}${i&&i!=="USD"?` ${i}`:""}`:"N/A"}function Ke(a){const i=a.toLowerCase();return i.includes("buy")?"badge-bullish":i.includes("hold")||i.includes("watch")?"badge-neutral":"badge-bearish"}function Qe(a,i){return a.length===0?"":`<ul class="${i}" style="margin:8px 0 0;padding-left:18px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.5">${a.map(e=>`<li>${o(e)}</li>`).join("")}</ul>`}function ee(a){const i=Math.abs(a);return i>=1e9?`$${(a/1e9).toFixed(1)}B`:i>=1e6?`$${(a/1e6).toFixed(1)}M`:i>=1e3?`$${(a/1e3).toFixed(0)}K`:`$${a.toFixed(0)}`}function is(a){return a==="P"?"Buy":a==="S"?"Sell":a==="M"?"Exercise":a==="A"?"Award":a==="D"?"Disposition":a==="F"?"Tax/Fee":a}class ns extends _{constructor(){super({id:"stock-analysis",title:"Premium Stock Analysis",infoTooltip:d("components.stockAnalysis.infoTooltip"),premium:"locked"});g(this,"insiderBySymbol",{});g(this,"tableView");g(this,"lastItems",[]);g(this,"lastHistory",{});this.header.appendChild(Oe("Edit Watchlist"))}destroy(){var e;(e=this.tableView)==null||e.destroy(),super.destroy()}setInsiderData(e,t){this.insiderBySymbol[e]=t}renderAnalyses(e,t={},s="live"){if(e.length===0){this.setDataBadge("unavailable"),this.showRetrying("No premium stock analyses available yet.");return}this.setDataBadge(s,`${e.length} symbols`),this.lastItems=e,this.lastHistory=t,this.tableView?this.tableView.updateRenderDetail(n=>this.renderCard(n,this.lastHistory[n.symbol]||[])):this.tableView=new Et({labelledBy:`${this.panelId}Title`,intro:this.buildIntro(e.length),columns:[{key:"symbol",label:"Symbol",sortable:!0,sortOptionKey:"symbol-asc",cell:n=>`<strong>${o(n.display||n.symbol)}</strong>`},{key:"price",label:"Price",align:"right",cell:n=>o(Xe(n.currentPrice,n.currency))},{key:"signal",label:"Signal",cell:n=>{const r=I(n);return`<span class="signal-badge ${Ke(r)}">${o(r)}</span>`}},{key:"score",label:"Score",align:"right",sortable:!0,sortOptionKey:"score-desc",cell:n=>o(String(F(n)))},{key:"change",label:"1d %",align:"right",sortable:!0,sortOptionKey:"change-desc",cell:n=>`<span style="color:${n.changePercent>=0?"var(--semantic-normal)":"var(--semantic-critical-text, var(--semantic-critical))"}">${o(ge(n.changePercent))}</span>`}],filters:[{key:"all",label:"All",match:()=>!0},{key:"strong-buy",label:"Strong Buy",match:n=>I(n).toLowerCase().includes("strong buy")},{key:"buy",label:"Buy+",match:n=>I(n).toLowerCase().includes("buy")},{key:"hold",label:"Hold",match:n=>{const r=I(n).toLowerCase();return r.includes("hold")||r.includes("watch")}},{key:"sell",label:"Sell",match:n=>I(n).toLowerCase().includes("sell")}],sortOptions:[{key:"score-desc",label:"Score ↓",cmp:(n,r)=>F(r)-F(n)},{key:"change-desc",label:"1d % ↓",cmp:(n,r)=>r.changePercent-n.changePercent},{key:"symbol-asc",label:"Symbol A-Z",cmp:(n,r)=>(n.display||n.symbol).localeCompare(r.display||r.symbol)}],defaultSort:"score-desc",defaultFilter:"all",getKey:n=>n.symbol,getSearchText:n=>`${n.symbol} ${n.display||""} ${n.name||""}`,renderDetail:n=>this.renderCard(n,this.lastHistory[n.symbol]||[]),searchPlaceholder:"Search ticker or name..."}),this.tableView.setItems(e),this.rerender()}rerender(){this.tableView&&(this.tableView.updateIntro(this.buildIntro(this.lastItems.length)),this.setSafeContent(w(this.tableView.render(),"legacy Panel.setContent() migration"),()=>{var e;(e=this.tableView)==null||e.bind(this.content,()=>this.rerender())}))}buildIntro(e){const t=na().filter(r=>!ra(r.symbol)).length,s=e===1?"ticker":"tickers",n=t>0?` <span style="color:var(--text-dim)">${t} watchlist ${t===1?"symbol is an index/FX rate":"symbols are indices/FX rates"} and don't get an equity report.</span>`:"";return`Analyst-grade equity reports for the ${e} ${s} in your watchlist — your picks lead, popular names fill the rest. Use <strong>Edit Watchlist</strong> to add your own.${n}`}formatDividendRate(e,t){const s=(t||"").trim().toUpperCase();if(s&&s!=="USD")try{return`${new Intl.NumberFormat("en-US",{style:"currency",currency:s}).format(e)}/share`}catch{return`${s} ${e.toFixed(2)}/share`}return`$${e.toFixed(2)}/share`}renderDividendProfile(e){if(!e.dividendYield||e.dividendYield<=0)return"";const t=`${e.dividendYield.toFixed(1)}%`,s=e.trailingAnnualDividendRate>0?` (${this.formatDividendRate(e.trailingAnnualDividendRate,e.currency)})`:"",n=e.dividendCagr!==0?`${e.dividendCagr>0?"+":""}${e.dividendCagr.toFixed(1)}%`:"N/A",r=e.dividendFrequency?`<span class="badge-neutral" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:2px 6px;border-radius:3px">${o(e.dividendFrequency)}</span>`:"",l=e.exDividendDate>0?new Date(e.exDividendDate).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"N/A",c=typeof e.payoutRatio=="number"&&e.payoutRatio>0,m=c?`${(e.payoutRatio*100).toFixed(1)}%`:"",p=c?`<div><div style="color:var(--text-dim)">Payout Ratio</div><div style="margin-top:3px">${o(m)}</div></div>`:"";return`
      <div style="border:1px solid var(--border);padding:10px 12px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Dividend Profile</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div><div style="color:var(--text-dim)">Yield</div><div style="margin-top:3px">${o(t)}${o(s)}</div></div>
          <div><div style="color:var(--text-dim)">5Y CAGR</div><div style="margin-top:3px">${o(n)}</div></div>
          <div><div style="color:var(--text-dim)">Frequency</div><div style="margin-top:3px">${r||"N/A"}</div></div>
          ${p}
          <div><div style="color:var(--text-dim)">Ex-Dividend</div><div style="margin-top:3px">${o(l)}</div></div>
        </div>
      </div>
    `}renderCard(e,t){const s=I(e),n=Ke(s),r=t.filter(p=>p.generatedAt!==e.generatedAt).slice(0,3),l=r[0],c=l?F(e)-F(l):null,m=e.headlines.slice(0,2).map(p=>{const f=pa(p.link),v=o(p.title),b=o(p.source||"Source"),h=p.alignedTradingDate?` · aligned ${o(p.alignedTradingDate)}${p.marketSessionAtPublish?` (${o(p.marketSessionAtPublish)})`:""}`:"";return`<a href="${f}" target="_blank" rel="noreferrer" style="display:block;color:var(--text);text-decoration:none;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02)"><div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.45">${v}</div><div style="margin-top:4px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">${b}${h}</div></a>`}).join("");return`
      <section class="signal-card" style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${o(e.name||e.symbol)}</strong>
              <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-family:var(--font-mono);text-transform:uppercase">${o(e.display||e.symbol)}</span>
              <span class="signal-badge ${n}" style="font-family:var(--font-mono)">${o(s)}</span>
            </div>
            <div style="margin-top:6px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5">${o(ga(e))}</div>
          </div>
          <div style="text-align:right;min-width:110px">
            <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:700">${o(Xe(e.currentPrice,e.currency))}</div>
            <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:${e.changePercent>=0?"var(--semantic-normal)":"var(--semantic-critical-text, var(--semantic-critical))"}">${o(ge(e.changePercent))}</div>
            <div style="margin-top:6px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Score ${o(String(F(e)))} · ${o(ya(e))}</div>
          </div>
          ${t.length>=2?(()=>{const p=t.slice(0,6).reverse().map(F),f=p[p.length-1]??0,v=p[p.length-2]??f;return ma(p,f>=v?"var(--semantic-normal)":"var(--semantic-critical)",60,20,"display:block;margin-top:4px;align-self:flex-end")})():""}
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Trend</div><div style="margin-top:4px">${o(e.trendStatus)}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">MA5 Bias</div><div style="margin-top:4px">${o(ge(e.biasMa5))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">RSI 12</div><div style="margin-top:4px">${o(e.rsi12.toFixed(1))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Volume</div><div style="margin-top:4px">${o(e.volumeStatus)}</div></div>
          ${e.newsSentiment!=null?`<div style="border:1px solid var(--border);padding:8px" data-news-overlay="model"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">News overlay</div><div style="margin-top:4px">${o(ss(e.newsSentiment))}</div></div>`:""}
        </div>
        ${this.renderDividendProfile(e)}
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text)"><strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Action</strong><div style="margin-top:4px">${o(ba(e))}</div></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
          <div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Bullish Factors</div>
            ${Qe(xa(e).slice(0,3),"badge-bullish")}
          </div>
          <div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Risk Factors</div>
            ${Qe($a(e).slice(0,3),"badge-bearish")}
          </div>
        </div>
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">
          <strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Why Now</strong>
          <div style="margin-top:4px">${o(wa(e))}</div>
        </div>
        ${l?`
          <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">
            <strong style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Signal Drift</strong>
            <div style="margin-top:4px">
              Previous run was ${o(I(l))} at score ${o(String(F(l)))}.
              Current drift is ${o(`${c&&c>0?"+":""}${(c||0).toFixed(1)}`)}.
            </div>
          </div>
        `:""}
        ${r.length>0?`
          <div style="display:grid;gap:6px">
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent History</div>
            ${r.map(p=>`
              <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
                <span>${o(I(p))} · score ${o(String(F(p)))}</span>
                <span style="color:var(--text-dim)">${o(new Date(p.generatedAt).toLocaleString())}</span>
              </div>
            `).join("")}
          </div>
        `:""}
        ${this.renderInsiderSection(e.symbol)}
        ${m?`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px">${m}</div>`:""}
        ${this.renderAnalystConsensus(e)}
        ${this.renderFundamentals(e)}
      </section>
    `}renderFundamentals(e){const t=(n,r,l)=>`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:88px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">${o(n)}</div><div style="margin-top:2px${l?`;color:${l}`:""}">${o(r)}</div></div>`,s=Sa(e.fundamentals,e.currency).map(n=>t(n.label,n.value,n.color));return s.length===0?"":`
      <div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Fundamentals</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">${s.join("")}</div>
      </div>
    `}renderAnalystConsensus(e){const t=e.analystConsensus,s=e.priceTarget,n=e.recentUpgrades,r=t&&t.total>0,l=typeof(s==null?void 0:s.mean)=="number"&&s.mean>0,c=typeof(s==null?void 0:s.median)=="number"&&s.median>0,m=!!s&&s.numberOfAnalysts>0&&(l||c),p=n&&n.length>0;return!r&&!m&&!p?"":`
      <div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Analyst Consensus</div>
        ${r?this.renderRatingBar(t):""}
        ${m?this.renderPriceTarget(s,e.currentPrice,e.currency):""}
        ${p?this.renderRecentUpgrades(n):""}
      </div>
    `}renderRatingBar(e){const t=e.total||1,s=c=>(c/t*100).toFixed(1),n=[{label:"Strong Buy",count:e.strongBuy,color:"#16a34a",pct:s(e.strongBuy)},{label:"Buy",count:e.buy,color:"#4ade80",pct:s(e.buy)},{label:"Hold",count:e.hold,color:"#facc15",pct:s(e.hold)},{label:"Sell",count:e.sell,color:"#f87171",pct:s(e.sell)},{label:"Strong Sell",count:e.strongSell,color:"#dc2626",pct:s(e.strongSell)}].filter(c=>c.count>0),r=n.map(c=>`<div style="flex:${c.count};background:${c.color};height:8px;min-width:2px" title="${o(c.label)}: ${c.count} (${c.pct}%)"></div>`).join(""),l=n.map(c=>`<span style="display:inline-flex;align-items:center;gap:3px"><span style="width:8px;height:8px;border-radius:2px;background:${c.color};display:inline-block"></span>${c.count}</span>`).join('<span style="color:var(--border);margin:0 4px">|</span>');return`
      <div style="margin-bottom:8px">
        <div style="display:flex;gap:1px;border-radius:4px;overflow:hidden;margin-bottom:4px">${r}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);display:flex;align-items:center;flex-wrap:wrap;gap:2px">${l}<span style="margin-left:6px;color:var(--text-dim)">(${t} analysts)</span></div>
      </div>
    `}renderPriceTarget(e,t,s){const n=s==="USD"?"$":s==="EUR"?"€":s==="GBP"?"£":s||"$",r=n.length===1,l=u=>r?`${n}${u.toFixed(2)}`:`${u.toFixed(2)} ${n}`,c=u=>typeof u=="number"&&Number.isFinite(u)&&u>0,m=c(e.low)?e.low:void 0,p=c(e.high)?e.high:void 0,f=c(e.mean)?e.mean:void 0,b=(c(e.median)?e.median:void 0)??f;if(!b)return"";const h=[];if(m!==void 0&&h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Low</div><div style="margin-top:2px">${o(l(m))}</div></div>`),h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Median</div><div style="margin-top:2px">${o(l(b))}</div></div>`),p!==void 0&&h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">High</div><div style="margin-top:2px">${o(l(p))}</div></div>`),h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Analysts</div><div style="margin-top:2px">${o(String(e.numberOfAnalysts))}</div></div>`),t>0){const u=(b-t)/t*100,y=u>=0?"var(--semantic-normal)":"var(--semantic-critical-text, var(--semantic-critical))",$=`${u>=0?"+":""}${u.toFixed(1)}%`;h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">vs Current</div><div style="margin-top:2px;color:${y}">${o($)}</div></div>`)}return`<div style="display:flex;flex-wrap:wrap;gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));margin-bottom:8px">${h.join("")}</div>`}renderRecentUpgrades(e){return`
      <div style="display:grid;gap:4px">
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent Actions</div>
        ${e.slice(0,3).map(s=>{const n=s.action==="up"||s.action==="init"?"var(--semantic-normal)":s.action==="down"?"var(--semantic-critical-text, var(--semantic-critical))":"var(--text-dim)",r=s.action==="up"?"Upgrade":s.action==="down"?"Downgrade":s.action==="init"?"Initiated":o(s.action),l=s.fromGrade?`${o(s.fromGrade)} → ${o(s.toGrade)}`:o(s.toGrade);return`
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:5px 8px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <span style="font-weight:500">${o(s.firm)}</span>
          <span style="color:${n};white-space:nowrap">${r}</span>
          <span style="color:var(--text-dim);white-space:nowrap">${l}</span>
        </div>
      `}).join("")}
      </div>
    `}renderInsiderSection(e){const t=this.insiderBySymbol[e];if(t===void 0)return"";if(t.unavailable)return`
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border:1px solid var(--border)">
          Insider data unavailable
        </div>`;if(t.transactions.length===0&&t.totalBuys===0&&t.totalSells===0)return`
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border:1px solid var(--border)">
          No insider transactions in the last 6 months
        </div>`;const s=ee(t.totalBuys),n=ee(t.totalSells),r=`${t.netValue>=0?"+":""}${ee(t.netValue)}`,l=t.netValue>=0?"var(--semantic-normal)":"var(--semantic-critical-text, var(--semantic-critical))",c=`
      <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-family:var(--font-mono)">
        <span>Buys: <span style="color:var(--semantic-normal)">${o(s)}</span></span>
        <span>Sells: <span style="color:var(--semantic-critical-text, var(--semantic-critical))">${o(n)}</span></span>
        <span>Net: <span style="color:${l};font-weight:600">${o(r)}</span></span>
      </div>`,m=t.transactions.slice(0,5),p=m.length>0?`
      <table class="wm-table" style="margin-top:6px">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col" style="text-align:right">Shares</th>
            <th scope="col" style="text-align:right">Value</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          ${m.map(f=>{const v=f.transactionCode==="P",b=f.transactionCode==="S",h=v?"var(--semantic-normal)":b?"var(--semantic-critical-text, var(--semantic-critical))":"var(--text-dim)",u=f.value===0?"—":ee(f.value);return`
              <tr>
                <td style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o(f.name)}</td>
                <td style="color:${h}">${o(is(f.transactionCode))}</td>
                <td style="text-align:right;font-family:var(--font-mono)">${Number.isFinite(f.shares)?f.shares.toLocaleString():"0"}</td>
                <td style="text-align:right;font-family:var(--font-mono)">${u}</td>
                <td style="color:var(--text-dim)">${o(f.transactionDate)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>`:"";return`
      <div style="display:grid;gap:6px">
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Insider Activity (6 months)</div>
        ${c}
        ${p}
      </div>`}}const Rn=Object.freeze(Object.defineProperty({__proto__:null,StockAnalysisPanel:ns},Symbol.toStringTag,{value:"Module"}));function ye(a){return a>0?"var(--green-text, #8df0b2)":a<0?"var(--red-text, #ff8c8c)":"var(--text-dim)"}function L(a){return`${a>0?"+":""}${a.toFixed(1)}%`}function rs(a){return a>=55?"badge-bullish":a>=45?"badge-neutral":"badge-bearish"}function os(a){return a>=55?"Profitable":a>=45?"Mixed":"Losing"}class ls extends _{constructor(){super({id:"stock-backtest",title:"Premium Backtesting",infoTooltip:d("components.stockBacktest.infoTooltip"),premium:"locked"});g(this,"tableView");this.header.appendChild(Oe("Edit Watchlist"))}destroy(){var e;(e=this.tableView)==null||e.destroy(),super.destroy()}renderBacktests(e,t="live"){if(e.length===0){this.setDataBadge("unavailable"),this.showRetrying("No stock backtests available yet.");return}this.setDataBadge(t,`${e.length} symbols`),this.tableView||(this.tableView=new Et({labelledBy:`${this.panelId}Title`,intro:"Historical replay of the technical signal model over recent daily bars. Point-in-time fundamentals are not included.",columns:[{key:"symbol",label:"Symbol",sortable:!0,sortOptionKey:"symbol-asc",cell:s=>`<strong>${o(s.display||s.symbol)}</strong>`},{key:"winrate",label:"Win Rate",align:"right",sortable:!0,sortOptionKey:"winrate-desc",cell:s=>o(L(s.winRate))},{key:"direction",label:"Direction",align:"right",sortable:!0,sortOptionKey:"direction-desc",cell:s=>o(L(s.directionAccuracy))},{key:"avgreturn",label:"Avg Return",align:"right",sortable:!0,sortOptionKey:"avgreturn-desc",cell:s=>`<span style="color:${ye(s.avgSimulatedReturnPct)}">${o(L(s.avgSimulatedReturnPct))}</span>`},{key:"signals",label:"Signals",align:"right",sortable:!0,sortOptionKey:"signals-desc",cell:s=>o(String(s.actionableEvaluations))}],filters:[{key:"all",label:"All",match:()=>!0},{key:"profitable",label:"Profitable",match:s=>s.winRate>=55},{key:"mixed",label:"Mixed",match:s=>s.winRate>=45&&s.winRate<55},{key:"losing",label:"Losing",match:s=>s.winRate<45}],sortOptions:[{key:"winrate-desc",label:"Win Rate ↓",cmp:(s,n)=>n.winRate-s.winRate},{key:"direction-desc",label:"Direction ↓",cmp:(s,n)=>n.directionAccuracy-s.directionAccuracy},{key:"avgreturn-desc",label:"Avg Return ↓",cmp:(s,n)=>n.avgSimulatedReturnPct-s.avgSimulatedReturnPct},{key:"signals-desc",label:"Signals ↓",cmp:(s,n)=>n.actionableEvaluations-s.actionableEvaluations},{key:"symbol-asc",label:"Symbol A-Z",cmp:(s,n)=>(s.display||s.symbol).localeCompare(n.display||n.symbol)}],defaultSort:"winrate-desc",defaultFilter:"all",getKey:s=>s.symbol,getSearchText:s=>`${s.symbol} ${s.display||""} ${s.name||""}`,renderDetail:s=>this.renderDetail(s),searchPlaceholder:"Search ticker or name..."})),this.tableView.setItems(e),this.rerender()}rerender(){this.tableView&&this.setSafeContent(w(this.tableView.render(),"legacy Panel.setContent() migration"),()=>{var e;(e=this.tableView)==null||e.bind(this.content,()=>this.rerender())})}renderDetail(e){return`
      <section style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${o(e.name||e.symbol)}</strong>
              <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-family:var(--font-mono);text-transform:uppercase">${o(e.display||e.symbol)}</span>
              <span class="signal-badge ${rs(e.winRate)}">${o(os(e.winRate))}</span>
            </div>
            <div style="margin-top:6px;font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5">${o(e.summary)}</div>
          </div>
          <div style="text-align:right;min-width:110px">
            <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:700;color:${ye(e.avgSimulatedReturnPct)}">${o(L(e.avgSimulatedReturnPct))}</div>
            <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Avg simulated return</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Win Rate</div><div style="margin-top:4px">${o(L(e.winRate))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Direction Accuracy</div><div style="margin-top:4px">${o(L(e.directionAccuracy))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Cumulative</div><div style="margin-top:4px;color:${ye(e.cumulativeSimulatedReturnPct)}">${o(L(e.cumulativeSimulatedReturnPct))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Signals</div><div style="margin-top:4px">${o(String(e.actionableEvaluations))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Rating Basis</div><div style="margin-top:4px">${o(e.ratingBasis==="technical_only"?"Technical only":e.ratingBasis)}</div></div>
        </div>
        <div style="display:grid;gap:6px">
          <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent Evaluations</div>
          ${e.evaluations.map(t=>`
            <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:calc(11px * var(--wm-panel-effective-scale, 1))">
              <span>${o(t.signal)} · ${o(t.outcome)} · ${o(L(t.simulatedReturnPct))}</span>
              <span style="color:var(--text-dim)">${o(new Date(Number(t.analysisAt)).toLocaleDateString())}</span>
            </div>
          `).join("")}
        </div>
      </section>
    `}}const Fn=Object.freeze(Object.defineProperty({__proto__:null,StockBacktestPanel:ls},Symbol.toStringTag,{value:"Module"}));function cs(a){return a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e3?`${(a/1e3).toFixed(1)}K`:String(a)}function ds(a){return a>=80?"var(--red-text, #e74c3c)":a>=50?"var(--semantic-high-text, #e67e22)":a>=25?"var(--yellow-text, #f1c40f)":"var(--green-text, #27ae60)"}function ps(a){return a>=80?"#e74c3c":a>=50?"#e67e22":a>=25?"#f1c40f":"#27ae60"}class ms extends _{constructor(){super({id:"wsb-ticker-scanner",title:d("panels.wsbTickerScanner"),infoTooltip:d("components.wsbTickerScanner.infoTooltip"),showCount:!0,premium:"locked"});g(this,"_tickers",[]);g(this,"_hasData",!1);g(this,"_sortField","mentionCount");g(this,"_sortAsc",!1);this.content.addEventListener("click",e=>{const t=e.target,s=t.closest("[data-sort]");if(!s)return;const n=s.dataset.sort,l=t.closest("button[data-sort]")===document.activeElement;n===this._sortField?this._sortAsc=!this._sortAsc:(this._sortField=n,this._sortAsc=!1),this._render(l?n:null)})}async fetchData(){const e=await _a();return e.length?(this.updateData(e),!0):(this._hasData||this.showError("No ticker data available yet",()=>{this.fetchData()},60),!1)}updateData(e){this._tickers=[...e],this._hasData=this._tickers.length>0,this._hasData?(this.setCount(this._tickers.length),this._render()):(this.setCount(0),this.showError("No trending tickers found",()=>{this.fetchData()},120))}_sorted(){const e=this._sortAsc?1:-1;return[...this._tickers].sort((t,s)=>e*(t[this._sortField]-s[this._sortField]))}_ariaSort(e){return e!==this._sortField?"":` aria-sort="${this._sortAsc?"ascending":"descending"}"`}_sortIndicator(e){return e!==this._sortField?"":this._sortAsc?" ▲":" ▼"}_render(e=null){const t=this._sorted(),s=Math.max(1,...t.map(l=>l.velocityScore)),n="display:block;width:100%;appearance:none;border:0;padding:0;background:transparent;color:inherit;font:inherit;text-transform:inherit;letter-spacing:inherit;cursor:inherit;white-space:inherit",r=t.slice(0,50).map((l,c)=>{const m=ps(l.velocityScore),p=Math.max(4,Math.round(l.velocityScore/s*100)),f=l.subreddits.map(v=>`<span style="font-size:calc(8px * var(--wm-panel-effective-scale, 1));padding:1px 4px;border-radius:2px;background:rgba(255,255,255,0.06);color:var(--text-secondary);margin-right:2px">r/${o(v)}</span>`).join("");return`<tr>
        <td class="wsb-rank">${c+1}</td>
        <td class="wsb-ticker">${o(l.symbol)}</td>
        <td class="wsb-num">${l.mentionCount}</td>
        <td class="wsb-num">${cs(l.totalScore)}</td>
        <td class="wsb-velocity">
          <div style="display:flex;align-items:center;gap:4px">
            <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${ds(l.velocityScore)};min-width:24px;text-align:right">${Math.round(l.velocityScore)}</span>
            <div style="flex:1;height:4px;border-radius:2px;background:rgba(255,255,255,0.08)">
              <div style="height:100%;width:${p}%;border-radius:2px;background:${m}"></div>
            </div>
          </div>
        </td>
        <td>${f}</td>
      </tr>`}).join("");this.setSafeContent(w(`
      <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
        <table class="wm-table wsb-table">
          <thead>
            <tr>
              <th scope="col" class="wsb-num">#</th>
              <th scope="col">Ticker</th>
              <th scope="col" class="wsb-num" data-sort="mentionCount"${this._ariaSort("mentionCount")}>
                <button type="button" data-sort="mentionCount" style="${n};text-align:right">Mentions<span aria-hidden="true">${this._sortIndicator("mentionCount")}</span></button>
              </th>
              <th scope="col" class="wsb-num" data-sort="totalScore"${this._ariaSort("totalScore")}>
                <button type="button" data-sort="totalScore" style="${n};text-align:right">Score<span aria-hidden="true">${this._sortIndicator("totalScore")}</span></button>
              </th>
              <th scope="col" data-sort="velocityScore"${this._ariaSort("velocityScore")}>
                <button type="button" data-sort="velocityScore" style="${n};text-align:left">Velocity<span aria-hidden="true">${this._sortIndicator("velocityScore")}</span></button>
              </th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>${r||'<tr><td colspan="6" class="wsb-empty">No ticker data</td></tr>'}</tbody>
        </table>
      </div>
      <div style="margin-top:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Reddit · r/wallstreetbets, r/stocks, r/investing · sorted by ${this._sortField.replace(/([A-Z])/g," $1").toLowerCase()}</div>
    `,"legacy Panel.setContent() migration"),e?()=>{var l;(l=this.content.querySelector(`button[data-sort="${e}"]`))==null||l.focus({preventScroll:!0})}:void 0)}}const Tn=Object.freeze(Object.defineProperty({__proto__:null,WsbTickerScannerPanel:ms},Symbol.toStringTag,{value:"Module"}));function us(a){const i=a.toUpperCase();return i==="LONG"?"badge-bullish":i==="SHORT"?"badge-bearish":"badge-neutral"}function fs(a){const i=a.toUpperCase();return i==="LONG"?d("components.marketImplications.directions.long"):i==="SHORT"?d("components.marketImplications.directions.short"):d("components.marketImplications.directions.hedge")}function hs(a){if(!a||a.length===0)return"";const i=Math.random().toString(36).slice(2,8),e=a.map((t,s)=>{const n=s<a.length-1?' <span style="color:var(--text-dim);margin:0 2px">&rarr;</span> ':"";return`<span class="chain-node" data-chain-id="${i}" data-node-idx="${s}" data-logic="${o(t.logic)}" role="button" tabindex="0" aria-expanded="false"
      style="cursor:pointer;border-bottom:1px dotted var(--text-dim)">${o(t.node)}</span>${n}`}).join("");return`
    <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px;line-height:1.8">
      <span style="text-transform:uppercase;letter-spacing:0.06em;opacity:0.6">${o(d("components.marketImplications.rationale"))}</span> ${e}
    </div>
    <div id="chain-logic-${i}" style="display:none;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-style:italic;margin-top:2px;padding-left:4px"></div>
  `}function vs(a){return`
    <div class="signal-card">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">
        <span class="signal-badge ${us(a.direction)}">${fs(a.direction)}</span>
        <strong style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));letter-spacing:-0.02em">${o(a.ticker)}</strong>
        ${a.name?`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(a.name)}</span>`:""}
        ${a.timeframe?`<span class="signal-badge badge-neutral" style="font-family:var(--font-mono)">${o(a.timeframe)}</span>`:""}
      </div>
      <div style="font-size:calc(13px * var(--wm-panel-effective-scale, 1));font-weight:600;line-height:1.4;margin-bottom:6px">${o(a.title)}</div>
      <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));line-height:1.55;color:var(--text-dim)">${o(a.narrative)}</div>
      ${hs(a.transmissionChain)}
      ${a.driver?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px"><span style="text-transform:uppercase;letter-spacing:0.06em">${o(d("components.marketImplications.driver"))}</span> ${o(a.driver)}</div>`:""}
      ${a.riskCaveat?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--yellow);padding:6px 8px;border:1px solid color-mix(in srgb,var(--yellow) 30%,transparent);background:color-mix(in srgb,var(--yellow) 8%,transparent);margin-top:6px">${o(a.riskCaveat)}</div>`:""}
    </div>
  `}class gs extends _{constructor(){super({id:"market-implications",title:d("components.marketImplications.title"),infoTooltip:d("components.marketImplications.infoTooltip"),premium:"locked"});g(this,"fwSelector");this.fwSelector=new Ca({panelId:"market-implications",isPremium:Ea(),panel:this,note:d("components.marketImplications.appliesToNext")}),this.header.appendChild(this.fwSelector.el),Pa(this.content,".chain-node"),this.content.addEventListener("click",e=>{const t=e.target.closest(".chain-node");if(!t)return;const s=t.getAttribute("data-chain-id"),n=t.getAttribute("data-node-idx"),r=t.getAttribute("data-logic"),l=this.content.querySelector(`#chain-logic-${s}`);if(!l)return;const c=l.style.display!=="none",m=l.getAttribute("data-open-idx")===n;for(const p of this.content.querySelectorAll(`.chain-node[data-chain-id="${s}"]`))p.setAttribute("aria-expanded","false");c&&m?l.style.display="none":(l.textContent=r,l.setAttribute("data-open-idx",n),l.style.display="block",t.setAttribute("aria-expanded","true"))})}destroy(){this.fwSelector.destroy(),super.destroy()}renderImplications(e,t="live"){if(e.degraded||e.cards.length===0){this.showUnavailable();return}const s=e.generatedAt?ka(new Date(e.generatedAt).getTime()):"";this.setDataBadge(t,s||d("components.marketImplications.signals",{count:e.cards.length})),this.resetRetryBackoff();const n=`
      <div style="display:flex;flex-direction:column;gap:10px">
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5">${o(d("components.marketImplications.unscored"))}</div>
        ${e.cards.map(vs).join("")}
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:8px;border-top:1px solid var(--border);line-height:1.5;text-align:center">${o(d("components.marketImplications.disclaimer"))}</div>
      </div>
    `;this.setSafeContent(w(n,"legacy Panel.setContent() migration"))}showUnavailable(e=d("components.marketImplications.unavailable")){this.setDataBadge("unavailable");const t=`
      <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);line-height:1.5;padding:16px 0;text-align:center">${o(e)}</div>
    `;this.setSafeContent(w(t,"legacy Panel.setContent() migration"))}}const Mn=Object.freeze(Object.defineProperty({__proto__:null,MarketImplicationsPanel:gs},Symbol.toStringTag,{value:"Module"}));function G(a){const i=Math.abs(a);return i>=1e3?Math.round(a).toLocaleString():i>=100?a.toFixed(2):i>=1?a.toFixed(4):a.toPrecision(4)}function Je(a){return`${a>0?"+":""}${a.toFixed(1)}%`}function Ze(a){return`${a>0?"+":""}${a.toFixed(4)}`}function te(a){return a>0?"change-positive":a<0?"change-negative":"fx-flat"}const ys=6e4,be="stress";class bs extends _{constructor(){super({id:"fx",title:d("panels.fx"),defaultRowSpan:2,infoTooltip:d("components.fx.infoTooltip")});g(this,"stress",[]);g(this,"usd",[]);g(this,"eur",[]);g(this,"rub",[]);g(this,"degraded",[]);g(this,"tab",be);g(this,"tabForced",!1);g(this,"loaded",!1);g(this,"inFlight",!1);g(this,"degradedRetryTimer",null);this.content.addEventListener("click",e=>this.handleClick(e))}async fetchData(){var e,t;if(!this.inFlight){this.inFlight=!0;try{const{getFxPanelData:s}=await da(async()=>{const{getFxPanelData:r}=await import("./index-D3TAJW85.js");return{getFxPanelData:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])),n=await s();if(!((e=this.element)!=null&&e.isConnected))return;this.updateFx(n)}catch(s){if(this.isAbortError(s)||!((t=this.element)!=null&&t.isConnected))return;this.showError(d("common.failedMarketData"),()=>void this.fetchData())}finally{this.inFlight=!1}}}updateFx(e){this.stress=e.stress,this.usd=e.usd,this.eur=e.eur,this.rub=e.rub,this.degraded=e.degraded,this.loaded=!0,this.render(),this.scheduleDegradedRetry()}scheduleDegradedRetry(){this.clearDegradedRetry(),this.degraded.length!==0&&(this.degradedRetryTimer=setTimeout(()=>{var e;this.degradedRetryTimer=null,(e=this.element)!=null&&e.isConnected&&this.fetchData()},ys))}clearDegradedRetry(){this.degradedRetryTimer!==null&&(clearTimeout(this.degradedRetryTimer),this.degradedRetryTimer=null)}destroy(){this.clearDegradedRetry(),super.destroy()}handleClick(e){const t=e.target.closest(".panel-tab");t!=null&&t.dataset.tab&&(this.tab=t.dataset.tab,this.tabForced=!1,this.render())}hasStress(){return this.stress.length>0}hasSpot(){return this.usd.length>0||this.eur.length>0}hasRub(){return this.rub.length>0}render(){if(!this.loaded)return;if(!this.hasStress()&&!this.hasSpot()&&!this.hasRub()){this.showError(d("common.failedMarketData"),()=>void this.fetchData());return}this.tabForced&&this.tab!==be&&this.hasStress()&&(this.tab=be,this.tabForced=!1),this.tab==="stress"&&!this.hasStress()&&(this.tab="spot",this.tabForced=!0),this.tab==="spot"&&!this.hasSpot()&&(this.tab="rub",this.tabForced=!0),this.tab==="rub"&&!this.hasRub()&&(this.tab="stress",this.tabForced=!0);const e=this.tab==="stress"?this.renderStress():this.tab==="spot"?this.renderSpot():this.renderRub();this.setSafeContent(k`${this.renderTabs()}${e}${this.renderDegradedNotice()}`)}renderDegradedNotice(){if(this.degraded.length===0)return k``;const e=this.degraded.map(t=>d(`components.fx.source.${t}`)).join(", ");return k`<div class="fx-degraded">${d("components.fx.degraded",{sources:e})}</div>`}renderTabs(){const e=[];return this.hasStress()&&e.push(k`<button class="panel-tab ${this.tab==="stress"?"active":""}" data-tab="stress">${d("components.fx.tabs.stress")}</button>`),this.hasSpot()&&e.push(k`<button class="panel-tab ${this.tab==="spot"?"active":""}" data-tab="spot">${d("components.fx.tabs.spot")}</button>`),this.hasRub()&&e.push(k`<button class="panel-tab ${this.tab==="rub"?"active":""}" data-tab="rub">${d("components.fx.tabs.rub")}</button>`),k`<div class="panel-tabs">${z(e)}</div>`}renderStress(){const e=z(this.stress.map(c=>{const m=c.yoyChange===null?k`<td class="fx-na">--</td>`:k`<td class="${te(c.yoyChange)}">${Je(c.yoyChange)}</td>`,f=c.peakRate!==null&&c.troughRate!==null&&c.peakDate!==null&&c.troughDate!==null?k`<td class="fx-window">
            <span class="fx-window-rates">${G(c.peakRate)} → ${G(c.troughRate)}</span>
            <span class="fx-window-dates">${c.peakDate} → ${c.troughDate}</span>
          </td>`:k`<td class="fx-na">--</td>`;return k`
        <tr class="${c.stressed?"fx-stressed":""}">
          <td class="fx-ccy">
            <span class="fx-ccy-code">${c.currency}</span>
            <span class="fx-ccy-country">${c.countryCode}</span>
          </td>
          ${m}
          <td class="${te(c.drawdown24m)}">${Je(c.drawdown24m)}</td>
          ${f}
        </tr>`})),t=this.stress.map(c=>c.asOf).filter(c=>c!==null),s=t.length>0?t.reduce((c,m)=>c<m?c:m):null,n=t.length>0?t.reduce((c,m)=>c>m?c:m):null,r=s===null||n===null?null:s===n?n:`${s} → ${n}`,l=this.stress.filter(c=>c.stressed).length;return k`
      <div class="fx-scroll table-scroll table-scroll-pinned-start" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
        <table class="wm-table fx-table">
          <thead>
            <tr>
              <th scope="col" class="fx-ccy">${d("components.fx.currency")}</th>
              <th scope="col">${d("components.fx.yoy")}</th>
              <th scope="col">${d("components.fx.drawdown")}</th>
              <th scope="col" class="fx-window">${d("components.fx.peakToTrough")}</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
      </div>
      <div class="fx-footer">
        ${d("components.fx.stressedCount",{stressed:l,total:this.stress.length,threshold:`${Aa}%`})}
        · ${d("components.fx.sourceYahoo")}${r?` · ${r}`:""}
      </div>`}renderSpot(){const e=[];if(this.usd.length>0){const t=z(this.usd.map(s=>k`
        <tr>
          <td class="fx-ccy"><span class="fx-ccy-code">${s.currency}</span></td>
          <td>${G(s.unitsPerUsd)}</td>
          <td class="fx-inverse">${G(s.usdPerUnit)}</td>
        </tr>`));e.push(k`
        <div class="fx-section-title">${d("components.fx.usdBase")}</div>
        <div class="fx-scroll table-scroll table-scroll-pinned-start" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table fx-table">
            <thead>
              <tr>
                <th scope="col" class="fx-ccy">${d("components.fx.currency")}</th>
                <th scope="col">${d("components.fx.perUsd")}</th>
                <th scope="col" class="fx-inverse">${d("components.fx.usdPerUnit")}</th>
              </tr>
            </thead>
            <tbody>${t}</tbody>
          </table>
        </div>
        <div class="fx-footer">${d("components.fx.sourceYahoo")}</div>`)}if(this.eur.length>0){const t=z(this.eur.map(s=>{const n=s.change1d===null?k`<td class="fx-na">--</td>`:k`<td class="${te(s.change1d)}">${Ze(s.change1d)}</td>`;return k`
          <tr>
            <td class="fx-ccy"><span class="fx-ccy-code">EUR/${s.currency}</span></td>
            <td>${G(s.rate)}</td>
            ${n}
          </tr>`}));e.push(k`
        <div class="fx-section-title">${d("components.fx.eurBase")}</div>
        <div class="fx-scroll table-scroll table-scroll-pinned-start" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table fx-table">
            <thead>
              <tr>
                <th scope="col" class="fx-ccy">${d("components.fx.pair")}</th>
                <th scope="col">${d("components.fx.rate")}</th>
                <th scope="col">${d("components.fx.change1d")}</th>
              </tr>
            </thead>
            <tbody>${t}</tbody>
          </table>
        </div>
        <div class="fx-footer">${d("components.fx.sourceEcb")}</div>`)}return z(e)}renderRub(){const e=z(this.rub.map(t=>{const s=t.change1d===null?k`<td class="fx-na">--</td>`:k`<td class="${te(t.change1d)}">${Ze(t.change1d)}</td>`;return k`
        <tr>
          <td class="fx-ccy"><span class="fx-ccy-code">${t.currency}</span></td>
          <td>${G(t.rubPerUnit)}</td>
          ${s}
        </tr>`}));return k`
      <div class="fx-section-title">${d("components.fx.rubBase")}</div>
      <div class="fx-scroll table-scroll table-scroll-pinned-start" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
        <table class="wm-table fx-table">
          <thead>
            <tr>
              <th scope="col" class="fx-ccy">${d("components.fx.currency")}</th>
              <th scope="col">${d("components.fx.rubPerUnit")}</th>
              <th scope="col">${d("components.fx.change1d")}</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
      </div>
      <div class="fx-footer">${d("components.fx.sourceCbr")}</div>`}}const Nn=Object.freeze(Object.defineProperty({__proto__:null,FxPanel:bs},Symbol.toStringTag,{value:"Module"})),xs=A(()=>new fe(E(),{fetch:R}));function et(a){var e,t,s,n,r,l,c,m,p,f,v,b,h,u,y,$,S,x,C,P,D,J,j;const i=a.signals;return{timestamp:a.timestamp,verdict:a.verdict,bullishCount:a.bullishCount,totalCount:a.totalCount,signals:{liquidity:{status:((e=i==null?void 0:i.liquidity)==null?void 0:e.status)??"UNKNOWN",value:((t=i==null?void 0:i.liquidity)==null?void 0:t.value)??null,sparkline:((s=i==null?void 0:i.liquidity)==null?void 0:s.sparkline)??[]},flowStructure:{status:((n=i==null?void 0:i.flowStructure)==null?void 0:n.status)??"UNKNOWN",btcReturn5:((r=i==null?void 0:i.flowStructure)==null?void 0:r.btcReturn5)??null,qqqReturn5:((l=i==null?void 0:i.flowStructure)==null?void 0:l.qqqReturn5)??null},macroRegime:{status:((c=i==null?void 0:i.macroRegime)==null?void 0:c.status)??"UNKNOWN",qqqRoc20:((m=i==null?void 0:i.macroRegime)==null?void 0:m.qqqRoc20)??null,xlpRoc20:((p=i==null?void 0:i.macroRegime)==null?void 0:p.xlpRoc20)??null},technicalTrend:{status:((f=i==null?void 0:i.technicalTrend)==null?void 0:f.status)??"UNKNOWN",btcPrice:((v=i==null?void 0:i.technicalTrend)==null?void 0:v.btcPrice)??null,sma50:((b=i==null?void 0:i.technicalTrend)==null?void 0:b.sma50)??null,sma200:((h=i==null?void 0:i.technicalTrend)==null?void 0:h.sma200)??null,vwap30d:((u=i==null?void 0:i.technicalTrend)==null?void 0:u.vwap30d)??null,mayerMultiple:((y=i==null?void 0:i.technicalTrend)==null?void 0:y.mayerMultiple)??null,sparkline:(($=i==null?void 0:i.technicalTrend)==null?void 0:$.sparkline)??[]},hashRate:{status:((S=i==null?void 0:i.hashRate)==null?void 0:S.status)??"UNKNOWN",change30d:((x=i==null?void 0:i.hashRate)==null?void 0:x.change30d)??null},priceMomentum:{status:((C=i==null?void 0:i.priceMomentum)==null?void 0:C.status)??"UNKNOWN"},fearGreed:{status:((P=i==null?void 0:i.fearGreed)==null?void 0:P.status)??"UNKNOWN",value:((D=i==null?void 0:i.fearGreed)==null?void 0:D.value)??null,history:((J=i==null?void 0:i.fearGreed)==null?void 0:J.history)??[]}},meta:{qqqSparkline:((j=a.meta)==null?void 0:j.qqqSparkline)??[]},unavailable:a.unavailable}}function ae(a,i=80,e=24,t="#4fc3f7"){if(!a||a.length<2)return"";const s=Math.min(...a),r=Math.max(...a)-s||1,l=a.map((c,m)=>{const p=m/(a.length-1)*i,f=e-(c-s)/r*(e-2)-1;return`${p.toFixed(1)},${f.toFixed(1)}`}).join(" ");return`<svg width="${i}" height="${e}" viewBox="0 0 ${i} ${e}" class="signal-sparkline" aria-hidden="true"><polyline points="${l}" fill="none" stroke="${t}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function $s(a,i=48){if(a===null)return'<span class="signal-value unknown">N/A</span>';const e=Math.max(0,Math.min(100,a)),t=(i-6)/2,s=2*Math.PI*t,n=s-e/100*s;let r="#f44336";return e>=75?r="#4caf50":e>=50?r="#ff9800":e>=25&&(r="#ff5722"),`<svg width="${i}" height="${i}" viewBox="0 0 ${i} ${i}" class="fg-donut" role="img" aria-label="Fear and greed index: ${e}">
    <circle cx="${i/2}" cy="${i/2}" r="${t}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="5"/>
    <circle cx="${i/2}" cy="${i/2}" r="${t}" fill="none" stroke="${r}" stroke-width="5" stroke-dasharray="${s}" stroke-dashoffset="${n}" stroke-linecap="round" transform="rotate(-90 ${i/2} ${i/2})"/>
    <text x="${i/2}" y="${i/2+4}" text-anchor="middle" fill="${r}" style="font-size:calc(12px * var(--wm-panel-effective-scale, 1))" font-weight="bold">${e}</text>
  </svg>`}function ws(a){const i=a.toUpperCase();return["GREED","EXTREME GREED"].includes(i)?"#4caf50":["FEAR","EXTREME FEAR"].includes(i)?"#f44336":"#4fc3f7"}function tt(a){const i=a.toUpperCase();return["BULLISH","RISK-ON","GROWING","PROFITABLE","ALIGNED","NORMAL","EXTREME GREED","GREED"].includes(i)?"badge-bullish":["BEARISH","DEFENSIVE","DECLINING","SQUEEZE","PASSIVE GAP","EXTREME FEAR","FEAR"].includes(i)?"badge-bearish":"badge-neutral"}function H(a,i="%"){return a===null?"N/A":`${a>0?"+":""}${a.toFixed(1)}${i}`}class Ss extends _{constructor(){super({id:"macro-signals",title:d("panels.macroSignals"),showCount:!1,infoTooltip:d("components.macroSignals.infoTooltip")});g(this,"data",null);g(this,"loading",!0);g(this,"error",null);g(this,"lastTimestamp","")}async fetchData(){const e=U("macroSignals");return e!=null&&e.signals&&e.totalCount>0?(this.data=et(e),this.lastTimestamp=this.data.timestamp,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc(),!0):this.refreshFromRpc()}async refreshFromRpc(){var s,n,r;try{const l=await xs().getMacroSignals({});if(!((s=this.element)!=null&&s.isConnected))return!1;this.data=et(l),this.error=null}catch(l){if(this.isAbortError(l)||!((n=this.element)!=null&&n.isConnected))return!1;if(!this.data)console.warn("[MacroSignals] Fetch error:",l),this.error=d("common.noDataShort");else return!1}this.loading=!1,this.renderPanel();const e=((r=this.data)==null?void 0:r.timestamp)??"",t=e!==this.lastTimestamp;return this.lastTimestamp=e,t}renderPanel(){var r,l,c;if(this.loading){this.showLoading(d("common.computingSignals"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}if(this.data.unavailable){this.showError(d("common.upstreamUnavailable"),()=>void this.fetchData());return}const e=this.data,t=e.signals,n=`
      <div class="macro-signals-container">
        <div class="macro-verdict ${e.verdict==="BUY"?"verdict-buy":e.verdict==="CASH"?"verdict-cash":"verdict-unknown"}">
          <span class="verdict-label">${d("components.macroSignals.overall")}</span>
          <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));background:rgba(247,147,26,0.15);color:#f7931a;border:1px solid rgba(247,147,26,0.3);padding:1px 5px;border-radius:3px;font-weight:700;letter-spacing:0.04em;vertical-align:middle">&#x20bf; BTC</span>
          <span class="verdict-value">${e.verdict==="BUY"?d("components.macroSignals.verdict.buy"):e.verdict==="CASH"?d("components.macroSignals.verdict.cash"):o(e.verdict)}</span>
          <span class="verdict-detail">${d("components.macroSignals.bullish",{count:String(e.bullishCount),total:String(e.totalCount)})}</span>
        </div>
        <div class="signals-grid">
          ${this.renderSignalCard(d("components.macroSignals.signals.liquidity"),t.liquidity.status,H(t.liquidity.value),ae(t.liquidity.sparkline,60,20,"#4fc3f7"),"JPY 30d ROC","https://www.tradingview.com/symbols/JPYUSD/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.flow"),t.flowStructure.status,`BTC ${H(t.flowStructure.btcReturn5)} / QQQ ${H(t.flowStructure.qqqReturn5)}`,"","5d returns",null)}
          ${this.renderSignalCard(d("components.macroSignals.signals.regime"),t.macroRegime.status,`QQQ ${H(t.macroRegime.qqqRoc20)} / XLP ${H(t.macroRegime.xlpRoc20)}`,ae(e.meta.qqqSparkline,60,20,"#ab47bc"),"20d ROC","https://www.tradingview.com/symbols/QQQ/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.btcTrend"),t.technicalTrend.status,`$${((r=t.technicalTrend.btcPrice)==null?void 0:r.toLocaleString())??"N/A"}`,ae(t.technicalTrend.sparkline,60,20,"#ff9800"),`SMA50: $${((l=t.technicalTrend.sma50)==null?void 0:l.toLocaleString())??"-"} | VWAP: $${((c=t.technicalTrend.vwap30d)==null?void 0:c.toLocaleString())??"-"} | Mayer: ${t.technicalTrend.mayerMultiple??"-"}`,"https://www.tradingview.com/symbols/BTCUSD/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.hashRate"),t.hashRate.status,H(t.hashRate.change30d),"","30d change","https://mempool.space/mining")}
          ${this.renderSignalCard(d("components.macroSignals.signals.momentum"),t.priceMomentum.status,"","","Mayer Multiple",null)}
          ${this.renderFearGreedCard(t.fearGreed)}
        </div>
      </div>
    `;this.setSafeContent(w(n,"legacy Panel.setContent() migration"))}renderSignalCard(e,t,s,n,r,l){const c=tt(t);return`
      <div class="signal-card${l?" signal-card-linked":""}">
        <div class="signal-header">
          ${l?`<a href="${o(l)}" target="_blank" rel="noopener" class="signal-name signal-card-link">${o(e)}</a>`:`<span class="signal-name">${o(e)}</span>`}
          <span class="signal-badge ${c}">${o(t)}</span>
        </div>
        <div class="signal-body">
          ${n?`<div class="signal-sparkline-wrap">${n}</div>`:""}
          ${s?`<span class="signal-value">${s}</span>`:""}
        </div>
        ${r?`<div class="signal-detail">${o(r)}</div>`:""}
      </div>
    `}renderFearGreedCard(e){const t=tt(e.status);return`
      <div class="signal-card signal-card-fg">
        <div class="signal-header">
          <span class="signal-name">${d("components.macroSignals.signals.fearGreed")}</span>
          <span class="signal-badge ${t}">${o(e.status)}</span>
        </div>
        <div class="signal-body signal-body-fg">
          <div style="display:flex;align-items:center;gap:8px">
            ${$s(e.value)}
            ${ae(e.history.map(s=>s.value),80,28,ws(e.status))}
          </div>
        </div>
        <div class="signal-detail">
          <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener">alternative.me</a>
        </div>
      </div>
    `}}const In=Object.freeze(Object.defineProperty({__proto__:null,MacroSignalsPanel:Ss},Symbol.toStringTag,{value:"Module"})),_s=A(()=>new N(E(),{fetch:R}));function at(a){return a<=20?"#e74c3c":a<=40?"#e67e22":a<=60?"#f1c40f":a<=80?"#2ecc71":"#27ae60"}function B(a,i=2){return a==null?"N/A":a.toFixed(i)}function ks(a){return a<=20?{state:"Crisis / Risk-Off",stance:"CASH",color:"#c0392b"}:a<=35?{state:"Stressed / Defensive",stance:"DEFENSIVE",color:"#e67e22"}:a<=50?{state:"Fragile / Hedged",stance:"HEDGED",color:"#f1c40f"}:a<=65?{state:"Stable / Normal",stance:"NORMAL",color:"#2ecc71"}:{state:"Strong / Risk-On",stance:"AGGRESSIVE",color:"#27ae60"}}function Cs(a){var l,c,m;const i=[],e=((l=a.momentum)==null?void 0:l.score)??50,t=((c=a.sentiment)==null?void 0:c.score)??50,s=a.cnnFearGreed,n=a.compositeScore,r=((m=a.trend)==null?void 0:m.score)??50;return e<10&&i.push("Momentum at extreme low — broad equity selling pressure"),t<15&&i.push("Sentiment in extreme fear zone"),s>0&&Math.abs(n-s)>20&&i.push(`CNN F&G ${Math.round(s)} diverges ${Math.abs(Math.round(n-s))}pts from composite — sentiment/structural disconnect`),r<20&&i.push("Trend in breakdown — price structure deteriorating"),i}function Es(a,i,e,t){function c($,S){const x=$*Math.PI/180;return`${(100+S*Math.cos(x)).toFixed(2)},${(100-S*Math.sin(x)).toFixed(2)}`}const p=[{a1:180,a2:144,fill:"#c0392b"},{a1:144,a2:108,fill:"#e67e22"},{a1:108,a2:72,fill:"#f1c40f"},{a1:72,a2:36,fill:"#2ecc71"},{a1:36,a2:0,fill:"#27ae60"}].map($=>`<path d="M${c($.a1,88)} A88,88 0 0,0 ${c($.a2,88)} L${c($.a2,60)} A60,60 0 0,1 ${c($.a1,60)} Z" fill="${$.fill}" opacity="0.88"/>`).join(""),f=(180-a*1.8)*Math.PI/180,v=(100+75*Math.cos(f)).toFixed(1),b=(100-75*Math.sin(f)).toFixed(1),h=e!=null?`${e>=0?"+":""}${e.toFixed(1)} vs prev`:"",u=e!=null?e>=0?"#2ecc71":"#e74c3c":"",y=h?`<div data-gauge-role="delta" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));line-height:1.25;color:${u}">${h}</div>`:"";return`<div data-gauge-role="root" style="display:flex;flex-direction:column;align-items:center;text-align:center;font-family:system-ui,-apple-system,sans-serif">
    <svg viewBox="0 0 200 115" width="200" height="115" style="display:block;max-width:100%" aria-hidden="true">
      ${p}
      <line x1="100" y1="100" x2="${v}" y2="${b}" stroke="${t}" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="100" cy="100" r="6" fill="${t}"/>
      <circle cx="100" cy="100" r="3" fill="rgba(8,8,8,0.9)"/>
    </svg>
    <div data-gauge-role="score" style="font-size:calc(26px * var(--wm-panel-effective-scale, 1));font-weight:700;line-height:1;color:${t}">${Math.round(a)}</div>
    <div data-gauge-role="label" style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:600;line-height:1.25;color:${t};letter-spacing:0.07em">${i}</div>
    ${y}
  </div>`}function Ps(a){var n,r,l,c,m,p,f,v,b,h;const i=a.composite;if(!(i!=null&&i.score))return null;const e=a.categories??{},t=a.headerMetrics??{},s=u=>u?{score:Number(u.score??50),weight:Number(u.weight??0),contribution:Number(u.contribution??0),degraded:!!u.degraded,inputsJson:JSON.stringify(u.inputs??{})}:void 0;return{compositeScore:Number(i.score),compositeLabel:String(i.label??""),previousScore:Number(i.previous??0),seededAt:String(a.timestamp??""),sentiment:s(e.sentiment),volatility:s(e.volatility),positioning:s(e.positioning),trend:s(e.trend),breadth:s(e.breadth),momentum:s(e.momentum),liquidity:s(e.liquidity),credit:s(e.credit),macro:s(e.macro),crossAsset:s(e.crossAsset),vix:Number(((n=t==null?void 0:t.vix)==null?void 0:n.value)??0),hySpread:Number(((r=t==null?void 0:t.hySpread)==null?void 0:r.value)??0),yield10y:Number(((l=t==null?void 0:t.yield10y)==null?void 0:l.value)??0),putCallRatio:Number(((c=t==null?void 0:t.putCall)==null?void 0:c.value)??0),pctAbove200d:Number(((m=t==null?void 0:t.pctAbove200d)==null?void 0:m.value)??0),cnnFearGreed:Number(((p=t==null?void 0:t.cnnFearGreed)==null?void 0:p.value)??0),cnnLabel:String(((f=t==null?void 0:t.cnnFearGreed)==null?void 0:f.label)??""),aaiiBull:Number(((v=t==null?void 0:t.aaiBull)==null?void 0:v.value)??0),aaiiBear:Number(((b=t==null?void 0:t.aaiBear)==null?void 0:b.value)??0),fedRate:String(((h=t==null?void 0:t.fedRate)==null?void 0:h.value)??""),unavailable:!1}}const As=["sentiment","volatility","positioning","trend","breadth","momentum","liquidity","credit","macro","crossAsset"],Ds={sentiment:"Sentiment",volatility:"Volatility",positioning:"Positioning",trend:"Trend",breadth:"Breadth",momentum:"Momentum",liquidity:"Liquidity",credit:"Credit",macro:"Macro",crossAsset:"Cross-Asset"};class Rs extends _{constructor(){super({id:"fear-greed",title:d("panels.fearGreed"),showCount:!1,infoTooltip:"Composite sentiment index: 10 weighted categories (volatility, positioning, breadth, momentum, liquidity, credit, macro, cross-asset, sentiment, trend)."});g(this,"data",null)}async fetchData(){const e=U("fearGreedIndex");if(e&&!e.unavailable){const s=Ps(e);if(s&&s.compositeScore>0)return this.data=s,this.renderPanel(),this.refreshFromRpc(),!0}return this.showLoading(),this.refreshFromRpc()}async refreshFromRpc(){try{const t=await _s().getFearGreedIndex({});return t.unavailable?(this.data||this.showError(d("common.noDataShort"),()=>void this.fetchData()),!1):(this.data=t,this.renderPanel(),!0)}catch(e){return this.data||this.showError(e instanceof Error?e.message:d("common.failedToLoad"),()=>void this.fetchData()),!1}}renderPanel(){if(!this.data){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,t=e.compositeScore,s=o(e.compositeLabel),n=e.previousScore,r=n>0?t-n:null,l=at(t),c=ks(t),m=Cs(e),p=As.map(u=>{const y=e[u];if(!y)return"";const $=Math.round(y.score??50),S=Math.round((y.weight??0)*100),x=(y.contribution??0).toFixed(1),C=y.degraded?' <span style="color:#e67e22;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">degraded</span>':"",P=at($),D=Ds[u]??u;return`
        <div style="margin:4px 0">
          <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
            <span>${o(D)}${C}</span>
            <span style="color:${P};font-weight:600">${$}</span>
          </div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin:2px 0">
            <div style="width:${$}%;height:100%;background:${P};border-radius:2px;transition:width 0.3s"></div>
          </div>
          <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${S}% weight &middot; +${x} pts</div>
        </div>`}).join(""),f=(u,y)=>`<div style="text-align:center;padding:6px 4px">
        <div style="font-size:calc(18px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text)">${o(y)}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">${o(u)}</div>
      </div>`,v=[f("VIX",e.vix>0?B(e.vix,2):"N/A"),f("HY Spread",e.hySpread>0?`${B(e.hySpread,2)}%`:"N/A"),f("10Y Yield",e.yield10y>0?`${B(e.yield10y,2)}%`:"N/A"),f("P/C Ratio",e.putCallRatio>0?B(e.putCallRatio,2):"N/A"),f("% > 200d",e.pctAbove200d?`${B(e.pctAbove200d,1)}%`:"N/A"),f("CNN F&G",e.cnnFearGreed?`${Math.round(e.cnnFearGreed)}`:"N/A"),f("AAII Bull",e.aaiiBull?`${B(e.aaiiBull,1)}%`:"N/A"),f("AAII Bear",e.aaiiBear?`${B(e.aaiiBear,1)}%`:"N/A"),f("Fed Rate",e.fedRate||"N/A")].join(""),b=m.length>0?`<div style="margin-bottom:10px">
          ${m.map(u=>`<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;margin-bottom:4px;border-radius:4px;border:1px solid #e67e22;background:rgba(230,126,34,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#e67e22">&#9888; ${o(u)}</div>`).join("")}
        </div>`:"",h=`
      <div style="padding:12px 0">
        <div style="text-align:center;margin-bottom:12px">
          <div style="text-align:center;font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${c.color};letter-spacing:0.06em;text-transform:uppercase;margin-bottom:4px">${o(c.state)}</div>
          ${Es(t,s,r,l)}
          <div style="text-align:center;margin-top:6px;margin-bottom:8px">
            <span style="display:inline-block;padding:3px 12px;border-radius:999px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#fff;background:${c.color};letter-spacing:0.08em">${o(c.stance)}</span>
          </div>
        </div>
        ${b}
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(255,255,255,0.04);border-radius:8px;padding:4px;margin-bottom:12px">
          ${v}
        </div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px">Category Breakdown</div>
        ${p}
      </div>`;this.setSafeContent(w(h,"legacy Panel.setContent() migration"))}}const Ln=Object.freeze(Object.defineProperty({__proto__:null,FearGreedPanel:Rs},Symbol.toStringTag,{value:"Module"}));function At(a){return a<=-20?"#e74c3c":a<=-10?"#e67e22":a<0?"#f39c12":a<10?"#95a5a6":a<20?"#27ae60":"#2ecc71"}function Fs(a){return a<=-20?"Extreme Bearish":a<=-10?"Bearish":a<0?"Mildly Bearish":a<10?"Neutral":a<20?"Bullish":"Extreme Bullish"}function xe(a,i,e,t){return`<div style="margin:4px 0">
    <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
      <span>${o(e)}</span>
      <span style="color:${i};font-weight:600">${o(t)}</span>
    </div>
    <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:3px">
      <div style="width:${Math.min(a,100)}%;height:100%;background:${i};border-radius:3px;transition:width 0.3s"></div>
    </div>
  </div>`}function Ts(a){const i=At(a),e=Math.max(-60,Math.min(60,a)),t=50,s=Math.abs(e)/60*50,n=e>=0?t:t-s;return`<div style="margin:8px 0">
    <div style="display:flex;justify-content:space-between;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:3px">
      <span>Bull-Bear Spread</span>
      <span style="color:${i};font-weight:700">${e>=0?"+":""}${a.toFixed(1)}%</span>
    </div>
    <div style="position:relative;height:10px;background:rgba(255,255,255,0.06);border-radius:4px">
      <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.2)"></div>
      <div style="position:absolute;top:0;bottom:0;left:${n.toFixed(1)}%;width:${s.toFixed(1)}%;background:${i};border-radius:3px;transition:all 0.3s"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">
      <span>Bearish</span>
      <span>Bullish</span>
    </div>
  </div>`}function Ms(a){if(a.length<2)return"";const i=[...a].reverse(),e=280,t=60,s=4,n=i.map($=>$.spread),r=Math.max(Math.abs(Math.min(...n)),Math.abs(Math.max(...n)),20),l=(e-s*2)/(i.length-1),c=t/2,m=(c-s)/r,f=i.map(($,S)=>{const x=(s+S*l).toFixed(1),C=(c-$.spread*m).toFixed(1);return`${x},${C}`}).join(" "),v=i.map(($,S)=>{const x=s+S*l-1,C=Math.abs($.spread)*m,P=$.spread>=0?c-C:c,D=$.spread>=0?"rgba(39,174,96,0.25)":"rgba(231,76,60,0.25)";return`<rect x="${x.toFixed(1)}" y="${P.toFixed(1)}" width="2" height="${C.toFixed(1)}" fill="${D}" rx="0.5"/>`}).join(""),b=`<line x1="${s}" y1="${c}" x2="${e-s}" y2="${c}" stroke="rgba(255,255,255,0.15)" stroke-width="0.5" stroke-dasharray="3,3"/>`,h=c+20*m,u=`<line x1="${s}" y1="${h.toFixed(1)}" x2="${e-s}" y2="${h.toFixed(1)}" stroke="rgba(231,76,60,0.3)" stroke-width="0.5" stroke-dasharray="2,4"/>`,y=`<text x="${e-s}" y="${(h-2).toFixed(1)}" text-anchor="end" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" fill="rgba(231,76,60,0.5)" font-family="system-ui,sans-serif">-20 buy signal</text>`;return`<div style="margin:8px 0">
    <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">52-Week Spread History</div>
    <svg viewBox="0 0 ${e} ${t}" width="100%" height="${t}" role="img" aria-label="AAII 52-week bull-bear spread history" style="display:block">
      ${v}
      ${b}
      ${u}
      ${y}
      <polyline points="${f}" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  </div>`}class Ns extends _{constructor(){super({id:"aaii-sentiment",title:"AAII Investor Sentiment",showCount:!1,infoTooltip:"Weekly AAII survey: individual investors report 6-month market outlook as bullish, neutral, or bearish. Spread below -20 is a historical contrarian buy signal."});g(this,"data",null)}async fetchData(){var t;const e=U("aaiiSentiment");if(e!=null&&e.latest)return this.data=e,this.renderPanel(),!0;try{const s=await fetch(wt("/api/bootstrap?keys=aaiiSentiment"),{signal:AbortSignal.timeout(5e3)});if(s.ok){const{data:n}=await s.json();if((t=n.aaiiSentiment)!=null&&t.latest)return this.data=n.aaiiSentiment,this.renderPanel(),!0}}catch{}return this.showError("AAII sentiment data unavailable",()=>{this.fetchData()},300),!1}renderPanel(){var C;if(!((C=this.data)!=null&&C.latest)){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,{latest:t,previous:s,avg8w:n,historicalAvg:r,extremes:l,weeks:c}=e,m=At(t.spread),p=Fs(t.spread),f=s==null?void 0:s.spread,v=f!=null?t.spread-f:null,b=v!=null?`<span style="color:${v>=0?"#2ecc71":"#e74c3c"};font-size:calc(10px * var(--wm-panel-effective-scale, 1));margin-left:4px">${v>=0?"+":""}${v.toFixed(1)} vs prev</span>`:"",h=t.spread<=-20?`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;margin:8px 0;border-radius:4px;border:1px solid #2ecc71;background:rgba(46,204,113,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#2ecc71">
          &#9432; Contrarian buy signal active: spread at ${t.spread.toFixed(1)}% (threshold: -20%)
        </div>`:t.bearish>=50?`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;margin:8px 0;border-radius:4px;border:1px solid #e67e22;background:rgba(230,126,34,0.08);font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#e67e22">
            &#9888; Extreme bearish reading: ${t.bearish.toFixed(1)}% bearish (avg: ${r.bearish}%)
          </div>`:"",u=n?`
      <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">8-Week Moving Average</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;text-align:center">
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#2ecc71">${n.bullish}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bull</div></div>
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#95a5a6">${n.neutral}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Neutral</div></div>
          <div><div style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:#e74c3c">${n.bearish}%</div><div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bear</div></div>
        </div>
      </div>`:"",y=l.spreadBelow20>0||l.bearishAbove50>0?`<div style="margin-top:6px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          52w extremes: ${l.spreadBelow20} contrarian signals, ${l.bearishAbove50} extreme bear, ${l.bullishAbove50} extreme bull
        </div>`:"",$=e.fallback?'<span style="display:inline-block;padding:1px 5px;border-radius:3px;background:rgba(230,126,34,0.15);color:#e67e22;font-size:calc(9px * var(--wm-panel-effective-scale, 1));margin-left:4px">(fallback data)</span>':"",S=t.date?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-align:right;margin-top:4px">Survey: ${o(t.date)}${e.source!=="xls"?` (${o(e.source)})`:""}${$}</div>`:"",x=`
      <div style="padding:12px 0">
        <div style="text-align:center;margin-bottom:8px">
          <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${m};letter-spacing:0.06em;text-transform:uppercase">${o(p)}</div>
          ${b?`<div style="margin-top:2px">${b}</div>`:""}
        </div>

        ${h}

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;padding:8px;background:rgba(255,255,255,0.03);border-radius:6px;margin-bottom:8px">
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#2ecc71">${t.bullish.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bullish</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.bullish}%</div>
          </div>
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#95a5a6">${t.neutral.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Neutral</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.neutral}%</div>
          </div>
          <div>
            <div style="font-size:calc(22px * var(--wm-panel-effective-scale, 1));font-weight:700;color:#e74c3c">${t.bearish.toFixed(1)}%</div>
            <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Bearish</div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">avg ${r.bearish}%</div>
          </div>
        </div>

        ${xe(t.bullish,"#2ecc71","Bullish",`${t.bullish.toFixed(1)}%`)}
        ${xe(t.neutral,"#95a5a6","Neutral",`${t.neutral.toFixed(1)}%`)}
        ${xe(t.bearish,"#e74c3c","Bearish",`${t.bearish.toFixed(1)}%`)}

        ${Ts(t.spread)}

        ${Ms(c)}

        ${u}
        ${y}
        ${S}
      </div>`;this.setSafeContent(w(x,"legacy Panel.setContent() migration"))}}const zn=Object.freeze(Object.defineProperty({__proto__:null,AAIISentimentPanel:Ns},Symbol.toStringTag,{value:"Module"})),Is=A(()=>new N(E(),{fetch:R}));function q(a){return a==null?null:Number.isFinite(a)?a:null}function st(a){const i=a.current,e=(a.history??[]).map(t=>({date:t.date,pctAbove20d:q(t.pctAbove20d),pctAbove50d:q(t.pctAbove50d),pctAbove200d:q(t.pctAbove200d)}));return{currentPctAbove20d:q(a.currentPctAbove20d??(i==null?void 0:i.pctAbove20d)),currentPctAbove50d:q(a.currentPctAbove50d??(i==null?void 0:i.pctAbove50d)),currentPctAbove200d:q(a.currentPctAbove200d??(i==null?void 0:i.pctAbove200d)),updatedAt:a.updatedAt??"",history:e,unavailable:a.unavailable}}const oe=480,De=160,V=32,Re=12,Dt=10,Rt=22,it=oe-V-Re,nt=De-Dt-Rt,Fe=[{key:"pctAbove20d",color:"#3b82f6",label:"Stocks above 20-day moving average (%)",fillOpacity:.08},{key:"pctAbove50d",color:"#f59e0b",label:"Stocks above 50-day moving average (%)",fillOpacity:.06},{key:"pctAbove200d",color:"#22c55e",label:"Stocks above 200-day moving average (%)",fillOpacity:.04}];function Ft(a,i){return i<=1?V+it/2:V+a/(i-1)*it}function ue(a){return Dt+nt-a/100*nt}function rt(a,i){const e=[];let t=[];for(let s=0;s<a.length;s++){const n=a[s][i];if(n==null||!Number.isFinite(n)){t.length>0&&(e.push(t),t=[]);continue}t.push({x:Ft(s,a.length),y:ue(n)})}return t.length>0&&e.push(t),e}function Ls(a){if(a.length<2)return"";const i=ue(0).toFixed(1),e=a[0].x.toFixed(1),t=a[a.length-1].x.toFixed(1),s=a.map(n=>`${n.x.toFixed(1)},${n.y.toFixed(1)}`);return`M${e},${i} L${s.join(" L")} L${t},${i} Z`}function zs(a){return a.length===0?"":a.map(i=>`${i.x.toFixed(1)},${i.y.toFixed(1)}`).join(" ")}function Os(a){if(a.length<2)return'<div style="text-align:center;color:var(--text-dim);padding:20px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">Collecting data. Chart appears after 2+ days.</div>';const i=[0,25,50,75,100].map(c=>{const m=ue(c);return`
      <line x1="${V}" y1="${m.toFixed(1)}" x2="${oe-Re}" y2="${m.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${(V-3).toFixed(0)}" y="${m.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${c}%</text>`}).join(""),e=Math.max(1,Math.floor(a.length/6)),t=a.map((c,m)=>{if(m%e!==0&&m!==a.length-1)return"";const p=Ft(m,a.length),f=c.date.slice(5);return`<text x="${p.toFixed(1)}" y="${De-Rt+13}" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">${o(f)}</text>`}).join(""),s=Fe.map(c=>rt(a,c.key).map(p=>{const f=Ls(p);return f?`<path d="${f}" fill="${c.color}" opacity="${c.fillOpacity}"/>`:""}).join("")).join(""),n=Fe.map(c=>rt(a,c.key).map(p=>p.length<2?"":`<polyline points="${zs(p)}" fill="none" stroke="${c.color}" stroke-width="1.5" opacity="0.9"/>`).join("")).join(""),r=ue(50),l=`<line x1="${V}" y1="${r.toFixed(1)}" x2="${oe-Re}" y2="${r.toFixed(1)}" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 3"/>`;return`<svg viewBox="0 0 ${oe} ${De}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Market breadth: advancing versus declining issues over time" style="width:100%;height:auto;display:block">${i}${l}${t}${s}${n}</svg>`}function Bs(a,i){const e=a>=60?"rgba(34,197,94,0.12)":a>=40?"rgba(245,158,11,0.12)":"rgba(239,68,68,0.12)",t=a>=60?"#22c55e":a>=40?"#f59e0b":"#ef4444";return`<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;background:${e}">
    <span style="width:6px;height:6px;border-radius:50%;background:${i}"></span>
    <span style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${t}">${a.toFixed(1)}%</span>
  </span>`}class Us extends _{constructor(){super({id:"market-breadth",title:d("panels.marketBreadth"),showCount:!1,infoTooltip:"Percentage of S&P 500 stocks trading above their 20, 50, and 200-day simple moving averages. A measure of market participation and internal strength."});g(this,"data",null)}async fetchData(){var t;const e=U("breadthHistory");return e&&!e.unavailable&&((t=e.history)!=null&&t.length)?(this.data=st(e),this.renderPanel(),this.refreshFromRpc(),!0):(this.showLoading(),this.refreshFromRpc())}async refreshFromRpc(){try{const t=await Is().getMarketBreadthHistory({});return t.unavailable?(this.data||this.showError(d("common.noDataShort"),()=>void this.fetchData()),!1):(this.data=st(t),this.renderPanel(),!0)}catch(e){return this.data||this.showError(e instanceof Error?e.message:d("common.failedToLoad"),()=>void this.fetchData()),!1}}renderPanel(){var l,c;if(!((c=(l=this.data)==null?void 0:l.history)!=null&&c.length)){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data,t=Os(e.history),s={pctAbove20d:e.currentPctAbove20d,pctAbove50d:e.currentPctAbove50d,pctAbove200d:e.currentPctAbove200d},r=`
      <div style="padding:12px 0">
        <div style="margin-bottom:8px">${Fe.map(m=>{const p=s[m.key],f=typeof p=="number"&&Number.isFinite(p)&&p>=0;return`<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0">
        <span style="display:flex;align-items:center;gap:6px;font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          <span style="width:8px;height:3px;border-radius:1px;background:${m.color}"></span>
          ${o(m.label)}
        </span>
        ${f?Bs(p,m.color):'<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</span>'}
      </div>`}).join("")}</div>
        <div style="border-radius:6px;background:rgba(255,255,255,0.02);padding:4px 0">${t}</div>
        ${e.updatedAt?`<div style="text-align:right;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:4px">${o(new Date(e.updatedAt).toLocaleString())}</div>`:""}
      </div>`;this.setSafeContent(w(r,"legacy Panel.setContent() migration"))}}const On=Object.freeze(Object.defineProperty({__proto__:null,MarketBreadthPanel:Us},Symbol.toStringTag,{value:"Module"})),js=[{symbol:"^GSPC",label:"S&P 500"},{symbol:"^IXIC",label:"Nasdaq Composite"},{symbol:"BTC-USD",label:"Bitcoin"},{symbol:"ETH-USD",label:"Ethereum"},{symbol:"GC=F",label:"Gold"},{symbol:"CL=F",label:"WTI Crude"}],Gs=[{hours:24,label:"24 hours"},{hours:72,label:"3 days"},{hours:168,label:"7 days"},{hours:336,label:"14 days"}],le=560,Te=210,ce=42,Me=54,de=12,Hs=28,qs=le-ce-Me,$e=Te-de-Hs;function ot(a,i){return a.map(e=>({timestampMs:Pe(e.timestamp),value:e.value})).filter(e=>Number.isFinite(e.timestampMs)&&e.timestampMs>=i&&Number.isFinite(e.value)).sort((e,t)=>e.timestampMs-t.timestampMs)}function lt(a){const i=Math.min(...a),e=Math.max(...a);if(i===e){const s=Math.abs(i)*.05||1;return{min:i-s,max:e+s}}const t=(e-i)*.06;return{min:i-t,max:e+t}}function ct(a){return Math.abs(a)>=1e3?a.toLocaleString(void 0,{maximumFractionDigits:0}):Math.abs(a)>=100?a.toFixed(0):Math.abs(a)>=10?a.toFixed(1):a.toFixed(2)}function dt(a,i,e,t){const s=[];let n=[],r=Number.NEGATIVE_INFINITY;for(const l of a)l.timestampMs-r>t&&n.length>0&&(s.push(n.join(" ")),n=[]),n.push(`${i(l.timestampMs).toFixed(1)},${e(l.value).toFixed(1)}`),r=l.timestampMs;return n.length>0&&s.push(n.join(" ")),s}function Tt(a,i,e){const t=Math.max(...a.map(x=>Pe(x.timestamp)).filter(Number.isFinite),...i.map(x=>Pe(x.timestamp)).filter(Number.isFinite));if(!Number.isFinite(t))return'<div class="news-market-correlation__empty">No timestamped series available.</div>';const s=t-e*60*60*1e3,n=ot(a,s),r=ot(i,s);if(n.length<2||r.length<2)return'<div class="news-market-correlation__empty">Not enough overlapping history for this window.</div>';const l=Math.max(s,Math.min(n[0].timestampMs,r[0].timestampMs)),c=Math.max(n[n.length-1].timestampMs,r[r.length-1].timestampMs),m=Math.max(1,c-l),p=lt(n.map(x=>x.value)),f=lt(r.map(x=>x.value)),v=x=>ce+(x-l)/m*qs,b=x=>de+(1-(x-p.min)/(p.max-p.min))*$e,h=x=>de+(1-(x-f.min)/(f.max-f.min))*$e,u=[0,.25,.5,.75,1].map(x=>{const C=de+x*$e,P=p.max-x*(p.max-p.min),D=f.max-x*(f.max-f.min);return`<line x1="${ce}" y1="${C.toFixed(1)}" x2="${le-Me}" y2="${C.toFixed(1)}" stroke="rgba(255,255,255,0.07)"/><text x="${ce-5}" y="${C.toFixed(1)}" text-anchor="end" dominant-baseline="middle" fill="#f59e0b" font-size="8">${o(ct(P))}</text><text x="${le-Me+5}" y="${C.toFixed(1)}" text-anchor="start" dominant-baseline="middle" fill="#60a5fa" font-size="8">${o(ct(D))}</text>`}).join(""),y=[0,.5,1].map(x=>{const C=l+x*m,P=new Date(C).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1});return`<text x="${v(C).toFixed(1)}" y="${Te-7}" text-anchor="${x===0?"start":x===1?"end":"middle"}" fill="rgba(255,255,255,0.45)" font-size="8">${o(P)}</text>`}).join(""),$=dt(n,v,b,10800*1e3).filter(x=>x.includes(" ")).map(x=>`<polyline points="${x}" fill="none" stroke="#f59e0b" stroke-width="1.6" stroke-linejoin="round"/>`).join(""),S=dt(r,v,h,7200*1e3).filter(x=>x.includes(" ")).map(x=>`<polyline points="${x}" fill="none" stroke="#60a5fa" stroke-width="1.6" stroke-linejoin="round"/>`).join("");return`<svg class="news-market-correlation__chart" viewBox="0 0 ${le} ${Te}" role="img" aria-label="News volume and market price over a shared time axis">${u}${y}${$}${S}</svg>`}function Ys(a){return{"insufficient-data":"Insufficient aligned observations",none:"No clear relationship","weak-positive":"Weak positive relationship","weak-negative":"Weak negative relationship","moderate-positive":"Moderate positive relationship","moderate-negative":"Moderate negative relationship","strong-positive":"Strong positive relationship","strong-negative":"Strong negative relationship"}[a.relationship]}function Vs(a){var e;return a.leadLag.relationship==="neither"?"Neither series clearly leads":`${a.leadLag.relationship==="news-leads"?"News leads":"Market leads"} by ${a.leadLag.hours}h (r=${((e=a.leadLag.coefficient)==null?void 0:e.toFixed(2))??"—"}, n=${a.leadLag.sampleSize})`}class Ws extends _{constructor(){super({id:"news-market-correlation",title:"News ↔ Markets",showCount:!1,className:"panel-wide",defaultRowSpan:2,infoTooltip:"Exploratory Pearson correlation between persisted GDELT topic volume and hourly market returns. The chart shows news volume and price on separate axes. Correlation and lead/lag do not establish causation."});g(this,"selectedTopic","sanctions");g(this,"selectedSymbol","^GSPC");g(this,"windowHours",168);g(this,"hasData",!1);g(this,"requestGeneration",0);g(this,"renderedSelection",null)}async fetchData(){var r,l,c,m,p;const e=++this.requestGeneration,t=this.selectedTopic,s=this.selectedSymbol,n=this.windowHours;this.hasData||this.showLoading();try{const[f,v]=await Promise.all([Da("marketCorrelationSeries"),Fa(t)]);if(e!==this.requestGeneration)return!1;const b=Ma(f)?f:void 0,h=(r=b==null?void 0:b.series)==null?void 0:r.find(S=>S.symbol===s),u=(l=h==null?void 0:h.points)!=null&&l.length?h:(c=b==null?void 0:b.series)==null?void 0:c.find(S=>{var x;return(x=S.points)==null?void 0:x.length});if(!((m=v==null?void 0:v.vol)!=null&&m.length)||!((p=u==null?void 0:u.points)!=null&&p.length)||!b)return this.hasData?this.restoreRenderedSelection():this.showError("Correlation series unavailable",()=>void this.fetchData(),300),!1;this.selectedSymbol=u.symbol;const y=v.vol.map(S=>({timestamp:S.date,value:S.value})),$=Na(y,u.points,{windowHours:n,maxLagHours:6});return this.hasData=!0,this.renderedSelection={topic:t,symbol:u.symbol,windowHours:n},this.renderPanel(y,b,u,$,n),!0}catch(f){return e!==this.requestGeneration||(this.hasData?this.restoreRenderedSelection():this.showError(f instanceof Error?f.message:"Failed to load correlation series",()=>void this.fetchData(),300)),!1}}restoreRenderedSelection(){if(!this.renderedSelection)return;this.selectedTopic=this.renderedSelection.topic,this.selectedSymbol=this.renderedSelection.symbol,this.windowHours=this.renderedSelection.windowHours;const e=this.content.querySelector('[data-role="news-topic"]'),t=this.content.querySelector('[data-role="market-symbol"]'),s=this.content.querySelector('[data-role="window-hours"]');e&&(e.value=this.selectedTopic),t&&(t.value=this.selectedSymbol),s&&(s.value=String(this.windowHours))}renderPanel(e,t,s,n,r){const l=Ta.map(y=>`<option value="${o(y.id)}"${y.id===this.selectedTopic?" selected":""}>${o(y.name)}</option>`).join(""),c=new Set(t.series.filter(y=>{var $;return($=y.points)==null?void 0:$.length}).map(y=>y.symbol)),m=js.map(y=>`<option value="${o(y.symbol)}"${y.symbol===this.selectedSymbol?" selected":""}${c.has(y.symbol)?"":" disabled"}>${o(y.label)}</option>`).join(""),p=Gs.map(y=>`<option value="${y.hours}"${y.hours===this.windowHours?" selected":""}>${o(y.label)}</option>`).join(""),f=n.coefficient===null?"—":n.coefficient.toFixed(2),v=n.confidenceInterval?`[${n.confidenceInterval.low.toFixed(2)}, ${n.confidenceInterval.high.toFixed(2)}]`:"—",b=n.relationship==="none"||n.relationship==="insufficient-data"?"news-market-correlation__result--neutral":n.coefficient!==null&&n.coefficient<0?"news-market-correlation__result--negative":"news-market-correlation__result--positive",h=t.updatedAt?new Date(t.updatedAt).toLocaleString():"unknown",u=`<div class="news-market-correlation">
      <div class="news-market-correlation__controls">
        <label>News topic<select data-role="news-topic">${l}</select></label>
        <label>Market<select data-role="market-symbol">${m}</select></label>
        <label>Window<select data-role="window-hours">${p}</select></label>
      </div>
      <div class="news-market-correlation__legend"><span><i class="news-market-correlation__dot news-market-correlation__dot--news"></i>GDELT news volume</span><span><i class="news-market-correlation__dot news-market-correlation__dot--market"></i>${o(s.label)} price</span></div>
      ${Tt(e,s.points,r)}
      <div class="news-market-correlation__stats">
        <div><span>Pearson r</span><strong>${o(f)}</strong><small>n=${n.sampleSize} hourly returns</small></div>
        <div><span>95% interval</span><strong>${o(v)}</strong><small>displayed window</small></div>
        <div class="${b}"><span>Interpretation</span><strong>${o(Ys(n))}</strong><small>${o(Vs(n))}</small></div>
      </div>
      <div class="news-market-correlation__caveat">Pearson r compares topic volume with hourly market returns. The ±6h lead/lag scan is exploratory. Correlation is not causation; weak and null results are retained.</div>
      <div class="news-market-correlation__freshness">Market series updated ${o(h)}</div>
    </div>`;this.setSafeContent(w(u,"news-market-correlation controlled panel markup"),()=>this.bindControls())}bindControls(){var e,t,s;(e=this.content.querySelector('[data-role="news-topic"]'))==null||e.addEventListener("change",n=>{this.selectedTopic=n.currentTarget.value,this.fetchData()}),(t=this.content.querySelector('[data-role="market-symbol"]'))==null||t.addEventListener("change",n=>{this.selectedSymbol=n.currentTarget.value,this.fetchData()}),(s=this.content.querySelector('[data-role="window-hours"]'))==null||s.addEventListener("change",n=>{this.windowHours=Number(n.currentTarget.value)||168,this.fetchData()})}}const Bn=Object.freeze(Object.defineProperty({__proto__:null,NewsMarketCorrelationPanel:Ws,buildNewsMarketChart:Tt},Symbol.toStringTag,{value:"Module"})),Mt=15e3;class Xs extends _{constructor(){super({id:"nq-pulse",title:"NQ Pulse",showCount:!1,infoTooltip:Ct});g(this,"requestGuard",new St)}async fetchData(){const e=this.requestGuard.begin(),t=Ae([this.signal,me(Mt)]);this.showLoading("Loading NQ context...");try{const s=await Ia(qe,{signal:t});if(!this.requestGuard.isCurrent(e)||this.signal.aborted)return!1;const n=Date.now(),r=za(s.asOf,n),l=Oa({rows:Ua(s.data,qe),freshness:r,asOfLabel:Ba(s.asOf,r)});return this.setSafeContent(w(l,"NQ Pulse rows use escaped instrument labels and formatted quotes")),s.data.length>0}catch(s){if(!this.requestGuard.isCurrent(e)||this.signal.aborted)return!1;const n=La(s);return this.showError(n||!(s instanceof Error)?"NQ context unavailable.":s.message,()=>{this.fetchData()}),!1}}}const Un=Object.freeze(Object.defineProperty({__proto__:null,NQ_PULSE_REQUEST_TIMEOUT_MS:Mt,NqPulsePanel:Xs},Symbol.toStringTag,{value:"Module"})),Ne=15e3,Ks=A(()=>new fe(E(),{fetch:R})),Qs=A(()=>new N(E(),{fetch:R}));class Js extends _{constructor(){super({id:"nq-catalysts",title:"NQ Catalysts",showCount:!1,infoTooltip:Ct});g(this,"requestGuard",new St)}async fetchData(){const e=this.requestGuard.begin();this.showLoading("Loading NQ catalysts...");const t=new Date,s=W(t),n=Ye(t,oa),r=W(t),l=Ye(t,la),c=Ae([this.signal,me(Ne)]),m=Ae([this.signal,me(Ne)]);try{const[p,f]=await Promise.allSettled([Ks().getEconomicCalendar({fromDate:s,toDate:n},{signal:c}),Qs().listEarningsCalendar({fromDate:r,toDate:l},{signal:m})]);if(!this.requestGuard.isCurrent(e)||this.signal.aborted)return!1;const v=p.status!=="fulfilled"||!!p.value.unavailable,b=f.status!=="fulfilled"||!!f.value.unavailable,h=p.status==="fulfilled"?p.value.events??[]:[],u=f.status==="fulfilled"?f.value.earnings??[]:[],y=ja({macro:Ha(h,t),earnings:Ga(u,t),macroUnavailable:v,earningsUnavailable:b,macroAsOf:p.status==="fulfilled"?p.value.asOf:void 0,earningsAsOf:f.status==="fulfilled"?f.value.asOf:void 0});return this.setSafeContent(w(y,"NQ Catalysts rows use escaped event labels and source dates")),!v||!b}catch(p){return!this.requestGuard.isCurrent(e)||this.signal.aborted||this.isAbortError(p)||this.showError(p instanceof Error?p.message:"NQ catalysts unavailable.",()=>{this.fetchData()}),!1}}}const jn=Object.freeze(Object.defineProperty({__proto__:null,NQ_CATALYSTS_REQUEST_TIMEOUT_MS:Ne,NqCatalystsPanel:Js},Symbol.toStringTag,{value:"Module"})),Zs=A(()=>new fe(E(),{fetch:R})),we=["DGS1MO","DGS3MO","DGS6MO","DGS1","DGS2","DGS5","DGS10","DGS30"],Ie=["1M","3M","6M","1Y","2Y","5Y","10Y","30Y"],Nt=["1Y","2Y","5Y","10Y","20Y","30Y"],Be=480,Ue=180,X=40,It=20,Lt=16,zt=24,Le=Be-X-It,pt=Ue-Lt-zt;function je(a,i){return i<=1?X+Le/2:X+a/(i-1)*Le}function Q(a,i,e){const t=e-i||1,s=(a-i)/t;return Lt+pt-s*pt}function mt(a,i,e){return a.map((t,s)=>{if(t.value===null)return null;const n=je(s,a.length),r=Q(t.value,i,e);return`${n.toFixed(2)},${r.toFixed(2)}`}).filter(Boolean).join(" ")}function ei(a,i){const e=(i-a)/3,t=[];for(let s=0;s<=3;s++){const n=a+e*s,r=Q(n,a,i);t.push(`<text x="${(X-4).toFixed(0)}" y="${r.toFixed(2)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))" alignment-baseline="middle">${n.toFixed(1)}%</text>`),t.push(`<line x1="${X}" y1="${r.toFixed(2)}" x2="${Be-It}" y2="${r.toFixed(2)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`)}return t.join("")}function ti(a){return Ie.slice(0,a).map((i,e)=>{const t=je(e,a),s=Ue-zt+12;return`<text x="${t.toFixed(2)}" y="${s}" text-anchor="middle" fill="rgba(255,255,255,0.5)" style="font-size:calc(8px * var(--wm-panel-effective-scale, 1))">${o(i)}</text>`}).join("")}function ai(a,i,e,t){return a.map((s,n)=>{if(s.value===null)return"";const r=je(n,a.length),l=Q(s.value,i,e);return`<circle cx="${r.toFixed(2)}" cy="${l.toFixed(2)}" r="3" fill="${t}" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`}).join("")}function Ot(a){const e={"1Y":3,"2Y":4,"5Y":5,"10Y":6,"20Y":6.5,"30Y":7}[a];return e==null?null:X+e/7*Le}function si(a,i,e){const t=Nt.map(s=>{const n=a[s];if(n==null)return null;const r=Ot(s);if(r===null)return null;const l=Q(n,i,e);return`${r.toFixed(2)},${l.toFixed(2)}`}).filter(Boolean);return t.length<2?"":`<polyline points="${t.join(" ")}" fill="none" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5,3" stroke-linecap="round" stroke-linejoin="round"/>`}function ii(a,i,e){return Nt.map(t=>{const s=a[t];if(s==null)return"";const n=Ot(t);if(n===null)return"";const r=Q(s,i,e);return`<circle cx="${n.toFixed(2)}" cy="${r.toFixed(2)}" r="2.5" fill="#2ecc71" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`}).join("")}function ni(a,i,e){const t=a.map(h=>h.value).filter(h=>h!==null),s=i.map(h=>h.value).filter(h=>h!==null),n=e?Object.values(e):[],r=[...t,...s,...n];if(r.length===0)return'<div style="padding:16px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">No yield data available.</div>';const l=Math.max(0,Math.min(...r)-.25),c=Math.max(...r)+.5,m=mt(a,l,c),p=mt(i,l,c),f=p.length>0?`<polyline points="${p}" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round"/>`:"",v=e?si(e,l,c):"",b=e?ii(e,l,c):"";return`
    <svg viewBox="0 0 ${Be} ${Ue}" width="100%" role="img" aria-label="Treasury yield curve by maturity" style="display:block;overflow:visible">
      ${ei(l,c)}
      ${ti(a.length)}
      ${f}
      ${v}
      <polyline points="${m}" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${ai(a,l,c,"#3498db")}
      ${b}
    </svg>`}function ri(a,i){const e=a.map(s=>`<th scope="col" style="text-align:center">${o(s.tenor)}</th>`).join(""),t=a.map(s=>{const n=s.value!==null?`${s.value.toFixed(2)}%`:"N/A";return`<td style="text-align:center">${o(n)}</td>`}).join("");return`
    <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${o(i)}" style="margin-top:8px">
      <table class="wm-table">
        <thead><tr>${e}</tr></thead>
        <tbody><tr>${t}</tr></tbody>
      </table>
    </div>`}function oi(a,i,e=80,t=22){const s=a.map(m=>m.value).filter(m=>Number.isFinite(m));if(s.length<2)return`<svg width="${e}" height="${t}"></svg>`;const n=Math.min(...s),l=Math.max(...s)-n||.01,c=s.map((m,p)=>{const f=p/(s.length-1)*e,v=t-(m-n)/l*(t-2)-1;return`${f.toFixed(1)},${v.toFixed(1)}`}).join(" ");return`<svg width="${e}" height="${t}" aria-hidden="true" style="display:inline-block;vertical-align:middle"><polyline points="${c}" fill="none" stroke="${o(i)}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function li(a){return a.some(t=>t.obs.length>0)?`<div style="padding:4px 0">${a.map(t=>{const s=t.obs[t.obs.length-1];if(!s)return"";const n=t.obs[t.obs.length-2],r=n?s.value-n.value:null,l=r!==null?`${r>=0?"+":""}${r.toFixed(2)}%`:"",c=r===null?"":r>=0?"#e74c3c":"#27ae60";return`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="width:90px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(t.label)}</div>
      ${oi(t.obs.slice(-24),t.color)}
      <div style="min-width:44px;text-align:right;font-size:calc(13px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text);font-variant-numeric:tabular-nums">${o(s.value.toFixed(2))}%</div>
      ${l?`<div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:${c}">${o(l)}</div>`:""}
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:auto">${o(s.date)}</div>
    </div>`}).join("")}</div>
    <div style="margin-top:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Source: ECB</div>`:'<div style="padding:16px;color:var(--text-dim);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">ECB rate data unavailable</div>'}class ci extends _{constructor(){super({id:"yield-curve",title:"Yield Curve & Rates",showCount:!1,infoTooltip:d("components.yieldCurve.infoTooltip")});g(this,"_hasData",!1);g(this,"_tab","curve");g(this,"_current",[]);g(this,"_prior",[]);g(this,"_ecbRates",null);g(this,"_rateRows",[]);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");((t==null?void 0:t.dataset.tab)==="curve"||(t==null?void 0:t.dataset.tab)==="rates")&&(this._tab=t.dataset.tab,this._render())})}async fetchData(){var e,t,s,n,r;this.showLoading();try{const l=Zs(),[c,m]=await Promise.allSettled([l.getFredSeriesBatch({seriesIds:[...we,"ESTR","EURIBOR3M","EURIBOR6M","EURIBOR1Y"],limit:36}),l.getEuYieldCurve({})]),p=c.status==="fulfilled"?c.value.results??{}:{};return this._current=we.map((v,b)=>{var u,y;const h=((u=p[v])==null?void 0:u.observations)??[];return{tenor:Ie[b]??v,value:h.length>0?((y=h[h.length-1])==null?void 0:y.value)??null:null}}),this._prior=we.map((v,b)=>{var u,y;const h=((u=p[v])==null?void 0:u.observations)??[];return{tenor:Ie[b]??v,value:h.length>1?((y=h[h.length-2])==null?void 0:y.value)??null:null}}),this._ecbRates=m.status==="fulfilled"&&!m.value.unavailable&&((e=m.value.data)!=null&&e.rates)?m.value.data.rates:null,this._rateRows=[{id:"ESTR",label:"Euro short-term rate",obs:((t=p.ESTR)==null?void 0:t.observations)??[],color:"#2ecc71"},{id:"EURIBOR3M",label:"EURIBOR 3M",obs:((s=p.EURIBOR3M)==null?void 0:s.observations)??[],color:"#3498db"},{id:"EURIBOR6M",label:"EURIBOR 6M",obs:((n=p.EURIBOR6M)==null?void 0:n.observations)??[],color:"#9b59b6"},{id:"EURIBOR1Y",label:"EURIBOR 1Y",obs:((r=p.EURIBOR1Y)==null?void 0:r.observations)??[],color:"#e67e22"}],this._current.filter(v=>v.value!==null).length===0?(this._hasData||this.showError("No yield data available",()=>void this.fetchData()),!1):(this._hasData=!0,this._render(),!0)}catch(l){return this._hasData||this.showError(l instanceof Error?l.message:"Failed to load yield curve",()=>void this.fetchData()),!1}}_render(){var f,v;const e=`<div style="display:flex;gap:4px;margin-bottom:6px">
      <button class="panel-tab${this._tab==="curve"?" active":""}" data-tab="curve" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">US Curve</button>
      <button class="panel-tab${this._tab==="rates"?" active":""}" data-tab="rates" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:3px 10px">ECB Rates</button>
    </div>`;if(this._tab==="rates"){this.setSafeContent(w(`<div style="padding:10px 0 6px">${e}${li(this._rateRows)}</div>`,"legacy Panel.setContent() migration"));return}const t=((f=this._current.find(b=>b.tenor==="2Y"))==null?void 0:f.value)??null,s=((v=this._current.find(b=>b.tenor==="10Y"))==null?void 0:v.value)??null,n=t!==null&&s!==null&&t>s,r=t!==null&&s!==null?((s-t)*100).toFixed(0):null,l=r!==null&&Number(r)>=0?"+":"",c=n?'<span style="background:#e74c3c;color:#fff;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:0.08em">INVERTED</span>':'<span style="background:#2ecc71;color:#000;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:0.08em">NORMAL</span>',m=r!==null?`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:10px">2Y-10Y Spread: <span style="color:${n?"#e74c3c":"#2ecc71"}">${o(l+r)}bps</span></span>`:"",p=this._ecbRates?'<span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5,3"/></svg> EU (ECB AAA)</span>':"";this.setSafeContent(w(`
      <div style="padding:10px 0 6px">
        ${e}
        <div style="display:flex;align-items:center;margin-bottom:10px;gap:4px">
          ${c}${m}
        </div>
        <div style="margin:0 -4px">${ni(this._current,this._prior,this._ecbRates)}</div>
        ${ri(this._current,`${this.panelId}Title`)}
        <div style="margin-top:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);display:flex;gap:12px;align-items:center;flex-wrap:wrap">
          <span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="#3498db" stroke-width="2"/></svg> US (Current)</span>
          <span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="4,3"/></svg> US (Prior)</span>
          ${p}
          <span style="margin-left:auto">Source: FRED / ECB</span>
        </div>
      </div>`,"legacy Panel.setContent() migration"))}}const Gn=Object.freeze(Object.defineProperty({__proto__:null,YieldCurvePanel:ci},Symbol.toStringTag,{value:"Module"})),di=A(()=>new N(E(),{fetch:R}));function ut(a){return a==null?"":`${a>=0?"+":""}${a.toFixed(2)}`}function ft(a){return a==null||a<=0?"":a>=1e12?`$${(a/1e12).toFixed(1)}T`:a>=1e9?`$${(a/1e9).toFixed(1)}B`:a>=1e6?`$${Math.round(a/1e6)}M`:`$${a}`}function pi(a,i){if(a==null||i==null||i===0)return"";const e=(a-i)/Math.abs(i)*100;return`${e>=0?"+":""}${e.toFixed(1)}%`}function mi(a){const i=new Date;i.setHours(0,0,0,0);const e=new Date(`${a}T00:00:00`);if(Number.isNaN(e.getTime()))return a;const t=Math.round((e.getTime()-i.getTime())/864e5),s=e.toLocaleDateString(_t(),{weekday:"short",month:"short",day:"numeric"});return t===0?d("components.earningsCalendar.today",{date:s}):t===1?d("components.earningsCalendar.tomorrow",{date:s}):s.toUpperCase().replace(","," ·")}function ui(a){const i=a.hour==="bmo"?"BMO":a.hour==="amc"?"AMC":a.hour?a.hour.toUpperCase():"",e=a.hour==="bmo"?"background:rgba(46,204,113,0.15);color:#2ecc71":a.hour==="amc"?"background:rgba(52,152,219,0.15);color:#3498db":"background:rgba(255,255,255,0.08);color:var(--text-dim)",t=ft(a.revenueEstimate),s=ft(a.revenueActual),n=ut(a.epsEstimate),r=ut(a.epsActual);let l="";if(a.hasActuals&&r){const m=a.surpriseDirection==="beat"?"background:rgba(46,204,113,0.2);color:#2ecc71":a.surpriseDirection==="miss"?"background:rgba(231,76,60,0.2);color:#e74c3c":"background:rgba(255,255,255,0.08);color:var(--text-dim)",p=a.surpriseDirection==="beat"?d("components.earningsCalendar.surprise.beat"):a.surpriseDirection==="miss"?d("components.earningsCalendar.surprise.miss"):d("components.earningsCalendar.surprise.inLine"),f=pi(a.epsActual,a.epsEstimate);l=`
      <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text)">${o(d("components.earningsCalendar.epsActual",{value:r}))}</span>
      <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:1px 4px;border-radius:3px;${m}">${o(p)}${f?` ${o(f)}`:""}</span>`}else n&&(l=`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(d("components.earningsCalendar.epsEstimate",{value:n}))}</span>`);let c="";return a.hasActuals&&s?c=`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(d("components.earningsCalendar.revenueActual",{value:s}))}</span>`:t&&(c=`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:rgba(255,255,255,0.25)">${o(d("components.earningsCalendar.revenueEstimate",{value:t}))}</span>`),`
    <div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;padding-top:1px">
        ${i?`<span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 5px;border-radius:3px;${e};letter-spacing:0.04em">${o(i)}</span>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o(a.company)}</div>
        <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);letter-spacing:0.04em">${o(a.symbol)}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0">
        ${l?`<div style="display:flex;align-items:center;gap:5px">${l}</div>`:""}
        ${c?`<div>${c}</div>`:""}
      </div>
    </div>`}function fi(a,i,e){return`
    <div style="${e?"":"border-top:1px solid rgba(255,255,255,0.06);"}padding-top:${e?"0":"10"}px;padding-bottom:2px">
      <div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:700;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.06em;padding:0 0 5px">${o(mi(a))}</div>
      ${i.map(ui).join("")}
    </div>`}class hi extends _{constructor(){super({id:"earnings-calendar",title:d("components.earningsCalendar.title"),showCount:!1,infoTooltip:d("components.earningsCalendar.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){return this.showLoading(),this.refreshFromRpc()}async refreshFromRpc(){var e;try{const t=di(),s=new Date,n=new Date;n.setDate(n.getDate()+14);const r=W(s),l=W(n),c=await t.listEarningsCalendar({fromDate:r,toDate:l});return c.unavailable||!((e=c.earnings)!=null&&e.length)?(this._hasData||this.showError(d("components.earningsCalendar.errors.noData"),()=>void this.fetchData()),!1):(this.render(c.earnings),!0)}catch(t){return this._hasData||this.showError(t instanceof Error?t.message:d("components.earningsCalendar.errors.failedToLoad"),()=>void this.fetchData()),!1}}render(e){this._hasData=!0;const t=new Map;for(const r of e){const l=r.date||"Unknown",c=t.get(l);c?c.push(r):t.set(l,[r])}const n=`
      <div style="padding:0 14px 12px;">
        ${[...t.keys()].sort().map((r,l)=>fi(r,t.get(r),l===0)).join("")}
      </div>`;this.setSafeContent(w(n,"legacy Panel.setContent() migration"))}}const Hn=Object.freeze(Object.defineProperty({__proto__:null,EarningsCalendarPanel:hi},Symbol.toStringTag,{value:"Module"})),vi=A(()=>new Ra(E(),{fetch:R})),gi=30;function Bt(a){if(typeof a!="string"||a.length===0)return null;try{const i=new URL(a);return i.protocol!=="https:"||i.hostname!=="www.sec.gov"&&i.hostname!=="sec.gov"?null:a}catch{return null}}function Ut(a){return a.filter(i=>!!(i.company||i.cik)).map(i=>({company:i.company||`CIK ${i.cik}`,form:i.form||"8-K",filedAtMs:Number.isFinite(i.filedAtMs)?i.filedAtMs:0,items:Array.isArray(i.items)?i.items:[],url:i.url})).sort((i,e)=>e.filedAtMs-i.filedAtMs)}function jt(a,i,e){if(!Number.isFinite(a)||a<=0)return"";const t=new Date(a),s=new Date(i);return t.getFullYear()===s.getFullYear()&&t.getMonth()===s.getMonth()&&t.getDate()===s.getDate()?t.toLocaleTimeString(e,{hour:"2-digit",minute:"2-digit"}):t.toLocaleDateString(e,{month:"short",day:"numeric"})}function Gt(a,i,e){const t=a.items[0],s=a.items.length>1?` +${a.items.length-1}`:"",n=Bt(a.url),r=o(a.company),l=n?`<a href="${o(n)}" target="_blank" rel="noopener noreferrer" style="color:var(--text);text-decoration:none">${r}</a>`:r,c=jt(a.filedAtMs,i,e);return`
    <div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;padding-top:1px">
        <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 5px;border-radius:3px;background:rgba(52,152,219,0.15);color:#3498db;letter-spacing:0.04em">${o(a.form)}</span>
        ${t?`<span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:1px 4px;border-radius:3px;background:rgba(255,255,255,0.08);color:var(--text-dim)">${o(t.code)}${o(s)}</span>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600;color:var(--text);overflow-wrap:break-word">${l}</div>
        ${t?`<div style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(t.description)}</div>`:""}
      </div>
      ${c?`<div style="flex-shrink:0;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding-top:1px">${o(c)}</div>`:""}
    </div>`}class yi extends _{constructor(){super({id:"material-events",title:"SEC Material Events",showCount:!1,infoTooltip:"Recent SEC 8-K material-event filings across all filers — item codes flag what happened (e.g. 5.02 executive departures, 2.02 results, 1.01 material agreements). Links open the filing index on sec.gov."});g(this,"_hasData",!1);g(this,"_inFlight",null)}fetchData(){return this._inFlight??(this._inFlight=this.load().finally(()=>{this._inFlight=null})),this._inFlight}async load(){this._hasData||this.showLoading();try{const t=await vi().listMaterialEvents({itemCode:"",limit:gi}),s=Ut(t.events??[]);return t.unavailable||s.length===0?(this._hasData||this.showError("SEC material events are temporarily unavailable",()=>void this.fetchData()),!1):(this.render(s),!0)}catch(e){return this._hasData||this.showError(e instanceof Error?e.message:"Failed to load SEC material events",()=>void this.fetchData()),!1}}render(e){this._hasData=!0;const t=Date.now(),s=_t(),n=`
      <div style="padding:0 14px 12px;">
        ${e.map(r=>Gt(r,t,s)).join("")}
      </div>`;this.setSafeContent(w(n,"material-events controlled panel markup — every dynamic field passes escapeHtml"))}}const qn=Object.freeze(Object.defineProperty({__proto__:null,MaterialEventsPanel:yi,filedAtLabel:jt,projectMaterialEvents:Ut,renderMaterialEvent:Gt,secArchiveUrl:Bt},Symbol.toStringTag,{value:"Module"})),bi=A(()=>new fe(E(),{fetch:R})),xi={US:"🇺🇸",GB:"🇬🇧",UK:"🇬🇧",EU:"🇪🇺",EUR:"🇪🇺",EA:"🇪🇺",DE:"🇩🇪",FR:"🇫🇷",JP:"🇯🇵",CN:"🇨🇳",CA:"🇨🇦",AU:"🇦🇺"},$i=new Set(["EU","EA","EUR","DE","FR","IT","ES","NL","BE","AT","PT","FI","IE","GR"]),ht={high:"#e74c3c",medium:"#f39c12",low:"rgba(255,255,255,0.3)"};function wi(a){const i=new Map;for(const e of a){const t=e.date||"Unknown";i.has(t)||i.set(t,[]),i.get(t).push(e)}return i}function Si(a){if(!a||a==="Unknown")return"Unknown";const i=new Date(`${a}T00:00:00`);return Number.isNaN(i.getTime())?a:i.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function _i(a,i){return a?i?`${a} ${i}`:a:"—"}function ki(a){const i=new Date;i.setHours(0,0,0,0);const e=new Date(`${a}T00:00:00`);if(Number.isNaN(e.getTime()))return"";const t=Math.round((e.getTime()-i.getTime())/864e5);return t===0?"today":t===1?"tomorrow":t<0?Math.abs(t)<14?`${Math.abs(t)}d ago`:`${Math.round(Math.abs(t)/7)}w ago`:t<14?`in ${t}d`:`in ${Math.round(t/7)}w`}class Ci extends _{constructor(){super({id:"economic-calendar",title:"Economic Calendar",showCount:!1,infoTooltip:d("components.economicCalendar.infoTooltip")});g(this,"_hasData",!1);g(this,"_events",[]);g(this,"_region","all");this.content.addEventListener("click",e=>{const t=e.target.closest("button[data-region]");if(!t)return;const s=t.dataset.region;s&&s!==this._region&&(this._region=s,this._render())})}async fetchData(){this.showLoading("Loading economic calendar...");try{const e=bi(),t=new Date,s=W(t),n=W(ca(t,30)),r=await e.getEconomicCalendar({fromDate:s,toDate:n});return r.unavailable||!r.events||r.events.length===0?(this._hasData||this.showError("Economic calendar data unavailable.",()=>void this.fetchData()),!1):(this._events=r.events,this._hasData=!0,this._render(),!0)}catch(e){return this.isAbortError(e)||this._hasData||this.showError("Failed to load economic calendar.",()=>void this.fetchData()),!1}}_filterEvents(){return this._region==="us"?this._events.filter(e=>e.country==="US"):this._region==="eu"?this._events.filter(e=>$i.has(e.country)):this._events}_renderRegionTabs(){return'<div style="display:flex;gap:4px;padding:0 14px 10px">'+[{key:"all",label:"All"},{key:"us",label:"US"},{key:"eu",label:"EU"}].map(({key:t,label:s})=>{const n=this._region===t;return`<button data-region="${t}" style="
          padding:3px 10px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;letter-spacing:0.04em;
          border-radius:3px;border:none;cursor:pointer;
          background:${n?"rgba(255,255,255,0.15)":"transparent"};
          color:${n?"var(--text)":"rgba(255,255,255,0.35)"};
        ">${o(s)}</button>`}).join("")+"</div>"}_render(){if(!this._hasData){this.showError("No upcoming economic events.",()=>void this.fetchData());return}const e=this._filterEvents(),t=wi(e);let s="";for(const[c,m]of t){s+=`<tr class="ec-date-row"><td colspan="3">${o(Si(c))}</td></tr>`;for(const p of m){const f=(p.impact||"low").toLowerCase(),v=ht[f]??ht.low,b=xi[p.country]??o(p.country),h=f==="high";let u,y;p.actual?(u=o(_i(p.actual,p.unit)),y="ec-actual"):(u=o(ki(p.date)),y="ec-countdown"),s+=`<tr>
          <td class="ec-event">
            <span style="margin-right:5px">${b}</span><span style="font-weight:${h?600:400}">${o(p.event)}</span>
          </td>
          <td class="ec-impact">
            <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${v};vertical-align:middle"></span>
          </td>
          <td class="ec-value ${y}">${u}</td>
        </tr>`}}const n=this._region==="all"?"No upcoming economic events":"No events for selected region",r=e.length===0?`<tr><td colspan="3" class="ec-empty">${o(n)}</td></tr>`:"",l=`${this._renderRegionTabs()}<div style="padding:0 14px 12px;">
      <table class="wm-table ec-table">
        <colgroup>
          <col style="width:auto">
          <col style="width:24px">
          <col style="width:72px">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">EVENT</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>${r}${s}</tbody>
      </table>
    </div>`;this.setSafeContent(w(l,"legacy Panel.setContent() migration"))}}const Yn=Object.freeze(Object.defineProperty({__proto__:null,EconomicCalendarPanel:Ci},Symbol.toStringTag,{value:"Module"})),Ei=A(()=>new N(E(),{fetch:R}));function se(a){return typeof a=="number"?a:parseInt(String(a),10)||0}function Se(a,i){const e=Math.max(-100,Math.min(100,a)),t=Math.abs(e)/100*50,s=e>=0?"#2ecc71":"#e74c3c",n=e>=0?50:50-t,r=e>=0?"+":"";return`
    <div style="margin:3px 0">
      <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
        <span>${o(i)}</span>
        <span style="color:${s};font-weight:600">${r}${e.toFixed(1)}%</span>
      </div>
      <div style="position:relative;height:8px;background:rgba(255,255,255,0.06);border-radius:2px">
        <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.15)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${n.toFixed(2)}%;width:${t.toFixed(2)}%;background:${s};border-radius:1px"></div>
      </div>
    </div>`}function Pi(a){const i=se(a.leveragedFundsLong),e=se(a.leveragedFundsShort),t=se(a.smallTraderLong),s=se(a.smallTraderShort),n=a.netPct,r=(i-e)/Math.max(i+e,1)*100,l=(t-s)/Math.max(t+s,1)*100;return`
    <div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));font-weight:600">${o(a.name)}</span>
        <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(a.code)}</span>
      </div>
      ${Se(n,"Asset Managers")}
      ${Se(r,"Leveraged Funds")}
      ${a.smallTraderAvailable?Se(l,"Small Traders (non-reportable)"):""}
    </div>`}class Ai extends _{constructor(){super({id:"cot-positioning",title:"CFTC COT Positioning",showCount:!1,infoTooltip:d("components.cotPositioning.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){this.showLoading();try{const t=await Ei().getCotPositioning({});return t.unavailable||!t.instruments||t.instruments.length===0?(this._hasData||this.showError("COT data unavailable",()=>void this.fetchData()),!1):(this._hasData=!0,this.render(t.instruments,t.reportDate??""),!0)}catch(e){return this._hasData||this.showError(e instanceof Error?e.message:"Failed to load",()=>void this.fetchData()),!1}}render(e,t){const s=e.map(Pi).join(""),r=e.some(m=>m.smallTraderAvailable)?"Small traders use the CFTC non-reportable residual category. This seed stores the latest weekly snapshot, not historical releases, so a retail trend line is not shown.":"Small-trader positioning is unavailable until the next CFTC seed refresh. No retail trend line is shown.",l=t?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:8px;text-align:right">Report date: ${o(t)}</div>`:"",c=`
      <div style="padding:10px 0">
        ${s}
        <div style="margin-top:8px;padding:7px 8px;border:1px solid rgba(255,255,255,0.08);border-radius:4px;color:var(--text-dim);font-size:calc(9px * var(--wm-panel-effective-scale, 1));line-height:1.4">${o(r)}</div>
        ${l}
      </div>`;this.setSafeContent(w(c,"legacy Panel.setContent() migration"))}}const Vn=Object.freeze(Object.defineProperty({__proto__:null,CotPositioningPanel:Ai},Symbol.toStringTag,{value:"Module"})),Di=A(()=>new N(E(),{fetch:Pt})),vt=["AAPL","MSFT","NVDA","AMZN","GOOGL","META","TSLA"],_e=["CL","GC","SI","ES","NQ"],Ri={ES:"S&P 500 futures",NQ:"Nasdaq futures"};function Y(a){if(typeof a=="number")return a;const i=parseInt(String(a),10);return Number.isFinite(i)?i:0}function gt(a){return a===null?'<span class="commodity-change">—</span>':`<span class="commodity-change ${M(a)}">${O(a)}</span>`}function ke(a,i){const e=a+i;return e<=0?null:(a-i)/e*100}function yt(a){return a===null?"—":`${a>=0?"+":""}${a.toFixed(1)}%`}class Fi extends _{constructor(){super({id:"liquidity-shifts",title:d("components.liquidityShifts.title"),showCount:!1,infoTooltip:d("components.liquidityShifts.infoTooltip")});g(this,"_hasData",!1)}async fetchData(){var e;this.showLoading();try{const t=Di(),[s,n]=await Promise.all([t.getCotPositioning({}),t.listMarketQuotes({symbols:vt})]),r=(s.instruments??[]).filter(h=>_e.includes(h.code??"")).sort((h,u)=>_e.indexOf(h.code??"")-_e.indexOf(u.code??""));if(r.length===0&&(((e=n.quotes)==null?void 0:e.length)??0)===0)return this._hasData||this.showError(d("components.liquidityShifts.unavailable"),()=>void this.fetchData()),!1;this._hasData=!0;const l=r.map(h=>{const u=Y(h.assetManagerLong??0),y=Y(h.assetManagerShort??0),$=ke(u,y),S=Y(h.leveragedFundsLong??0),x=Y(h.leveragedFundsShort??0),C=Y(h.smallTraderLong??0),P=Y(h.smallTraderShort??0),D=S>0||x>0,J=D?ke(S,x):null,j=h.code??"",Yt=Ri[j]??h.name??j,Vt=D?`<div class="market-symbol">${d("components.liquidityShifts.lev")} ${o(yt(J))}</div>`:"",Ge=h.smallTraderAvailable===!0,Wt=Ge?ke(C,P):null,Xt=Ge?`<div class="market-symbol">Small traders ${o(yt(Wt))}</div>`:"";return`<div class="liquidity-row">
          <div class="liquidity-row__info">
            <div class="market-name">${o(Yt)}</div>
            <div class="market-symbol">${o(j)} • ${d("components.liquidityShifts.longShort",{long:String(u),short:String(y)})}</div>
          </div>
          <div class="liquidity-row__values">
            <div>${gt($)}</div>
            ${Vt}
            ${Xt}
          </div>
        </div>`}).join(""),c=new Map(vt.map((h,u)=>[h,u])),p=[...n.quotes??[]].sort((h,u)=>{const y=c.get(h.symbol??"")??Number.MAX_SAFE_INTEGER,$=c.get(u.symbol??"")??Number.MAX_SAFE_INTEGER;return y-$}).map(h=>{const u=Number(h.change??0);return`<div class="market-item liquidity-stock-row">
            <div class="market-info">
              <span class="market-name">${o(h.name||h.symbol||"")}</span>
              <span class="market-symbol">${o(h.symbol||"")}</span>
            </div>
            <div>${gt(u)}</div>
          </div>`}).join(""),f=`<div class="market-symbol">${d("components.liquidityShifts.noCot")}</div>`,v=`<div class="market-symbol">${d("components.liquidityShifts.noStocks")}</div>`,b=s.reportDate?`<div class="market-symbol liquidity-report-date">${o(d("components.liquidityShifts.reportDate",{date:s.reportDate}))}</div>`:"";return this.setSafeContent(w(`
        <div class="liquidity-shifts-panel">
          <div class="liquidity-shifts-panel__section-title">${d("components.liquidityShifts.cotSection")}</div>
          ${l||f}
          <div class="liquidity-shifts-panel__section-title liquidity-shifts-panel__section-title--gap">${d("components.liquidityShifts.stocksSection")}</div>
          ${p||v}
          ${b}
        </div>
      `,"legacy Panel.setContent() migration")),!0}catch(t){return this._hasData||this.showError(t instanceof Error?t.message:d("components.liquidityShifts.failed"),()=>void this.fetchData()),!1}}}const Wn=Object.freeze(Object.defineProperty({__proto__:null,LiquidityShiftsPanel:Fi},Symbol.toStringTag,{value:"Module"})),Ti=A(()=>new N(E(),{fetch:R})),Mi=40;function Ni(a){if(!Array.isArray(a)||a.length<13)return null;const i=a[a.length-1],e=a[a.length-13];return!(e>0)||!Number.isFinite(i)?null:(i-e)/e}function Ii(a){if(a==null)return null;const i=typeof a=="number"?a:parseFloat(String(a));return Number.isFinite(i)?i:null}function Li(a,i){const e=Array.isArray(a.sparkOi)?a.sparkOi.filter(t=>Number.isFinite(t)):[];return{symbol:String(a.symbol??""),display:String(a.display??""),group:String(a.group??""),funding:i?typeof a.funding=="number"&&Number.isFinite(a.funding)?a.funding:null:Ii(a.funding),oiDelta1h:Ni(e),composite:Number(a.composite||0),warmup:!!a.warmup,stale:!!a.stale}}function bt(a,i){const e=[],t=[],s=[];for(const n of a){const r=Li(n,i),l=r.group;l==="fx"?s.push(r):l==="crypto"?t.push(r):e.push(r)}return{warmup:!1,commodityAssets:e,cryptoAssets:t,fxAssets:s,unavailable:!1}}function zi(a,i){return a<15?"var(--text-dim)":i!=null&&i<0?a>=60?"#e74c3c":a>=40?"#e67e22":"#c0392b88":a>=60?"#2ecc71":a>=40?"#27ae60":"#2ecc7188"}function Oi(a,i,e=56){const t=(e-6)/2,s=e/2,n=e/2+2,r=Math.PI*.8,l=Math.PI*2.2,c=l-r,m=r+a/100*c,p=s+t*Math.cos(r),f=n+t*Math.sin(r),v=s+t*Math.cos(l),b=n+t*Math.sin(l),h=s+t*Math.cos(m),u=n+t*Math.sin(m),y=m-r>Math.PI?1:0,$=a<15?.4:a<40?.6:.9;return`<svg width="${e}" height="${e}" viewBox="0 0 ${e} ${e}" class="pos-gauge">
    <path d="M ${p} ${f} A ${t} ${t} 0 1 1 ${v} ${b}" fill="none" stroke="var(--border-color, #333)" stroke-width="3" stroke-linecap="round"/>
    ${a>0?`<path d="M ${p} ${f} A ${t} ${t} 0 ${y} 1 ${h} ${u}" fill="none" stroke="${i}" stroke-width="3.5" stroke-linecap="round" opacity="${$}"/>`:""}
    <text x="${s}" y="${n+2}" text-anchor="middle" dominant-baseline="middle" fill="${i}" style="font-size:calc(13px * var(--wm-panel-effective-scale, 1))" font-weight="600" opacity="${$}">${Math.round(a)}</text>
  </svg>`}function Bi(a,i){const e=Math.round(a.composite),t=zi(e,a.funding),s=e>=Mi,n=a.funding!=null?`${(a.funding*100).toFixed(3)}%`:"--",r=a.funding!=null&&a.funding<0?"change-negative":"change-positive",l=a.oiDelta1h!=null?`${a.oiDelta1h>=0?"+":""}${(a.oiDelta1h*100).toFixed(1)}%`:"--",c=a.oiDelta1h!=null&&a.oiDelta1h<0?"change-negative":"change-positive",m=a.stale?' <span class="pos-badge pos-badge--stale">stale</span>':"",p=a.warmup?' <span class="pos-badge pos-badge--warmup">warm</span>':"",f=s?" pos-card--elevated":"",v=s?` style="--pos-glow-color: ${t}"`:"",b=i?` data-pos-navigate="${o(i)}"`:"",h=i?" pos-card--clickable":"",u=`${a.symbol} score ${e}/100`+(a.funding!=null?` | funding ${n}`:"")+(a.oiDelta1h!=null?` | OI delta ${l}`:"")+(a.warmup?" | warming up":"")+(a.stale?" | upstream stale":"");return`<div class="pos-card${f}${h}"${v}${b} title="${o(u)}">
    <div class="pos-card__name">${o(a.display)}${m}${p}</div>
    ${Oi(e,t)}
    <div class="pos-card__metrics">
      <span class="${r}" title="hourly funding">${o(n)}</span>
      <span class="${c}" title="OI delta 1h">${o(l)}</span>
    </div>
  </div>`}const Ui={BTC:"crypto",ETH:"crypto",SOL:"crypto",PAXG:"commodities","xyz:CL":"commodities","xyz:BRENTOIL":"commodities","xyz:GOLD":"commodities","xyz:SILVER":"commodities","xyz:PLATINUM":"commodities","xyz:PALLADIUM":"commodities","xyz:COPPER":"commodities","xyz:NATGAS":"commodities"};function ji(a){const i=Ui[a];return i&&document.querySelector(`[data-panel="${i}"]`)?i:null}function Ce(a,i){if(i.length===0)return"";const t=[...i].sort((s,n)=>n.composite-s.composite).map(s=>Bi(s,ji(s.symbol))).join("");return`<div class="pos-section">
    <div class="pos-section__header">${o(a)}</div>
    <div class="pos-grid">${t}</div>
  </div>`}class Gi extends _{constructor(){super({id:"positioning-247",title:d("components.positioning247.title"),showCount:!1,infoTooltip:d("components.positioning247.infoTooltip")});g(this,"_flow",null);g(this,"_loading",!1);this.content.addEventListener("click",e=>{const t=e.target.closest("[data-pos-navigate]");if(t!=null&&t.dataset.posNavigate){const s=document.querySelector(`[data-panel="${t.dataset.posNavigate}"]`);s&&(s.scrollIntoView({behavior:"smooth",block:"center"}),s.classList.add("panel-highlight"),setTimeout(()=>s.classList.remove("panel-highlight"),1500))}})}async fetchData(){if(this._loading)return!1;this._loading=!0;try{if(!this._flow){const s=U("hyperliquidFlow");s&&!s.unavailable&&Array.isArray(s.assets)&&s.assets.length>0&&(this._flow={...bt(s.assets,!0),warmup:!!s.warmup},this._render())}const t=await Ti().getHyperliquidFlow({});return t.unavailable||!t.assets||t.assets.length===0?this._flow||(this._flow={warmup:!0,commodityAssets:[],cryptoAssets:[],fxAssets:[],unavailable:!0}):this._flow={...bt(t.assets,!1),warmup:!!t.warmup},this._render(),!0}catch(e){return console.error("[PositioningPanel] RPC failed:",e instanceof Error?e.message:e),this._flow||(this._flow={warmup:!0,commodityAssets:[],cryptoAssets:[],fxAssets:[],unavailable:!0}),this._render(),!1}finally{this._loading=!1}}_render(){if(!this._flow){this.showLoading();return}if(this._flow.unavailable){this.setSafeContent(w(`<div class="pos-panel"><div class="pos-warmup">${o(d("components.positioning247.warmup"))}</div></div>`,"legacy Panel.setContent() migration"));return}const e=[];this._flow.warmup&&e.push(`<div class="pos-warmup">${o(d("components.positioning247.warmup"))}</div>`),e.push(Ce(d("components.positioning247.commodities"),this._flow.commodityAssets)),e.push(Ce(d("components.positioning247.crypto"),this._flow.cryptoAssets)),e.push(Ce(d("components.positioning247.fx"),this._flow.fxAssets)),e.push(`<div class="pos-footer">${o(d("components.positioning247.footer"))}</div>`),this.setSafeContent(w(`<div class="pos-panel">${e.join("")}</div>`,"legacy Panel.setContent() migration"))}}const Xn=Object.freeze(Object.defineProperty({__proto__:null,PositioningPanel:Gi},Symbol.toStringTag,{value:"Module"}));function T(a,i=2){return!Number.isFinite(a)||a<=0?"--":a>=1e4?Math.round(a).toLocaleString():a.toLocaleString(void 0,{minimumFractionDigits:i,maximumFractionDigits:i})}function Ee(a){const i=typeof a=="string"?parseInt(a,10):a;return Number.isFinite(i)?Math.round(i).toLocaleString():"--"}function pe(a,i=2){return Number.isFinite(a)?`${a>=0?"+":""}${a.toFixed(i)}%`:"--"}function Hi(a){const i=typeof a=="string"?parseInt(a,10):a;return Number.isFinite(i)?`${i>=0?"+":""}${Math.round(i).toLocaleString()}`:"--"}function qi(a){if(!a)return{text:"Updated —",dot:"var(--text-dim)"};const i=Date.now()-new Date(a).getTime();if(!Number.isFinite(i)||i<0)return{text:"Updated now",dot:"#2ecc71"};const e=Math.floor(i/6e4),t=e<10?"#2ecc71":e<30?"#f5a623":"#e74c3c";return e<1?{text:"Updated just now",dot:t}:e<60?{text:`Updated ${e}m ago`,dot:t}:{text:`Updated ${Math.floor(e/60)}h ago`,dot:t}}function Yi(a,i,e,t){const s=Math.max(0,Math.min(100,t));return`
    <div style="position:relative;height:8px;background:linear-gradient(90deg,rgba(231,76,60,0.25),rgba(245,166,35,0.25),rgba(46,204,113,0.25));border-radius:4px;margin:6px 0">
      <div style="position:absolute;top:-3px;bottom:-3px;left:${s.toFixed(1)}%;width:3px;background:#fff;border-radius:1px;box-shadow:0 0 4px rgba(255,255,255,0.8);transform:translateX(-50%)"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
      <span>Low $${o(T(a))}</span>
      <span style="color:var(--text);font-weight:600">$${o(T(e))} • ${s.toFixed(0)}% of range</span>
      <span>High $${o(T(i))}</span>
    </div>`}function xt(a,i,e){const t=Math.max(-100,Math.min(100,a)),s=Math.abs(t)/100*50,n=t>=0?"#2ecc71":"#e74c3c",r=t>=0?50:50-s,l=t>=0?"+":"",c=parseInt(e,10),m=Number.isFinite(c)&&c!==0?` <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${c>=0?"#2ecc71":"#e74c3c"};font-weight:500">Δ ${Hi(e)}</span>`:"";return`
    <div style="margin:4px 0">
      <div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:2px">
        <span>${o(i)}${m}</span>
        <span style="color:${n};font-weight:600">${l}${t.toFixed(1)}%</span>
      </div>
      <div style="position:relative;height:8px;background:rgba(255,255,255,0.06);border-radius:2px">
        <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.15)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${r.toFixed(2)}%;width:${s.toFixed(2)}%;background:${n};border-radius:1px"></div>
      </div>
    </div>`}function Vi(a){return a>80?{text:"Silver undervalued",color:"#f5a623"}:a<60?{text:"Gold undervalued",color:"#f5a623"}:{text:"Neutral",color:"var(--text-dim)"}}function ie(a,i){const e=i>=0?"#2ecc71":"#e74c3c";return`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
    <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(a)}</div>
    <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${e}">${o(pe(i,1))}</div>
  </div>`}class Wi extends _{constructor(){super({id:"gold-intelligence",title:d("panels.goldIntelligence"),infoTooltip:d("components.goldIntelligence.infoTooltip")});g(this,"_hasData",!1);g(this,"_lastData",null)}async fetchData(){var e,t;this._hasData||this.showLoading();try{const s=wt("/api/market/v1/get-gold-intelligence"),n=await fetch(s,{signal:me(15e3)});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();return r.unavailable?(this._hasData?this.retainLastData():this.showError("Gold data unavailable",()=>void this.fetchData()),!1):(e=this.element)!=null&&e.isConnected?(this._hasData=!0,this._lastData=r,this.render(r),!0):!1}catch(s){return(t=this.element)!=null&&t.isConnected&&(this._hasData?this.retainLastData():this.showError(s instanceof Error?s.message:"Failed to load",()=>void this.fetchData())),!1}}retainLastData(){var e;this._lastData&&((e=this.element)!=null&&e.isConnected)&&this.render(this._lastData)}renderHeader(e){const t=e.goldChangePct,s=t>=0?"#2ecc71":"#e74c3c",n=K(e.goldSparkline,t,80,20),r=qi(e.updatedAt),l=Zt({sparkline:e.goldSparkline,sparklineIntervalSeconds:e.goldSparklineIntervalSeconds,sparklineStartAt:e.goldSparklineStartAt}),c=e.session&&e.session.dayHigh>0?`<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">
          Session H $${o(T(e.session.dayHigh))} • L $${o(T(e.session.dayLow))} • Prev $${o(T(e.session.prevClose))}
        </div>`:"";return`
      <div class="energy-tape-section">
        <div class="energy-section-title">Price &amp; Performance</div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          <span style="font-size:calc(16px * var(--wm-panel-effective-scale, 1));font-weight:700">$${o(T(e.goldPrice))}</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${s};padding:1px 6px;border-radius:3px;background:${s}22">${pe(t)}</span>
          ${n}
        </div>
        <div style="display:flex;align-items:center;gap:6px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          <span style="width:6px;height:6px;border-radius:50%;background:${r.dot};display:inline-block"></span>
          <span>${o(r.text)} • GC=F front-month${l?` • ${o(l)}`:""}</span>
        </div>
        ${c}
      </div>`}renderReturns(e){if(!e.returns&&!e.range52w)return"";const t=e.returns?`<div style="display:flex;gap:4px;margin-top:6px">
          ${ie("1W",e.returns.w1)}
          ${ie("1M",e.returns.m1)}
          ${ie("Year to date",e.returns.ytd)}
          ${ie("1Y",e.returns.y1)}
        </div>`:"",s=e.range52w&&e.range52w.hi>0?`<div style="margin-top:8px">
          <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">52-week range</div>
          ${Yi(e.range52w.lo,e.range52w.hi,e.goldPrice,e.range52w.positionPct)}
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Returns</div>
      ${t}
      ${s}
    </div>`}renderMetals(e){const t=e.goldSilverRatio!=null&&Number.isFinite(e.goldSilverRatio)?(()=>{const r=Vi(e.goldSilverRatio);return`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Gold/Silver Ratio</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${o(e.goldSilverRatio.toFixed(1))} <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${r.color};font-weight:400">${o(r.text)}</span></span>
        </div>`})():"",s=e.goldPlatinumPremiumPct!=null&&Number.isFinite(e.goldPlatinumPremiumPct)?`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">Gold vs Platinum</span>
          <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${o(pe(e.goldPlatinumPremiumPct,1))} premium</span>
        </div>`:"",n=[{label:"Silver",price:e.silverPrice},{label:"Platinum",price:e.platinumPrice},{label:"Palladium",price:e.palladiumPrice}].map(r=>`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(r.label)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">$${o(T(r.price))}</div>
      </div>`).join("");return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Metals Complex</div>
      ${t}
      ${s}
      <div style="display:flex;gap:6px;margin-top:8px">${n}</div>
    </div>`}renderFx(e){return e.crossCurrencyPrices.length?`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Gold in Major Currencies</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">${e.crossCurrencyPrices.map(s=>`<div style="text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(s.flag)} XAU/${o(s.currency)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600">${o(T(s.price,0))}</div>
      </div>`).join("")}</div>
    </div>`:""}renderPositioning(e){const t=e.cot;if(!t)return"";const s=t.managedMoney,n=t.producerSwap,r=s?xt(s.netPct,"Managed Money (speculators)",s.wowNetDelta):"",l=n?xt(n.netPct,"Producer/Swap (commercials)",n.wowNetDelta):"",c=(p,f)=>p?`<div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);padding:2px 0">
          <span>${o(f)}</span>
          <span>L ${o(Ee(p.longPositions))} / S ${o(Ee(p.shortPositions))} • ${p.oiSharePct.toFixed(1)}% OI</span>
        </div>`:"",m=t.reportDate?`<div style="display:flex;justify-content:space-between;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px">
          <span>As of ${o(t.reportDate)}${t.nextReleaseDate?` • next release ${o(t.nextReleaseDate)}`:""}</span>
          <span>OI ${o(Ee(t.openInterest))}</span>
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">CFTC Positioning</div>
      ${r}
      ${c(s,"MM breakdown")}
      ${l}
      ${c(n,"P/S breakdown")}
      ${m}
    </div>`}renderCbReserves(e){const t=e.cbReserves;if(!t||!t.topHolders.length)return"";const s=(p,f)=>`<div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:1px 0">
      <span style="color:var(--text-dim)">${f}. ${o(p.name)}</span>
      <span style="font-weight:600">${t.valueIsOunces===!0&&Number.isFinite(p.tonnes)&&p.tonnes>=0?`${p.tonnes.toFixed(1)}t`:"—"}</span>
    </div>`,n=p=>{const f=p.deltaTonnes12m>=0?"#2ecc71":"#e74c3c",v=p.deltaTonnes12m>=0?"+":"";return`<div style="display:flex;justify-content:space-between;font-size:calc(10px * var(--wm-panel-effective-scale, 1));padding:1px 0">
        <span style="color:var(--text-dim)">${o(p.name)}</span>
        <span style="color:${f};font-weight:600">${v}${p.deltaTonnes12m.toFixed(1)}t</span>
      </div>`},r=t.topHolders.slice(0,10).map((p,f)=>s(p,f+1)).join(""),l=t.valueIsOunces===!0?t.topBuyers12m.slice(0,5).map(n).join(""):"",c=t.valueIsOunces===!0?t.topSellers12m.slice(0,5).map(n).join(""):"",m=l||c?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Buyers 12M</div>
            ${l||'<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</div>'}
          </div>
          <div>
            <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Sellers 12M</div>
            ${c||'<div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">—</div>'}
          </div>
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Central-Bank Reserves</div>
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:4px">Top holders (tonnes)</div>
      ${r}
      ${m}
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:6px;text-align:right">IMF IFS • as of ${o(t.asOfMonth)}</div>
    </div>`}renderEtfFlows(e){const t=e.etfFlows;if(!t||!Number.isFinite(t.tonnes)||t.tonnes<=0)return"";const s=(l,c,m)=>{const p=c>=0?"#2ecc71":"#e74c3c",f=c>=0?"+":"",v=m>=0?"+":"";return`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(l)}</div>
        <div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${p}">${f}${c.toFixed(1)}t</div>
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:${p}">${v}${m.toFixed(2)}%</div>
      </div>`},n=t.aumUsd>=1e9?`$${(t.aumUsd/1e9).toFixed(1)}B`:t.aumUsd>0?`$${(t.aumUsd/1e6).toFixed(0)}M`:"--",r=t.sparkline90d.length>1?K(t.sparkline90d,t.changeM1Pct,80,20):"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Physical Flows (GLD)</div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px">
        <div>
          <span style="font-size:calc(14px * var(--wm-panel-effective-scale, 1));font-weight:700">${o(t.tonnes.toFixed(1))} <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);font-weight:500">tonnes</span></span>
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-left:6px">AUM ${o(n)}${t.nav>0?` • NAV $${t.nav.toFixed(2)}`:""}</span>
        </div>
        ${r}
      </div>
      <div style="display:flex;gap:4px;margin-top:4px">
        ${s("1W",t.changeW1Tonnes,t.changeW1Pct)}
        ${s("1M",t.changeM1Tonnes,t.changeM1Pct)}
        ${s("1Y",t.changeY1Tonnes,t.changeY1Pct)}
      </div>
      <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:4px;text-align:right">SPDR GLD • as of ${o(t.asOfDate)}</div>
    </div>`}renderDrivers(e){var s;return(s=e.drivers)!=null&&s.length?`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Drivers</div>
      ${e.drivers.map(n=>{const r=n.changePct>=0?"#2ecc71":"#e74c3c",l=n.correlation30d<=-.3?"#2ecc71":n.correlation30d>=.3?"#e74c3c":"var(--text-dim)";return`<div style="display:flex;justify-content:space-between;align-items:center;padding:3px 0;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">
        <span style="color:var(--text-dim)">${o(n.label)}</span>
        <span>
          <span style="font-weight:600">${o(n.value.toFixed(2))}</span>
          <span style="color:${r};margin-left:4px">${o(pe(n.changePct,2))}</span>
          <span style="color:${l};margin-left:8px;font-size:calc(9px * var(--wm-panel-effective-scale, 1))">corr 30d ${n.correlation30d>=0?"+":""}${n.correlation30d.toFixed(2)}</span>
        </span>
      </div>`}).join("")}
    </div>`:""}render(e){const t=[this.renderHeader(e),this.renderReturns(e),this.renderMetals(e),this.renderFx(e),this.renderPositioning(e),this.renderEtfFlows(e),this.renderCbReserves(e),this.renderDrivers(e)].join("");this.setSafeContent(w(`<div style="padding:10px 0">${t}</div>`,"legacy Panel.setContent() migration"))}}const Kn=Object.freeze(Object.defineProperty({__proto__:null,GoldIntelligencePanel:Wi},Symbol.toStringTag,{value:"Module"}));function ne(a){return Math.abs(a)>=1e9?`${(a/1e9).toFixed(1)}B`:Math.abs(a)>=1e6?`${(a/1e6).toFixed(1)}M`:Math.abs(a)>=1e3?`${(a/1e3).toFixed(0)}K`:a.toLocaleString()}function $t(a){return a==="inflow"?"flow-inflow":a==="outflow"?"flow-outflow":"flow-neutral"}function Ht(a){return a.includes("INFLOW")?"inflow":a.includes("OUTFLOW")?"outflow":"neutral"}function qt(a){const i=Ht(a);return i==="inflow"?d("components.etfFlows.netInflow"):i==="outflow"?d("components.etfFlows.netOutflow"):d("components.etfFlows.netNeutral")}function Xi(a){return a>.1?"change-positive":a<-.1?"change-negative":"change-neutral"}class Ki extends _{constructor(){super({id:"etf-flows",title:d("panels.etfFlows"),showCount:!1,infoTooltip:d("components.etfFlows.infoTooltip")});g(this,"data",null);g(this,"loading",!0);g(this,"error",null);g(this,"tableNavigationCleanup",null)}async fetchData(){var t;const e=U("etfFlows");if((t=e==null?void 0:e.etfs)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,s;try{const r=await new N(E(),{fetch:(...l)=>globalThis.fetch(...l)}).listEtfFlows({});if(!((e=this.element)!=null&&e.isConnected))return;((t=r.etfs)!=null&&t.length||!this.data)&&(this.data=r,this.error=null,this.loading=!1,this.renderPanel())}catch(n){if(this.isAbortError(n)||!((s=this.element)!=null&&s.isConnected))return;this.data||(console.warn("[ETFFlows] Fetch error:",n),this.error=d("components.etfFlows.unavailable"),this.loading=!1,this.renderPanel())}}renderPanel(){var l,c;if(this.isLocked)return;if((l=this.tableNavigationCleanup)==null||l.call(this),this.tableNavigationCleanup=null,this.loading){this.showLoading(d("common.loadingEtfData"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data;if(!((c=e.etfs)!=null&&c.length)){const m=e.rateLimited?d("components.etfFlows.rateLimited"):d("components.etfFlows.unavailable");this.setSafeContent(w(`<div class="panel-loading-text">${m}</div>`,"legacy Panel.setContent() migration"));return}const t=e.summary||{totalVolume:0,totalEstFlow:0,netDirection:"NEUTRAL",inflowCount:0,outflowCount:0},s=`flow-${Ht(t.netDirection)}`,n=e.etfs.map(m=>`
      <tr class="etf-row ${$t(m.direction)}">
        <td class="etf-ticker">${o(m.ticker)}</td>
        <td class="etf-issuer">${o(m.issuer)}</td>
        <td class="etf-flow ${$t(m.direction)}">${m.direction==="inflow"?"+":m.direction==="outflow"?"-":""}$${ne(Math.abs(m.estFlow))}</td>
        <td class="etf-volume">${ne(m.volume)}</td>
        <td class="etf-change ${Xi(m.priceChange)}">${m.priceChange>0?"+":""}${m.priceChange.toFixed(2)}%</td>
      </tr>
    `).join(""),r=`
      <div class="etf-flows-container">
        <div class="etf-summary ${s}">
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.netFlow")}</span>
            <span class="etf-summary-value ${s}">${qt(t.netDirection)}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.estFlow")}</span>
            <span class="etf-summary-value">$${ne(Math.abs(t.totalEstFlow))}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.totalVol")}</span>
            <span class="etf-summary-value">${ne(t.totalVolume)}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.etfs")}</span>
            <span class="etf-summary-value">${t.inflowCount}↑ ${t.outflowCount}↓</span>
          </div>
        </div>
        <div class="etf-table-nav" hidden>
          <button type="button" data-scroll="previous" aria-controls="${this.panelId}-table">${d("components.etfFlows.previousColumns")}</button>
          <button type="button" data-scroll="next" aria-controls="${this.panelId}-table">${d("components.etfFlows.moreColumns")}</button>
        </div>
        <div id="${this.panelId}-table" class="etf-table-wrap table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table etf-table">
            <thead>
              <tr>
                <th scope="col">${d("components.etfFlows.table.ticker")}</th>
                <th scope="col">${d("components.etfFlows.table.issuer")}</th>
                <th scope="col">${d("components.etfFlows.table.estFlow")}</th>
                <th scope="col">${d("components.etfFlows.table.volume")}</th>
                <th scope="col">${d("components.etfFlows.table.change")}</th>
              </tr>
            </thead>
            <tbody>${n}</tbody>
          </table>
        </div>
      </div>
    `;this.setSafeContent(w(r,"legacy Panel.setContent() migration"),()=>this.bindTableNavigation())}bindTableNavigation(){var f;(f=this.tableNavigationCleanup)==null||f.call(this),this.tableNavigationCleanup=null;const e=this.content.querySelector(".etf-table-wrap"),t=e==null?void 0:e.querySelector("table"),s=this.content.querySelector(".etf-table-nav"),n=s==null?void 0:s.querySelector('[data-scroll="previous"]'),r=s==null?void 0:s.querySelector('[data-scroll="next"]');if(!e||!t||!s||!n||!r)return;const l=new AbortController,c=()=>{const v=e.scrollWidth-e.clientWidth,b=Math.abs(e.scrollLeft);s.hidden=v<=1,n.disabled=b<=1,r.disabled=b>=v-1},m=v=>{const b=getComputedStyle(e).direction==="rtl"?-1:1;e.scrollBy({left:b*v*e.clientWidth*.8})};n.addEventListener("click",()=>m(-1),{signal:l.signal}),r.addEventListener("click",()=>m(1),{signal:l.signal}),e.addEventListener("scroll",c,{passive:!0,signal:l.signal});const p=new ResizeObserver(c);p.observe(e),p.observe(t),c(),this.tableNavigationCleanup=()=>{l.abort(),p.disconnect()}}destroy(){var e;(e=this.tableNavigationCleanup)==null||e.call(this),this.tableNavigationCleanup=null,super.destroy()}unlockPanel(){this.isLocked&&(super.unlockPanel(),this.bindTableNavigation())}}const Qn=Object.freeze(Object.defineProperty({__proto__:null,ETFFlowsPanel:Ki,etfNetFlowLabel:qt},Symbol.toStringTag,{value:"Module"}));function re(a){return a>=1e12?`$${(a/1e12).toFixed(1)}T`:a>=1e9?`$${(a/1e9).toFixed(1)}B`:a>=1e6?`$${(a/1e6).toFixed(0)}M`:`$${a.toLocaleString()}`}function Qi(a){return a==="ON PEG"?"peg-on":a==="SLIGHT DEPEG"?"peg-slight":"peg-off"}function Ji(a){return a==="HEALTHY"?"health-good":a==="CAUTION"?"health-caution":"health-warning"}class Zi extends _{constructor(){super({id:"stablecoins",title:d("panels.stablecoins"),showCount:!1,infoTooltip:d("components.stablecoins.infoTooltip")});g(this,"data",null);g(this,"loading",!0);g(this,"error",null)}async fetchData(){var t;const e=U("stablecoinMarkets");if((t=e==null?void 0:e.stablecoins)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,s;try{const r=await new N(E(),{fetch:Pt}).listStablecoinMarkets({coins:[]});if(!((e=this.element)!=null&&e.isConnected))return;((t=r.stablecoins)!=null&&t.length||!this.data)&&(this.data=r,this.error=null,this.loading=!1,this.renderPanel())}catch(n){if(this.isAbortError(n)||!((s=this.element)!=null&&s.isConnected))return;this.data||(console.warn("[Stablecoin] Fetch error:",n),this.error=d("common.noDataShort"),this.loading=!1,this.renderPanel())}}renderPanel(){var r;if(this.loading){this.showLoading(d("common.loadingStablecoins"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}const e=this.data;if(!((r=e.stablecoins)!=null&&r.length)){this.setSafeContent(k`<div class="panel-empty">${d("common.noDataShort")}</div>`);return}const t=e.summary||{totalMarketCap:0,totalVolume24h:0,healthStatus:"UNAVAILABLE"},s=z(e.stablecoins.map(l=>k`
      <div class="stable-row">
        <div class="stable-info">
          <span class="stable-symbol">${l.symbol}</span>
          <span class="stable-name">${l.name}</span>
        </div>
        <div class="stable-price">$${l.price.toFixed(4)}</div>
        <div class="stable-peg ${Qi(l.pegStatus)}">
          <span class="peg-badge">${l.pegStatus}</span>
          <span class="peg-dev">${l.deviation.toFixed(2)}%</span>
        </div>
      </div>
    `)),n=z(e.stablecoins.map(l=>k`
      <div class="stable-supply-row">
        <span class="stable-symbol">${l.symbol}</span>
        <span class="stable-mcap">${re(l.marketCap)}</span>
        <span class="stable-vol">${re(l.volume24h)}</span>
        <span class="stable-change ${l.change24h>=0?"change-positive":"change-negative"}">${l.change24h>=0?"+":""}${l.change24h.toFixed(2)}%</span>
      </div>
    `));this.setSafeContent(k`
      <div class="stablecoin-container">
        <div class="stable-health ${Ji(t.healthStatus)}">
          <span class="health-label">${t.healthStatus}</span>
          <span class="health-detail">MCap: ${re(t.totalMarketCap)} | Vol: ${re(t.totalVolume24h)}</span>
        </div>
        <div class="stable-section">
          <div class="stable-section-title">${d("components.stablecoins.pegHealth")}</div>
          <div class="stable-peg-list">${s}</div>
        </div>
        <div class="stable-section">
          <div class="stable-section-title">${d("components.stablecoins.supplyVolume")}</div>
          <div class="stable-supply-header">
            <span>${d("components.stablecoins.token")}</span><span>${d("components.stablecoins.mcap")}</span><span>${d("components.stablecoins.vol24h")}</span><span>${d("components.stablecoins.chg24h")}</span>
          </div>
          <div class="stable-supply-list">${n}</div>
        </div>
      </div>
    `)}}const Jn=Object.freeze(Object.defineProperty({__proto__:null,StablecoinPanel:Zi},Symbol.toStringTag,{value:"Module"}));export{zn as A,Vn as C,Hn as E,Nn as F,Kn as G,Wn as L,Dn as M,Bn as N,Xn as P,Rn as S,Tn as W,Gn as Y,Fn as a,Mn as b,In as c,Ln as d,On as e,Un as f,jn as g,qn as h,Yn as i,Qn as j,Jn as k};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["panels-markets-ME7i-6YW.js"]=1;