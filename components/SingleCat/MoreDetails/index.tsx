import Image from 'next/image';
import { useAppSelector } from '../../../store/types';
import styles from './index.module.scss';

const MoreDetails: React.FC = () => {
  const { profileImage } = useAppSelector((state) => state.singleCat);

  // console.log(profileImage);
  return (
    <div className={`${styles.moreDetails} flex-column`}>
      {profileImage && <Image src={profileImage} width="380" height="380" />}
      {!profileImage && <p>Loading...</p>}
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
