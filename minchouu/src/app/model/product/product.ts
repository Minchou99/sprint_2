import {Categoty} from './categoty';
import {Image} from './image';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  startDate?: string;
  origin?: string;
  color?: string;
  size?: string;
  description?: string;
  isDelete?: string;
  category?: string;
  image?: string;
}
