import styles from './index.module.scss';
import KittyCard from './kitty';

const dummyKitties = [
  {
    path: '/images/grid/image-1.png',
    greed: 'Kitty 1',
  },
  {
    path: '/images/grid/image-2.png',
    greed: 'Kitty 2',
  },
  {
    path: '/images/grid/image-3.png',
    greed: 'Kitty 3',
  },
  {
    path: '/images/grid/image-4.jpg',
    greed: 'Kitty 4',
  },
  {
    path: '/images/grid/image-5.jpg',
    greed: 'Kitty 5',
  },
  {
    path: '/images/grid/image-1.png',
    greed: 'Kitty 1',
  },
  {
    path: '/images/grid/image-2.png',
    greed: 'Kitty 2',
  },
  {
    path: '/images/grid/image-3.png',
    greed: 'Kitty 3',
  },
];

const Slider: React.FC = () => {
  const kittiesCards = dummyKitties.map((kitty) => (
    <KittyCard key={Math.random()} kitty={kitty} />
  ));

  return (
    <div className={styles.slider}>
      <div className={styles.track}>{kittiesCards}</div>
    </div>
  );
};
export default Slider;
