import{i as X,b as M,c as j}from"./audience-profile-urgLNiEm.js";import{t as P}from"./theme-colors-ToRFEbn-.js";import{d as V}from"./main-k_5Od7i9.js";import"./clerk-CAuJ7nO4.js";import"./web-origin-CYWcatKL.js";import"./i18n-qlunRAMb.js";import"./i18n-url-C-jHRZJm.js";import"./safe-storage-D7AmwIPS.js";/* empty css                         */import"./analytics-UdF1aNpQ.js";import"./auth-state-DLqMTLIu.js";import"./convex-client-C_8ewSzp.js";import"./tauri-bridge-CDOUxP2F.js";import"./sensitive-url-params-D8a3nWur.js";import"./dom-utils-BodelmHa.js";import"./debugbear-rum-EsMiF_vs.js";import"./panels-XFlv2Kkw.js";import"./runtime-config-tgv8gRzl.js";import"./entitlements-iEraPnPS.js";import"./tab-store-DkGwkIkz.js";import"./map-layer-definitions-BCWegBzb.js";import"./globe-marker-probe-CYyPnhKX.js";import"./theme-manager-C55ZS66X.js";import"./font-settings-B6XmwZwl.js";const K=`
/* Quiet chrome on the dashboard's own neutrals; the one accent is the signal
   green, used only for the chosen answer and the step meter. 4px grid. */
.about-you-card {
  position: fixed;
  inset-block-end: 16px;
  inset-inline-start: 16px;
  z-index: 4000; /* above panels, below the mission picker and modals */
  box-sizing: border-box;
  width: min(360px, calc(100vw - 32px));
  /* A short desktop window must not push the close button off the top. */
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.32);
  font-size: 12px;
  line-height: 1.5;
  animation: about-you-card-in 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes about-you-card-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: none; }
}

.about-you-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.about-you-card__title {
  margin: 0;
  color: var(--text-dim);
  font-size: 12px;
  font-weight: 500;
}

.about-you-card__close {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  margin-inline-end: -4px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--text-muted);
  font: inherit;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 120ms ease, color 120ms ease;
}

.about-you-card__close:hover {
  background: var(--overlay-light);
  color: var(--text);
}

/* Signature: a segmented step meter, read like a signal-strength bar. */
.about-you-card__progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}

.about-you-card__progress[hidden] {
  display: none;
}

.about-you-card__meter {
  display: flex;
  flex: 1;
  gap: 4px;
}

.about-you-card__segment {
  flex: 1;
  height: 2px;
  border-radius: 1px;
  background: var(--overlay-medium);
  transition: background-color 200ms ease;
}

.about-you-card__segment[data-state='done'],
.about-you-card__segment[data-state='current'] {
  background: var(--green);
}

.about-you-card__segment[data-state='current'] {
  opacity: 0.55;
}

.about-you-card__count {
  color: var(--text-muted);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

.about-you-card__question {
  display: block;
  margin: 16px 0 12px;
  color: var(--text);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.about-you-card__options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.about-you-card__option,
.about-you-card__done,
.about-you-card__skip,
.about-you-card__retry {
  box-sizing: border-box;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;
}

.about-you-card__option {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border);
  background: var(--overlay-subtle);
  color: var(--text-secondary, var(--text));
}

.about-you-card__option:hover {
  border-color: var(--border-strong);
  background: var(--overlay-light);
  color: var(--text);
}

.about-you-card__option:active {
  transform: scale(0.98);
}

.about-you-card__option[aria-pressed='true'] {
  border-color: var(--green);
  color: var(--green-text, var(--green));
}

/* A drawn check, so the chosen answer reads at a glance. */
.about-you-card__option[aria-pressed='true']::before {
  content: '';
  width: 8px;
  height: 4px;
  margin-top: -2px;
  border-inline-start: 1.5px solid currentColor;
  border-block-end: 1.5px solid currentColor;
  transform: rotate(-45deg);
}

/* Long lists (primary use, role) sit in two even columns so the card stays
   short over the map. */
.about-you-card__options[data-layout='grid'] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.about-you-card__options[data-layout='grid'] .about-you-card__option {
  padding-block: 6px;
  text-align: start;
  line-height: 1.35;
}

.about-you-card__options[aria-busy='true'] .about-you-card__option {
  cursor: progress;
}

.about-you-card__option:focus-visible,
.about-you-card__close:focus-visible,
.about-you-card__done:focus-visible,
.about-you-card__skip:focus-visible,
.about-you-card__retry:focus-visible,
.about-you-card__text:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 2px;
}

.about-you-card__text {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--overlay-subtle);
  color: var(--text);
  font: inherit;
  font-size: 12px;
  resize: vertical;
}

.about-you-card__text::placeholder {
  color: var(--text-muted);
}

.about-you-card__done {
  margin-top: 12px;
  border: 0;
  background: var(--green);
  color: #0a0a0a;
  font-weight: 500;
}

.about-you-card__done:hover {
  filter: brightness(1.08);
}

.about-you-card__status {
  margin: 12px 0 0;
  color: var(--text-dim);
}

/* Collapsed, not display:none: a live region must stay in the accessibility
   tree before text is written into it, or "Saving…" and "Thanks" go unread. */
.about-you-card__status:empty {
  height: 0;
  margin: 0;
  overflow: hidden;
}

.about-you-card__retry {
  min-height: 24px;
  margin-inline-start: 8px;
  padding: 0 8px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
}

.about-you-card__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
}

.about-you-card__footer:empty {
  display: none;
}

.about-you-card__skip {
  min-height: 28px;
  margin-inline-end: -8px;
  padding: 0 8px;
  border: 0;
  background: transparent;
  color: var(--text-muted);
}

.about-you-card__skip:hover {
  color: var(--text);
}

@media (prefers-reduced-motion: reduce) {
  .about-you-card { animation: none; }
}

/* Touch screens get 44px targets. */
@media (pointer: coarse) {
  .about-you-card__option,
  .about-you-card__done,
  .about-you-card__skip {
    min-height: 44px;
  }
}

/* Phones: a bottom sheet that never takes more than 40% of the screen, so the
   map stays usable above it. It sits on top of the fixed .mobile-tab-bar
   (--wm-bottom-base, which already includes the safe-area inset), not under
   it, so its last option and Skip are never hidden. */
@media (max-width: 768px) {
  .about-you-card {
    inset-block-end: var(--wm-bottom-base, 0px);
    inset-inline: 0;
    width: auto;
    max-height: 40vh;
    overflow-y: auto;
    border-radius: 12px 12px 0 0;
    border-block-end: 0;
    box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.24);
  }
}
`,m="wm-about-you-card",R="wm-about-you-card-style",G=4e3,J=1500;function n(y,d,a){return P(`components.aboutYou.${y}`,{defaultValue:d,...a})}function r(y,d,a){const p=document.createElement(y);return p.className=d,a!==void 0&&(p.textContent=a),p}function wt(y){if(document.getElementById(m))return null;const{mode:d,questions:a,surface:p,deps:b}=y;if(a.length===0)return null;if(!document.getElementById(R)){const t=document.createElement("style");t.id=R,t.textContent=K,document.head.appendChild(t)}const i=r("section","about-you-card");i.id=m,i.setAttribute("role","region"),i.setAttribute("aria-labelledby",`${m}-title`),V(i,{reload:"safe"});const Y=r("div","about-you-card__header"),q=r("h2","about-you-card__title",n("title","Help us build World Monitor for you"));q.id=`${m}-title`;const g=r("button","about-you-card__close","×");g.type="button",g.setAttribute("aria-label",n("close","Close")),Y.append(q,g);const v=r("div","about-you-card__progress"),A=r("div","about-you-card__meter");A.setAttribute("aria-hidden","true");const N=a.map(()=>{const t=r("span","about-you-card__segment");return A.append(t),t}),B=r("span","about-you-card__count");v.append(A,B),v.hidden=a.length<2;const f=r("div","about-you-card__body"),u=r("p","about-you-card__status");u.setAttribute("role","status"),u.setAttribute("aria-live","polite");const C=r("div","about-you-card__footer"),T=r("button","about-you-card__skip",n("skip","Skip"));T.type="button",C.append(T),i.append(Y,v,f,u,C),(y.parent??document.body).appendChild(i);let _=0,E=!1,c=!1,S=!1,z=null,O="",x;const k=()=>{x!==void 0&&window.clearTimeout(x),x=void 0};b.track("about-you-shown",{surface:p,mode:d,questionCount:a.length}),d==="return"&&b.markReturnShown();const L=()=>{k(),c=!0,i.remove()},U=()=>{k(),c=!0,f.replaceChildren(),v.hidden=!0,C.replaceChildren(),u.textContent=n("thanks","Thanks. This helps us decide what to build next."),window.setTimeout(L,G)},H=()=>{_+=1,_>=a.length?U():D()},w=t=>{k();const o=t.trim();if(!o||o===O)return null;O=o;const e=b.recordFreeText(o).then(s=>(s.ok?(E=!0,b.track("about-you-answered",{surface:p,mode:d,questionId:"alternative"})):O="",s));return z=e,e},F=t=>{u.replaceChildren(document.createTextNode(n("saveFailed","Couldn't save that. Try again.")));const o=r("button","about-you-card__retry",n("retry","Retry"));o.type="button",o.addEventListener("click",t),u.append(" ",o)},Q=t=>{const o=r("p","about-you-card__question",n(`questions.${t}.label`,t));o.id=`${m}-q`;const e=r("div","about-you-card__options");e.setAttribute("role","group"),e.setAttribute("aria-labelledby",o.id),M[t].length>4&&(e.dataset.layout="grid");for(const s of M[t]){const l=r("button","about-you-card__option",n(`questions.${t}.options.${s}`,s));l.type="button",l.dataset.optionId=s,l.setAttribute("aria-pressed","false"),l.addEventListener("click",()=>{const h=()=>{S||c||(S=!0,l.setAttribute("aria-pressed","true"),e.setAttribute("aria-busy","true"),u.textContent=n("saving","Saving…"),b.recordAnswer(t,s).then(I=>{S=!1,e.removeAttribute("aria-busy"),!c&&(I.ok?(E=!0,u.textContent="",b.track("about-you-answered",{surface:p,mode:d,questionId:t}),H()):(l.setAttribute("aria-pressed","false"),F(h)))}))};h()}),e.append(l)}f.replaceChildren(o,e)},W=()=>{const t=`${m}-alternative`,o=r("label","about-you-card__question",n("questions.alternative.label","What would you use if World Monitor didn't exist?"));o.htmlFor=t;const e=r("textarea","about-you-card__text");e.id=t,e.rows=2,e.maxLength=j,e.placeholder=n("questions.alternative.placeholder","Optional"),e.addEventListener("blur",()=>void w(e.value)),e.addEventListener("input",()=>{k(),x=window.setTimeout(()=>{x=void 0,c||w(e.value)},J)});const s=r("button","about-you-card__done",n("done","Done"));s.type="button",s.addEventListener("click",()=>{const l=()=>{const h=w(e.value)??z;if(!h){U();return}u.textContent=n("saving","Saving…"),h.then(I=>{c||(I.ok?U():F(l))})};l()}),f.replaceChildren(o,e,s)};function D(){const t=a[_];B.textContent=n("progress",`${_+1} of ${a.length}`,{current:_+1,total:a.length}),N.forEach((o,e)=>{o.dataset.state=e<_?"done":e===_?"current":"todo"}),u.textContent="",X(t)?Q(t):W()}const $=async()=>{if(c)return;const t=a[_];c=!0,i.remove();const o=i.querySelector("textarea"),e=(o?w(o.value):null)??z;e&&await e,b.track("about-you-skipped",{surface:p,mode:d,questionId:t,answeredAny:E}),d==="full"&&await b.skip()};return T.addEventListener("click",()=>void $()),g.addEventListener("click",()=>{c?L():$()}),i.addEventListener("keydown",t=>{t.key==="Escape"&&(t.stopPropagation(),c?L():$())}),D(),i}export{m as ABOUT_YOU_CARD_ID,wt as mountAboutYouCard};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["AboutYouCard-Cy5F3K9x.js"]=1;