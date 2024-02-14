// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function n(r,e,i){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=i?r+t(a):t(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,t,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(t=(-s).toString(e),r.precision&&(t=n(t,r.precision,r.padRight)),t="-"+t):(t=s.toString(e),s||r.precision?r.precision&&(t=n(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var p=Math.abs,f=String.prototype.toLowerCase,u=String.prototype.toUpperCase,l=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=l.call(t,y,"$1e"),t=l.call(t,b,"e"),t=l.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,g,"e+0$1"),t=l.call(t,d,"e-0$1"),r.alternate&&(t=l.call(t,h,"$1."),t=l.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===u.call(r.specifier)?u.call(t):f.call(t)}function _(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function x(r,e,i){var t=e-r.length;return t<0?r:r=i?r+_(t):_(t)+r}var k=String.fromCharCode,E=isNaN,S=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,i,t,a,o,p,f,u,l;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",f=1,u=0;u<r.length;u++)if(c(t=r[u]))p+=t;else{if(e=void 0!==t.precision,!(t=j(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(a=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,E(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",f+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,i,t,n;for(i=[],n=0,t=T.exec(r);t;)(e=r.slice(n,T.lastIndex-t[0].length)).length&&i.push(e),i.push($(t)),n=T.lastIndex,t=T.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function I(r){return"string"==typeof r}function A(r){var e,i;if(!I(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return V.apply(null,e)}var C=Object.prototype,N=C.toString,R=C.__defineGetter__,O=C.__defineSetter__,P=C.__lookupGetter__,Z=C.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var t,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===N.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(r,e)||Z.call(r,e)?(t=r.__proto__,r.__proto__=C,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,i.get),o&&O&&O.call(r,e,i.set),r};function W(r,e,i){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:i})}var L=Math.floor;function M(r,e,i,t){var n,a,o,s,c,p,f,u,l,g,d,h,w;if(r<=0)return 0;if(1===r||0===i)return e[t];if(n=t,r<8){for(d=0,w=0;w<r;w++)d+=e[n],n+=i;return d}if(r<=128){for(a=e[n],o=e[n+i],s=e[n+2*i],c=e[n+3*i],p=e[n+4*i],f=e[n+5*i],u=e[n+6*i],l=e[n+7*i],n+=8*i,g=r%8,w=8;w<r-g;w+=8)a+=e[n],o+=e[n+i],s+=e[n+2*i],c+=e[n+3*i],p+=e[n+4*i],f+=e[n+5*i],u+=e[n+6*i],l+=e[n+7*i],n+=8*i;for(d=a+o+(s+c)+(p+f+(u+l));w<r;w++)d+=e[n],n+=i;return d}return h=L(r/2),M(h-=h%8,e,i,n)+M(r-h,e,i,n+h*i)}function U(r,e,i){var t,n,a;if(r<=0)return 0;if(1===r||0===i)return e[0];if(t=i<0?(1-r)*i:0,r<8){for(n=0,a=0;a<r;a++)n+=e[t],t+=i;return n}return M(r,e,i,t)}W(U,"ndarray",M);var X=Math.floor;function z(r,e,i,t,n){var a,o,s,c,p,f,u,l,g,d,h,w,v;if(r<=0)return 0;if(1===r||0===t)return e+i[n];if(a=n,r<8){for(h=0,v=0;v<r;v++)h+=e+i[a],a+=t;return h}if(r<=128){for(o=e+i[a],s=e+i[a+t],c=e+i[a+2*t],p=e+i[a+3*t],f=e+i[a+4*t],u=e+i[a+5*t],l=e+i[a+6*t],g=e+i[a+7*t],a+=8*t,d=r%8,v=8;v<r-d;v+=8)o+=e+i[a],s+=e+i[a+t],c+=e+i[a+2*t],p+=e+i[a+3*t],f+=e+i[a+4*t],u+=e+i[a+5*t],l+=e+i[a+6*t],g+=e+i[a+7*t],a+=8*t;for(h=o+s+(c+p)+(f+u+(l+g));v<r;v++)h+=e+i[a],a+=t;return h}return w=X(r/2),z(w-=w%8,e,i,t,a)+z(r-w,e,i,t,a+w*t)}function q(r,e,i,t){var n,a,o;if(r<=0)return 0;if(1===r||0===t)return e+i[0];if(n=t<0?(1-r)*t:0,r<8){for(a=0,o=0;o<r;o++)a+=e+i[n],n+=t;return a}return z(r,e,i,t,n)}function B(r,e,i){var t;return r<=0?NaN:1===r||0===i?e[0]:(t=U(r,e,i)/r)+q(r,-t,e,i)/r}return W(q,"ndarray",z),W(B,"ndarray",(function(r,e,i,t){var n;return r<=0?NaN:1===r||0===i?e[t]:(n=M(r,e,i,t)/r)+z(r,-n,e,i,t)/r})),B},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).meanpn=e();
//# sourceMappingURL=index.js.map
