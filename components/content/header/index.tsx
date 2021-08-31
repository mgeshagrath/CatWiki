import Heading from '../../ui/heading';
import Logo from '../../ui/logo';
import Form from './form';
import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Heading type="h1">
          <Logo color="white" width="290" height="90" />
        </Heading>
        <Heading type="h2">Get to know more about your cat breed</Heading>
        <Form />
      </div>
    </header>
  );
};
export default Header;
