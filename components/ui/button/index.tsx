import Link from 'next/link';
import styles from './index.module.scss';

interface ButtonProps {
  type: string;
  goTo?: string;
  target?: string;
  className?: string;
}

enum ButtonTypes {
  link = 'link',
  button = 'button',
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  goTo,
  target = '_self',
  className = '',
}) => {
  if (type === ButtonTypes.button) {
    return (
      <button className={`${className} ${styles.btn} ${styles.filled}`}>
        {children}
      </button>
    );
  }

  if (type === ButtonTypes.link) {
    return (
      <Link href={goTo}>
        <a target={target} className={`${className} ${styles.btn}`}>
          {children}
        </a>
      </Link>
    );
  }
};
export default Button;
