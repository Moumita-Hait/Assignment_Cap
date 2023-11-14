sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("employeetime.controller.View2", {
            onInit: function () {
            // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // oRouter.getRoute("View2").attachPatternMatched(this._onRouteMatched, this);

            },
            // _onRouteMatched: function (oEvent) {
            //     // Get the parameters from the URL
            //     var oArgs = oEvent.getParameter("arguments");
            //     var startDate = oArgs.startDate;
            //     var endDate = oArgs.endDate;
          
            //     // Use the start date and end date for further processing, e.g., API call
            //     // this.callCAPService(startDate, endDate);
            //   },
            // _makeAPICall(startDate, endDate){
            //     var oModel = new sap.ui.model.odata.ODataModel("/CatalogService");
            //     oModel.callFunction("/fetchData", {
            //         method: "GET",
            //         urlParameters: {
            //           dateStart: startDate,
            //           dateEnd: endDate
            //         },
            //         success: function (oData, response) {
            //           console.log(oData);
            //         },
            //         error: function (err) {
            //           console.error(err);
                      
            //         }
            //       });
            // } 
            // callCAPService: function (startDate, endDate) {
            //   var that = this;
        
            //   // Assuming your CAP service is hosted at /cat-service
            //   $.ajax({
            //     url: "/cat-service",
            //     type: "GET",
            //     data: {
            //       startDate: startDate,
            //       endDate: endDate
            //     },
            //     success: function (data) {
            //       // Handle success - data is the response from CAP service
            //       console.log("Data:-",data);c
        
            //       // Example: Navigating to the next screen
            //       that.getOwnerComponent().getRouter().navTo("nextScreen");
            //     },
            //     error: function (err) {
            //       // Handle error
            //       console.error(err);
            //     }
            //   });
            // }
        });
    });