import{a as e,I as t,g as r}from"./index-BhmrbbBS.js";import{x as i}from"./gdelt-intel-DU-_Fjx7.js";const a=e(()=>new t(r(),{fetch:i}));async function n(){try{return(await a().listWsbTickers({},{signal:AbortSignal.timeout(15e3)})).tickers}catch{return[]}}export{n as f};

;(globalThis.__WM_CHUNK_OWNERSHIP__||(globalThis.__WM_CHUNK_OWNERSHIP__={}))["wsb-tickers-SxLT2krS.js"]=1;