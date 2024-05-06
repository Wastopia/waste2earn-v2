"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[8187],{64240:(e,t,n)=>{n.d(t,{N:()=>l});var i=n(4262),a=n(53248),s=n(98883);function l(){const e=(0,i.jL)(),t=(0,i.GV)((e=>e.customization.hideUnavailableClaim)),n=(0,a.useCallback)((t=>{e((0,s.gu)(t))}),[e]);return(0,a.useMemo)((()=>({hideUnavailableClaim:t,updateHideUnavailableClaim:n})),[n,t])}},18187:(e,t,n)=>{n.r(t),n.d(t,{BalanceItem:()=>w,BalancesItem:()=>k,default:()=>K});var i=n(90329),a=n(53248),s=n(4704),l=n(34222),d=n(87631),o=n(18434),c=n(16688),r=n(1783),u=n(11403),x=n(84755),m=n(23412),f=n(31246),h=n(78878),p=n(64240),v=n(20416),y=n(43171),g=n(59257),j=n(97382),b=n(36092);function w(e){let{token:t,balance:n,name:f,type:y,updateUnavailableKeys:g,updateClaimedKey:w,claimedKey:k,claimedKeys:K,metadata:A,code:C}=e;const P=(0,u.A)(),{hideUnavailableClaim:O}=(0,p.N)(),[S,z]=(0,h.cO)(),[F,I]=(0,a.useState)(!1),U=!!n&&("code"===y?n<t.transFee*BigInt(2):n<t.transFee),W=(0,a.useMemo)((()=>K.includes(k)),[K,k]);(0,a.useEffect)((()=>{!0===U&&g(k)}),[U,k]);return(0,b.jsxs)(s.Ay,{container:!0,alignItems:"center",sx:{padding:"24px",borderRadius:"12px",background:P.palette.background.level1,margin:"16px 0 0 0",...O&&U||W?{display:"none"}:{},"@media(max-width: 640px)":{padding:"12px"}},children:[(0,b.jsx)(l.A,{src:t.logo,sx:{width:"32px",height:"32px",margin:"0 12px 0 0","@media(max-width: 640px)":{width:"24px",height:"24px"}},children:"\xa0"}),(0,b.jsxs)(d.A,{sx:{display:"flex",flex:1,alignItems:"center",justifyContent:"space-between"},children:[(0,b.jsx)(d.A,{children:(0,b.jsxs)(o.A,{color:"text.primary",sx:{fontSize:"24px",fontWeight:600,"@media(max-width: 640px)":{fontSize:"16px"}},children:[(0,m.t)(n,t.decimals).toFormat()," ",t.symbol]})}),(0,b.jsxs)(d.A,{sx:{display:"flex",alignItems:"center",gap:"0 10px"},children:[U?(0,b.jsx)(x.tI,{tips:"Claim amount is below the transaction fee, making it unclaimable.",iconSize:"24px"}):null,(0,b.jsx)(c.A,{variant:"contained",fullWidth:!0,size:"medium",disabled:F||U,onClick:async()=>{if(F||U||!A)return;I(!0);const e=S("Reclaim your ".concat((0,m.t)(n,t.decimals).toFormat()," ").concat(t.symbol),h.lA.loading),i=n;if(i&&i!==BigInt(0))if("code"===y&&C){const e=await(0,v.dE)(C.token0.toString(),C.token1.toString(),C.fee);if(e.status===j.i.OK){const e=await(0,v.d5)(i,t.transFee);e.status===j.i.OK?(S("Withdrew ".concat(f," successfully"),h.lA.success),w(k)):S("Failed to Withdraw ".concat(f,": ").concat(e.message),h.lA.error)}else{var a;S("Failed to Withdraw: ".concat(null!==(a=e.message)&&void 0!==a?a:""),h.lA.error)}}else{const e=await(0,v.d5)(i,t.transFee);e.status===j.i.OK?(S("Withdrew ".concat(f," successfully"),h.lA.success),w(k)):S(e.message?e.message:"Failed to Withdraw ".concat(f),h.lA.error)}z(e),I(!1)},startIcon:F?(0,b.jsx)(r.A,{size:24,color:"inherit"}):null,children:(0,b.jsx)(i.x6,{id:"CkKHX6"})})]})]})]})}function k(e){let{balance:t,updateUnavailableKeys:n,updateClaimedKey:i,claimedKey:a,claimedKeys:s,code:l,metadata:d}=e;const{result:o}=(0,f.Vs)(null===d||void 0===d?void 0:d.tokenCid.toString()),c=o?"".concat(o.symbol):"--";return o?(0,b.jsx)(w,{claimedKey:a,token:o,name:c,balance:l?null===d||void 0===d?void 0:d.passcodePrice:t,type:l?"code":"unUsed",updateUnavailableKeys:n,updateClaimedKey:i,claimedKeys:s,metadata:d,code:l}):null}function K(){const[e,t]=(0,a.useState)([]),[n,s]=(0,a.useState)([]),l=e=>{t((t=>[...new Set([...t,e])]))},c=e=>{s((t=>[...t,e]))},r=(0,a.useMemo)((()=>e.length),[e]),u=(0,g.Le)(),{result:f,loading:h}=(0,v.tX)(u),{result:p,loading:j}=(0,y.O)(null===u||void 0===u?void 0:u.toString()),{result:w,loading:K}=(0,v.fh)(),A=(0,a.useMemo)((()=>{var e;return(null!==(e=null===p||void 0===p?void 0:p.length)&&void 0!==e?e:0)+(f?1:0)}),[f,p]),C=(0,a.useMemo)((()=>0===A||(0===r?n.length===A:r+n.length===A)),[n,r,A]),P=(0,a.useMemo)((()=>K||j||h),[h,j,K]),O=(0,a.useMemo)((()=>{if(p&&w&&void 0!==f&&null!==f)return BigInt(p.length)*w.passcodePrice+f}),[p,w,f]);return(0,b.jsxs)(x.mO,{children:[(0,b.jsx)(d.A,{sx:{margin:"10px 0 0 0"},children:(0,b.jsx)(x.BI,{prevLink:"/swap",prevLabel:(0,b.jsx)(i.x6,{id:"vH2C/2"}),currentLabel:(0,b.jsx)(i.x6,{id:"YmmJ9x"})})}),(0,b.jsx)(d.A,{sx:{display:"flex",justifyContent:"center",margin:"40px 0 0 0"},children:(0,b.jsxs)(d.A,{sx:{width:"800px"},children:[(0,b.jsx)(o.A,{sx:{fontSize:"24px",fontWeight:500},color:"text.primary",children:(0,b.jsx)(i.x6,{id:"YmmJ9x"})}),(0,b.jsx)(o.A,{sx:{margin:"10px 0 0 0"},children:(0,b.jsx)(i.x6,{id:"rH+19m"})}),(0,b.jsx)(o.A,{sx:{fontSize:"16px",fontWeight:500,margin:"20px 0 0 0"},color:"text.primary",children:(0,b.jsx)(i.x6,{id:"c9l+Wh",values:{0:void 0!==O?(0,m.t)(O,8).toFormat():"--"}})}),(0,b.jsx)(d.A,{sx:{margin:"20px 0 0 0"},children:P?(0,b.jsxs)(x.FO,{children:[(0,b.jsx)("div",{}),(0,b.jsx)("div",{}),(0,b.jsx)("div",{}),(0,b.jsx)("div",{}),(0,b.jsx)("div",{}),(0,b.jsx)("div",{}),(0,b.jsx)("div",{}),(0,b.jsx)("div",{})]}):C?(0,b.jsx)(x.YQ,{}):(0,b.jsxs)(d.A,{sx:{overflow:"auto",margin:"-16px 0 0 0"},children:[f?(0,b.jsx)(k,{balance:f,claimedKey:"unusedBalance",updateUnavailableKeys:l,updateClaimedKey:c,claimedKeys:n,metadata:w},"unusedBalance"):null,null===p||void 0===p?void 0:p.map(((e,t)=>(0,b.jsx)(k,{code:e,claimedKey:t,updateUnavailableKeys:l,updateClaimedKey:c,claimedKeys:n,metadata:w},t)))]})})]})})]})}},43171:(e,t,n)=>{n.d(t,{O:()=>r,Z:()=>c});var i=n(53248),a=n(37037),s=n(93864),l=n(35479),d=n(81795),o=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function l(e){try{o(i.next(e))}catch(t){s(t)}}function d(e){try{o(i.throw(e))}catch(t){s(t)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,d)}o((i=i.apply(e,t||[])).next())}))};function c(e){return o(this,void 0,void 0,(function*(){return(0,l.Pk)(yield(yield(0,s.qy)()).getPasscodesByPrincipal(d.p.fromText(e))).data}))}function r(e,t){return(0,a.Pz)((0,i.useCallback)((()=>o(this,void 0,void 0,(function*(){if(e)return c(e)}))),[e]),t)}},20416:(e,t,n)=>{n.d(t,{Ct:()=>r,d5:()=>u,dE:()=>x,fh:()=>c,tX:()=>m});var i=n(53248),a=n(37037),s=n(93864),l=n(35479),d=n(81795),o=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function l(e){try{o(i.next(e))}catch(t){s(t)}}function d(e){try{o(i.throw(e))}catch(t){s(t)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,d)}o((i=i.apply(e,t||[])).next())}))};function c(){return(0,a.Pz)((0,i.useCallback)((()=>o(this,void 0,void 0,(function*(){return(0,l.Pk)(yield(yield(0,s.O2)()).metadata()).data}))),[]))}function r(e,t,n){return o(this,void 0,void 0,(function*(){const i=yield(yield(0,s.O2)(!0)).requestPasscode(e,t,n);return(0,l.Pk)(i)}))}function u(e,t){return o(this,void 0,void 0,(function*(){const n=yield(yield(0,s.O2)(!0)).withdraw({fee:t,amount:e});return(0,l.Pk)(n)}))}function x(e,t,n){return o(this,void 0,void 0,(function*(){const i=yield(yield(0,s.O2)(!0)).destoryPasscode(d.p.fromText(e),d.p.fromText(t),n);return(0,l.Pk)(i)}))}function m(e,t){return(0,a.Pz)((0,i.useCallback)((()=>o(this,void 0,void 0,(function*(){if(e)return(0,l.Pk)(yield(yield(0,s.O2)()).balanceOf(e)).data}))),[e]),t)}}}]);
//# sourceMappingURL=8187.2f18254d.chunk.js.map