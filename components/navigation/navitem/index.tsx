import Button from '../../ui/button';
import styles from './index.module.scss';

interface ItemProps {
  path: string;
  className: string;
}

const NavItem: React.FC<ItemProps> = ({ path, className, children }) => {
  return (
    <li className={`${styles.item} ${styles?.[className] ?? ''}`}>
      <Button type="link" goTo={`/${path}`}>
        {children}
      </Button>
    </li>
  );
};
export default NavItem;
