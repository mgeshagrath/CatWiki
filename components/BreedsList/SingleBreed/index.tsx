import Button from "../../UI/Button";
import Heading from "../../UI/Heading";
import LoadedImage from "../../UI/LoadedImage";
import styles from "./index.module.scss";

const SingleBreed: React.FC<{ data: Cat }> = ({ data }) => {
  const { name, image, description } = data;
  const imageConfig = {
    imagePath: image,
    width: "170px",
    height: "170px",
  };
  const descriptionFormatted = description.slice(0, 120) + "...";
  const pathFormatted = name.toLowerCase();

  return (
    <Button goTo={`/breeds/${pathFormatted}`} type="link">
      <figure className={`${styles.breed} flex-between decoration`}>
        <LoadedImage data={imageConfig} />
        <div>
          <Heading type="h2">{name}</Heading>
          <p>{descriptionFormatted}</p>
        </div>
      </figure>
    </Button>
  );
};
export default SingleBreed;
