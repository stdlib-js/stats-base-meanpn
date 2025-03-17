// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r,{ndarray as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsumpw@v0.2.2-esm/index.mjs";import t,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gapxsumpw@v0.2.2-esm/index.mjs";function a(s,e,n){var a;return s<=0?NaN:1===s||0===n?e[0]:(a=r(s,e,n)/s)+t(s,-a,e,n)/s}s(a,"ndarray",(function(s,r,t,a){var d;return s<=0?NaN:1===s||0===t?r[a]:(d=e(s,r,t,a)/s)+n(s,-d,r,t,a)/s}));const{ndarray:d}=a;export{a as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
