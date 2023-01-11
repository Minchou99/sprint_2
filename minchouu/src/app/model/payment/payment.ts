import {PaymentDetail} from './payment-detail';
import {User} from '../user/user';

export interface Payment {
  id?: number;
  paymentDate?: string;
  isDelete?: string;
  user?: User;
  product_detail_order?: PaymentDetail;
}
