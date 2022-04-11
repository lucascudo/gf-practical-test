import { SelectItem } from 'primeng/api';
import { ExtraItem } from './extra-item';

export interface Extra {
  name: string;
  items: ExtraItem[];
  pSelectItems?: SelectItem[];
  required?: boolean;
}
