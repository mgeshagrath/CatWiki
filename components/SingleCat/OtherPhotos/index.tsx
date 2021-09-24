import { useAppSelector } from "../../../store/types";
// import Image from 'next/image';
import Heading from "../../UI/Heading";
import styles from "./index.module.scss";
import LoadedImage from "../../UI/LoadedImage";

const OtherPhotos: React.FC = () => {
  const catImages = useAppSelector((state) => state.singleCat.images);

  return (
    <section className={styles.grid}>
      <Heading type="h2">Other photos</Heading>
      {catImages?.map((url) => (
        <div key={Math.random()}>
          <LoadedImage
            data={{ imagePath: url, width: "280px", height: "280px" }}
          />
        </div>
      ))}
    </section>
  );
};
export default OtherPhotos;

{
  /* <section className={styles.grid}>
<Heading type="h2">Other photos</Heading>
{catImages?.map((url) => (
  <Image
    key={Math.random()}
    src={url}
    width="280"
    height="280"
    className={styles.img}
  />
))}
</section> */
}
