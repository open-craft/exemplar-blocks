import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  ContentHighlight,
  type ContentHighlightProps,
} from './ContentHighlight';

describe('ContentHighlight', () => {
  const defaultProps: ContentHighlightProps = {
    title: 'Main Title',
    subtitle: 'A Subtitle',
    description: 'Some description text',
    orientation: 'HORIZONTAL',
    kind: 'CONTENT_HIGHLIGHT',
  };

  it('renders title, subtitle, and description', () => {
    render(<ContentHighlight {...defaultProps} />);
    expect(screen.getByText('Main Title')).toBeInTheDocument();
    expect(screen.getByText('A Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Some description text')).toBeInTheDocument();
  });

  it('sets right-side border radius for horizontal orientation', () => {
    const { container } = render(
      <ContentHighlight {...defaultProps} orientation="HORIZONTAL" />,
    );
    const div = container.firstChild as HTMLElement;
    // Both right corners should be set; left corners should not
    const style = div.style.cssText;
    expect(style).toContain('border-top-right-radius');
    expect(style).toContain('border-bottom-right-radius');
    expect(style).not.toContain('border-top-left-radius');
    expect(style).not.toContain('border-bottom-left-radius');
  });

  it('sets bottom border radius for vertical orientation', () => {
    const { container } = render(
      <ContentHighlight {...defaultProps} orientation="VERTICAL" />,
    );
    const div = container.firstChild as HTMLElement;
    // Both bottom corners should be set; top corners should not
    const style = div.style.cssText;
    expect(style).toContain('border-bottom-right-radius');
    expect(style).toContain('border-bottom-left-radius');
    expect(style).not.toContain('border-top-right-radius');
    expect(style).not.toContain('border-top-left-radius');
  });
});
