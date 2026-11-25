const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/object-imagery-EW6bwWaj.js","assets/clerk-CAuJ7nO4.js","assets/web-origin-CYWcatKL.js","assets/index-BhmrbbBS.js","assets/theme-colors-ToRFEbn-.js","assets/i18n-qlunRAMb.js","assets/i18n-url-C-jHRZJm.js","assets/safe-storage-D7AmwIPS.js","assets/map-layer-definitions-BCWegBzb.js","assets/persistent-cache-CQ4JFXkz.js","assets/tauri-bridge-CDOUxP2F.js","assets/storage-quota-BtyHkWgJ.js","assets/debugbear-rum-EsMiF_vs.js","assets/sensitive-url-params-D8a3nWur.js","assets/widget-store-iHraSiA2.js","assets/index-uHNHG_pv.js","assets/panel-storage-BeMdmZSX.js","assets/auth-state-DLqMTLIu.js","assets/entitlements-iEraPnPS.js","assets/convex-client-C_8ewSzp.js","assets/match-DcvXfHuD.js","assets/tiers-DdXm3mHn.js","assets/water-card-BZnP1Y1-.js","assets/reservoir-context-loader-CH2T3kNn.js","assets/gdelt-intel-DU-_Fjx7.js","assets/runtime-config-tgv8gRzl.js","assets/sanitize-D7dx0cA1.js","assets/corroboration-CzofwUIz.js","assets/source-provenance-hRte-cNu.js","assets/panel-gating-B4-XUkuA.js","assets/analytics-UdF1aNpQ.js","assets/reservoir-context-CiKdpHQV.js","assets/sparkline-BTOgeOir.js","assets/strategic-reservoirs-CeA8ygEU.js","assets/pass-query-BxU95-6i.js","assets/sensor-profiles-CVTvuztH.js","assets/catalog-DZteWI80.js","assets/pass-client-D0Wv1DNV.js","assets/reservoir-levels-nD28iuSF.css","assets/event-imagery-CNUmphKB.js","assets/scene-history-DhnBWDHN.js"])))=>i.map(i=>d[i]);
var Xs=Object.defineProperty;var Js=(a,s,e)=>s in a?Xs(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var C=(a,s,e)=>Js(a,typeof s!="symbol"?s+"":s,e);import{c as st,b as tt}from"./safe-storage-D7AmwIPS.js";import{_ as ts}from"./clerk-CAuJ7nO4.js";import{aF as et,a2 as gs,w as at,n as _s,Q as pt,o as bs,f as ys,aG as ot,aH as nt,F as it,G as lt,aI as rt,a3 as os}from"./gdelt-intel-DU-_Fjx7.js";import{t,d as z,a as D,g as fs}from"./theme-colors-ToRFEbn-.js";import{e as p,s as T}from"./sanitize-D7dx0cA1.js";import{U as ws}from"./geo-map-data-BSTidmwW.js";import{i as ct}from"./index-uHNHG_pv.js";import{T as Cs}from"./transit-chart-JbmoHPF5.js";import{G as ut,a as dt,l as Os,b as vt,I as Hs,d as mt,n as ht,W as $t,f as gt}from"./water-card-BZnP1Y1-.js";import{s as k,t as x}from"./dom-utils-BodelmHa.js";import{d as bt,o as yt,e as ft,l as wt,m as Ct,n as St,g as kt,s as xt,p as Et,q as Tt,t as Pt,S as Lt,k as Mt,u as At}from"./reservoir-context-CiKdpHQV.js";import{a as It}from"./reservoir-card-BBe3N8Xf.js";import{isFeatureAvailable as Ss}from"./runtime-config-tgv8gRzl.js";import{a4 as Dt,g as Rt,a3 as Nt}from"./index-BhmrbbBS.js";import{s as Ft}from"./sparkline-BTOgeOir.js";import{s as Ut,g as K}from"./auth-state-DLqMTLIu.js";import{onEntitlementChange as _t}from"./entitlements-iEraPnPS.js";import{h as q}from"./panel-gating-B4-XUkuA.js";import{f as ns}from"./analytics-UdF1aNpQ.js";import{loadReservoirNextPasses as Ot,loadReservoirLevelsById as Ht}from"./reservoir-context-loader-CH2T3kNn.js";import{a as jt,d as Wt}from"./corroboration-CzofwUIz.js";import{t as zt}from"./map-layer-definitions-BCWegBzb.js";const js=!1;var Ga=1e-6,Ka=1e-12,G=Math.PI,ks=G/2,qa=G/4,Ya=G*2,Y=180/G,Q=G/180,Qa=Math.abs,Za=Math.atan,xs=Math.atan2,Z=Math.cos,Xa=Math.ceil,Ja=Math.exp,sp=Math.hypot,tp=Math.log,j=Math.sin,ep=Math.sign||function(a){return a>0?1:a<0?-1:0},Es=Math.sqrt,ap=Math.tan;function pp(a){return a>1?0:a<-1?G:Math.acos(a)}function Bt(a){return a>1?ks:a<-1?-ks:Math.asin(a)}function Ts(a){return(a=j(a/2))*a}function Vt(a,s){var e=a[0]*Q,o=a[1]*Q,n=s[0]*Q,i=s[1]*Q,l=Z(o),c=j(o),r=Z(i),u=j(i),d=l*Z(e),v=l*j(e),h=r*Z(n),m=r*j(n),$=2*Bt(Es(Ts(i-o)+l*r*Ts(n-e))),g=j($),b=$?function(y){var f=j(y*=$)/g,w=j($-y)/g,S=w*d+f*h,L=w*v+f*m,_=w*c+f*u;return[xs(L,S)*Y,xs(_,Es(S*S+L*L))*Y]}:function(){return[e*Y,o*Y]};return b.distance=$,b}const Gt="wm:orbital-open-evidence",Kt="wm:orbital-open-event-compare";function op(a,s,e,o){var m;const n=`worldmonitor-map-${e}-expanded`;let i=null;const l=st(n);(l==="true"||l==="false")&&(i=l==="true");const c=s.querySelector(".toggle-header"),r=(c==null?void 0:c.querySelector(".toggle-collapse"))??document.createElement("button");r.type="button",r.classList.add("map-control-disclosure"),r.textContent=o,c?((m=c.querySelector("span"))==null||m.remove(),c.prepend(r)):s.prepend(r),s.classList.add("map-control-panel");let u=!1;const d=()=>{const $=a.clientWidth<700||a.clientHeight<400;u=i??!$,s.classList.toggle("map-control-compact",$),s.classList.toggle("map-control-collapsed",!u),r.setAttribute("aria-expanded",String(u))},v=()=>{i=!u,tt(n,String(i)),d()};r.addEventListener("click",v);const h=new ResizeObserver(d);return h.observe(a),d(),()=>{h.disconnect(),r.removeEventListener("click",v)}}const V=(a,s)=>typeof a=="number"&&Number.isFinite(a)&&Math.abs(a)<=90&&typeof s=="number"&&Number.isFinite(s)&&Math.abs(s)<=180,as=a=>Number.isFinite(a)&&a>0;function Ws(a,s,e,o,n){if(!as(a.count)||!V(s,e)||!V(o,n))return[];const i=[[e,s],[n,o]],[l,c]=Vt(i[0],i[1])(.5);return[{...a,lat:c,lon:l,route:i}]}function np(a){return a.filter(s=>V(s.originLat,s.originLon)&&V(s.asylumLat,s.asylumLon)&&as(s.refugees)).slice(0,50).flatMap(s=>Ws({kind:"unhcr",badge:"refugees",count:s.refugees,color:"#6496ff",title:`${s.originName} → ${s.asylumName}`,label:t("components.displacement.refugees"),details:[],source:"UNHCR"},s.originLat,s.originLon,s.asylumLat,s.asylumLon))}function ls(...a){return a.filter(([,s])=>!!s).map(([s,e])=>({label:s,value:e}))}function ip(a){const s=t("components.deckgl.tooltip.sourceIomDtm"),e=t("components.deckgl.tooltip.internallyDisplaced"),o=t("popups.displacement.operation"),n=t("popups.displacement.reportDate");return[...a.routes.flatMap(i=>Ws({kind:"dtm-route",badge:"idps",count:i.idps,color:"#b482ff",title:`${i.originName} → ${i.destinationName}`,label:e,source:s,details:ls([t("components.displacement.country"),i.countryName],[o,i.operation],[n,i.reportingDate])},i.originLat,i.originLon,i.destinationLat,i.destinationLon)),...a.regions.filter(i=>V(i.lat,i.lon)&&as(i.idps)).map(i=>({kind:"dtm-region",badge:"idps",lat:i.lat,lon:i.lon,count:i.idps,color:"#b482ff",title:`${i.name}, ${i.countryName}`,label:e,source:s,details:ls([o,i.operation],[n,i.reportingDate])}))]}function lp(a){return a.points.filter(s=>V(s.lat,s.lon)&&as(s.figure)).map(s=>({kind:"idmc",badge:s.conflict?"conflict":"disaster",lat:s.lat,lon:s.lon,count:s.figure,color:s.conflict?"#e65a46":"#4696e6",title:`${s.locationName||s.countryName}`,label:t("components.deckgl.tooltip.displaced"),source:t("components.deckgl.tooltip.sourceIdmc"),details:ls([t("popups.displacement.event"),s.eventName],[t("popups.displacement.cause"),s.conflict?t("components.displacement.conflict"):s.hazardType],[t("popups.displacement.date"),s.displacementDate])}))}function rp(a){const s=document.createElement("button");s.type="button",s.className=`displacement-marker displacement-${a.kind}`,s.setAttribute("aria-label",`${a.title}: ${a.count.toLocaleString()} ${a.label} · ${a.source}`);const e=Math.min(36,Math.max(8,Math.sqrt(a.count)*.12));s.style.cssText=`width:${Math.max(24,e)}px;height:${Math.max(24,e)}px;padding:0;border:0;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;pointer-events:auto`;const o=document.createElement("span");return o.setAttribute("aria-hidden","true"),o.style.cssText=`width:${e}px;height:${e}px;box-sizing:border-box;border:1px solid var(--text-primary);background:${a.color};opacity:.85;border-radius:${a.route?"2px":"50%"};${a.route?"transform:rotate(45deg)":""}`,s.appendChild(o),s}const qt={refugees:"components.displacement.refugees",idps:"components.displacement.idps",conflict:"components.displacement.conflict",disaster:"components.displacement.disaster"},Yt=a=>a.charAt(0).toLocaleUpperCase()+a.slice(1);function F(a,s){return`<div class="popup-stat"><span class="stat-label">${p(a)}</span><span class="stat-value">${p(s)}</span></div>`}function Qt(a){return`
    <div class="popup-header displacement">
      <span class="popup-title">${p(t("panels.displacement").toLocaleUpperCase())}</span>
      <span class="popup-badge displacement-${a.badge}">${p(t(qt[a.badge]).toLocaleUpperCase())}</span>
      <button class="popup-close" aria-label="${p(t("common.close"))}">×</button>
    </div>
    <div class="popup-body">
      <p class="popup-location">${p(a.title)}</p>
      <div class="popup-stats">
        ${F(Yt(a.label),a.count.toLocaleString())}
        ${a.details.map(s=>F(s.label,s.value)).join("")}
      </div>
      <div class="popup-attribution">${p(a.source)}</div>
    </div>`}function Zt(a){try{return new URL(a).hostname.replace("www.","")}catch{return""}}function vs(a,s={}){const e=s.limit??3,o=s.label??"Source",n=s.containerClass??"popup-source-links",i=s.linkClass??"popup-link",l=[];for(const c of a??[]){if(l.length>=e)break;const r=T(c);if(!r)continue;const u=Zt(c)||`${o} ${l.length+1}`;l.push(`<a class="${p(i)}" href="${r}" target="_blank" rel="noopener noreferrer nofollow">${p(u)} →</a>`)}return l.length?`<div class="${p(n)}">${l.join("")}</div>`:""}function cp(a){const s=new Map;for(const o of a){const n=`${o.lat},${o.lon}`,i=s.get(n)??[];i.push(o),s.set(n,i)}const e=new Map;for(const o of s.values()){const n=o.length>1?26/Math.sin(Math.PI/o.length):0;o.forEach((i,l)=>{const c=2*Math.PI*l/o.length;e.set(i,[n*Math.cos(c),n*Math.sin(c)])})}return e}function up(a){const s=a.kind==="death";let e="#b482ff";s?e="#e64646":a.changePct!==void 0?e=a.changePct>=0?"#f0643c":"#3cb496":a.kind==="return"?e="#50d28c":a.kind==="arrival"&&(e="#46b4f0");const o=Math.min(40,Math.max(10,Math.sqrt(a.individuals)*.5)),n=document.createElement("button");n.type="button",n.className=`cross-border-marker cross-border-${s?"death":"point"}`;const i=Math.max(24,o);n.style.cssText=`width:${i}px;height:${i}px;padding:0;border:0;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;pointer-events:auto`;const l=document.createElement("span");return l.className="cross-border-dot",l.setAttribute("aria-hidden","true"),l.style.cssText=`box-sizing:border-box;width:${o}px;height:${o}px;border-radius:50%;color:var(--text-primary);background:${e};border-width:${a.accelerating?3:1}px;border-style:solid;border-color:${a.accelerating?"#ff4646":"var(--text-primary)"};display:flex;align-items:center;justify-content:center;font-weight:bold`,l.textContent=s?"×":"",n.appendChild(l),n.setAttribute("aria-label",`${a.label}: ${a.individuals.toLocaleString()} · ${a.kind} · ${a.date}`),n}function dp(a){const s=a.last30Days!==void 0?"30d":a.period,e=a.changePct!==void 0?` · ${a.changePct>0?"+":""}${a.changePct.toFixed(0)}%`:"",o=a.change!==null?`<br>${a.change>0?"+":""}${a.change.toLocaleString()}${a.changeSince?` ${t("components.deckgl.tooltip.sinceDate",{date:p(a.changeSince)})}`:""}`:"";return`<strong>${p(a.label)}</strong><br>${a.individuals.toLocaleString()} · ${p(a.kind)} · ${p(a.measure??"")}${s?`<br>${p(s)}${e}`:""}`+o+`<br>${p(a.country)} · ${p(a.date)}<br>${p(a.source||t("components.deckgl.tooltip.sourceUnhcrOdp"))}${a.accelerating?`<br><strong>${t("components.displacement.accelerating")}</strong>`:""}`+vs(a.sourceUrl?[a.sourceUrl]:[])}const Ps=a=>`${a>0?"+":""}${a.toLocaleString()}`;function Xt(a){const s=a.changePct!==void 0?` · ${a.changePct>0?"+":""}${a.changePct.toFixed(0)}%`:"",e=[F(t("components.displacement.reported"),a.individuals.toLocaleString()),F(t("popups.type"),t(`popups.displacement.kinds.${a.kind}`)),a.measure?F(t("popups.displacement.measure"),a.measure):"",a.last30Days!==void 0?F(t("components.displacement.last30Days"),`${a.last30Days.toLocaleString()}${s}`):a.period?F(t("components.displacement.period"),`${a.period}${s}`):"",a.change!==null?F(t("components.displacement.latestChange"),a.changeSince?`${Ps(a.change)} ${t("components.deckgl.tooltip.sinceDate",{date:a.changeSince})}`:Ps(a.change)):"",F(t("components.displacement.country"),a.country),F(t("popups.displacement.reportDate"),a.date)];return`
    <div class="popup-header displacement">
      <span class="popup-title">${p(t("components.displacement.crossBorder").toLocaleUpperCase())}</span>
      ${a.accelerating?`<span class="popup-badge high">${p(t("components.displacement.accelerating").toLocaleUpperCase())}</span>`:""}
      <button class="popup-close" aria-label="${p(t("common.close"))}">×</button>
    </div>
    <div class="popup-body">
      <p class="popup-location">${p(a.label)}</p>
      <div class="popup-stats">${e.join("")}</div>
      <div class="popup-attribution">${p(a.source||t("components.deckgl.tooltip.sourceUnhcrOdp"))}</div>
      ${vs(a.sourceUrl?[a.sourceUrl]:[])}
    </div>`}const Jt=864e5,se={N:{label:"VIIRS Suomi NPP",mosaic:"VIIRS Suomi NPP"},N20:{label:"VIIRS NOAA-20",mosaic:"VIIRS NOAA-20"},N21:{label:"VIIRS NOAA-21",mosaic:null},T:{label:"MODIS Terra",mosaic:"MODIS Terra"},Terra:{label:"MODIS Terra",mosaic:"MODIS Terra"},A:{label:"MODIS Aqua",mosaic:"MODIS Aqua"},Aqua:{label:"MODIS Aqua",mosaic:"MODIS Aqua"}};function zs(a){const s=a==null?void 0:a.trim();return s?se[s]??{label:s,mosaic:null}:{label:null,mosaic:null}}const te=a=>new Date(a).toISOString().slice(0,10);async function ee(a,s,e,o={}){var v;const n=te(s),{mosaic:i}=zs(e),l=ut.find(h=>h.source===i);if(!l)return{status:"none",date:n,reason:"no-layer"};const c=Date.parse(`${n}T00:00:00Z`),r=await dt({point:a,window:{startMs:c,endMs:c+Jt-1},nowMs:Date.now(),noradIds:new Set([l.noradId]),...o}),u=r.status==="ok"&&(((v=r.failures)==null?void 0:v.length)??0)===0?r.items[0]:void 0;if(!u)return{status:"failed"};const d=u.days.find(h=>h.date===n);return d!=null&&d.imageUrl?{status:"found",source:l.source,date:n,archive:u.archive,candidates:[d.imageUrl],pointInCrop:u.pointInCrop??{x:.5,y:.5}}:{status:"none",source:l.source,date:n,reason:"no-day"}}function Bs(a){const s=a;return!!s&&Number.isFinite(s.lat)&&Number.isFinite(s.lon)&&Number.isFinite(s.detected_at)&&s.detected_at>0&&(s.source===void 0||s.source===""||s.source==="firms")}const ae=14*864e5;function ms(a,s){switch(a){case"base":{const e=s;return{kind:"site",origin:{list:"military-base",id:e.id},point:{lat:e.lat,lon:e.lon}}}case"port":{const e=s;return{kind:"site",origin:{list:"port",id:e.id},point:{lat:e.lat,lon:e.lon}}}case"nuclear":{const e=s;return{kind:"site",origin:{list:"nuclear-facility",id:e.id},point:{lat:e.lat,lon:e.lon}}}case"waterway":{const e=s;return{kind:"site",origin:{list:"chokepoint",id:e.id},point:{lat:e.lat,lon:e.lon}}}case"conflict":{const e=s;return{kind:"site",origin:{list:"conflict-zone",id:e.id},point:{lat:e.center[1],lon:e.center[0]}}}case"reservoirLevel":{const e=s;return{kind:"point",point:{lat:e.lat,lon:e.lon},ownNextPass:!0,optical:!0}}case"iranEvent":{const e=s;return Number.isFinite(e.latitude)&&Number.isFinite(e.longitude)?{kind:"point",point:{lat:e.latitude,lon:e.longitude}}:null}case"natEvent":{const e=s;return e.category==="wildfires"?{kind:"point",point:{lat:e.lat,lon:e.lon}}:null}case"fireDetection":{const e=s;return Bs(s)?{kind:"point",point:{lat:e.lat,lon:e.lon}}:null}case"news":{const e=s;return Number.isFinite(e.lat)&&Number.isFinite(e.lon)?{kind:"point",point:{lat:e.lat,lon:e.lon}}:null}default:return null}}const X=a=>Number.isFinite(a)&&a>0?a:null;function pe(a,s){if(!ms(a,s))return null;switch(a){case"iranEvent":{const{timestamp:e}=s;return e===void 0?null:X(typeof e=="number"||/^\d+$/.test(e)?Number(e):Date.parse(e))}case"natEvent":return X(new Date(s.date).getTime());case"fireDetection":return X(s.detected_at);case"news":{const{timestamp:e}=s;return e?X(new Date(e).getTime()):null}default:return null}}function oe(a,s,e=js){return e&&ms(a,s)!==null}const U=(a,s)=>p(t(`orbitalWatch.popup.${a}`,s));function ne(){return`<div class="popup-section popup-imagery" data-orbital-imagery aria-live="polite">
    <span class="section-label">${U("title")}</span>
    <div class="popup-imagery-body"><span class="popup-imagery-status">${U("loading")}</span></div>
  </div>`}function ie(a){return""}const hs=a=>new Intl.DateTimeFormat(z(),{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"UTC",timeZoneName:"short"}).format(a),le={"sentinel-2":"Sentinel-2","sentinel-1":"Sentinel-1 radar",landsat:"Landsat"},Vs=a=>le[a]??a;function Gs(a){return a.nextPassPending?"…":a.nextPass?`${p(hs(a.nextPass.timeMs))}<span class="popup-imagery-source">${p(a.nextPass.satellite)}</span>`:U("noPass")}const re=a=>new Intl.DateTimeFormat(z(),{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);function ce(a){return a==="open"?`<button type="button" class="popup-imagery-open popup-imagery-compare" data-orbital-event-compare>${U("compareEvent")}</button>
      <span class="popup-imagery-status" data-orbital-event-status hidden></span>`:a==="locked"?`<a class="popup-imagery-compare-locked" href="/pro#pricing" target="_blank" rel="noopener" data-orbital-event-compare-locked>${U("compareEventLocked")}</a>`:""}function Ks(a,s){return[a.latest?mt(a.latest.profileId,a.latest.datetime):"",s&&a.nextPass?Hs.celestrak:""].filter(Boolean).map(o=>`<span class="popup-imagery-source">${p(o)}</span>`).join("")}function ue(a,s,e=!0,o=null){const n=a.latest?Date.parse(a.latest.datetime):NaN,i=Number.isFinite(n)&&s-n>ae,l=a.latest&&Number.isFinite(n)?`${p(hs(n))}<span class="popup-imagery-source">${p(Vs(a.latest.profileId))}</span>`:U(a.imageSearchFailed?"unavailable":"noImage"),c=Gs(a);return`${a.latest?'<div class="popup-imagery-frame" data-orbital-image></div>':""}
    <div class="popup-stats popup-imagery-stats">
      <div class="popup-stat${i?" popup-imagery-stale":""}"><span class="stat-label">${U("latest")}</span><span class="stat-value">${l}</span></div>
      ${e?`<div class="popup-stat"><span class="stat-label">${U("nextPass")}</span><span class="stat-value" data-orbital-next-pass>${c}</span></div>`:""}
    </div>
    <div class="popup-imagery-credit" data-orbital-credit>${Ks(a,e)}</div>
    ${ie()}
    <div class="popup-imagery-actions">
      <button type="button" class="popup-imagery-open" data-orbital-open-evidence>${U("openEvidence")}</button>
      ${ce(o)}
    </div>`}const de=(...a)=>ts(async()=>{const{loadObjectImagery:s}=await import("./object-imagery-EW6bwWaj.js");return{loadObjectImagery:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38])).then(({loadObjectImagery:s})=>s(...a)),ve=(...a)=>ts(async()=>{const{findEventPair:s}=await import("./event-imagery-CNUmphKB.js");return{findEventPair:s}},__vite__mapDeps([39,40,22,1,2,23,24,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,25,26,27,28,29,30,31,32,33,20,21,34,35,38])).then(({findEventPair:s})=>s(...a));function me(a,s,e,o){return a.missing==="before"?t("orbitalWatch.popup.compareNoBefore",{date:o}):a.windowEndMs>=e?t("orbitalWatch.popup.compareNoAfter",{date:o}):t("orbitalWatch.popup.compareNoAfterWindow",{date:o,days:Math.round((a.windowEndMs-s)/864e5)})}function he(a,s,e,o){const n=e.eventCompare,i=a.querySelector("[data-orbital-event-compare]"),l=a.querySelector("[data-orbital-event-status]");if(!n||!i||!l)return;const c=re(n.eventMs),r=u=>{l.textContent=u,l.hidden=!1,e.onLayout()};i.addEventListener("click",()=>{i.disabled=!0,r(t("orbitalWatch.popup.compareSearching",{date:c}));const u=n.findPair??ve,d=(e.now??Date.now)();u(s.point,n.eventMs,d,{signal:o}).catch(()=>({status:"failed"})).then(v=>{if(!o.aborted){if(i.disabled=!1,v.status==="ok"){l.hidden=!0,n.onOpen(s,n.eventMs,v);return}r(v.status==="none"?me(v,n.eventMs,d,c):t("orbitalWatch.popup.compareFailed"))}})})}function $e(a,s,e){const o=new AbortController;let n=()=>{};const i=a.querySelector(".popup-imagery-body"),l=e.load??de;if(!i)return()=>{};const c=!(s.kind==="point"&&s.ownNextPass);let r=null;const u=async h=>{var y,f;k(i,x(ue(h,(e.now??Date.now)(),c,((y=e.eventCompare)==null?void 0:y.access)??null),"imagery row markup escapes every value")),(f=i.querySelector("[data-orbital-open-evidence]"))==null||f.addEventListener("click",()=>e.onOpenEvidence(s)),he(i,s,e,o.signal),e.onLayout();const m=i.querySelector("[data-orbital-image]");if(!m||!h.latest)return;const{latest:$}=h,g=await Os($.archive,$.candidates,{signal:o.signal});if(g.status!=="ok"){if(o.signal.aborted)return;if(vt(g.failure,{profileId:$.profileId,acquiredMs:Date.parse($.datetime)},(e.now??Date.now)())){const w=document.createElement("span");w.className="popup-imagery-status",w.dataset.orbitalImageProcessing="",w.textContent=t("orbitalWatch.tile.processing"),m.replaceWith(w)}else m.remove();e.onLayout();return}if(o.signal.aborted)return g.image.release();n=g.image.release;const b=document.createElement("img");b.alt=t("orbitalWatch.popup.imageAlt",{source:Vs($.profileId)}),b.decoding="async",b.src=g.image.objectUrl,m.appendChild(b),e.onLayout()};let d=Promise.resolve();const v=h=>{o.signal.aborted||(r=h,d=u(h))};return l(s,o.signal,v).then(async h=>{if(o.signal.aborted)return;const m=i.querySelector("[data-orbital-next-pass]");if(r&&r.latest===h.latest&&r.imageSearchFailed===h.imageSearchFailed&&(m||!c)){m&&k(m,x(Gs(h),"next pass markup escapes every value"));const $=i.querySelector("[data-orbital-credit]");return $&&k($,x(Ks(h,c),"credit markup escapes every value")),e.onLayout(),d}return u(h)}).catch(()=>{o.signal.aborted||(k(i,x(`<span class="popup-imagery-status">${U("unavailable")}</span>`,"static locale string")),e.onLayout())}),()=>{o.abort(),n()}}function vp(a,s=js){return s&&Bs(a)?a:null}const O=(a,s)=>p(t(`orbitalWatch.popup.fire.${a}`,s));function ge(a){return a>=80?O("confidenceHigh"):a>=50?O("confidenceNominal"):a>0?O("confidenceLow"):null}function B(a,s){return`<div class="popup-stat"><span class="stat-label">${O(a)}</span><span class="stat-value">${s}</span></div>`}function be(a){const s=zs(a.satellite),e=ge(a.confidence),o=Number.isFinite(a.frp)&&a.frp>0?O("powerValue",{value:a.frp.toFixed(1)}):null;return`
    <div class="popup-header fire-detection">
      <span class="popup-title">${O("title")}</span>
      <button class="popup-close" aria-label="${p(t("common.close"))}">×</button>
    </div>
    <div class="popup-body">
      <div class="popup-stats">
        ${B("detected",p(hs(a.detected_at??NaN)))}
        ${s.label?B("satellite",p(s.label)):""}
        ${e?B("confidence",e):""}
        ${o?B("power",o):""}
        ${a.region?B("region",p(a.region)):""}
        ${B("source",O("sourceCredit"))}
      </div>
      <div class="popup-section popup-fire-mosaic" data-fire-mosaic aria-live="polite">
        <span class="section-label">${O("mosaicTitle")}</span>
        <div class="popup-fire-mosaic-body"><span class="popup-imagery-status">${O("mosaicLoading")}</span></div>
      </div>
    </div>`}const ye=a=>`<span class="popup-imagery-status">${p(a)}</span>`,qs=a=>new Intl.DateTimeFormat(z(),{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(Date.parse(`${a}T00:00:00Z`));function fe(a){return a.reason==="no-layer"?t("orbitalWatch.popup.fire.mosaicNoLayer"):t("orbitalWatch.popup.fire.mosaicNone",{source:a.source??"",date:qs(a.date)})}function we(a,s,e){const o=new AbortController;let n=()=>{};const i=a.querySelector("[data-fire-mosaic] .popup-fire-mosaic-body");if(!i)return()=>{};const l=r=>{k(i,x(ye(r),"locale string, escaped")),e.onLayout()};return(e.load??ee)({lat:s.lat,lon:s.lon},s.detected_at??NaN,s.satellite,{signal:o.signal}).then(async r=>{var h;if(o.signal.aborted)return;if(r.status==="failed")return l(t("orbitalWatch.popup.fire.mosaicUnavailable"));if(r.status==="none")return l(fe(r));const u=qs(r.date),d=await Os(r.archive,r.candidates,{signal:o.signal});if(o.signal.aborted){d.status==="ok"&&d.image.release();return}if(d.status!=="ok")return l(t("orbitalWatch.popup.fire.mosaicUnavailable"));n=d.image.release;const v=document.createElement("img");v.alt=t("orbitalWatch.popup.fire.mosaicAlt",{source:r.source,date:u}),v.decoding="async",v.addEventListener("load",()=>{o.signal.aborted||!ht(v,r.pointInCrop)||(n(),n=()=>{},l(t("orbitalWatch.popup.fire.mosaicNone",{source:r.source,date:u})))}),v.src=d.image.objectUrl,k(i,x(`<div class="popup-imagery-frame" data-fire-mosaic-image></div>
      <span class="popup-imagery-status">${p(t("orbitalWatch.popup.fire.mosaicCaption",{source:r.source,date:u}))}</span>
      <span class="popup-imagery-source">${p(Hs.gibs)}</span>`,"locale strings, escaped")),(h=i.querySelector("[data-fire-mosaic-image]"))==null||h.appendChild(v),e.onLayout()}).catch(()=>{o.signal.aborted||l(t("orbitalWatch.popup.fire.mosaicUnavailable"))}),()=>{o.abort(),n()}}class Ce{mount(s,e){if(!e.length)return;const o=e.reduce(($,g)=>$+g.share,0)||1,n=80,i=n/2,l=n/2,c=34,r=18,u=window.devicePixelRatio||1,d=document.createElement("canvas");d.width=n*u,d.height=n*u,d.style.width=`${n}px`,d.style.height=`${n}px`,d.className="popup-hs2-ring-canvas";const v=d.getContext("2d");if(!v)return;v.scale(u,u);let h=-Math.PI/2;e.forEach($=>{const g=$.share/o*2*Math.PI;v.beginPath(),v.arc(i,l,c,h,h+g),v.arc(i,l,r,h+g,h,!0),v.closePath(),v.fillStyle=$.color,v.fill(),h+=g}),s.appendChild(d);const m=document.createElement("div");m.className="popup-hs2-ring-legend",e.forEach($=>{const g=document.createElement("div");g.className="popup-hs2-ring-legend-item";const b=document.createElement("span");b.className="popup-hs2-ring-dot",b.style.background=$.color;const y=document.createElement("span");y.className="popup-hs2-ring-label",y.textContent=$.label;const f=document.createElement("span");f.className="popup-hs2-ring-pct",f.textContent=`${$.share}%`,g.appendChild(b),g.appendChild(y),g.appendChild(f),m.appendChild(g)}),s.appendChild(m)}}const J={news:.35,cii:.25,geo:.25,military:.15},Ys=1440*60*1e3,Ls=48;function Se(a){return a.escalationScore??3}function ke(a,s,e){return Math.min(100,a*15+(s?30:0)+e*5)}function xe(a){return a??30}function Ee(a,s){return a===0?0:Math.min(100,a+s*10)}function Te(a,s){return Math.min(100,a*10+s*15)}function Pe(a){return{newsActivity:ke(a.newsMatches,a.hasBreaking,a.newsVelocity),ciiContribution:xe(a.ciiScore),geoConvergence:Ee(a.geoAlertScore,a.geoAlertTypes),militaryActivity:Te(a.flightsNearby,a.vesselsNearby)}}function Le(a){return a.newsActivity*J.news+a.ciiContribution*J.cii+a.geoConvergence*J.geo+a.militaryActivity*J.military}function Me(a){return 1+a/100*4}function Ae(a,s){return a*.3+s*.7}function Ie(a,s){const e=s-Ys,o=a.filter(n=>n.timestamp>=e);return o.length>Ls?o.slice(-Ls):o}function De(a){if(a.length<3)return"stable";let s=0,e=0,o=0,n=0,i=0;for(let r=0;r<a.length;r++){const u=a[r];u&&(s+=i,e+=u.score,o+=i*u.score,n+=i*i,i++)}if(i<3)return"stable";const l=i*n-s*s;if(l===0)return"stable";const c=(i*o-s*e)/l;return c>.1?"escalating":c<-.1?"de-escalating":"stable"}function Re(a,s,e){const{now:o,previousHistory:n}=e,i=Se(a),l=Pe(s),c=Le(l),r=Me(c),u=Ae(i,r),d=Ie(n??[],o);return d.push({timestamp:o,score:u}),{hotspotId:a.id,staticBaseline:i,dynamicScore:Math.round(r*10)/10,combinedScore:Math.round(u*10)/10,trend:De(d),components:l,history:d,lastUpdated:new Date(o)}}function Ne(a,s){if(a.length<2)return null;const e=s-Ys,o=a.find(i=>i.timestamp>=e),n=a[a.length-1];return!o||!n?null:{change:Math.round((n.score-o.score)*10)/10,start:Math.round(o.score*10)/10,end:Math.round(n.score*10)/10}}function Fe(a,s,e,o=200){let n=0,i=0;for(const l of s)gs(a.lat,a.lon,l.lat,l.lon)<=o&&n++;for(const l of e)gs(a.lat,a.lon,l.lat,l.lon)<=o&&i++;return{flights:n,vessels:i}}function Qs(a){return et.find(s=>s.id===a)}const Ue={tehran:"IR",moscow:"RU",beijing:"CN",kyiv:"UA",taipei:"TW",telaviv:"IL",pyongyang:"KP",sanaa:"YE",riyadh:"SA",ankara:"TR",damascus:"SY",caracas:"VE",dc:"US",london:"GB",brussels:"BE",baghdad:"IQ",beirut:"LB",doha:"QA",abudhabi:"AE",mexico:"MX",havana:"CU",nuuk:"GL",sahel:["ML","NE","BF"],haiti:"HT",horn_africa:["ET","SO","SD"],pak_afghan:["PK","AF"],silicon_valley:"US",wall_street:"US",houston:"US",cairo:"EG"};function _e(a){const s=Ue[a];return s?Array.isArray(s)?[...s]:[s]:[]}function Oe(a,s){const e=_e(a).map(s).filter(o=>o!==null);return e.length>0?Math.max(...e):null}const es=new Map;let rs=null,cs=null;function mp(a){rs=a}function hp(a){cs=a}function He(a){return rs?Oe(a,rs):null}function je(a){return cs?cs(a.lat,a.lon,150):null}function We(a,s){var n;const e=Qs(a);if(!e)throw new Error(`Hotspot not found: ${a}`);const o=Re(e,s,{now:Date.now(),previousHistory:(n=es.get(a))==null?void 0:n.history});return es.set(a,o),o}function ze(a){return es.get(a)??null}let us={flights:[],vessels:[]};function $p(a,s){us={flights:a,vessels:s}}function gp(a,s,e,o){const n=Qs(a);if(!n)return null;const i=He(a),l=je(n),c=Fe(n,us.flights,us.vessels),r={newsMatches:s,hasBreaking:e,newsVelocity:o,ciiScore:i,geoAlertScore:(l==null?void 0:l.score)??0,geoAlertTypes:(l==null?void 0:l.types)??0,flightsNearby:c.flights,vesselsNearby:c.vessels};return We(a,r)}function Be(a){const s=es.get(a);return s?Ne(s.history,Date.now()):null}async function Ve(a){return new Dt(Rt(),{fetch:(e,o)=>globalThis.fetch(e,{...o,signal:AbortSignal.timeout(15e3)})}).getNetworkInfo({ip:a})}const I=a=>p(t(`popups.cyberThreat.network.${a}`)),Ge=a=>`<button type="button" class="cyber-copy" data-copy-network="${p(a)}" aria-label="${I("copy")}: ${p(a)}">${I("copy")}</button>`,R=(a,s,e=!1)=>`<div class="popup-stat"><span class="stat-label">${I(a)}</span><span class="stat-value">${p(s||t("popups.cyberThreat.network.unknown"))}${s&&e?Ge(s):""}</span></div>`,Ms=a=>a&&Number.isFinite(Date.parse(a))?new Date(a).toLocaleString():"";function Ke(){return`<p class="popup-description">${I("privacy")}</p>
    <details class="cyber-network-info"><summary>${I("title")}</summary>
    <p class="popup-description">${I("disclaimer")}</p>
    <div class="cyber-network-result" role="status" aria-live="polite"></div>
    <span class="cyber-copy-status" role="status" aria-live="polite"></span>
  </details>`}function qe(a){var i;const e={disabled:"disabled",invalid:"invalid",unavailable:"unavailable",rate_limited:"rateLimited",no_data:"noData"}[a.status];if(e&&a.status!=="no_data")return`<p class="popup-description">${I(e)}</p>`;if(!e&&a.status!=="available"&&a.status!=="partial")return`<p>${I("unavailable")}</p>`;const o=`https://stat.ripe.net/${encodeURIComponent(a.ip)}`,n=(a.asns||[]).map(l=>R("asn",`AS${l.asn}`,!0)+R("operator",l.holder)).join("");return`${e?`<p class="popup-description">${I(e)}</p>`:""}
    ${a.status==="partial"?`<p class="popup-description">${I("partial")}</p>`:""}
    <div class="popup-stats">${R("ip",a.ip,!0)}${n||R("asn","")+R("operator","")}
      ${R("prefix",a.prefix,!0)}${(i=a.hostnames)!=null&&i.length?a.hostnames.map(l=>R("hostname",l,!0)).join(""):R("hostname","")}
      ${R("lookupAt",Ms(a.lookupAt))}${a.routingAt?R("routingAt",Ms(a.routingAt)):""}
    </div>
    ${a.isLessSpecific?`<p class="popup-description">${I("broaderPrefix")}</p>`:""}
    <p class="popup-description">${I("rdnsNote")}</p>
    <a class="popup-link" href="${p(o)}" target="_blank" rel="noopener noreferrer">RIPEstat / RIPE NCC · RIS / WHOIS ↗</a>`}function Ye(a,s,e){const o=a.querySelector(".cyber-network-info"),n=o==null?void 0:o.querySelector(".cyber-network-result");if(!o||!n)return;let i=!1;o.addEventListener("toggle",async()=>{if(a.isConnected&&(e(),!(!o.open||i))){i=!0,n.textContent=t("popups.cyberThreat.network.loading");try{const l=await Ve(s);if(!a.isConnected)return;k(n,x(qe(l),"escaped passive network lookup fields"))}catch{if(!a.isConnected)return;n.textContent=t("popups.cyberThreat.network.unavailable")}e()}}),o.addEventListener("click",async l=>{const c=l.target.closest("[data-copy-network]");if(!(c!=null&&c.dataset.copyNetwork))return;const r=o.querySelector(".cyber-copy-status"),u=await at(c.dataset.copyNetwork);r&&(r.textContent=t(u?"popups.cyberThreat.network.copied":"popups.cyberThreat.network.copyFailed"))})}function Qe(a){return a.trim().replace(/&/g," and ").replace(/[^A-Za-z0-9]+/g," ").trim().toLowerCase().split(/\s+/).filter(Boolean).map((e,o)=>o===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join("")}function W(a,s){if(!s)return null;const e=Qe(s);if(!e)return null;const o=`${a}.${e}`,n=t(o);return typeof n=="string"&&n&&n!==o?n:null}function $s(a){try{return a.toLocaleUpperCase(z())}catch{return a.toUpperCase()}}function P(a,s={}){const e=W("popups.levels",a)??a??"";return s.upper===!1?e:$s(e)}function A(a,s={}){const e=W("popups.statusValues",a)??a??"";return s.upper===!1?e:$s(e)}function Ze(a){return W("popups.aptTactics",a)??a}const Xe={ngos:"ngo"};function Je(a){const s=Xe[a.trim().toLowerCase()];return W("popups.aptSectors",s??a)??a}const sa={thunderstorms:"thunderstorm",orage:"thunderstorm",orages:"thunderstorm",pluie:"rain","pluie periode humide":"rain",forestfire:"forest fire","aviso de lluvias de nivel amarillo":"yellow rain warning","aviso de lluvias de nivel naranja":"orange rain warning","aviso de tormentas de nivel amarillo":"yellow thunderstorm warning","wind yellow warning":"yellow wind warning","rain yellow":"yellow rain warning"};function ta(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function ea(a,s={}){if(!a)return"";const e=ta(a),o=e&&W("popups.weatherEvents",sa[e]??e)||a;return s.upper?$s(o):o}function aa(a){return W("popups.datacenter.sectors",a)??a}const pa={ugs:"UGS",spr:"SPR"};function oa(a){return a?pa[a]??W("popups.storageFacility.types",a)??a:""}const na={"united states of america":"US","united states":"US",usa:"US","korea (republic of)":"KR","republic of korea":"KR","korea, republic of":"KR","south korea":"KR","north korea":"KP","russian federation":"RU","iran (islamic republic of)":"IR","viet nam":"VN","taiwan, province of china":"TW","united kingdom of great britain and northern ireland":"GB",uk:"GB",uae:"AE","czech republic":"CZ",turkey:"TR",türkiye:"TR"};let As=null;function ia(){const a=new Map;let s=null;try{s=new Intl.DisplayNames(["en"],{type:"region"})}catch{return a}const e=65;for(let o=0;o<26;o++)for(let n=0;n<26;n++){const i=String.fromCharCode(e+o,e+n);try{const l=s.of(i);l&&l!==i&&!a.has(l.toLowerCase())&&a.set(l.toLowerCase(),i)}catch{}}return a}function ds(a){const s=a.trim().toLowerCase();if(!s)return null;if(/^[a-z]{2}$/.test(s))return s.toUpperCase();const e=na[s];return e||(As??(As=ia()),As.get(s)??_s(s))}function H(a){if(!a)return"";const s=z(),e=ds(a);if(!e||s==="en")return a;try{const o=new Intl.DisplayNames([s],{type:"region"}).of(e);return o&&o!==e?o:a}catch{return a}}function Is(a,s){if(!a||!s)return!1;const e=n=>n.normalize("NFKC").trim().toLowerCase().replace(/\s+/g," ");if(e(a)===e(s))return!0;const o=ds(a);return o!==null&&o===ds(s)}const la=new Set(["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]),ra=/^(\d+(?:\.\d+)?)\s?km\s+([NSEW]{1,3})\s+of\s+(.+)$/;function ca(a){if(!a)return"";if(z()==="en")return a;const s=ra.exec(a.trim());if(!s)return a;const[,e,o,n]=s;if(!e||!o||!n||!la.has(o))return a;const i=W("popups.compass",o.toLowerCase());if(!i)return a;const l=t("popups.earthquake.relativePlace",{distance:e,direction:i,place:n});return l&&l!=="popups.earthquake.relativePlace"?l:a}const ua=/^(.*)\s\((\d+) reports?\)$/;function da(a){if(!a)return null;const s=ua.exec(a.trim());if(!(s!=null&&s[1]))return null;const e=Number(s[2]);return Number.isFinite(e)?{place:s[1].trim(),count:e}:null}const is={suez:[{label:"Energy",share:30,color:"#f97316"},{label:"Machinery",share:22,color:"#3b82f6"},{label:"Chemicals",share:16,color:"#a855f7"},{label:"Food",share:14,color:"#22c55e"},{label:"Other",share:18,color:"#64748b"}],malacca_strait:[{label:"Energy",share:34,color:"#f97316"},{label:"Electronics",share:25,color:"#3b82f6"},{label:"Chemicals",share:14,color:"#a855f7"},{label:"Food",share:12,color:"#22c55e"},{label:"Other",share:15,color:"#64748b"}],hormuz_strait:[{label:"Energy",share:78,color:"#f97316"},{label:"Chemicals",share:9,color:"#a855f7"},{label:"Food",share:7,color:"#22c55e"},{label:"Other",share:6,color:"#64748b"}],bab_el_mandeb:[{label:"Energy",share:32,color:"#f97316"},{label:"Machinery",share:20,color:"#3b82f6"},{label:"Chemicals",share:15,color:"#a855f7"},{label:"Food",share:13,color:"#22c55e"},{label:"Other",share:20,color:"#64748b"}],panama:[{label:"Bulk",share:28,color:"#eab308"},{label:"Energy",share:18,color:"#f97316"},{label:"Containers",share:35,color:"#3b82f6"},{label:"Other",share:19,color:"#64748b"}],taiwan_strait:[{label:"Electronics",share:40,color:"#3b82f6"},{label:"Machinery",share:22,color:"#6366f1"},{label:"Energy",share:14,color:"#f97316"},{label:"Chemicals",share:12,color:"#a855f7"},{label:"Other",share:12,color:"#64748b"}],cape_of_good_hope:[{label:"Bulk",share:35,color:"#eab308"},{label:"Energy",share:22,color:"#f97316"},{label:"Containers",share:28,color:"#3b82f6"},{label:"Other",share:15,color:"#64748b"}],gibraltar:[{label:"Containers",share:30,color:"#3b82f6"},{label:"Energy",share:25,color:"#f97316"},{label:"Bulk",share:20,color:"#eab308"},{label:"Other",share:25,color:"#64748b"}],bosphorus:[{label:"Energy",share:58,color:"#f97316"},{label:"Bulk",share:18,color:"#eab308"},{label:"Containers",share:14,color:"#3b82f6"},{label:"Other",share:10,color:"#64748b"}]};function va(a){const n=2*Math.PI*28;let i=0;const l=a.map(r=>{const u=r.share/100*n,d=`<circle cx="36" cy="36" r="28" fill="none" stroke="${r.color}" stroke-width="10" stroke-dasharray="${u.toFixed(2)} ${(n-u).toFixed(2)}" stroke-dashoffset="${(-i).toFixed(2)}" />`;return i+=u,d}),c=a.map(r=>`<span class="sector-legend-item"><span class="sector-dot" style="background:${r.color}"></span>${p(r.label)}&nbsp;${r.share}%</span>`).join(" · ");return`
    <div class="sector-ring-wrap">
      <svg width="72" height="72" viewBox="0 0 72 72" style="transform:rotate(-90deg)">${l.join("")}</svg>
      <div class="sector-legend">${c}</div>
    </div>`}function ma(a){return a==="POSITION_SOURCE_WINGBITS"?'<a href="https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor" target="_blank" rel="noopener" style="color:inherit">wingbits.com</a>':a==="POSITION_SOURCE_OPENSKY"?'<a href="https://opensky-network.org" target="_blank" rel="noopener" style="color:inherit">opensky-network.org</a>':p(a)}function ha(a){if(!a)return p(t("popups.militaryFlight.attribution"));const e={"adsb.lol":{label:"adsb.lol (ODbL)",url:"https://api.adsb.lol"},"airplanes.live":{label:"airplanes.live",url:"https://api.airplanes.live"},"adsb.fi":{label:"adsb.fi",url:"https://opendata.adsb.fi"},wingbits:{label:"Wingbits",url:"https://wingbits.com"},opensky:{label:"OpenSky Network",url:"https://opensky-network.org"}}[a],o=e?`<a href="${e.url}" target="_blank" rel="noopener" style="color:inherit">${e.label}</a>`:p(a);return`${p(t("popups.source"))}: ${o}`}function ss(a){if(!a)return"—";const s=new Date(a.includes("T")?a:a.replace(" ","T")+"Z");return Number.isNaN(s.getTime())?"—":s.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function Ds(a){return a===void 0||a===0?"":`<span style="color:${a>0?"#f97316":"#22c55e"};font-size:calc(10px * var(--wm-panel-effective-scale, 1));margin-left:3px">${a>0?"+":""}${a}m</span>`}const $a={nws:"US National Weather Service",eccc:"Environment and Climate Change Canada",swic:"WMO Severe Weather Information Centre",imd:"India Meteorological Department"};function Rs(a){if(!a)return null;try{const s=new URL(a.trim());return s.protocol==="https:"||s.protocol==="http:"?s:null}catch{return null}}const E=class E{constructor(s){C(this,"container");C(this,"popup",null);C(this,"reservoirScan",null);C(this,"onClose");C(this,"cableAdvisories",[]);C(this,"repairShips",[]);C(this,"chokepointData",null);C(this,"transitChart",null);C(this,"isMobileSheet",!1);C(this,"sheetTouchStartY",null);C(this,"sheetCurrentOffset",0);C(this,"mobileDismissThreshold",96);C(this,"outsideDismissArmed",!1);C(this,"outsideDismissArmTimeoutId",null);C(this,"mapPopupHistoryOpen",null);C(this,"disposeImagery",null);C(this,"disposeFireMosaic",null);C(this,"lastPositionedHeight",null);C(this,"armOutsideDismiss",()=>{this.outsideDismissArmed=!0});C(this,"handleOutsideClick",s=>{this.outsideDismissArmed&&this.popup&&!this.popup.contains(s.target)&&this.hide()});C(this,"handleEscapeKey",s=>{s.key==="Escape"&&this.hide()});C(this,"handleSheetTouchStart",s=>{var o;if(!this.popup||!this.isMobileSheet||s.touches.length!==1)return;const e=s.target;if(e!=null&&e.closest(".popup-body")&&this.popup.scrollTop>0){this.sheetTouchStartY=null;return}this.sheetTouchStartY=((o=s.touches[0])==null?void 0:o.clientY)??null,this.sheetCurrentOffset=0,this.popup.classList.add("dragging")});C(this,"handleSheetTouchMove",s=>{var n;if(!this.popup||!this.isMobileSheet||this.sheetTouchStartY===null)return;const e=(n=s.touches[0])==null?void 0:n.clientY;if(e==null)return;const o=Math.max(0,e-this.sheetTouchStartY);o<=0||(this.sheetCurrentOffset=o,this.popup.style.transform=`translate3d(0, ${o}px, 0)`,s.preventDefault())});C(this,"handleSheetTouchEnd",()=>{if(!this.popup||!this.isMobileSheet||this.sheetTouchStartY===null)return;const s=this.sheetCurrentOffset>=this.mobileDismissThreshold;if(this.popup.classList.remove("dragging"),this.sheetTouchStartY=null,s){this.hide();return}this.sheetCurrentOffset=0,this.popup.style.transform="",this.popup.classList.add("open")});this.container=s}setChokepointData(s){this.chokepointData=s}mountImagery(s){const e=ms(s.type,s.data),o=this.popup;if(!e||!o)return;const n=o.querySelector(".popup-body")??o,i=()=>{const l=document.createElement("div");k(l,x(ne(),"static locale strings"));const c=l.firstElementChild;if(!c)return;n.appendChild(c);const r=pe(s.type,s.data);let u,d=null;if(r!==null){const h=q(K())?"open":"locked";if(h==="locked"&&ns("orbital-event-compare"),u={eventMs:r,access:h,onOpen:(m,$,g)=>{this.hide();const b={point:m.point,eventMs:$,pair:g};window.dispatchEvent(new CustomEvent(Kt,{detail:b}))}},h==="locked"){const m=(b=K())=>{var y;this.popup!==o||!q(b)||((y=this.disposeImagery)==null||y.call(this),this.disposeImagery=null,c.remove(),i())},$=Ut(b=>m(b)),g=_t(()=>m());d=()=>{$(),g()}}}const v=$e(c,e,{eventCompare:u,onLayout:()=>{this.popup===o&&!this.isMobileSheet&&this.clampPopupToViewport()},onOpenEvidence:h=>{this.hide(),window.dispatchEvent(new CustomEvent(Gt,{detail:h.point}))}});this.disposeImagery=()=>{d==null||d(),v()}};i()}mountFireMosaic(s){const e=this.popup;e&&(this.disposeFireMosaic=we(e,s,{onLayout:()=>{this.popup===e&&!this.isMobileSheet&&this.clampPopupToViewport()}}))}show(s){var c,r,u;this.hide("replacement"),this.isMobileSheet=ct(),this.popup=document.createElement("div"),this.popup.className=this.isMobileSheet?"map-popup map-popup-sheet":"map-popup";const e=this.renderContent(s),o=oe(s.type,s.data);k(this.popup,x(this.isMobileSheet?`<button class="map-popup-sheet-handle" aria-label="${t("common.close")}"></button>${e}`:e,"legacy direct innerHTML migration")),this.hydrateReservoirSections(this.popup);const n=this.container.getBoundingClientRect();this.isMobileSheet?(this.popup.style.left="",this.popup.style.top="",this.popup.style.transform=""):this.positionDesktopPopup(s,n),s.type==="fireDetection"&&o&&this.mountFireMosaic(s.data),o&&this.mountImagery(s),document.body.appendChild(this.popup);let i=null;if(!this.isMobileSheet){const d=s.type,v=this.popup,h=this.lastPositionedHeight;requestAnimationFrame(()=>{setTimeout(()=>{this.popup!==v||i||this.refreshHeightCache(d,s,n,h)},0)})}if(s.type==="datacenter"&&((c=this.popup.querySelector(".datacenter-details"))==null||c.addEventListener("toggle",()=>{this.clampPopupToViewport()})),s.type==="cyberThreat"&&s.data.indicatorType==="ip"&&Ye(this.popup,s.data.indicator,()=>this.clampPopupToViewport()),s.type==="waterway"){const d=s.data,v=(u=(r=this.chokepointData)==null?void 0:r.chokepoints)==null?void 0:u.find(b=>b.id===d.chokepointId),h=this.popup.querySelector("[data-transit-chart]"),m=(v==null?void 0:v.id)??"",$=q(K());if(h&&m&&$){const b=E.historyCache.get(m);b&&b.length?(this.transitChart=new Cs,this.transitChart.mount(h,b)):E.historyInflight.has(m)||(E.historyInflight.add(m),pt(m).then(y=>{var w;E.historyInflight.delete(m);const f=(w=this.popup)==null?void 0:w.querySelector(`[data-transit-chart-id="${m}"]`);f&&(y.history.length?(E.historyCache.set(m,y.history),f.textContent="",this.transitChart=new Cs,this.transitChart.mount(f,y.history)):f.textContent=t("components.supplyChain.historyUnavailable")||"History unavailable")}).catch(()=>{var f;E.historyInflight.delete(m);const y=(f=this.popup)==null?void 0:f.querySelector(`[data-transit-chart-id="${m}"]`);y&&(y.textContent=t("components.supplyChain.historyUnavailable")||"History unavailable")}))}m&&!$&&ns("chokepoint-transit-chart");const g=is[d.chokepointId];if(g!=null&&g.length){const b=this.popup.querySelector(`[data-hs2-ring="${d.chokepointId}"]`);b?new Ce().mount(b,g):q(K())||ns("chokepoint-sector-ring")}}const l=this.popup;if(this.popup.addEventListener("click",d=>{var g;const v=d.target,h=v.closest("[data-vessel-index]");if(h&&s.type==="militaryVesselCluster"&&!i){d.stopPropagation();const b=Number(h.dataset.vesselIndex),y=Number.isInteger(b)&&b>=0?s.data.vessels[b]:void 0;if(!y)return;i={nodes:Array.from(l.childNodes),scroll:l.scrollTop,member:h},k(l,x((this.isMobileSheet?`<button class="map-popup-sheet-handle" aria-label="${t("common.close")}"></button>`:"")+this.renderMilitaryVesselPopup(y,!0),"naval group member details")),l.scrollTop=0,this.clampPopupToViewport(),(g=l.querySelector(".popup-back"))==null||g.focus({preventScroll:!0});return}if(v.closest(".popup-back")&&i){d.stopPropagation();const b=i;l.replaceChildren(...b.nodes),i=null,this.clampPopupToViewport(),l.scrollTop=b.scroll,b.member.focus({preventScroll:!0});return}if(v.closest(".popup-close")||v.closest(".map-popup-sheet-handle")){this.hide();return}const m=v.closest("[data-open-storage-atlas]");if(m!=null&&m.dataset.openStorageAtlas){window.dispatchEvent(new CustomEvent("wm:open-storage-atlas",{detail:{facilityId:m.dataset.openStorageAtlas}})),this.hide();return}const $=v.closest(".cluster-toggle");if($){d.stopPropagation();const b=$.previousElementSibling;if(!b)return;const y=b.style.display!=="none";b.style.display=y?"none":"",$.textContent=y?$.dataset.more??"":$.dataset.less??"",this.clampPopupToViewport()}}),this.isMobileSheet){this.mapPopupHistoryOpen=bs.openCancelable("map-popup",v=>this.hide(v)),this.popup.addEventListener("touchstart",this.handleSheetTouchStart,{passive:!0}),this.popup.addEventListener("touchmove",this.handleSheetTouchMove,{passive:!1}),this.popup.addEventListener("touchend",this.handleSheetTouchEnd),this.popup.addEventListener("touchcancel",this.handleSheetTouchEnd);const d=this.popup;requestAnimationFrame(()=>{this.popup===d&&(d.classList.add("open"),d.addEventListener("transitionend",()=>{this.popup===d&&(d.style.willChange="auto")},{once:!0}))})}this.listenForOutsideDismiss()}showRouteBreakdown(s,e,o,n){var f,w;this.hide();const i=((f=this.chokepointData)==null?void 0:f.chokepoints)??[],l=((w=e.map(S=>{var L;return{id:S,score:((L=i.find(_=>_.id===S))==null?void 0:L.disruptionScore)??0}}).sort((S,L)=>L.score-S.score)[0])==null?void 0:w.id)??e[0]??"",c=i.find(S=>S.id===l),r=l?is[l]??[]:[],u={WAR_RISK_TIER_WAR_ZONE:t("popups.mapPopup.warZone"),WAR_RISK_TIER_CRITICAL:P("critical",{upper:!1}),WAR_RISK_TIER_HIGH:P("high",{upper:!1}),WAR_RISK_TIER_ELEVATED:P("elevated",{upper:!1}),WAR_RISK_TIER_NORMAL:P("normal",{upper:!1})},d={WAR_RISK_TIER_WAR_ZONE:"#ef4444",WAR_RISK_TIER_CRITICAL:"#ef4444",WAR_RISK_TIER_HIGH:"#f59e0b",WAR_RISK_TIER_ELEVATED:"#f59e0b",WAR_RISK_TIER_NORMAL:"var(--text-dim,#888)"},v=(c==null?void 0:c.warRiskTier)??"WAR_RISK_TIER_NORMAL",h=(c==null?void 0:c.disruptionScore)??0,m=h>70?"#ef4444":h>30?"#f59e0b":"var(--text-dim,#888)",$=r.slice(0,2),g=$.length?$.map(S=>`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:6px"><span style="width:8px;height:8px;border-radius:50%;background:${S.color};display:inline-block"></span><span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1))">${p(S.label)} ${S.share}%</span></span>`).join(""):`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));opacity:.5">${t("popups.mapPopup.noSectorData")}</span>`,b=`
      <div class="popup-header">
        <span class="popup-title" style="font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${p(s.routeName)}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body" style="padding:8px 12px;min-width:200px">
        ${c?`<div style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));font-weight:600;margin-bottom:6px">${p(c.name)}</div>`:""}
        <div style="display:flex;gap:10px;margin-bottom:6px">
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));opacity:.6">${t("popups.mapPopup.disruption")}</span>
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${m}">${h}/100</span>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:6px">
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));opacity:.6">${t("popups.mapPopup.warRisk")}</span>
          <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;color:${d[v]??"inherit"}">${u[v]??P("normal",{upper:!1})}</span>
        </div>
        <div style="margin-top:4px">${g}</div>
      </div>`;this.isMobileSheet=!1,this.popup=document.createElement("div"),this.popup.className="map-popup map-popup-route-breakdown",k(this.popup,x(b,"legacy direct innerHTML migration"));const y=this.container.getBoundingClientRect();this.positionDesktopPopup({x:o,y:n,type:"waterway",data:{}},y),document.body.appendChild(this.popup),this.popup.addEventListener("click",S=>{S.target.closest(".popup-close")&&this.hide()}),this.listenForOutsideDismiss(200)}positionDesktopPopup(s,e){if(!this.popup)return;const o=E.heightByType.get(s.type);if(o!==void 0){this.applyDesktopPosition(s,e,o);return}this.popup.style.visibility="hidden",this.popup.style.top="0",this.popup.style.left="-9999px",document.body.appendChild(this.popup);const n=this.popup.offsetHeight;document.body.removeChild(this.popup),this.popup.style.visibility="",E.heightByType.set(s.type,n),this.applyDesktopPosition(s,e,n)}refreshHeightCache(s,e,o,n){if(!this.popup||this.isMobileSheet)return;const i=this.popup.offsetHeight;if(!(i<=0)){if(E.heightByType.set(s,i),n!==null&&Math.abs(i-n)>E.HEIGHT_DRIFT_PX){this.applyDesktopPosition(e,o,i);return}this.clampPopupToViewport()}}applyDesktopPosition(s,e,o){if(!this.popup)return;this.lastPositionedHeight=o;const n=380,i=50,l=60,c=e.left+s.x,r=e.top+s.y,u=window.innerWidth-n-20;let d=c+20;d>u&&(d=Math.max(10,c-n-20));const v=window.innerHeight-r-i,h=r-l;let m;v>=o?m=r+10:h>=o?m=r-o-10:m=l,m=Math.max(l,m);const $=window.innerHeight-o-i;$>l&&(m=Math.min(m,$)),this.popup.style.left=`${d}px`,this.popup.style.top=`${m}px`}clampPopupToViewport(){if(!this.popup||this.isMobileSheet)return;const s=this.popup.getBoundingClientRect(),e=20,o=60,n=s.bottom-(window.innerHeight-e);if(n>0){const i=Number.parseFloat(this.popup.style.top)||0;this.popup.style.top=`${Math.max(o,i-n)}px`}}listenForOutsideDismiss(s=0){this.removeOutsideDismissListeners(),this.outsideDismissArmTimeoutId=window.setTimeout(()=>{this.outsideDismissArmTimeoutId=null,this.armOutsideDismiss()},s),document.addEventListener("pointerdown",this.armOutsideDismiss,!0),document.addEventListener("touchstart",this.armOutsideDismiss,!0),document.addEventListener("keydown",this.armOutsideDismiss,!0),document.addEventListener("click",this.handleOutsideClick),document.addEventListener("touchstart",this.handleOutsideClick),document.addEventListener("keydown",this.handleEscapeKey)}removeOutsideDismissListeners(){this.outsideDismissArmed=!1,this.outsideDismissArmTimeoutId!==null&&(window.clearTimeout(this.outsideDismissArmTimeoutId),this.outsideDismissArmTimeoutId=null),document.removeEventListener("pointerdown",this.armOutsideDismiss,!0),document.removeEventListener("touchstart",this.armOutsideDismiss,!0),document.removeEventListener("keydown",this.armOutsideDismiss,!0),document.removeEventListener("click",this.handleOutsideClick),document.removeEventListener("touchstart",this.handleOutsideClick),document.removeEventListener("keydown",this.handleEscapeKey)}hide(s="control"){var e,o,n,i,l,c;(e=this.reservoirScan)==null||e.abort(),this.reservoirScan=null,(o=this.transitChart)==null||o.destroy(),this.transitChart=null,(n=this.disposeImagery)==null||n.call(this),this.disposeImagery=null,(i=this.disposeFireMosaic)==null||i.call(this),this.disposeFireMosaic=null,(l=this.mapPopupHistoryOpen)==null||l.cancel(),this.mapPopupHistoryOpen=null,this.removeOutsideDismissListeners(),this.popup&&(this.isMobileSheet&&s==="control"&&bs.close("map-popup"),this.popup.removeEventListener("touchstart",this.handleSheetTouchStart),this.popup.removeEventListener("touchmove",this.handleSheetTouchMove),this.popup.removeEventListener("touchend",this.handleSheetTouchEnd),this.popup.removeEventListener("touchcancel",this.handleSheetTouchEnd),this.popup.remove(),this.popup=null,this.isMobileSheet=!1,this.sheetTouchStartY=null,this.sheetCurrentOffset=0,(c=this.onClose)==null||c.call(this))}setCableActivity(s,e){this.cableAdvisories=s,this.repairShips=e}renderContent(s){switch(s.type){case"conflict":return this.renderConflictPopup(s.data);case"hotspot":return this.renderHotspotPopup(s.data,s.relatedNews);case"earthquake":return this.renderEarthquakePopup(s.data);case"weather":return this.renderWeatherPopup(s.data);case"base":return this.renderBasePopup(s.data);case"waterway":return this.renderWaterwayPopup(s.data);case"apt":return this.renderAPTPopup(s.data);case"cyberThreat":return this.renderCyberThreatPopup(s.data);case"nuclear":return this.renderNuclearPopup(s.data);case"economic":return this.renderEconomicPopup(s.data);case"irradiator":return this.renderIrradiatorPopup(s.data);case"pipeline":return this.renderPipelinePopup(s.data);case"storageFacility":return this.renderStorageFacilityPopup(s.data);case"cable":return this.renderCablePopup(s.data);case"cable-advisory":return this.renderCableAdvisoryPopup(s.data);case"repair-ship":return this.renderRepairShipPopup(s.data);case"outage":return this.renderOutagePopup(s.data);case"datacenter":return this.renderDatacenterPopup(s.data);case"datacenterCluster":return this.renderDatacenterClusterPopup(s.data);case"ais":return this.renderAisPopup(s.data);case"protest":return this.renderProtestPopup(s.data);case"protestCluster":return this.renderProtestClusterPopup(s.data);case"flight":return this.renderFlightPopup(s.data);case"aircraft":return this.renderAircraftPopup(s.data);case"militaryFlight":return this.renderMilitaryFlightPopup(s.data);case"militaryVessel":return this.renderMilitaryVesselPopup(s.data);case"militaryFlightCluster":return this.renderMilitaryFlightClusterPopup(s.data);case"militaryVesselCluster":return this.renderMilitaryVesselClusterPopup(s.data);case"natEvent":return this.renderNaturalEventPopup(s.data);case"port":return this.renderPortPopup(s.data);case"spaceport":return this.renderSpaceportPopup(s.data);case"mineral":return this.renderMineralPopup(s.data);case"startupHub":return this.renderStartupHubPopup(s.data);case"cloudRegion":return this.renderCloudRegionPopup(s.data);case"techHQ":return this.renderTechHQPopup(s.data);case"accelerator":return this.renderAcceleratorPopup(s.data);case"techEvent":return this.renderTechEventPopup(s.data);case"techHQCluster":return this.renderTechHQClusterPopup(s.data);case"techEventCluster":return this.renderTechEventClusterPopup(s.data);case"stockExchange":return this.renderStockExchangePopup(s.data);case"financialCenter":return this.renderFinancialCenterPopup(s.data);case"centralBank":return this.renderCentralBankPopup(s.data);case"commodityHub":return this.renderCommodityHubPopup(s.data);case"fireDetection":return be(s.data);case"iranEvent":return this.renderIranEventPopup(s.data);case"gpsJamming":return this.renderGpsJammingPopup(s.data);case"news":return this.renderNewsPopup(s.data);case"displacement":return Qt(s.data);case"crossBorder":return Xt(s.data);case"radiation":return this.renderRadiationPopup(s.data);case"reservoirLevel":return this.renderReservoirLevelPopup(s.data);default:return""}}renderNewsPopup(s){const e=ys(s.corroboration);return`
      <div class="popup-header">
        <span class="popup-title">${t("components.deckgl.tooltip.news")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body"><p>${p(s.title)}</p>${e?`<p>${e}</p>`:""}</div>
    `}renderRadiationPopup(s){const e=s.severity==="spike"?"high":"medium",o=`${s.delta>=0?"+":""}${s.delta.toFixed(1)} ${p(s.unit)}`,n=ga(s),i=ba(s.confidence),l=[s.corroborated?t("popups.mapPopup.radiation.confirmed"):"",s.conflictingSources?t("popups.mapPopup.radiation.conflictingSources"):"",s.convertedFromCpm?t("popups.mapPopup.radiation.cpmDerived"):""].filter(Boolean).join(" · ");return`
      <div class="popup-header outage">
        <span class="popup-title">☢ ${p(s.location.toUpperCase())}</span>
        <span class="popup-badge ${e}">${p(P(s.severity))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.mapPopup.radiation.reading")}</span>
            <span class="stat-value">${s.value.toFixed(1)} ${p(s.unit)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.mapPopup.radiation.baseline")}</span>
            <span class="stat-value">${s.baselineValue.toFixed(1)} ${p(s.unit)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.mapPopup.radiation.delta")}</span>
            <span class="stat-value">${o}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.mapPopup.radiation.confidence")}</span>
            <span class="stat-value">${p(i)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.mapPopup.radiation.sources")}</span>
            <span class="stat-value">${p(n)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.mapPopup.radiation.sourceCount")}</span>
            <span class="stat-value">${s.sourceCount}</span>
          </div>
        </div>
        <p class="popup-description">${p(H(s.country))} · z-score ${s.zScore.toFixed(2)} · ${p(s.freshness)}${l?` · ${p(l)}`:""}</p>
      </div>
    `}renderConflictPopup(s){const e=s.intensity==="high"?"high":s.intensity==="medium"?"medium":"low",o=p(s.intensity?P(s.intensity):t("popups.unknown").toUpperCase());return`
      <div class="popup-header conflict">
        <span class="popup-title">${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${e}">${o}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.startDate")}</span>
            <span class="stat-value">${p(s.startDate||t("popups.unknown"))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.casualties")}</span>
            <span class="stat-value">${p(s.casualties||t("popups.unknown"))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.displaced")}</span>
            <span class="stat-value">${p(s.displaced||t("popups.unknown"))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.location")}</span>
            <span class="stat-value">${p(s.location||`${s.center[1]}°N, ${s.center[0]}°E`)}</span>
          </div>
        </div>
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
        ${s.parties&&s.parties.length>0?`
          <div class="popup-section">
            <details open>
              <summary>${t("popups.belligerents")}</summary>
              <div class="popup-section-content">
                <div class="popup-tags">
                  ${s.parties.map(n=>`<span class="popup-tag">${p(n)}</span>`).join("")}
                </div>
              </div>
            </details>
          </div>
        `:""}
        ${s.keyDevelopments&&s.keyDevelopments.length>0?`
          <div class="popup-section">
            <details open>
              <summary>${t("popups.keyDevelopments")}</summary>
              <div class="popup-section-content">
                <ul class="popup-list">
                  ${s.keyDevelopments.map(n=>`<li>${p(n)}</li>`).join("")}
                </ul>
              </div>
            </details>
          </div>
        `:""}
        <div class="popup-section">
          <details class="conflict-history-details">
            <summary>📜 ${t("popups.mapPopup.historicalProfile")}</summary>
            <div class="conflict-history-content">
              <div class="popup-loading">${t("common.loading")}</div>
            </div>
          </details>
        </div>
      </div>
    `}getLocalizedHotspotSubtext(s){const o=`popups.hotspotSubtexts.${s.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}`,n=t(o);return n===o?s:n}renderHotspotPopup(s,e){const o=s.level||"low",n=p(P(s.level||"low")),i=s.subtext?this.getLocalizedHotspotSubtext(s.subtext):"",l=ze(s.id),c=Be(s.id),r={1:D("--semantic-normal"),2:D("--semantic-normal"),3:D("--semantic-elevated"),4:D("--semantic-high"),5:D("--semantic-critical")},u={1:t("popups.hotspot.levels.stable"),2:t("popups.hotspot.levels.watch"),3:t("popups.hotspot.levels.elevated"),4:t("popups.hotspot.levels.high"),5:t("popups.hotspot.levels.critical")},d={escalating:"↑",stable:"→","de-escalating":"↓"},v={escalating:D("--semantic-critical"),stable:D("--semantic-elevated"),"de-escalating":D("--semantic-normal")},h=(l==null?void 0:l.combinedScore)??s.escalationScore??3,m=Math.round(h),$=(l==null?void 0:l.trend)??s.escalationTrend??"stable",g=`
      <div class="popup-section escalation-section">
        <span class="section-label">${t("popups.hotspot.escalation")}</span>
        <div class="escalation-display">
          <div class="escalation-score" style="background: ${r[m]||D("--text-dim")}">
            <span class="score-value">${h.toFixed(1)}/5</span>
            <span class="score-label">${u[m]||t("popups.unknown")}</span>
          </div>
          <div class="escalation-trend" style="color: ${v[$]||D("--text-dim")}">
            <span class="trend-icon">${d[$]||""}</span>
            <span class="trend-label">${p($.toUpperCase())}</span>
          </div>
          ${l!=null&&l.history&&l.history.length>=3?(()=>{const f=l.history.slice(-20).map(L=>L.score),w=f[f.length-1]??3,S=w>=4?"#f44336":w>=3?"#ff9800":"#4caf50";return Ft(f,S,80,24,"opacity:0.9")})():""}
        </div>
        ${l?`
          <div class="escalation-breakdown">
            <div class="breakdown-header">
              <span class="baseline-label">${t("popups.hotspot.baseline")}: ${l.staticBaseline}/5</span>
              ${c?`
                <span class="change-label ${c.change>=0?"rising":"falling"}">
                  24h: ${c.change>=0?"+":""}${c.change}
                </span>
              `:""}
            </div>
            <div class="breakdown-components">
              <div class="breakdown-row">
                <span class="component-label">${t("popups.hotspot.components.news")}</span>
                <div class="component-bar-bg">
                  <div class="component-bar news" style="width: ${l.components.newsActivity}%"></div>
                </div>
                <span class="component-value">${Math.round(l.components.newsActivity)}</span>
              </div>
              <div class="breakdown-row">
                <span class="component-label">${t("popups.hotspot.components.cii")}</span>
                <div class="component-bar-bg">
                  <div class="component-bar cii" style="width: ${l.components.ciiContribution}%"></div>
                </div>
                <span class="component-value">${Math.round(l.components.ciiContribution)}</span>
              </div>
              <div class="breakdown-row">
                <span class="component-label">${t("popups.hotspot.components.geo")}</span>
                <div class="component-bar-bg">
                  <div class="component-bar geo" style="width: ${l.components.geoConvergence}%"></div>
                </div>
                <span class="component-value">${Math.round(l.components.geoConvergence)}</span>
              </div>
              <div class="breakdown-row">
                <span class="component-label">${t("popups.hotspot.components.military")}</span>
                <div class="component-bar-bg">
                  <div class="component-bar military" style="width: ${l.components.militaryActivity}%"></div>
                </div>
                <span class="component-value">${Math.round(l.components.militaryActivity)}</span>
              </div>
            </div>
          </div>
        `:""}
        ${s.escalationIndicators&&s.escalationIndicators.length>0?`
          <div class="escalation-indicators">
            ${s.escalationIndicators.map(f=>`<span class="indicator-tag">• ${p(f)}</span>`).join("")}
          </div>
        `:""}
      </div>
    `,b=s.history?`
      <div class="popup-section history-section">
        <details>
          <summary>${t("popups.historicalContext")}</summary>
          <div class="popup-section-content">
            <div class="history-content">
              ${s.history.lastMajorEvent?`
                <div class="history-event">
                  <span class="history-label">${t("popups.lastMajorEvent")}:</span>
                  <span class="history-value">${p(s.history.lastMajorEvent)} ${s.history.lastMajorEventDate?`(${p(s.history.lastMajorEventDate)})`:""}</span>
                </div>
              `:""}
              ${s.history.precedentDescription?`
                <div class="history-event">
                  <span class="history-label">${t("popups.precedents")}:</span>
                  <span class="history-value">${p(s.history.precedentDescription)}</span>
                </div>
              `:""}
              ${s.history.cyclicalRisk?`
                <div class="history-event cyclical">
                  <span class="history-label">${t("popups.cyclicalPattern")}:</span>
                  <span class="history-value">${p(s.history.cyclicalRisk)}</span>
                </div>
              `:""}
            </div>
          </div>
        </details>
      </div>
    `:"",y=s.whyItMatters?`
      <div class="popup-section why-matters-section">
        <details>
          <summary>${t("popups.whyItMatters")}</summary>
          <div class="popup-section-content">
            <p class="why-matters-text">${p(s.whyItMatters)}</p>
          </div>
        </details>
      </div>
    `:"";return`
      <div class="popup-header hotspot-popup">
        <span class="popup-title">${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${o}">${n}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        ${i?`<div class="popup-subtitle">${p(i)}</div>`:""}
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
        ${g}
        <div class="popup-stats">
          ${s.location?`
            <div class="popup-stat">
              <span class="stat-label">${t("popups.location")}</span>
              <span class="stat-value">${p(s.location)}</span>
            </div>
          `:""}
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${p(`${s.lat.toFixed(2)}°N, ${s.lon.toFixed(2)}°E`)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.status")}</span>
            <span class="stat-value">${p(s.status||t("popups.monitoring"))}</span>
          </div>
        </div>
        ${y}
        ${b}
        ${s.agencies&&s.agencies.length>0?`
          <div class="popup-section">
            <details open>
              <summary>${t("popups.keyEntities")}</summary>
              <div class="popup-section-content">
                <div class="popup-tags">
                  ${s.agencies.map(f=>`<span class="popup-tag">${p(f)}</span>`).join("")}
                </div>
              </div>
            </details>
          </div>
        `:""}
        ${e&&e.length>0?`
          <div class="popup-section">
            <details>
              <summary>${t("popups.relatedHeadlines")}</summary>
              <div class="popup-section-content">
                <div class="popup-news">
                  ${e.slice(0,5).map(f=>`
                    <div class="popup-news-item">
                      <span class="news-source">${p(f.source)}</span>
                      <a href="${T(f.link)}" target="_blank" class="news-title">${p(f.title)}</a>
                      ${ys(jt(Wt(f)))}
                    </div>
                  `).join("")}
                </div>
              </div>
            </details>
          </div>
        `:""}
        <div class="hotspot-gdelt-context" data-hotspot-id="${p(s.id)}">
          <div class="hotspot-gdelt-header">${t("popups.liveIntel")}</div>
          <div class="hotspot-gdelt-loading">${t("popups.loadingNews")}</div>
        </div>
      </div>
    `}async loadHotspotGdeltContext(s){if(!this.popup)return;const e=this.popup.querySelector(".hotspot-gdelt-context");if(e)try{const o=await ot(s);if(!this.popup||!e.isConnected)return;if(o.length===0){k(e,x(`
          <div class="hotspot-gdelt-header">${t("popups.liveIntel")}</div>
          <div class="hotspot-gdelt-loading">${t("popups.noCoverage")}</div>
        `,"legacy direct innerHTML migration"));return}k(e,x(`
        <div class="hotspot-gdelt-header">${t("popups.liveIntel")}</div>
        <div class="hotspot-gdelt-articles">
          ${o.slice(0,5).map(n=>this.renderGdeltArticle(n)).join("")}
        </div>
      `,"legacy direct innerHTML migration"))}catch{e.isConnected&&k(e,x(`
          <div class="hotspot-gdelt-header">${t("popups.liveIntel")}</div>
          <div class="hotspot-gdelt-loading">${t("common.error")}</div>
        `,"legacy direct innerHTML migration"))}}loadConflictHistory(s){if(!this.popup)return;const e=this.popup.querySelector(".conflict-history-details"),o=this.popup.querySelector(".conflict-history-content");if(!e||!o)return;let n=!1;const i=async()=>{var l;if(!(!e.open||n)){n=!0;try{const{fetchUcdpEvents:c,deriveConflictHistory:r}=await ts(async()=>{const{fetchUcdpEvents:m,deriveConflictHistory:$}=await import("./gdelt-intel-DU-_Fjx7.js").then(g=>g.aS);return{fetchUcdpEvents:m,deriveConflictHistory:$}},__vite__mapDeps([24,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,25,26,27,28,29,30])),u=await c();if(!this.popup||!o.isConnected)return;const{conflictSince:d,recordedFatalities:v}=r(s,u.data),h=[d?`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.history.conflictSince")}</span><span class="stat-value">${p(d)}</span></div>`:"",(l=s.peaceAgreements)!=null&&l.length?`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.history.peaceAgreements")}</span><span class="stat-value">${s.peaceAgreements.map(p).join("<br>")}</span></div>`:"",v>0?`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.history.recordedFatalities")}</span><span class="stat-value">~${v.toLocaleString()}</span></div>`:s.totalFatalities?`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.history.totalFatalities")}</span><span class="stat-value">${p(s.totalFatalities)}</span></div>`:""].filter(Boolean).join("");k(o,x(h||'<div class="popup-loading">No historical data available.</div>',"legacy direct innerHTML migration"))}catch{o.isConnected&&k(o,x('<div class="popup-loading">Could not load history.</div>',"legacy direct innerHTML migration"))}}};e.addEventListener("toggle",i,{once:!0})}async loadWingbitsLiveFlight(s){if(!this.popup)return;const e=this.popup.querySelector(".wingbits-live-section");if(e)try{const o=await nt(s);if(!this.popup||!e.isConnected)return;if(!o){k(e,x("","legacy direct innerHTML migration"));return}const n=[];let i="";if(o.photoUrl){const r=T(o.photoUrl);if(r){const u=o.photoLink?T(o.photoLink):"#",d=o.photoCredit?`<span class="flight-photo-credit">© ${p(o.photoCredit)}</span>`:"";i=`<div class="flight-photo"><a href="${u}" target="_blank" rel="noopener"><img src="${r}" alt="${p(o.callsign)}" style="width:100%;border-radius:4px;display:block"></a>${d}</div>`}}if(o.callsignIata){const r=o.airlineName?` <span style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));opacity:0.6;font-weight:400">${p(o.airlineName)}</span>`:"";n.push(`<div style="font-weight:700;font-size:calc(15px * var(--wm-panel-effective-scale, 1));margin:4px 0">${p(o.callsignIata)}${r}</div>`)}if(o.depIata&&o.arrIata){const r=o.arrTerminal?`<span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));opacity:0.5;margin-left:4px">T${p(o.arrTerminal)}</span>`:"",u=o.flightDurationMin?`<span style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));opacity:0.6">${Math.floor(o.flightDurationMin/60)}h${o.flightDurationMin%60>0?` ${o.flightDurationMin%60}m`:""}</span>`:"";n.push(`
          <div class="flight-route" style="display:flex;align-items:center;gap:6px;margin:8px 0 4px;font-weight:700;font-size:calc(18px * var(--wm-panel-effective-scale, 1))">
            <span>${p(o.depIata)}</span>
            <span style="font-size:calc(12px * var(--wm-panel-effective-scale, 1));opacity:0.4;font-weight:400">&#9992;</span>
            <span>${p(o.arrIata)}${r}</span>
            <span style="flex:1;text-align:right">${u}</span>
          </div>`);const d=ss(o.depTimeUtc),v=ss(o.arrTimeUtc),h=ss(o.depEstimatedUtc),m=ss(o.arrEstimatedUtc),$=o.depDelayedMin!==0||o.arrDelayedMin!==0;n.push(`
          <div class="flight-times" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));display:grid;grid-template-columns:1fr auto 1fr;gap:2px 8px;margin-bottom:6px;opacity:0.85">
            <span style="opacity:0.5;font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-transform:uppercase">${t("popups.mapPopup.flight.departure")}</span>
            <span></span>
            <span style="opacity:0.5;font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;text-align:right">${t("popups.mapPopup.flight.arrival")}</span>
            <span style="opacity:0.5;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">${t("popups.flight.scheduled")||"Sched"}</span><span></span><span style="opacity:0.5;font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-align:right">${t("popups.flight.scheduled")||"Sched"}</span>
            <span>${d}</span><span style="opacity:0.3;text-align:center">↔</span><span style="text-align:right">${v}</span>
            ${$?`
            <span style="opacity:0.5;font-size:calc(10px * var(--wm-panel-effective-scale, 1))">${t("popups.flight.estimated")||"Est"}</span><span></span><span style="opacity:0.5;font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-align:right">${t("popups.flight.estimated")||"Est"}</span>
            <span>${h}${Ds(o.depDelayedMin)}</span><span style="opacity:0.3;text-align:center">↔</span><span style="text-align:right">${m}${Ds(o.arrDelayedMin)}</span>`:""}
          </div>`);const g=new Date,b=`${g.getFullYear()}-${String(g.getMonth()+1).padStart(2,"0")}-${String(g.getDate()).padStart(2,"0")}`,y=T(`https://www.google.com/travel/flights/search?q=Flights+from+${encodeURIComponent(o.depIata)}+to+${encodeURIComponent(o.arrIata)}+on+${encodeURIComponent(b)}`);n.push(`<a href="${y}" target="_blank" rel="noopener" style="display:block;margin-top:8px;padding:7px 12px;background:rgba(68,255,136,.06);border:1px solid rgba(68,255,136,.18);border-radius:6px;color:var(--green,#44ff88);text-decoration:none;font-size:calc(12px * var(--wm-panel-effective-scale, 1));text-align:center">${t("popups.mapPopup.flight.bookRoute")} &rarr;</a>`)}const l=[];if(o.registration&&l.push(`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.flight.registration")}</span><span class="stat-value">${p(o.registration)}</span></div>`),o.model&&l.push(`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.flight.model")}</span><span class="stat-value">${p(o.model)}</span></div>`),o.operator&&l.push(`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.flight.operator")}</span><span class="stat-value">${p(o.operator)}</span></div>`),o.verticalRate!==0&&l.push(`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.flight.climb")}</span><span class="stat-value">${o.verticalRate>0?"+":""}${Math.round(o.verticalRate)} fpm</span></div>`),n.length===0&&l.length===0&&!i){k(e,x("","legacy direct innerHTML migration"));return}const c=l.length>0?`<div class="popup-stats">${l.join("")}</div>`:"";if(k(e,x(`
        <div class="popup-section-label" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));opacity:0.5;text-transform:uppercase;letter-spacing:.05em;margin-top:8px">${t("popups.mapPopup.flight.liveData")}</div>
        ${n.join("")}
        ${c}
        ${i}
      `,"legacy direct innerHTML migration")),this.clampPopupToViewport(),i){const r=e.querySelector("img");r&&!r.complete&&(r.addEventListener("load",()=>{this.clampPopupToViewport()},{once:!0}),r.addEventListener("error",()=>{this.clampPopupToViewport()},{once:!0}))}}catch{e.isConnected&&k(e,x("","legacy direct innerHTML migration"))}}renderGdeltArticle(s){const e=s.source||it(s.url),o=lt(s.date);return`
      <a href="${T(s.url)}" target="_blank" rel="noopener" class="hotspot-gdelt-article">
        <div class="article-meta">
          <span>${p(e)}</span>
          <span>${p(o)}</span>
        </div>
        <div class="article-title">${p(s.title)}</div>
      </a>
    `}renderEarthquakePopup(s){var r,u;const e=s.magnitude>=6?"high":s.magnitude>=5?"medium":"low",o=s.magnitude>=6?t("popups.earthquake.levels.major"):s.magnitude>=5?t("popups.earthquake.levels.moderate"):t("popups.earthquake.levels.minor"),n=this.getTimeAgo(new Date(s.occurredAt)),i=s.source==="nrcan",l=i?"Earthquakes Canada":"USGS",c=i?t("popups.viewNRCan"):t("popups.viewUSGS");return`
      <div class="popup-header earthquake">
        <span class="popup-title magnitude">M${s.magnitude.toFixed(1)}</span>
        <span class="popup-badge ${e}">${o}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <p class="popup-location" title="${p(s.place)}">${p(ca(s.place))}</p>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.depth")}</span>
            <span class="stat-value">${s.depthKm.toFixed(1)} km</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${(((r=s.location)==null?void 0:r.latitude)??0).toFixed(2)}°, ${(((u=s.location)==null?void 0:u.longitude)??0).toFixed(2)}°</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.time")}</span>
            <span class="stat-value">${n}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.source")}</span>
            <span class="stat-value">${l}</span>
          </div>
        </div>
        <a href="${T(s.sourceUrl)}" target="_blank" class="popup-link">${c} →</a>
      </div>
    `}getTimeAgo(s){const e=Math.floor((Date.now()-s.getTime())/1e3);if(e<60)return t("popups.timeAgo.s",{count:e});const o=Math.floor(e/60);if(o<60)return t("popups.timeAgo.m",{count:o});const n=Math.floor(o/60);if(n<24)return t("popups.timeAgo.h",{count:n});const i=Math.floor(n/24);return t("popups.timeAgo.d",{count:i})}renderWeatherPopup(s){const e=p(s.severity.toLowerCase()),o=this.getTimeUntil(s.expires),n=new Date(s.onset).getTime(),i=new Date(s.expires).getTime(),l=s.productKind==="sea-area-bulletin"||s.productKind==="coastal-bulletin";let c="";if(l&&Number.isFinite(n)&&Number.isFinite(i)&&i>n){const r=Date.now(),u=r<n?"upcomingForecast":r<i?"currentForecast":"expiredForecast",d=new Date(n).toISOString().slice(0,16).replace("T"," ")+" UTC",v=new Date(i).toISOString().slice(0,16).replace("T"," ")+" UTC";c=`<p class="popup-description"><strong>${t(`popups.${u}`)}</strong><br>${t("popups.validFrom")}: ${d}<br>${t("popups.validUntil")}: ${v}</p>`}return`
      <div class="popup-header weather ${e}">
        <span class="popup-title" data-event="${p(s.event)}">${p(ea(s.event,{upper:!0}))}</span>
        <span class="popup-badge ${e}">${p(P(s.severity))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        ${s.headline?`<p class="popup-headline">${p(s.headline)}</p>`:""}
        ${c}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.area")}</span>
            <span class="stat-value">${p(s.areaDesc)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.expires")}</span>
            <span class="stat-value">${o}</span>
          </div>
        </div>
        <p class="popup-description">${p(s.description.slice(0,300))}${s.description.length>300?"...":""}</p>
        ${this.renderWeatherProvenance(s)}
      </div>
    `}renderWeatherProvenance(s){var l;const e=((l=s.issuedBy)==null?void 0:l.trim())||(s.source?$a[s.source.toLowerCase()]:void 0),o=Rs(s.sourceUrl)??Rs(s.id);if(!e&&!o)return"";const n=e?`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.issuedBy")}</span><span class="stat-value" data-source="${p(s.source??"")}">${p(e)}</span></div>`:"",i=o?`<div class="popup-stat"><span class="stat-label">${t("popups.source")}</span><span class="stat-value"><a class="popup-link popup-source-link" href="${p(o.href)}" target="_blank" rel="noopener noreferrer">${p(o.host)}</a></span></div>`:"";return`<div class="popup-stats popup-provenance">${n}${i}</div>`}getTimeUntil(s){const e=s instanceof Date?s:new Date(s);if(Number.isNaN(e.getTime()))return"—";const o=e.getTime()-Date.now();if(o<=0)return t("popups.expired");const n=Math.floor(o/(1e3*60*60));return n<1?`${Math.floor(o/(1e3*60))}${t("popups.timeUnits.m")}`:n<24?`${n}${t("popups.timeUnits.h")}`:`${Math.floor(n/24)}${t("popups.timeUnits.d")}`}renderBasePopup(s){const e={"us-nato":t("popups.base.types.us-nato"),china:t("popups.base.types.china"),russia:t("popups.base.types.russia")},o={"us-nato":"elevated",china:"high",russia:"high"},n=s,i=[];return n.catAirforce&&i.push(t("popups.mapPopup.base.airForce")),n.catNaval&&i.push(t("popups.mapPopup.base.naval")),n.catNuclear&&i.push(t("popups.mapPopup.base.nuclear")),n.catSpace&&i.push(t("popups.mapPopup.base.space")),n.catTraining&&i.push(t("popups.mapPopup.base.training")),`
      <div class="popup-header base">
        <span class="popup-title">${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${o[s.type]||"low"}">${p(e[s.type]||s.type.toUpperCase())}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
        ${n.kind?`<p class="popup-description" style="opacity:0.7;margin-top:2px">${p(n.kind.replace(/_/g," "))}</p>`:""}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.type")}</span>
            <span class="stat-value">${p(e[s.type]||s.type)}</span>
          </div>
          ${s.arm?`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.base.branch")}</span><span class="stat-value">${p(s.arm)}</span></div>`:""}
          ${s.country?`<div class="popup-stat"><span class="stat-label">${t("popups.country")}</span><span class="stat-value">${p(H(s.country))}</span></div>`:""}
          ${i.length>0?`<div class="popup-stat"><span class="stat-label">${t("popups.mapPopup.base.categories")}</span><span class="stat-value">${p(i.join(", "))}</span></div>`:""}
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
      </div>
    `}renderWaterwayPopup(s){var u,d,v;const e=(d=(u=this.chokepointData)==null?void 0:u.chokepoints)==null?void 0:d.find(h=>h.id===s.chokepointId),o=!!e&&((v=e.transitSummary)==null?void 0:v.dataAvailable)!==!1,n=q(K()),i=is[s.chokepointId],l=i&&!n?`<div class="popup-section-title" style="margin-top:10px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;opacity:.6;letter-spacing:.06em">${t("popups.mapPopup.waterway.tradeSectorMix")}</div>
         ${va(i)}`:"";let c="";o&&(n?c=`<div data-transit-chart="${p(s.name)}" data-transit-chart-id="${p((e==null?void 0:e.id)??"")}" style="margin-top:10px;min-height:200px;display:flex;align-items:center;justify-content:center;color:var(--text-dim,#888);font-size:calc(12px * var(--wm-panel-effective-scale, 1))">${t("components.supplyChain.loadingHistory")||"Loading transit history…"}</div>`:c=`
          <div class="sector-pro-gate" data-gate="chokepoint-transit-chart" style="position:relative;overflow:hidden;border-radius:6px;margin-top:10px;min-height:120px;background:var(--surface-elevated, #111)">
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px">
              <span style="font-size:calc(16px * var(--wm-panel-effective-scale, 1))">🔒</span>
              <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;opacity:.8">PRO</span>
              <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));opacity:.5">${t("popups.mapPopup.waterway.transitHistory")}</span>
            </div>
          </div>`);let r="";return i&&(n?r=`
          <div class="popup-section-title" style="margin-top:10px;font-size:calc(10px * var(--wm-panel-effective-scale, 1));text-transform:uppercase;opacity:.6;letter-spacing:.06em">${t("popups.mapPopup.waterway.sectorExposure")}</div>
          <div data-hs2-ring="${p(s.chokepointId)}" class="popup-hs2-ring-container"></div>`:r=`
          <div class="sector-pro-gate" data-gate="chokepoint-sector-ring" style="position:relative;overflow:hidden;border-radius:6px;margin-top:10px;min-height:80px;background:var(--surface-elevated, #111)">
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px">
              <span style="font-size:calc(16px * var(--wm-panel-effective-scale, 1))">🔒</span>
              <span style="font-size:calc(10px * var(--wm-panel-effective-scale, 1));font-weight:600;opacity:.8">PRO</span>
              <span style="font-size:calc(9px * var(--wm-panel-effective-scale, 1));opacity:.5">${t("popups.mapPopup.waterway.sectorBreakdown")}</span>
            </div>
          </div>`),`
      <div class="popup-header waterway">
        <span class="popup-title">${p(s.name)}</span>
        <span class="popup-badge elevated">${t("popups.strategic")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
        ${l}
        ${r}
        ${c}
      </div>
    `}renderAisPopup(s){var r,u;const e=p(s.severity),o=p(P(s.severity)),n=s.type==="gap_spike"?t("popups.aisGapSpike"):t("popups.chokepointCongestion"),i=s.type==="gap_spike"?t("popups.darkening"):t("popups.density"),l=s.type==="gap_spike"?t("popups.darkShips"):t("popups.vesselCount"),c=s.type==="gap_spike"?((r=s.darkShips)==null?void 0:r.toString())||"—":((u=s.vesselCount)==null?void 0:u.toString())||"—";return`
      <div class="popup-header ais">
        <span class="popup-title">${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${e}">${o}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${n}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${i}</span>
            <span class="stat-value">${s.changePct}% ↑</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${l}</span>
            <span class="stat-value">${c}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.window")}</span>
            <span class="stat-value">${s.windowHours}H</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.region")}</span>
            <span class="stat-value">${p(s.region||`${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°`)}</span>
          </div>
        </div>
        <p class="popup-description">${p(s.description)}</p>
      </div>
    `}renderProtestPopup(s){var $,g,b;const e=s.sourceType==="gdelt",o=p(s.severity),n=p(P(s.severity)),i=e?t("popups.protest.mediaSignal"):p(A(s.eventType.replace(/_/g," "))),l=s.eventType==="riot"?"🔥":s.eventType==="strike"?"✊":"📢",c=t("popups.protest.gdelt"),r=!e&&s.validated?`<span class="popup-badge verified">${t("popups.verified")}</span>`:"",u=s.fatalities?`<div class="popup-stat"><span class="stat-label">${t("popups.fatalities")}</span><span class="stat-value alert">${s.fatalities}</span></div>`:"",d=($=s.actors)!=null&&$.length?`<div class="popup-stat"><span class="stat-label">${t("popups.actors")}</span><span class="stat-value">${s.actors.map(y=>p(y)).join(", ")}</span></div>`:"",v=vs(s.sourceUrls,{label:t(e?"popups.protest.relatedArticle":"popups.source")}),h=(g=s.tags)!=null&&g.length?`<div class="popup-tags">${s.tags.map(y=>`<span class="popup-tag">${p(y)}</span>`).join("")}</div>`:"",m=(b=s.relatedHotspots)!=null&&b.length?`<div class="popup-related">${t("popups.near")}: ${s.relatedHotspots.map(y=>p(y)).join(", ")}</div>`:"";return`
      <div class="popup-header protest ${o}">
        <span class="popup-icon">${l}</span>
        <span class="popup-title">${i}</span>
        ${e?"":`<span class="popup-badge ${o}">${n}</span>`}
        ${r}
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${s.city&&!Is(s.city,s.country)?`${p(s.city)}, `:""}${p(H(s.country))}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.time")}</span>
            <span class="stat-value">${s.time.toLocaleDateString()}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.source")}</span>
            <span class="stat-value">${c}</span>
          </div>
          ${u}
          ${d}
        </div>
        ${this.renderProtestTitle(s,e)}
        ${e?`<p class="popup-description">${t("popups.protest.mediaSignalDetail")}</p>`:""}
        ${e&&v?`<div class="popup-source-label">${t("popups.protest.relatedArticle")}</div>`:""}
        ${v}
        ${h}
        ${m}
        ${this.renderReservoirSiteContext(s.lat,s.lon,s.title)}
      </div>
    `}renderProtestTitle(s,e){if(!s.title)return"";if(e){const o=da(s.title);if(o){const n=Is(o.place,s.country)?H(s.country):o.place;return`<p class="popup-description">${p(t("popups.mapPopup.placeReports",{place:n,count:o.count}))}</p>`}return`<p class="popup-description">${p(s.title)}</p>`}return`<p class="popup-description">${p(s.title)}</p>`}renderProtestClusterPopup(s){const e=s.count??s.items.length,o=s.riotCount??s.items.filter(m=>m.eventType==="riot").length,n=s.highSeverityCount??s.items.filter(m=>m.severity==="high").length,i=s.verifiedCount??s.items.filter(m=>m.validated).length,l=s.totalFatalities??s.items.reduce((m,$)=>m+($.fatalities||0),0),r=[...s.items].sort((m,$)=>{const g={high:0,medium:1,low:2},b={riot:0,civil_unrest:1,strike:2,demonstration:3,protest:4},y=(g[m.severity]??3)-(g[$.severity]??3);return y!==0?y:(b[m.eventType]??5)-(b[$.eventType]??5)}).slice(0,10).map(m=>{var _;const $=m.sourceType==="gdelt",g=m.eventType==="riot"?"🔥":m.eventType==="strike"?"✊":"📢",b=m.severity,y=m.time.toLocaleDateString(void 0,{month:"short",day:"numeric"}),f=m.city?p(m.city):"",w=m.title?`: ${p(m.title.slice(0,40))}${m.title.length>40?"...":""}`:"",S=(_=m.sourceUrls)==null?void 0:_.find(ps=>T(ps)),L=S?` <a class="popup-link cluster-source-link" href="${T(S)}" target="_blank" rel="noopener noreferrer nofollow">${t($?"popups.protest.relatedArticle":"popups.source")} →</a>`:"";return`<li class="cluster-item ${b}">${g} ${y}${f?` • ${f}`:""}${w}${$?` • ${t("popups.protest.mediaSignal")}`:""}${L}</li>`}).join(""),u=Math.min(10,s.items.length),d=Math.max(0,e-u),v=d>0?`<li class="cluster-more">+${d} ${t("popups.protest.records")}</li>`:"";return`
      <div class="popup-header protest ${n>0?"high":o>0?"medium":"low"} cluster">
        <span class="popup-title">📢 ${p(s.country)}</span>
        <span class="popup-badge">${e} ${t("popups.protest.records").toUpperCase()}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body cluster-popup">
        <div class="cluster-summary">
          ${o?`<span class="summary-item riot">🔥 ${o} ${t("popups.protest.riots")}</span>`:""}
          ${n?`<span class="summary-item high">⚠️ ${n} ${t("popups.protest.highSeverity")}</span>`:""}
          ${i?`<span class="summary-item verified">✓ ${i} ${t("popups.verified")}</span>`:""}
          ${l>0?`<span class="summary-item fatalities">💀 ${l} ${t("popups.fatalities")}</span>`:""}
        </div>
        <ul class="cluster-list">${r}${v}</ul>
        ${s.sampled?`<p class="popup-more">${t("popups.sampledList",{count:s.items.length})}</p>`:""}
      </div>
    `}renderFlightPopup(s){const e=p(s.severity),o=s.severity==="unknown"?t("popups.mapPopup.noData"):p(P(s.severity)),n={ground_stop:t("popups.flight.groundStop"),ground_delay:t("popups.flight.groundDelay"),departure_delay:t("popups.flight.departureDelay"),arrival_delay:t("popups.flight.arrivalDelay"),general:t("popups.flight.delaysReported"),closure:t("popups.flight.closure")},i=s.severity==="unknown"?t("popups.mapPopup.coverageUnavailable"):s.severity==="normal"?s.source==="notam"?t("popups.flight.open"):t("popups.flight.normalOperations"):n[s.delayType]||t("popups.flight.delays"),l=s.severity==="unknown"?"❔":s.delayType==="closure"?"🚫":s.delayType==="ground_stop"?"🛑":s.severity==="severe"?"✈️":"🛫",r={faa:t("popups.flight.sources.faa"),eurocontrol:t("popups.flight.sources.eurocontrol"),computed:t("popups.flight.sources.computed"),aviationstack:t("popups.flight.sources.aviationstack"),notam:t("popups.flight.sources.notam"),unspecified:"—"}[s.source]||p(s.source),d={americas:t("popups.flight.regions.americas"),europe:t("popups.flight.regions.europe"),apac:t("popups.flight.regions.apac"),mena:t("popups.flight.regions.mena"),africa:t("popups.flight.regions.africa")}[s.region]||p(s.region),v=s.avgDelayMinutes>0?`<div class="popup-stat"><span class="stat-label">${t("popups.flight.avgDelay")}</span><span class="stat-value alert">+${s.avgDelayMinutes} ${t("popups.timeUnits.m")}</span></div>`:"",h=s.reason?`<div class="popup-stat"><span class="stat-label">${t("popups.reason")}</span><span class="stat-value">${p(s.reason)}</span></div>`:"",m=s.cancelledFlights?`<div class="popup-stat"><span class="stat-label">${t("popups.flight.cancelled")}</span><span class="stat-value alert">${s.cancelledFlights} ${t("popups.events")}</span></div>`:"";return`
      <div class="popup-header flight ${e}">
        <span class="popup-icon">${l}</span>
        <span class="popup-title">${p(s.iata)} - ${i}</span>
        <span class="popup-badge ${e}">${o}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.name)}</div>
        <div class="popup-location">${p(s.city)}, ${p(s.country)}</div>
        <div class="popup-stats">
          ${v}
          ${h}
          ${m}
          <div class="popup-stat">
            <span class="stat-label">${t("popups.region")}</span>
            <span class="stat-value">${d}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.source")}</span>
            <span class="stat-value">${r}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.updated")}</span>
            <span class="stat-value">${s.updatedAt.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    `}renderAircraftPopup(s){const e=p(s.callsign||s.icao24),o=s.onGround?"low":"elevated",n=s.onGround?t("popups.aircraft.ground"):t("popups.aircraft.airborne"),i=s.altitudeFt>0?`FL${Math.round(s.altitudeFt/100)} (${s.altitudeFt.toLocaleString()} ft)`:t("popups.aircraft.ground");return`
      <div class="popup-header aircraft">
        <span class="popup-icon">&#9992;</span>
        <span class="popup-title">${e}</span>
        <span class="popup-badge ${o}">${n}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">ICAO24: ${p(s.icao24)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.aircraft.altitude")}</span>
            <span class="stat-value">${i}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.aircraft.speed")}</span>
            <span class="stat-value">${s.groundSpeedKts} kts</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.aircraft.heading")}</span>
            <span class="stat-value">${Math.round(s.trackDeg)}&deg;</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.aircraft.position")}</span>
            <span class="stat-value">${s.lat.toFixed(4)}&deg;, ${s.lon.toFixed(4)}&deg;</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.source")}</span>
            <span class="stat-value">${ma(s.source)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.updated")}</span>
            <span class="stat-value">${s.observedAt.toLocaleTimeString()}</span>
          </div>
        </div>
${Ss("wingbitsEnrichment")?`<div class="wingbits-live-section"><div class="wingbits-live-loading" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));opacity:0.5;padding:4px 0">${t("popups.mapPopup.flight.loadingWingbits")}</div></div>`:""}
      </div>
    `}renderAPTPopup(s){var l,c;const e=(l=s.tactics)!=null&&l.length?`<div class="popup-tags">${s.tactics.map(r=>`<span class="popup-tag" data-tactic="${p(r)}">${p(Ze(r))}</span>`).join("")}</div>`:"",o=(c=s.targetSectors)!=null&&c.length?`<div class="popup-subtitle" style="margin-top:6px">${t("popups.mapPopup.targets")}: ${p(s.targetSectors.map(Je).join(t("popups.mapPopup.listSeparator")))}</div>`:"",n=s.mitreId&&s.mitreUrl?`<div class="popup-stat"><span class="stat-label">MITRE</span><span class="stat-value"><a class="popup-link" href="${p(s.mitreUrl)}" target="_blank" rel="noopener">${p(s.mitreId)} ↗</a></span></div>`:"",i=s.active===!1?`<span class="popup-badge low">${p(A("inactive"))}</span>`:`<span class="popup-badge high">${t("popups.threat")}</span>`;return`
      <div class="popup-header apt">
        <span class="popup-title">${p(s.name)}</span>
        ${i}
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.aka)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.sponsor")}</span>
            <span class="stat-value">${p(H(s.sponsor))}</span>
          </div>
          ${n}
        </div>
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
        ${e}
        ${o}
      </div>
    `}renderCyberThreatPopup(s){const e=p(s.severity),n={feodo:"Feodo Tracker",urlhaus:"URLhaus",c2intel:"C2 Intel Feeds",otx:"AlienVault OTX",abuseipdb:"AbuseIPDB"}[s.source]||s.source,i=A(s.type.replace(/_/g," ")),l=(s.tags||[]).slice(0,6);return`
      <div class="popup-header apt ${e}">
        <span class="popup-title">${t("popups.cyberThreat.title")}</span>
        <span class="popup-badge ${e}">${p(P(s.severity))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(i)}</div>
        <p class="popup-description">${p(t(`popups.cyberThreat.explanations.${s.type}`))}</p>
        <p class="section-label">${t("popups.cyberThreat.evidence")}</p>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${p(s.indicatorType.toUpperCase())}</span>
            <span class="stat-value" style="overflow-wrap:anywhere">${p(s.indicator)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.country")}</span>
            <span class="stat-value">${p(s.country?H(s.country):t("popups.unknown"))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.source")}</span>
            <span class="stat-value">${p(n)}</span>
          </div>
          ${s.malwareFamily?`<div class="popup-stat">
            <span class="stat-label">${t("popups.malware")}</span>
            <span class="stat-value">${p(s.malwareFamily)}</span>
          </div>`:""}
          ${s.firstSeen?`<div class="popup-stat"><span class="stat-label">${t("popups.cyberThreat.firstSeen")}</span><span class="stat-value">${p(new Date(s.firstSeen).toLocaleString())}</span></div>`:""}
          <div class="popup-stat">
            <span class="stat-label">${t("popups.lastSeen")}</span>
            <span class="stat-value">${p(s.lastSeen?new Date(s.lastSeen).toLocaleString():t("popups.unknown"))}</span>
          </div>
        </div>
        ${l.length>0?`
        <div class="popup-tags">
          ${l.map(c=>`<span class="popup-tag">${p(c)}</span>`).join("")}
        </div>`:""}
        ${s.firstSeen?`<p class="popup-description">${t("popups.cyberThreat.firstSeenNote")}</p>`:""}
        ${(s.tags||[]).includes("malware_download")?`<p class="popup-description">${t("popups.cyberThreat.downloadTag")}</p>`:""}
        ${s.malwareFamily?`<p class="popup-description">${t("popups.cyberThreat.familyNote")}</p>`:""}
        <p class="popup-description">${t("popups.cyberThreat.approximateLocation")}</p>
        ${s.indicatorType==="ip"?Ke():""}
      </div>
    `}renderNuclearPopup(s){var n,i,l,c;const e={plant:t("popups.nuclear.types.plant"),enrichment:t("popups.nuclear.types.enrichment"),weapons:t("popups.nuclear.types.weapons"),research:t("popups.nuclear.types.research"),reprocessing:t("popups.nuclear.types.reprocessing"),"test-site":t("popups.nuclear.types.testSite")},o={active:"elevated",contested:"high",decommissioned:"low"};return`
      <div class="popup-header nuclear">
        <span class="popup-title">${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${o[s.status]||"low"}">${p(A(s.status))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.type")}</span>
            <span class="stat-value">${p(e[s.type]||s.type.toUpperCase())}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.status")}</span>
            <span class="stat-value" data-status="${p(s.status)}">${p(A(s.status))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${t("popups.nuclear.description")}</p>
        ${s.operationalSince||(n=s.treaties)!=null&&n.length||s.iaeaStatus||(i=s.keyEvents)!=null&&i.length?`
        <div class="popup-section">
          <details>
            <summary>📜 ${t("popups.mapPopup.historicalProfile")}</summary>
            <div class="popup-section-content">
              ${s.operationalSince?`
              <div class="popup-stat">
                <span class="stat-label">${t("popups.mapPopup.history.operationalSince")}</span>
                <span class="stat-value">${p(s.operationalSince)}</span>
              </div>`:""}
              ${(l=s.treaties)!=null&&l.length?`
              <div class="popup-stat">
                <span class="stat-label">${t("popups.mapPopup.history.treaties")}</span>
                <span class="stat-value">${s.treaties.map(p).join(", ")}</span>
              </div>`:""}
              ${s.iaeaStatus?`
              <div class="popup-stat">
                <span class="stat-label">${t("popups.mapPopup.history.iaeaStatus")}</span>
                <span class="stat-value">${p(s.iaeaStatus)}</span>
              </div>`:""}
              ${(c=s.keyEvents)!=null&&c.length?`
              <div class="popup-stat">
                <span class="stat-label">${t("popups.mapPopup.history.keyEvents")}</span>
                <span class="stat-value">${s.keyEvents.map(p).join("<br>")}</span>
              </div>`:""}
            </div>
          </details>
        </div>`:""}
      </div>
    `}renderEconomicPopup(s){const e={exchange:t("popups.economic.types.exchange"),"central-bank":t("popups.economic.types.centralBank"),"financial-hub":t("popups.economic.types.financialHub")},o={exchange:"📈","central-bank":"🏛","financial-hub":"💰"},n=s.marketHours?this.getMarketStatus(s.marketHours):null,i=n?n==="open"?t("popups.open"):n==="closed"?t("popups.economic.closed"):t("popups.unknown"):"";return`
      <div class="popup-header economic ${s.type}">
        <span class="popup-title">${o[s.type]||""} ${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${n==="open"?"elevated":"low"}">${p(i||e[s.type]||"")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.type")}</span>
            <span class="stat-value">${p(e[s.type]||s.type.toUpperCase())}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.country")}</span>
            <span class="stat-value">${p(s.country)}</span>
          </div>
          ${s.marketHours?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.tradingHours")}</span>
            <span class="stat-value">${p(s.marketHours.open)} - ${p(s.marketHours.close)}</span>
          </div>
          `:""}
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
      </div>
    `}renderIrradiatorPopup(s){return`
      <div class="popup-header irradiator">
        <span class="popup-title">☢ ${p(s.city.toUpperCase())}</span>
        <span class="popup-badge elevated">${t("popups.gamma")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${t("popups.irradiator.subtitle")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.country")}</span>
            <span class="stat-value">${p(s.country)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.city")}</span>
            <span class="stat-value">${p(s.city)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${t("popups.irradiator.description")}</p>
      </div>
    `}renderReservoirLevelPopup(s){const e=fs(),o={t,locale:e,nowMs:Date.now()},n=bt(s.status),i=u=>u==null?"—":p(At(u,e)),l=(u,d,v="")=>`<div class="popup-stat"><span class="stat-label">${p(u)}</span><span class="stat-value${v}">${d}</span></div>`,c=s.latest?t("components.reservoirLevels.popup.anomaly",{month:yt(s.latest.observedAt,e)}):t("components.reservoirLevels.popup.anomalyPlain"),r=ft(s,240,40);return`
      <div class="wl-popup wl-tone-${n}">
        <div class="popup-header">
          <span class="popup-title wl-popup-title">${p(s.name)}<span class="wl-popup-place">${p(kt(s,e))}</span></span>
          <span class="wl-chip">${p(xt(s,t))}</span>
          <button class="popup-close" aria-label="${t("common.close")}">×</button>
        </div>
        <div class="popup-body">
          ${s.why?`<p class="wl-popup-why">${p(s.why)}</p>`:""}
          <div class="popup-stats">
            ${l(t("components.reservoirLevels.popup.level"),s.latest?p(t("components.reservoirLevels.popup.levelValue",{value:Et(s.latest.levelM,e)})):"—")}
            ${l(c,i(s.seasonalAnomalyM),s.seasonalAnomalyM==null?"":" wl-popup-anomaly")}
            ${l(t("components.reservoirLevels.popup.changePrev"),i(s.changePrevM))}
            ${l(t("components.reservoirLevels.popup.change90"),i(s.change90dM))}
            ${l(t("components.reservoirLevels.popup.change365"),i(s.change365dM))}
            ${l(t("components.reservoirLevels.popup.measured"),p(Tt(s,o,!0)))}
          </div>
          ${this.renderReservoirWaterExtent(s)}
          ${this.renderReservoirNextPass(s)}
          ${r?`<div class="wl-popup-spark" role="img" aria-label="${p(t("components.reservoirLevels.popup.sparkline"))}">${r}</div>`:""}
          <p class="wl-popup-source">${p(t("components.reservoirLevels.source"))} <a href="${wt}" target="_blank" rel="noopener noreferrer">NASA ICESat-2 ATL13</a> / <a href="${Ct}" target="_blank" rel="noopener noreferrer">ATL06</a> (NSIDC) · ${p(t("components.reservoirLevels.processedWith"))} <a href="${St}" target="_blank" rel="noopener noreferrer">SlideRule Earth</a></p>
        </div>
      </div>
    `}renderReservoirWaterExtent(s){return""}renderReservoirNextPass(s){return""}renderReservoirSiteContext(s,e,o){const n=Pt(s,e,o);return n?`<div class="popup-section wl-site-context" data-wl-site-context="${p(n.id)}">
      <span class="section-label">${p(t("components.reservoirLevels.siteContext.label"))}</span>
      <div class="wl-site-context-name">${p(n.name)}</div>
      <div class="wl-site-context-level">${p(t("components.reservoirLevels.nextPass.loading"))}</div>
    </div>`:""}hydrateReservoirSections(s){var c;const e=s.querySelector("[data-wl-next-pass]"),o=s.querySelector("[data-wl-water-extent]"),n=s.querySelector("[data-wl-site-context]"),i=fs();(e||o)&&((c=this.reservoirScan)==null||c.abort(),this.reservoirScan=new AbortController);const l=this.reservoirScan;if(o&&l&&ts(async()=>{const{loadReservoirWaterExtent:r}=await import("./object-imagery-EW6bwWaj.js");return{loadReservoirWaterExtent:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38])).then(({loadReservoirWaterExtent:r})=>r(o.dataset.wlWaterExtent,l.signal)).catch(()=>$t).then(r=>{l.signal.aborted||!o.isConnected||(gt(o,r,{t,locale:i,nowMs:Date.now()}),this.clampPopupToViewport())}),e&&l){const r=e.dataset.wlNextPass;Ot(Lt,{signal:l.signal}).then(u=>{const d=e.querySelector(".wl-next-pass-value");if(!d||!e.isConnected)return;const v=u==null?void 0:u.get(r);d.textContent=v?Mt(v,t,i):t("components.reservoirLevels.nextPass.unavailable"),this.clampPopupToViewport()})}if(n){const r=n.dataset.wlSiteContext;Ht().catch(()=>new Map).then(u=>{var h;const d=n.querySelector(".wl-site-context-level");if(!d||!n.isConnected)return;const v=u.get(r);if(!v){d.textContent=t("components.reservoirLevels.unavailable");return}(h=n.querySelector(".wl-site-context-name"))==null||h.remove(),d.replaceWith(It(v,{t,locale:i,nowMs:Date.now()},{compact:!0})),this.clampPopupToViewport()})}}renderStorageFacilityPopup(s){const e=p(oa(s.facilityType)),o=s.operator?`<div class="popup-stat"><span class="stat-label">${t("popups.operator")}</span><span class="stat-value">${p(s.operator)}</span></div>`:"";return`
      <div class="popup-header">
        <span class="popup-title">${p(s.name)}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${e} · ${p(s.country)} · ${p(s.capacityDisplay||"—")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.status")}</span>
            <span class="stat-value">${p(A(s.badge))}</span>
          </div>
          ${o}
        </div>
        <button type="button" class="popup-link" data-open-storage-atlas="${p(s.id)}">${t("popups.storageFacility.openInAtlas")}</button>
      </div>
    `}renderPipelinePopup(s){const e={oil:t("popups.pipeline.types.oil"),gas:t("popups.pipeline.types.gas"),products:t("popups.pipeline.types.products")},o={oil:"high",gas:"elevated",products:"low"},n={operating:t("popups.pipeline.status.operating"),construction:t("popups.pipeline.status.construction")},i=s.type==="oil"?"🛢":s.type==="gas"?"🔥":"⛽";return`
      <div class="popup-header pipeline ${s.type}">
        <span class="popup-title">${i} ${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${o[s.type]||"low"}">${p(A(s.type))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${e[s.type]||t("popups.pipeline.title")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.status")}</span>
            <span class="stat-value">${p(n[s.status]||A(s.status))}</span>
          </div>
          ${s.capacity?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.capacity")}</span>
            <span class="stat-value">${p(s.capacity)}</span>
          </div>
          `:""}
          ${s.length?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.length")}</span>
            <span class="stat-value">${p(s.length)}</span>
          </div>
          `:""}
          ${s.operator?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.operator")}</span>
            <span class="stat-value">${p(s.operator)}</span>
          </div>
          `:""}
        </div>
        ${s.countries&&s.countries.length>0?`
          <div class="popup-section">
            <span class="section-label">${t("popups.countries")}</span>
            <div class="popup-tags">
              ${s.countries.map(l=>`<span class="popup-tag">${p(l)}</span>`).join("")}
            </div>
          </div>
        `:""}
        <p class="popup-description">${t("popups.pipeline.description",{type:s.type,status:s.status==="operating"?t("popups.pipelineStatusDesc.operating"):t("popups.pipelineStatusDesc.construction")})}</p>
      </div>
    `}renderCablePopup(s){var b;const e=this.getLatestCableAdvisory(s.id),o=this.getPriorityRepairShip(s.id),n=rt(s.id);let i,l;(n==null?void 0:n.status)==="fault"?(i=t("popups.cable.fault"),l="high"):(n==null?void 0:n.status)==="degraded"?(i=t("popups.cable.degraded"),l="elevated"):e?(i=e.severity==="fault"?t("popups.cable.fault"):t("popups.cable.degraded"),l=e.severity==="fault"?"high":"elevated"):(n==null?void 0:n.status)==="ok"?(i=t("popups.cable.active"),l="low"):(i=t("popups.unknown"),l="info");const c=(o==null?void 0:o.eta)||(e==null?void 0:e.repairEta),r=p(s.name.toUpperCase()),u=p(i),d=c?p(c):"",v=e?p(e.title):"",h=e?p(e.impact):"",m=e?p(e.description):"",$=o?p(o.name):"",g=o?p(o.note||t("popups.repairShip.note")):"";return`
      <div class="popup-header cable">
        <span class="popup-title">🌐 ${r}</span>
        <span class="popup-badge ${l}">${s.major?t("popups.cable.major"):t("popups.cable.cable")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${t("popups.cable.subtitle")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.type")}</span>
            <span class="stat-value">${t("popups.cable.type")}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.waypoints")}</span>
            <span class="stat-value">${s.points.length}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.status")}</span>
            <span class="stat-value">${u}</span>
          </div>
          ${c?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.repairEta")}</span>
            <span class="stat-value">${d}</span>
          </div>
          `:""}
        </div>
        ${e?`
          <div class="popup-section">
            <span class="section-label">${t("popups.cable.advisory")}</span>
            <div class="popup-tags">
              <span class="popup-tag">${v}</span>
              <span class="popup-tag">${h}</span>
            </div>
            <p class="popup-description">${m}</p>
          </div>
        `:""}
        ${o?`
          <div class="popup-section">
            <span class="section-label">${t("popups.cable.repairDeployment")}</span>
            <div class="popup-tags">
              <span class="popup-tag">${$}</span>
              <span class="popup-tag">${o.status==="on-station"?t("popups.cable.repairStatus.onStation"):t("popups.cable.repairStatus.enRoute")}</span>
            </div>
            <p class="popup-description">${g}</p>
          </div>
        `:""}
        ${(b=n==null?void 0:n.evidence)!=null&&b.length?`
          <div class="popup-section">
            <span class="section-label">${t("popups.cable.health.evidence")}</span>
            <ul class="evidence-list">
              ${n.evidence.map(y=>`<li class="evidence-item"><strong>${p(y.source)}</strong>: ${p(y.summary)}</li>`).join("")}
            </ul>
          </div>
        `:""}
        <p class="popup-description">${t("popups.cable.description")}</p>
      </div>
    `}renderCableAdvisoryPopup(s){const e=ws.find(d=>d.id===s.cableId),o=this.getTimeAgo(s.reported),n=s.severity==="fault"?t("popups.cable.fault"):t("popups.cable.degraded"),i=p((e==null?void 0:e.name.toUpperCase())||s.cableId.toUpperCase()),l=p(s.title),c=p(s.impact),r=s.repairEta?p(s.repairEta):"",u=p(s.description);return`
      <div class="popup-header cable">
        <span class="popup-title">🚨 ${i}</span>
        <span class="popup-badge ${s.severity==="fault"?"high":"elevated"}">${n}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${l}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.cableAdvisory.reported")}</span>
            <span class="stat-value">${o}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.cableAdvisory.impact")}</span>
            <span class="stat-value">${c}</span>
          </div>
          ${s.repairEta?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.cableAdvisory.eta")}</span>
            <span class="stat-value">${r}</span>
          </div>
          `:""}
        </div>
        <p class="popup-description">${u}</p>
      </div>
    `}renderRepairShipPopup(s){const e=ws.find(r=>r.id===s.cableId),o=p(s.name.toUpperCase()),n=p((e==null?void 0:e.name)||s.cableId),i=p(s.eta),l=s.operator?p(s.operator):"",c=p(s.note||t("popups.repairShip.description"));return`
      <div class="popup-header cable">
        <span class="popup-title">🚢 ${o}</span>
        <span class="popup-badge elevated">${t("popups.repairShip.badge")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${n}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.status")}</span>
            <span class="stat-value">${s.status==="on-station"?t("popups.repairShip.status.onStation"):t("popups.repairShip.status.enRoute")}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.cableAdvisory.eta")}</span>
            <span class="stat-value">${i}</span>
          </div>
          ${s.operator?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.operator")}</span>
            <span class="stat-value">${l}</span>
          </div>
          `:""}
        </div>
        <p class="popup-description">${c}</p>
      </div>
    `}getLatestCableAdvisory(s){return this.cableAdvisories.filter(o=>o.cableId===s).reduce((o,n)=>o?n.reported.getTime()>o.reported.getTime()?n:o:n,void 0)}getPriorityRepairShip(s){const e=this.repairShips.filter(n=>n.cableId===s);return e.length===0?void 0:e.find(n=>n.status==="on-station")||e[0]}renderOutagePopup(s){const e={total:"high",major:"elevated",partial:"low"},o={total:t("popups.outage.levels.total"),major:t("popups.outage.levels.major"),partial:t("popups.outage.levels.partial")},n=this.getTimeAgo(s.pubDate);return`
      <div class="popup-header outage ${p(s.severity)}">
        <span class="popup-title">📡 ${p(H(s.country).toLocaleUpperCase())}</span>
        <span class="popup-badge ${e[s.severity]||"low"}">${o[s.severity]||t("popups.outage.levels.disruption")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.title)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.severity")}</span>
            <span class="stat-value">${p(o[s.severity]||P(s.severity))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.outage.reported")}</span>
            <span class="stat-value">${n}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
        ${s.categories&&s.categories.length>0?`
          <div class="popup-section">
            <span class="section-label">${t("popups.outage.categories")}</span>
            <div class="popup-tags">
              ${s.categories.slice(0,5).map(l=>`<span class="popup-tag">${p(l)}</span>`).join("")}
            </div>
          </div>
        `:""}
        ${s.description?`<p class="popup-description">${p(s.description.slice(0,250))}${s.description.length>250?"...":""}</p>`:""}
        <a href="${T(s.link)}" target="_blank" class="popup-link">${t("popups.outage.readReport")} →</a>
      </div>
    `}renderDatacenterPopup(s){const e={existing:"normal",planned:"elevated",decommissioned:"low"},o={existing:t("popups.datacenter.status.existing"),planned:t("popups.datacenter.status.planned"),decommissioned:t("popups.datacenter.status.decommissioned")},n=i=>i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(0)}K`:i.toString();return`
      <div class="popup-header datacenter ${s.status}">
        <span class="popup-title">🖥️ ${p(s.name)}</span>
        <span class="popup-badge ${e[s.status]||"normal"}">${o[s.status]||t("popups.datacenter.status.unknown")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.owner)} • ${p(H(s.country))}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.datacenter.gpuChipCount")}</span>
            <span class="stat-value">${n(s.chipCount)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.datacenter.chipType")}</span>
            <span class="stat-value">${p(s.chipType||t("popups.unknown"))}</span>
          </div>
          ${s.powerMW!=null?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.datacenter.power")}</span>
            <span class="stat-value">${s.powerMW.toFixed(0)} MW</span>
          </div>
          `:""}
          ${s.sector?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.datacenter.sector")}</span>
            <span class="stat-value">${p(aa(s.sector))}</span>
          </div>
          `:""}
        </div>
        ${s.note?`<p class="popup-description">${p(s.note)}</p>`:""}
        ${this.renderDatacenterDetails(s)}
        <div class="popup-attribution">${t("popups.datacenter.attribution")}</div>
      </div>
    `}renderDatacenterDetails(s){const e=c=>t(`popups.datacenter.details.${c}`),o=e("notAvailable"),n=c=>c.toLocaleString(z(),{maximumFractionDigits:20}),i=(c,r)=>`<div><dt>${p(c)}</dt><dd>${p(r)}</dd></div>`,l=s.sourceUrl?T(s.sourceUrl):"";return`
      <details class="datacenter-details">
        <summary>${e("more")}</summary>
        <h3>${p(s.name)}</h3>
        ${s.description?`<p>${p(s.description)}</p>`:""}
        <dl>
          ${i(e("owner"),s.owner)}
          ${i(t("popups.datacenter.gpuChipCount"),n(s.chipCount))}
          ${i(t("popups.datacenter.chipType"),s.chipType||o)}
          ${i(e("power"),s.powerMW!=null?`${n(s.powerMW)} MW`:o)}
          ${i(e("powerBasis"),s.powerBasis?e(s.powerBasis):o)}
          ${i(e("location"),s.locationPrecision?e(s.locationPrecision):e("locationUnknown"))}
          ${i(e("firstOperationalDate"),s.firstOperationalDate||o)}
          ${i(e("sourceDate"),s.sourceDate||o)}
          ${i(e("metadataReviewedAt"),s.metadataReviewedAt||o)}
        </dl>
        <p>${e("powerCaveat")}</p>
        <p>${e("freshness")}</p>
        <a href="https://epoch.ai/data/gpu-clusters" target="_blank" rel="noopener noreferrer">${e("dataset")} ↗</a>
        ${l?`<a href="${l}" target="_blank" rel="noopener noreferrer">${e("evidence")} ↗</a>`:""}
      </details>
    `}renderDatacenterClusterPopup(s){const e=s.count??s.items.length,o=s.totalChips??s.items.reduce((u,d)=>u+d.chipCount,0),n=s.totalPowerMW??s.items.reduce((u,d)=>u+(d.powerMW||0),0),i=s.existingCount??s.items.filter(u=>u.status==="existing").length,l=s.plannedCount??s.items.filter(u=>u.status==="planned").length,c=u=>u>=1e6?`${(u/1e6).toFixed(1)}M`:u>=1e3?`${(u/1e3).toFixed(0)}K`:u.toString(),r=s.items.slice(0,8).map(u=>`
      <div class="cluster-item">
        <span class="cluster-item-icon">${u.status==="planned"?"🔨":"🖥️"}</span>
        <div class="cluster-item-info">
          <span class="cluster-item-name">${p(u.name.slice(0,40))}${u.name.length>40?"...":""}</span>
          <span class="cluster-item-detail">${p(u.owner)} • ${c(u.chipCount)} ${t("popups.datacenter.chips")}</span>
        </div>
      </div>
    `).join("");return`
      <div class="popup-header datacenter cluster">
        <span class="popup-title">🖥️ ${t("popups.datacenter.cluster.title",{count:String(e)})}</span>
        <span class="popup-badge elevated">${p(s.region)}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.datacenter.cluster.totalChips")}</span>
            <span class="stat-value">${c(o)}</span>
          </div>
          ${n>0?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.datacenter.cluster.totalPower")}</span>
            <span class="stat-value">${n.toFixed(0)} MW</span>
          </div>
          `:""}
          <div class="popup-stat">
            <span class="stat-label">${t("popups.datacenter.cluster.operational")}</span>
            <span class="stat-value">${i}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.datacenter.cluster.planned")}</span>
            <span class="stat-value">${l}</span>
          </div>
        </div>
        <div class="cluster-list">
          ${r}
        </div>
        ${e>8?`<p class="popup-more">${t("popups.datacenter.cluster.moreDataCenters",{count:String(Math.max(0,e-8))})}</p>`:""}
        ${s.sampled?`<p class="popup-more">${t("popups.datacenter.cluster.sampledSites",{count:String(s.items.length)})}</p>`:""}
        <div class="popup-attribution">${t("popups.datacenter.attribution")}</div>
      </div>
    `}renderStartupHubPopup(s){const e={mega:t("popups.startupHub.tiers.mega"),major:t("popups.startupHub.tiers.major"),emerging:t("popups.startupHub.tiers.emerging")},o={mega:"🦄",major:"🚀",emerging:"💡"};return`
      <div class="popup-header startup-hub ${s.tier}">
        <span class="popup-title">${o[s.tier]||"🚀"} ${p(s.name)}</span>
        <span class="popup-badge ${s.tier}">${e[s.tier]||t("popups.startupHub.tiers.hub")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.city)}, ${p(s.country)}</div>
        ${s.unicorns?`
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.startupHub.unicorns")}</span>
            <span class="stat-value">${s.unicorns}+</span>
          </div>
        </div>
        `:""}
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
      </div>
    `}renderCloudRegionPopup(s){const e={aws:"Amazon Web Services",gcp:"Google Cloud Platform",azure:"Microsoft Azure",cloudflare:"Cloudflare"},o={aws:"🟠",gcp:"🔵",azure:"🟣",cloudflare:"🟡"};return`
      <div class="popup-header cloud-region ${s.provider}">
        <span class="popup-title">${o[s.provider]||"☁️"} ${p(s.name)}</span>
        <span class="popup-badge ${s.provider}">${p(s.provider.toUpperCase())}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.city)}, ${p(s.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.cloudRegion.provider")}</span>
            <span class="stat-value">${p(e[s.provider]||s.provider)}</span>
          </div>
          ${s.zones?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.cloudRegion.availabilityZones")}</span>
            <span class="stat-value">${s.zones}</span>
          </div>
          `:""}
        </div>
      </div>
    `}renderTechHQPopup(s){const e={faang:t("popups.techHQ.types.faang"),unicorn:t("popups.techHQ.types.unicorn"),public:t("popups.techHQ.types.public")},o={faang:"🏛️",unicorn:"🦄",public:"🏢"};return`
      <div class="popup-header tech-hq ${s.type}">
        <span class="popup-title">${o[s.type]||"🏢"} ${p(s.company)}</span>
        <span class="popup-badge ${s.type}">${e[s.type]||t("popups.techHQ.types.tech")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.city)}, ${p(s.country)}</div>
        <div class="popup-stats">
          ${s.marketCap?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.techHQ.marketCap")}</span>
            <span class="stat-value">${p(s.marketCap)}</span>
          </div>
          `:""}
          ${s.employees?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.techHQ.employees")}</span>
            <span class="stat-value">${s.employees.toLocaleString()}</span>
          </div>
          `:""}
        </div>
      </div>
    `}renderAcceleratorPopup(s){const e={accelerator:t("popups.accelerator.types.accelerator"),incubator:t("popups.accelerator.types.incubator"),studio:t("popups.accelerator.types.studio")},o={accelerator:"🎯",incubator:"🔬",studio:"🎨"};return`
      <div class="popup-header accelerator ${s.type}">
        <span class="popup-title">${o[s.type]||"🎯"} ${p(s.name)}</span>
        <span class="popup-badge ${s.type}">${e[s.type]||t("popups.accelerator.types.accelerator")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.city)}, ${p(s.country)}</div>
        <div class="popup-stats">
          ${s.founded?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.accelerator.founded")}</span>
            <span class="stat-value">${s.founded}</span>
          </div>
          `:""}
        </div>
        ${s.notable&&s.notable.length>0?`
        <div class="popup-notable">
          <span class="notable-label">${t("popups.accelerator.notableAlumni")}</span>
          <span class="notable-list">${s.notable.map(n=>p(n)).join(", ")}</span>
        </div>
        `:""}
      </div>
    `}renderTechEventPopup(s){const e=new Date(s.startDate),o=new Date(s.endDate),n=e.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),i=o>e&&o.toDateString()!==e.toDateString()?` - ${o.toLocaleDateString(void 0,{month:"short",day:"numeric"})}`:"",l=s.daysUntil<=7?"urgent":s.daysUntil<=30?"soon":"",c=s.daysUntil===0?t("popups.techEvent.days.today"):s.daysUntil===1?t("popups.techEvent.days.tomorrow"):t("popups.techEvent.days.inDays",{count:String(s.daysUntil)});return`
      <div class="popup-header tech-event ${l}">
        <span class="popup-title">📅 ${p(s.title)}</span>
        <span class="popup-badge ${l}">${c}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">📍 ${p(s.location)}, ${p(s.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.techEvent.date")}</span>
            <span class="stat-value">${n}${i}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.location")}</span>
            <span class="stat-value">${p(s.location)}</span>
          </div>
        </div>
        ${s.url?`
        <a href="${T(s.url)}" target="_blank" rel="noopener noreferrer" class="popup-link">
          ${t("popups.techEvent.moreInformation")} →
        </a>
        `:""}
      </div>
    `}renderTechHQClusterPopup(s){const e=s.count??s.items.length,o=s.unicornCount??s.items.filter(r=>r.type==="unicorn").length,n=s.faangCount??s.items.filter(r=>r.type==="faang").length,i=s.publicCount??s.items.filter(r=>r.type==="public").length,c=[...s.items].sort((r,u)=>{const d={faang:0,unicorn:1,public:2};return(d[r.type]??3)-(d[u.type]??3)}).map(r=>{const u=r.type==="faang"?"🏛️":r.type==="unicorn"?"🦄":"🏢",d=r.marketCap?` (${p(r.marketCap)})`:"";return`<li class="cluster-item ${r.type}">${u} ${p(r.company)}${d}</li>`}).join("");return`
      <div class="popup-header tech-hq cluster">
        <span class="popup-title">🏙️ ${p(s.city)}</span>
        <span class="popup-badge">${t("popups.techHQCluster.companiesCount",{count:String(e)})}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body cluster-popup">
        <div class="popup-subtitle">📍 ${p(s.city)}, ${p(s.country)}</div>
        <div class="cluster-summary">
          ${n?`<span class="summary-item faang">🏛️ ${t("popups.techHQCluster.bigTechCount",{count:String(n)})}</span>`:""}
          ${o?`<span class="summary-item unicorn">🦄 ${t("popups.techHQCluster.unicornsCount",{count:String(o)})}</span>`:""}
          ${i?`<span class="summary-item public">🏢 ${t("popups.techHQCluster.publicCount",{count:String(i)})}</span>`:""}
        </div>
        <ul class="cluster-list">${c}</ul>
        ${s.sampled?`<p class="popup-more">${t("popups.techHQCluster.sampled",{count:String(s.items.length)})}</p>`:""}
      </div>
    `}renderTechEventClusterPopup(s){const e=s.count??s.items.length,o=s.soonCount??s.items.filter(l=>l.daysUntil<=14).length,i=[...s.items].sort((l,c)=>l.daysUntil-c.daysUntil).map(l=>{const r=new Date(l.startDate).toLocaleDateString(void 0,{month:"short",day:"numeric"});return`<li class="cluster-item ${l.daysUntil<=7?"urgent":l.daysUntil<=30?"soon":""}">📅 ${r}: ${p(l.title)}</li>`}).join("");return`
      <div class="popup-header tech-event cluster">
        <span class="popup-title">📅 ${p(s.location)}</span>
        <span class="popup-badge">${t("popups.techEventCluster.eventsCount",{count:String(e)})}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body cluster-popup">
        <div class="popup-subtitle">📍 ${p(s.location)}, ${p(s.country)}</div>
        ${o?`<div class="cluster-summary"><span class="summary-item soon">⚡ ${t("popups.techEventCluster.upcomingWithin2Weeks",{count:String(o)})}</span></div>`:""}
        <ul class="cluster-list">${i}</ul>
        ${s.sampled?`<p class="popup-more">${t("popups.techEventCluster.sampled",{count:String(s.items.length)})}</p>`:""}
      </div>
    `}getMarketStatus(s){try{const e=new Date,n=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:s.timezone}).format(e),[i=0,l=0]=s.open.split(":").map(Number),[c=0,r=0]=s.close.split(":").map(Number),[u=0,d=0]=n.split(":").map(Number),v=i*60+l,h=c*60+r,m=u*60+d;return m>=v&&m<h?"open":"closed"}catch{return"unknown"}}renderMilitaryFlightPopup(s){const e={usaf:"US Air Force",usn:"US Navy",usmc:"US Marines",usa:"US Army",raf:"Royal Air Force",rn:"Royal Navy",faf:"French Air Force",gaf:"German Air Force",plaaf:"Chinese air force",plan:"Chinese navy",vks:"Russian Aerospace",iaf:"Israeli Air Force",nato:"NATO",other:t("popups.unknown")},o={fighter:t("popups.militaryFlight.types.fighter"),bomber:t("popups.militaryFlight.types.bomber"),transport:t("popups.militaryFlight.types.transport"),tanker:t("popups.militaryFlight.types.tanker"),awacs:t("popups.militaryFlight.types.awacs"),reconnaissance:t("popups.militaryFlight.types.reconnaissance"),helicopter:t("popups.militaryFlight.types.helicopter"),drone:t("popups.militaryFlight.types.drone"),patrol:t("popups.militaryFlight.types.patrol"),special_ops:t("popups.militaryFlight.types.specialOps"),vip:t("popups.militaryFlight.types.vip"),unknown:t("popups.unknown")},n={high:"elevated",medium:"low",low:"low"},i=p(s.callsign||t("popups.unknown")),l=p(s.aircraftType.toUpperCase()),c=p(e[s.operator]||s.operatorCountry||t("popups.unknown")),r=p(s.hexCode||""),u=p(o[s.aircraftType]||s.aircraftType),d=s.squawk?p(s.squawk):"",v=s.note?p(s.note):"",h=s.registration?p(s.registration):"",m=s.aircraftModel?p(s.aircraftModel):"",$=s.verticalRate!==void 0&&s.verticalRate!==0?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryFlight.climbRate")}</span>
            <span class="stat-value">${s.verticalRate>0?"+":""}${Math.round(s.verticalRate)} fpm</span>
          </div>`:"",g=s.enriched?[s.enriched.manufacturer?`<div class="popup-stat"><span class="stat-label">${t("popups.militaryFlight.manufacturer")}</span><span class="stat-value">${p(s.enriched.manufacturer)}</span></div>`:"",s.enriched.owner?`<div class="popup-stat"><span class="stat-label">${t("popups.militaryFlight.owner")}</span><span class="stat-value">${p(s.enriched.owner)}</span></div>`:"",s.enriched.builtYear?`<div class="popup-stat"><span class="stat-label">${t("popups.militaryFlight.builtYear")}</span><span class="stat-value">${p(s.enriched.builtYear)}</span></div>`:""].join(""):"";return`
      <div class="popup-header military-flight ${s.operator}">
        <span class="popup-title">${i}</span>
        <span class="popup-badge ${n[s.confidence]||"low"}">${l}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${c}</div>
        ${h||m?`<div class="popup-subtitle" style="opacity:0.7;font-size:calc(11px * var(--wm-panel-effective-scale, 1));margin-top:-4px">${[h,m].filter(Boolean).join(" · ")}</div>`:""}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryFlight.altitude")}</span>
            <span class="stat-value">${s.altitude>0?`FL${Math.round(s.altitude/100)}`:t("popups.militaryFlight.ground")}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryFlight.speed")}</span>
            <span class="stat-value">${s.speed} kts</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryFlight.heading")}</span>
            <span class="stat-value">${Math.round(s.heading)}°</span>
          </div>
          ${$}
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryFlight.hexCode")}</span>
            <span class="stat-value">${r}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.type")}</span>
            <span class="stat-value">${u}</span>
          </div>
          ${s.squawk?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryFlight.squawk")}</span>
            <span class="stat-value">${d}</span>
          </div>
          `:""}
          ${g}
        </div>
        ${s.note?`<p class="popup-description">${v}</p>`:""}
${Ss("wingbitsEnrichment")?`<div class="wingbits-live-section"><div class="wingbits-live-loading" style="font-size:calc(11px * var(--wm-panel-effective-scale, 1));opacity:0.5;padding:4px 0">${t("popups.mapPopup.flight.loadingWingbits")}</div></div>`:""}
        <div class="popup-attribution">${ha(s.source)}</div>
      </div>
    `}getFlagEmoji(s){if(!s||s.length!==2)return"";const e=s.toUpperCase().split("").map(o=>127397+o.charCodeAt(0));try{return String.fromCodePoint(...e)}catch{return""}}getOperatorCountryCode(s){return(s.operatorCountry?_s(s.operatorCountry):null)||E.OPERATOR_COUNTRY_MAP[s.operator]||""}formatCoord(s,e){const o=s>=0?"N":"S",n=e>=0?"E":"W";return`${Math.abs(s).toFixed(3)}°${o}, ${Math.abs(e).toFixed(3)}°${n}`}renderClusterVesselItem(s,e){const o=this.getOperatorCountryCode(s),n=o?this.getFlagEmoji(o):"";return`<button type="button" class="cluster-vessel-item" data-vessel-index="${e}">${n?`<span class="flag-icon-small">${n}</span> `:""}${p(s.name||`${t("popups.militaryVessel.vessel")} ${s.mmsi}`)} - ${p(os(s))}</button>`}renderMilitaryVesselPopup(s,e=!1){const o={usn:"US Navy",uscg:"US Coast Guard",rn:"Royal Navy",fn:"French Navy",plan:"Chinese navy",ruf:"Russian Navy",jmsdf:"Japan Maritime SDF",rokn:"ROK Navy",other:t("popups.unknown")},n={carrier:"Aircraft Carrier",destroyer:"Destroyer",frigate:"Frigate",submarine:"Submarine",amphibious:"Amphibious",patrol:"Patrol",auxiliary:"Auxiliary",research:"Research",icebreaker:"Icebreaker",special:"Special",unknown:t("popups.unknown")},i=s.isDark?`<span class="popup-badge high">${t("popups.militaryVessel.aisDark")}</span>`:"",l=s.usniSource?`<span class="popup-badge" style="background:rgba(255,170,50,0.15);border:1px solid rgba(255,170,50,0.5);color:#ffaa44;">${t("popups.militaryVessel.estPosition")}</span>`:`<span class="popup-badge" style="background:rgba(68,255,136,0.15);border:1px solid rgba(68,255,136,0.5);color:#44ff88;">${t("popups.militaryVessel.aisLive")}</span>`,c=s.usniDeploymentStatus&&s.usniDeploymentStatus!=="unknown"?`<span class="popup-badge ${s.usniDeploymentStatus==="deployed"?"high":s.usniDeploymentStatus==="underway"?"elevated":"low"}">${p(A(s.usniDeploymentStatus.replace("-"," ")))}</span>`:"",r=os(s,n),u=os(s).toUpperCase(),d=p(s.name||`${t("popups.militaryVessel.vessel")} ${s.mmsi}`),v=p(o[s.operator]||s.operatorCountry||t("popups.unknown")),h=p(r),m=p(u),$=p(s.mmsi||"—"),g=s.hullNumber?p(s.hullNumber):"",b=s.note?p(s.note):"",y=this.getOperatorCountryCode(s),f=y?this.getFlagEmoji(y):"",w=s.lastAisUpdate?`${new Date(s.lastAisUpdate).toLocaleString()}${s.aisGapMinutes?` (${s.aisGapMinutes}m ago)`:""}`:t("popups.unknown"),S=s.track&&s.track.length>0?`<div class="popup-section">
          <details>
            <summary>${t("popups.militaryVessel.recentTracking")}</summary>
            <div class="popup-section-content">
              <div class="vessel-history-list">
                ${s.track.slice(-5).reverse().map((_,ps)=>`
                  <div class="vessel-history-item">
                    <span class="history-point">${this.formatCoord(_[0],_[1])}</span>
                    ${ps===0?`<span class="history-tag">${t("popups.militaryVessel.lastReport")}</span>`:""}
                  </div>
                `).join("")}
              </div>
            </div>
          </details>
        </div>`:"",L=s.usniActivityDescription||s.usniRegion||s.usniStrikeGroup?`
      <div class="popup-section usni-intel-section">
        <div class="section-header usni">
          <span class="section-label">${t("popups.militaryVessel.usniIntel")}</span>
        </div>
        <div class="usni-intel-content">
          ${s.usniStrikeGroup?`<div class="usni-field"><strong>${t("popups.militaryVessel.strikeGroup")}:</strong> ${p(s.usniStrikeGroup)}</div>`:""}
          ${s.usniRegion?`<div class="usni-field"><strong>${t("popups.militaryVessel.region")}:</strong> ${p(s.usniRegion)}</div>`:""}
          ${s.usniActivityDescription?`<p class="usni-description">${p(s.usniActivityDescription)}</p>`:""}
          ${s.usniArticleUrl&&T(s.usniArticleUrl)?`
            <div class="usni-source-row">
              <a href="${T(s.usniArticleUrl)}" target="_blank" rel="noopener noreferrer" class="usni-link">
                ${t("popups.militaryVessel.usniSource")} ${s.usniArticleDate?`(${new Date(s.usniArticleDate).toLocaleDateString()})`:""}
              </a>
            </div>
          `:""}
        </div>
      </div>
    `:"";return`
      <div class="popup-header military-vessel ${s.operator}">
        <div class="popup-title-row">
          <span class="popup-title">${d}</span>
          ${s.hullNumber?`<span class="hull-badge">${g}</span>`:""}
        </div>
        <div class="popup-badges">
          ${i}
          ${l}
          ${c}
          <span class="popup-badge elevated">${m}</span>
        </div>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        ${e?`<button type="button" class="popup-back">← ${t("popups.militaryCluster.backToGroup")}</button>`:""}
        <div class="popup-subtitle">
          ${f?`<span class="flag-icon">${f}</span>`:""}
          <span class="operator-label">${v}</span>
        </div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.type")}</span>
            <span class="stat-value">${h}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryVessel.speed")}</span>
            <span class="stat-value">${s.usniSource?t("popups.unknown"):`${s.speed} kts`}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryVessel.heading")}</span>
            <span class="stat-value">${s.usniSource?t("popups.unknown"):`${Math.round(s.heading)}°`}</span>
          </div>
          ${s.mmsi?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryVessel.mmsi")}</span>
            <span class="stat-value">${$}</span>
          </div>
          `:""}
          ${s.nearChokepoint?`
          <div class="popup-stat warning">
            <span class="stat-label">${t("popups.militaryVessel.nearChokepoint")}</span>
            <span class="stat-value">${p(s.nearChokepoint)}</span>
          </div>
          `:""}
          ${s.nearBase?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryVessel.nearBase")}</span>
            <span class="stat-value">${p(s.nearBase)}</span>
          </div>
          `:""}
          <div class="popup-stat full-width">
            <span class="stat-label">${t("popups.militaryVessel.lastSeen")}</span>
            <span class="stat-value">${w}</span>
          </div>
        </div>

        ${L}
        ${S}

        ${s.note?`<p class="popup-description">${b}</p>`:""}
        ${s.isDark?`<p class="popup-description alert">${t("popups.militaryVessel.darkDescription")}</p>`:""}
        ${s.usniSource?`<p class="popup-description" style="opacity:0.7;font-size:0.85em">${t("popups.militaryVessel.approximatePosition")}</p>`:""}
        ${s.usniArticleUrl&&!L&&T(s.usniArticleUrl)?`<div class="popup-attribution"><a href="${T(s.usniArticleUrl)}" target="_blank" rel="noopener noreferrer">${t("popups.militaryVessel.usniSource")}${s.usniArticleDate?` (${new Date(s.usniArticleDate).toLocaleDateString()})`:""}</a></div>`:""}
      </div>
    `}renderMilitaryFlightClusterPopup(s){const e={exercise:t("popups.militaryCluster.flightActivity.exercise"),patrol:t("popups.militaryCluster.flightActivity.patrol"),transport:t("popups.militaryCluster.flightActivity.transport"),unknown:t("popups.militaryCluster.flightActivity.unknown")},o={exercise:"high",patrol:"elevated",transport:"low",unknown:"low"},n=s.activityType||"unknown",i=p(s.name),l=p(n.toUpperCase()),c=s.dominantOperator?p(s.dominantOperator.toUpperCase()):"",r=s.flights.slice(0,5).map(d=>`<div class="cluster-flight-item">${p(d.callsign)} - ${p(d.aircraftType)}</div>`).join(""),u=s.flightCount>5?`<div class="cluster-more">${t("popups.militaryCluster.moreAircraft",{count:String(s.flightCount-5)})}</div>`:"";return`
      <div class="popup-header military-cluster">
        <span class="popup-title">${i}</span>
        <span class="popup-badge ${o[n]||"low"}">${t("popups.militaryCluster.aircraftCount",{count:String(s.flightCount)})}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${e[n]||t("popups.militaryCluster.flightActivity.unknown")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryCluster.aircraft")}</span>
            <span class="stat-value">${s.flightCount}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryCluster.activity")}</span>
            <span class="stat-value">${l}</span>
          </div>
          ${s.dominantOperator?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryCluster.primary")}</span>
            <span class="stat-value">${c}</span>
          </div>
          `:""}
        </div>
        <div class="popup-section">
          <span class="section-label">${t("popups.militaryCluster.trackedAircraft")}</span>
          <div class="cluster-flights">
            ${r}
            ${u}
          </div>
        </div>
      </div>
    `}renderMilitaryVesselClusterPopup(s){var f;const e={exercise:t("popups.militaryCluster.vesselActivity.exercise"),deployment:t("popups.militaryCluster.vesselActivity.deployment"),patrol:t("popups.militaryCluster.vesselActivity.patrol"),transit:t("popups.militaryCluster.vesselActivity.transit"),unknown:t("popups.militaryCluster.vesselActivity.unknown")},o={exercise:"high",deployment:"high",patrol:"elevated",transit:"low",unknown:"low"},n=s.activityType||"unknown",i=p(s.name),l=p(n.toUpperCase()),c=s.region?p(s.region):"",r={};s.vessels.forEach(w=>{r[w.operator]=(r[w.operator]||0)+1});const u=(f=Object.entries(r).sort((w,S)=>S[1]-w[1])[0])==null?void 0:f[0],d=u&&E.OPERATOR_COUNTRY_MAP[u]||"",v=d?this.getFlagEmoji(d):"",h=s.vessels.slice(0,5).map((w,S)=>this.renderClusterVesselItem(w,S)).join(""),m=s.vessels.length>5?s.vessels.slice(5).map((w,S)=>this.renderClusterVesselItem(w,S+5)).join(""):"",$=s.vessels.length-5,g=p(t("popups.militaryCluster.moreVessels",{count:String($)})),b=p(t("popups.militaryCluster.showLess")),y=m?`${h}<div class="cluster-vessels-hidden" style="display:none">${m}</div><button type="button" class="cluster-toggle" data-more="${g}" data-less="${b}">${g}</button>`:h;return`
      <div class="popup-header military-cluster">
        <span class="popup-title">${i}</span>
        <span class="popup-badge ${o[n]||"low"}">${t("popups.militaryCluster.vesselsCount",{count:String(s.vesselCount)})}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${v?`<span class="flag-icon">${v}</span> `:""}${e[n]||t("popups.militaryCluster.vesselActivity.unknown")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryCluster.vessels")}</span>
            <span class="stat-value">${s.vesselCount}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.militaryCluster.activity")}</span>
            <span class="stat-value">${l}</span>
          </div>
          ${s.region?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.region")}</span>
            <span class="stat-value">${c}</span>
          </div>
          `:""}
        </div>
        <div class="popup-section">
          <span class="section-label">${t("popups.militaryCluster.trackedVessels")}</span>
          <div class="cluster-vessels">
            ${y}
          </div>
        </div>
      </div>
    `}sanitizeClassToken(s,e="unknown"){return String(s||"").trim().replace(/[^A-Za-z0-9_-]/g,"").replace(/^[^A-Za-z_]/,"")||e}renderNaturalEventPopup(s){var c;const e={severeStorms:"high",wildfires:"high",volcanoes:"high",earthquakes:"elevated",floods:"elevated",landslides:"elevated",drought:"medium",dustHaze:"low",snow:"low",tempExtremes:"elevated",seaLakeIce:"low",waterColor:"low",manmade:"elevated"},o=Nt(s.category),n=e[s.category]||"low",i=this.sanitizeClassToken(s.category,"manmade"),l=this.getTimeAgo(s.date);return`
      <div class="popup-header nat-event ${i}">
        <span class="popup-icon">${o}</span>
        <span class="popup-title">${p(s.categoryTitle.toUpperCase())}</span>
        <span class="popup-badge ${n}">${s.closed?t("popups.naturalEvent.closed"):t("popups.naturalEvent.active")}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.title)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.naturalEvent.reported")}</span>
            <span class="stat-value">${l}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
          ${s.magnitude?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.magnitude")}</span>
            <span class="stat-value">${s.magnitude}${s.magnitudeUnit?` ${p(s.magnitudeUnit)}`:""}</span>
          </div>
          `:""}
          ${s.sourceName?`
          <div class="popup-stat">
            <span class="stat-label">${t("popups.source")}</span>
            <span class="stat-value">${p(s.sourceName)}</span>
          </div>
          `:""}
        </div>
        ${s.stormName||s.windKt||(c=s.agencyObservations)!=null&&c.length?this.renderTcDetails(s):""}
        ${s.description&&!s.windKt?`<p class="popup-description">${p(s.description)}</p>`:""}
        ${s.sourceUrl?`<a href="${T(s.sourceUrl)}" target="_blank" class="popup-link">${t("popups.naturalEvent.viewOnSource",{source:p(s.sourceName||t("popups.source"))})} →</a>`:""}
        <div class="popup-attribution">${t("popups.naturalEvent.attribution")}</div>
      </div>
    `}renderTcDetails(s){const e={0:"#5ebaff",1:"#00faf4",2:"#ffffcc",3:"#ffe775",4:"#ffc140",5:"#ff6060"},o=s.stormCategory??0,n=e[o]||e[0],i=s.classification||(o>0?`Category ${o}`:t("popups.naturalEvent.tropicalSystem")),l=s.agencyObservations??[],c=l.map(r=>{const u=r.windKt!=null?`${r.windKt} kt${r.windAveragingPeriodMinutes?` (${t("popups.mapPopup.natural.minuteMean",{count:r.windAveragingPeriodMinutes})})`:""}`:t("popups.mapPopup.natural.windNotReported"),d=r.sourceName||r.agency,v=r.agencyId?` · ${r.agencyId}`:"",h=r.status?` · ${r.status}`:"";return`<div class="popup-stat" style="grid-column: 1 / -1"><span class="stat-label">${p(d)}${p(v)}</span><span class="stat-value">${p(u+h)}</span></div>`}).join("");return`
      <div class="popup-stats">
        ${s.stormName?`
        <div class="popup-stat" style="grid-column: 1 / -1">
          <span class="stat-label">${t("popups.naturalEvent.storm")}</span>
          <span class="stat-value">${p(s.stormName)}</span>
        </div>`:""}
        <div class="popup-stat">
          <span class="stat-label">${t("popups.naturalEvent.classification")}</span>
          <span class="stat-value" style="color: ${n}">${p(i)}</span>
        </div>
        ${s.windKt!=null?`
        <div class="popup-stat">
          <span class="stat-label">${t("popups.naturalEvent.maxWind")}</span>
          <span class="stat-value">${s.windKt} kt (${Math.round(s.windKt*1.15078)} mph)</span>
        </div>`:""}
        ${s.windAveragingPeriodMinutes!=null?`
        <div class="popup-stat">
          <span class="stat-label">${t("popups.mapPopup.natural.windAverage")}</span>
          <span class="stat-value">${t("popups.mapPopup.natural.minuteMean",{count:s.windAveragingPeriodMinutes})}</span>
        </div>`:""}
        ${s.canonicalId?`
        <div class="popup-stat">
          <span class="stat-label">${t("popups.mapPopup.natural.canonicalMatch")}</span>
          <span class="stat-value">${p(s.matchingConfidence||t("popups.mapPopup.natural.agencyIdentifier"))}</span>
        </div>`:""}
        ${s.pressureMb!=null?`
        <div class="popup-stat">
          <span class="stat-label">${t("popups.naturalEvent.pressure")}</span>
          <span class="stat-value">${s.pressureMb} mb</span>
        </div>`:""}
        ${s.movementSpeedKt!=null?`
        <div class="popup-stat">
          <span class="stat-label">${t("popups.naturalEvent.movement")}</span>
          <span class="stat-value">${s.movementDir!=null?s.movementDir+"° at ":""}${s.movementSpeedKt} kt</span>
        </div>`:""}
        ${l.length>0?`
        <div class="popup-stat" style="grid-column: 1 / -1">
          <span class="stat-label">${t("popups.mapPopup.natural.agencyObservations")}</span>
          <span class="stat-value">${l.length}</span>
        </div>
        ${c}`:""}
      </div>
    `}renderPortPopup(s){const e={container:t("popups.port.types.container"),oil:t("popups.port.types.oil"),lng:t("popups.port.types.lng"),naval:t("popups.port.types.naval"),mixed:t("popups.port.types.mixed"),bulk:t("popups.port.types.bulk")},o={container:"elevated",oil:"high",lng:"high",naval:"elevated",mixed:"normal",bulk:"low"},n={container:"🏭",oil:"🛢️",lng:"🔥",naval:"⚓",mixed:"🚢",bulk:"📦"},i=s.rank?`<div class="popup-stat"><span class="stat-label">${t("popups.port.worldRank")}</span><span class="stat-value">#${s.rank}</span></div>`:"";return`
      <div class="popup-header port ${p(s.type)}">
        <span class="popup-icon">${n[s.type]||"🚢"}</span>
        <span class="popup-title">${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${o[s.type]||"normal"}">${e[s.type]||p(A(s.type))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.country)}</div>
        <div class="popup-stats">
          ${i}
          <div class="popup-stat">
            <span class="stat-label">${t("popups.type")}</span>
            <span class="stat-value">${e[s.type]||p(A(s.type))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${p(s.note)}</p>
      </div>
    `}renderSpaceportPopup(s){const e={active:"elevated",construction:"high",inactive:"low"},o={active:t("popups.spaceport.status.active"),construction:t("popups.spaceport.status.construction"),inactive:t("popups.spaceport.status.inactive")};return`
      <div class="popup-header spaceport ${s.status}">
        <span class="popup-icon">🚀</span>
        <span class="popup-title">${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${e[s.status]||"normal"}">${o[s.status]||p(A(s.status))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.operator)} • ${p(s.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.spaceport.launchActivity")}</span>
            <span class="stat-value">${p(s.launches.toUpperCase())}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${t("popups.spaceport.description")}</p>
      </div>
    `}renderMineralPopup(s){const e={producing:"elevated",development:"high",exploration:"low"},o={producing:t("popups.mineral.status.producing"),development:t("popups.mineral.status.development"),exploration:t("popups.mineral.status.exploration")},n=s.mineral==="Lithium"?"🔋":s.mineral==="Rare Earths"?"🧲":"💎";return`
      <div class="popup-header mineral ${s.status}">
        <span class="popup-icon">${n}</span>
        <span class="popup-title">${p(s.name.toUpperCase())}</span>
        <span class="popup-badge ${e[s.status]||"normal"}">${o[s.status]||p(A(s.status))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${t("popups.mineral.projectSubtitle",{mineral:p(s.mineral.toUpperCase())})}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.operator")}</span>
            <span class="stat-value">${p(s.operator)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.country")}</span>
            <span class="stat-value">${p(s.country)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.coordinates")}</span>
            <span class="stat-value">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${p(s.significance)}</p>
      </div>
    `}renderStockExchangePopup(s){const e=s.tier.toUpperCase(),o=s.tier==="mega"?"high":s.tier==="major"?"medium":"low";return`
      <div class="popup-header exchange">
        <span class="popup-title">${p(s.shortName)}</span>
        <span class="popup-badge ${o}">${e}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.name)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.location")}</span>
            <span class="stat-value">${p(s.city)}, ${p(s.country)}</span>
          </div>
          ${s.marketCap?`<div class="popup-stat"><span class="stat-label">${t("popups.stockExchange.marketCap")}</span><span class="stat-value">$${s.marketCap}T</span></div>`:""}
          ${s.tradingHours?`<div class="popup-stat"><span class="stat-label">${t("popups.tradingHours")}</span><span class="stat-value">${p(s.tradingHours)}</span></div>`:""}
        </div>
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
      </div>
    `}renderFinancialCenterPopup(s){const e=s.type.toUpperCase();return`
      <div class="popup-header financial-center">
        <span class="popup-title">${p(s.name)}</span>
        <span class="popup-badge">${e}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.location")}</span>
            <span class="stat-value">${p(s.city)}, ${p(s.country)}</span>
          </div>
          ${s.gfciRank?`<div class="popup-stat"><span class="stat-label">${t("popups.financialCenter.gfciRank")}</span><span class="stat-value">#${s.gfciRank}</span></div>`:""}
        </div>
        ${s.specialties&&s.specialties.length>0?`
          <div class="popup-section">
            <span class="section-label">${t("popups.financialCenter.specialties")}</span>
            <div class="popup-tags">
              ${s.specialties.map(o=>`<span class="popup-tag">${p(o)}</span>`).join("")}
            </div>
          </div>
        `:""}
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
      </div>
    `}renderCentralBankPopup(s){const e=s.type.toUpperCase();return`
      <div class="popup-header central-bank">
        <span class="popup-title">${p(s.shortName)}</span>
        <span class="popup-badge">${e}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p(s.name)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.location")}</span>
            <span class="stat-value">${p(s.city)}, ${p(s.country)}</span>
          </div>
          ${s.currency?`<div class="popup-stat"><span class="stat-label">${t("popups.centralBank.currency")}</span><span class="stat-value">${p(s.currency)}</span></div>`:""}
        </div>
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
      </div>
    `}renderCommodityHubPopup(s){const e=s.type.toUpperCase();return`
      <div class="popup-header commodity-hub">
        <span class="popup-title">${p(s.name)}</span>
        <span class="popup-badge">${e}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.location")}</span>
            <span class="stat-value">${p(s.city)}, ${p(s.country)}</span>
          </div>
        </div>
        ${s.commodities&&s.commodities.length>0?`
          <div class="popup-section">
            <span class="section-label">${t("popups.commodityHub.commodities")}</span>
            <div class="popup-tags">
              ${s.commodities.map(o=>`<span class="popup-tag">${p(o)}</span>`).join("")}
            </div>
          </div>
        `:""}
        ${s.description?`<p class="popup-description">${p(s.description)}</p>`:""}
      </div>
    `}normalizeSeverity(s){const e=(s||"").trim().toLowerCase();return e==="high"?"high":e==="medium"?"medium":"low"}renderIranEventPopup(s){const e=this.normalizeSeverity(s.severity),o=s.timestamp?this.getTimeAgo(new Date(s.timestamp)):"",n=T(s.sourceUrl),i=s.relatedEvents&&s.relatedEvents.length>0?`
        <div class="popup-section">
          <span class="section-label">${t("popups.iranEvent.relatedEvents")}</span>
          <ul class="cluster-list">
            ${s.relatedEvents.map(l=>{const c=this.normalizeSeverity(l.severity),r=l.timestamp?this.getTimeAgo(new Date(l.timestamp)):"",u=l.title.length>60?l.title.slice(0,60)+"…":l.title;return`<li class="cluster-item"><span class="popup-badge ${c}">${p(P(c))}</span> ${p(u)}${r?` <span style="color:var(--text-muted);font-size:calc(10px * var(--wm-panel-effective-scale, 1));">${p(r)}</span>`:""}</li>`}).join("")}
          </ul>
        </div>`:"";return`
      <div class="popup-header iranEvent ${e}">
        <span class="popup-title">${p(s.title)}</span>
        <span class="popup-badge ${e}">${p(P(e))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.type")}</span>
            <span class="stat-value">${p(s.category)}</span>
          </div>
          ${s.locationName?`<div class="popup-stat">
            <span class="stat-label">${t("popups.location")}</span>
            <span class="stat-value">${p(s.locationName)}</span>
          </div>`:""}
          ${o?`<div class="popup-stat">
            <span class="stat-label">${t("popups.time")}</span>
            <span class="stat-value">${p(o)}</span>
          </div>`:""}
        </div>
        ${this.renderReservoirSiteContext(s.latitude,s.longitude,`${s.title} ${s.category} ${s.locationName}`)}
        ${i}
        ${n?`<a href="${p(n)}" target="_blank" rel="noopener noreferrer nofollow" class="popup-link">${t("popups.source")} →</a>`:""}
      </div>
    `}renderGpsJammingPopup(s){const e=s.level==="high",o=e?"critical":"medium";return`
      <div class="popup-header" style="background:${e?"#ff5050":"#ffb432"}">
        <span class="popup-title">${t("popups.gpsJamming.title")}</span>
        <span class="popup-badge ${o}">${p(P(s.level))}</span>
        <button class="popup-close" aria-label="${t("common.close")}">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${t("popups.gpsJamming.navPerformance")}</span>
            <span class="stat-value">${Number(s.pct).toFixed(1)}%</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.gpsJamming.samples")}</span>
            <span class="stat-value">${s.affectedAircraft}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.gpsJamming.aircraft")}</span>
            <span class="stat-value">${s.totalAircraft}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${t("popups.gpsJamming.h3Hex")}</span>
            <span class="stat-value" style="font-size:calc(10px * var(--wm-panel-effective-scale, 1))">${p(s.h3)}</span>
          </div>
        </div>
      </div>
    `}};C(E,"historyCache",new Map),C(E,"historyInflight",new Set),C(E,"heightByType",new Map),C(E,"HEIGHT_DRIFT_PX",12),C(E,"OPERATOR_COUNTRY_MAP",{usn:"US",usaf:"US",usmc:"US",usa:"US",uscg:"US",rn:"GB",raf:"GB",plan:"CN",plaaf:"CN",vks:"RU",ruf:"RU",faf:"FR",fn:"FR",gaf:"DE",iaf:"IL",jmsdf:"JP",rokn:"KR"});let Ns=E;function ga(a){const s=[...new Set(a.contributingSources)];return s.length>0?s.join(" + "):a.source}function ba(a){switch(a){case"high":return"High";case"medium":return"Medium";default:return"Low"}}const ya=600,fa=".map-controls, .time-slider, .layer-toggles, .map-legend, .layer-help-popup, .layer-explanation-popup, .map-popup, button, select, input, textarea, a";function bp(a){return a instanceof Element&&a.closest(fa)!==null}const wa=10;function yp(a,s={}){let e=null,o=null,n=!1;const i=()=>{e&&clearTimeout(e),e=null,o=null},d=[["pointerdown",v=>{var h;if(n=!1,v.pointerType!=="touch"||o||(h=s.ignore)!=null&&h.call(s,v.target))return i();o={id:v.pointerId,x:v.clientX,y:v.clientY},e=setTimeout(()=>{const m=o;i(),m&&(n=!0,a.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,cancelable:!0,clientX:m.x,clientY:m.y})))},ya)}],["pointermove",v=>{(o==null?void 0:o.id)===v.pointerId&&Math.hypot(v.clientX-o.x,v.clientY-o.y)>wa&&i()}],["pointerup",i],["pointercancel",i],["click",v=>{n&&(n=!1,v.preventDefault(),v.stopPropagation())}],["contextmenu",v=>{v.isTrusted&&i()}]];for(const[v,h]of d)a.addEventListener(v,h,{capture:!0});return()=>{i();for(const[v,h]of d)a.removeEventListener(v,h,{capture:!0})}}const N={source:"layerExplanation.labels.source",freshness:"layerExplanation.labels.freshness",confidence:"layerExplanation.labels.confidence",limitations:"layerExplanation.labels.limitations",related:"layerExplanation.labels.related",groundedIn:"layerExplanation.labels.groundedIn",curated:"layerExplanation.labels.curated",fallback:"layerExplanation.labels.fallback",layerGuide:"layerExplanation.labels.layerGuide",close:"common.close"};function Zs(a){return Array.isArray(a)?a.filter(s=>typeof s=="string"):!a||typeof a!="object"?[]:Object.keys(a).filter(s=>/^\d+$/.test(s)).sort((s,e)=>Number(s)-Number(e)).map(s=>a[s]).filter(s=>typeof s=="string")}function Fs(a,s){return typeof a=="string"?a.trim()!==""&&a!==s:Zs(a).length>0}function fp(a){return s=>{const e=a(s,{returnObjects:!0});if(Fs(e,s))return e;const o=a(s,{lng:"en",returnObjects:!0});return Fs(o,s)?o:s}}function M(a,s){const e=a(s);return typeof e=="string"&&e!==s?e:""}function Us(a,s){return Zs(a(s))}function Ca(a){return a.map(s=>`<li>${p(s)}</li>`).join("")}function wp(a,s,e){const o=zt(s.key,s.coverage),n=Us(e,`${o}.related`),i=n.length>0?n.map(r=>`<span>${p(r)}</span>`).join(""):`<span>${p(M(e,N.layerGuide))}</span>`,l=s.evidence.length>0?`<div class="layer-explanation-grounding"><span>${p(M(e,N.groundedIn))}</span>${s.evidence.map(r=>`<code>${p(r)}</code>`).join("")}</div>`:"",c=s.coverage==="curated"?M(e,N.curated):M(e,N.fallback);return`
    <div class="layer-explanation-header">
      <div>
        <span class="layer-explanation-kicker">${p(M(e,`${o}.category`))}</span>
        <strong>${p(a)}</strong>
      </div>
      <button class="layer-explanation-close" aria-label="${p(M(e,N.close))}">×</button>
    </div>
    <div class="layer-explanation-content">
      <div class="layer-explanation-status ${s.coverage}">${p(c)}</div>
      <p class="layer-explanation-purpose">${p(M(e,`${o}.purpose`))}</p>
      <div class="layer-explanation-grid">
        <section>
          <span>${p(M(e,N.source))}</span>
          <p>${p(M(e,`${o}.source`))}</p>
        </section>
        <section>
          <span>${p(M(e,N.freshness))}</span>
          <p>${p(M(e,`${o}.freshness`))}</p>
        </section>
        <section>
          <span>${p(M(e,N.confidence))}</span>
          <p>${p(M(e,`${o}.confidence`))}</p>
        </section>
      </div>
      <div class="layer-explanation-section">
        <span>${p(M(e,N.limitations))}</span>
        <ul>${Ca(Us(e,`${o}.limitations`))}</ul>
      </div>
      <div class="layer-explanation-section">
        <span>${p(M(e,N.related))}</span>
        <div class="layer-explanation-related">${i}</div>
      </div>
      ${l}
    </div>
  `}export{G as A,Q as B,Y as C,pp as D,Ga as E,qa as F,ks as G,ep as H,Ka as I,Za as J,Xa as K,sp as L,Ns as M,tp as N,ap as O,Ja as P,Vt as Q,vs as R,dp as S,A as a,op as b,$p as c,mp as d,hp as e,vp as f,ze as g,Qa as h,yp as i,Es as j,rp as k,fp as l,cp as m,up as n,np as o,ip as p,lp as q,wp as r,oa as s,Ya as t,gp as u,bp as v,Z as w,j as x,xs as y,Bt as z};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["layer-explanation-card-C7Fg9DPv.js"]=1;