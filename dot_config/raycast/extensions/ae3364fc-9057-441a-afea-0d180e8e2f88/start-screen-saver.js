"use strict";var c=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var p=(e,r)=>{for(var a in r)c(e,a,{get:r[a],enumerable:!0})},v=(e,r,a,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of m(r))!u.call(e,t)&&t!==a&&c(e,t,{get:()=>r[t],enumerable:!(n=S(r,t))||n.enumerable});return e};var l=e=>v(c({},"__esModule",{value:!0}),e);var d={};p(d,{default:()=>g});module.exports=l(d);var s=require("@raycast/api");var o=require("child_process"),i=async()=>{try{return(0,o.spawnSync)("open -a ScreenSaverEngine.app",{shell:!0}),{success:!0,message:"Screen saver activated"}}catch(e){return console.error(String(e)),{success:!0,message:String(e)}}};var g=async()=>{try{await(0,s.closeMainWindow)();let e=await i();e.success||await(0,s.showHUD)(e.message)}catch(e){console.error(String(e)),await(0,s.showHUD)(String(e))}};0&&(module.exports={});
