import { CatIcon } from '../../../ui/icons';
import Button from '../../../ui/button';
import styles from './index.module.scss';

const Form: React.FC = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Enter your breed" />
      <Button type="button">
        <CatIcon className={styles.icon} />
      </Button>
    </form>
  );
};
export default Form;
