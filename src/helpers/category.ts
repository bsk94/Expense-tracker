import { ReactComponent as House } from '../assets/icons/house.svg';
import { ReactComponent as Transport } from '../assets/icons/bus.svg';
import { ReactComponent as Food } from '../assets/icons/silverware.svg';
import { ReactComponent as Entertainment } from '../assets/icons/smily.svg';
import { ReactComponent as Other } from '../assets/icons/pen.svg';

interface CategoryForm {
  cat: string;
  icon: React.FunctionComponent;
}

export const categoryForm: CategoryForm[] = [
  {
    cat: 'Home',
    icon: House
  },
  {
    cat: 'Entertainment',
    icon: Entertainment
  },
  {
    cat: 'Food',
    icon: Food
  },
  {
    cat: 'Transport',
    icon: Transport
  },

  {
    cat: 'Other',
    icon: Other
  }
];
