// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,a){var l,c,p,_;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((c="value"in a)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=a.value,r.__proto__=l):r[e]=a.value),p="get"in a,_="set"in a,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(r,e,a.get),_&&i&&i.call(r,e,a.set),r};function l(r,e,t){a(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function p(r,e,t,n){var o,i,u,f,a,l,_,d,y,b,s,v,m;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(s=0,m=0;m<r;m++)s+=e[o],o+=t;return s}if(r<=128){for(i=e[o],u=e[o+t],f=e[o+2*t],a=e[o+3*t],l=e[o+4*t],_=e[o+5*t],d=e[o+6*t],y=e[o+7*t],o+=8*t,b=r%8,m=8;m<r-b;m+=8)i+=e[o],u+=e[o+t],f+=e[o+2*t],a+=e[o+3*t],l+=e[o+4*t],_+=e[o+5*t],d+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(s=i+u+(f+a)+(l+_+(d+y));m<r;m++)s+=e[o],o+=t;return s}return v=c(r/2),p(v-=v%8,e,t,o)+p(r-v,e,t,o+v*t)}function _(r,e,t){var n,o,i;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,i=0;i<r;i++)o+=e[n],n+=t;return o}return p(r,e,t,n)}function d(r,e,t,n,o){var i,u,f,a,l,p,_,y,b,s,v,m,j;if(r<=0)return 0;if(1===r||0===n)return e+t[o];if(i=o,r<8){for(v=0,j=0;j<r;j++)v+=e+t[i],i+=n;return v}if(r<=128){for(u=e+t[i],f=e+t[i+n],a=e+t[i+2*n],l=e+t[i+3*n],p=e+t[i+4*n],_=e+t[i+5*n],y=e+t[i+6*n],b=e+t[i+7*n],i+=8*n,s=r%8,j=8;j<r-s;j+=8)u+=e+t[i],f+=e+t[i+n],a+=e+t[i+2*n],l+=e+t[i+3*n],p+=e+t[i+4*n],_+=e+t[i+5*n],y+=e+t[i+6*n],b+=e+t[i+7*n],i+=8*n;for(v=u+f+(a+l)+(p+_+(y+b));j<r;j++)v+=e+t[i],i+=n;return v}return m=c(r/2),d(m-=m%8,e,t,n,i)+d(r-m,e,t,n,i+m*n)}function y(r,e,t,n){var o,i,u;if(r<=0)return 0;if(1===r||0===n)return e+t[0];if(o=n<0?(1-r)*n:0,r<8){for(i=0,u=0;u<r;u++)i+=e+t[o],o+=n;return i}return d(r,e,t,n,o)}function b(r,e,t){var n;return r<=0?NaN:1===r||0===t?e[0]:(n=_(r,e,t)/r)+y(r,-n,e,t)/r}return l(_,"ndarray",p),l(y,"ndarray",d),l(b,"ndarray",(function(r,e,t,n){var o;return r<=0?NaN:1===r||0===t?e[n]:(o=p(r,e,t,n)/r)+d(r,-o,e,t,n)/r})),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).meanpn=e();
//# sourceMappingURL=index.js.map