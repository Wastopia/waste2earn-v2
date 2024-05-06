"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[2810],{79564:(e,t,n)=>{n.d(t,{p:()=>c});var o=n(53248),i=n(84755),r=n(87631),s=n(18434),l=n(12971),a=n(53199),d=n(36092);function c(e){let{onChange:t,value:n}=e;const{result:c}=(0,l.B)(),u=(0,o.useMemo)((()=>{if(c)return c.filter((e=>e.lifecycle.lifecycle===a.aH.Committed))}),[c]),p=(0,o.useMemo)((()=>u?null===u||void 0===u?void 0:u.map((e=>({value:e.canister_ids.root_canister_id,label:(0,d.jsxs)(r.A,{sx:{display:"flex",gap:"0 8px",alignItems:"center"},children:[(0,d.jsx)(i.BK,{src:e.meta.logo,sx:{width:"24px",height:"24px"}}),(0,d.jsx)(s.A,{fontWeight:500,children:e.meta.name})]})}))):[]),[u]);return(0,d.jsx)(r.A,{sx:{width:"420px","@media(max-width: 640px)":{width:"100%"}},children:(0,d.jsx)(i.l6,{value:n,menus:p,onChange:e=>{t(e)}})})}},76637:(e,t,n)=>{n.d(t,{t:()=>r});var o=n(84755),i=n(36092);function r(){return(0,i.jsx)(o.Kp,{tabs:[{key:"neurons",value:"Neurons",path:"/sns/neurons"},{key:"voting",value:"Voting",path:"/sns/voting"},{key:"launches",value:"Launchpad",path:"/sns/launches"}]})}},12810:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var o=n(9259),i=n(62964),r=n(87631),s=n(18434),l=n(67263),a=n(27025),d=n(29872),c=n(53248),u=n(53199),p=n(79564),_=n(71649),h=n(944),S=n(58367),f=n(76637),m=function(e,t){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},m(e,t)};var v=function(){return v=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},v.apply(this,arguments)};var E="Pixel",g="Percent",T={unit:g,value:.8};function x(e){return"number"===typeof e?{unit:g,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:E,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:g,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),T):(console.warn("scrollThreshold should be string or number"),T)}const O=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,o){var i,r=!1,s=0;function l(){i&&clearTimeout(i)}function a(){var a=this,d=Date.now()-s,c=arguments;function u(){s=Date.now(),n.apply(a,c)}r||(o&&!i&&u(),l(),void 0===o&&d>e?u():!0!==t&&(i=setTimeout(o?function(){i=void 0}:u,void 0===o?e-d:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),a.cancel=function(){l(),r=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?v(v({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=x(t);return o.unit===E?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=x(t);return o.unit===E?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=v({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return c.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},c.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&c.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},c.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(c.Component);var P=n(68483),A=n(84755),N=n(90329),R=n(22226),y=n(913),I=n(68840),C=n(59265),D=n.n(C);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var U=(0,c.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,r=void 0===i?24:i,s=b(e,["color","size"]);return c.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),c.createElement("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}))}));U.propTypes={color:D().string,size:D().oneOfType([D().string,D().number])},U.displayName="Filter";const j=U;var L=n(36092);function M(e){let{governance_id:t,onConfirm:n}=e;const[i,l]=(0,c.useState)(!1),[a,d]=(0,c.useState)([]),[u,p]=(0,c.useState)([]),{result:_}=(0,R.$W)(t),h=(0,c.useMemo)((()=>null===_||void 0===_?void 0:_.functions.filter((e=>"All non-critical topics"!==e.name))),[_]);(0,c.useEffect)((()=>{if(h){const e=h.map((e=>e.id));p(e),d(e)}}),[h]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(r.A,{sx:{display:"flex",gap:"0 5px",alignItems:"center",width:"fit-content",padding:"5px 10px",cursor:"pointer",border:"1px solid #8492c4",borderRadius:"8px"},onClick:()=>l(!0),children:[(0,L.jsx)(j,{size:"16px"}),(0,L.jsx)(s.A,{children:(0,L.jsx)(N.x6,{id:"WtTYSX"})}),h?(0,L.jsxs)(s.A,{children:["(",a.length,"/",h.length,")"]}):null]}),(0,L.jsxs)(I.a,{open:i,title:o.Ru._({id:"WtTYSX"}),onClose:()=>l(!1),showConfirm:!0,onConfirm:()=>{if(!h)return;d(u);const e=h.filter((e=>!u.includes(e.id))).map((e=>e.id));n&&n(u,e),l(!1)},children:[(0,L.jsxs)(r.A,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"0 10px"},children:[(0,L.jsx)(s.A,{sx:{fontSize:"16px",cursor:"pointer"},onClick:()=>{h&&p(h.map((e=>e.id)))},children:(0,L.jsx)(N.x6,{id:"mCB6Je"})}),(0,L.jsx)(s.A,{sx:{fontSize:"16px",cursor:"pointer"},onClick:()=>{p([])},children:(0,L.jsx)(N.x6,{id:"xCJdfg"})})]}),(0,L.jsx)(r.A,{sx:{margin:"20px 0 0 0",height:"360px",overflow:"hidden auto",display:"flex",flexDirection:"column",gap:"20px 0"},children:null===h||void 0===h?void 0:h.map((e=>(0,L.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between",padding:"0 10px"},children:[(0,L.jsx)(s.A,{children:e.name}),(0,L.jsx)(y.A,{checked:u.includes(e.id),onChange:(t,n)=>((e,t)=>{if(e)p([...u,t]);else{const e=[...u];e.splice(e.indexOf(t),1),p(e)}})(n,e.id)})]},e.id.toString())))})]})]})}const Y=[{value:u.Bd.PROPOSAL_DECISION_STATUS_OPEN,label:"Open"},{value:u.Bd.PROPOSAL_DECISION_STATUS_REJECTED,label:"Rejected"},{value:u.Bd.PROPOSAL_DECISION_STATUS_ADOPTED,label:"Adopted"},{value:u.Bd.PROPOSAL_DECISION_STATUS_EXECUTED,label:"Executed"},{value:u.Bd.PROPOSAL_DECISION_STATUS_FAILED,label:"Failed"}];function k(e){let{governance_id:t,onChange:n}=e;const[i,l]=(0,c.useState)(!1),[a,d]=(0,c.useState)([]),[u,p]=(0,c.useState)([]);(0,c.useEffect)((()=>{const e=Y.map((e=>e.value));d(e),p(e)}),[t]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(r.A,{sx:{display:"flex",gap:"0 5px",alignItems:"center",width:"fit-content",padding:"5px 10px",cursor:"pointer",border:"1px solid #8492c4",borderRadius:"8px"},onClick:()=>l(!0),children:[(0,L.jsx)(j,{size:"16px"}),(0,L.jsx)(s.A,{children:(0,L.jsx)(N.x6,{id:"OD62Ph"})}),(0,L.jsxs)(s.A,{children:["(",u.length,"/",Y.length,")"]})]}),(0,L.jsxs)(I.a,{open:i,title:o.Ru._({id:"OD62Ph"}),onClose:()=>l(!1),showConfirm:!0,onConfirm:()=>{n(a),p(a),l(!1)},children:[(0,L.jsxs)(r.A,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"0 10px"},children:[(0,L.jsx)(s.A,{sx:{fontSize:"16px",cursor:"pointer"},onClick:()=>{d(Y.map((e=>e.value)))},children:(0,L.jsx)(N.x6,{id:"mCB6Je"})}),(0,L.jsx)(s.A,{sx:{fontSize:"16px",cursor:"pointer"},onClick:()=>{d([])},children:(0,L.jsx)(N.x6,{id:"xCJdfg"})})]}),(0,L.jsx)(r.A,{sx:{margin:"20px 0 0 0",height:"360px",overflow:"hidden auto",display:"flex",flexDirection:"column",gap:"20px 0"},children:null===Y||void 0===Y?void 0:Y.map((e=>(0,L.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between",padding:"0 10px"},children:[(0,L.jsx)(s.A,{children:e.label}),(0,L.jsx)(y.A,{checked:a.includes(e.value),onChange:(t,n)=>((e,t)=>{if(e)d([...a,t]);else{const e=[...a];e.splice(e.indexOf(t),1),d(e)}})(n,e.value)})]},e.value)))})]})]})}var B=n(5989);function F(e){var t,n;let{proposal:l,governance_id:a}=e;const d=(0,P.W6)(),p=(0,i.A)(),{title:f,summary:m,seconds:v,isExecuted:E}=(0,c.useMemo)((()=>{var e;const t=l.proposal[0];if(!t)return{};const n=null===(e=l.wait_for_quiet_state[0])||void 0===e?void 0:e.current_deadline_timestamp_seconds;return{url:t.url,title:t.title,action:t.action,summary:t.summary,seconds:n?n-BigInt((0,_.$)()):void 0,isExecuted:l.executed_timestamp_seconds>0}}),[l]),g=(0,c.useMemo)((()=>{switch((0,B.BX)(l)){case u.Bd.PROPOSAL_DECISION_STATUS_ADOPTED:return o.Ru._({id:"jSJwR0"});case u.Bd.PROPOSAL_DECISION_STATUS_EXECUTED:return o.Ru._({id:"L4jnDP"});case u.Bd.PROPOSAL_DECISION_STATUS_FAILED:return o.Ru._({id:"7Bj3x9"});case u.Bd.PROPOSAL_DECISION_STATUS_OPEN:return o.Ru._({id:"1TNIig"});case u.Bd.PROPOSAL_DECISION_STATUS_REJECTED:return o.Ru._({id:"ekCRTP"});default:return"Unspecified"}}),[l]);return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(r.A,{sx:{background:p.palette.background.level4,borderRadius:"12px",padding:"20px",cursor:"pointer","@media(max-width: 640px)":{padding:"10px"}},onClick:()=>{var e;const t=null===(e=l.id[0])||void 0===e?void 0:e.id;t&&a&&d.push("/sns/voting/".concat(a,"/").concat(t))},children:[(0,L.jsxs)(r.A,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,L.jsxs)(s.A,{children:["ID: ",null!==(t=null===(n=l.id[0])||void 0===n?void 0:n.id.toString())&&void 0!==t?t:"--"]}),(0,L.jsx)(r.A,{sx:{padding:"3px 10px",borderRadius:"12px",background:"Open"===g?p.colors.successDark:p.palette.background.level1},children:(0,L.jsx)(s.A,{color:"text.primary",children:g})})]}),(0,L.jsx)(s.A,{sx:{color:"text.primary",margin:"10px 0 0 0"},children:f}),(0,L.jsx)(s.A,{sx:{margin:"10px 0 0 0",fontSize:"12px",wordBreak:"break-word"},children:m?(0,h.l)(m,150):"--"}),E?null:(0,L.jsx)(s.A,{sx:{margin:"20px 0 0 0"},children:v?(0,S.LA)({seconds:v}):"--"})]})})}const W=50;function G(){var e;const t=(0,P.W6)(),{root_id:n}=(0,l.e)(),[o,i]=(0,c.useState)(!1),[u,_]=(0,c.useState)(!1),[h,S]=(0,c.useState)([]),[m,v]=(0,c.useState)([]),[E,g]=(0,c.useState)([]),[T,x]=(0,c.useState)("csyra-haaaa-aaaaq-aacva-cai");(0,c.useEffect)((()=>{n&&x(n)}),[n]);const{result:N}=(0,a.BC)(),R=(0,c.useMemo)((()=>{if(T&&N)return N.instances.find((e=>e.root_canister_id.toString()===T))}),[N,T]),{governance_id:y}=(0,c.useMemo)((()=>{if(!R)return{governance_id:void 0,ledger_id:void 0};const e=R.governance_canister_id[0],t=R.ledger_canister_id[0];return{governance_id:null===e||void 0===e?void 0:e.toString(),ledger_id:null===t||void 0===t?void 0:t.toString()}}),[R]),I=()=>{v([]),_(!1),S([])},C=(0,c.useMemo)((()=>{if(h)return[...h]}),[h]),D=async()=>{var e,t;if(u||o||!y)return;i(!0);const n=null!==(e=null===(t=h[h.length-1])||void 0===t?void 0:t.id)&&void 0!==e?e:[],r=await(0,d.GJ)({canisterId:y,limit:W,include_status:m,before_proposal:n,exclude_type:E,include_reward_status:[]});r&&r.length>0?(S((e=>[...null!==e&&void 0!==e?e:[],...r])),r.length<W&&_(!0)):_(!0),i(!1)};(0,c.useEffect)((()=>{D()}),[y,m]);return(0,L.jsx)(r.A,{sx:{display:"flex",justifyContent:"center"},children:(0,L.jsxs)(r.A,{sx:{maxWidth:"1400px",width:"100%"},children:[(0,L.jsx)(f.t,{}),(0,L.jsxs)(r.A,{sx:{display:"flex",alignItems:"center",margin:"20px 0 0 0",gap:"10px 20px",flexWrap:"wrap"},children:[(0,L.jsx)(p.p,{value:T,onChange:e=>{I(),t.push("/sns/voting?root_id=".concat(e)),x(e)}}),(0,L.jsx)(M,{governance_id:y,onConfirm:(e,t)=>{I(),g(t)}}),(0,L.jsx)(k,{governance_id:y,onChange:e=>{I(),v(e)}})]}),(0,L.jsx)(r.A,{sx:{width:"100%",margin:"20px 0 0 0"},children:(0,L.jsx)(O,{style:{width:"100%"},dataLength:null!==(e=null===C||void 0===C?void 0:C.length)&&void 0!==e?e:0,next:D,hasMore:!u,loader:null,children:(0,L.jsx)(r.A,{sx:{width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px","@media(max-width: 940px)":{gridTemplateColumns:"1fr 1fr"},"@media(max-width: 640px)":{gridTemplateColumns:"1fr"}},children:null===C||void 0===C?void 0:C.map(((e,t)=>{var n,o;return(0,L.jsx)(F,{proposal:e,governance_id:y},null!==(n=e.id[0])&&void 0!==n&&n.id?null===(o=e.id[0])||void 0===o?void 0:o.id.toString():"proposal_".concat(t))}))})})}),o?(0,L.jsx)(r.A,{sx:{margin:"20px 0 0 0"},children:(0,L.jsxs)(A.FO,{children:[(0,L.jsx)("div",{}),(0,L.jsx)("div",{}),(0,L.jsx)("div",{}),(0,L.jsx)("div",{}),(0,L.jsx)("div",{}),(0,L.jsx)("div",{}),(0,L.jsx)("div",{}),(0,L.jsx)("div",{}),(0,L.jsx)("div",{})]})}):C&&0===C.length?(0,L.jsx)(s.A,{sx:{margin:"20px 0 0 0"},children:"No Proposals"}):null]})})}},5989:(e,t,n)=>{n.d(t,{BX:()=>p,Wv:()=>d,ds:()=>a,qk:()=>u});var o=n(9259),i=n(71649),r=n(37155),s=n(53199);const l=[{id:0,name:"All Topics",description:"Catch-all w.r.t to following for all types of proposals.",function_type:{NativeNervousSystemFunction:{}}},{id:1,name:"Motion",description:"Side-effect-less proposals to set general governance direction.",function_type:{NativeNervousSystemFunction:{}}},{id:2,name:"Manage nervous system parameters",description:"Proposal to change the core parameters of SNS governance.",function_type:{NativeNervousSystemFunction:{}}},{id:3,name:"Upgrade SNS controlled canister",description:"Proposal to upgrade the wasm of an SNS controlled canister.",function_type:{NativeNervousSystemFunction:{}}},{id:4,name:"Add nervous system function",description:"Proposal to add a new, user-defined, nervous system function:a canister call which can then be executed by proposal.",function_type:{NativeNervousSystemFunction:{}}},{id:5,name:"Remove nervous system function",description:"Proposal to remove a user-defined nervous system function,which will be no longer executable by proposal.",function_type:{NativeNervousSystemFunction:{}}},{id:6,name:"Execute nervous system function",description:"Proposal to execute a user-defined nervous system function,previously added by an AddNervousSystemFunction proposal. A canister call will be made when executed.",function_type:{NativeNervousSystemFunction:{}}},{id:7,name:"Upgrade SNS to next version",description:"Proposal to upgrade the WASM of a core SNS canister.",function_type:{NativeNervousSystemFunction:{}}},{id:8,name:"Manage SNS metadata",description:"Proposal to change the metadata associated with an SNS.",function_type:{NativeNervousSystemFunction:{}}},{id:9,name:"Transfer SNS treasury funds",description:"Proposal to transfer funds from an SNS Governance controlled treasury account",function_type:{NativeNervousSystemFunction:{}}},{id:10,name:"Register dapp canisters",description:"Proposal to register a dapp canister with the SNS.",function_type:{NativeNervousSystemFunction:{}}},{id:11,name:"Deregister Dapp Canisters",description:"Proposal to deregister a previously-registered dapp canister from the SNS.",function_type:{NativeNervousSystemFunction:{}}}];function a(e){var t;return null===(t=l.find((t=>t.id===Number(e))))||void 0===t?void 0:t.name}const d={0:o.Ru._({id:"Ef7StM"}),1:o.Ru._({id:"XjMCyL"}),2:o.Ru._({id:"XZR8NZ"}),3:o.Ru._({id:"KWsCqG"})};let c=function(e){return e[e.PROPOSAL_REWARD_STATUS_UNSPECIFIED=0]="PROPOSAL_REWARD_STATUS_UNSPECIFIED",e[e.PROPOSAL_REWARD_STATUS_ACCEPT_VOTES=1]="PROPOSAL_REWARD_STATUS_ACCEPT_VOTES",e[e.PROPOSAL_REWARD_STATUS_READY_TO_SETTLE=2]="PROPOSAL_REWARD_STATUS_READY_TO_SETTLE",e[e.PROPOSAL_REWARD_STATUS_SETTLED=3]="PROPOSAL_REWARD_STATUS_SETTLED",e}({});const u=e=>{var t;let{reward_event_round:n,wait_for_quiet_state:o,is_eligible_for_rewards:r}=e;if(n>0n)return c.PROPOSAL_REWARD_STATUS_SETTLED;const s=(0,i.$)(),l=null===(t=o[0])||void 0===t?void 0:t.current_deadline_timestamp_seconds;return l?s<l?c.PROPOSAL_REWARD_STATUS_ACCEPT_VOTES:r?c.PROPOSAL_REWARD_STATUS_READY_TO_SETTLE:c.PROPOSAL_REWARD_STATUS_SETTLED:c.PROPOSAL_REWARD_STATUS_UNSPECIFIED};function p(e){const t=(new Date).getTime();if(!e.decided_timestamp_seconds||new r.A(e.decided_timestamp_seconds.toString()).gt(t))return s.Bd.PROPOSAL_DECISION_STATUS_OPEN;if(e.executed_timestamp_seconds&&new r.A(e.executed_timestamp_seconds.toString()).lt(t))return s.Bd.PROPOSAL_DECISION_STATUS_EXECUTED;if(e.failed_timestamp_seconds&&new r.A(e.failed_timestamp_seconds.toString(10)).lt(t))return s.Bd.PROPOSAL_DECISION_STATUS_FAILED;if(e.decided_timestamp_seconds&&new r.A(e.decided_timestamp_seconds.toString(10)).lt(t)){var n,o,i;const t=null===(n=e.latest_tally[0])||void 0===n?void 0:n.total,l=null===(o=e.latest_tally[0])||void 0===o?void 0:o.yes,a=null===(i=e.latest_tally[0])||void 0===i?void 0:i.no;if(void 0!==t&&void 0!==l&&void 0!==a)return new r.A(l.toString()).gt(a.toString(10))&&new r.A(t.toString()).times(.03).lt(l.toString())||new r.A(l.toString()).times(2).gt(t.toString(10))?s.Bd.PROPOSAL_DECISION_STATUS_ADOPTED:s.Bd.PROPOSAL_DECISION_STATUS_REJECTED}}},53199:(e,t,n)=>{var o,i,r,s;n.d(t,{Bd:()=>r,aH:()=>o,kh:()=>l,po:()=>s,xS:()=>i}),function(e){e[e.Unspecified=0]="Unspecified",e[e.Pending=1]="Pending",e[e.Open=2]="Open",e[e.Committed=3]="Committed",e[e.Aborted=4]="Aborted",e[e.Adopted=5]="Adopted"}(o||(o={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.Yes=1]="Yes",e[e.No=2]="No"}(i||(i={})),function(e){e[e.PROPOSAL_DECISION_STATUS_UNSPECIFIED=0]="PROPOSAL_DECISION_STATUS_UNSPECIFIED",e[e.PROPOSAL_DECISION_STATUS_OPEN=1]="PROPOSAL_DECISION_STATUS_OPEN",e[e.PROPOSAL_DECISION_STATUS_REJECTED=2]="PROPOSAL_DECISION_STATUS_REJECTED",e[e.PROPOSAL_DECISION_STATUS_ADOPTED=3]="PROPOSAL_DECISION_STATUS_ADOPTED",e[e.PROPOSAL_DECISION_STATUS_EXECUTED=4]="PROPOSAL_DECISION_STATUS_EXECUTED",e[e.PROPOSAL_DECISION_STATUS_FAILED=5]="PROPOSAL_DECISION_STATUS_FAILED"}(r||(r={})),function(e){e[e.NEURON_PERMISSION_TYPE_UNSPECIFIED=0]="NEURON_PERMISSION_TYPE_UNSPECIFIED",e[e.NEURON_PERMISSION_TYPE_CONFIGURE_DISSOLVE_STATE=1]="NEURON_PERMISSION_TYPE_CONFIGURE_DISSOLVE_STATE",e[e.NEURON_PERMISSION_TYPE_MANAGE_PRINCIPALS=2]="NEURON_PERMISSION_TYPE_MANAGE_PRINCIPALS",e[e.NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL=3]="NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL",e[e.NEURON_PERMISSION_TYPE_VOTE=4]="NEURON_PERMISSION_TYPE_VOTE",e[e.NEURON_PERMISSION_TYPE_DISBURSE=5]="NEURON_PERMISSION_TYPE_DISBURSE",e[e.NEURON_PERMISSION_TYPE_SPLIT=6]="NEURON_PERMISSION_TYPE_SPLIT",e[e.NEURON_PERMISSION_TYPE_MERGE_MATURITY=7]="NEURON_PERMISSION_TYPE_MERGE_MATURITY",e[e.NEURON_PERMISSION_TYPE_DISBURSE_MATURITY=8]="NEURON_PERMISSION_TYPE_DISBURSE_MATURITY",e[e.NEURON_PERMISSION_TYPE_STAKE_MATURITY=9]="NEURON_PERMISSION_TYPE_STAKE_MATURITY",e[e.NEURON_PERMISSION_TYPE_MANAGE_VOTING_PERMISSION=10]="NEURON_PERMISSION_TYPE_MANAGE_VOTING_PERMISSION"}(s||(s={}));s.NEURON_PERMISSION_TYPE_CONFIGURE_DISSOLVE_STATE,s.NEURON_PERMISSION_TYPE_DISBURSE,s.NEURON_PERMISSION_TYPE_DISBURSE_MATURITY,s.NEURON_PERMISSION_TYPE_MANAGE_PRINCIPALS,s.NEURON_PERMISSION_TYPE_MANAGE_VOTING_PERMISSION,s.NEURON_PERMISSION_TYPE_SPLIT,s.NEURON_PERMISSION_TYPE_STAKE_MATURITY,s.NEURON_PERMISSION_TYPE_MERGE_MATURITY,s.NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL,s.NEURON_PERMISSION_TYPE_UNSPECIFIED,s.NEURON_PERMISSION_TYPE_VOTE;const l=[s.NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL,s.NEURON_PERMISSION_TYPE_VOTE]},22226:(e,t,n)=>{n.d(t,{N1:()=>E,QW:()=>T,RU:()=>g,tZ:()=>x,ue:()=>O,$f:()=>m,h6:()=>v,ru:()=>R,WP:()=>y,$s:()=>N,oQ:()=>A,KW:()=>S,xU:()=>P,sC:()=>f,uU:()=>p,jA:()=>_,pF:()=>u,$W:()=>h});var o=n(93864),i=n(53248),r=n(35479),s=n(9978),l=n(81795),a=n(37037);function d(e){return[{Configure:{operation:[e]}}]}var c=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{a(o.next(e))}catch(t){r(t)}}function l(e){try{a(o.throw(e))}catch(t){r(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};function u(e,t,n){return(0,a.Pz)((0,i.useCallback)((()=>c(this,void 0,void 0,(function*(){if(e&&t)return yield function(e,t){return c(this,void 0,void 0,(function*(){var n;const i=null===(n=(0,r.Pk)(yield(yield(0,o.g_)(e)).get_neuron({neuron_id:(0,s.E)({id:t})})).data)||void 0===n?void 0:n.result;return i[0]&&"Neuron"in i[0]?i[0].Neuron:void 0}))}(e,t)}))),[e,t]),n)}function p(e){let{canisterId:t,of_principal:n,limit:d,start_page_at:u,refresh:p}=e;return(0,a.Pz)((0,i.useCallback)((()=>c(this,void 0,void 0,(function*(){if(t&&n)return yield function(e){return c(this,arguments,void 0,(function(e){let{canisterId:t,of_principal:n,limit:i,start_page_at:a}=e;return function*(){var e;return null===(e=(0,r.Pk)(yield(yield(0,o.g_)(t)).list_neurons({of_principal:(0,s.E)(n?l.p.fromText(n):void 0),limit:i,start_page_at:(0,s.E)(a?{id:a}:void 0)})).data)||void 0===e?void 0:e.neurons}()}))}({canisterId:t,of_principal:n,limit:d,start_page_at:u})}))),[t,n,d,u]),p)}function _(e){return(0,a.Pz)((0,i.useCallback)((()=>c(this,void 0,void 0,(function*(){if(e)return yield function(e){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e)).get_nervous_system_parameters(null)).data}))}(e)}))),[e]))}function h(e){return(0,a.Pz)((0,i.useCallback)((()=>c(this,void 0,void 0,(function*(){if(e)return yield function(e){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e)).list_nervous_system_functions()).data}))}(e)}))),[e]))}function S(e,t,n,i){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{Split:{memo:i,amount_e8s:n}}]}))}))}function f(e,t){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:d({StopDissolving:{}})}))}))}function m(e,t){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:d({StartDissolving:{}})}))}))}function v(e,t,n){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:d({IncreaseDissolveDelay:{additional_dissolve_delay_seconds:Number(n)}})}))}))}function E(e,t,n){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:d({ChangeAutoStakeMaturity:{requested_setting_for_auto_stake_maturity:n}})}))}))}function g(e,t,n,i){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:i,command:[{ClaimOrRefresh:{by:[{MemoAndController:{controller:void 0===t?[]:[t],memo:n}}]}}]}))}))}function T(e,t){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{ClaimOrRefresh:{by:[{NeuronId:{}}]}}]}))}))}function x(e,t){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{Disburse:{to_account:[],amount:[]}}]}))}))}function O(e,t){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{DisburseMaturity:{to_account:[],percentage_to_disburse:100}}]}))}))}function P(e,t,n){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{StakeMaturity:{percentage_to_stake:[n]}}]}))}))}function A(e,t,n,i){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{Follow:{function_id:n,followees:i}}]}))}))}function N(e,t,n,i){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{RegisterVote:{vote:n,proposal:[{id:i}]}}]}))}))}function R(e,t,n,i){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{AddNeuronPermissions:{permissions_to_add:[{permissions:i}],principal_id:[n]}}]}))}))}function y(e,t,n,i){return c(this,void 0,void 0,(function*(){return(0,r.Pk)(yield(yield(0,o.g_)(e,!0)).manage_neuron({subaccount:[...t],command:[{RemoveNeuronPermissions:{permissions_to_remove:[{permissions:i}],principal_id:[n]}}]}))}))}},29872:(e,t,n)=>{n.d(t,{GJ:()=>c,aj:()=>d});var o=n(93864),i=n(53248),r=n(35479),s=n(9978),l=n(37037),a=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{a(o.next(e))}catch(t){r(t)}}function l(e){try{a(o.throw(e))}catch(t){r(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))};function d(e,t,n){return(0,l.Pz)((0,i.useCallback)((()=>a(this,void 0,void 0,(function*(){if(e&&void 0!==t)return yield function(e,t){return a(this,void 0,void 0,(function*(){var n;const i=null===(n=(0,r.Pk)(yield(yield(0,o.g_)(e)).get_proposal({proposal_id:(0,s.E)({id:t})})).data)||void 0===n?void 0:n.result;if(i)return i[0]&&"Proposal"in i[0]?i[0].Proposal:void 0}))}(e,t)}))),[e,t]),n)}function c(e){return a(this,arguments,void 0,(function(e){let{canisterId:t,include_reward_status:n,include_status:i,exclude_type:s,before_proposal:l,limit:a}=e;return function*(){var e;return null===(e=(0,r.Pk)(yield(yield(0,o.g_)(t)).list_proposals({include_reward_status:n,before_proposal:l,limit:a,exclude_type:s,include_status:i})).data)||void 0===e?void 0:e.proposals}()}))}},68840:(e,t,n)=>{n.d(t,{a:()=>f});var o=n(36092),i=n(75660),r=n(82514),s=n(50564),l=n(18434),a=n(48922),d=n(87631),c=n(16688),u=n(52351),p=n(11403),_=n(25828),h=n(69580);const S=(0,u.A)((e=>({titleContainer:{position:"relative"},title:{fontSize:"20px",fontWeight:700,"@media (max-width: 640px)":{fontSize:"1rem"},"&.warning":{color:"#D3625B"}},detailItem:{marginBottom:"24px"},value:{textAlign:"right",wordBreak:"break-all"},closeButton:{position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)",cursor:"pointer","&:hover":{color:e.colors.primaryMain},"&.warning":{color:"#D3625B","&:hover":{color:"#D3625B"}}},closeButton1:{position:"absolute",right:"5px",top:"5px",cursor:"pointer","&:hover":{color:e.colors.primaryMain},"&.warning":{color:"#D3625B","&:hover":{color:"#D3625B"}}}})));function f(e){let{title:t,children:n,open:u,confirmText:f="Confirm",cancelText:m="Cancel",onClose:v,onConfirm:E,onCancel:g,showConfirm:T=!1,showCancel:x=!1,showClose:O=!0,confirmDisabled:P,fullWidth:A=!0,maxWidth:N="sm",type:R,background:y,dialogProps:I}=e;const C=S(),D=(0,p.A)(),w=(0,i.A)(D.breakpoints.down("md")),b=(0,i.A)("(max-width:760px)");return(0,o.jsxs)(r.A,Object.assign({onClose:v,open:u,maxWidth:N,fullWidth:A},I,{sx:Object.assign({"& .MuiDialogTitle-root":Object.assign(Object.assign({},w?{padding:"8px 14px"}:{}),{"&+.MuiDialogContent-root":Object.assign({paddingTop:"5px"},w?{paddingTop:"5px"}:{})}),"& .MuiDialogContent-root":Object.assign({position:"relative"},w?{padding:"8px 14px"}:{})},Object.assign({"& .MuiPaper-root":Object.assign({},y?{backgroundColor:y}:{backgroundColor:D.palette.background.level2})},(null===I||void 0===I?void 0:I.sx)||{})),children:[t?(0,h.isElement)(t)?t:(0,o.jsx)(s.A,{children:(0,o.jsxs)(l.A,{sx:{position:"relative"},component:"div",children:[(0,o.jsx)(l.A,{className:"".concat(C.title," ").concat(R||""),component:"span",color:"textPrimary",children:t}),O?(0,o.jsx)(_.A,{onClick:v,className:"".concat(C.closeButton," ").concat(R||"")}):null]})}):null,(0,o.jsxs)(a.A,{children:[O&&!t?(0,o.jsx)(_.A,{onClick:v,className:"".concat(C.closeButton1," ").concat(R||""," ")}):null,n,T||x?(0,o.jsxs)(d.A,{mt:"40px",sx:{display:"flex",justifyContent:"flex-end",gridTemplateColumns:b?"1fr":T&&x?"1fr 1fr":"1fr",gap:b?"10px 10px":"0 10px"},children:[x?(0,o.jsx)(c.A,{onClick:g,variant:"outlined",children:m}):null,T?(0,o.jsx)(c.A,{disabled:P,variant:"contained",onClick:E,children:f}):null]}):null]})]}))}},71649:(e,t,n)=>{n.d(t,{$:()=>o});const o=()=>Math.round(Date.now()/1e3)}}]);
//# sourceMappingURL=2810.5fb49240.chunk.js.map