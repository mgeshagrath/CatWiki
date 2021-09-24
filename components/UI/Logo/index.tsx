import Image from "next/image";
interface ImageProps {
  color?: string;
  width?: string;
  height?: string;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive";
}

const Logo: React.FC<ImageProps> = ({
  color = "black",
  width = "120",
  height = "40",
  layout,
}) => {
  return (
    <Image
      src={`/images/logo/CatwikiLogo-${color}.svg`}
      alt="Cat Wiki"
      width={width}
      height={height}
      layout={layout ?? "fixed"}
    />
  );
};
export default Logo;
