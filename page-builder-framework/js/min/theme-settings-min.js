var e;(e=jQuery)(".heatbox-tab-nav-item").on("click",function(n){e(".heatbox-tab-nav-item").removeClass("active"),e(this).addClass("active")}),e(".settings-panel").on("click",function(n){e(".heatbox-admin-panel").css("display","none"),e(".wpbf-settings-panel").css("display","block")}),e(".recommended-panel").on("click",function(n){e(".heatbox-admin-panel").css("display","none"),e(".wpbf-recommended-panel").css("display","block")}),e(".premium-panel").on("click",function(n){e(".heatbox-admin-panel").css("display","none"),e(".wpbf-premium-panel").css("display","block")}),e(".documentation-panel").on("click",function(n){e(".heatbox-admin-panel").css("display","none"),e(".wpbf-documentation-panel").css("display","block")}),e(window).on("load",function(n){let s=window.location.hash;s||(s="#settings"),"#settings"===s&&(e(".heatbox-tab-nav-item.settings-panel").addClass("active"),e(".wpbf-settings-panel").css("display","block")),"#recommended"===s&&(e(".heatbox-tab-nav-item.recommended-panel").addClass("active"),e(".wpbf-recommended-panel").css("display","block")),"#premium"===s&&(e(".heatbox-tab-nav-item.premium-panel").addClass("active"),e(".wpbf-premium-panel").css("display","block")),"#documentation"===s&&(e(".heatbox-tab-nav-item.documentation-panel").addClass("active"),e(".wpbf-documentation-panel").css("display","block")),function(){let n=document.querySelector(".wpbf-remove-downloaded-fonts-metabox .submission-status");if(!(n instanceof HTMLElement))return;let s=!1;function a(e,s){n instanceof HTMLElement&&(n.textContent=s,n.classList.add("success"===e?"is-success":"is-error"),n.classList.remove("is-hidden"))}e(".wpbf-remove-downloaded-fonts").on("click",function(t){if(s)return;s=!0;let i=this;i.classList.add("is-loading"),e.ajax({url:window.ajaxurl,type:"POST",data:{action:"wpbf_clear_font_cache",nonce:i.dataset.nonce}}).done(function(e){a(e.success?"success":"error",e.data)}).fail(function(e){a("error","Something went wrong.")}).always(function(e){s=!1,i.classList.remove("is-loading"),setTimeout(function(){n instanceof HTMLElement&&(n.textContent="",n.classList.remove("is-success"),n.classList.remove("is-error"),n.classList.add("is-hidden"))},4e3)})})}()});