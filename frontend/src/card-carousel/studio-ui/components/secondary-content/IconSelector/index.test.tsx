import { render, screen, fireEvent } from '../../../tests-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import IconSelector from './index';

const DEFAULT_ICON = 'home';

describe('IconSelector', () => {
  it('renders the current icon', () => {
    render(
      <IconSelector currentIcon={DEFAULT_ICON} onIconSelected={() => {}} />,
    );
    // The trigger button's icon has an extra 'mb-0' class; icon-grid spans do not
    const triggerIcon = document.querySelector(
      '.material-icons-outlined.mb-0',
    ) as HTMLElement;
    expect(triggerIcon).not.toBeNull();
    expect(triggerIcon.textContent).toBe(DEFAULT_ICON);
  });

  it('renders the "add" icon when no current icon is set', () => {
    render(<IconSelector currentIcon="" onIconSelected={() => {}} />);
    expect(screen.getByText('add')).toBeInTheDocument();
  });

  it('shows the icon list popup only when the button is clicked', async () => {
    const user = userEvent.setup();
    render(<IconSelector currentIcon="" onIconSelected={() => {}} />);
    const popup = document.querySelector('.icon-list-popup') as HTMLElement;

    expect(popup.style.display).toBe('none');

    await user.click(screen.getByRole('button'));

    expect(popup.style.display).toBe('block');
  });

  it('renders the default set of icons when popup is open', async () => {
    const user = userEvent.setup();
    render(<IconSelector currentIcon="" onIconSelected={() => {}} />);

    await user.click(screen.getByRole('button'));

    const iconDivs = document.querySelectorAll('.icon-symbol');
    expect(iconDivs.length).toEqual(30);
  });

  it('calls onIconSelected with the clicked icon name and hides the popup', async () => {
    const user = userEvent.setup();
    const onIconSelected = vi.fn();
    render(<IconSelector currentIcon="" onIconSelected={onIconSelected} />);

    await user.click(screen.getByRole('button'));

    // Click the first icon in the grid
    const firstIconDiv = document.querySelector('.icon-symbol') as HTMLElement;
    fireEvent.click(firstIconDiv);

    expect(onIconSelected).toHaveBeenCalledTimes(1);
    const popup = document.querySelector('.icon-list-popup') as HTMLElement;
    expect(popup.style.display).toBe('none');
  });

  it('filters icons based on search input', async () => {
    const user = userEvent.setup();
    render(<IconSelector currentIcon="" onIconSelected={() => {}} />);

    await user.click(screen.getByRole('button'));

    const defaultCount = document.querySelectorAll('.icon-symbol').length;
    expect(defaultCount).toEqual(30);

    const searchInput = screen.getByPlaceholderText('Search icons');
    await user.type(searchInput, 'fingerprint');

    const iconsAfter = document.querySelectorAll('.icon-symbol').length;
    // 'fingerprint' is a very specific term; Fuse should return far fewer
    // results than the 30-item default list
    expect(iconsAfter).toBeLessThan(defaultCount);
    expect(screen.getByText('fingerprint')).toBeInTheDocument();
  });

  it('restores the default icon list when the search field is cleared', async () => {
    const user = userEvent.setup();
    render(<IconSelector currentIcon="" onIconSelected={() => {}} />);

    await user.click(screen.getByRole('button'));

    const defaultCount = document.querySelectorAll('.icon-symbol').length;

    const searchInput = screen.getByPlaceholderText('Search icons');
    await user.type(searchInput, 'home');

    expect(document.querySelectorAll('.icon-symbol').length).not.toEqual(
      defaultCount,
    );

    // Now clear the search field
    await user.clear(searchInput);

    const countAfterClear = document.querySelectorAll('.icon-symbol').length;
    expect(countAfterClear).toBe(defaultCount);
  });

  it('closes the popup when clicking outside the button', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <IconSelector currentIcon="" onIconSelected={() => {}} />
        <div data-testid="outside">Outside</div>
      </div>,
    );

    await user.click(screen.getByRole('button'));
    const popup = document.querySelector('.icon-list-popup') as HTMLElement;
    expect(popup.style.display).toBe('block');

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(popup.style.display).toBe('none');
  });
});
