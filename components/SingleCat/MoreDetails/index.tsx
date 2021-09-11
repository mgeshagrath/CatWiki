// import Image from 'next/image';
import { useAppSelector } from '../../../store/types';
import LoadedImage from '../../ui/LoadedImage';
import Spinner from '../../ui/spinner';
import styles from './index.module.scss';

const MoreDetails: React.FC = () => {
  const { profileImage } = useAppSelector((state) => state.singleCat);
  const imageConfig = {
    imagePath: profileImage,
    width: '380px',
    height: '380px',
  };

  // console.log(profileImage);
  return (
    <div className={`${styles.moreDetails} flex-column`}>
      {profileImage && <LoadedImage data={imageConfig} />}
      {!profileImage && <Spinner />}
      <div>
        {/* <h3>Aqui iran otras cosas</h3>
        <h4>Tal vez una lista</h4>
        <ul>
          <li>Wikipedia</li>
          <li>Otras fuentes</li>
          <li>Mas detalles</li>
          <li>Rating</li>
        </ul> */}
      </div>
    </div>
  );
};
export default MoreDetails;
