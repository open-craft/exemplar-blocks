import { useState, type FC } from 'react';
import Form from '@openedx/paragon/dist/Form';
import { useFormikContext } from 'formik';
import { CardType } from '../../types';
import type {
  InitData,
  CardData,
  ContentHighlightData,
  RichListData,
  HoverListData,
  ImageData,
} from '../../types';
import HoverListItemForm from './secondary-content/HoverListItemForm';
import ImageForm from './secondary-content/ImageForm';
import IconListItemForm from './secondary-content/IconListItemForm';
import ContentHighlightForm from './secondary-content/ContentHiglightForm';

function blankContent(ct: CardType): CardData['secondaryContent'] {
  switch (ct) {
    case CardType.IMAGE:
      return { location: '', altText: '' } as ImageData;
    case CardType.CONTENT_HIGHLIGHT:
      return {
        title: '',
        subtitle: '',
        description: '',
      } as ContentHighlightData;
    case CardType.RICH_LIST:
      return {
        items: [{ icon: '', title: '', description: '' }],
      } as RichListData;
    case CardType.HOVER_LIST:
      return {
        items: [{ icon: '', description: '', hoverContent: '' }],
      } as HoverListData;
    default:
      return { location: '', altText: '' } as ImageData;
  }
}

interface SecondayContentFormProps {
  cardIndex: number;
  cardType: CardType;
}

const SecondaryForm: Partial<Record<CardType, FC<{ cardIndex: number }>>> = {
  [CardType.IMAGE]: ImageForm,
  [CardType.RICH_LIST]: IconListItemForm,
  [CardType.CONTENT_HIGHLIGHT]: ContentHighlightForm,
  [CardType.HOVER_LIST]: HoverListItemForm,
};

function SecondayContentForm({
  cardIndex,
  cardType,
}: SecondayContentFormProps) {
  const { values, handleChange, handleBlur, setFieldValue } =
    useFormikContext<InitData>();
  const [showButton, setShowButton] = useState(false);
  const card = values.cards[cardIndex];
  const prefix = `cards[${cardIndex}]`;
  const ActiveForm = SecondaryForm[cardType];

  return (
    <div className="row mt-5">
      <div className="col border-right">
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name={`${prefix}.title`}
            value={card.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            name={`${prefix}.subtitle`}
            value={card.subtitle}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        {cardType !== CardType.HOVER_LIST && (
          <>
            <Form.Group>
              <Form.Label>Body Content</Form.Label>
              <Form.Control
                as="textarea"
                name={`${prefix}.description`}
                value={card?.description ?? ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Group>
            <Form.Group>
              <Form.Checkbox
                checked={showButton}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setShowButton(e.currentTarget.checked);
                  if (!e.currentTarget.checked) {
                    setFieldValue(`${prefix}.ctaLabel`, '');
                    setFieldValue(`${prefix}.ctaLink`, '');
                  }
                }}
              >
                Add a button
              </Form.Checkbox>
              <Form.Text>Link to another page or resource</Form.Text>
            </Form.Group>
            {showButton && (
              <>
                <Form.Group>
                  <Form.Label>Button Label</Form.Label>
                  <Form.Control
                    name={`${prefix}.ctaLabel`}
                    value={card?.ctaLabel ?? ''}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Button Link</Form.Label>
                  <Form.Control
                    name={`${prefix}.ctaLink`}
                    value={card?.ctaLink ?? ''}
                    onChange={handleChange}
                  />
                </Form.Group>
              </>
            )}
          </>
        )}
      </div>
      <div className="col">
        {ActiveForm && <ActiveForm cardIndex={cardIndex} />}
      </div>
    </div>
  );
}

interface CardEditorProps {
  cardIndex: number;
}

export default function CardEditor({ cardIndex }: CardEditorProps) {
  const { values, setFieldValue, handleChange, handleBlur } =
    useFormikContext<InitData>();
  const card = values.cards[cardIndex];
  const prefix = `cards[${cardIndex}]`;

  const handleCardTypeChange = (e: React.InputEvent<HTMLInputElement>) => {
    setFieldValue(`${prefix}.cardType`, e.currentTarget.value);
    setFieldValue(
      `${prefix}.secondaryContent`,
      blankContent(e.currentTarget.value as CardType),
    );
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Card Name</Form.Label>
        <Form.Text className="micro">Name of the card in Studio</Form.Text>
        <Form.Control
          name={`${prefix}.name`}
          value={card.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Supporting Content</Form.Label>
        <Form.Control
          as="select"
          name={`${prefix}.cardType`}
          value={card.cardType ?? CardType.UNKNOWN}
          onChange={handleCardTypeChange}
          onBlur={handleBlur}
        >
          <option value={CardType.UNKNOWN}>Choose Content Type</option>
          <option value={CardType.IMAGE}>Image</option>
          <option value={CardType.CONTENT_HIGHLIGHT}>Highlighted Text</option>
          <option value={CardType.RICH_LIST}>Icon List</option>
          <option value={CardType.HOVER_LIST}>Interactive List</option>
        </Form.Control>
      </Form.Group>
      {card.cardType !== CardType.UNKNOWN && (
        <SecondayContentForm cardIndex={cardIndex} cardType={card.cardType} />
      )}
    </div>
  );
}
