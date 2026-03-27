import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RichList } from './RichList';

describe('RichList', () => {
  const items = [
    { icon: 'star', title: 'First Item', description: 'First description' },
    { icon: 'home', title: 'Second Item', description: 'Second description' },
  ];

  it('renders all item titles', () => {
    render(<RichList items={items} />);
    expect(screen.getByText('First Item')).toBeInTheDocument();
    expect(screen.getByText('Second Item')).toBeInTheDocument();
  });

  it('renders all item descriptions', () => {
    render(<RichList items={items} />);
    expect(screen.getByText('First description')).toBeInTheDocument();
    expect(screen.getByText('Second description')).toBeInTheDocument();
  });

  it('renders a MaterialIcon for each item', () => {
    render(<RichList items={items} />);
    // MaterialIcon renders the icon name in a .material-icons span
    expect(screen.getByText('star')).toBeInTheDocument();
    expect(screen.getByText('home')).toBeInTheDocument();
  });

  it('renders a separator between items but not after the last one', () => {
    const { container } = render(<RichList items={items} />);
    // Two items → one <hr> separator
    expect(container.querySelectorAll('hr')).toHaveLength(1);
  });

  it('renders no separator for a single item', () => {
    const { container } = render(<RichList items={[items[0]]} />);
    expect(container.querySelectorAll('hr')).toHaveLength(0);
  });

  it('renders an empty list without errors when items array is empty', () => {
    const { container } = render(<RichList items={[]} />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.querySelectorAll('hr')).toHaveLength(0);
    expect(container.querySelectorAll('h4')).toHaveLength(0);
  });
});
