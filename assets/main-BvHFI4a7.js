/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const i=document.getElementById("search"),u=document.querySelectorAll(".especialidad");i.addEventListener("input",function(){const e=i.value.toLowerCase();u.forEach(function(o){o.querySelector("h2").textContent.toLowerCase().includes(e)?o.classList.remove("hidden"):o.classList.add("hidden")})});const p=document.querySelectorAll(".especialidad");let c=null;p.forEach(function(e){e.querySelector("img").addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),e===c?(e.classList.remove("active"),c=null):(c&&c.classList.remove("active"),e.classList.add("active"),c=e)})});function f(e){const o=e.nextElementSibling,t=e.querySelector(".arrow");o.style.display==="block"?(o.style.display="none",t.classList.remove("down"),t.classList.add("up")):(d(),o.style.display="block",t.classList.remove("up"),t.classList.add("down"))}function y(e){const o=e.nextElementSibling,t=e.querySelector(".arrow");o.style.display==="block"?(o.style.display="none",t.classList.remove("down"),t.classList.add("up")):(a(),o.style.display="block",t.classList.remove("up"),t.classList.add("down"))}function d(){const e=document.querySelectorAll(".dropdown-content"),o=document.querySelectorAll(".dropdown-button");e.forEach(t=>{t.style.display="none"}),o.forEach(t=>{const r=t.querySelector(".arrow");r.classList.remove("down"),r.classList.add("up")}),a()}function a(){const e=document.querySelectorAll(".dropdown-sub-content"),o=document.querySelectorAll(".dropdown-button-sub");e.forEach(t=>{t.style.display="none"}),o.forEach(t=>{const r=t.querySelector(".arrow");r.classList.remove("down"),r.classList.add("up")})}document.querySelectorAll(".dropdown-button").forEach(e=>{e.addEventListener("click",function(o){o.stopPropagation(),f(e)})});document.querySelectorAll(".dropdown-button-sub").forEach(e=>{e.addEventListener("click",function(o){o.stopPropagation(),y(e)})});document.addEventListener("click",function(){d()});