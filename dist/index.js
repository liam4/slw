!function e(t,r,n){function a(i,l){if(!r[i]){if(!t[i]){var s="function"==typeof require&&require;if(!l&&s)return s(i,!0);if(o)return o(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[i]={exports:{}};t[i][0].call(c.exports,function(e){var r=t[i][1][e];return a(r?r:e)},c,c.exports,e,t,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}({1:[function(e,t,r){!function(e,n,a){"function"==typeof define&&define.amd?define([],a):"object"==typeof r?t.exports=a():n[e]=a()}("Please",this,function(){"use strict";function e(){function e(e,t,r){var n=Math.random;return r instanceof i&&(n=r.random),Math.floor(n()*(t-e+1))+e}function t(e,t,r){var n=Math.random;return r instanceof i&&(n=r.random),n()*(t-e)+e}function r(e,t,r){return Math.max(t,Math.min(e,r))}function n(e,t){var r;switch(e){case"hex":for(r=0;r<t.length;r++)t[r]=l.HSV_to_HEX(t[r]);break;case"rgb":for(r=0;r<t.length;r++)t[r]=l.HSV_to_RGB(t[r]);break;case"rgb-string":for(r=0;r<t.length;r++){var n=l.HSV_to_RGB(t[r]);t[r]="rgb("+n.r+","+n.g+","+n.b+")"}break;case"hsv":break;default:console.error("Format not recognized.")}return t}function a(e){var t=l.HSV_to_RGB(e),r=(299*t.r+587*t.g+114*t.b)/1e3;return r>=128?"dark":"light"}function o(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}function i(e){function t(){n=(n+1)%256,a=(a+r[n])%256;var e=r[n];return r[n]=r[a],r[a]=e,r[(r[n]+r[a])%256]}for(var r=[],n=0,a=0,o=0;256>o;o++)r[o]=o;for(var i=0,l=0;256>i;i++){l=(l+r[i]+e.charCodeAt(i%e.length))%256;var s=r[i];r[i]=r[l],r[l]=s}this.random=function(){for(var e=0,r=0,n=1;8>e;e++)r+=t()*n,n*=256;return r/0x10000000000000000}}var l={},s={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgrey:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",grey:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgrey:"D3D3D3",lightgreen:"90EE90",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",rebeccapurple:"663399",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"},u=.618033988749895,c={hue:null,saturation:null,value:null,base_color:"",greyscale:!1,grayscale:!1,golden:!0,full_random:!1,colors_returned:1,format:"hex",seed:null},f={scheme_type:"analogous",format:"hex"},h={golden:!1,format:"hex"};return l.NAME_to_HEX=function(e){return e=e.toLowerCase(),e in s?s[e]:void console.error("Color name not recognized.")},l.NAME_to_RGB=function(e){return l.HEX_to_RGB(l.NAME_to_HEX(e))},l.NAME_to_HSV=function(e){return l.HEX_to_HSV(l.NAME_to_HEX(e))},l.HEX_to_RGB=function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,r,n){return t+t+r+r+n+n});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null},l.RGB_to_HEX=function(e){return"#"+((1<<24)+(e.r<<16)+(e.g<<8)+e.b).toString(16).slice(1)},l.HSV_to_RGB=function(e){var t,r,n,a,o,i,l,s,u=e.h,c=e.s,f=e.v;if(0===c)return{r:f,g:f,b:f};switch(u/=60,a=Math.floor(u),o=u-a,i=f*(1-c),l=f*(1-c*o),s=f*(1-c*(1-o)),a){case 0:t=f,r=s,n=i;break;case 1:t=l,r=f,n=i;break;case 2:t=i,r=f,n=s;break;case 3:t=i,r=l,n=f;break;case 4:t=s,r=i,n=f;break;case 5:t=f,r=i,n=l}return{r:Math.floor(255*t),g:Math.floor(255*r),b:Math.floor(255*n)}},l.RGB_to_HSV=function(e){var t=e.r/255,r=e.g/255,n=e.b/255,a=0,o=0,i=0,l=Math.min(t,Math.min(r,n)),s=Math.max(t,Math.max(r,n));if(l===s)return i=l,{h:0,s:0,v:i};var u=t===l?r-n:n===l?t-r:n-t,c=t===l?3:n===l?1:5;return a=60*(c-u/(s-l)),o=(s-l)/s,i=s,{h:a,s:o,v:i}},l.HSV_to_HEX=function(e){return l.RGB_to_HEX(l.HSV_to_RGB(e))},l.HEX_to_HSV=function(e){return l.RGB_to_HSV(l.HEX_to_RGB(e))},l.make_scheme=function(e,t){function a(e){return{h:e.h,s:e.s,v:e.v}}var i,l,s,u,c,h=o(f);if(null!==t)for(var d in t)t.hasOwnProperty(d)&&(h[d]=t[d]);var v=[e];switch(h.scheme_type.toLowerCase()){case"monochromatic":case"mono":for(c=1;2>=c;c++)i=a(e),s=i.s+.1*c,s=r(s,0,1),u=i.v+.1*c,u=r(u,0,1),i.s=s,i.v=u,v.push(i);for(c=1;2>=c;c++)i=a(e),s=i.s-.1*c,s=r(s,0,1),u=i.v-.1*c,u=r(u,0,1),i.s=s,i.v=u,v.push(i);break;case"complementary":case"complement":case"comp":i=a(e),i.h=(i.h+180)%360,v.push(i);break;case"split-complementary":case"split-complement":case"split":i=a(e),i.h=(i.h+165)%360,v.push(i),i=a(e),i.h=Math.abs((i.h-165)%360),v.push(i);break;case"double-complementary":case"double-complement":case"double":i=a(e),i.h=(i.h+180)%360,v.push(i),i.h=(i.h+30)%360,l=a(i),v.push(i),i.h=(i.h+180)%360,v.push(l);break;case"analogous":case"ana":for(c=1;5>=c;c++)i=a(e),i.h=(i.h+20*c)%360,v.push(i);break;case"triadic":case"triad":case"tri":for(c=1;3>c;c++)i=a(e),i.h=(i.h+120*c)%360,v.push(i);break;default:console.error("Color scheme not recognized.")}return n(h.format.toLowerCase(),v),v},l.make_color=function(a){var s=[],f=o(c),h=null;if(null!==a)for(var d in a)a.hasOwnProperty(d)&&(f[d]=a[d]);var v=null;"string"==typeof f.seed&&(v=new i(f.seed)),f.base_color.length>0&&(h=f.base_color.match(/^#?([0-9a-f]{3})([0-9a-f]{3})?$/i)?l.HEX_to_HSV(f.base_color):l.NAME_to_HSV(f.base_color));for(var F=0;F<f.colors_returned;F++){var g,y,p,m=e(0,360,v);null!==h?(g=r(e(h.h-5,h.h+5,v),0,360),y=0===h.s?0:t(.4,.85,v),p=t(.4,.85,v),s.push({h:g,s:y,v:p})):(g=f.greyscale===!0||f.grayscale===!0?0:f.golden===!0?(m+m/u)%360:null===f.hue||f.full_random===!0?m:r(f.hue,0,360),y=f.greyscale===!0||f.grayscale===!0?0:f.full_random===!0?t(0,1,v):null===f.saturation?.4:r(f.saturation,0,1),p=f.full_random===!0?t(0,1,v):f.greyscale===!0||f.grayscale===!0?t(.15,.75,v):null===f.value?.75:r(f.value,0,1),s.push({h:g,s:y,v:p}))}return n(f.format.toLowerCase(),s),s},l.make_contrast=function(e,t){var i=o(h);if(null!==t)for(var s in t)t.hasOwnProperty(s)&&(i[s]=t[s]);var c,f,d=a(e);if(i.golden===!0)f=e.h*(1+u)%360;else{var v=l.make_scheme(e,{scheme_type:"complementary",format:"hsv"})[1];f=r(v.h-30,0,360)}var F;return"dark"===d?F=r(e.v-.25,0,1):"light"===d&&(F=r(e.v+.25,0,1)),c=[{h:f,s:e.s,v:F}],n(i.format.toLowerCase(),c),c[0]},l}return e()})},{}],2:[function(e,t,r){"use strict";function n(e){return String(e).replace(a,o)}var a=/[ \t]*\n+[ \t]*/g,o="\n";t.exports=n},{}],3:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0}),r.Player=void 0;var l=function e(t,r,n){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in a)return a.value;var i=a.get;if(void 0!==i)return i.call(n)},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=e("./SLW"),c=(n(u),e("./Tile")),f=n(c),h=e("./util"),d=!0,v=function(){function t(){i(this,t),this.x=0,this.y=0,this.xv=0,this.yv=0,this.w=16,this.h=16;var r=e("pleasejs").make_color({format:"rgb"})[0];this.color="rgba("+r.r+", "+r.g+", "+r.b+", 0.75)"}return s(t,[{key:"top",get:function(){return Math.floor(this.y)}},{key:"bottom",get:function(){return Math.floor(this.y+this.h)}},{key:"left",get:function(){return Math.floor(this.x)}},{key:"right",get:function(){return Math.floor(this.x+this.w)}}]),s(t,[{key:"update",value:function(e){var t=0,r=Math.floor(this.xv);t=(0,h.sign)(r);for(var n=0;n<Math.abs(r);n++)this.x+=t,this.collides&&(this.x-=t,this.xv=0);var a=Math.floor(this.yv);t=(0,h.sign)(a);for(var o=0;o<Math.abs(a);o++)this.y+=t,this.collides&&(this.y-=t,this.yv=0)}},{key:"draw",value:function(e){var t=e.canvas.getContext("2d");t instanceof CanvasRenderingContext2D&&d&&(t.fillStyle=this.color,t.fillRect(this.left,this.top,this.w,this.h+1))}},{key:"collides",get:function(){var e=Math.floor(this.left/f.default.size),t=Math.floor(this.right/f.default.size),r=Math.floor(this.top/f.default.size),n=Math.floor(this.bottom/f.default.size),a=window.game.activeLevel.tiles.split("\n")[0].length-1,o=window.game.activeLevel.tiles.split("\n").length-1;e<0&&(e=0),t>a&&(t=a),r<0&&(r=0),n>o&&(n=o);for(var i=!1,l=e;l<=t;l++)for(var s=r;s<=n;s++){var u=f.default.at([l,s]);u.solid&&(i=!0)}return i}}]),t}();r.default=v;r.Player=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.x=e,n.y=r,n.w=16,n.h=24,n}return o(t,e),s(t,[{key:"update",value:function(e){e.keys[39]&&(this.xv+=1),e.keys[37]&&(this.xv-=1),e.keys[39]||e.keys[37]||(this.xv+=(0,h.sign)(this.xv)*-.5),this.grounded&&e.keys[32]&&(this.yv=-4),this.xv=Math.min(this.xv,3),this.xv=Math.max(this.xv,-3),this.yv=Math.min(this.yv,4),this.yv+=.25,l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"update",this).call(this,e)}},{key:"grounded",get:function(){return f.default.at([this.x/16,this.bottom/16+.1]).solid}}]),t}(v)},{"./SLW":4,"./Tile":5,"./util":7,pleasejs:1}],4:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=a(["--------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       ----------------===-\n                       --------------------\n                       --------------------\n                       --------===---------\n                       --------------------\n                       ==------------------\n                       --------------------\n                       ----------=?=-------\n                       ------=-------------\n                       -----===------------\n                       ----=====----===----\n                       =================---\n                       ===================="],["--------------------\n                       --------------------\n                       --------------------\n                       --------------------\n                       ----------------===-\n                       --------------------\n                       --------------------\n                       --------===---------\n                       --------------------\n                       ==------------------\n                       --------------------\n                       ----------=?=-------\n                       ------=-------------\n                       -----===------------\n                       ----=====----===----\n                       =================---\n                       ===================="]),u=e("./Tile"),c=n(u),f=e("./Entity"),h=e("trim-lines"),d=function(){function e(){var t=this;o(this,e),this.keys={},this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=256,this.canvas.addEventListener("keydown",function(e){t.keys[e.keyCode]=!0}),this.canvas.addEventListener("keyup",function(e){t.keys[e.keyCode]=!1}),this.canvas.setAttribute("tabindex","1"),this.player=new f.Player(16,16),this.camera=[0,0],this.activeLevel={tiles:h(s)}}return l(e,[{key:"canvasClear",value:function(){var e=this.canvas.getContext("2d");e instanceof CanvasRenderingContext2D&&e.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"getDrawnPosition",value:function(e){var t=i(e,2),r=t[0],n=t[1];return[Math.floor(r*c.default.size),Math.floor(n*c.default.size)]}},{key:"drawLevelTiles",value:function(){var e=this.activeLevel.tiles.split("\n"),t=this.canvas.getContext("2d");if(t instanceof CanvasRenderingContext2D)for(var r=0,n=0,a=16,o=16,l=n;l<o;l++)for(var s=r;s<a;s++){var u=e[l]||[],f=u[s]||"",h=this.getDrawnPosition([s,l]),d=i(h,2),v=d[0],F=d[1],g=i(c.default.get(f).position,2),y=g[0],p=g[1];t.drawImage(this.tileset,y*c.default.size,p*c.default.size,c.default.size,c.default.size,v,F,c.default.size,c.default.size)}}}]),e}();r.default=d},{"./Entity":3,"./Tile":5,"trim-lines":2}],5:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(t){n(this,e),this.name=t.name||"Unknown",this.position=t.position,this.solid=t.solid||!1}return o(e,null,[{key:"get",value:function(e){var t=l.get(e);if(t)return t;throw new RangeError("Tile "+e+" not found.")}},{key:"at",value:function(t){var r=a(t,2),n=r[0],o=r[1],i=window.game.activeLevel.tiles.split("\n"),l=i[Math.floor(o)][Math.floor(n)];return e.get(l)}}]),e}();r.default=i;var l=r.tilemap=new Map([["=",new i({name:"Solid Block",position:[0,0],solid:!0})],["?",new i({name:"? Block",position:[1,0],solid:!0})],["-",new i({name:"Air",position:[2,0]})]]);i.size=16},{}],6:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=e("./SLW"),o=n(a);window.addEventListener("load",function(e){var t=new Image;t.onload=function(){var e=new o.default;window.game=e,document.body.appendChild(e.canvas),e.tileset=t,e.canvas.focus();!function t(){requestAnimationFrame(t),e.canvasClear(),e.drawLevelTiles(),e.player.update(e),e.player.draw(e)}()},t.src="tileset.png"})},{"./SLW":4}],7:[function(e,t,r){"use strict";function n(e){return e>0?1:e<0?-1:0}Object.defineProperty(r,"__esModule",{value:!0}),r.sign=n},{}]},{},[6]);
//# sourceMappingURL=index.js.map
