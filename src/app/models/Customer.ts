import {Address} from './Address';

export class Customer {
  constructor(public  id: number, public  firstName: string, public  lastName: string, public  email: string,
              public  adress: Address, public  active: boolean) {
  }
}
