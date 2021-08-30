import Link from 'next/link';
import styles from './index.module.scss';

interface ButtonProps {
  type: string;
  goTo?: string;
  className?: string;
}

enum ButtonTypes {
  link = 'link',
  // navLink = 'navlink',
  button = 'button',
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  goTo,
  className = '',
}) => {
  if (type === ButtonTypes.button) {
    return (
      <button className={`${styles.btn} ${styles.filled} ${className}`}>
        {children}
      </button>
    );
  }

  if (type === ButtonTypes.link) {
    return (
      <Link href={goTo}>
        <a className={`${styles.btn} ${className}`}>{children}</a>
      </Link>
    );
  }
};
export default Button;

// if (type === ButtonTypes.navLink) {
//   return (
//     <li>
//       <Link href={goTo}>
//         <a className={`${className}`} >{children}</a>
//       </Link>
//     </li>
//   );
// }
