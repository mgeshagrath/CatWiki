import Button from '../../../../ui/button';
import styles from './index.module.scss';

const ExplanationInfo: React.FC = () => {
  return (
    <div className={`${styles.info} flex-column`}>
      <h2>Why should you have a cat?</h2>
      <p>
        Having a cat around you can actually trigger the release of calming
        chemicals in your body which lower your stress and anxiety leves
      </p>
      <Button type="link" goTo="/why">
        Read more
      </Button>
    </div>
  );
};
export default ExplanationInfo;
