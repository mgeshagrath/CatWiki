// import Image from 'next/image';
import Button from '../../../ui/button';
import styles from './index.module.scss';

const Discover: React.FC = () => {
  return (
    <section className={styles.discover}>
      <h3>Most Searched Breeds</h3>
      <div>
        <h2>66+ Breeds For you to disover</h2>
        <Button type="link" goTo="/wiki">
          see more -{' '}
        </Button>
      </div>
      <div>
        <div>
          <Button type="link" goTo="/">
            {/* <Image /> */}
            <div>Aqui va gatito foto</div>
            <h4>Kitty 1</h4>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Discover;
