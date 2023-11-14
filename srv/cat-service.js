const cds = require('@sap/cds');     

(async function(){
    sfecei = await cds.connect.to("ECEmploymentInformation");
})();
(async function(){
    sfecto = await cds.connect.to("ECTimeOff");
})();

class CatalogService extends cds.ApplicationService{
    init(){
        var allUserData = [];
        this.on(["READ"], "EmpJob", async(req) => {
            // allUserData =  await sfecei.read("EmpJob").where`managerId = '108743'`;
            // return allUserData
            allUserData = await sfecei.send({
                query: SELECT.from("EmpJob").where`managerId = '102004'`
            });
            return allUserData;
         })
        this.on(["READ"], "EmployeeTime", async(req) => {
            
            // this.on(["READ"], "EmpJob", async(req) => {
            //     allUserData =  await sfecei.read("EmpJob").where`managerId = '108743'`;
            //  })
            
            // const allUsersIds = [];
            // for(let i of allUserData){
            //     allUsersIds.push(i.userId);
            // }
            // const employeeTime =  await sfecto.read("EmployeeTime").limit(5)
            // return await sfecto.send({
            //     query: SELECT.from("EmployeeTime").limit(5)
            // });

            // const startDate = req.query.SELECT.from.dateStart; // Adjust based on your actual data model
            // const endDate = req.query.SELECT.from.dateEnd;
            // const startDate = this.options.startDate;
            // const endDate = this.options.endDate;
             const allUsersIds = allUserData.map(cure_user =>cure_user["userId"])
            //  console.log("allUsersIds...... ",allUsersIds);
            //  console.log("Here start date:- ",startDate);
            //  console.log("Here end date:- ",endDate);
             const employeeTime =  await sfecto.read("EmployeeTime").where`userId in ${allUsersIds}`;
            //  const employeeTime =  await sfecto.read("EmployeeTime").where`userId in ${allUsersIds} and startDate >'${startDate}' and endDate <'${endDate}' and approvalStatus = "APPROVED"`
            // return allUserData;
            return employeeTime;
        })
        return super.init();
    }
};
module.exports = {CatalogService}