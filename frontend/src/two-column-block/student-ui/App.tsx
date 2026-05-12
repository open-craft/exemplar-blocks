import {
  Image,
  Button,
  Col,
  Row,
  Hyperlink,
  ActionRow,
  Container,
} from '@openedx/paragon';
import {
  type Data,
  type RawHTMLLayoutData,
  type ImageGridLayoutData,
  type LessonIntroLayoutData,
  type LessonListLayoutData,
  type TextLayoutData,
} from '../apiTypes';
import { type LayoutData } from '../types';
import type { ReactElement } from 'react';

type AppProps = {
  data: Data;
};

export const App = ({ data }: AppProps) => {
  const [firstColumnSize, secondColumnSize] = data.columns.ratio
    .split(':')
    .map((s) => parseInt(s, 10));

  return (
    <Container
      className="p-0"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <Container size="lg">
        <Row
          className={`xblock-two-column p-3 ${data.columns.order == 'rightAboveLeft' ? 'two-column-reverse' : ''}`}
        >
          <Col xs={12} sm={firstColumnSize}>
            <ColumnView data={data.columns.left} />
          </Col>
          <Col xs={12} sm={secondColumnSize}>
            <ColumnView data={data.columns.right} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

type ColumnViewProps = {
  data: LayoutData;
};

const ColumnView = ({ data }: ColumnViewProps): ReactElement => {
  switch (data.kind) {
    case 'text':
      return <TextColumnView data={data} />;
    case 'lessonList':
      return <LessonListColumnView data={data} />;
    case 'lessonIntro':
      return <LessonIntroColumnView data={data} />;
    case 'imageGrid':
      return <ImageGridColumnView data={data} />;
    case 'rawHTML':
      return <RawHTMLColumnView data={data} />;
  }
};

type TextColumnViewProps = {
  data: TextLayoutData;
};

const TextColumnView = ({ data }: TextColumnViewProps) => {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100%',
        alignItems: data.verticalAlignment,
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
};

type LessonListColumnViewProps = {
  data: LessonListLayoutData;
};

const LessonListColumnView = ({ data }: LessonListColumnViewProps) => {
  return (
    <>
      <h5>{data.title}</h5>
      <p>{data.text}</p>
      {data.lessons.map((lesson) => (
        <Row className="lesson-list-item py-4">
          <Col xs={2} className="text-secondary font-weight-bold">
            {lesson.id}
          </Col>
          <Col xs={10}>{lesson.title}</Col>
        </Row>
      ))}
    </>
  );
};

type LessonIntroColumnViewProps = {
  data: LessonIntroLayoutData;
};

const LessonIntroColumnView = ({ data }: LessonIntroColumnViewProps) => {
  return (
    <>
      <h4 className="mb-4.5">{data.title}</h4>
      <h5 className="lh-lg">
        <span className="text-secondary">
          {data.lesson.id ? data.lesson.id : null}
        </span>
        <br />
        <span>{data.lesson.title}</span>
      </h5>
      <p>{data.summary}</p>

      {(data.previousLesson || data.showStartLessonButton) && (
        <ActionRow>
          {data.previousLesson && (
            <Button
              className="rounded-pill"
              variant="outline-brand"
              href={data.previousLesson.url}
            >
              Previous {data.previousLesson.id}
            </Button>
          )}
          {data.showStartLessonButton && (
            <Button
              className="rounded-pill"
              variant="brand"
              href={data.lesson.url}
            >
              Start {data.lesson.id}
            </Button>
          )}
        </ActionRow>
      )}
    </>
  );
};

type ImageGridColumnViewProps = {
  data: ImageGridLayoutData;
};

const ImageGridColumnView = ({ data }: ImageGridColumnViewProps) => {
  const bottomImage = data.bottomImage.onClickUrl ? (
    <Hyperlink
      className="d-block w-100 bottom-image-grid-item overflow-hidden"
      showLaunchIcon={false}
      target="_blank"
      destination={data.bottomImage.onClickUrl}
    >
      <Image
        className="w-100"
        fluid
        src={data.bottomImage.url}
        alt={data.bottomImage.alt}
      />
    </Hyperlink>
  ) : (
    <Image
      className="w-100 bottom-image-grid-item overflow-hidden"
      fluid
      src={data.bottomImage.url}
      alt={data.bottomImage.alt}
    />
  );

  const bottomText = (
    <div
      className={`d-flex align-items-center justify-content-${data.text.alignment} p-3 bottom-image-grid-item`}
      style={{ backgroundColor: data.text.backgroundColor, height: '100%' }}
    >
      <div
        className={data.text.fontSize == 'large' ? 'lead' : ''}
        style={{ color: data.text.color }}
      >
        {data.text.content}
      </div>
    </div>
  );

  const [bottomLeft, bottomRight] =
    data.bottomRowOrder == 'imageText'
      ? [bottomImage, bottomText]
      : [bottomText, bottomImage];

  return (
    <>
      <Row>
        <Col xs={12} className="pb-1">
          {data.featuredImage.onClickUrl ? (
            <Hyperlink
              target="_blank"
              className="d-block w-100 top-image-grid-item overflow-hidden"
              showLaunchIcon={false}
              destination={data.featuredImage.onClickUrl}
            >
              <Image
                fluid
                className="w-100"
                src={data.featuredImage.url}
                alt={data.featuredImage.alt}
              />
            </Hyperlink>
          ) : (
            <Image
              fluid
              className="w-100 top-image-grid-item"
              src={data.featuredImage.url}
              alt={data.featuredImage.alt}
            />
          )}
        </Col>
        <Col xs={6} className="pr-1">
          {bottomLeft}
        </Col>
        <Col xs={6} className="pl-1">
          {bottomRight}
        </Col>
      </Row>
    </>
  );
};

type RawHTMLColumnViewProps = {
  data: RawHTMLLayoutData;
};

const RawHTMLColumnView = ({ data }: RawHTMLColumnViewProps) => {
  return (
    <div
      style={{
        minHeight: '100%',
      }}
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  );
};
