// import Image from 'next/image';
import Button from "../../../../../UI/Button";
import LoadedImage from "../../../../../UI/LoadedImage";

interface KittyProps {
  kitty: {
    name: string;
    image: string;
  };
}

const KittyCard: React.FC<KittyProps> = ({ kitty }) => {
  const { name, image } = kitty;
  const imageConfig = {
    imagePath: image,
    width: "220px",
    height: "220px",
  };

  return (
    <figure>
      <Button
        type="link"
        goTo={`/breeds/${name.toLowerCase()}`}
        className="flex-column"
      >
        {/* <div>dimentions</div> */}
        <LoadedImage data={imageConfig} />
        {/* <Image src={`${image}`} width="220" height="220" /> */}
        <figcaption>{name}</figcaption>
      </Button>
    </figure>
  );
};
export default KittyCard;
