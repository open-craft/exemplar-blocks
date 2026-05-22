import { useState } from 'react';
import Button from '@openedx/paragon/dist/Button';
import { Add as AddIcon } from '@openedx/paragon/icons';
import CardEditor from './CardEditor';
import { useSortable } from '@dnd-kit/react/sortable';
import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';
import { useFormikContext, FieldArray } from 'formik';
import { type InitData } from '../../types';
import { newCard } from '../utils';

interface CardItemProps {
  id: number;
  cardName: string;
  index: number;
  active: boolean;
  canDelete: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

function CardItem({
  id,
  cardName,
  index,
  active,
  canDelete,
  onSelect,
  onDelete,
}: CardItemProps) {
  const { ref } = useSortable({ id, index });

  return (
    <div
      ref={ref}
      className={
        'd-flex justify-content-between p-2 border rounded-sm' +
        (active ? ' bg-light-300' : '')
      }
      onClick={onSelect}
    >
      <div>{cardName}</div>
      <div className="d-flex align-items-center">
        {canDelete && (
          <button
            className="btn btn-link p-0 text-danger"
            aria-label="Delete card"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <span className="material-icons-outlined">delete_outline</span>
          </button>
        )}
        <span className="material-icons-outlined text-light-600">
          drag_indicator
        </span>
      </div>
    </div>
  );
}

export default function CarouselEditor() {
  const { values, setFieldValue } = useFormikContext<InitData>();
  const [activeCard, setActiveCard] = useState(0);

  return (
    <DragDropProvider
      onDragOver={(event) => setFieldValue('cards', move(values.cards, event))}
    >
      <FieldArray name="cards">
        {({ push, remove }) => (
          <div className="row m-0 carousel-editor">
            <div className="col-3 p-2 border-right">
              <Button
                variant="primary"
                iconBefore={AddIcon}
                onClick={() => {
                  push(newCard(values.cards));
                  setActiveCard(values.cards.length);
                }}
              >
                Add Card
              </Button>
              <div className="mt-4">
                {values.cards.map((card, index) => (
                  <CardItem
                    key={card.id}
                    id={card.id}
                    cardName={card.name || `Card #${card.id}`}
                    index={index}
                    active={activeCard === index}
                    canDelete={values.cards.length > 1}
                    onSelect={() => setActiveCard(index)}
                    onDelete={() => {
                      remove(index);
                      setActiveCard((prev) =>
                        Math.min(prev, values.cards.length - 2),
                      );
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="col-9 p-4">
              {values.cards.length > 0 && <CardEditor cardIndex={activeCard} />}
            </div>
          </div>
        )}
      </FieldArray>
    </DragDropProvider>
  );
}
