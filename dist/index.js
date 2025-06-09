"use strict";var s=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var o=s(function(E,p){
var x=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray,l=require('@stdlib/blas-ext-base-gapxsumpw/dist').ndarray;function b(r,a,e,u){var n,i,t,c;return n=a.data,i=a.accessors[0],r===1||e===0?i(n,u):(t=x(r,n,e,u)/r,c=l(r,-t,n,e,u)/r,t+c)}p.exports=b
});var v=s(function(F,q){
var j=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray,k=require('@stdlib/blas-ext-base-gapxsumpw/dist').ndarray,O=require('@stdlib/array-base-arraylike2object/dist'),P=o();function R(r,a,e,u){var n,i,t;return r<=0?NaN:(t=O(a),t.accessorProtocol?P(r,t,e,u):r===1||e===0?a[u]:(n=j(r,a,e,u)/r,i=k(r,-n,a,e,u)/r,n+i))}q.exports=R
});var y=s(function(G,m){
var f=require('@stdlib/strided-base-stride2offset/dist'),h=v();function z(r,a,e){return h(r,a,e,f(r,e))}m.exports=z
});var w=s(function(H,d){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=y(),B=v();A(g,"ndarray",B);d.exports=g
});var C=w();module.exports=C;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
