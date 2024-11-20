sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (Controller) => {
  "use strict";

  return Controller.extend("employeedc.controller.App", {
      onInit() {
      },
      onLoad:function(){
        alert('HEllo')
      }
  });
});