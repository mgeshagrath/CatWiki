interface DescriptionItemProps {
  label: string;
  content: string;
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  label,
  content,
}) => {
  // const { label, content } = data;
  return (
    <p>
      <span className="bold">{`${label}: `}</span>
      <span>{content}</span>
    </p>
  );
};
export default DescriptionItem;
