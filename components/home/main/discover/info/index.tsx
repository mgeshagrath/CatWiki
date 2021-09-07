import Button from '../../../../ui/button';
import Heading from '../../../../ui/heading';
import styles from './index.module.scss';

const DiscoverInfo: React.FC = () => {
  return (
    <div className={`${styles.info} flex-between`}>
      <Heading type="h2">66+ Breeds For you to disover</Heading>
      <Button type="link" goTo="/wiki">
        see more
      </Button>
    </div>
  );
};
export default DiscoverInfo;
