!function(){var e=document.querySelector("#breed-select"),o=(document.querySelector("#cat-info"),document.querySelector(".loader"));document.querySelector(".error");fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_pa8j24YASXV1ikK3eqCyQAgv0HmRLxkS3O6N1JNeXgOavrwNl3JkhXMRpzI7GoM2"}}).then((function(e){if(!e.ok)throw new Error("Error en la solicitud");return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error("Error:",e)})),fetch("https://api.thecatapi.com/v1/breeds").then((function(e){if(o.style.display="block",!e.ok)throw new Error("Error en la solicitud");return e.json()})).then((function(r){r.forEach((function(o){var r=document.createElement("option");r.value=o.id,r.textContent=o.name,e.appendChild(r)})),console.log(r),o.style.display="none"})).catch((function(e){console.error("Error:",e)}))}();
//# sourceMappingURL=index.b9e5646f.js.map
