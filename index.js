// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(r,e,t){var l,c,p,_;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,e,t.get),_&&i&&i.call(r,e,t.set),r},p=e()?l:c,_=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Math.floor,y=d,b=function r(e,t,n,o){var a,i,u,f,l,c,p,_,d,b,s,v,m;if(e<=0)return 0;if(1===e||0===n)return t[o];if(a=o,e<8){for(s=0,m=0;m<e;m++)s+=t[a],a+=n;return s}if(e<=128){for(i=t[a],u=t[a+n],f=t[a+2*n],l=t[a+3*n],c=t[a+4*n],p=t[a+5*n],_=t[a+6*n],d=t[a+7*n],a+=8*n,b=e%8,m=8;m<e-b;m+=8)i+=t[a],u+=t[a+n],f+=t[a+2*n],l+=t[a+3*n],c+=t[a+4*n],p+=t[a+5*n],_+=t[a+6*n],d+=t[a+7*n],a+=8*n;for(s=i+u+(f+l)+(c+p+(_+d));m<e;m++)s+=t[a],a+=n;return s}return v=y(e/2),r(v-=v%8,t,n,a)+r(e-v,t,n,a+v*n)},s=b,v=function(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e[n],n+=t;return o}return s(r,e,t,n)};_(v,"ndarray",b);var m=v,j=d,g=function r(e,t,n,o,a){var i,u,f,l,c,p,_,d,y,b,s,v,m;if(e<=0)return 0;if(1===e||0===o)return t+n[a];if(i=a,e<8){for(s=0,m=0;m<e;m++)s+=t+n[i],i+=o;return s}if(e<=128){for(u=t+n[i],f=t+n[i+o],l=t+n[i+2*o],c=t+n[i+3*o],p=t+n[i+4*o],_=t+n[i+5*o],d=t+n[i+6*o],y=t+n[i+7*o],i+=8*o,b=e%8,m=8;m<e-b;m+=8)u+=t+n[i],f+=t+n[i+o],l+=t+n[i+2*o],c+=t+n[i+3*o],p+=t+n[i+4*o],_+=t+n[i+5*o],d+=t+n[i+6*o],y+=t+n[i+7*o],i+=8*o;for(s=u+f+(l+c)+(p+_+(d+y));m<e;m++)s+=t+n[i],i+=o;return s}return v=j(e/2),r(v-=v%8,t,n,o,i)+r(e-v,t,n,o,i+v*o)},h=g,w=function(r,e,t,n){var o,a,i;if(r<=0)return 0;if(1===r||0===n)return e+t[0];if(o=n<0?(1-r)*n:0,r<8){for(a=0,i=0;i<r;i++)a+=e+t[o],o+=n;return a}return h(r,e,t,n,o)};_(w,"ndarray",g);var N=w;function O(r,e,t){var n;return r<=0?NaN:1===r||0===t?e[0]:(n=m(r,e,t)/r)+N(r,-n,e,t)/r}return _(O,"ndarray",(function(r,e,t,n){var o;return r<=0?NaN:1===r||0===t?e[n]:(o=m.ndarray(r,e,t,n)/r)+N.ndarray(r,-o,e,t,n)/r})),O},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).meanpn=e();
//# sourceMappingURL=index.js.map