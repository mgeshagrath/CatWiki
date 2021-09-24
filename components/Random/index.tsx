import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { getRandomCatName } from "../../lib/front-utilities";
import { useAppSelector } from "../../store/types";
import Spinner from "../UI/Spinner";
import styles from "./index.module.scss";

enum Messages {
  STAGE_1 = "Putting milk on a bowl",
  STAGE_2 = "Meow, meow, meow",
  STAGE_3 = "Generating your cat!",
}

const RandomCat: React.FC = () => {
  const [message, setMessage] = useState<string>(Messages.STAGE_1);
  const { catsList } = useAppSelector((state) => state);
  const router = useRouter();

  const catName = useMemo(() => getRandomCatName(catsList), []);

  useEffect(() => {
    const stageMessage = setTimeout(() => {
      switch (message) {
        case Messages.STAGE_1:
          setMessage(() => Messages.STAGE_2);
          break;
        case Messages.STAGE_2:
          setMessage(() => Messages.STAGE_3);
          break;
        default:
          router.replace(`breeds/${catName}`);
      }
    }, 500);
    return () => clearInterval(stageMessage);
  }, [message]);

  return (
    <div className={`${styles.random} flex-column decoration`}>
      <p>{message}</p>
      <Spinner />
    </div>
  );
};
export default RandomCat;
