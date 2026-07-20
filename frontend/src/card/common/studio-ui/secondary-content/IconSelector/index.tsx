import { Dropdown, Sticky } from '@openedx/paragon';
import Form from '@openedx/paragon/dist/Form';
import {
  useState,
  forwardRef,
  useId,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { ICONS } from './icons';
import Fuse from 'fuse.js';

interface IconSelectorProps {
  currentIcon: string;
  onIconSelected: (icon: string) => void;
}

// Custom toggle forwarded ref so Dropdown has a real DOM button ref.
// Attach onClick via native addEventListener to work around React 18's
// event delegation not processing composed clicks inside Shadow DOM.
const Toggle = forwardRef<
  HTMLButtonElement,
  { variant?: string } & React.ComponentPropsWithoutRef<'button'>
>(({ variant, ...rest }, forwardedRef) => {
  const { onClick, ...domProps } = rest;
  const innerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = innerRef.current;
    if (!btn || !onClick) return;
    const handler = onClick as unknown as EventListener;
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, [onClick]);

  const setButtonRef = useCallback(
    (node: HTMLButtonElement | null) => {
      innerRef.current = node;
      if (typeof forwardedRef === 'function') forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef],
  );

  return (
    <button
      ref={setButtonRef}
      {...domProps}
      // variant becomes CSS classes directly since custom toggle isn't Paragon Button
      className={[domProps.className, variant && `btn btn-${variant}`]
        .filter(Boolean)
        .join(' ')}
      type="button"
    />
  );
});
Toggle.displayName = 'IconSelectorToggle';

// Custom menu forwarded ref so Dropdown has a real DOM menu ref
// Drop show/close/alignRight — react-bootstrap passes these for custom
// components but they aren't valid DOM attributes
const Menu = forwardRef<
  HTMLDivElement,
  {
    show?: boolean;
    close?: () => void;
    alignRight?: boolean;
  } & React.ComponentPropsWithoutRef<'div'>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- react-bootstrap passes show/close/alignRight to custom Menu; destructure & discard to avoid spreading invalid DOM attrs
>(({ show: _show, close: _close, alignRight: _alignRight, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));
Menu.displayName = 'IconSelectorMenu';

export default function IconSelector({
  currentIcon,
  onIconSelected,
}: IconSelectorProps) {
  // These icons were manually chosen from the Google Fonts page listed as "most used" with a bit of
  // filtering for relevance in a eductional setup.
  const DEFAULT_ICONS = [
    'search',
    'home',
    'info',
    'check_circle',
    'delete',
    'visibility',
    'book',
    'favorite',
    'description',
    'lock',
    'schedule',
    'language',
    'help_outline',
    'verified',
    'face',
    'thumb_up',
    'filter_alt',
    'dashboard',
    'event',
    'fingerprint',
    'list',
    'help',
    'paid',
    'assignment',
    'question_answer',
    'article',
    'lightbulb',
    'credit_card',
    'account_balance',
    'trending_up',
  ];

  const [icons, setIcons] = useState<Array<string>>(DEFAULT_ICONS);
  const [searchTerm, setSearchTerm] = useState('');
  const toggleId = useId();
  const fuse = new Fuse(ICONS, { threshold: 0.3, minMatchCharLength: 2 });

  function searchIcons(e: React.ChangeEvent<HTMLInputElement>) {
    const term = e.currentTarget.value;
    setSearchTerm(term);
    if (term !== '') {
      setIcons(fuse.search(term).map((s) => s.item.toString()));
    } else {
      setIcons(DEFAULT_ICONS);
    }
  }

  function resetSearch() {
    setSearchTerm('');
    setIcons(DEFAULT_ICONS);
  }

  function selectIcon(eventKey: string | null) {
    if (eventKey) onIconSelected(eventKey);
  }

  return (
    <Dropdown
      onSelect={selectIcon}
      onToggle={(isOpen: boolean) => {
        if (isOpen) resetSearch();
      }}
    >
      <Dropdown.Toggle
        as={Toggle}
        variant={currentIcon ? 'outline-dark' : 'success'}
        className="d-block icon-selector pb-1"
        id={toggleId}
      >
        <span className="material-icons-outlined mb-0">
          {currentIcon || 'add'}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={Menu}
        className="p-0 border-0"
        popperConfig={{ strategy: 'fixed' }}
      >
        <div className="icon-list-popup border rounded-sm shadow">
          <Sticky>
            <Form.Group size="sm">
              <Form.Control
                autoFocus
                type="text"
                className="m-0"
                placeholder="Search icons"
                trailingElement={
                  <span className="material-icons-outlined medium text-gray-500">
                    search
                  </span>
                }
                value={searchTerm}
                onChange={searchIcons}
              />
            </Form.Group>
          </Sticky>
          <div className="icon-list d-flex flex-wrap justify-items-start">
            {icons.map((icon) => (
              <Dropdown.Item
                as="button"
                type="button"
                key={icon}
                eventKey={icon}
                className="icon-symbol p-2"
              >
                <span className="material-icons-outlined">{icon}</span>
              </Dropdown.Item>
            ))}
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
