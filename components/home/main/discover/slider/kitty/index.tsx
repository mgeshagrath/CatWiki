import Image from 'next/image';
import Button from '../../../../../ui/button';

interface KittyProps {
  kitty: {
    path: string;
    greed: string;
  };
}

const KittyCard: React.FC<KittyProps> = ({ kitty }) => {
  const { path, greed } = kitty;
  const fixedPath = greed.replace(/' '/g, '');

  return (
    <figure>
      <Button
        type="link"
        goTo={`/wiki/greeds/${fixedPath}`}
        className="flex-column"
      >
        <Image src={path} width="220" height="220" />
        <figcaption>{greed}</figcaption>
      </Button>
    </figure>
  );
};
export default KittyCard;
