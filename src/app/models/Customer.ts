import {Address} from './Adress';

export class Customer{
  constructor( private id: number, private firstName: string, private lastName: string, private email: string, private adress: Address | 'active' ) {
  }
}
