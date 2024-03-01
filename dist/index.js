"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=t(function(h,p){
var g=require('@stdlib/blas-ext-base-gsumpw/dist'),o=require('@stdlib/blas-ext-base-gapxsumpw/dist');function w(r,e,a){var u,n;return r<=0?NaN:r===1||a===0?e[0]:(u=g(r,e,a)/r,n=o(r,-u,e,a)/r,u+n)}p.exports=w
});var m=t(function(j,s){
var f=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray,x=require('@stdlib/blas-ext-base-gapxsumpw/dist').ndarray;function d(r,e,a,u){var n,i;return r<=0?NaN:r===1||a===0?e[u]:(n=f(r,e,a,u)/r,i=x(r,-n,e,a,u)/r,n+i)}s.exports=d
});var y=t(function(k,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),O=m();l(c,"ndarray",O);q.exports=c
});var R=y();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
