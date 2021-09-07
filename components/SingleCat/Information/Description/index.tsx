import { Fragment } from 'react';
import Heading from '../../../ui/heading';
import DescriptionItem from './DescriptionItem';

const content = [
  {
    label: 'Temperament',
    content: 'Alert, Agile, Energetic, Demanding, Intelligent',
  },
  {
    label: 'Origin',
    content: 'Origin',
  },
  {
    label: 'Life Span',
    content: 'A12 - 15 years',
  },
];

const Description: React.FC = () => {
  return (
    <Fragment>
      <Heading type="h1">Bengal</Heading>
      <p>
        Bengals are a lot of fun to live with, but theyre definitely not the cat
        for everyone, or for first-time cat owners. Extremely intelligent,
        curious and active, they demand a lot of interaction and woe betide the
        owner who doesnt provide it.
      </p>
      {content.map((item) => (
        <DescriptionItem key={Math.random()} data={item} />
      ))}
    </Fragment>
  );
};
export default Description;
