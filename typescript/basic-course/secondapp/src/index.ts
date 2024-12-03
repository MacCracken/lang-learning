import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const customMap = new CustomMap('map', 'DEMO_ID');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);

console.log(user);
console.log(company);
