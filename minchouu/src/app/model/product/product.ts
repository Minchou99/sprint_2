import {Categoty} from './categoty';
import {Image} from './image';

export interface Product {
  id?: number;
  price?: number;
  startDate?: string;
  origin?: string;
  color?: string;
  size?: string;
  description?: string;
  isDelete?: string;
  category?: Categoty;
  images?: Image;
}
