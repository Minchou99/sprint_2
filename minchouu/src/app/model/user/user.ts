import {Account} from '../account/account';
import {Product} from '../product/product';

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  email?: string;
  birthDay?: string;
  idCard?: string;
  isDelete?: string;
  userType?: string;
  account?: Account;
  product?: Product;

}
