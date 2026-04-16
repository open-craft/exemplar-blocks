import {
  Col,
  ColorPicker,
  Form,
  Icon,
  Row,
  SelectableBox,
} from '@openedx/paragon';
import type { Alignment, FontSize, ImageGridLayoutData } from '../../apiTypes';
import type { ChangeEvent } from 'react';
import { ImageText, TextImage } from '../../icons';

type ImageGridLayoutEditorProps = {
  data: ImageGridLayoutData;
  onUpdate: (layoutData: ImageGridLayoutData) => void;
};

export const ImageGridLayoutEditor = ({
  data,
  onUpdate,
}: ImageGridLayoutEditorProps) => {
  return (
    <>
      <h3>Featured Image</h3>

      <Form.Group>
        <Form.Label>Image Source URL</Form.Label>
        <Form.Control
          value={data.featuredImage.url}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              featuredImage: { ...data.featuredImage, url: e.target.value },
            })
          }
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Alt text</Form.Label>
        <Form.Checkbox
          className="d-flex"
          checked={data.featuredImage.decorative}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              featuredImage: {
                ...data.featuredImage,
                // clear any existing alt text if switching to decorative
                alt: e.target.checked ? '' : data.featuredImage.alt,
                decorative: e.target.checked,
              },
            })
          }
        >
          Decorative image
        </Form.Checkbox>

        {!data.featuredImage.decorative && (
          <Form.Control
            value={data.featuredImage.alt}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onUpdate({
                ...data,
                featuredImage: { ...data.featuredImage, alt: e.target.value },
              })
            }
            placeholder="Alt text"
          />
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Image link (optional)</Form.Label>
        <Form.Control
          value={data.featuredImage.onClickUrl}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              featuredImage: {
                ...data.featuredImage,
                onClickUrl: e.target.value,
              },
            })
          }
          placeholder="URL"
        />
      </Form.Group>

      <h3>Bottom row</h3>

      <SelectableBox.Set
        value={data.bottomRowOrder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onUpdate({
            ...data,
            bottomRowOrder: e.target.value as 'imageText' | 'textImage',
          })
        }
        name="bottomRowOrder"
        columns={2}
        ariaLabel="Order of components on the bottom row"
      >
        <SelectableBox value="imageText">
          <Row xs={1} className="justify-content-center text-center">
            <Icon src={ImageText} />
            <p>Image left, text right</p>
          </Row>
        </SelectableBox>
        <SelectableBox value="textImage">
          <Row xs={1} className="justify-content-center text-center">
            <Icon src={TextImage} />
            <p>Image right, text left</p>
          </Row>
        </SelectableBox>
      </SelectableBox.Set>

      <h4>Image</h4>

      <Form.Group>
        <Form.Label>Image Source URL</Form.Label>
        <Form.Control
          value={data.bottomImage.url}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              bottomImage: { ...data.bottomImage, url: e.target.value },
            })
          }
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Alt text</Form.Label>
        <Form.Checkbox
          className="d-flex"
          checked={data.bottomImage.decorative}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              bottomImage: {
                ...data.bottomImage,
                // clear any existing alt text if switching to decorative
                alt: e.target.checked ? '' : data.bottomImage.alt,
                decorative: e.target.checked,
              },
            })
          }
        >
          Decorative image
        </Form.Checkbox>

        {!data.bottomImage.decorative && (
          <Form.Control
            value={data.bottomImage.alt}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onUpdate({
                ...data,
                bottomImage: { ...data.bottomImage, alt: e.target.value },
              })
            }
            placeholder="Alt text"
          />
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Image link (optional)</Form.Label>
        <Form.Control
          value={data.bottomImage.onClickUrl}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              bottomImage: { ...data.bottomImage, onClickUrl: e.target.value },
            })
          }
          placeholder="URL"
        />
      </Form.Group>

      <h4>Text</h4>

      <Form.Group>
        <Form.Label>Text</Form.Label>
        <Form.Control
          value={data.text.content}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onUpdate({
              ...data,
              text: { ...data.text, content: e.target.value },
            })
          }
          placeholder="Enter text"
        />
      </Form.Group>

      <Row xs={2}>
        <Col>
          <Form.Group>
            <Form.Label>Text alignment</Form.Label>
            <Form.Control
              value={data.text.alignment}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onUpdate({
                  ...data,
                  text: {
                    ...data.text,
                    alignment: e.target.value as Alignment,
                  },
                })
              }
              as="select"
            >
              <option value="start">Left-aligned</option>
              <option value="center">Centered</option>
              <option value="end">Right-aligned</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label className="mr-3">Background color</Form.Label>
            <ColorPicker
              color={data.text.backgroundColor}
              setColor={(backgroundColor: string) =>
                onUpdate({ ...data, text: { ...data.text, backgroundColor } })
              }
              size="sm"
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>Font size</Form.Label>
            <Form.Control
              value={data.text.fontSize}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onUpdate({
                  ...data,
                  text: { ...data.text, fontSize: e.target.value as FontSize },
                })
              }
              as="select"
            >
              <option value="small">Small</option>
              <option value="large">Large</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="d-flex">
            <Form.Label className="mr-3">Text color</Form.Label>
            <ColorPicker
              color={data.text.color}
              setColor={(color: string) =>
                onUpdate({ ...data, text: { ...data.text, color } })
              }
              size="sm"
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};
