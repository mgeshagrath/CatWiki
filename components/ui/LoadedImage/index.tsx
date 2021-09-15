import { Fragment, useState } from "react";
import Spinner from "../spinner";
// import Image from 'next/image';

interface ImageConfig {
  data: {
    imagePath: string;
    width: string;
    height: string;
  };
}

const LoadedImage: React.FC<ImageConfig> = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { imagePath, width, height } = data;

  return (
    <Fragment>
      {!isLoaded && (
        <div
          style={{
            width: width,
            height: height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      )}

      <div
        style={{
          width: width,
          height: height,
          display: `${!isLoaded ? "none" : "block"}`,
          overflow: "hidden",
        }}
      >
        <img
          src={imagePath}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "21px",
          }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      {/* <img
        src={imagePath}
        style={{ display: `${!isLoaded ? 'none' : 'block'}` }}
        onLoad={() => setIsLoaded(true)}
      /> */}
      {/* <div style={{ display: `${!isLoaded ? 'none' : 'block'}` }}>
        <Image
          src={imagePath}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
        />
      </div> */}
    </Fragment>
  );
};
export default LoadedImage;

{
  /* <Fragment>
{!isLoaded && (
  <div
    style={{
      width: width,
      height: height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Loading...
  </div>
)}
<div style={{ display: `${!isLoaded ? 'none' : 'block'}` }}>
  <Image
    src={imagePath}
    width={width}
    height={height}
    onLoad={() => setIsLoaded(true)}
  />
</div>
</Fragment> */
}

{
  /* <div
style={{
  width: width,
  height: height,
  display: `${!isLoaded ? 'none' : 'block'}`,
}}
>
<img
  src={imagePath}
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  onLoad={() => setIsLoaded(true)}
/>
</div> */
}
