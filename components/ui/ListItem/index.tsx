import Button from '../button';

interface ItemProps {
  path: string;
  className?: string;
}

const ListItem: React.FC<ItemProps> = ({ path, className, children }) => {
  return (
    <li className={className}>
      <Button type="link" goTo={`/${path}`}>
        {children}
      </Button>
    </li>
  );
};
export default ListItem;
