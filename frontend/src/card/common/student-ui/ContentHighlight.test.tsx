import { render, screen } from '@opencraft/xblock-react-utils/testing';
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

  it('uses the horizontal radius class for horizontal orientation', () => {
    const { container } = render(
      <ContentHighlight {...defaultProps} orientation="HORIZONTAL" />,
    );
    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass('content-highlight--horizontal');
    expect(div).not.toHaveClass('content-highlight--vertical');
  });

  it('uses the vertical radius class for vertical orientation', () => {
    const { container } = render(
      <ContentHighlight {...defaultProps} orientation="VERTICAL" />,
    );
    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass('content-highlight--vertical');
    expect(div).not.toHaveClass('content-highlight--horizontal');
  });
});
