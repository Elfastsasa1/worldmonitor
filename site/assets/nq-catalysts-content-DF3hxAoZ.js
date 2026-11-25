import{a_ as r,b1 as p,cd as _,ce as y,aY as u,b0 as v,a$ as A,cf as S}from"./App-DyLzL2rx.js";import{e}from"./sanitize-D7dx0cA1.js";import{f as l,n as q}from"./nq-pulse-content-DPaSxkC0.js";const i={currentMaxMs:_,delayedMaxMs:y},E="No tracked NQ earnings in this window",h="No high-impact US releases in this window",d="Unavailable",$=new Set(S);function f(s,a,n){return!!s&&s>=a&&s<=n}function N(s,a){return r(p(s,a-1))}function U(s,a=new Date){const n=r(a),c=N(a,A);return s.filter(t=>{var o;return t.country==="US"&&((o=t.impact)==null?void 0:o.toLowerCase())==="high"&&f(t.date,n,c)}).sort((t,o)=>t.date.localeCompare(o.date)||t.event.localeCompare(o.event))}function b(s,a=new Date){const n=r(a),c=N(a,v);return s.filter(t=>$.has(t.symbol)&&f(t.date,n,c)).sort((t,o)=>t.date.localeCompare(o.date)||t.symbol.localeCompare(o.symbol))}function M(s){return s||"Time unknown"}function O(s){const a=s.nowMs??Date.now(),n=s.macroUnavailable?"Freshness unavailable":l(s.macroAsOf,a,i),c=s.earningsUnavailable?"Freshness unavailable":l(s.earningsAsOf,a,i);return`
    <section class="nq-catalysts-section">
      <h3>US macro</h3>
      ${C(s.macro,s.macroUnavailable)}
      ${m(n,s.macroAsOf)}
    </section>
    <section class="nq-catalysts-section">
      <h3>NQ influence earnings</h3>
      ${L(s.earnings,s.earningsUnavailable)}
      ${m(c,s.earningsAsOf)}
    </section>
    <div class="nq-pulse-disclosure">${e(u)}</div>`}function m(s,a){return`<div class="nq-catalysts-freshness">
    <span>${e(s)}</span>
    <span>${e(q(a,s))}</span>
  </div>`}function C(s,a){return a?`<div class="nq-catalysts-empty">${e(d)}</div>`:s.length===0?`<div class="nq-catalysts-empty">${e(h)}</div>`:s.map(n=>`
    <div class="nq-catalysts-row">
      <span class="nq-catalysts-date">${e(n.date)}</span>
      <span class="nq-catalysts-name">${e(n.event)}</span>
      <span class="nq-catalysts-time">Time unknown</span>
    </div>`).join("")}function L(s,a){return a?`<div class="nq-catalysts-empty">${e(d)}</div>`:s.length===0?`<div class="nq-catalysts-empty">${e(E)}</div>`:s.map(n=>`
    <div class="nq-catalysts-row">
      <span class="nq-catalysts-date">${e(n.date)}</span>
      <span class="nq-catalysts-name">${e(n.symbol)}${n.company?` · ${e(n.company)}`:""}</span>
      <span class="nq-catalysts-time">${e(M(n.hour))}</span>
    </div>`).join("")}export{U as a,O as c,b as f,N as n};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["nq-catalysts-content-DF3hxAoZ.js"]=1;