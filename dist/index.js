"use strict";var m=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var q=m(function(G,g){
var _=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-negative-zero/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(e,i,u,f,t,c,Z){var v,n,s,o,r,a;if(e<=0)return NaN;for(s=f,o=Z,a=0;a<e&&(r=i[s],!(r===r&&t[o]===0));a++)s+=u,o+=c;if(a===e)return NaN;for(n=r,v=n,a+=1,a;a<e;a++)s+=u,o+=c,!t[o]&&(r=i[s],!_(r)&&(r<n||r===n&&b(r)?n=r:(r>v||r===v&&E(r))&&(v=r)));return(v+n)/2}g.exports=O
});var y=m(function(H,x){
var p=require('@stdlib/strided-base-stride2offset/dist'),P=q();function h(e,i,u,f,t){return P(e,i,u,p(e,u),f,t,p(e,t))}x.exports=h
});var k=m(function(I,l){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=y(),z=q();w(j,"ndarray",z);l.exports=j
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),d,R=B(A(__dirname,"./native.js"));C(R)?d=D:d=R;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
