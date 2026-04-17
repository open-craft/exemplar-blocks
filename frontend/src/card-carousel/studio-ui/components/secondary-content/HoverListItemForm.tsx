import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import { FieldArray, useFormikContext } from 'formik';
import type { InitData, HoverListData } from '../../../types';
import ListItemContainer from './ListItemContainer';
import IconSelector from './IconSelector';

interface HoverItemFormProps {
  cardIndex: number;
  itemIndex: number;
  onRemove: () => void;
}

function HoverItemForm({ cardIndex, itemIndex, onRemove }: HoverItemFormProps) {
  const { values, handleChange, setFieldValue } = useFormikContext<InitData>();
  const prefix = `cards[${cardIndex}].secondaryContent.items[${itemIndex}]`;
  const item = (values.cards[cardIndex].secondaryContent as HoverListData)
    .items[itemIndex];

  return (
    <ListItemContainer
      heading={`List Item ${itemIndex + 1}`}
      index={itemIndex}
      onRemoveItem={onRemove}
    >
      <div className="p-2">
        <Form.Group>
          <Form.Label className="x-small">Main Text</Form.Label>
          <Form.Control
            name={`${prefix}.description`}
            value={item.description}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex">
          <Form.Group className="flex-grow-0">
            <Form.Label className="x-small">Icon</Form.Label>
            <IconSelector
              currentIcon={item.icon || ''}
              onIconSelected={(icon) => setFieldValue(`${prefix}.icon`, icon)}
            />
          </Form.Group>
          <Form.Group className="flex-grow-1 ml-2">
            <Form.Label className="x-small">Hover Text</Form.Label>
            <Form.Control
              type="text"
              name={`${prefix}.hoverContent`}
              value={item.hoverContent}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
      </div>
    </ListItemContainer>
  );
}

export default function HoverListItemForm({
  cardIndex,
}: {
  cardIndex: number;
}) {
  const arrayName = `cards[${cardIndex}].secondaryContent.items`;

  return (
    <FieldArray name={arrayName}>
      {({ push, remove, form }) => {
        const items = (
          form.values.cards[cardIndex].secondaryContent as HoverListData
        ).items;
        return (
          <div>
            {items.map((_, i: number) => (
              <HoverItemForm
                key={i}
                cardIndex={cardIndex}
                itemIndex={i}
                onRemove={() => remove(i)}
              />
            ))}
            <Button
              variant="success"
              onClick={() =>
                push({ description: '', hoverContent: '', icon: '' })
              }
            >
              Add List Item
            </Button>
          </div>
        );
      }}
    </FieldArray>
  );
}
