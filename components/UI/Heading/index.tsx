enum Headings {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
}

interface HeadingProps {
  type: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ type, className, children }) => {
  if (type === Headings.h1) return <h1 className={className}>{children}</h1>;

  if (type === Headings.h2) return <h2 className={className}>{children}</h2>;

  if (type === Headings.h3)
    return <h3 className={`${className} light`}>{children}</h3>;

  if (type === Headings.h4)
    return <h4 className={`${className} light`}>{children}</h4>;
};
export default Heading;
