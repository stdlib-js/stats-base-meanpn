// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s,{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsumpw@esm/index.mjs";import r,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gapxsumpw@esm/index.mjs";function a(e,t,n){var a;return e<=0?NaN:1===e||0===n?t[0]:(a=s(e,t,n)/e)+r(e,-a,t,n)/e}e(a,"ndarray",(function(e,s,r,a){var d;return e<=0?NaN:1===e||0===r?s[a]:(d=t(e,s,r,a)/e)+n(e,-d,s,r,a)/e}));export{a as default};
//# sourceMappingURL=index.mjs.map
