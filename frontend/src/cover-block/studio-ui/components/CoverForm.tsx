import { Col, Form, Row } from '@openedx/paragon';
import { Field, useField } from 'formik';
import { URLFilePickerWrapper } from '../../../shared/components/URLFilePickerWrapper.tsx';
import type { XBlockConfig } from '../../../types.ts';
import { Variant, ImagePosition } from '../../apiTypes.ts';

const CoverForm = () => {
  const [variant] = useField<Variant>('variant');
  const [imagePosition] = useField<ImagePosition>('image_position');
  const [mediaUrl, , { setValue: setMediaUrl }] = useField<string>('media_url');
  const [description] = useField<string>('description');
  const colorsEnabled = variant.value !== Variant.section;
  const sectionVariant = variant.value === Variant.section;
  const mainColumSizes = {
    xs: 12,
    sm: colorsEnabled ? 8 : 12,
    lg: colorsEnabled ? 10 : 12,
  };
  return (
    // Add padding to compensate for the negative margins from Row and prevent
    // horizontal scrolling.
    <div className="cover-editor-form">
      <Row className="cover-editor-grid">
        <Form.Group
          className="cover-editor-field"
          as={Col}
          controlId="cover-form-display-name"
          xs={12}
        >
          <Form.Label>Display Name</Form.Label>
          <Field as={Form.Control} name="display_name" />
          <Form.Text muted>
            The label for this block, shown only in studio.
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="cover-editor-field"
          as={Col}
          controlId="cover-form-variant"
          xs={12}
          sm={6}
        >
          <Form.Label>Variant</Form.Label>
          <Form.Control as="select" {...variant}>
            <option value={Variant.section}>Section Cover</option>
            <option value={Variant.course}>Course Cover</option>
            <option value={Variant.separator}>Separator</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          className="cover-editor-field"
          as={Col}
          controlId="cover-form-media-url"
          xs={12}
          sm={6}
        >
          <Form.Label>Image URL</Form.Label>
          <URLFilePickerWrapper<XBlockConfig>
            setValue={(url) => setMediaUrl(url)}
            fileTypes={['image']}
          >
            <Field as={Form.Control} name="media_url" value={mediaUrl.value} />
          </URLFilePickerWrapper>
        </Form.Group>
        <Form.Group
          className="cover-editor-field"
          as={Col}
          controlId="cover-form-media-alt-text"
          xs={12}
        >
          <Form.Label>Image Alt Text</Form.Label>
          <Field as={Form.Control} name="media_alt_text" />
          <Form.Text muted>
            Provide a description of your image for use with screen readers.
          </Form.Text>
        </Form.Group>
        {sectionVariant && (
          <Form.Group
            className="cover-editor-field"
            as={Col}
            controlId="cover-form-image-position"
            xs={12}
            sm={6}
          >
            <Form.Label>Image Position</Form.Label>
            <Form.Control as="select" {...imagePosition}>
              <option value={ImagePosition.right}>Image Right</option>
              <option value={ImagePosition.left}>Image Left</option>
            </Form.Control>
          </Form.Group>
        )}
        <Form.Group
          className="cover-editor-field"
          as={Col}
          controlId="cover-form-top-header"
          {...mainColumSizes}
        >
          <Form.Label>Top Header</Form.Label>
          <Field as={Form.Control} name="top_header" />
        </Form.Group>
        {colorsEnabled && (
          <Form.Group
            className="cover-editor-field"
            as={Col}
            controlId="cover-form-top-header-color"
            xs={12}
            sm={4}
            lg={2}
          >
            <Form.Label>Color</Form.Label>
            <Field
              as={Form.Control}
              name="top_header_color"
              type="color"
              aria-label="Top header color"
            />
          </Form.Group>
        )}
        <Form.Group
          className="cover-editor-field"
          as={Col}
          controlId="cover-form-main-header"
          {...mainColumSizes}
        >
          <Form.Label>Main Header</Form.Label>
          <Field as={Form.Control} name="main_header" />
        </Form.Group>
        {colorsEnabled && (
          <Form.Group
            className="cover-editor-field"
            as={Col}
            controlId="cover-form-main-header-color"
            xs={12}
            sm={4}
            lg={2}
          >
            <Form.Label>Color</Form.Label>
            <Field
              as={Form.Control}
              name="main_header_color"
              type="color"
              aria-label="Main header color"
            />
          </Form.Group>
        )}
        <Form.Group
          className="cover-editor-field"
          as={Col}
          controlId="cover-form-subheader"
          {...mainColumSizes}
        >
          <Form.Label>Subheader</Form.Label>
          <Field as={Form.Control} name="subheader" />
        </Form.Group>
        {colorsEnabled && (
          <Form.Group
            className="cover-editor-field"
            as={Col}
            controlId="cover-form-subheader-color"
            xs={12}
            sm={4}
            lg={2}
          >
            <Form.Label>Color</Form.Label>
            <Field
              as={Form.Control}
              name="subheader_color"
              type="color"
              aria-label="Subheader color"
            />
          </Form.Group>
        )}
        <Form.Group
          className="cover-editor-field"
          as={Col}
          controlId="cover-form-description"
          {...mainColumSizes}
        >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" {...description} />
        </Form.Group>
        {colorsEnabled && (
          <Form.Group
            className="cover-editor-field"
            as={Col}
            controlId="cover-form-description-color"
            xs={12}
            sm={4}
            lg={2}
          >
            <Form.Label>Color</Form.Label>
            <Field
              as={Form.Control}
              name="description_color"
              type="color"
              aria-label="Description color"
            />
          </Form.Group>
        )}
      </Row>
    </div>
  );
};

export default CoverForm;
