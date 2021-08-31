import { useRouter } from 'next/dist/client/router';
import { checkSelected } from '../../lib/front-utilities';
import { NAV_ELEMENTS } from '../../lib/consts';
import Logo from '../ui/logo';
import Button from '../ui/button';
import NavItem from './navitem';
import NavFoo from '../ui/cards/navfoo';
import styles from './index.module.scss';

const Navigation: React.FC = () => {
  const { pathname } = useRouter();

  const navMarkup = NAV_ELEMENTS.map((item) => (
    <NavItem key={item} path={item} className={checkSelected(pathname, item)}>
      {item}
    </NavItem>
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
