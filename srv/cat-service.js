const cds = require('@sap/cds');
(async function(){
    sfecei = await cds.connect.to("ECTimeOff");
})();

class CatalogService extends cds.ApplicationService{
    init()  {
        this.on(["READ"], "EmployeeTime", async(req) => {
            return await sfecei.send({
                query: SELECT.from("EmployeeTime").where`startDate > '2015-11-12' and endDate < '2015-11-14'`
            });
        })
        return super.init();
    }
};
module.exports = {CatalogService}