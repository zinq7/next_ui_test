(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6405:function(e,t,n){Promise.resolve().then(n.bind(n,8913)),Promise.resolve().then(n.t.bind(n,4332,23)),Promise.resolve().then(n.t.bind(n,2882,23)),Promise.resolve().then(n.t.bind(n,6571,23))},8913:function(e,t,n){"use strict";n.d(t,{Providers:function(){return k}});var a=n(7437),l=n(2265),r=n(2094),s=n(4909),o=n(226),i=n(1671),c=n(565),d=e=>{let{children:t,navigate:n,disableAnimation:d=!1,disableRipple:m=!1,skipFramerMotionAnimations:u=d,validationBehavior:h="aria",locale:f="en-US",defaultDates:v,createCalendar:b,...y}=e,_=t;n&&(_=(0,a.jsx)(o.pG,{navigate:n,children:_}));let $=(0,l.useMemo)(()=>(d&&u&&(c.c.skipAnimations=!0),{createCalendar:b,defaultDates:v,disableAnimation:d,disableRipple:m,validationBehavior:h}),[b,null==v?void 0:v.maxDate,null==v?void 0:v.minDate,d,m,h]);return(0,a.jsx)(r.a,{value:$,children:(0,a.jsx)(s.b,{locale:f,children:(0,a.jsx)(i.N3,{...y,children:_})})})},m=n(1169);let u=["light","dark"],h="(prefers-color-scheme: dark)",f="undefined"==typeof window,v=(0,l.createContext)(void 0),b=e=>(0,l.useContext)(v)?l.createElement(l.Fragment,null,e.children):l.createElement(_,e),y=["light","dark"],_=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:r="theme",themes:s=y,defaultTheme:o=n?"system":"light",attribute:i="data-theme",value:c,children:d,nonce:m})=>{let[f,b]=(0,l.useState)(()=>g(r,o)),[_,k]=(0,l.useState)(()=>g(r)),w=c?Object.values(c):s,C=(0,l.useCallback)(e=>{let l=e;if(!l)return;"system"===e&&n&&(l=p());let r=c?c[l]:l,s=t?S():null,d=document.documentElement;if("class"===i?(d.classList.remove(...w),r&&d.classList.add(r)):r?d.setAttribute(i,r):d.removeAttribute(i),a){let e=u.includes(o)?o:null,t=u.includes(l)?l:e;d.style.colorScheme=t}null==s||s()},[]),E=(0,l.useCallback)(e=>{b(e);try{localStorage.setItem(r,e)}catch(e){}},[e]),x=(0,l.useCallback)(t=>{k(p(t)),"system"===f&&n&&!e&&C("system")},[f,e]);(0,l.useEffect)(()=>{let e=window.matchMedia(h);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),(0,l.useEffect)(()=>{let e=e=>{e.key===r&&E(e.newValue||o)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,l.useEffect)(()=>{C(null!=e?e:f)},[e,f]);let T=(0,l.useMemo)(()=>({theme:f,setTheme:E,forcedTheme:e,resolvedTheme:"system"===f?_:f,themes:n?[...s,"system"]:s,systemTheme:n?_:void 0}),[f,E,e,_,n,s]);return l.createElement(v.Provider,{value:T},l.createElement($,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:r,themes:s,defaultTheme:o,attribute:i,value:c,children:d,attrs:w,nonce:m}),d)},$=(0,l.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:r,defaultTheme:s,value:o,attrs:i,nonce:c})=>{let d="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${i.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=r?u.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,a=!0)=>{let l=o?o[e]:e,s=t?e+"|| ''":`'${l}'`,i="";return r&&a&&!t&&u.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||l?`c.add(${s})`:"null":l&&(i+=`d[s](n,${s})`),i},b=e?`!function(){${m}${v(e)}}()`:a?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${h}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${v(o?"x[e]":"e",!0)}}${d?"":"else{"+v(s,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${v(o?"x[e]":"e",!0)}}else{${v(s,!1,!1)};}${f}}catch(t){}}();`;return l.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:b}})},()=>!0),g=(e,t)=>{let n;if(!f){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},S=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(h)),e.matches?"dark":"light");function k(e){let{children:t,themeProps:n}=e,l=(0,m.useRouter)();return(0,a.jsx)(d,{navigate:l.push,children:(0,a.jsx)(b,{...n,children:t})})}},4332:function(){},6571:function(e){e.exports={style:{fontFamily:"'__Fira_Code_55d5d4', '__Fira_Code_Fallback_55d5d4'",fontStyle:"normal"},className:"__className_55d5d4",variable:"__variable_55d5d4"}},2882:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41",variable:"__variable_36bd41"}}},function(e){e.O(0,[228,895,433,971,23,744],function(){return e(e.s=6405)}),_N_E=e.O()}]);