import {Address} from './Address';

export class Customer{
  constructor( private id: number, private firstName: string, private lastName: string, private email: string, private adress: Address | 'active' ) {
  }
}
