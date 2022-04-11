import {SelectItem} from 'primeng/api';

export interface Extra {
  name: string;
  items: string[];
  pSelectItems?: SelectItem[];
  required?: boolean;
}
