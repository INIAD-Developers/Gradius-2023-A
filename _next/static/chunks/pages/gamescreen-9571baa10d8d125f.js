(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[876],{2341:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gamescreen",function(){return n(7103)}])},7103:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var i=n(5893),o=n(24),s=n(5371),r=n(8239),l=n(7294),a=n(2237),u=n(1290),c=function(){let e=Number(window.innerWidth),t=Number(window.innerHeight);console.log(e);let[n,o]=(0,l.useState)([]),[s,r]=(0,l.useState)([]),c=(0,l.useCallback)(async()=>{let e=await u.x.rooms.playerPosition.$get(),t=await u.x.rooms.gunPosition.$get();console.log(e),console.log(t),o(e),r(t)},[]),h=(0,l.useCallback)(async()=>{await u.x.rooms.gunPosition.$post();let e=await u.x.rooms.gunPosition.$get();r(e)},[]);return(0,l.useEffect)(()=>{let e=setInterval(c,100);return()=>{clearInterval(e)}},[c]),(0,i.jsx)(a.Hf,{width:e,height:t,onClick:h,children:(0,i.jsxs)(a.mh,{children:[(0,i.jsx)(a.UL,{stroke:"black",strokeWidth:1,x:0,y:0,width:e,height:t}),n.map((e,t)=>(0,i.jsx)(a.UL,{x:e[0],y:e[1],width:50,height:50,fill:"red"},t)),s.map((e,t)=>(0,i.jsx)(a.UL,{x:e[0],y:e[1],width:50,height:50,fill:"green"},t))]})})};let h=()=>{let[e]=(0,o.KO)(s.L);return e?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c,{})}):(0,i.jsx)(r.g,{visible:!0})};var g=h}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=2341)}),_N_E=e.O()}]);