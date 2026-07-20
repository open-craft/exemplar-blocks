import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import { FieldArray, useFormikContext } from 'formik';
import type {
  FormDataPartial,
  RichListData,
  RichListItem,
} from '@/card/common/types';
import IconSelector from './IconSelector';
import ListItemContainer from './ListItemContainer';

interface ItemFormProps {
  cardIndex: number;
  itemIndex: number;
  onRemove: () => void;
}

function ItemForm({ cardIndex, itemIndex, onRemove }: ItemFormProps) {
  const { values, handleChange, setFieldValue } =
    useFormikContext<FormDataPartial>();
  const prefix = `cards[${cardIndex}].secondaryContent.items[${itemIndex}]`;
  const item = (values.cards[cardIndex].secondaryContent as RichListData)
    .items?.[itemIndex];

  return (
    <ListItemContainer
      heading={`List Item ${itemIndex + 1}`}
      index={itemIndex}
      onRemoveItem={onRemove}
    >
      <div className="p-2">
        <div className="d-flex">
          <Form.Group className="flex-grow-0">
            <Form.Label className="x-small">Icon</Form.Label>
            <IconSelector
              currentIcon={item?.icon ?? ''}
              onIconSelected={(icon) => setFieldValue(`${prefix}.icon`, icon)}
            />
          </Form.Group>
          <Form.Group className="flex-grow-1 ml-2">
            <Form.Label className="x-small">Heading</Form.Label>
            <Form.Control
              type="text"
              name={`${prefix}.title`}
              value={item?.title ?? ''}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <Form.Group>
          <Form.Label className="x-small">Description</Form.Label>
          <Form.Control
            as="textarea"
            autoResize
            name={`${prefix}.description`}
            value={item?.description ?? ''}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
    </ListItemContainer>
  );
}

export default function IconListItemForm({ cardIndex }: { cardIndex: number }) {
  const arrayName = `cards[${cardIndex}].secondaryContent.items`;

  return (
    <FieldArray name={arrayName}>
      {({ push, remove, form }) => {
        const items = (
          form.values.cards[cardIndex].secondaryContent as RichListData
        ).items;
        return (
          <div>
            {items.map((_item: RichListItem, i: number) => (
              <ItemForm
                key={i}
                cardIndex={cardIndex}
                itemIndex={i}
                onRemove={() => remove(i)}
              />
            ))}
            <Button
              variant="success"
              onClick={() => push({ icon: '', title: '', description: '' })}
            >
              Add List Item
            </Button>
          </div>
        );
      }}
    </FieldArray>
  );
}
