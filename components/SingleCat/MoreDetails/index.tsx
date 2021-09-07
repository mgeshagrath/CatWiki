import Image from 'next/image';
import styles from './index.module.scss';

const MoreDetails: React.FC = () => {
  return (
    <div className={`${styles.moreDetails} flex-column`}>
      <Image src="/queen.jpg" width="380" height="380" />
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
