import { useRouter } from "next/dist/client/router";
import { highlightCurrentPath } from "../../lib/front-utilities";
import { NAV_PATHS } from "../../lib/CONSTANTS";
import Logo from "../UI/Logo";
import Button from "../UI/Button";
import NavFoo from "../UI/Card/NavFoo";
import ListItem from "../UI/ListItem";
import styles from "./index.module.scss";

const Navigation: React.FC = () => {
  const { pathname } = useRouter();

  const navMarkup = NAV_PATHS.map((item) => (
    <ListItem
      key={item}
      path={item}
      className={styles?.[highlightCurrentPath(pathname, item)] ?? ""}
    >
      {item}
    </ListItem>
  ));

  return (
    <NavFoo type="navigation" className={styles.nav}>
      <Button type="link" goTo="/">
        <Logo />
      </Button>
      <ul className="flex-between">{navMarkup}</ul>
    </NavFoo>
  );
};
export default Navigation;
