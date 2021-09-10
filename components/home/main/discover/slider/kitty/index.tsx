import Image from 'next/image';
import Button from '../../../../../ui/button';

interface KittyProps {
  kitty: {
    name: string;
    image: {
      url: string;
    };
  };
}

const KittyCard: React.FC<KittyProps> = ({ kitty }) => {
  const { name, image } = kitty;

  return (
    <figure>
      <Button
        type="link"
        goTo={`/breeds/${name.toLowerCase()}`}
        className="flex-column"
      >
        <Image src={`${image}`} width="220" height="220" />
        <figcaption>{name}</figcaption>
      </Button>
    </figure>
  );
};
export default KittyCard;
