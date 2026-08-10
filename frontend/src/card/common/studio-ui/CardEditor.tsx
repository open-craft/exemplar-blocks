import { useEffect, useState, type FC } from 'react';
import Form from '@openedx/paragon/dist/Form';
import { useFormikContext } from 'formik';
import type {
  CardData,
  CardType,
  ContentHighlightData,
  FormDataPartial,
  HoverListData,
  ImageData,
  RichListData,
} from '@/card/common/types';
import HoverListItemForm from './secondary-content/HoverListItemForm';
import ImageForm from './secondary-content/ImageForm';
import IconListItemForm from './secondary-content/IconListItemForm';
import ContentHighlightForm from './secondary-content/ContentHiglightForm';

interface CardEditorProps {
  cardIndex: number;
}

function blankContent(ct: CardType): CardData['secondaryContent'] {
  switch (ct) {
    case 'IMAGE':
      return { kind: ct, location: '', altText: '' } as ImageData;
    case 'CONTENT_HIGHLIGHT':
      return {
        kind: ct,
        title: '',
        subtitle: '',
        description: '',
      } as ContentHighlightData;
    case 'RICH_LIST':
      return {
        kind: ct,
        items: [{ icon: '', title: '', description: '' }],
      } as RichListData;
    case 'HOVER_LIST':
      return {
        kind: ct,
        items: [{ icon: '', description: '', hoverContent: '' }],
      } as HoverListData;
    default:
      return null;
  }
}

const SecondaryForm: Record<CardType, FC<{ cardIndex: number }>> = {
  IMAGE: ImageForm,
  RICH_LIST: IconListItemForm,
  CONTENT_HIGHLIGHT: ContentHighlightForm,
  HOVER_LIST: HoverListItemForm,
};

function SecondaryContentForm({ cardIndex }: { cardIndex: number }) {
  const { values, handleChange, handleBlur, setFieldValue } =
    useFormikContext<FormDataPartial>();
  const card = values.cards[cardIndex];
  const prefix = `cards[${cardIndex}]`;
  const showCTAButton = Boolean(card?.ctaLink && card?.ctaLabel);
  const [showButton, setShowButton] = useState(showCTAButton);
  const ActiveForm = card.secondaryContent?.kind
    ? SecondaryForm[card.secondaryContent.kind]
    : null;
  useEffect(() => {
    setShowButton(showCTAButton);
  }, [showCTAButton]);

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
        {card.secondaryContent?.kind !== 'HOVER_LIST' && (
          <>
            <Form.Group>
              <Form.Label>Body Content</Form.Label>
              <Form.Control
                as="textarea"
                autoResize
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

export default function CardEditor({ cardIndex }: CardEditorProps) {
  const { values, setFieldValue, handleChange, handleBlur } =
    useFormikContext<FormDataPartial>();
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
          value={card.secondaryContent?.kind ?? 'UNKNOWN'}
          onChange={handleCardTypeChange}
          onBlur={handleBlur}
        >
          <option value="UNKNOWN">Choose Content Type</option>
          <option value="IMAGE">Image</option>
          <option value="CONTENT_HIGHLIGHT">Highlighted Text</option>
          <option value="RICH_LIST">Icon List</option>
          <option value="HOVER_LIST">Interactive List</option>
        </Form.Control>
      </Form.Group>
      {card.secondaryContent?.kind && (
        <SecondaryContentForm cardIndex={cardIndex} />
      )}
    </div>
  );
}
