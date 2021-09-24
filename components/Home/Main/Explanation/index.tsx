import CatGrid from "./Grid";
import ExplanationInfo from "./Info";

const Explanation: React.FC = () => {
  return (
    <section className="flex pad-left-10">
      <ExplanationInfo />
      <CatGrid />
    </section>
  );
};
export default Explanation;
