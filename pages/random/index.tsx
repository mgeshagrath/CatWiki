import { useRouter } from "next/router";
import { useEffect } from "react";
import RandomCat from "../../components/Random";
import Spinner from "../../components/UI/Spinner";
import { useAppSelector } from "../../store/types";

const RandomPage: React.FC = () => {
  const router = useRouter();
  const { catsList } = useAppSelector((state) => state);
  const breedsList = catsList.length;

  useEffect(() => {
    // console.log('running');
    // console.log(catList.length === 0);
    if (breedsList === 0) {
      router.push("/");
    }
  }, []);

  if (breedsList === 0) return <Spinner />;

  return <RandomCat />;
};
export default RandomPage;
