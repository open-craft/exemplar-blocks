import { render, screen } from '@opencraft/xblock-react-utils/testing';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Formik } from 'formik';
import { type InitData } from '../../types';
import CarouselEditor from './CarouselEditor';

const makeInitData = (overrides: Partial<InitData> = {}): InitData => ({
  cards: [],
  displayName: 'Test Carousel',
  orientation: 'HORIZONTAL',
  ...overrides,
});

const CarouselEditorWithContext = ({ initData }: { initData: InitData }) => (
  <Formik initialValues={initData} onSubmit={() => {}}>
    <CarouselEditor />
  </Formik>
);

describe('CarouselEditor sidebar', () => {
  it('shows the Add Card button with no cards initially', () => {
    render(<CarouselEditorWithContext initData={makeInitData()} />);
    expect(
      screen.getByRole('button', { name: /Add Card/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText('Card #1')).not.toBeInTheDocument();
  });

  it('shows existing cards from init data in the sidebar', () => {
    const initData = makeInitData({
      cards: [
        {
          id: 1,
          name: 'Intro Card',
          title: '',
          secondaryContent: null,
        },
        {
          id: 2,
          name: 'Summary Card',
          title: '',
          secondaryContent: null,
        },
      ],
    });
    render(<CarouselEditorWithContext initData={initData} />);
    expect(screen.getByText('Intro Card')).toBeInTheDocument();
    expect(screen.getByText('Summary Card')).toBeInTheDocument();
  });

  it('adds a card to the sidebar when Add Card is clicked', async () => {
    const user = userEvent.setup();
    render(<CarouselEditorWithContext initData={makeInitData()} />);
    await user.click(screen.getByRole('button', { name: /Add Card/i }));
    expect(screen.getByText('Card #1')).toBeInTheDocument();
  });

  it('adds multiple cards sequentially with incrementing names', async () => {
    const user = userEvent.setup();
    render(<CarouselEditorWithContext initData={makeInitData()} />);
    await user.click(screen.getByRole('button', { name: /Add Card/i }));
    await user.click(screen.getByRole('button', { name: /Add Card/i }));
    expect(screen.getByText('Card #1')).toBeInTheDocument();
    expect(screen.getByText('Card #2')).toBeInTheDocument();
  });

  it('hides the delete button when there is only one card', () => {
    const initData = makeInitData({
      cards: [
        {
          id: 1,
          name: 'Only Card',
          title: '',
          secondaryContent: null,
        },
      ],
    });
    render(<CarouselEditorWithContext initData={initData} />);
    expect(
      screen.queryByRole('button', { name: 'Delete card' }),
    ).not.toBeInTheDocument();
  });

  it('shows the delete button on all cards when there are multiple cards', () => {
    const initData = makeInitData({
      cards: [
        {
          id: 1,
          name: 'Card One',
          title: '',
          secondaryContent: null,
        },
        {
          id: 2,
          name: 'Card Two',
          title: '',
          secondaryContent: null,
        },
      ],
    });
    render(<CarouselEditorWithContext initData={initData} />);
    expect(screen.getAllByRole('button', { name: 'Delete card' })).toHaveLength(
      2,
    );
  });

  it('removes a card from the sidebar when its delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<CarouselEditorWithContext initData={makeInitData()} />);
    await user.click(screen.getByRole('button', { name: /Add Card/i }));
    await user.click(screen.getByRole('button', { name: /Add Card/i }));
    expect(screen.getByText('Card #1')).toBeInTheDocument();
    expect(screen.getByText('Card #2')).toBeInTheDocument();

    const deleteButtons = screen.getAllByRole('button', {
      name: 'Delete card',
    });
    await user.click(deleteButtons[0]);

    expect(screen.queryByText('Card #1')).not.toBeInTheDocument();
    expect(screen.getByText('Card #2')).toBeInTheDocument();
  });
});
