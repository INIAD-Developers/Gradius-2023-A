(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[876],{2341:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gamescreen",function(){return n(7103)}])},7103:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),i=n(24),s=n(5371),o=n(8239),l=n(7294),u=n(2237),c=n(1290),a=function(){let e=Number(window.innerWidth),t=Number(window.innerHeight);console.log(e);let[n,i]=(0,l.useState)([]),[s,o]=(0,l.useState)([]),a=(0,l.useCallback)(async()=>{let e=await c.x.rooms.control.$get(),t=await c.x.rooms.gunPosition.$get();console.log(e),console.log(t),i(e),o(t)},[]);return(0,l.useEffect)(()=>{let e=setInterval(a,100);return console.log(n),()=>{clearInterval(e)}},[a,n]),(0,r.jsx)(u.Hf,{width:e,height:t,children:(0,r.jsxs)(u.mh,{children:[(0,r.jsx)(u.UL,{stroke:"black",strokeWidth:1,x:0,y:0,width:e,height:t}),n.map((e,t)=>(0,r.jsx)(u.UL,{x:e[0],y:e[1],width:50,height:50,fill:"red"},t)),s.map((e,t)=>(0,r.jsx)(u.Cd,{radius:10,x:e[0],y:e[1],fill:"green"},t))]})})};let h=()=>{let[e]=(0,i.KO)(s.L);return e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a,{})}):(0,r.jsx)(o.g,{visible:!0})};var d=h}},function(e){e.O(0,[237,774,888,179],function(){return e(e.s=2341)}),_N_E=e.O()}]);