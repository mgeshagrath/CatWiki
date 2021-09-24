import { Fragment, useMemo } from "react";
import { useAppSelector } from "../../../../store/types";
import Heading from "../../../UI/Heading";
import DescriptionItem from "./DescriptionItem";

const Description: React.FC = () => {
  const { name, description, lifeSpan, origin, temperament } = useAppSelector(
    (state) => state.singleCat
  );

  // Prettier-ignore
  const overallDescription = useMemo(() => {
    return [
      { label: "Temperament", content: temperament },
      { label: "Origin", content: origin },
      { label: "Life Span", content: lifeSpan },
    ];
  }, [temperament, origin, lifeSpan]);

  const descriptionMarkup = overallDescription.map((item) => (
    <DescriptionItem
      key={item.label}
      label={item.label}
      content={item.content}
    />
  ));

  return (
    <Fragment>
      <Heading type="h1">{name}</Heading>
      <p>{description}</p>
      {descriptionMarkup}
    </Fragment>
  );
};
export default Description;
