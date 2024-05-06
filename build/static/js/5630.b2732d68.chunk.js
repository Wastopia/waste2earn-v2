"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[5630],{77793:(t,i,o)=>{o.d(i,{A:()=>a});var e=o(93835),n=o(94766),r=o(91983),s=o(53248),u=o(56315);function a(t,i,o){return(0,s.useMemo)((()=>({[u.zm.LOWER]:t&&i?i===(0,e.Y)(n.g.MIN_TICK,r.D6[t]):void 0,[u.zm.UPPER]:t&&o?o===(0,e.Y)(n.g.MAX_TICK,r.D6[t]):void 0})),[t,i,o])}},52230:(t,i,o)=>{o.d(i,{$:()=>u,N:()=>s});var e=o(15754),n=o(9662),r=o(89811);function s(t,i){return t?n.xB.equal(t.quotient,n.xB.BigInt(0))?"0":t.divide(t.decimalScale).lessThan(new e.f(1,1e5))?"<0.00001":t.toFixed(i?i>8?8:i:4,{groupSeparator:","}):r.gO}function u(t,i){return t?parseFloat(t.toFixed(i))<1e-4?"<0.0001":t.toSignificant(i):"-"}},60075:(t,i,o)=>{o.d(i,{I:()=>r});var e=o(52230);let n=function(t){return t.LOWER="LOWER",t.UPPER="UPPER",t}({});function r(t,i,o,r){return i[o]?o===n.LOWER?"0":"\u221e":t||void 0===r?(0,e.$)(t,5):r}},24788:(t,i,o)=>{o.d(i,{y:()=>T});var e=o(7695),n=o.n(e),r=o(87296),s=o(98127),u=o(79963),a=o(84401),l=o(148);function c(t,i,o){n().greaterThan(t,i)&&([t,i]=[i,t]);const e=n().divide(n().multiply(t,i),l.bq);return n().divide(n().multiply(n().BigInt(o),e),n().subtract(i,t))}function p(t,i,o){n().greaterThan(t,i)&&([t,i]=[i,t]);const e=n().multiply(n().multiply(n().BigInt(o),t),i),r=n().multiply(l.bq,n().subtract(i,t));return n().divide(e,r)}function h(t,i,o){return n().greaterThan(t,i)&&([t,i]=[i,t]),n().divide(n().multiply(n().BigInt(o),l.bq),n().subtract(i,t))}function k(t,i,o,e,r,s){n().greaterThan(i,o)&&([i,o]=[o,i]);const u=s?p:c;if(n().lessThanOrEqual(t,i))return u(i,o,e);if(n().lessThan(t,o)){const s=u(t,o,e),a=h(i,t,r);return n().lessThan(s,a)?s:a}return h(i,o,r)}var m=o(32435),g=o(86705),A=o(94766),d=o(68800),q=o(62453);class T{constructor(t){let{pool:i,liquidity:o,tickLower:e,tickUpper:s}=t;this._token0Amount=null,this._token1Amount=null,this._mintAmounts=null,(0,r.A)(e<s,"TICK_ORDER"),(0,r.A)(e>=A.g.MIN_TICK&&e%i.tickSpacing===0,"TICK_LOWER"),(0,r.A)(s<=A.g.MAX_TICK&&s%i.tickSpacing===0,"TICK_UPPER"),this.pool=i,this.tickLower=e,this.tickUpper=s,this.liquidity=n().BigInt(o)}get token0PriceLower(){return(0,m.y)(this.pool.token0,this.pool.token1,this.tickLower)}get token0PriceUpper(){return(0,m.y)(this.pool.token0,this.pool.token1,this.tickUpper)}get amount0(){return null===this._token0Amount&&(this.pool.tickCurrent<this.tickLower?this._token0Amount=s.e.fromRawAmount(this.pool.token0,g.m.getAmount0Delta(A.g.getSqrtRatioAtTick(this.tickLower),A.g.getSqrtRatioAtTick(this.tickUpper),this.liquidity,!1)):this.pool.tickCurrent<this.tickUpper?this._token0Amount=s.e.fromRawAmount(this.pool.token0,g.m.getAmount0Delta(this.pool.sqrtRatioX96,A.g.getSqrtRatioAtTick(this.tickUpper),this.liquidity,!1)):this._token0Amount=s.e.fromRawAmount(this.pool.token0,l.f2)),this._token0Amount}get amount1(){return null===this._token1Amount&&(this.pool.tickCurrent<this.tickLower?this._token1Amount=s.e.fromRawAmount(this.pool.token1,l.f2):this.pool.tickCurrent<this.tickUpper?this._token1Amount=s.e.fromRawAmount(this.pool.token1,g.m.getAmount1Delta(A.g.getSqrtRatioAtTick(this.tickLower),this.pool.sqrtRatioX96,this.liquidity,!1)):this._token1Amount=s.e.fromRawAmount(this.pool.token1,g.m.getAmount1Delta(A.g.getSqrtRatioAtTick(this.tickLower),A.g.getSqrtRatioAtTick(this.tickUpper),this.liquidity,!1))),this._token1Amount}ratiosAfterSlippage(t){const i=this.pool.token0Price.asFraction.multiply(new u.Q(1).subtract(t)),o=this.pool.token0Price.asFraction.multiply(t.add(1));let e=(0,d.r)(i.numerator,i.denominator);n().lessThanOrEqual(e,A.g.MIN_SQRT_RATIO)&&(e=n().add(A.g.MIN_SQRT_RATIO,n().BigInt(1)));let r=(0,d.r)(o.numerator,o.denominator);return n().greaterThanOrEqual(r,A.g.MAX_SQRT_RATIO)&&(r=n().subtract(A.g.MAX_SQRT_RATIO,n().BigInt(1))),{sqrtRatioX96Lower:e,sqrtRatioX96Upper:r}}mintAmountsWithSlippage(t){const{sqrtRatioX96Upper:i,sqrtRatioX96Lower:o}=this.ratiosAfterSlippage(t),e=new q.b(this.pool.id,this.pool.token0,this.pool.token1,this.pool.fee,o,0,A.g.getTickAtSqrtRatio(o)),n=new q.b(this.pool.id,this.pool.token0,this.pool.token1,this.pool.fee,i,0,A.g.getTickAtSqrtRatio(i)),r=T.fromAmounts(Object.assign(Object.assign({pool:this.pool,tickLower:this.tickLower,tickUpper:this.tickUpper},this.mintAmounts),{useFullPrecision:!1})),{amount0:s}=new T({pool:n,liquidity:r.liquidity,tickLower:this.tickLower,tickUpper:this.tickUpper}).mintAmounts,{amount1:u}=new T({pool:e,liquidity:r.liquidity,tickLower:this.tickLower,tickUpper:this.tickUpper}).mintAmounts;return{amount0:s,amount1:u}}burnAmountsWithSlippage(t){const{sqrtRatioX96Upper:i,sqrtRatioX96Lower:o}=this.ratiosAfterSlippage(t),e=new q.b(this.pool.id,this.pool.token0,this.pool.token1,this.pool.fee,o,0,A.g.getTickAtSqrtRatio(o)),n=new q.b(this.pool.id,this.pool.token0,this.pool.token1,this.pool.fee,i,0,A.g.getTickAtSqrtRatio(i)),r=new T({pool:n,liquidity:this.liquidity,tickLower:this.tickLower,tickUpper:this.tickUpper}).amount0,s=new T({pool:e,liquidity:this.liquidity,tickLower:this.tickLower,tickUpper:this.tickUpper}).amount1;return{amount0:r.quotient,amount1:s.quotient}}get mintAmounts(){return null===this._mintAmounts?this.pool.tickCurrent<this.tickLower?{amount0:g.m.getAmount0Delta(A.g.getSqrtRatioAtTick(this.tickLower),A.g.getSqrtRatioAtTick(this.tickUpper),this.liquidity,!0),amount1:l.f2}:this.pool.tickCurrent<this.tickUpper?{amount0:g.m.getAmount0Delta(this.pool.sqrtRatioX96,A.g.getSqrtRatioAtTick(this.tickUpper),this.liquidity,!0),amount1:g.m.getAmount1Delta(A.g.getSqrtRatioAtTick(this.tickLower),this.pool.sqrtRatioX96,this.liquidity,!0)}:{amount0:l.f2,amount1:g.m.getAmount1Delta(A.g.getSqrtRatioAtTick(this.tickLower),A.g.getSqrtRatioAtTick(this.tickUpper),this.liquidity,!0)}:this._mintAmounts}static fromAmounts(t){let{pool:i,tickLower:o,tickUpper:e,amount0:n,amount1:r,useFullPrecision:s}=t;const u=A.g.getSqrtRatioAtTick(o),a=A.g.getSqrtRatioAtTick(e);return new T({pool:i,tickLower:o,tickUpper:e,liquidity:k(i.sqrtRatioX96,u,a,n,r,s)})}static fromAmount0(t){let{pool:i,tickLower:o,tickUpper:e,amount0:n,useFullPrecision:r}=t;return T.fromAmounts({pool:i,tickLower:o,tickUpper:e,amount0:n,amount1:a.Is,useFullPrecision:r})}static fromAmount1(t){let{pool:i,tickLower:o,tickUpper:e,amount1:n}=t;return T.fromAmounts({pool:i,tickLower:o,tickUpper:e,amount0:a.Is,amount1:n,useFullPrecision:!0})}}},68800:(t,i,o)=>{o.d(i,{r:()=>c});var e=o(7695),n=o.n(e),r=o(87296);const s=n().BigInt(Number.MAX_SAFE_INTEGER),u=n().BigInt(0),a=n().BigInt(1),l=n().BigInt(2);function c(t,i){const o=n().leftShift(n().BigInt(t),n().BigInt(192)),e=n().BigInt(i);return function(t){if((0,r.A)(n().greaterThanOrEqual(t,u),"NEGATIVE"),n().lessThan(t,s))return n().BigInt(Math.floor(Math.sqrt(n().toNumber(t))));let i,o;for(i=t,o=n().add(n().divide(t,l),a);n().lessThan(o,i);)i=o,o=n().divide(n().add(n().divide(t,o),o),l);return i}(n().divide(o,e))}},93835:(t,i,o)=>{o.d(i,{Y:()=>r});var e=o(87296),n=o(94766);function r(t,i){(0,e.A)(Number.isInteger(t)&&Number.isInteger(i),"INTEGERS"),(0,e.A)(i>0,"TICK_SPACING"),(0,e.A)(t>=n.g.MIN_TICK&&t<=n.g.MAX_TICK,"TICK_BOUND");const o=Math.round(t/i)*i;return o<n.g.MIN_TICK?o+i:o>n.g.MAX_TICK?o-i:o}},32435:(t,i,o)=>{o.d(i,{d:()=>c,y:()=>l});var e=o(86255),n=o(7695),r=o.n(n),s=o(148),u=o(68800),a=o(94766);function l(t,i,o){const n=a.g.getSqrtRatioAtTick(o),u=r().multiply(n,n);return t.sortsBefore(i)?new e.g(t,i,s.CI,u):new e.g(t,i,u,s.CI)}function c(t){const i=t.baseCurrency.sortsBefore(t.quoteCurrency),o=i?(0,u.r)(t.numerator,t.denominator):(0,u.r)(t.denominator,t.numerator);let e=a.g.getTickAtSqrtRatio(o);const n=l(t.baseCurrency,t.quoteCurrency,e+1);return i?t.lessThan(n)||e++:t.greaterThan(n)||e++,e}}}]);
//# sourceMappingURL=5630.b2732d68.chunk.js.map