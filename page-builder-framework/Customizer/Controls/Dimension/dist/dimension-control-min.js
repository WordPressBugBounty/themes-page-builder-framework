wp.customize.controlConstructor["wpbf-dimension"]=wp.customize.wpbfDynamicControl.extend({initWpbfControl:function(t){let i;(t=t||this).wpbfNotifications(),t.container.on("change keyup paste","input",function(){i=jQuery(this).val(),t.setting?.set(i)})},wpbfNotifications:function(){let t=this,i=t.params.allowUnitless;wp.customize(t.id,function(n){n.bind(function(e){let o="long_title";!t.validateCssValue(e)&&(!i||isNaN(e))?n.notifications.add(o,new wp.customize.Notification(o,{type:"warning",message:wpbfDimensionControlL10n["invalid-value"]})):n.notifications.remove(o)})})},validateCssValue:function(t){let i=this;if(!t||""===t||0===t||"0"===t||"auto"===t||"inherit"===t||"initial"===t)return!0;let n="string"==typeof t?t:t.toString();if(0<=n.indexOf("calc(")&&0<=n.indexOf(")"))return!0;let e=parseFloat(n),o=n.replace(e.toString(),"");if(!o)return!0;let a=n.split(" "),s=!0;return 2<=a.length?(a.forEach(function(t){t&&!i.validateCssValue(t)&&(s=!1)}),s):!isNaN(e)&&-1!==["fr","rem","em","ex","%","px","cm","mm","in","pt","pc","ch","vh","vw","vmin","vmax"].indexOf(o)}});
