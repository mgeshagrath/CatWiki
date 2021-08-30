import { useRouter } from 'next/dist/client/router';
import { checkSelected } from '../../lib/front-utilities';
import Logo from '../ui/logo';
import Button from '../ui/button';
import styles from './index.module.scss';

const Navigation: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <Button type="link" goTo="/">
        <Logo />
      </Button>
      <ul>
        <li>
          <Button
            type="link"
            goTo="/wiki"
            className={checkSelected(pathname, 'wiki')}
          >
            Wiki
          </Button>
        </li>
        <li>
          <Button
            type="link"
            goTo="/random"
            className={checkSelected(pathname, 'random')}
          >
            Random
          </Button>
        </li>
        <li>
          <Button
            type="link"
            goTo="/why"
            className={checkSelected(pathname, 'why')}
          >
            Why a Cat?
          </Button>
        </li>
        <li>
          <Button
            type="link"
            goTo="/about"
            className={checkSelected(pathname, 'about')}
          >
            About
          </Button>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
