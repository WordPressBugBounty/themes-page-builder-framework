!function(){!function(){let t=document.querySelector("#wpbf_layout-hide");if(t){let e=t.parentNode;e&&e instanceof HTMLElement&&(e.style.display="none")}(function(){if(!window.inlineEditPost)return;let e=window.inlineEditPost.edit;window.inlineEditPost.edit=function(t){e.apply(this,arguments);let i=0;if("object"==typeof t&&(i=parseInt(this.getId(t))),!i)return;let n=document.querySelector("#edit-"+i);if(!n)return;let l=document.querySelector("#post-"+i);if(!l)return;let r=l.querySelector(".wpbf-quick-edit-preset-values");r&&(n.querySelectorAll(".wpbf-quick-edit-use-preset").forEach(function(e){if(!(e instanceof HTMLInputElement))return;let t=e.parentNode?.parentNode,n=t?t.querySelector("label"):null,l=e.dataset.wpbfPresetName,c=r.getAttribute("data-wpbf-"+l),u="wpbf-quick-edit-post-"+i+"-"+l+"-"+e.value.replace(/ /g,"-");e.id=u,n&&(n.htmlFor=u),"checkbox"===e.type?(c?c.split(","):[]).includes(e.value)?e.checked=!0:e.checked=!1:"radio"===e.type&&(c==e.value?e.checked=!0:e.checked=!1)}),n.querySelectorAll(".wpbf-quick-edit-nonce-field").forEach(function(e){if(!(e instanceof HTMLInputElement))return;let t=e.name.replace(/_/g,"-");t=t.replace("[]","");let i=r.getAttribute("data-"+t);i&&(e.value=i)}))}})(),jQuery(document).on("click",".inline-edit-save .save",e)}();function e(){let e=$(this).closest(".inline-edit-row-page");if(!e.length)return;let t=e[0].id;if(!(t=t.replace("edit-","")))return;let i=document.querySelector("#post-"+t);if(!i)return;let n=i.querySelector(".wpbf-quick-edit-preset-values");n&&e[0].querySelectorAll(".wpbf-quick-edit-fields-area").forEach(function(e){if(!(e instanceof HTMLElement))return;let t=e.dataset.wpbfFieldsGroupName,i=e.dataset.wpbfFieldsGroupType;if(!t||!i)return;let l="";if("checkbox"===i){let e=document.querySelectorAll(".wpbf-quick-edit-use-preset:checked"),t=[];e.forEach(function(e){e instanceof HTMLInputElement&&t.push(e.value)}),l=t.join(",")}else{let e=document.querySelector(".wpbf-quick-edit-use-preset:checked");e instanceof HTMLInputElement&&(l=e.value)}n.setAttribute("data-wpbf-"+t,l)})}}();