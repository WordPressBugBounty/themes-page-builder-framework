wp.customize.controlConstructor["wpbf-checkbox"]=wp.customize.wpbfDynamicControl.extend({initWpbfControl:function(t){let n=t||this;n.container.on("change","input",function(){n.setting?.set(jQuery(this).is(":checked"))})}}),wp.customize.controlConstructor["wpbf-toggle"]=wp.customize.wpbfDynamicControl.extend({initWpbfControl:function(t){let n=t||this;n.container.on("change","input",function(){n.setting?.set(jQuery(this).is(":checked"))})}});
//# sourceMappingURL=checkbox-control-min.js.map
