import { useInputChanged } from "../../../../../lib/hooks/input";
// import { CatIcon } from '../../../../ui/icons';
// import Button from '../../../../ui/button';
import styles from "./index.module.scss";

type Query = (query: string) => void;

const Form: React.FC<{ onQuery?: Query }> = ({ onQuery }) => {
  const { value, error, changeHandler } = useInputChanged(onQuery);

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      {error && <span>{error}</span>}
      <input
        type="text"
        placeholder="Enter your breed"
        onChange={changeHandler}
        value={value}
      />
      {/* <Button type="button">
        <CatIcon className={styles.icon} />
      </Button> */}
    </form>
  );
};
export default Form;
