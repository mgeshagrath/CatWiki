import styles from "./index.module.scss";

const Bar: React.FC<{ on: boolean }> = ({ on }) => {
  return <span className={`${styles.bar} ${on ? styles.on : ""}`} />;
};
export default Bar;
