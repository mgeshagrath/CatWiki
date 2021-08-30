import Image from 'next/image';
import styles from './index.module.scss';

const Logo: React.FC<{ color?: string }> = ({ color = 'black' }) => {
  return (
    <Image
      src="/images/CatwikiLogo.svg"
      alt="logo"
      width="120"
      height="40"
      className={styles[color]}
    />
  );
};
export default Logo;
