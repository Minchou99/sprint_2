import {Payment} from './payment';
import {Product} from '../product/product';

export interface PaymentDetail {
  id?: number;
  quantity?: number;
  deleteStatus?: boolean;
  productOrder?: Payment;
  product?: Product;
}
