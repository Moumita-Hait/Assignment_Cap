sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("employeetime.controller.View1", {
            onInit: function () {
                var oModel = new JSONModel({
                    startDate: new Date(),
                    endDate: new Date()
                  });
                this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.getView().setModel(oModel);
            },
            onPress: function () {
                console.log("Its clicking");
                // this.oRouter.navTo("View2");
                var oModel = this.getView().getModel();
                var startDate = oModel.getProperty("/startDate");
                var endDate = oModel.getProperty("/endDate");
                console.log("Start date :-",startDate);
                console.log("End date :-",endDate);
                this.getOwnerComponent().getRouter().navTo("View2", {
                startDate: startDate,
                endDate: endDate
            });
            },
            // onItemPress: function(oEvent){
            //     // var param = oEvent.getSource()
            //     // var onSelectedItem = param.getBindingContext().getObject(); 
            //     // var grade = onSelectedItem.EmployeeGrade; 

            //     // if(startDate == "A" || grade == "C" || grade == "SC"){
                    
            //     // }
            
            //     // else{
            //     //     this.oRouter.navTo("myAssiPageThree", {employeeInfo: JSON.stringify(onSelectedItem)});
            //     // }



            // }
        });
    });
