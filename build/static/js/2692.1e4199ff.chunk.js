"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[2692],{32692:(e,i,n)=>{n.r(i),n.d(i,{RevokeItem:()=>b,default:()=>C});var t=n(90329),s=n(53248),a=n(75660),l=n(4704),o=n(34222),r=n(87631),d=n(18434),x=n(16688),c=n(1783),p=n(11403),m=n(84755),u=n(19501),h=n(23412),g=n(97382),j=n(25396),f=n(31246),v=n(78878),w=n(28630),y=n(14228),A=n(59257),k=n(94247),I=n(35479);var S=n(36092);function b(e){let{tokenId:i,pool:n,allowance:m}=e;const j=(0,p.A)(),w=(0,A.Le)(),[y,b]=(0,v.cO)(),[C,z]=(0,s.useState)(!1),[W,O]=(0,s.useState)(!1),{result:R}=(0,f.Vs)(n.token0.address),{result:L}=(0,f.Vs)(n.token1.address),H=(0,s.useMemo)((()=>i===(null===R||void 0===R?void 0:R.canisterId)?R:L),[i,R,L]),M=R&&L?"".concat(R.symbol,"/").concat(L.symbol):"--",P=(0,a.A)(j.breakpoints.down("sm"));return W?null:(0,S.jsxs)(l.Ay,{container:!0,alignItems:"center",sx:{padding:"24px",borderRadius:"12px",background:j.palette.background.level1,margin:"16px 0 0 0",gap:"0 12px","@media(max-width: 640px)":{padding:"16px",alignItems:"flex-start"}},children:[(0,S.jsx)(o.A,{src:null===H||void 0===H?void 0:H.logo,sx:{width:"32px",height:"32px","@media(max-width: 640px)":{width:"24px",height:"24px",margin:"3px 0 0 0"}},children:"\xa0"}),(0,S.jsxs)(r.A,{sx:{display:"flex",flex:1,alignItems:"center",justifyContent:"space-between","@media(max-width:640px)":{flexDirection:"column",gap:"10px 0",alignItems:"flex-start",justifyContent:"center"}},children:[(0,S.jsxs)(r.A,{children:[(0,S.jsxs)(d.A,{color:"text.primary",sx:{fontSize:"18px",fontWeight:600,display:"flex",alignItems:"center","@media(max-width: 640px)":{fontSize:"14px"}},children:[(0,S.jsx)(t.x6,{id:"VbyQ83"}),"\xa0",(0,S.jsx)(d.A,{color:"text.primary",sx:{maxWidth:"260px",overflow:"hidden",display:"inline-block",textOverflow:"ellipsis",fontSize:"18px",fontWeight:600,"@media(max-width: 640px)":{fontSize:"14px",maxWidth:"145px"}},component:"span",children:(0,u.d)((0,h.t)(m,null===H||void 0===H?void 0:H.decimals).toString(),8,{groupSeparator:","})}),"\xa0",null===H||void 0===H?void 0:H.symbol]}),(0,S.jsx)(d.A,{sx:{margin:"4px 0 0 0"},children:M}),(0,S.jsx)(d.A,{sx:{margin:"4px 0 0 0"},children:n.canisterId.toString()})]}),(0,S.jsx)(r.A,{sx:{display:"flex",alignItems:"center",gap:"0 10px",justifyContent:"flex-end","@media(max-width: 640px)":{width:"100%"}},children:(0,S.jsx)(x.A,{variant:"contained",size:P?"small":"medium",disabled:C||!H||!w||!m,onClick:async()=>{if(C||!m||!H||!w)return;z(!0);const e=y("Revoke your ".concat((0,u.d)((0,h.t)(m,H.decimals).toString(),8,{groupSeparator:","})," ").concat(H.symbol),v.lA.loading),t=await async function(e,i,n){return(0,I.Pk)(await(0,k.SR)({canisterId:e,spender:i,value:0,account:n}))}(i,n.canisterId.toString(),w.toString());var s;t.status===g.i.OK?(y("Revoke ".concat(M," ").concat(H.symbol," successfully"),v.lA.success),O(!0)):y("Failed to revoke: ".concat(null!==(s=t.message)&&void 0!==s?s:""),v.lA.error);b(e),z(!1)},startIcon:C?(0,S.jsx)(c.A,{size:24,color:"inherit"}):null,children:(0,S.jsx)(t.x6,{id:"GXsAby"})})})]})]})}function C(){const[e,i]=(0,s.useState)(w.Nj.address),{AllPools:n}=(0,y.S)(),a=(0,s.useMemo)((()=>{if(n&&e)return n.filter((i=>i.token0.address===e||i.token1.address===e))}),[n,e]),{result:l,loading:o}=function(e){let{pools:i,tokenId:n}=e;const t=(0,A.Le)(),[a,l]=(0,s.useState)(!1),[o,r]=(0,s.useState)(void 0);return(0,s.useEffect)((()=>{!async function(){var e;if(t&&i&&(null!==(e=null===i||void 0===i?void 0:i.length)&&void 0!==e?e:0)>0&&n){l(!0);const e=await Promise.all(null===i||void 0===i?void 0:i.map((async e=>await(0,k.nB)({canisterId:n,owner:t.toString(),spender:e.canisterId.toString()}))));r(e.map(((e,n)=>({allowance:e,pool:i[n]})))),l(!1)}}()}),[t,i,n]),(0,s.useMemo)((()=>({loading:a,result:o})),[o,a])}({pools:a,tokenId:e}),x=(0,s.useMemo)((()=>null===l||void 0===l?void 0:l.filter((e=>!!e.allowance))),[l]);return(0,S.jsxs)(m.mO,{children:[(0,S.jsx)(r.A,{sx:{margin:"10px 0 0 0"},children:(0,S.jsx)(m.BI,{prevLink:"/swap",prevLabel:(0,S.jsx)(t.x6,{id:"vH2C/2"}),currentLabel:(0,S.jsx)(t.x6,{id:"H52zfl"})})}),(0,S.jsx)(r.A,{sx:{display:"flex",justifyContent:"center",margin:"40px 0 0 0"},children:(0,S.jsxs)(r.A,{sx:{width:"800px","@media(max-width:640px)":{width:"100%"}},children:[(0,S.jsx)(d.A,{sx:{fontSize:"24px",fontWeight:500},color:"text.primary",children:(0,S.jsx)(t.x6,{id:"H52zfl"})}),(0,S.jsx)(d.A,{sx:{margin:"10px 0 0 0"},children:(0,S.jsx)(t.x6,{id:"TdOzf5"})}),(0,S.jsxs)(r.A,{sx:{display:"flex",alignItems:"center",gap:"0 20px",margin:"40px 0 0 0"},children:[(0,S.jsx)(d.A,{color:"text.primary",fontWeight:500,children:(0,S.jsx)(t.x6,{id:"WKj93T"})}),(0,S.jsx)(r.A,{sx:{minWidth:"160px"},children:(0,S.jsx)(m.OH,{value:e,border:!0,filter:e=>e.standard!==j.i.ICRC2,onTokenChange:i})})]}),(0,S.jsx)(r.A,{sx:{margin:"20px 0 0 0"},children:o?(0,S.jsxs)(m.FO,{children:[(0,S.jsx)("div",{}),(0,S.jsx)("div",{}),(0,S.jsx)("div",{}),(0,S.jsx)("div",{}),(0,S.jsx)("div",{}),(0,S.jsx)("div",{}),(0,S.jsx)("div",{}),(0,S.jsx)("div",{})]}):x&&x.length>0?(0,S.jsx)(r.A,{sx:{overflow:"auto",margin:"-16px 0 0 0"},children:x.map(((i,n)=>(0,S.jsx)(b,{pool:i.pool,allowance:i.allowance,tokenId:e},n)))}):(0,S.jsx)(m.YQ,{})})]})})]})}}}]);
//# sourceMappingURL=2692.1e4199ff.chunk.js.map