import { useRouter } from 'next/dist/client/router';
import { checkSelected } from '../../lib/front-utilities';
import { NAV_ELEMENTS } from '../../lib/CONSTANTS';
import Logo from '../ui/logo';
import Button from '../ui/button';
import NavFoo from '../ui/cards/navfoo';
import ListItem from '../ui/list-item-linked';
import styles from './index.module.scss';

const Navigation: React.FC = () => {
  const { pathname } = useRouter();
  const navMarkup = NAV_ELEMENTS.map((item) => (
    <ListItem
      key={item}
      path={item}
      className={styles?.[checkSelected(pathname, item)] ?? ''}
    >
      {item}
    </ListItem>
  ));

  return (
    <NavFoo type="navigation" className={styles.nav}>
      <Button type="link" goTo="/">
        <Logo />
      </Button>
      <ul>{navMarkup}</ul>
    </NavFoo>
  );
};
export default Navigation;
