import { Address } from './Address';

export class Customer {
<<<<<<< HEAD
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: Address = new Address();
  active: boolean = false;
=======
  constructor(private id: number, private firstName: string, private lastName: string, private email: string,
              private adress: Address, private active: boolean) {
  }
>>>>>>> origin/dev
}
