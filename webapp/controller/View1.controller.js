sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("employeedc.controller.View1", {
        onInit() {
        },
        onLoad: function(){
            var oModel = this.getOwnerComponent().getModel();
            var entity= oModel.sServiceUrl;
            var url = entity+'/z_exp_nv'
            var that = this
            $.ajax({
                url:url,
                type: "get",
                dataType: "json",
                success: function(odata,response){
                    if(response==='success'){
                        var oModel = new JSONModel(odata);
                        that.getView().setModel(oModel,"dc")
                    }
                }
            })


        },

        onRowSelect:function(oAction){
            var RowContextBinding = oAction.getParameter("rowContext")
            // console.log(RowContextBinding.sPath);
            var path = `dc>${RowContextBinding.sPath}`
            var oForm = this.getView().byId("form")
            oForm.bindElement(path)
            
        }
    });
});