import Heading from '../../ui/heading';
import Logo from '../../ui/logo';
import styles from './index.module.scss';
import SearchForm from './search';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} flex-between flex-column`}>
      <div className={styles.wrapper}>
        <Heading type="h1">
          <Logo color="white" width="290" height="90" />
        </Heading>
        <Heading type="h2">Get to know more about your cat breed</Heading>
        <SearchForm />
      </div>
    </header>
  );
};
export default Header;
