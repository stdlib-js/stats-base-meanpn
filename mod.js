// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var l,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(r,e)||i.call(r,e)?(l=r.__proto__,r.__proto__=t,delete r[e],r[e]=f.value,r.__proto__=l):r[e]=f.value),_="get"in f,p="set"in f,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,f.get),p&&a&&a.call(r,e,f.set),r};function l(r,e,t){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var c=Math.floor;function _(r,e,t,n){var o,a,u,i,f,l,p,v,y,b,d,s,j;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(d=0,j=0;j<r;j++)d+=e[o],o+=t;return d}if(r<=128){for(a=e[o],u=e[o+t],i=e[o+2*t],f=e[o+3*t],l=e[o+4*t],p=e[o+5*t],v=e[o+6*t],y=e[o+7*t],o+=8*t,b=r%8,j=8;j<r-b;j+=8)a+=e[o],u+=e[o+t],i+=e[o+2*t],f+=e[o+3*t],l+=e[o+4*t],p+=e[o+5*t],v+=e[o+6*t],y+=e[o+7*t],o+=8*t;for(d=a+u+(i+f)+(l+p+(v+y));j<r;j++)d+=e[o],o+=t;return d}return s=c(r/2),_(s-=s%8,e,t,o)+_(r-s,e,t,o+s*t)}function p(r,e,t){var n,o,a;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,a=0;a<r;a++)o+=e[n],n+=t;return o}return _(r,e,t,n)}l(p,"ndarray",_);function v(r,e,t,n,o){var a,u,i,f,l,_,p,y,b,d,s,j,g;if(r<=0)return 0;if(1===r||0===n)return e+t[o];if(a=o,r<8){for(s=0,g=0;g<r;g++)s+=e+t[a],a+=n;return s}if(r<=128){for(u=e+t[a],i=e+t[a+n],f=e+t[a+2*n],l=e+t[a+3*n],_=e+t[a+4*n],p=e+t[a+5*n],y=e+t[a+6*n],b=e+t[a+7*n],a+=8*n,d=r%8,g=8;g<r-d;g+=8)u+=e+t[a],i+=e+t[a+n],f+=e+t[a+2*n],l+=e+t[a+3*n],_+=e+t[a+4*n],p+=e+t[a+5*n],y+=e+t[a+6*n],b+=e+t[a+7*n],a+=8*n;for(s=u+i+(f+l)+(_+p+(y+b));g<r;g++)s+=e+t[a],a+=n;return s}return j=c(r/2),v(j-=j%8,e,t,n,a)+v(r-j,e,t,n,a+j*n)}function y(r,e,t,n){var o,a,u;if(r<=0)return 0;if(1===r||0===n)return e+t[0];if(o=n<0?(1-r)*n:0,r<8){for(a=0,u=0;u<r;u++)a+=e+t[o],o+=n;return a}return v(r,e,t,n,o)}function b(r,e,t){var n;return r<=0?NaN:1===r||0===t?e[0]:(n=p(r,e,t)/r)+y(r,-n,e,t)/r}l(y,"ndarray",v),l(b,"ndarray",(function(r,e,t,n){var o;return r<=0?NaN:1===r||0===t?e[n]:(o=_(r,e,t,n)/r)+v(r,-o,e,t,n)/r}));export{b as default};
//# sourceMappingURL=mod.js.map
