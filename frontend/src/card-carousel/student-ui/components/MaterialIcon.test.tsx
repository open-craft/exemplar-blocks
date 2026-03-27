import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MaterialIcon from './MaterialIcon';

describe('MaterialIcon', () => {
  it('renders the icon name in a material-icons span', () => {
    render(<MaterialIcon name="home" />);
    const span = screen.getByText('home');
    expect(span).toBeInTheDocument();
    expect(span.className).toBe('material-icons');
  });

  it('renders with default size when no size is provided', () => {
    const { container } = render(<MaterialIcon name="star" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.width).toBe('3.5rem');
    expect(wrapper.style.height).toBe('3.5rem');
    expect(wrapper.className).toContain('p-3');
    expect(wrapper.className).not.toContain('p-2');
  });

  it('renders with default size for an unrecognised size value', () => {
    // @ts-expect-error intentionally passing an invalid size
    const { container } = render(<MaterialIcon name="star" size="xl" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.width).toBe('3.5rem');
    expect(wrapper.style.height).toBe('3.5rem');
    expect(wrapper.className).toContain('p-3');
  });

  it('renders with small size when size="sm"', () => {
    const { container } = render(<MaterialIcon name="star" size="sm" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.width).toBe('2.5rem');
    expect(wrapper.style.height).toBe('2.5rem');
    expect(wrapper.className).toContain('p-2');
    expect(wrapper.className).not.toContain('p-3');
  });

  it('uses default bg and fg classes when not provided', () => {
    const { container } = render(<MaterialIcon name="star" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('bg-secondary-500');
    expect(wrapper.className).toContain('text-light-100');
  });

  it('uses custom bg and fg classes when provided', () => {
    const { container } = render(<MaterialIcon name="star" bg="bg-primary-500" fg="text-brand-400" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('bg-primary-500');
    expect(wrapper.className).not.toContain('bg-secondary-500');
    expect(wrapper.className).toContain('text-brand-400');
    expect(wrapper.className).not.toContain('text-light-100');
  });
});
