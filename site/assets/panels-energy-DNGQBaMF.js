var wt=Object.defineProperty;var xt=(r,i,e)=>i in r?wt(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e;var y=(r,i,e)=>xt(r,typeof i!="symbol"?i+"":i,e);import{P as O}from"./Panel-CJQVCfYg.js";import{getTrendColor as $t,getTrendIndicator as kt,formatOilValue as Ct,getEuGasStorageData as St}from"./index-D3TAJW85.js";import{t as g,g as Te,b as Et,I as Fe,a as _}from"./theme-colors-ToRFEbn-.js";import{s as Tt}from"./_sparkline-span-Bv_WKQ5H.js";import{e as o,u as P,v as At,j as Dt,a as H,s as se}from"./sanitize-D7dx0cA1.js";import{aO as Pt,av as zt,aP as Mt,T as Ae,b2 as te,b3 as Ot}from"./App-DyLzL2rx.js";import"./map-layer-definitions-BCWegBzb.js";import"./clerk-CAuJ7nO4.js";import{m as de}from"./sparkline-BTOgeOir.js";import{e as Ft,i as Lt,o as rt}from"./_oil-tape-observation-DQlBtYv7.js";import{f as _t,d as Rt,G as It,a as jt}from"./grid-disruption-clock-DxafXcJV.js";import{h as x,r as ot}from"./dom-utils-BodelmHa.js";import{c as Nt}from"./web-origin-CYWcatKL.js";import{b as lt,E as ct,g as B,a as Z,S as ie,r as K}from"./index-BhmrbbBS.js";import{v as Bt,L as Gt,N as Ut,O as Ht}from"./gdelt-intel-DU-_Fjx7.js";import{c as Vt}from"./chokepoint-coverage-BCzl8MQe.js";import{c as Wt}from"./chokepoint-status-color-CVAtsjSI.js";import{a as ae,A as ne}from"./attribution-footer-hF73mMPH.js";import{s as Yt,p as qt}from"./pipeline-live-paint-BFX26ED0.js";import{f as De,a as Pe,s as Zt}from"./disruption-timeline-rn1TsGcA.js";import{p as Kt,a as Xt,d as Qt}from"./pipeline-evidence-CqE_XO-h.js";import{g as Le,y as _e,z as Jt,a as Re,A as Ie,B as es}from"./storage-facility-registry-store-CQnfNIeM.js";import{b as fe}from"./activation-DdoRK80V.js";import{d as ts}from"./storage-evidence-DthMONVc.js";import{d as pe,c as ss}from"./shortage-evidence-CwhDyV8K.js";import{getCachedFuelShortageRegistry as is,setCachedFuelShortageRegistry as je}from"./fuel-shortage-registry-store-QyWZsedR.js";import{P as dt,a as pt,b as ut}from"./panel-scope-filter-CSSR8rsn.js";import{f as ht}from"./hormuz-tracker-DtGxO1vQ.js";import{fetchCommodityQuotes as as}from"./index-m5ca7NjE.js";import{b as ns,H as rs}from"./hormuz-crisis-DeOkJC1g.js";import{h as V}from"./panel-gating-B4-XUkuA.js";import{s as os,g as W}from"./auth-state-DLqMTLIu.js";import{onEntitlementChange as ls}from"./entitlements-iEraPnPS.js";import{describeFreshness as cs}from"./persistent-cache-CQ4JFXkz.js";import{e as Ne}from"./extent-Ccx1MofX.js";import{l as ue}from"./linear-kFRQq79z.js";import{m as be}from"./max-DBeXZoyG.js";import{s as we}from"./select-CaWymDL1.js";import{a as ds}from"./arc-CGlAFq2g.js";import{i as ps}from"./continuous-BtUwol-9.js";import{a as xe,m as J}from"./monotone-804fPAVO.js";import{l as Be}from"./line-DEDRnOn1.js";import{s as us,n as hs,a as fs}from"./stack-DSObyWpB.js";function ms(r){return!!(r!=null&&r.wtiPrice||r!=null&&r.brentPrice||r!=null&&r.usProduction||r!=null&&r.usInventory)}class gs extends O{constructor(){super({id:"energy-complex",title:g("panels.energyComplex"),defaultRowSpan:2,infoTooltip:g("components.energyComplex.infoTooltip")});y(this,"analytics",null);y(this,"tape",[]);y(this,"crudeWeeks",[]);y(this,"natGasWeeks",[]);y(this,"euGas",null);y(this,"oilStocksAnalysis",null);y(this,"lngVulnerability",null)}updateAnalytics(e){this.analytics=e,this.render()}updateTape(e){this.tape=e.filter(t=>t.price!==null),this.render()}updateCrudeInventories(e){this.crudeWeeks=e,this.render()}updateNatGas(e){this.natGasWeeks=e,this.render()}updateEuGasStorage(e){this.euGas=e.unavailable?null:e,this.render()}setOilStocksAnalysis(e){this.oilStocksAnalysis=e.unavailable?null:e,this.render()}updateLngVulnerability(e){var t;this.lngVulnerability=(t=e==null?void 0:e.top20LngDependent)!=null&&t.length?e:null,this.render()}renderOilStocksSection(){var c,d,u,p;const e=this.oilStocksAnalysis;if(!e||e.ieaMembers.length===0)return"";const t=e.ieaMembers.map(h=>{const f=h.netExporter?'<span class="energy-net-exporter-badge">Net Exporter</span>':h.daysOfCover!=null?o(String(h.daysOfCover))+" d":"—",b=h.belowObligation?'<span class="energy-below-obligation-badge">Below 90d</span>':"";return`
        <tr class="oil-stocks-row">
          <td class="oil-stocks-rank">${o(String(h.rank))}</td>
          <td class="oil-stocks-iso">${o(h.iso2)}</td>
          <td class="oil-stocks-days">${f}${b}</td>
          <td class="oil-stocks-vs">${h.vsObligation!=null?(h.vsObligation>0?"+":"")+o(String(h.vsObligation)):"—"}</td>
        </tr>`}).join(""),s=e.regionalSummary,a=((c=s==null?void 0:s.europe)==null?void 0:c.avgDays)!=null?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">Europe</span><span>avg ${o(String(s.europe.avgDays))}d / min ${o(String(((d=s.europe)==null?void 0:d.minDays)??"—"))}d</span>${(s.europe.countBelowObligation??0)>0?`<span class="energy-below-obligation-badge">${o(String(s.europe.countBelowObligation))} below 90d</span>`:""}</div>`:"",l=((u=s==null?void 0:s.asiaPacific)==null?void 0:u.avgDays)!=null?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">Asia-Pacific</span><span>avg ${o(String(s.asiaPacific.avgDays))}d / min ${o(String(((p=s.asiaPacific)==null?void 0:p.minDays)??"—"))}d</span>${(s.asiaPacific.countBelowObligation??0)>0?`<span class="energy-below-obligation-badge">${o(String(s.asiaPacific.countBelowObligation))} below 90d</span>`:""}</div>`:"",n=s!=null&&s.northAmerica?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">North America</span><span>${o(String(s.northAmerica.netExporters??0))} net exporter(s)${s.northAmerica.avgDays!=null?`, avg ${o(String(s.northAmerica.avgDays))}d`:""}</span></div>`:"";return`
      <div class="energy-tape-section" style="margin-top:8px">
        <div class="energy-section-title">IEA Oil Stocks — Days of Cover</div>
        <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table oil-stocks-table">
            <thead><tr><th scope="col">#</th><th scope="col">Ctry</th><th scope="col">Days</th><th scope="col">vs 90d</th></tr></thead>
            <tbody>${t}</tbody>
          </table>
        </div>
        <div class="oil-stocks-regional" style="margin-top:6px">
          ${a}${l}${n}
        </div>
        <div class="indicator-date" style="margin-top:4px">Data: ${o(e.dataMonth)} (IEA)</div>
      </div>`}renderLngVulnerabilitySection(){const e=this.lngVulnerability;if(!e||e.top20LngDependent.length===0)return"";const s=e.top20LngDependent.slice(0,5).map(a=>`
      <tr class="oil-stocks-row">
        <td class="oil-stocks-iso">${o(a.iso2)}</td>
        <td class="oil-stocks-days">${o((a.lngShareOfImports*100).toFixed(1))}%</td>
        <td class="oil-stocks-vs">${o(String(Math.round(a.lngImportsTj)))} TJ</td>
      </tr>`).join("");return`
      <div class="energy-tape-section" style="margin-top:8px">
        <div class="energy-section-title">LNG Vulnerability</div>
        <div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table oil-stocks-table">
            <thead><tr><th scope="col">Country</th><th scope="col">LNG Share</th><th scope="col">LNG Imports</th></tr></thead>
            <tbody>${s}</tbody>
          </table>
        </div>
        <div class="indicator-date" style="margin-top:4px">Data: ${o(e.dataMonth)} (JODI Gas)</div>
      </div>`}render(){var A,k,D,F,re,I,X,Q,G;const e=[(A=this.analytics)==null?void 0:A.wtiPrice,(k=this.analytics)==null?void 0:k.brentPrice,(D=this.analytics)==null?void 0:D.usProduction,(F=this.analytics)==null?void 0:F.usInventory].filter(Boolean);if(e.length===0&&this.tape.length===0&&this.crudeWeeks.length===0&&this.natGasWeeks.length===0&&!this.euGas&&!this.oilStocksAnalysis&&!this.lngVulnerability){this.setSafeContent(P(`<div class="economic-empty">${g("components.energyComplex.noData")}</div>`,"legacy Panel.setContent() migration"));return}const t=[];ms(this.analytics)&&t.push("EIA"),this.tape.length>0&&t.push(g("components.energyComplex.liveTapeSource")),this.euGas&&t.push("GIE AGSI+"),this.oilStocksAnalysis&&t.push("IEA"),this.lngVulnerability&&t.push("JODI Gas");const s=this.crudeWeeks[0]??null,a=(s==null?void 0:s.weeklyChangeMb)??null,l=a!==null&&a>0?"+":"",n=a===null?"":a>0?"change-negative":"change-positive",c=this.crudeWeeks.slice().reverse().map(C=>C.stocksMb),d=this.natGasWeeks[0]??null,u=(d==null?void 0:d.weeklyChangeBcf)??null,p=u!==null&&u>0?"+":"",h=u===null?"":u>0?"change-negative":"change-positive",f=this.natGasWeeks.slice().reverse().map(C=>C.storBcf),b=((re=this.euGas)==null?void 0:re.fillPct)??null,m=((I=this.euGas)==null?void 0:I.fillPctChange1d)??null,v=m!==null&&m>0?"+":"",w=m===null?"":m>0?"change-positive":"change-negative",E=((X=this.euGas)==null?void 0:X.trend)??"",T=(((Q=this.euGas)==null?void 0:Q.history)??[]).slice().reverse().map(C=>C.fillPct);this.setSafeContent(P(`
      <div class="energy-complex-content">
        ${e.length>0?`
          <div class="energy-summary-grid">
            ${e.map(C=>{if(!C)return"";const oe=$t(C.trend,C.name.includes("Production")),ge=`${C.changePct>0?"+":""}${C.changePct.toFixed(1)}%`,le=C.id==="brent"||C.id==="wti",U=C.lastUpdated.slice(0,10),ce=le?[U?g("components.energyComplex.weekEnding",{date:U}):g("components.energyComplex.unknownPriceDate"),Ft(Date.parse(C.lastUpdated)).stale?g("components.energyComplex.stalePrice"):""].filter(Boolean).join(" · "):U;return`
                <div class="energy-summary-card">
                  <div class="energy-summary-head">
                    <span class="energy-summary-name">${o(C.name)}</span>
                    <span class="energy-summary-trend" style="color:${o(oe)}">${o(kt(C.trend))}</span>
                  </div>
                  ${le?`<div class="indicator-date">${o(g("components.energyComplex.eiaWeeklySpot"))}</div>`:""}
                  <div class="energy-summary-value">${o(Ct(C.current,C.unit))} <span class="energy-unit">${o(C.unit)}</span></div>
                  <div class="energy-summary-change" style="color:${o(oe)}">${o(ge)}</div>
                  <div class="indicator-date">${o(ce)}</div>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${this.crudeWeeks.length>0?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">US Crude Inventories (Mb)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${de(c,a,80,22)}
              <div>
                <span class="commodity-price">${o(s?s.stocksMb.toFixed(1):"—")} Mb</span>
                ${a!==null?`<span class="commodity-change ${o(n)}" style="margin-left:6px">${o(l+a.toFixed(1))} WoW</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${o((s==null?void 0:s.period)??"")}</div>
          </div>
        `:""}
        ${this.natGasWeeks.length>0?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">US Nat Gas Storage (Bcf)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${de(f,u,80,22)}
              <div>
                <span class="commodity-price">${o(d?d.storBcf.toFixed(0):"—")} Bcf</span>
                ${u!==null?`<span class="commodity-change ${o(h)}" style="margin-left:6px">${o(p+u.toFixed(0))} WoW</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${o((d==null?void 0:d.period)??"")}</div>
          </div>
        `:""}
        ${b!==null?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">EU Gas Storage (Fill %)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${de(T,m,80,22)}
              <div>
                <span class="commodity-price">${o(b.toFixed(1))}%</span>
                ${m!==null?`<span class="commodity-change ${o(w)}" style="margin-left:6px">${o(v+m.toFixed(2))}% 1d</span>`:""}
                ${E?`<span style="margin-left:6px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(E)}</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${o(((G=this.euGas)==null?void 0:G.updatedAt)??"")}</div>
          </div>
        `:""}
        ${this.tape.length>0?`
          <div class="energy-tape-section">
            <div class="energy-section-title">${g("components.energyComplex.marketTape")}</div>
            <div class="commodities-grid energy-tape-grid">
              ${this.tape.map(C=>`
                <div class="commodity-item energy-tape-card">
                  <div class="commodity-name">${o(C.display)}</div>
                  ${de(C.sparkline,C.change,60,18)}
                  ${Tt(C)}
                  <div class="commodity-price">${o(Pt(C.price))}</div>
                  <div class="commodity-change ${zt(C.change??0)}">${Mt(C.change??0)}</div>
                  ${Lt(C.symbol)?`<div class="indicator-date">${o(rt(C))}</div>`:""}
                </div>
              `).join("")}
            </div>
          </div>
        `:""}
        ${this.renderOilStocksSection()}
        ${this.renderLngVulnerabilitySection()}
      </div>
      <div class="economic-footer">
        <span class="economic-source">${o(t.join(" • "))}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}}const da=Object.freeze(Object.defineProperty({__proto__:null,EnergyComplexPanel:gs},Symbol.toStringTag,{value:"Module"}));function S(r,i){return g("components.gridDisruptionClock."+r,i)}function Y(r){const i=new Date(r);return x("time",{datetime:i.toISOString(),title:i.toISOString()},new Intl.DateTimeFormat(Te(),{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZone:"UTC",timeZoneName:"short"}).format(i))}function vs(r,i){if(r===null)return"—";const e=Math.max(0,Math.floor((i-r)/6e4));if(e<60)return S("minutes",{amount:e});const t=Math.floor(e/60);return t<48?S("hours",{amount:t}):S("days",{amount:Math.floor(t/24)})}function he(r,i){const e=At(i);return e.startsWith("https://")?x("a",{href:e,target:"_blank",rel:"noopener noreferrer"},r):x("span",r)}function ft(r,...i){return x("section",{className:"grid-clock-section"},x("h3",r),...i)}function Ge(r){return x("li",{className:"grid-clock-notice"},x("strong",r.title),x("div",{className:"grid-clock-meta"},S("kind."+r.kind)," · ",he(r.sourceName,r.sourceUrl)),x("div",{className:"grid-clock-meta"},S("issued")," ",Y(r.issuedAt)," · ",S("until")," ",Y(r.expiresAt)))}function ys(r,i){var l;const e=i.activeWarnings,t=(l=r.recentWarnings)==null?void 0:l.filter(n=>n.issuedAt<=Date.now()).sort((n,c)=>c.issuedAt-n.issuedAt)[0],s=r.warningSources.map(n=>{const c=n.checkedAt,d=c!==null&&Date.now()-c>jt,u=n.status==="available"&&d?"stale":n.status;return x("li",he(n.sourceName,n.sourceUrl)," · ",S("checks."+u),c?x("span"," · ",Y(c)):null)}),a=r.warningSources.find(n=>n.kind==="grid"&&n.status==="not_monitored");return ft(S("warnings"),r.warningSources.some(n=>n.kind==="grid")?null:x("p",{className:"grid-clock-meta"},S("kind.grid")," · ",S("checks.not_monitored")),e.length?x("ul",{className:"grid-clock-list"},...e.map(Ge)):x("p",i.warningsFresh?S("noActive"):S("unknownWarnings")),a?x("p",{className:"grid-clock-meta"},S("operatorLink")," ",he(a.sourceName,a.sourceUrl)):null,t?x("details",{dataset:{clockDisclosure:"prior-notice"}},x("summary",S("priorNotice")),x("ul",{className:"grid-clock-list"},Ge(t))):null,x("details",{dataset:{clockDisclosure:"sources"}},x("summary",S("sources")),x("ul",{className:"grid-clock-checks"},...s)))}function bs(r,i){const e=new Intl.NumberFormat(Te()),t=i.freshness==="unavailable"?null:r.current;let s=S("noComparison");if(i.changeCustomers!==null){const n=i.changeCustomers;s=S(n<0?"decreased":n>0?"increased":"unchanged",{amount:e.format(Math.abs(n))})}const a=[...r.history].sort((n,c)=>c.observedAt-n.observedAt),l=a.length?x("details",{dataset:{clockDisclosure:"history"}},x("summary",S("history",{total:e.format(a.length)})),x("ol",{className:"grid-clock-history"},...a.map(n=>x("li",Y(n.observedAt),x("span",n.customersOut===null?S("unknown"):e.format(n.customersOut)),x("small",n.coverageLabel))))):null;return ft(S("recovery"),x("p",s,i.comparisonAt===null?null:x("span"," · ",S("since")," ",Y(i.comparisonAt))),(t==null?void 0:t.peakLoadRestoredPct)==null?null:x("p",S("peakLoad",{percent:e.format(t.peakLoadRestoredPct)})),l)}class ws extends O{constructor(){super({id:"grid-disruption-clock",title:g("panels.gridDisruptionClock"),className:"panel-wide",defaultRowSpan:2,trackActivity:!1});y(this,"snapshot",null);y(this,"selected","CA");y(this,"refreshFailed",!1);y(this,"clockTimer");y(this,"selector",x("div",{className:"grid-clock-selector",role:"group"}));y(this,"readings",x("div"));y(this,"clock",x("div",{className:"grid-clock"},this.selector,this.readings));this.showLoading(),this.clockTimer=setInterval(()=>this.render(),6e4)}destroy(){clearInterval(this.clockTimer),super.destroy()}async fetchData(){try{this.snapshot=await _t(),this.snapshot.regions.some(e=>e.code===this.selected)||(this.selected="CA"),this.refreshFailed=!1}catch{if(!this.snapshot){this.showError(S("loadError"),()=>void this.fetchData());return}this.refreshFailed=!0}this.render()}render(){var w,E,T,A;const e=(w=this.snapshot)==null?void 0:w.regions.find(k=>k.code===this.selected);if(!e)return;if(this.isLocked){this.clearErrorState();return}const t=new Set([...this.content.querySelectorAll("details[open]")].map(k=>k.dataset.clockDisclosure)),s=this.content.contains(document.activeElement)?document.activeElement:null,a=s instanceof HTMLElement?s.dataset.region:void 0,l=(s==null?void 0:s.tagName)==="SUMMARY",n=s instanceof HTMLAnchorElement?s.href:null,c=(E=s==null?void 0:s.closest("details"))==null?void 0:E.dataset.clockDisclosure,d=Date.now(),u=Rt(e,d),p=u.freshness==="unavailable"?null:e.current,h=new Intl.NumberFormat(Te()),f=this.snapshot.regions;this.selector.setAttribute("aria-label",S("region")),(this.selector.children.length!==f.length||f.some(({code:k},D)=>{var F;return((F=this.selector.children[D])==null?void 0:F.getAttribute("data-region"))!==k}))&&this.selector.replaceChildren(...f.map(({code:k})=>x("button",{type:"button","data-region":k,onclick:D=>{D.currentTarget.focus({preventScroll:!0}),this.selected=k,this.render()}},It[k].name)));for(const k of this.selector.children)k.setAttribute("aria-pressed",String(k.getAttribute("data-region")===this.selected));const b=u.activeWarnings.length?Math.min(...u.activeWarnings.map(k=>k.issuedAt)):null,m=vs(b??(p==null?void 0:p.observedAt)??null,d),v=p==null?void 0:p.customersOut;this.refreshFailed?this.setDataBadge("cached"):u.freshness==="fresh"||u.warningsFresh?this.setDataBadge("live"):u.freshness==="stale"?this.setDataBadge("cached"):this.setDataBadge("unavailable"),this.clock.dataset.phase=u.phase,ot(this.readings,this.refreshFailed?x("p",{className:"grid-clock-meta",role:"status"},S("retained")):null,x("div",{className:"grid-clock-readout"},x("div",x("span",{className:"grid-clock-phase"},S("phase."+u.phase)),x("strong",{className:"grid-clock-total"},v==null?S("unknown"):h.format(v)),x("div",{className:"grid-clock-meta"},S(u.freshness==="stale"||this.refreshFailed?"lastCustomers":"customers"))),x("div",{className:"grid-clock-age"},x("strong",m),x("span",S(b?"warningAge":"dataAge")))),p?x("p",{className:"grid-clock-coverage"},p.coverageLabel,p.customersTracked===null?x("span"," · ",S("denominatorUnknown")):x("span"," · ",S("tracked",{amount:h.format(p.customersTracked)})),x("span",{className:"grid-clock-attribution"},he(p.sourceName,p.sourceUrl)," · ",Y(p.observedAt)),p.detail?x("span",{className:"grid-clock-attribution"},p.detail):null):x("p",{className:"grid-clock-coverage"},S("noObservation")),ys(e,u),bs(e,u)),this.clock.parentElement!==this.content?this.setContentNodes(this.clock):this.clearErrorState();for(const k of this.content.querySelectorAll("details")){const D=k.querySelector("summary");k.open=t.has(k.dataset.clockDisclosure),l&&k.dataset.clockDisclosure===c&&(D==null||D.focus({preventScroll:!0}))}a&&!(s!=null&&s.isConnected)&&((T=this.content.querySelector(`button[data-region="${a}"]`))==null||T.focus({preventScroll:!0})),n&&((A=[...this.content.querySelectorAll("a")].find(k=>{var D;return k.href===n&&((D=k.closest("details"))==null?void 0:D.dataset.clockDisclosure)===c}))==null||A.focus({preventScroll:!0}))}}const pa=Object.freeze(Object.defineProperty({__proto__:null,GridDisruptionClockPanel:ws},Symbol.toStringTag,{value:"Module"})),N=400,me=150,xs=280,M=42,ze=10,j=10,mt=22,Me=N-M-ze,q=me-j-mt;function $s(r,i){const e=new Map(r.map(a=>[a.period,a.stocksMb])),t=new Map(i.map(a=>[a.period,a.stocksMb]));return[...new Set([...e.keys(),...t.keys()])].sort().map(a=>({period:a,crudeMb:e.get(a)??null,sprMb:t.get(a)??null}))}function ks(r){return r.slice(5)}function R(r,i=1){return r.toFixed(i)}function Cs(r,i,e,t=4){const s=i-r||1;return Array.from({length:t+1},(a,l)=>{const n=r+l/t*s,c=j+q-l/t*q;return`<line x1="${M}" y1="${c.toFixed(1)}" x2="${N-ze}" y2="${c.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${M-4}" y="${c.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${o(R(n,0))}${o(e)}</text>`}).join("")}function gt(r,i){const e=Math.max(1,Math.floor(i/5));return r.map((t,s)=>s%e!==0&&s!==i-1?"":`<text x="${(M+s/Math.max(1,i-1)*Me).toFixed(1)}" y="${me-2}" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">${o(t)}</text>`).join("")}function vt(r){if(r.length<2)return"";const i=r[0],e=r[r.length-1],t=r.map(s=>`${s.x.toFixed(1)},${s.y.toFixed(1)}`).join(" L");return`M${i.x.toFixed(1)},${i.y.toFixed(1)} L${t} L${e.x.toFixed(1)},${j+q} L${i.x.toFixed(1)},${j+q} Z`}function Ss(r){const i=r.filter(v=>v.crudeMb!=null&&v.sprMb!=null);if(i.length<2){const v=r.filter(w=>w.crudeMb!=null);return v.length<2?'<div style="text-align:center;color:var(--text-dim);padding:16px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">Insufficient data for chart</div>':Es(v)}const e=i.map(v=>v.crudeMb+v.sprMb),t=Math.max(...e)*1.05,s=Math.min(...i.map(v=>v.sprMb))*.95,a=t-s||1,l=v=>j+q-(v-s)/a*q,n=v=>M+v/Math.max(1,i.length-1)*Me,c=i.map((v,w)=>({x:n(w),y:l(v.sprMb)})),d=`<path d="${vt(c)}" fill="#f59e0b" opacity="0.25"/>`,u=`<polyline points="${c.map(v=>`${v.x.toFixed(1)},${v.y.toFixed(1)}`).join(" ")}" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>`,p=i.map((v,w)=>({x:n(w),y:l(v.crudeMb+v.sprMb)})),h=`<path d="M${p.map(v=>`${v.x.toFixed(1)},${v.y.toFixed(1)}`).join(" L")} L${c.map(v=>`${v.x.toFixed(1)},${v.y.toFixed(1)}`).reverse().join(" L")} Z" fill="#3b82f6" opacity="0.2"/>`,f=`<polyline points="${p.map(v=>`${v.x.toFixed(1)},${v.y.toFixed(1)}`).join(" ")}" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.9"/>`,b=Cs(s,t,""),m=gt(i.map(v=>ks(v.period)),i.length);return`<svg viewBox="0 0 ${N} ${me}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crude oil inventory history: commercial stocks and SPR" style="width:100%;height:auto;display:block">${b}${m}${d}${u}${h}${f}</svg>`}function Es(r){const i=r.map(e=>({x:e.period,y:e.crudeMb}));return Ee(i,"#3b82f6","")}function Ee(r,i,e,t=me){if(r.length<2)return'<div style="text-align:center;color:var(--text-dim);padding:12px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">Insufficient data</div>';const s=t-j-mt,a=r.map(b=>b.y),l=Math.max(...a)*1.02,n=Math.min(...a)*.98,c=l-n||1,d=r.map((b,m)=>({x:M+m/Math.max(1,r.length-1)*Me,y:j+s-(b.y-n)/c*s})),u=d.map(b=>`${b.x.toFixed(1)},${b.y.toFixed(1)}`).join(" "),p=vt(d),h=Array.from({length:4},(b,m)=>{const v=n+m/3*c,w=j+s-m/3*s;return`<line x1="${M}" y1="${w.toFixed(1)}" x2="${N-ze}" y2="${w.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${M-4}" y="${w.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${o(R(v,0))}${o(e)}</text>`}).join(""),f=gt(r.map(b=>b.x.slice(5)),r.length);return`<svg viewBox="0 0 ${N} ${t}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inventory trend" style="width:100%;height:auto;display:block">${h}${f}<path d="${p}" fill="${i}" opacity="0.12"/><polyline points="${u}" fill="none" stroke="${i}" stroke-width="1.5" opacity="0.9"/></svg>`}function Ts(r){const i=[...r].filter(d=>d.daysOfCover!=null||d.netExporter).sort((d,u)=>d.netExporter&&!u.netExporter?1:!d.netExporter&&u.netExporter?-1:(d.daysOfCover??999)-(u.daysOfCover??999)).slice(0,20);if(!i.length)return'<div style="text-align:center;color:var(--text-dim);padding:12px;font-size:calc(11px * var(--wm-panel-effective-scale, 1))">No IEA data</div>';const e=Math.max(200,...i.filter(d=>d.daysOfCover!=null).map(d=>d.daysOfCover)),t=Math.min(14,(xs-20)/i.length),s=N-M-10,a=15+i.length*t+5,l=i.map((d,u)=>{const p=d.daysOfCover??0,h=Math.max(0,p/e*s),f=15+u*t,b=d.netExporter?"#6b7280":d.belowObligation?"#ef4444":"#22c55e",m=d.netExporter?"Exp":p>0?`${p.toFixed(0)}d`:"N/A";return`<rect x="${M}" y="${f.toFixed(1)}" width="${h.toFixed(1)}" height="${(t-2).toFixed(1)}" fill="${b}" opacity="0.6" rx="1"/>
      <text x="${M-3}" y="${(f+t/2).toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.5)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${o(d.iso2)}</text>
      <text x="${(M+h+3).toFixed(1)}" y="${(f+t/2).toFixed(1)}" fill="rgba(255,255,255,0.6)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))" dominant-baseline="middle">${o(m)}</text>`}).join(""),n=M+90/e*s,c=`<line x1="${n.toFixed(1)}" y1="10" x2="${n.toFixed(1)}" y2="${a-5}" stroke="rgba(255,255,255,0.25)" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="${n.toFixed(1)}" y="9" text-anchor="middle" fill="rgba(255,255,255,0.4)" style="font-size:calc(7px * var(--wm-panel-effective-scale, 1))">90d</text>`;return`<svg viewBox="0 0 ${N} ${a}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Supply obligation coverage by month" style="width:100%;height:auto;display:block">${l}${c}</svg>`}function ee(r,i,e=""){return`<div class="energy-tape-section" style="margin-top:8px">
    <div class="energy-section-title">${o(r)}</div>
    <div style="border-radius:6px;background:rgba(255,255,255,0.02);padding:4px 0">${i}</div>
    ${e?`<div style="margin-top:3px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${e}</div>`:""}
  </div>`}function $e(r,i){if(r==null)return"";const e=r>=0?"+":"";return`<span class="commodity-change ${r>=0?"change-positive":"change-negative"}">${o(e+R(r))} ${o(i)}</span>`}class As extends O{constructor(){super({id:"oil-inventories",title:g("panels.oilInventories"),showCount:!1,infoTooltip:g("components.oilInventories.infoTooltip"),defaultRowSpan:2})}async fetchData(){var i,e;try{const t=await fetch(Et("/api/economic/v1/get-oil-inventories"),{signal:Nt(15e3)});if(!t.ok){this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300);return}const s=await t.json();if(!((i=this.element)!=null&&i.isConnected))return;this.render(s)}catch{if(!((e=this.element)!=null&&e.isConnected))return;this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300)}}render(i){var s,a,l,n,c,d,u,p,h,f,b;const e=[];if((s=i.crudeWeeks)!=null&&s.length||(l=(a=i.spr)==null?void 0:a.weeks)!=null&&l.length){const m=$s([...i.crudeWeeks??[]].reverse(),[...((n=i.spr)==null?void 0:n.weeks)??[]].reverse()),v=Ss(m),w=[...m].reverse().find(k=>k.crudeMb!=null&&k.sprMb!=null),E=(c=i.crudeWeeks)==null?void 0:c[0],T=i.spr,A=[];w&&A.push(`Total: ${o(R(w.crudeMb+w.sprMb))} Mb (${o(w.period)})`),E&&A.push(`Commercial: ${o(R(E.stocksMb))} ${$e(E.weeklyChangeMb,"WoW")}`),T&&A.push(`SPR: ${o(R(T.latestStocksMb))} ${$e(T.changeWow,"WoW")}`),e.push(ee("US Total Oil Stocks",v,A.join(" | ")))}if((d=i.natGasWeeks)!=null&&d.length){const v=[...i.natGasWeeks].reverse().map(A=>({x:A.period,y:A.storBcf})),w=Ee(v,"#22c55e","",120),E=i.natGasWeeks[0],T=E?`Storage: ${o(R(E.storBcf,0))} Bcf ${$e(E.weeklyChangeBcf,"WoW")}`:"";e.push(ee("US Nat Gas Working Storage",w,T))}if(i.euGas&&((u=i.euGas.history)!=null&&u.length)){const v=[...i.euGas.history].reverse().map(A=>({x:A.date,y:A.fillPct})),w=Ee(v,"#14b8a6","%",100),E=i.euGas.fillPctChange1d>=0?"+":"",T=`Fill: ${o(R(i.euGas.fillPct))}% | Trend: ${o(i.euGas.trend)} | ${o(E+R(i.euGas.fillPctChange1d,2))}%/d`;e.push(ee("EU Gas Storage Fill",w,T))}if((h=(p=i.ieaStocks)==null?void 0:p.members)!=null&&h.length){const m=Ts(i.ieaStocks.members),v=[((f=i.ieaStocks.europe)==null?void 0:f.avgDays)!=null?`Europe avg ${i.ieaStocks.europe.avgDays.toFixed(0)}d`:"",((b=i.ieaStocks.asiaPacific)==null?void 0:b.avgDays)!=null?`AsiaPac avg ${i.ieaStocks.asiaPacific.avgDays.toFixed(0)}d`:""].filter(Boolean).join(" | "),w=i.ieaStocks.members.filter(T=>T.belowObligation).length,E=`${v}${w>0?` | <span style="color:#ef4444">${w} below 90d</span>`:""} | Data: ${o(i.ieaStocks.dataMonth)}`;e.push(ee("IEA OECD Oil Stocks (Days of Cover)",m,E))}if(i.refinery){const m=`US Refinery Crude Inputs: <span class="commodity-price">${o(R(i.refinery.inputsMbpd))} Mb/d</span> (${o(i.refinery.period)})`;e.push(ee("Refinery Throughput",`<div style="padding:4px 8px;font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${m}</div>`,""))}if(e.length===0){this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300);return}this.setSafeContent(P(`<div class="energy-complex-content">${e[0]}<div style="display:flex;gap:12px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-top:2px">
      <span><svg width="14" height="4" style="vertical-align:middle" aria-hidden="true"><line x1="0" y1="2" x2="14" y2="2" stroke="#3b82f6" stroke-width="2"/></svg> Commercial</span>
      <span><svg width="14" height="4" style="vertical-align:middle" aria-hidden="true"><line x1="0" y1="2" x2="14" y2="2" stroke="#f59e0b" stroke-width="2"/></svg> SPR</span>
    </div>${e.slice(1).join("")}
      <div class="indicator-date" style="margin-top:6px">Source: EIA, IEA, GIE AGSI+</div>
    </div>`,"legacy Panel.setContent() migration"))}}const ua=Object.freeze(Object.defineProperty({__proto__:null,OilInventoriesPanel:As},Symbol.toStringTag,{value:"Module"})),Ds={conservation:"Energy Conservation",consumer_support:"Consumer Support"},Ps={transport:"Transport",buildings:"Buildings",industry:"Industry",electricity:"Electricity",agriculture:"Agriculture",general:"General"},zs={active:"ecp-status-active",planned:"ecp-status-planned",ended:"ecp-status-ended"};class Ms extends O{constructor(){super({id:"energy-crisis",title:"Energy Crisis Tracker",showCount:!0,trackActivity:!0,defaultRowSpan:2,infoTooltip:"IEA 2026 Energy Crisis Policy Response Tracker. Tracks government measures to conserve energy and support consumers in response to Middle East conflict and Strait of Hormuz supply disruptions."});y(this,"data",null);y(this,"loading",!0);y(this,"error",null);y(this,"activeFilter","all");this.showLoading("Loading energy crisis policies..."),this.content.addEventListener("click",e=>{const t=e.target.closest(".ecp-filter-btn");if(!t)return;const s=t.dataset.filter||"all";s!==this.activeFilter&&(this.activeFilter=s,this.render())})}async fetchData(){var t;const e=lt("energyCrisisPolicies");if((t=e==null?void 0:e.policies)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.setCount(e.policies.length),this.render(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,s;try{const l=await new ct(B(),{fetch:(...n)=>globalThis.fetch(...n)}).getEnergyCrisisPolicies({countryCode:"",category:""});if(!((e=this.element)!=null&&e.isConnected))return;((t=l.policies)!=null&&t.length||!this.data)&&(this.data=l,this.error=null,this.loading=!1,this.setCount(l.policies.length),this.render())}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.data||(console.warn("[EnergyCrisis] Fetch error:",a),this.error="Energy crisis data unavailable",this.loading=!1,this.render())}}getFilteredPolicies(){var e;return(e=this.data)!=null&&e.policies?this.activeFilter==="all"?this.data.policies:this.data.policies.filter(t=>t.category===this.activeFilter):[]}buildSummary(){var l;const e=((l=this.data)==null?void 0:l.policies)??[],t=e.filter(n=>n.category==="conservation").length,s=e.filter(n=>n.category==="consumer_support").length,a=new Set(e.map(n=>n.countryCode)).size;return{conservationCount:t,supportCount:s,countryCount:a}}render(){var d;if(this.loading){this.showLoading("Loading energy crisis policies...");return}if(this.error||!this.data){this.showError(this.error||"No data available",()=>void this.fetchData());return}if(!((d=this.data.policies)!=null&&d.length)){this.setSafeContent(P('<div class="panel-empty">No energy crisis policies tracked.</div>',"legacy Panel.setContent() migration"));return}const e=this.buildSummary(),t=this.getFilteredPolicies(),s=`
      <div class="ecp-summary">
        <div class="ecp-summary-card">
          <span class="ecp-summary-value">${e.countryCount}</span>
          <span class="ecp-summary-label">Countries</span>
        </div>
        <div class="ecp-summary-card ecp-summary-conservation">
          <span class="ecp-summary-value">${e.conservationCount}</span>
          <span class="ecp-summary-label">Conservation</span>
        </div>
        <div class="ecp-summary-card ecp-summary-support">
          <span class="ecp-summary-value">${e.supportCount}</span>
          <span class="ecp-summary-label">Consumer Support</span>
        </div>
      </div>
    `,a=`
      <div class="ecp-filters">
        <button class="ecp-filter-btn ${this.activeFilter==="all"?"ecp-filter-active":""}" data-filter="all">All</button>
        <button class="ecp-filter-btn ${this.activeFilter==="conservation"?"ecp-filter-active":""}" data-filter="conservation">Conservation</button>
        <button class="ecp-filter-btn ${this.activeFilter==="consumer_support"?"ecp-filter-active":""}" data-filter="consumer_support">Consumer Support</button>
      </div>
    `,l=t.map(u=>{const p=Ds[u.category]||u.category,h=Ps[u.sector]||u.sector,f=zs[u.status]||"",b=u.category==="conservation"?"ecp-cat-conservation":"ecp-cat-support";return`
        <div class="ecp-policy-row">
          <div class="ecp-policy-header">
            <span class="ecp-country">${o(u.country)}</span>
            <span class="ecp-pill ${b}">${o(p)}</span>
            <span class="ecp-pill ecp-pill-sector">${o(h)}</span>
            <span class="ecp-pill ${f}">${o(u.status)}</span>
          </div>
          <div class="ecp-measure">${o(u.measure)}</div>
          <div class="ecp-date">${o(u.dateAnnounced)}</div>
        </div>
      `}).join(""),n=this.data.sourceUrl||"https://www.iea.org/data-and-statistics/data-tools/2026-energy-crisis-policy-response-tracker",c=[this.data.updatedAt?`Updated ${new Date(this.data.updatedAt).toLocaleDateString()}`:"","Source: IEA"].filter(Boolean).join(" · ");this.setSafeContent(P(`
      <div class="ecp-container">
        ${s}
        ${a}
        <div class="ecp-policy-list">${l}</div>
        <div class="ecp-footer">
          <span>${o(c)}</span>
          <a href="${o(n)}" target="_blank" rel="noopener noreferrer" class="ecp-source-link">IEA Tracker ↗</a>
        </div>
      </div>
    `,"legacy Panel.setContent() migration"))}}const ha=Object.freeze(Object.defineProperty({__proto__:null,EnergyCrisisPanel:Ms},Symbol.toStringTag,{value:"Module"})),Os=["hormuz_strait","malacca_strait","suez","bab_el_mandeb","bosphorus","dover_strait","panama"];function Fs(r){switch(r){case"hormuz_strait":return g("components.chokepointStrip.shortName.hormuzStrait");case"malacca_strait":return g("components.chokepointStrip.shortName.malaccaStrait");case"suez":return g("components.chokepointStrip.shortName.suez");case"bab_el_mandeb":return g("components.chokepointStrip.shortName.babElMandeb");case"bosphorus":return g("components.chokepointStrip.shortName.bosphorus");case"dover_strait":return g("components.chokepointStrip.shortName.doverStrait");case"panama":return g("components.chokepointStrip.shortName.panama");default:return""}}function Ls(r){const i=r.flowEstimate;if(!i||typeof i.currentMbd!="number"||typeof i.baselineMbd!="number")return"—";const e=i.baselineMbd>0?Math.round(i.currentMbd/i.baselineMbd*100):null;return e==null?g("components.chokepointStrip.flow.mbd",{value:i.currentMbd.toFixed(1)}):g("components.chokepointStrip.flow.pctOfBaseline",{pct:e})}class _s extends O{constructor(){super({id:"chokepoint-strip",title:g("components.chokepointStrip.title"),infoTooltip:g("components.chokepointStrip.infoTooltip")});y(this,"data",null)}async fetchData(){var t,s,a,l;let e;try{e=await Bt()}catch(n){if(this.isAbortError(n)||!((t=this.element)!=null&&t.isConnected))return;this.showError(g("components.chokepointStrip.errors.unavailable"),()=>void this.fetchData());return}if((s=this.element)!=null&&s.isConnected){this.data=e,this.render();try{const n=await Gt(e);if(!(n!=null&&n.chokepoints.length)||!((a=this.element)!=null&&a.isConnected))return;this.data=n,this.render()}catch(n){if(this.isAbortError(n)||!((l=this.element)!=null&&l.isConnected))return;console.warn("[ChokepointStripPanel] Hydration refresh failed:",n)}}}render(){var d,u;if(!((u=(d=this.data)==null?void 0:d.chokepoints)!=null&&u.length)){this.showError(g("components.chokepointStrip.errors.noData"),()=>void this.fetchData());return}const e=new Map(this.data.chokepoints.map(p=>[p.id,p])),t=Os.map(p=>e.get(p)).filter(p=>!!p),s=Dt(t.map(p=>{const h=Wt(p.status),f=Fs(p.id)||p.name,b=Ls(p),m=p.navigationalWarningsAvailable===!0&&p.activeWarnings>0?H`<span class="cp-chip-warn">${p.activeWarnings}</span>`:H``;return H`
        <div class="cp-chip" data-cp="${p.id}" title="${p.name} - ${p.status||g("components.chokepointStrip.unknown")}">
          <div class="cp-chip-dot" style="background:${h}"></div>
          <div class="cp-chip-body">
            <div class="cp-chip-name">${f}${m}</div>
            <div class="cp-chip-flow">${b}</div>
          </div>
        </div>`})),a=Vt(this.data),l=a?H`<div class="cp-strip-warning">${a}</div>`:H``,n=t.reduce((p,h)=>p+(h.aisSnapshotAvailable===!0?h.aisDisruptions:0),0),c=P(ae({sourceType:"ais",method:g("components.chokepointStrip.attribution.method"),sampleSize:n||void 0,sampleLabel:g("components.chokepointStrip.attribution.sampleLabel"),updatedAt:this.data.fetchedAt,creditName:g("components.chokepointStrip.attribution.creditName")}),"attributionFooterHtml escapes fields and returns shared footer markup");this.setSafeContent(H`
      ${l}
      <div class="cp-strip-wrap">
        <div class="cp-strip">${s}</div>
        ${c}
      </div>
      ${P(ne,"static attribution footer CSS constant")}
      <style>
        .cp-strip-warning { margin: 0 0 6px; color: var(--warning, #f59e0b); font-size: calc(11px * var(--wm-panel-effective-scale, 1)); }
        .cp-strip-wrap { padding: 4px 0; }
        .cp-strip { display: flex; flex-wrap: wrap; gap: 8px; }
        .cp-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          min-width: 120px;
          font-size: calc(11px * var(--wm-panel-effective-scale, 1));
          cursor: default;
        }
        .cp-chip-dot { width: 8px; height: 8px; border-radius: 50%; flex: 0 0 8px; }
        .cp-chip-body { display: flex; flex-direction: column; line-height: 1.2; }
        .cp-chip-name { font-weight: 600; color: var(--text, #eee); display: flex; align-items: center; gap: 4px; }
        .cp-chip-warn { background:#e74c3c;color:#fff;border-radius:9px;padding:0 5px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700; }
        .cp-chip-flow { color: var(--text-dim, #888); font-size: calc(10px * var(--wm-panel-effective-scale, 1)); }
      </style>
    `)}}const fa=Object.freeze(Object.defineProperty({__proto__:null,ChokepointStripPanel:_s},Symbol.toStringTag,{value:"Module"})),ke=Z(()=>new ie(B(),{fetch:K})),Ue={flowing:"#1e8449",reduced:"#af601a",offline:"#c0392b",disputed:"#9b59b6"};function Rs(r){return r.charAt(0).toUpperCase()+r.slice(1)}function He(r){return r.commodityType==="gas"&&typeof r.capacityBcmYr=="number"&&r.capacityBcmYr>0?`${r.capacityBcmYr.toFixed(1)} bcm/yr`:r.commodityType==="oil"&&typeof r.capacityMbd=="number"&&r.capacityMbd>0?`${r.capacityMbd.toFixed(2)} mb/d`:"—"}function Ve(r){const i=r&&Ue[r]?r:"disputed";return`<span class="pp-badge" style="background:${Ue[i]??"#5d6d7e"}">${o(Rs(i))}</span>`}function Is(r){if(!r||typeof r!="object")return null;const i=r,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(p,h="")=>typeof p=="string"?p:h,s=(p,h=0)=>typeof p=="number"&&Number.isFinite(p)?p:h,a=p=>{if(p&&typeof p=="object"&&!Array.isArray(p)){const h=p;return{lat:s(h.lat),lon:s(h.lon)}}return{lat:0,lon:0}},l=i.evidence,n=l&&typeof l.operatorStatement=="object"&&l.operatorStatement?{text:t(l.operatorStatement.text),url:t(l.operatorStatement.url),date:t(l.operatorStatement.date)}:void 0,c=Array.isArray(l==null?void 0:l.sanctionRefs)?l.sanctionRefs.map(p=>{const h=p??{};return{authority:t(h.authority),listId:t(h.listId),date:t(h.date),url:t(h.url)}}):[],d=l?{physicalState:t(l.physicalState,"unknown"),physicalStateSource:t(l.physicalStateSource,"operator"),operatorStatement:n,commercialState:t(l.commercialState,"unknown"),sanctionRefs:c,lastEvidenceUpdate:t(l.lastEvidenceUpdate),classifierVersion:t(l.classifierVersion,"v1"),classifierConfidence:s(l.classifierConfidence,0)}:void 0,u=Qt(d);return{id:e,name:t(i.name),operator:t(i.operator),commodityType:t(i.commodityType),fromCountry:t(i.fromCountry),toCountry:t(i.toCountry),transitCountries:Array.isArray(i.transitCountries)?i.transitCountries.map(p=>t(p)):[],capacityBcmYr:s(i.capacityBcmYr),capacityMbd:s(i.capacityMbd),lengthKm:s(i.lengthKm),inService:s(i.inService),startPoint:a(i.startPoint),endPoint:a(i.endPoint),waypoints:Array.isArray(i.waypoints)?i.waypoints.map(a):[],evidence:d,publicBadge:u}}function We(r,i){const e=[];for(const t of[r,i])if(t!=null&&t.pipelines)for(const s of Object.values(t.pipelines)){const a=Is(s);a&&e.push(a)}return e.length===0?null:{pipelines:e,fetchedAt:Xt(r==null?void 0:r.updatedAt,i==null?void 0:i.updatedAt),classifierVersion:Kt(r==null?void 0:r.classifierVersion,i==null?void 0:i.classifierVersion),upstreamUnavailable:!1}}class js extends O{constructor(e){super({id:"pipeline-status",title:"Oil & Gas Pipeline Status",defaultRowSpan:2,infoTooltip:"Curated registry of critical oil and gas pipelines. Public badge is derived from evidence (operator statements, sanction refs, commercial state, physical signals) — see /docs/methodology/pipelines for the classifier spec."});y(this,"data",null);y(this,"selectedId",null);y(this,"detail",null);y(this,"detailLoading",!1);y(this,"detailError",null);y(this,"detailEvents");y(this,"usedHydrationPaint",!1);y(this,"openDetailHandler",e=>{var s,a;const t=(s=e.detail)==null?void 0:s.pipelineId;!t||!((a=this.element)!=null&&a.isConnected)||this.loadDetail(t)});y(this,"handleContentClick",e=>{const t=e.target;if(!t)return;if(t.closest(".pp-drawer-close")){this.closeDetail();return}const s=t.closest("tr.pp-row");if(!s||!this.content.contains(s))return;const a=s.dataset.pipelineId;a&&this.loadDetail(a)});this.detailSource=e,!this.detailSource&&typeof window<"u"&&window.addEventListener("energy:open-pipeline-detail",this.openDetailHandler),this.content.addEventListener("click",this.handleContentClick),fe(this.content,".pp-row")}destroy(){var e;!this.detailSource&&typeof window<"u"&&window.removeEventListener("energy:open-pipeline-detail",this.openDetailHandler),(e=super.destroy)==null||e.call(this)}async fetchData(){var e,t,s,a;try{let{gas:l,oil:n}=Le();if(!l||!n){const h=await _e({refresh:this.usedHydrationPaint});l=h.gas,n=h.oil}else if(this.usedHydrationPaint){const h=await _e({refresh:!0});l=h.gas,n=h.oil}const c=l&&n?We(l,n):null;if(c){const h=()=>{this.data=c,this.render()};if(!((e=this.element)!=null&&e.isConnected)){this.runWhenConnected(h),this.usedHydrationPaint=!0;return}h(),this.usedHydrationPaint=!0;return}const d=await ke().listPipelines({commodityType:""}),u=h=>Object.fromEntries(d.pipelines.filter(f=>f.commodityType===h).map(f=>[f.id,f]));(t=d.pipelines)!=null&&t.length&&!d.upstreamUnavailable&&(Jt({gas:{pipelines:u("gas"),classifierVersion:d.classifierVersion,updatedAt:d.fetchedAt},oil:{pipelines:u("oil"),classifierVersion:d.classifierVersion,updatedAt:d.fetchedAt}}),this.usedHydrationPaint=!0);const p=()=>{if(Yt(d)){this.showError("Pipeline registry unavailable",()=>void this.fetchData());return}this.data=d,this.render()};if(!((s=this.element)!=null&&s.isConnected)){this.runWhenConnected(p);return}p()}catch(l){if(this.isAbortError(l))return;const n=()=>{this.showError("Pipeline registry error",()=>void this.fetchData())};if(!((a=this.element)!=null&&a.isConnected)){this.runWhenConnected(n);return}n()}}async presentDetail(e,t){this.data=e,await this.loadDetail(t)}async presentCountryDetail(e,t){const{gas:s,oil:a}=Le(),l=We(s,a),n=(l==null?void 0:l.pipelines.filter(c=>c.fromCountry===e||c.toCountry===e||c.transitCountries.includes(e)))??[];if(!l||!n.some(c=>c.id===t))throw new Error("Pipeline is not in this country.");await this.presentDetail({...l,pipelines:n},t)}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.detailError=null,this.detailEvents=void 0,this.render();try{const a=(this.detailSource??ke()).listEnergyDisruptions({assetId:e,assetType:"pipeline",ongoingOnly:!1}).catch(()=>{}),l=await(this.detailSource??ke()).getPipelineDetail({pipelineId:e});if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=l,this.detailLoading=!1,this.render(),a.then(n=>{var c;!((c=this.element)!=null&&c.isConnected)||this.selectedId!==e||(this.detailEvents=n&&!n.upstreamUnavailable?n.events:null,this.render())})}catch(a){if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.detailError=a instanceof Ae?a.message:null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.detailEvents=void 0,this.render()}renderDisruptionTimeline(){if(this.detailEvents===void 0)return this.detailLoading?"":'<div class="pp-evidence"><div class="pp-sub">Loading disruption timeline…</div></div>';if(this.detailEvents===null)return'<div class="pp-evidence"><div class="pp-sub">Disruption timeline unavailable. Asset details remain visible.</div></div>';if(this.detailEvents.length===0)return`<div class="pp-evidence">
        <div class="pp-sub" style="margin-bottom:6px">Disruption timeline</div>
        <div class="pp-ev-item pp-sub">No disruption events on file for this asset.</div>
      </div>`;const e=this.detailEvents.map(t=>{const s=o(De(t.startAt,t.endAt)),a=Pe(t.capacityOfflineBcmYr,t.capacityOfflineMbd),l=a?` · ${o(a)} offline`:"",n=t.causeChain&&t.causeChain.length>0?` · ${o(t.causeChain.join(" → "))}`:"";return`<div class="pp-ev-item">
        <strong>${o(t.eventType||"event")}</strong> · ${s}${l}${n}
        <div class="pp-sub" style="margin-top:2px">${o(t.shortDescription||"")}</div>
      </div>`}).join("");return`<div class="pp-evidence">
      <div class="pp-sub" style="margin-bottom:6px">Disruption timeline (${this.detailEvents.length})</div>
      ${e}
    </div>`}render(){if(!this.data)return;const e=[...this.data.pipelines].sort((c,d)=>{const u=c.publicBadge==="flowing"?1:0,p=d.publicBadge==="flowing"?1:0;return u!==p?u-p:c.commodityType!==d.commodityType?c.commodityType.localeCompare(d.commodityType):c.name.localeCompare(d.name)}).map(c=>this.renderRow(c)).join(""),t=ae({sourceType:"classifier",method:"evidence → badge (deterministic)",sampleSize:this.data.pipelines.length,sampleLabel:"pipelines",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Global Energy Monitor (CC-BY 4.0)",creditUrl:"https://globalenergymonitor.org/"}),s=this.selectedId?this.renderDrawer():"",a=qt(this.data),l=a?`<div class="economic-warning">${o(a)}</div>`:"",n=P(`
      <div class="pp-wrap">
        ${l}
        <div class="table-scroll" role="group" tabindex="${this.selectedId?"-1":"0"}" aria-labelledby="${this.panelId}Title">
          <table class="wm-table pp-table" role="table">
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">Asset</th>
                <th scope="col" role="columnheader">From → To</th>
                <th scope="col" role="columnheader">Capacity</th>
                <th scope="col" role="columnheader">Status</th>
              </tr>
            </thead>
            <tbody role="rowgroup">${e}</tbody>
          </table>
        </div>
        ${t}
        ${s}
      </div>
      ${ne}
      <style>
        .pp-wrap { position: relative; font-size: calc(11px * var(--wm-panel-effective-scale, 1)); container: pp-wrap / inline-size; }
        .pp-table tr.pp-row { cursor: pointer; }
        .pp-table tr.pp-row:hover td { background: rgba(255,255,255,0.03); }
        .pp-name { font-weight: 600; color: var(--text, #eee); overflow-wrap: break-word; }
        .pp-table .pp-val { white-space: nowrap; }
        .pp-sub  { font-size: calc(9px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; overflow-wrap: anywhere; }
        /* Four columns cannot fit a narrow column without splitting values, so each
           row stacks: the name takes the full width, the values share one line below.
           The breakpoint is in em of the scaled wrap text (31em is 341px at 100%), so
           a larger font-size setting stacks the rows in a wider column too. */
        @container pp-wrap (max-width: 31em) {
          .pp-table, .pp-table tbody { display: block; }
          .pp-table thead { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
          .pp-table tr.pp-row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 10px; padding: 6px; border-bottom: 1px solid var(--border-subtle); }
          .pp-table tr.pp-row td { padding: 0; border: 0; }
          .pp-table tr.pp-row td:first-child { flex: 1 0 100%; }
          .pp-table tr.pp-row td:last-child { margin-left: auto; }
          .pp-table tr.pp-row:hover { background: rgba(255,255,255,0.03); }
          .pp-table tr.pp-row:hover td { background: none; }
        }
        .pp-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .pp-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .pp-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: calc(14px * var(--wm-panel-effective-scale, 1)); }
        .pp-drawer h3 { margin: 0 0 6px 0; font-size: calc(13px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); }
        .pp-drawer .pp-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); margin-bottom: 10px; }
        .pp-drawer .pp-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); padding-top: 2px; }
        .pp-evidence { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .pp-ev-item { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); margin-bottom: 6px; }
        .pp-ev-item a { color: #4ade80; text-decoration: none; }
        .pp-ev-item a:hover { text-decoration: underline; }
      </style>
    `,"legacy Panel.setContent() migration");this.detailSource?this.setSafeContentImmediate(n):this.setSafeContent(n)}renderRow(e){const t=e.commodityType==="gas"?"⛽":"🛢️",s=`${o(e.fromCountry)} → ${o(e.toCountry)}`;return`
      <tr class="pp-row" role="row" data-pipeline-id="${o(e.id)}" tabindex="${this.selectedId?"-1":"0"}">
        <td role="cell">
          <div class="pp-name">${t} ${o(e.name)}</div>
          <div class="pp-sub">${o(e.operator||"")}</div>
        </td>
        <td role="cell" class="pp-val">${s}</td>
        <td role="cell" class="pp-val">${o(He(e))}</td>
        <td role="cell">${Ve(e.publicBadge)}</td>
      </tr>`}renderDrawer(){var n,c;if(this.detailLoading)return'<div class="pp-drawer"><button class="pp-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(n=this.detail)==null?void 0:n.pipeline;if(!e)return`<div class="pp-drawer"><button class="pp-drawer-close" aria-label="Close">✕</button>${o(this.detailError??"Pipeline detail unavailable.")}</div>`;const t=e.evidence,s=((t==null?void 0:t.sanctionRefs)??[]).map(d=>{const u=se(d.url||""),p=o(d.date||"source"),h=u?`<a href="${u}" target="_blank" rel="noopener">${p}</a>`:p;return`
      <div class="pp-ev-item">
        <strong>${o(d.authority)}</strong> ${o(d.listId||"")} ·
        ${h}
      </div>`}).join(""),a=(c=t==null?void 0:t.operatorStatement)!=null&&c.text?(()=>{var p,h;const d=se(((p=t.operatorStatement)==null?void 0:p.url)||""),u=d?`· <a href="${d}" target="_blank" rel="noopener">${o(((h=t.operatorStatement)==null?void 0:h.date)||"source")}</a>`:"";return`<div class="pp-ev-item"><strong>Operator:</strong> ${o(t.operatorStatement.text)}
           ${u}
         </div>`})():"",l=e.transitCountries.length>0?` via ${e.transitCountries.map(d=>o(te(d))).join(", ")}`:"";return`
      <div class="pp-drawer">
        <button class="pp-drawer-close" aria-label="Close">✕</button>
        <h3>${o(e.name)} ${Ve(e.publicBadge)}</h3>
        <div class="pp-kv">
          <div class="pp-kv-key">Operator</div>   <div>${o(e.operator)}</div>
          <div class="pp-kv-key">Commodity</div>  <div>${o(e.commodityType)}</div>
          <div class="pp-kv-key">Route</div>      <div>${o(te(e.fromCountry))} → ${o(te(e.toCountry))}${l}</div>
          <div class="pp-kv-key">Capacity</div>   <div>${o(He(e))}</div>
          <div class="pp-kv-key">Length</div>     <div>${e.lengthKm>0?`${e.lengthKm.toLocaleString()} km`:"—"}</div>
          <div class="pp-kv-key">In service</div> <div>${e.inService>0?o(String(e.inService)):"—"}</div>
        </div>
        <div class="pp-evidence">
          <div class="pp-sub" style="margin-bottom:6px">Evidence</div>
          <div class="pp-ev-item">
            <strong>Physical state:</strong> ${o((t==null?void 0:t.physicalState)||"unknown")}
            (source: ${o((t==null?void 0:t.physicalStateSource)||"unknown")})
          </div>
          <div class="pp-ev-item"><strong>Commercial:</strong> ${o((t==null?void 0:t.commercialState)||"unknown")}</div>
          ${a}
          ${s}
          ${t!=null&&t.classifierVersion?`<div class="pp-ev-item pp-sub">Classifier ${o(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        ${this.renderDisruptionTimeline()}
      </div>`}}const ma=Object.freeze(Object.defineProperty({__proto__:null,PipelineStatusPanel:js},Symbol.toStringTag,{value:"Module"})),Ce=Z(()=>new ie(B(),{fetch:K})),Ye={operational:"#1e8449",reduced:"#af601a",offline:"#c0392b",disputed:"#9b59b6"},Ns={ugs:"🟢",spr:"🛢️",lng_export:"🚢",lng_import:"⚓",crude_tank_farm:"🟡"},qe={ugs:"UGS",spr:"SPR",lng_export:"LNG export",lng_import:"LNG import",crude_tank_farm:"Crude hub"};function Bs(r){return r.charAt(0).toUpperCase()+r.slice(1)}function Ze(r){const i=r&&Ye[r]?r:"disputed";return`<span class="sf-badge" style="background:${Ye[i]??"#5d6d7e"}">${o(Bs(i))}</span>`}function Ke(r){return r.facilityType==="ugs"&&typeof r.capacityTwh=="number"&&r.capacityTwh>0?`${r.capacityTwh.toFixed(1)} TWh`:(r.facilityType==="lng_export"||r.facilityType==="lng_import")&&typeof r.capacityMtpa=="number"&&r.capacityMtpa>0?`${r.capacityMtpa.toFixed(1)} Mtpa`:(r.facilityType==="spr"||r.facilityType==="crude_tank_farm")&&typeof r.capacityMb=="number"&&r.capacityMb>0?`${r.capacityMb.toLocaleString()} Mb`:"—"}function Gs(r){if(!r||typeof r!="object")return null;const i=r,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(h,f="")=>typeof h=="string"?h:f,s=(h,f=0)=>typeof h=="number"&&Number.isFinite(h)?h:f,a=(h,f=!1)=>typeof h=="boolean"?h:f,l=h=>{if(h&&typeof h=="object"&&!Array.isArray(h)){const f=h;return{lat:s(f.lat),lon:s(f.lon)}}return{lat:0,lon:0}},n=i.evidence,c=n&&typeof n.operatorStatement=="object"&&n.operatorStatement?{text:t(n.operatorStatement.text),url:t(n.operatorStatement.url),date:t(n.operatorStatement.date)}:void 0,d=Array.isArray(n==null?void 0:n.sanctionRefs)?n.sanctionRefs.map(h=>{const f=h??{};return{authority:t(f.authority),listId:t(f.listId),date:t(f.date),url:t(f.url)}}):[],u=n?{physicalState:t(n.physicalState,"unknown"),physicalStateSource:t(n.physicalStateSource,"operator"),operatorStatement:c,commercialState:t(n.commercialState,"unknown"),sanctionRefs:d,fillDisclosed:a(n.fillDisclosed),fillSource:t(n.fillSource),lastEvidenceUpdate:t(n.lastEvidenceUpdate),classifierVersion:t(n.classifierVersion,"v1"),classifierConfidence:s(n.classifierConfidence,0)}:void 0,p=ts(u);return{id:e,name:t(i.name),operator:t(i.operator),facilityType:t(i.facilityType),country:t(i.country),location:l(i.location),capacityTwh:s(i.capacityTwh),capacityMb:s(i.capacityMb),capacityMtpa:s(i.capacityMtpa),workingCapacityUnit:t(i.workingCapacityUnit),inService:s(i.inService),evidence:u,publicBadge:p}}function Xe(r){if(!(r!=null&&r.facilities))return null;const i=[];for(const e of Object.values(r.facilities)){const t=Gs(e);t&&i.push(t)}return i.length===0?null:{facilities:i,fetchedAt:r.updatedAt??"",classifierVersion:r.classifierVersion??"v1",upstreamUnavailable:!1}}class Us extends O{constructor(e){super({id:"storage-facility-map",title:"Strategic Storage Atlas",defaultRowSpan:2,infoTooltip:"Curated registry of strategic storage assets — underground gas storage, strategic petroleum reserves, LNG terminals, crude tank farms. Public badge is derived from evidence (operator statements, sanction refs, commercial state, physical signals) — see /docs/methodology/storage for the classifier spec."});y(this,"data",null);y(this,"selectedId",null);y(this,"detail",null);y(this,"detailLoading",!1);y(this,"detailError",null);y(this,"detailEvents");y(this,"usedHydrationPaint",!1);y(this,"claimStorageClick",e=>{var s;const t=(s=e.detail)==null?void 0:s.facilityId;!t||!this.isVisibleToUser()||(e.preventDefault(),this.loadDetail(t))});y(this,"handleContentClick",e=>{const t=e.target;if(!t)return;if(t.closest(".sf-drawer-close")){this.closeDetail();return}const s=t.closest("tr.sf-row");if(!s||!this.content.contains(s))return;const a=s.dataset.facilityId;a&&this.loadDetail(a)});this.detailSource=e,!this.detailSource&&typeof window<"u"&&window.addEventListener("energy:open-storage-facility-detail",this.claimStorageClick),this.content.addEventListener("click",this.handleContentClick),fe(this.content,".sf-row")}destroy(){var e;!this.detailSource&&typeof window<"u"&&window.removeEventListener("energy:open-storage-facility-detail",this.claimStorageClick),(e=super.destroy)==null||e.call(this)}async fetchData(){var e,t,s,a;try{let{registry:l}=Re();l?this.usedHydrationPaint&&(l=(await Ie({refresh:!0})).registry):l=(await Ie({refresh:this.usedHydrationPaint})).registry;const n=Xe(l);if(n){const u=()=>{this.data=n,this.render()};if(!((e=this.element)!=null&&e.isConnected)){this.runWhenConnected(u),this.usedHydrationPaint=!0;return}u(),this.usedHydrationPaint=!0;return}const c=await Ce().listStorageFacilities({facilityType:""});if((t=c.facilities)!=null&&t.length&&!c.upstreamUnavailable){const u=Object.fromEntries(c.facilities.map(p=>[p.id,p]));es({facilities:u,classifierVersion:c.classifierVersion,updatedAt:c.fetchedAt}),this.usedHydrationPaint=!0}const d=()=>{var u;if(c.upstreamUnavailable||!((u=c.facilities)!=null&&u.length)){this.showError("Storage registry unavailable",()=>void this.fetchData());return}this.data=c,this.render()};if(!((s=this.element)!=null&&s.isConnected)){this.runWhenConnected(d);return}d()}catch(l){if(this.isAbortError(l))return;const n=()=>{this.showError("Storage registry error",()=>void this.fetchData())};if(!((a=this.element)!=null&&a.isConnected)){this.runWhenConnected(n);return}n()}}async presentDetail(e,t){this.data=e,await this.loadDetail(t)}async presentCountryDetail(e,t){const{registry:s}=Re(),a=Xe(s),l=(a==null?void 0:a.facilities.filter(n=>n.country===e))??[];if(!a||!l.some(n=>n.id===t))throw new Error("Storage facility is not in this country.");await this.presentDetail({...a,facilities:l},t)}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.detailError=null,this.detailEvents=void 0,this.render();try{const a=(this.detailSource??Ce()).listEnergyDisruptions({assetId:e,assetType:"storage",ongoingOnly:!1}).catch(()=>{}),l=await(this.detailSource??Ce()).getStorageFacilityDetail({facilityId:e});if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=l,this.detailLoading=!1,this.render(),a.then(n=>{var c;!((c=this.element)!=null&&c.isConnected)||this.selectedId!==e||(this.detailEvents=n&&!n.upstreamUnavailable?n.events:null,this.render())})}catch(a){if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.detailError=a instanceof Ae?a.message:null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.detailEvents=void 0,this.render()}renderDisruptionTimeline(){if(this.detailEvents===void 0)return this.detailLoading?"":'<div class="sf-evidence"><div class="sf-sub">Loading disruption timeline…</div></div>';if(this.detailEvents===null)return'<div class="sf-evidence"><div class="sf-sub">Disruption timeline unavailable. Asset details remain visible.</div></div>';if(this.detailEvents.length===0)return`<div class="sf-evidence">
        <div class="sf-sub" style="margin-bottom:6px">Disruption timeline</div>
        <div class="sf-ev-item sf-sub">No disruption events on file for this asset.</div>
      </div>`;const e=this.detailEvents.map(t=>{const s=o(De(t.startAt,t.endAt)),a=Pe(t.capacityOfflineBcmYr,t.capacityOfflineMbd),l=a?` · ${o(a)} offline`:"",n=t.causeChain&&t.causeChain.length>0?` · ${o(t.causeChain.join(" → "))}`:"";return`<div class="sf-ev-item">
        <strong>${o(t.eventType||"event")}</strong> · ${s}${l}${n}
        <div class="sf-sub" style="margin-top:2px">${o(t.shortDescription||"")}</div>
      </div>`}).join("");return`<div class="sf-evidence">
      <div class="sf-sub" style="margin-bottom:6px">Disruption timeline (${this.detailEvents.length})</div>
      ${e}
    </div>`}render(){if(!this.data)return;const e=[...this.data.facilities].sort((l,n)=>{const c=l.publicBadge==="operational"?1:0,d=n.publicBadge==="operational"?1:0;return c!==d?c-d:l.facilityType!==n.facilityType?l.facilityType.localeCompare(n.facilityType):l.name.localeCompare(n.name)}).map(l=>this.renderRow(l)).join(""),t=ae({sourceType:"classifier",method:"evidence → badge (deterministic)",sampleSize:this.data.facilities.length,sampleLabel:"facilities",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Global Energy Monitor (CC-BY 4.0) / GIE AGSI+ / EIA",creditUrl:"https://globalenergymonitor.org/"}),s=this.selectedId?this.renderDrawer():"",a=P(`
      <div class="sf-wrap">
        <div class="table-scroll" role="group" tabindex="${this.selectedId?"-1":"0"}" aria-labelledby="${this.panelId}Title">
          <table class="wm-table sf-table" role="table">
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">Facility</th>
                <th scope="col" role="columnheader">Country · Type</th>
                <th scope="col" role="columnheader">Capacity</th>
                <th scope="col" role="columnheader">Status</th>
              </tr>
            </thead>
            <tbody role="rowgroup">${e}</tbody>
          </table>
        </div>
        ${t}
        ${s}
      </div>
      ${ne}
      <style>
        .sf-wrap { position: relative; font-size: calc(11px * var(--wm-panel-effective-scale, 1)); container: sf-wrap / inline-size; }
        .sf-table tr.sf-row { cursor: pointer; }
        .sf-table tr.sf-row:hover td { background: rgba(255,255,255,0.03); }
        .sf-name { font-weight: 600; color: var(--text, #eee); overflow-wrap: break-word; }
        .sf-table .sf-val { white-space: nowrap; }
        .sf-sub  { font-size: calc(9px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; overflow-wrap: anywhere; }
        /* Four columns cannot fit a narrow column without splitting values, so each
           row stacks: the name takes the full width, the values share one line below.
           The breakpoint is in em of the scaled wrap text (31em is 341px at 100%), so
           a larger font-size setting stacks the rows in a wider column too. */
        @container sf-wrap (max-width: 31em) {
          .sf-table, .sf-table tbody { display: block; }
          .sf-table thead { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
          .sf-table tr.sf-row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 10px; padding: 6px; border-bottom: 1px solid var(--border-subtle); }
          .sf-table tr.sf-row td { padding: 0; border: 0; }
          .sf-table tr.sf-row td:first-child { flex: 1 0 100%; }
          .sf-table tr.sf-row td:last-child { margin-left: auto; }
          .sf-table tr.sf-row:hover { background: rgba(255,255,255,0.03); }
          .sf-table tr.sf-row:hover td { background: none; }
        }
        .sf-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .sf-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .sf-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: calc(14px * var(--wm-panel-effective-scale, 1)); }
        .sf-drawer h3 { margin: 0 0 6px 0; font-size: calc(13px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); }
        .sf-drawer .sf-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); margin-bottom: 10px; }
        .sf-drawer .sf-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); padding-top: 2px; }
        .sf-evidence { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .sf-ev-item { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); margin-bottom: 6px; }
        .sf-ev-item a { color: #4ade80; text-decoration: none; }
        .sf-ev-item a:hover { text-decoration: underline; }
      </style>
    `,"legacy Panel.setContent() migration");this.detailSource?this.setSafeContentImmediate(a):this.setSafeContent(a)}renderRow(e){const t=Ns[e.facilityType]??"🔹",s=qe[e.facilityType]??e.facilityType;return`
      <tr class="sf-row" role="row" data-facility-id="${o(e.id)}" tabindex="${this.selectedId?"-1":"0"}">
        <td role="cell">
          <div class="sf-name">${t} ${o(e.name)}</div>
          <div class="sf-sub">${o(e.operator||"")}</div>
        </td>
        <td role="cell"><span class="sf-val">${o(e.country)}</span> · <span class="sf-val">${o(s)}</span></td>
        <td role="cell" class="sf-val">${o(Ke(e))}</td>
        <td role="cell">${Ze(e.publicBadge)}</td>
      </tr>`}renderDrawer(){var c,d,u,p;if(this.detailLoading)return'<div class="sf-drawer"><button class="sf-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(c=this.detail)==null?void 0:c.facility;if(!e)return`<div class="sf-drawer"><button class="sf-drawer-close" aria-label="Close">✕</button>${o(this.detailError??"Facility detail unavailable.")}</div>`;const t=e.evidence,s=((t==null?void 0:t.sanctionRefs)??[]).map(h=>{const f=se(h.url||""),b=o(h.date||"source"),m=f?`<a href="${f}" target="_blank" rel="noopener">${b}</a>`:b;return`
      <div class="sf-ev-item">
        <strong>${o(h.authority)}</strong> ${o(h.listId||"")} ·
        ${m}
      </div>`}).join(""),a=(d=t==null?void 0:t.operatorStatement)!=null&&d.text?(()=>{var b,m;const h=se(((b=t.operatorStatement)==null?void 0:b.url)||""),f=h?`· <a href="${h}" target="_blank" rel="noopener">${o(((m=t.operatorStatement)==null?void 0:m.date)||"source")}</a>`:"";return`<div class="sf-ev-item"><strong>Operator:</strong> ${o(t.operatorStatement.text)}
           ${f}
         </div>`})():"",l=t!=null&&t.fillDisclosed?`<div class="sf-ev-item"><strong>Fill levels:</strong> disclosed via ${o(t.fillSource||"—")}</div>`:'<div class="sf-ev-item"><strong>Fill levels:</strong> not publicly disclosed</div>',n=qe[e.facilityType]??e.facilityType;return`
      <div class="sf-drawer">
        <button class="sf-drawer-close" aria-label="Close">✕</button>
        <h3>${o(e.name)} ${Ze(e.publicBadge)}</h3>
        <div class="sf-kv">
          <div class="sf-kv-key">Operator</div>   <div>${o(e.operator)}</div>
          <div class="sf-kv-key">Type</div>       <div>${o(n)}</div>
          <div class="sf-kv-key">Country</div>    <div>${o(te(e.country))}</div>
          <div class="sf-kv-key">Capacity</div>   <div>${o(Ke(e))}</div>
          <div class="sf-kv-key">Location</div>   <div>${(((u=e.location)==null?void 0:u.lat)??0).toFixed(3)}°, ${(((p=e.location)==null?void 0:p.lon)??0).toFixed(3)}°</div>
          <div class="sf-kv-key">In service</div> <div>${e.inService>0?o(String(e.inService)):"—"}</div>
        </div>
        <div class="sf-evidence">
          <div class="sf-sub" style="margin-bottom:6px">Evidence</div>
          <div class="sf-ev-item">
            <strong>Physical state:</strong> ${o((t==null?void 0:t.physicalState)||"unknown")}
            (source: ${o((t==null?void 0:t.physicalStateSource)||"unknown")})
          </div>
          <div class="sf-ev-item"><strong>Commercial:</strong> ${o((t==null?void 0:t.commercialState)||"unknown")}</div>
          ${l}
          ${a}
          ${s}
          ${t!=null&&t.classifierVersion?`<div class="sf-ev-item sf-sub">Classifier ${o(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        ${this.renderDisruptionTimeline()}
      </div>`}}const ga=Object.freeze(Object.defineProperty({__proto__:null,StorageFacilityMapPanel:Us},Symbol.toStringTag,{value:"Module"})),Se=Z(()=>new ie(B(),{fetch:K})),Hs={confirmed:"#c0392b",watch:"#af601a"},Vs={petrol:"⛽",diesel:"🛢️",jet:"✈️",heating_oil:"🔥"},Ws={strong:"●●●",moderate:"●●○",thin:"●○○"};function Qe(r){const i=Hs[r]??"#5d6d7e",e=r.charAt(0).toUpperCase()+r.slice(1);return`<span class="fs-badge" style="background:${i}">${o(e)}</span>`}function Ys(r){if(!r||typeof r!="object")return null;const i=r,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(c,d="")=>typeof c=="string"?c:d,s=(c,d=0)=>typeof c=="number"&&Number.isFinite(c)?c:d,a=i.evidence??null,l=Array.isArray(a==null?void 0:a.evidenceSources)?a.evidenceSources.map(c=>{const d=c??{};return{authority:t(d.authority),title:t(d.title),url:t(d.url),date:t(d.date),sourceType:t(d.sourceType)}}):[],n=a?{evidenceSources:l,firstRegulatorConfirmation:t(a.firstRegulatorConfirmation),classifierVersion:t(a.classifierVersion,"v1"),classifierConfidence:s(a.classifierConfidence,0),lastEvidenceUpdate:t(a.lastEvidenceUpdate)}:void 0;return{id:e,country:t(i.country),product:t(i.product),severity:t(i.severity,"watch"),firstSeen:t(i.firstSeen),lastConfirmed:t(i.lastConfirmed),resolvedAt:typeof i.resolvedAt=="string"?i.resolvedAt:"",impactTypes:Array.isArray(i.impactTypes)?i.impactTypes.map(c=>t(c)).filter(c=>c.length>0):[],causeChain:Array.isArray(i.causeChain)?i.causeChain.map(c=>t(c)).filter(c=>c.length>0):[],shortDescription:t(i.shortDescription),evidence:n}}function qs(r){if(!(r!=null&&r.shortages))return null;const i=[];for(const e of Object.values(r.shortages)){const t=Ys(e);t&&i.push(t)}return i.length===0?null:{shortages:i,fetchedAt:r.updatedAt??"",classifierVersion:r.classifierVersion??"v1",upstreamUnavailable:!1}}class Zs extends O{constructor(e){super({id:"fuel-shortages",title:"Global Fuel Shortage Registry",defaultRowSpan:2,infoTooltip:"Global fuel-shortage alert registry (petrol, diesel, jet, heating oil). Severity (confirmed / watch) is a classifier output, not a client derivation. Every row carries the full evidence source list — see /docs/methodology/shortages for the threshold spec + classifier version."});y(this,"data",null);y(this,"selectedId",null);y(this,"detail",null);y(this,"detailLoading",!1);y(this,"detailError",null);y(this,"scopeFilter");y(this,"refreshing",!1);y(this,"openDetailHandler",e=>{var s,a;const t=(s=e.detail)==null?void 0:s.shortageId;!t||!((a=this.element)!=null&&a.isConnected)||this.loadDetail(t)});y(this,"handleContentClick",e=>{const t=e.target;if(!t)return;if(t.closest(".fs-drawer-close")){this.closeDetail();return}const s=t.closest("tr.fs-row");if(!s||!this.content.contains(s))return;const a=s.dataset.shortageId;a&&this.loadDetail(a)});this.detailSource=e,this.scopeFilter=new dt({content:this.content,onChange:()=>this.render()}),typeof window<"u"&&window.addEventListener("energy:open-fuel-shortage-detail",this.openDetailHandler),this.content.addEventListener("click",this.handleContentClick),fe(this.content,".fs-row")}destroy(){var e;typeof window<"u"&&window.removeEventListener("energy:open-fuel-shortage-detail",this.openDetailHandler),(e=super.destroy)==null||e.call(this)}applyScope(e){this.scopeFilter.setScope(e)&&this.data&&!this.showingLoadFailure&&!this.refreshing&&this.render()}showLoading(e){var t;this.refreshing=!0,(t=this.scopeFilter)==null||t.hideStrip(),super.showLoading(e)}showError(e,t,s){this.refreshing=!1,this.scopeFilter.hideStrip(),super.showError(e,t,s)}async fetchData(){var e,t,s;try{const{registry:a}=is(),l=qs(a);if(l){this.data=l,this.render(),Se().listFuelShortages({country:"",product:"",severity:""}).then(d=>{var p,h;if(!((p=this.element)!=null&&p.isConnected)||!((h=d==null?void 0:d.shortages)!=null&&h.length))return;this.data=d,this.render();const u=Object.fromEntries(d.shortages.map(f=>[f.id,f]));je({shortages:u,classifierVersion:d.classifierVersion,updatedAt:d.fetchedAt})}).catch(()=>{});return}const n=await Se().listFuelShortages({country:"",product:"",severity:""});if(!((e=this.element)!=null&&e.isConnected))return;if(n.upstreamUnavailable||!((t=n.shortages)!=null&&t.length)){this.showError("Fuel shortage registry unavailable",()=>void this.fetchData());return}this.data=n,this.render();const c=Object.fromEntries(n.shortages.map(d=>[d.id,d]));je({shortages:c,classifierVersion:n.classifierVersion,updatedAt:n.fetchedAt})}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError("Fuel shortage registry error",()=>void this.fetchData())}}async presentDetail(e,t){this.data=e,await this.loadDetail(t)}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.detailError=null,this.render();try{const a=await(this.detailSource??Se()).getFuelShortageDetail({shortageId:e});if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=a,this.detailLoading=!1,this.render()}catch(a){if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.detailError=a instanceof Ae?a.message:null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.render()}render(){if(!this.data)return;this.refreshing=!1;const e=this.scopeFilter.view(this.data.shortages,p=>Ot(p.country));this.data.shortages.length===0?this.scopeFilter.hideStrip():this.scopeFilter.renderStrip(e);const t=e.rows.map(p=>p.item),s=[...e.rows].sort((p,h)=>{if(p.rank!==h.rank)return p.rank-h.rank;const f=p.item,b=h.item,m=f.severity==="confirmed"?0:1,v=b.severity==="confirmed"?0:1;if(m!==v)return m-v;const w=pe(f.evidence),E=pe(b.evidence),T={strong:0,moderate:1,thin:2};return T[w]!==T[E]?T[w]-T[E]:b.lastConfirmed.localeCompare(f.lastConfirmed)}).map(p=>this.renderRow(p.item,p)).join(""),a=t.filter(p=>p.severity==="confirmed").length,l=t.filter(p=>p.severity==="watch").length,n=`${a} confirmed · ${l} watch`,c=ae({sourceType:"classifier",method:"evidence-threshold + LLM double-check",sampleSize:this.data.shortages.length,sampleLabel:"active shortages",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Regulator advisories + IEA + major wire",creditUrl:"/docs/methodology/shortages"}),d=this.selectedId?this.renderDrawer():"",u=P(`
      <div class="fs-wrap">
        <div class="fs-summary">${o(n)}</div>
        ${e.emptyByFocus?pt(g("focus.filter.emptyFuelShortages")):`<div class="table-scroll" role="group" tabindex="${this.selectedId?"-1":"0"}" aria-labelledby="${this.panelId}Title">
          <table class="wm-table fs-table" role="table">
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">Country · Product</th>
                <th scope="col" role="columnheader">Since</th>
                <th scope="col" role="columnheader">Evidence</th>
                <th scope="col" role="columnheader">Severity</th>
              </tr>
            </thead>
            <tbody role="rowgroup">${s}</tbody>
          </table>
        </div>`}
        ${c}
        ${d}
      </div>
      ${ne}
      <style>
        .fs-wrap { position: relative; font-size: calc(11px * var(--wm-panel-effective-scale, 1)); container: fs-wrap / inline-size; }
        .fs-summary { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; margin: 4px 0 6px 0; }
        .fs-table tr.fs-row { cursor: pointer; }
        .fs-table tr.fs-row:hover td { background: rgba(255,255,255,0.03); }
        .fs-name { font-weight: 600; color: var(--text, #eee); overflow-wrap: break-word; }
        .fs-table .fs-val { white-space: nowrap; }
        .fs-sub  { font-size: calc(9px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; overflow-wrap: anywhere; }
        /* Four columns cannot fit a narrow column without splitting values, so each
           row stacks: the name takes the full width, the values share one line below.
           The breakpoint is in em of the scaled wrap text (31em is 341px at 100%), so
           a larger font-size setting stacks the rows in a wider column too. */
        @container fs-wrap (max-width: 31em) {
          .fs-table, .fs-table tbody { display: block; }
          .fs-table thead { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
          .fs-table tr.fs-row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 10px; padding: 6px; border-bottom: 1px solid var(--border-subtle); }
          .fs-table tr.fs-row td { padding: 0; border: 0; }
          .fs-table tr.fs-row td:first-child { flex: 1 0 100%; }
          .fs-table tr.fs-row td:last-child { margin-left: auto; }
          .fs-table tr.fs-row:hover { background: rgba(255,255,255,0.03); }
          .fs-table tr.fs-row:hover td { background: none; }
          .fs-table .fs-val[data-label]::before { content: attr(data-label) ' '; color: var(--text-dim, #888); }
        }
        .fs-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .fs-quality { font-family: monospace; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); }
        .fs-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .fs-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: calc(14px * var(--wm-panel-effective-scale, 1)); }
        .fs-drawer h3 { margin: 0 0 6px 0; font-size: calc(13px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); }
        .fs-drawer .fs-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); margin-bottom: 10px; }
        .fs-drawer .fs-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); padding-top: 2px; }
        .fs-source-list { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .fs-src-item { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); margin-bottom: 6px; }
        .fs-src-item a { color: #4ade80; text-decoration: none; }
        .fs-src-item a:hover { text-decoration: underline; }
        .fs-src-type { display: inline-block; padding: 1px 6px; border-radius: 8px; font-size: calc(8px * var(--wm-panel-effective-scale, 1)); font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; background: rgba(255,255,255,0.08); color: var(--text-dim, #aaa); margin-right: 4px; }
        .fs-src-type-regulator { background: #2980b9; color: #fff; }
        .fs-src-type-operator { background: #27ae60; color: #fff; }
        .fs-src-type-press { background: #555; color: #ccc; }
      </style>
    `,"legacy Panel.setContent() migration");this.detailSource?this.setSafeContentImmediate(u):this.setSafeContent(u)}renderRow(e,t){const s=Vs[e.product]??"•",a=pe(e.evidence);return`
      <tr class="fs-row" role="row" data-shortage-id="${o(e.id)}" tabindex="${this.selectedId?"-1":"0"}">
        <td role="cell">
          <div class="fs-name">${s} ${o(e.country)} · ${o(e.product)} ${ut(t)}</div>
          <div class="fs-sub">${o(e.causeChain.join(" · ")||"—")}</div>
        </td>
        <td role="cell" class="fs-val" data-label="Since">${o(e.firstSeen.slice(0,10))}</td>
        <td role="cell"><span class="fs-quality" title="Evidence quality: ${o(a)}">${Ws[a]}</span></td>
        <td role="cell">${Qe(e.severity)}</td>
      </tr>`}renderDrawer(){var n;if(this.detailLoading)return'<div class="fs-drawer"><button class="fs-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(n=this.detail)==null?void 0:n.shortage;if(!e)return`<div class="fs-drawer"><button class="fs-drawer-close" aria-label="Close">✕</button>${o(this.detailError??"Shortage detail unavailable.")}</div>`;const t=e.evidence,s=ss(t==null?void 0:t.evidenceSources),a=pe(t),l=((t==null?void 0:t.evidenceSources)??[]).map(c=>{const d=se(c.url||""),u=o(c.title||c.authority||"source"),p=d?`<a href="${d}" target="_blank" rel="noopener">${u}</a>`:u;return`
      <div class="fs-src-item">
        <span class="fs-src-type ${`fs-src-type-${o(c.sourceType||"other")}`}">${o(c.sourceType||"other")}</span>
        <strong>${o(c.authority||"")}</strong> · ${p} · ${o(c.date.slice(0,10))}
      </div>`}).join("");return`
      <div class="fs-drawer">
        <button class="fs-drawer-close" aria-label="Close">✕</button>
        <h3>${o(te(e.country))} · ${o(e.product)} ${Qe(e.severity)}</h3>
        <div class="fs-kv">
          <div class="fs-kv-key">Description</div>  <div>${o(e.shortDescription)}</div>
          <div class="fs-kv-key">First seen</div>   <div>${o(e.firstSeen.slice(0,10))}</div>
          <div class="fs-kv-key">Last confirmed</div><div>${o(e.lastConfirmed.slice(0,10))}</div>
          <div class="fs-kv-key">Resolved</div>     <div>${e.resolvedAt?o(e.resolvedAt.slice(0,10)):"Active"}</div>
          <div class="fs-kv-key">Impact</div>       <div>${o(e.impactTypes.join(", ")||"—")}</div>
          <div class="fs-kv-key">Cause chain</div>  <div>${o(e.causeChain.join(" → ")||"—")}</div>
          <div class="fs-kv-key">Evidence</div>     <div>${s.authoritative} regulator/operator · ${s.press} press · quality: ${o(a)}</div>
          ${t!=null&&t.classifierVersion?`<div class="fs-kv-key">Classifier</div><div>${o(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        <div class="fs-source-list">
          <div class="fs-sub" style="margin-bottom:6px">Evidence sources (${((t==null?void 0:t.evidenceSources)??[]).length})</div>
          ${l||'<div class="fs-src-item">No sources on file.</div>'}
        </div>
      </div>`}}const va=Object.freeze(Object.defineProperty({__proto__:null,FuelShortagePanel:Zs},Symbol.toStringTag,{value:"Module"})),Ks=Z(()=>new ie(B(),{fetch:K})),Xs={sabotage:"💥",sanction:"🚫",maintenance:"🔧",mechanical:"⚙️",weather:"🌀",commercial:"💼",war:"⚔️",other:"•"},Je={ongoing:"#c0392b",resolved:"#5d6d7e",unknown:"#6b7280"},Qs=[{key:"",label:"All events"},{key:"sabotage",label:"Sabotage"},{key:"sanction",label:"Sanction"},{key:"mechanical",label:"Mechanical"},{key:"maintenance",label:"Maintenance"},{key:"war",label:"War"},{key:"weather",label:"Weather"},{key:"commercial",label:"Commercial"},{key:"other",label:"Other"}];function et(r){return r.split(/ ([→·]) /).map((i,e)=>e%2?` ${o(i)} `:`<span class="ed-val">${o(i)}</span>`).join("")}function Js(r){const i=Je[r]??Je.unknown,e=r.charAt(0).toUpperCase()+r.slice(1);return`<span class="ed-badge" style="background:${i}">${o(e)}</span>`}class ei extends O{constructor(){super({id:"energy-disruptions",title:"Energy Disruptions Log",defaultRowSpan:2,infoTooltip:"Curated log of disruption events affecting oil & gas pipelines and storage facilities — sabotage, sanctions, maintenance, mechanical, weather, war, commercial. Each event ties back to a seeded asset; click a row to jump to the pipeline / storage panel with that event highlighted. See /docs/methodology/disruptions for the schema."});y(this,"data",null);y(this,"activeTypeFilter","");y(this,"ongoingOnly",!1);y(this,"scopeFilter");y(this,"handleContentClick",e=>{const t=e.target;if(!t)return;const s=t.closest("[data-filter-type]");if(s){this.setTypeFilter(s.dataset.filterType??"");return}if(t.closest("[data-toggle-ongoing]")){this.toggleOngoingOnly();return}const l=t.closest("tr.ed-row");if(l){const n=l.dataset.eventId,c=l.dataset.assetId,d=l.dataset.assetType;n&&c&&d&&this.dispatchOpenAsset(n,c,d)}});this.scopeFilter=new dt({content:this.content,onChange:()=>this.render()}),this.content.addEventListener("click",this.handleContentClick),fe(this.content,".ed-row")}async fetchData(){var e,t;try{const s=await Ks().listEnergyDisruptions({assetId:"",assetType:"",ongoingOnly:!1});if(!((e=this.element)!=null&&e.isConnected))return;if(s.upstreamUnavailable){this.showError("Energy disruptions log unavailable",()=>void this.fetchData());return}this.data=s,this.render()}catch(s){if(this.isAbortError(s)||!((t=this.element)!=null&&t.isConnected))return;this.showError("Energy disruptions log error",()=>void this.fetchData())}}applyScope(e){this.scopeFilter.setScope(e)&&!this.showingLoadFailure&&this.render()}showLoading(e){var t;(t=this.scopeFilter)==null||t.hideStrip(),super.showLoading(e)}showError(e,t,s){this.scopeFilter.hideStrip(),super.showError(e,t,s)}setTypeFilter(e){this.activeTypeFilter=e,this.render()}toggleOngoingOnly(){this.ongoingOnly=!this.ongoingOnly,this.render()}filterEvents(e){let t=e;return this.activeTypeFilter&&(t=t.filter(s=>s.eventType===this.activeTypeFilter)),this.ongoingOnly&&(t=t.filter(s=>!s.endAt)),t}render(){if(!this.data)return;const e=[...this.data.events].sort((m,v)=>v.startAt.localeCompare(m.startAt)),t=this.scopeFilter.view(e,m=>m.countries);e.length===0?this.scopeFilter.hideStrip():this.scopeFilter.renderStrip(t);const s=t.rows.map(m=>m.item),a=new Map(t.rows.map(m=>[m.item,m])),l=this.filterEvents(s),n=l.map(m=>this.renderRow(m,a.get(m))).join(""),c=s.length,d=s.filter(m=>!m.endAt).length,u=l.length,p=this.activeTypeFilter||this.ongoingOnly?`${u} shown · ${c} total · ${d} ongoing`:`${c} events · ${d} ongoing`,h=Qs.map(m=>`<button class="ed-chip${m.key===this.activeTypeFilter?" ed-chip-active":""}" data-filter-type="${o(m.key)}">${o(m.label)}</button>`).join(""),f=`<button class="ed-chip${this.ongoingOnly?" ed-chip-active":""}" data-toggle-ongoing>Ongoing only</button>`,b=ae({sourceType:"classifier",method:"curated event log",sampleSize:c,sampleLabel:"disruption events",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Operator press + regulator filings + OFAC/EU sanctions + major wire",creditUrl:"/docs/methodology/disruptions"});this.setSafeContent(P(`
      <div class="ed-wrap">
        <div class="ed-summary">${o(p)}</div>
        <div class="ed-filters">${h}${f}</div>
        ${t.emptyByFocus?pt(g("focus.filter.emptyEnergyDisruptions")):`<div class="table-scroll" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table ed-table" role="table">
            <thead role="rowgroup">
              <tr role="row">
                <th scope="col" role="columnheader">Event</th>
                <th scope="col" role="columnheader">Asset</th>
                <th scope="col" role="columnheader">Window</th>
                <th scope="col" role="columnheader">Offline</th>
                <th scope="col" role="columnheader">Status</th>
              </tr>
            </thead>
            <tbody role="rowgroup">${n||'<tr role="row"><td role="cell" colspan="5" class="ed-empty">No events match the current filter.</td></tr>'}</tbody>
          </table>
        </div>`}
        ${b}
      </div>
      ${ne}
      <style>
        .ed-wrap { font-size: calc(11px * var(--wm-panel-effective-scale, 1)); container: ed-wrap / inline-size; }
        .ed-summary { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; margin: 4px 0 6px 0; }
        .ed-filters { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
        .ed-chip { background: rgba(255,255,255,0.04); color: var(--text-dim, #aaa); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 2px 8px; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); cursor: pointer; }
        .ed-chip:hover { background: rgba(255,255,255,0.08); color: var(--text, #eee); }
        .ed-chip-active { background: #2980b9; border-color: #2980b9; color: #fff; }
        .ed-chip-active:hover { background: #2471a3; }
        .ed-table td { vertical-align: top; }
        .ed-row { cursor: pointer; }
        .ed-row:hover td { background: rgba(255,255,255,0.03); }
        .ed-event { font-weight: 600; color: var(--text, #eee); }
        .ed-sub { font-size: calc(9px * var(--wm-panel-effective-scale, 1)); color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; overflow-wrap: break-word; }
        .ed-desc { font-size: calc(10px * var(--wm-panel-effective-scale, 1)); text-transform: none; letter-spacing: normal; margin: 2px 0; }
        .ed-asset-id { overflow-wrap: break-word; }
        .ed-table .ed-val { white-space: nowrap; }
        .ed-asset-type { display: inline-block; padding: 1px 6px; border-radius: 8px; font-size: calc(8px * var(--wm-panel-effective-scale, 1)); font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; background: rgba(255,255,255,0.08); color: var(--text-secondary); margin-right: 4px; }
        .ed-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: calc(9px * var(--wm-panel-effective-scale, 1)); font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .ed-empty { text-align: center; color: var(--text-dim, #888); padding: 20px; font-style: italic; }
        .ed-offline { font-family: monospace; font-size: calc(10px * var(--wm-panel-effective-scale, 1)); color: var(--text, #eee); }
        /* Five columns cannot fit a narrow column without splitting values, so
           each row stacks: the event and the asset take the full width, and the
           window, offline capacity and status share a line below. The
           breakpoint is in em of the scaled wrap text (50em is 550px at 100%),
           so a larger font-size setting stacks the rows in a wider column too. */
        @container ed-wrap (max-width: 50em) {
          .ed-table, .ed-table tbody { display: block; }
          .ed-table thead { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
          .ed-table tr.ed-row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 10px; padding: 6px; border-bottom: 1px solid var(--border-subtle); }
          .ed-table tr.ed-row td { padding: 0; border: 0; }
          .ed-table tr.ed-row td:first-child, .ed-table tr.ed-row td.ed-asset { flex: 1 0 100%; }
          .ed-table tr.ed-row td:last-child { margin-inline-start: auto; }
          .ed-table tr.ed-row:hover { background: rgba(255,255,255,0.03); }
          .ed-table tr.ed-row:hover td { background: none; }
          .ed-table td[data-label]::before { content: attr(data-label) ' '; color: var(--text-dim, #888); }
        }
      </style>
    `,"legacy Panel.setContent() migration"))}dispatchOpenAsset(e,t,s){if(s==="storage"){window.dispatchEvent(new CustomEvent("wm:open-storage-atlas",{detail:{facilityId:t}}));return}window.dispatchEvent(new CustomEvent("energy:open-pipeline-detail",{detail:{pipelineId:t}}))}renderRow(e,t){const s=Xs[e.eventType]??"•",a=Zt({startAt:e.startAt,endAt:e.endAt||void 0}),l=De(e.startAt,e.endAt||void 0),n=Pe(e.capacityOfflineBcmYr,e.capacityOfflineMbd),c=e.causeChain.join(" → ")||"—";return`
      <tr class="ed-row" role="row" tabindex="0"
          data-event-id="${o(e.id)}"
          data-asset-id="${o(e.assetId)}"
          data-asset-type="${o(e.assetType)}">
        <td role="cell">
          <div class="ed-event">${s} ${o(e.eventType)} ${ut(t)}</div>
          <div class="ed-sub ed-desc">${o(e.shortDescription)}</div>
          <div class="ed-sub">${o(c)}</div>
        </td>
        <td role="cell" class="ed-asset">
          <span class="ed-asset-type">${o(e.assetType)}</span>
          <span class="ed-asset-id">${o(e.assetId)}</span>
        </td>
        <td role="cell">${et(l)}</td>
        <td role="cell" data-label="Offline"><span class="ed-offline">${et(n||"—")}</span></td>
        <td role="cell">${Js(a)}</td>
      </tr>`}}const ya=Object.freeze(Object.defineProperty({__proto__:null,EnergyDisruptionsPanel:ei},Symbol.toStringTag,{value:"Module"})),ti=Z(()=>new ie(B(),{fetch:K})),si="BZ=F",ii=[{symbol:si,name:"Brent Crude",display:"BRENT"}],tt=rs,ai=(()=>{try{return tt}catch{return tt}})(),st=Date.parse(`${ai}T00:00:00Z`),ni={closed:"#e74c3c",disrupted:"#e74c3c",restricted:"#f39c12",open:"#27ae60"},ri={closed:"Closed",disrupted:"Disrupted",restricted:"Restricted",open:"Open"},oi={hormuz:{status:"pending"},euGas:{status:"pending"},brent:{status:"pending"},activeDisruptions:{status:"pending"}};class li extends O{constructor(){super({id:"energy-risk-overview",title:"Global Energy Risk Overview",defaultRowSpan:1,infoTooltip:"Consolidated executive view: Strait of Hormuz vessel status, EU gas storage fill, Brent crude price + 1-day change, active disruption count, data freshness, and a configurable crisis-day counter. Each tile renders independently; one source failing does not block the others."});y(this,"state",oi);y(this,"freshnessTickHandle",null)}destroy(){var e;this.freshnessTickHandle!==null&&(clearInterval(this.freshnessTickHandle),this.freshnessTickHandle=null),(e=super.destroy)==null||e.call(this)}async fetchData(){var l;const[e,t,s,a]=await Promise.allSettled([ht(),St(),as(ii),ti().listEnergyDisruptions({assetId:"",assetType:"",ongoingOnly:!0})]);this.state=ns(e,t,s,a,Date.now()),(l=this.element)!=null&&l.isConnected&&(this.render(),this.freshnessTickHandle===null&&(this.freshnessTickHandle=setInterval(()=>{var n;(n=this.element)!=null&&n.isConnected&&this.render()},6e4)))}render(){ci();const e=`
      <div class="ero-grid">
        ${this.renderHormuzTile()}
        ${this.renderEuGasTile()}
        ${this.renderBrentTile()}
        ${this.renderActiveDisruptionsTile()}
        ${this.renderFreshnessTile()}
        ${this.renderCrisisDayTile()}
      </div>
    `;this.setSafeContent(P(e,"legacy Panel.setContent() migration"))}renderHormuzTile(){const e=this.state.hormuz;if(e.status!=="fulfilled"||!e.value)return z("Hormuz","—","#7f8c8d",'data-degraded="true"');const t=e.value.status,s=ni[t]??"#7f8c8d",a=ri[t]??e.value.status;return z("Hormuz",a,s)}renderEuGasTile(){const e=this.state.euGas;if(e.status!=="fulfilled"||!e.value)return z("EU Gas","—","#7f8c8d",'data-degraded="true"');const t=e.value.fillPct.toFixed(0),s=e.value.fillPct<30?"#e74c3c":e.value.fillPct<50?"#f39c12":"#27ae60";return z("EU Gas",`${t}%`,s)}renderBrentTile(){const e=this.state.brent;if(e.status!=="fulfilled"||!e.value)return z("Brent","—","#7f8c8d",'data-degraded="true"');const t=`$${e.value.price.toFixed(2)}`,s=e.value.change,l=`${s>=0?"+":""}${s.toFixed(2)}%`,n=s>=0?"#e74c3c":"#27ae60";return z("Brent",t,n,"",l,rt(e.value))}renderActiveDisruptionsTile(){const e=this.state.activeDisruptions;if(e.status!=="fulfilled"||!e.value)return z("Active disruptions","—","#7f8c8d",'data-degraded="true"');const t=e.value.count,s=t===0?"#27ae60":t<5?"#f39c12":"#e74c3c";return z("Active disruptions",String(t),s)}renderFreshnessTile(){const t=[this.state.hormuz,this.state.euGas,this.state.brent,this.state.activeDisruptions].map(n=>n.fetchedAt).filter(n=>typeof n=="number");if(t.length===0)return z("Updated","—","#7f8c8d",'data-degraded="true"');const s=Math.max(...t),a=Math.floor((Date.now()-s)/6e4),l=a<=0?"just now":a===1?"1 min ago":`${a} min ago`;return z("Updated",l,"#7f8c8d")}renderCrisisDayTile(){if(!Number.isFinite(st))return z("Hormuz crisis","—","#7f8c8d",'data-degraded="true"');const e=Math.floor((Date.now()-st)/864e5);return e<0?z("Hormuz crisis","pending","#7f8c8d"):z("Hormuz crisis",`Day ${e}`,"#7f8c8d")}}function z(r,i,e,t="",s="",a=""){const l=s?`<div class="ero-tile__sub" style="color:${e}">${o(s)}</div>`:"";return`
    <div class="ero-tile" ${t}>
      <div class="ero-tile__label">${o(r)}</div>
      <div class="ero-tile__value" style="color:${e}">${o(i)}</div>
      ${l}
      ${a?`<div class="indicator-date">${o(a)}</div>`:""}
    </div>
  `}let it=!1;function ci(){if(it||typeof document>"u")return;const r=document.createElement("style");r.setAttribute("data-ero-styles",""),r.textContent=di,document.head.appendChild(r),it=!0}const di=`
  .ero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 8px;
    padding: 8px 0;
  }
  .ero-tile {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 10px 12px;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ero-tile__label {
    font-size: calc(10px * var(--wm-panel-effective-scale, 1));
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 4px;
  }
  .ero-tile__value {
    font-size: calc(18px * var(--wm-panel-effective-scale, 1));
    font-weight: 600;
    line-height: 1.1;
  }
  .ero-tile__sub {
    font-size: calc(12px * var(--wm-panel-effective-scale, 1));
    margin-top: 2px;
  }
`,ba=Object.freeze(Object.defineProperty({__proto__:null,EnergyRiskOverviewPanel:li},Symbol.toStringTag,{value:"Module"})),at=Z(()=>new ct(B(),{fetch:K}));class pi extends O{constructor(){super({id:"fuel-prices",title:g("panels.fuelPrices"),infoTooltip:g("components.fuelPrices.infoTooltip")})}async fetchData(){var i,e,t,s;try{const a=lt("fuelPrices");if((i=a==null?void 0:a.countries)!=null&&i.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderIndex(a),at().listFuelPrices({}).then(n=>{var c,d;!((c=this.element)!=null&&c.isConnected)||!((d=n.countries)!=null&&d.length)||this.renderIndex(n)}).catch(()=>{});return}const l=await at().listFuelPrices({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderIndex(l)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(g("common.failedMarketData"),()=>void this.fetchData())}}renderIndex(i){var h;if(!((h=i.countries)!=null&&h.length)){this.showError(g("common.failedMarketData"),()=>void this.fetchData());return}const e=[...i.countries].sort((f,b)=>{var w,E;const m=((w=f.gasoline)==null?void 0:w.usdPrice)??0;return(((E=b.gasoline)==null?void 0:E.usdPrice)??0)-m}),t=i.cheapestGasoline??"",s=i.mostExpensiveGasoline??"",a=i.cheapestDiesel??"",l=i.mostExpensiveDiesel??"",n=i.wowAvailable,c=e.map(f=>{const b=f.gasoline,m=f.diesel;function v(w,E,T,A){if(!(w!=null&&w.usdPrice))return'<td class="gb-cell gb-na">N/A</td>';const k=A===E?"gb-cheapest":A===T?"gb-priciest":"";let D="";if(n&&w.wowPct!=null&&w.wowPct!==0){const F=w.wowPct>=0?"▲":"▼";D=` <span class="${w.wowPct>=0?"bm-wow-up":"bm-wow-down"}">${F}${Math.abs(w.wowPct).toFixed(1)}%</span>`}return`<td class="gb-cell ${k}">$${w.usdPrice.toFixed(3)}${D}</td>`}return`<tr>
        <td class="gb-item-name">${o(f.flag)} ${o(f.name)}</td>
        ${v(b,t,s,f.code)}
        ${v(m,a,l,f.code)}
      </tr>`}).join(""),d=i.fetchedAt?new Date(i.fetchedAt).toLocaleDateString():"",u=i.countryCount?` (${i.countryCount} ${g("components.fuelPrices.countries")})`:"",p=`
      <div class="gb-wrapper">
        <div class="gb-scroll table-scroll table-scroll-pinned-start" role="group" tabindex="0" aria-labelledby="${this.panelId}Title">
          <table class="wm-table gb-table">
            <thead><tr>
              <th scope="col" class="gb-item-col">${g("panels.fuelPricesCountry")}</th>
              <th scope="col" class="gb-cell">${g("panels.fuelPricesGasoline")}</th>
              <th scope="col" class="gb-cell">${g("panels.fuelPricesDiesel")}</th>
            </tr></thead>
            <tbody>${c}</tbody>
          </table>
        </div>
        ${d?`<div class="gb-updated">${g("components.status.updatedAt",{time:d})}${u}</div>`:""}
      </div>
    `;this.setSafeContent(P(p,"legacy Panel.setContent() migration"))}}const wa=Object.freeze(Object.defineProperty({__proto__:null,FuelPricesPanel:pi},Symbol.toStringTag,{value:"Module"})),nt=["#e67e22","#1abc9c","#9b59b6","#27ae60"],yt="rgba(231,76,60,0.5)";function ui(r){switch(r){case"closed":return"#e74c3c";case"disrupted":return"#e67e22";case"restricted":return"#f39c12";default:return"#2ecc71"}}function hi(r,i,e,t=280,s=52){if(!r.length)return`<div style="height:${s}px;display:flex;align-items:center;color:var(--text-dim);font-size:calc(10px * var(--wm-panel-effective-scale, 1))">${o(g("components.hormuzTracker.noData"))}</div>`;const a=Math.max(...r.map(u=>u.value),1),l=Math.max(2,Math.floor((t-r.length)/r.length));let n=0;const c=r.map(u=>{const p=Math.max(u.value>0?2:1,Math.round(u.value/a*(s-2))),h=u.value===0?yt:i,f=`<rect x="${n}" y="${s-p}" width="${l}" height="${p}" fill="${h}" rx="1"/>`;return n+=l+1,f});n=0;const d=r.map(u=>{const p=`<rect class="hbar" x="${n}" y="0" width="${l}" height="${s}" fill="transparent" data-date="${o(u.date)}" data-val="${u.value}" data-unit="${o(e)}" style="cursor:crosshair"/>`;return n+=l+1,p});return`<svg class="hz-svg" viewBox="0 0 ${t} ${s}" width="100%" height="${s}" preserveAspectRatio="none" style="display:block;overflow:visible">${c.join("")}${d.join("")}</svg>`}function fi(r,i=52){if(!r.length||r.some(s=>s.value!==0))return null;const e=r[0].date.slice(5),t=r[r.length-1].date.slice(5);return`<div class="hz-no-shipments" style="height:${i}px;display:flex;align-items:center;color:var(--text-dim);font-size:calc(10px * var(--wm-panel-effective-scale, 1));border-bottom:1px dashed ${yt}">${o(g("components.hormuzTracker.noShipments",{from:e,to:t}))}</div>`}function mi(r){var e;let i="";for(const t of r){const s=((e=t.series[t.series.length-1])==null?void 0:e.date)??"";s>i&&(i=s)}return i}function gi(r,i){const e=nt[i%nt.length]??"#3498db",t=r.series[r.series.length-1],s=t?Number(t.value).toFixed(0):g("components.hormuzTracker.notAvailable"),a=t?t.date.slice(5):"",l=g("components.hormuzTracker.units.index");return`
    <div class="hz-chart" style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:4px">
        <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);text-transform:uppercase;letter-spacing:0.04em">${o(r.title)}</span>
        <span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${e}">${o(s)} <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${l} · ${o(a)}</span></span>
      </div>
      <div style="position:relative">${fi(r.series)??hi(r.series,e,l)}</div>
    </div>`}function vi(r){const i=r.getBoundingClientRect(),e={left:i.left,top:i.top,right:i.right,bottom:i.bottom};for(let t=r.parentElement;t&&t!==document.body;t=t.parentElement){const s=getComputedStyle(t);if(s.overflowX==="visible"&&s.overflowY==="visible")continue;const a=t.getBoundingClientRect();e.left=Math.max(e.left,a.left),e.top=Math.max(e.top,a.top),e.right=Math.min(e.right,a.right),e.bottom=Math.min(e.bottom,a.bottom)}return e.left=Math.max(e.left,0),e.top=Math.max(e.top,0),e.right=Math.min(e.right,window.innerWidth),e.bottom=Math.min(e.bottom,window.innerHeight),e}class yi extends O{constructor(){super({id:"hormuz-tracker",title:g("components.hormuzTracker.title"),showCount:!1,infoTooltip:g("components.hormuzTracker.infoTooltip")});y(this,"data",null);y(this,"showingData",!1);y(this,"dependencies",null);y(this,"dependencyState","loading");y(this,"tooltipBound",!1);y(this,"fetchGeneration",0);y(this,"dependencyGeneration",0);y(this,"dependencyAbortController",null);y(this,"dependencyAbortCleanup",null);y(this,"authUnsubscribe",null);y(this,"entitlementUnsubscribe",null);y(this,"lastHadPremium",!1);y(this,"handleTranslationsLoaded",()=>{this.data&&this.showingData&&this.renderPanel()});this.lastHadPremium=V(W()),this.authUnsubscribe=os(()=>this.handlePremiumAccessChange()),this.entitlementUnsubscribe=ls(()=>this.handlePremiumAccessChange()),window.addEventListener(Fe,this.handleTranslationsLoaded)}async fetchData(){const e=++this.fetchGeneration;this.invalidateDependencyRequest(),this.showingData=!1,this.showLoading();const t=V(W());this.dependencyState=t?"loading":"pro-locked";let s=t?this.startDependencyRequest():null;try{const a=await ht();return e!==this.fetchGeneration?!1:a?(this.data=a,this.showingData=!0,this.dependencies=null,V(W())?(this.dependencyState="loading",(!s||s.generation!==this.dependencyGeneration)&&(s=this.startDependencyRequest())):(this.invalidateDependencyRequest(),this.dependencyState="pro-locked"),this.renderPanel(),this.bindTooltip(),s==null||s.promise.then(n=>{this.signal.aborted||e!==this.fetchGeneration||(s==null?void 0:s.generation)!==this.dependencyGeneration||!V(W())||(this.dependencies=n,this.dependencyState=(n==null?void 0:n.upstreamUnavailable)===!1?"loaded":"unavailable",this.renderPanel())}),!0):(this.showError(g("components.hormuzTracker.errors.unavailable"),()=>void this.fetchData()),!1)}catch(a){return e!==this.fetchGeneration||this.showError(a instanceof Error?a.message:g("components.hormuzTracker.errors.failedToLoad"),()=>void this.fetchData()),!1}}destroy(){var e,t;window.removeEventListener(Fe,this.handleTranslationsLoaded),(e=this.authUnsubscribe)==null||e.call(this),this.authUnsubscribe=null,(t=this.entitlementUnsubscribe)==null||t.call(this),this.entitlementUnsubscribe=null,this.invalidateDependencyRequest(),super.destroy()}handlePremiumAccessChange(){const e=V(W());if(e!==this.lastHadPremium){if(this.lastHadPremium=e,e){if(!this.data)return;this.dependencies=null,this.dependencyState="loading",this.renderPanel();const t=this.startDependencyRequest();t.promise.then(s=>{this.signal.aborted||t.generation!==this.dependencyGeneration||!V(W())||(this.dependencies=s,this.dependencyState=(s==null?void 0:s.upstreamUnavailable)===!1?"loaded":"unavailable",this.renderPanel())});return}this.invalidateDependencyRequest(),this.dependencies=null,this.dependencyState="pro-locked",this.data&&this.renderPanel()}}invalidateDependencyRequest(){var e,t;this.dependencyGeneration+=1,(e=this.dependencyAbortController)==null||e.abort(),this.dependencyAbortController=null,(t=this.dependencyAbortCleanup)==null||t.call(this),this.dependencyAbortCleanup=null}startDependencyRequest(){this.invalidateDependencyRequest();const e=++this.dependencyGeneration,t=new AbortController,s=()=>t.abort();this.signal.aborted?t.abort():this.signal.addEventListener("abort",s,{once:!0});const a=()=>this.signal.removeEventListener("abort",s);this.dependencyAbortController=t,this.dependencyAbortCleanup=a;const l=Ut("hormuz_strait",25,{signal:t.signal}).catch(()=>null).finally(()=>{this.dependencyAbortController===t&&(this.dependencyAbortController=null,this.dependencyAbortCleanup=null,a())});return{generation:e,promise:l}}bindTooltip(){this.tooltipBound||!this.element||(this.tooltipBound=!0,this.element.addEventListener("mousemove",e=>{var m,v;const t=e.target;if(!((m=t.classList)!=null&&m.contains("hbar")))return;const s=(t.getAttribute("data-date")??"").slice(5),a=t.getAttribute("data-val")??"",l=t.getAttribute("data-unit")??"",n=(v=this.element)==null?void 0:v.querySelector(".hz-tip");if(!n)return;const c=t.getBoundingClientRect();n.textContent=`${s}  ${a} ${l}`,n.style.transform="none",n.style.left="0px",n.style.top="0px";const d=n.getBoundingClientRect(),u=vi(n.closest(".panel-content")??this.element),p=d.width/2,h=Math.min(Math.max(c.left+c.width/2,u.left+p+4),u.right-p-4),f=c.top-d.height-6,b=f>=u.top+4?f:Math.min(c.bottom+6,u.bottom-d.height-4);n.style.left=`${h-p-d.left}px`,n.style.top=`${b-d.top}px`,n.style.opacity="1"}),this.element.addEventListener("mouseleave",()=>{var t;const e=(t=this.element)==null?void 0:t.querySelector(".hz-tip");e&&(e.style.opacity="0")}))}renderPanel(){if(!this.data)return;const e=this.data,t=ui(e.status),s=e.charts.length?e.charts.map((u,p)=>gi(u,p)).join(""):`<div style="color:var(--text-dim);font-size:calc(11px * var(--wm-panel-effective-scale, 1));padding:8px 0">${o(g("components.hormuzTracker.chartUnavailable"))}</div>`,a=mi(e.charts),l=[a?g("components.hormuzTracker.dataThrough",{date:a}):"",e.updatedDate?g("components.hormuzTracker.analysisDate",{date:e.updatedDate}):""].filter(Boolean).join(" · "),n=l?`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">${o(l)}</span>`:"",c=this.renderDependencies(),d=`
      <div style="padding:12px 14px;position:relative">
        <div class="hz-tip" style="position:fixed;pointer-events:none;background:rgba(15,17,26,0.95);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:3px 8px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));color:#fff;white-space:nowrap;z-index:9999;opacity:0;transition:opacity 0.08s;letter-spacing:0.02em"></div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="background:${t};color:#fff;font-size:calc(9px * var(--wm-panel-effective-scale, 1));font-weight:700;padding:2px 6px;border-radius:3px;letter-spacing:0.08em">${e.status.toUpperCase()}</span>
          ${n}
        </div>
        <div style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim);margin-bottom:6px">${o(g("components.hormuzTracker.indexNote"))}</div>
        <div>${s}</div>
        ${c}
        <div style="margin-top:4px;font-size:calc(9px * var(--wm-panel-effective-scale, 1));color:var(--text-dim)">
          ${o(g("components.hormuzTracker.sourcePrefix"))} <a href="${o(e.attribution.url)}" target="_blank" rel="noopener" style="color:var(--text-dim);text-decoration:underline">${o(e.attribution.source)}</a>
        </div>
      </div>`;this.setSafeContent(P(d,"legacy Panel.setContent() migration"))}renderDependencies(){const e=this.dependencies;if(this.dependencyState==="loading")return`<div class="hz-dependencies" data-state="loading"><div class="hz-dependencies-title">${o(g("components.supplyVulnerability.hormuzTitle"))}</div><div class="hz-dependencies-empty">${o(g("components.supplyVulnerability.loading"))}</div></div>`;if(this.dependencyState==="pro-locked"||!e||e.upstreamUnavailable||e.dependencies.length===0){const l=this.dependencyState==="pro-locked"?g("components.supplyVulnerability.proLocked"):!e||e.upstreamUnavailable?g("components.supplyVulnerability.unavailable"):g("components.supplyVulnerability.noCoverage");return`<div class="hz-dependencies" data-state="${this.dependencyState}"><div class="hz-dependencies-title">${o(g("components.supplyVulnerability.hormuzTitle"))}</div><div class="hz-dependencies-empty">${o(l)}</div></div>`}const t=new Map,s=new Map;for(const l of e.dependencies)t.has(l.countryIso2)||t.set(l.countryIso2,l),s.has(l.commodityId)||s.set(l.commodityId,l);const a=(l,n)=>l.slice(0,5).map(c=>{const d=n==="country"?c.countryName:c.commodity,u=n==="country"?c.commodity:c.countryName,p=c.score==null?g("components.supplyVulnerability.unknown"):c.score.toFixed(1),h=c.state==="ok"?g("components.supplyVulnerability.stateOk"):c.state==="stale_input"?g("components.supplyVulnerability.stateStale"):g("components.supplyVulnerability.stateInsufficient");return`<li class="hz-dependency"><span class="hz-dependency-label">${o(d)}</span><span class="hz-dependency-context">${o(u)} · ${o(h)} · ${o(p)}</span></li>`}).join("");return`<div class="hz-dependencies">
      <div class="hz-dependencies-title">${o(g("components.supplyVulnerability.hormuzTitle"))}</div>
      <div class="hz-dependencies-grid">
        <div><strong class="hz-dependencies-heading">${o(g("components.supplyVulnerability.dependentCountries"))}</strong><ul class="hz-dependencies-list">${a([...t.values()],"country")}</ul></div>
        <div><strong class="hz-dependencies-heading">${o(g("components.supplyVulnerability.dependentCommodities"))}</strong><ul class="hz-dependencies-list">${a([...s.values()],"commodity")}</ul></div>
      </div>
      <div class="hz-dependencies-method">${o(g("components.supplyVulnerability.methodology"))}: ${o(e.methodologyVersion)}</div>
    </div>`}}const xa=Object.freeze(Object.defineProperty({__proto__:null,HormuzPanel:yi},Symbol.toStringTag,{value:"Module"}));class bi extends O{constructor(){super({id:"renewable",title:"Renewable Energy",trackActivity:!1,infoTooltip:g("components.renewable.infoTooltip")})}setData(i){var n,c,d;ot(this.content);const{data:e,state:t,cachedAt:s}=i;if(t==="cached"?this.setDataBadge("cached",s===null?void 0:cs(s)):this.setDataBadge(t),e===null||e.globalPercentage===0&&!((n=e.regions)!=null&&n.length)){const u=document.createElement("div");u.className="renewable-empty",Object.assign(u.style,{padding:"24px 16px",color:"var(--text-dim)",textAlign:"center",fontSize:"calc(13px * var(--wm-panel-effective-scale, 1))"}),u.textContent="No renewable energy data available",this.content.appendChild(u);return}const a=document.createElement("div");a.className="renewable-container",Object.assign(a.style,{padding:"8px"});const l=document.createElement("div");if(l.className="renewable-gauge-section",Object.assign(l.style,{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"12px"}),this.renderGauge(l,e.globalPercentage,e.globalYear),a.appendChild(l),(((c=e.historicalData)==null?void 0:c.length)??0)>2){const u=document.createElement("div");u.className="renewable-sparkline-section",Object.assign(u.style,{marginBottom:"12px"}),this.renderSparkline(u,e.historicalData),a.appendChild(u)}if(((d=e.regions)==null?void 0:d.length)>0){const u=document.createElement("div");u.className="renewable-regions",this.renderRegions(u,e.regions),a.appendChild(u)}this.content.appendChild(a)}renderGauge(i,e,t){const d=we(i).append("svg").attr("viewBox","0 0 140 140").attr("width",140).attr("height",140).style("display","block").append("g").attr("transform","translate(70,70)"),u=ds().innerRadius(49).outerRadius(70).cornerRadius(4).startAngle(0);d.append("path").datum({endAngle:Math.PI*2}).attr("d",u).attr("fill",_("--border"));const p=e/100*Math.PI*2,h=d.append("path").datum({endAngle:0}).attr("d",u).attr("fill",_("--green")),f=ps(0,p);h.transition().duration(1500).ease(Ht).attrTween("d",()=>m=>u({endAngle:f(m)})),d.append("text").attr("class","gauge-value").attr("text-anchor","middle").attr("dominant-baseline","central").attr("dy","-0.15em").attr("fill",_("--text")).style("font-size","calc(22px * var(--wm-panel-effective-scale, 1))").attr("font-weight","700").text(`${e.toFixed(1)}%`),d.append("text").attr("class","gauge-label").attr("text-anchor","middle").attr("dominant-baseline","central").attr("dy","1.4em").attr("fill",_("--text-dim")).style("font-size","calc(10px * var(--wm-panel-effective-scale, 1))").text("Renewable");const b=document.createElement("div");b.className="gauge-year",Object.assign(b.style,{textAlign:"center",fontSize:"calc(10px * var(--wm-panel-effective-scale, 1))",color:"var(--text-dim)",marginTop:"4px"}),b.textContent=`Data from ${t}`,i.appendChild(b)}renderSparkline(i,e){const t=this.content.clientWidth-16||200,s=40,a={top:4,right:8,bottom:4,left:8},l=t-a.left-a.right;if(l<=0)return;const c=we(i).append("svg").attr("width",t).attr("height",s+a.top+a.bottom).style("display","block").append("g").attr("transform",`translate(${a.left},${a.top})`),d=Ne(e,w=>w.year),u=Ne(e,w=>w.value),p=(u[1]-u[0])*.1,h=ue().domain(d).range([0,l]),f=ue().domain([u[0]-p,u[1]+p]).range([s,0]),b=_("--green"),m=xe().x(w=>h(w.year)).y0(s).y1(w=>f(w.value)).curve(J);c.append("path").datum(e).attr("d",m).attr("fill",b).attr("opacity",.15);const v=Be().x(w=>h(w.year)).y(w=>f(w.value)).curve(J);c.append("path").datum(e).attr("d",v).attr("fill","none").attr("stroke",b).attr("stroke-width",1.5)}renderRegions(i,e){const t=Math.max(...e.map(s=>s.percentage),1);for(let s=0;s<e.length;s++){const a=e[s],l=document.createElement("div");l.className="region-row",Object.assign(l.style,{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"});const n=document.createElement("span");n.className="region-name",Object.assign(n.style,{fontSize:"calc(11px * var(--wm-panel-effective-scale, 1))",color:"var(--text-dim)",minWidth:"120px",flexShrink:"0"}),n.textContent=a.name;const c=document.createElement("div");c.className="region-bar-container",Object.assign(c.style,{flex:"1",height:"8px",background:"var(--bg-secondary)",borderRadius:"4px",overflow:"hidden"});const d=document.createElement("div");d.className="region-bar";const u=e.length>1?1-s/(e.length-1)*.5:1;Object.assign(d.style,{width:`${a.percentage/t*100}%`,height:"100%",background:_("--green"),opacity:String(u),borderRadius:"4px",transition:"width 0.6s ease-out"}),c.appendChild(d);const p=document.createElement("span");p.className="region-value",Object.assign(p.style,{fontSize:"calc(11px * var(--wm-panel-effective-scale, 1))",fontWeight:"600",color:"var(--text)",minWidth:"42px",textAlign:"right",flexShrink:"0"}),p.textContent=`${a.percentage.toFixed(1)}%`,l.appendChild(n),l.appendChild(c),l.appendChild(p),i.appendChild(l)}}setCapacityData(i){var s;if((s=this.content.querySelector(".capacity-section"))==null||s.remove(),!i||i.length===0)return;const e=document.createElement("div");e.className="capacity-section";const t=document.createElement("div");t.className="capacity-header",t.textContent="US Installed Capacity (EIA)",e.appendChild(t),this.renderCapacityChart(e,i),this.content.appendChild(e)}renderCapacityChart(i,e){const t=e.find($=>$.source==="SUN"),s=e.find($=>$.source==="WND"),a=e.find($=>$.source==="COL"),l=new Set;for(const $ of e)for(const L of $.data)l.add(L.year);if(l.size===0)return;const n=[...l].sort(($,L)=>$-L),c=new Map((t==null?void 0:t.data.map($=>[$.year,$.capacityMw]))??[]),d=new Map((s==null?void 0:s.data.map($=>[$.year,$.capacityMw]))??[]),u=new Map((a==null?void 0:a.data.map($=>[$.year,$.capacityMw]))??[]),p=n.map($=>({year:$,solar:c.get($)??0,wind:d.get($)??0,coal:u.get($)??0})),h=this.content.clientWidth-16||200,f=100,b={top:4,right:8,bottom:16,left:8},m=h-b.left-b.right,v=f-b.top-b.bottom;if(m<=0)return;const E=us().keys(["solar","wind"]).order(hs).offset(fs)(p),T=ue().domain([n[0],n[n.length-1]]).range([0,m]),A=be(E,$=>be($,L=>L[1]))??0,k=be(p,$=>$.coal)??0,D=Math.max(A,k)*1.1,F=ue().domain([0,D]).range([v,0]),I=we(i).append("svg").attr("width",h).attr("height",f).attr("viewBox",`0 0 ${h} ${f}`).style("display","block").append("g").attr("transform",`translate(${b.left},${b.top})`),X=_("--yellow"),Q=_("--semantic-info"),G=_("--red"),C=xe().x($=>T($.data.year)).y0($=>F($[0])).y1($=>F($[1])).curve(J),oe=[X,Q];E.forEach(($,L)=>{I.append("path").datum($).attr("d",C).attr("fill",oe[L]).attr("opacity",.6)});const ge=xe().x($=>T($.year)).y0(v).y1($=>F($.coal)).curve(J);I.append("path").datum(p).attr("d",ge).attr("fill",G).attr("opacity",.2);const le=Be().x($=>T($.year)).y($=>F($.coal)).curve(J);I.append("path").datum(p).attr("d",le).attr("fill","none").attr("stroke",G).attr("stroke-width",1.5).attr("opacity",.8);const U=n[0],ce=n[n.length-1];I.append("text").attr("x",T(U)).attr("y",v+12).attr("text-anchor","start").attr("fill",_("--text-dim")).style("font-size","calc(9px * var(--wm-panel-effective-scale, 1))").text(String(U)),I.append("text").attr("x",T(ce)).attr("y",v+12).attr("text-anchor","end").attr("fill",_("--text-dim")).style("font-size","calc(9px * var(--wm-panel-effective-scale, 1))").text(String(ce));const ve=document.createElement("div");ve.className="capacity-legend";const bt=[{color:X,label:"Solar"},{color:Q,label:"Wind"},{color:G,label:"Coal"}];for(const $ of bt){const L=document.createElement("div");L.className="capacity-legend-item";const ye=document.createElement("span");ye.className="capacity-legend-dot",ye.style.backgroundColor=$.color;const Oe=document.createElement("span");Oe.textContent=$.label,L.appendChild(ye),L.appendChild(Oe),ve.appendChild(L)}i.appendChild(ve)}destroy(){super.destroy()}}const $a=Object.freeze(Object.defineProperty({__proto__:null,RenewableEnergyPanel:bi},Symbol.toStringTag,{value:"Module"}));export{fa as C,da as E,va as F,pa as G,xa as H,ua as O,ma as P,$a as R,ga as S,ha as a,ya as b,ba as c,wa as d};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["panels-energy-DNGQBaMF.js"]=1;