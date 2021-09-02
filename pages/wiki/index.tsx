import Image from 'next/image';

const WikiPage: React.FC = () => {
  return (
    <div>
      <div>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
      </div>
      <h1>Results by: A</h1>
      <div>
        <Image
          src="https://cdn2.thecatapi.com/images/1tq.png"
          width="250"
          height="250"
        />
        <Image
          src="https://cdn2.thecatapi.com/images/1tq.png"
          width="250"
          height="250"
        />
        <Image
          src="https://cdn2.thecatapi.com/images/1tq.png"
          width="250"
          height="250"
        />
        <Image
          src="https://cdn2.thecatapi.com/images/1tq.png"
          width="250"
          height="250"
        />
        <Image
          src="https://cdn2.thecatapi.com/images/1tq.png"
          width="250"
          height="250"
        />
        <Image
          src="https://cdn2.thecatapi.com/images/1tq.png"
          width="250"
          height="250"
        />
      </div>
    </div>
  );
};
export default WikiPage;
