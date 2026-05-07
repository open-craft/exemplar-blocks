import type {
  ImageGridLayoutData,
  LessonIntroLayoutData,
  LessonListLayoutData,
  TextLayoutData,
  EmbedLayoutData,
} from './apiTypes';

// Some helper types to complement ./apiTypes.ts , to address some missing features.
// Please keep these in sync with major api changes.
export const enum LayoutType {
  Text = 'text',
  LessonList = 'lessonList',
  LessonIntro = 'lessonIntro',
  ImageGrid = 'imageGrid',
  Embed = 'embed',
}

export type LayoutData =
  | TextLayoutData
  | LessonListLayoutData
  | LessonIntroLayoutData
  | ImageGridLayoutData
  | EmbedLayoutData;

export const defaultLayout = (kind: LayoutData['kind']): LayoutData => {
  switch (kind) {
    case 'text':
      return { kind, content: '', verticalAlignment: 'start' };
    case 'lessonList':
      return { kind, title: 'Overview', text: '', lessons: [] };
    case 'lessonIntro':
      return {
        kind,
        title: 'Up Next', // this is the default title
        summary: '',
        lesson: {
          id: '',
          title: '',
          url: '',
        },
        showStartLessonButton: false,
        previousLesson: null,
      };
    case 'imageGrid':
      return {
        kind,
        featuredImage: {
          url: '',
          decorative: false,
          alt: '',
          onClickUrl: '',
        },
        bottomImage: {
          url: '',
          decorative: false,
          alt: '',
          onClickUrl: '',
        },
        text: {
          content: '',
          alignment: 'start',
          fontSize: 'small',
          backgroundColor: '#FFFAF0',
          color: '#2F4F4F',
        },
        bottomRowOrder: 'imageText',
      };
    case 'embed':
      return {
        kind,
        html: '',
      };
  }
};
