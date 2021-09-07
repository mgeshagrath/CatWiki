import Button from '../../ui/button';
import Image from 'next/image';
import Heading from '../../ui/heading';
import styles from './index.module.scss';

const Breed: React.FC = () => {
  return (
    <Button goTo="/" type="link">
      <figure className={`${styles.breed} flex-between decoration`}>
        <Image
          src="/queen.jpg"
          width="170"
          height="170"
          layout="responsive"
          objectFit="cover"
        />
        <div>
          <Heading type="h2">Bengal</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing el ipsum dolor
            sit amet consectetur dolor sit amet consectetur dolor sit amet
            consectetur...
          </p>
        </div>
      </figure>
    </Button>
  );
};
export default Breed;
