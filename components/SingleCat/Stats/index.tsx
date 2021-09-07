import { Fragment } from 'react';
import Item from './StatsItem';

const DummyData = [
  {
    property: 'Adaptability',
    score: 5,
  },
  {
    property: 'Affection level',
    score: 5,
  },
  {
    property: 'Child Friendly',
    score: 4,
  },
  {
    property: 'Grooming:',
    score: 1,
  },
  {
    property: 'Intelligence',
    score: 5,
  },
  {
    property: 'Health issues',
    score: 3,
  },
  {
    property: 'Social needs',
    score: 5,
  },
  {
    property: 'Stranger friendly',
    score: 3,
  },
];

const Stats: React.FC = () => {
  return (
    <Fragment>
      {DummyData.map((item) => (
        <Item key={Math.random()} data={item} />
      ))}
    </Fragment>
  );
};
export default Stats;
