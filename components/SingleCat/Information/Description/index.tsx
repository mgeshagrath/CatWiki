import { Fragment } from 'react';
import { useAppSelector } from '../../../../store/types';
import Heading from '../../../ui/heading';
import DescriptionItem from './DescriptionItem';

const Description: React.FC = () => {
  const { name, description, lifeSpan, origin, temperament } = useAppSelector(
    (state) => state.singleCat
  );

  return (
    <Fragment>
      <Heading type="h1">{name}</Heading>
      <p>{description}</p>
      <DescriptionItem label="Temperament" content={temperament} />
      <DescriptionItem label="Origin" content={origin} />
      <DescriptionItem label="Life Span" content={lifeSpan} />

      {/* {content.map((item) => (
        <DescriptionItem key={Math.random()} data={item} />
      ))} */}
    </Fragment>
  );
};
export default Description;
