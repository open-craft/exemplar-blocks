import { describe, expect, it } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { App } from './App.tsx';
import type { Data } from '../apiTypes.ts';
import { defaultLayout } from '../types.ts';

describe('App.tsx', () => {
  it('renders', () => {
    const data: Data = {
      displayName: '',
      columns: {
        left: defaultLayout('lessonList'),
        right: defaultLayout('imageGrid'),
        ratio: '9:3',
        order: 'leftAboveRight',
      },
      backgroundColor: '#FFFFFF',
    };
    const screen = render(<App data={data} />);
    screen.getByText('Overview');
    expect(
      screen.container.querySelector('.xblock-two-column-wrapper'),
    ).toHaveStyle('--two-column-background-color: #FFFFFF');
  });

  it('also renders with other components', () => {
    const data: Data = {
      displayName: '',
      columns: {
        left: defaultLayout('text'),
        right: defaultLayout('lessonIntro'),
        ratio: '6:6',
        order: 'rightAboveLeft',
      },
      backgroundColor: '#FFFFFF',
    };
    const screen = render(<App data={data} />);
    screen.getByText('Up Next');
    expect(
      screen.container.querySelector('.two-column-reverse'),
    ).toBeInTheDocument();
  });

  it('renders images with alt text', () => {
    const data: Data = {
      displayName: '',
      columns: {
        left: defaultLayout('text'),
        right: {
          kind: 'imageGrid',
          featuredImage: {
            url: 'https://picsum.photos/400',
            decorative: false,
            alt: 'this is featured image alttext',
            onClickUrl: '',
          },
          bottomImage: {
            url: 'https://picsum.photos/400',
            decorative: false,
            alt: 'and the bottom image alttext',
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
        },
        ratio: '9:3',
        order: 'leftAboveRight',
      },
      backgroundColor: '#FFFFFF',
    };

    const screen = render(<App data={data} />);
    screen.getByAltText('this is featured image alttext');
    screen.getByAltText('and the bottom image alttext');
  });
});
