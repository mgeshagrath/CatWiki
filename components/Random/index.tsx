import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import Spinner from "../ui/spinner";
import styles from "./index.module.scss";

// const messages = {
//   one: 'Putting milk on a bowl',
//   two: 'Meow, meow, meow',
//   three: 'Generating your random cat!',
// };

enum Messages {
  STAGE_1 = "Putting milk on a bowl",
  STAGE_2 = "Meow, meow, meow",
  STAGE_3 = "Generating your cat!",
}

const RandomCat: React.FC = () => {
  const [message, setMessage] = useState<string>(Messages.STAGE_1);
  const router = useRouter();

  useEffect(() => {
    const loadingMessage = setTimeout(() => {
      switch (message) {
        case Messages.STAGE_1: {
          setMessage((_) => Messages.STAGE_2);
          break;
        }
        case Messages.STAGE_2: {
          setMessage((_) => Messages.STAGE_3);
          break;
        }
        default: {
          router.push("breeds/somali");
        }
      }
    }, 1000);
    return () => clearInterval(loadingMessage);
  }, [message]);

  return (
    <div className={`${styles.random} flex-column decoration`}>
      <p>{message}</p>
      <Spinner />
    </div>
  );
};
export default RandomCat;
