import Button from '../../../ui/button';

const Explanation: React.FC = () => {
  return (
    <section>
      <div>
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <Button type="link" goTo="/why">
          Read more -
        </Button>
      </div>
      <div>
        <span>Kitti 1</span>
        <span>Kitti 2</span>
        <span>Kitti 3</span>
      </div>
    </section>
  );
};
export default Explanation;
