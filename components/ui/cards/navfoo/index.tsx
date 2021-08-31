import styles from './index.module.scss';

interface CardProps {
  type: string;
  className: string;
}

enum CardType {
  nav = 'navigation',
  foo = 'footer',
}

const NavFoo: React.FC<CardProps> = ({ type, className, children }) => {
  if (type === CardType.nav)
    return <nav className={`${className} ${styles.card}`}>{children}</nav>;
  if (type === CardType.foo)
    return (
      <footer className={`${className} ${styles.card}`}>{children}</footer>
    );
};
export default NavFoo;
