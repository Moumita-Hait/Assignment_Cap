using my.bookshop as my from '../db/data-model';
using {ECTimeOff} from './external/ECTimeOff';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    entity EmployeeTime as projection on ECTimeOff.EmployeeTime { * };
}

