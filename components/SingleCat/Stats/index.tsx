import { Fragment } from "react";
import { useAppSelector } from "../../../store/types";
import Item from "./StatsItem";

const Stats: React.FC = () => {
  const { stats } = useAppSelector((state) => state.singleCat);

  return (
    <Fragment>
      {stats?.map((item) => (
        <Item key={Math.random()} data={item} />
      ))}
    </Fragment>
  );
};
export default Stats;
