import Button from '../ui/button';
import Logo from '../ui/logo';
import styles from './index.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>&copy;</span>
        <span> Created by </span>
        <Button type="link" goTo="https://github.com/michan-9" target="_blank">
          Michan-9
        </Button>
        <span> - 2021</span>
      </p>
      <Button type="link" goTo="/">
        <Logo color="white" />
      </Button>
    </footer>
  );
};
export default Footer;
