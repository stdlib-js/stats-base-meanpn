// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsumpw@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gapxsumpw@esm/index.mjs";var t=e,a=s;var n=function(r,e,s){var n;return r<=0?NaN:1===r||0===s?e[0]:(n=t(r,e,s)/r)+a(r,-n,e,s)/r},d=e.ndarray,i=s.ndarray;var m=n;r(m,"ndarray",(function(r,e,s,t){var a;return r<=0?NaN:1===r||0===s?e[t]:(a=d(r,e,s,t)/r)+i(r,-a,e,s,t)/r}));var l=m;export{l as default};
//# sourceMappingURL=index.mjs.map
