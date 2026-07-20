import Button from '@openedx/paragon/dist/Button';

interface ListItemContainerProps {
  heading: string;
  index: number;
  onRemoveItem: (index: number) => void;
}

export default function ListItemContainer({
  heading,
  index,
  onRemoveItem,
  children,
}: React.PropsWithChildren<ListItemContainerProps>) {
  return (
    <div className="m-2 bg-light-200">
      <div className="border rounded-sm shadow-sm icon-item-form mb-4">
        <div className="d-flex justify-content-between border-bottom align-items-center">
          <h5 className="ml-2 mb-0">{heading}</h5>
          <Button
            variant="tertiary"
            size="sm"
            className="d-flex align-items-center"
            onClick={() => onRemoveItem(index)}
          >
            <span className="material-icons-outlined text-danger">
              delete_outline
            </span>{' '}
            Delete
          </Button>
        </div>
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}
