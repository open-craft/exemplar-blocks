import { render, screen } from '@opencraft/xblock-react-utils/testing';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { HoverList } from './HoverList';

describe('HoverList', () => {
  const items = [
    { description: 'Item 1', hoverContent: 'Hover 1', icon: 'star' },
    { description: 'Item 2', hoverContent: 'Hover 2' },
    { description: 'Item 3', hoverContent: '' },
  ];

  it('renders all item descriptions', () => {
    const { container } = render(<HoverList items={items} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(container.querySelectorAll('li')).toHaveLength(3);
  });

  it('renders hover content when hoverContent is non-empty', () => {
    render(<HoverList items={items} />);
    expect(screen.getByText('Hover 1')).toBeInTheDocument();
    expect(screen.getByText('Hover 2')).toBeInTheDocument();
  });

  it('does not render hover-content div when hoverContent is empty', () => {
    const { container } = render(
      <HoverList items={[{ description: 'Only item', hoverContent: '' }]} />,
    );
    expect(container.querySelector('.hover-content')).not.toBeInTheDocument();
  });

  it('renders MaterialIcon when item has both icon and hoverContent', () => {
    render(
      <HoverList
        items={[{ description: 'Item', hoverContent: 'Hover', icon: 'star' }]}
      />,
    );
    // MaterialIcon renders the name inside a .material-icons-outlined span
    expect(screen.getByText('star')).toBeInTheDocument();
  });

  it('does not render MaterialIcon when item has no icon', () => {
    render(
      <HoverList items={[{ description: 'Item', hoverContent: 'Hover' }]} />,
    );
    expect(
      document.querySelector('.material-icons-outlined'),
    ).not.toBeInTheDocument();
  });

  it('renders empty list when items array is empty', () => {
    const { container } = render(<HoverList items={[]} />);
    expect(container.querySelector('ol')).toBeInTheDocument();
    expect(container.querySelectorAll('li')).toHaveLength(0);
  });

  it('shows HoverContent on click', async () => {
    const screen = render(
      <HoverList items={[{ description: 'Item', hoverContent: 'Hover' }]} />,
    );
    const user = userEvent.setup();

    await user.click(screen.getByText('Item'));
    expect(screen.getByText('Item')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByText('Item')).not.toBeVisible();
    expect(screen.getByText('Hover')).toBeVisible();
  });
});
