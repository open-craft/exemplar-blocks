import { Col, Form, Row } from '@openedx/paragon';
import { Field, useField } from 'formik';
import type { Variant } from '../../apiTypes.ts';

const CoverForm = () => {
  const [variant] = useField<Variant>('variant');
  const [description] = useField<string>('description');
  const colorsEnabled = variant.value !== 'section';
  const mainColumSizes = {
    xs: 12,
    sm: colorsEnabled ? 8 : 12,
    lg: colorsEnabled ? 10 : 12,
  };
  return (
    <Row>
      <Form.Group as={Col} controlId="cover-form-display-name" xs={12}>
        <Form.Label>Display Name</Form.Label>
        <Field as={Form.Control} name="display_name" />
        <Form.Text muted>
          The label for this block, shown only in studio.
        </Form.Text>
      </Form.Group>
      <Form.Group as={Col} controlId="cover-form-variant" xs={12} sm={6}>
        <Form.Label>Variant</Form.Label>
        <Form.Control as="select" {...variant}>
          <option value="section">Section Cover</option>
          <option value="course">Course Cover</option>
          <option value="separator">Separator</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="cover-form-media-url" xs={12} sm={6}>
        <Form.Label>Image URL</Form.Label>
        <Field as={Form.Control} name="media_url" />
      </Form.Group>
      <Form.Group as={Col} controlId="cover-form-media-alt-text" xs={12}>
        <Form.Label>Image Alt Text</Form.Label>
        <Field as={Form.Control} name="media_alt_text" />
        <Form.Text muted>
          Provide a description of your image for use with screen readers.
        </Form.Text>
      </Form.Group>
      <Form.Group
        as={Col}
        controlId="cover-form-top-header"
        {...mainColumSizes}
      >
        <Form.Label>Top Header</Form.Label>
        <Field as={Form.Control} name="top_header" />
      </Form.Group>
      {colorsEnabled && (
        <Form.Group
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
        as={Col}
        controlId="cover-form-main-header"
        {...mainColumSizes}
      >
        <Form.Label>Main Header</Form.Label>
        <Field as={Form.Control} name="main_header" />
      </Form.Group>
      {colorsEnabled && (
        <Form.Group
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
      <Form.Group as={Col} controlId="cover-form-subheader" {...mainColumSizes}>
        <Form.Label>Subheader</Form.Label>
        <Field as={Form.Control} name="subheader" />
      </Form.Group>
      {colorsEnabled && (
        <Form.Group
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
        as={Col}
        controlId="cover-form-description"
        {...mainColumSizes}
      >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" {...description} />
      </Form.Group>
      {colorsEnabled && (
        <Form.Group
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
  );
};

export default CoverForm;
