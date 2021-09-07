import CatGrid from './grid';
import ExplanationInfo from './info';

const Explanation: React.FC = () => {
  return (
    <section className="flex pad-left-10">
      <ExplanationInfo />
      <CatGrid />
    </section>
  );
};
export default Explanation;
