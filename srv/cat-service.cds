using my.bookshop as my from '../db/data-model';
using {ECEmploymentInformation} from './external/ECEmploymentInformation';
using {ECTimeOff} from './external/ECTimeOff';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    entity EmpJob as projection on ECEmploymentInformation.EmpJob { * };
    entity EmployeeTime as projection on ECTimeOff.EmployeeTime { * };
}

