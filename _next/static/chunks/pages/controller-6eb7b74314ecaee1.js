(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{1319:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/controller",function(){return r(1868)}])},1868:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),o=r(5904);let l=o.z.string().brand();o.z.string().brand(),o.z.string().brand();var s=r(1163),a=r(7294),c=r(2642),u=r(1290),i=r(1985),d=r.n(i);let _=()=>{let e=(0,a.useRef)(null),[t,r]=(0,a.useState)(0),[o,i]=(0,a.useState)(null),_=(0,a.useRef)({x:0,y:0}),[f,h]=(0,a.useState)(l.parse(localStorage.getItem("userId"))),v=(0,s.useRouter)();null===localStorage.getItem("userId")&&v.push("/gradiusLogin");let b=()=>{if(null!==e.current){let t=e.current.offsetWidth;r(t)}};(0,a.useEffect)(()=>{let e=setInterval(b,100);return()=>{clearInterval(e)}},[]);let p=async()=>{null!==f&&await u.x.rooms.gunPosition.$post({body:f})},g=async()=>{null!==f&&await u.x.rooms.control.$post({body:{moveDirection:_.current,userId:f}})},m=()=>{let e=setInterval(g,50);i(e)},x=()=>{null!==o&&clearInterval(o)},j=e=>{var t,r;let n={x:Math.round(null!==(t=e.x)&&void 0!==t?t:0),y:-Math.round(null!==(r=e.y)&&void 0!==r?r:0)};_.current=n};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:d().container,children:(0,n.jsxs)("div",{className:d().board,children:[(0,n.jsx)("div",{ref:e,className:d().joystick,children:(0,n.jsx)(c.Tj,{size:t,stickSize:t/2,baseColor:"gray",stickColor:"black",baseShape:c.aR.Square,move:j,stop:x,start:m})}),(0,n.jsx)("button",{className:d().shoot,onClick:p})]})}),(0,n.jsxs)("p",{children:["userid:",f]})]})};var f=_},1985:function(e){e.exports={container:"controller_container__cQDFp",board:"controller_board__cEojV",joystick:"controller_joystick__Y1wVn",ma:"controller_ma__vuUpb",shoot:"controller_shoot__Rrg9w"}}},function(e){e.O(0,[435,774,888,179],function(){return e(e.s=1319)}),_N_E=e.O()}]);