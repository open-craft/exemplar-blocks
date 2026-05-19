import Button from '@openedx/paragon/dist/Button';
import Form from '@openedx/paragon/dist/Form';
import { useEffect, useRef, useState } from 'react';
import { ICONS } from './icons';
import Fuse from 'fuse.js';

interface IconSelectorProps {
  currentIcon: string;
  onIconSelected: (icon: string) => void;
}

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
  const [showSelector, setShowSelector] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);
  const fuse = new Fuse(ICONS, { threshold: 0.3, minMatchCharLength: 2 });

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowSelector(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function searchIcons(e: React.InputEvent<HTMLInputElement>) {
    const term = e.currentTarget.value;
    if (term !== '') {
      setIcons(fuse.search(term).map((s) => s.item.toString()));
      return;
    }
    setIcons(DEFAULT_ICONS);
  }

  function selectIcon(e: React.MouseEvent<HTMLElement>, iconName: string) {
    // needed to prevent the click on the parent button which keeps the selector open
    e.stopPropagation();
    onIconSelected(iconName);
    setShowSelector(false);
  }

  return (
    <Button
      variant={currentIcon ? 'outline-dark' : 'success'}
      ref={ref}
      className="d-block icon-selector pb-1"
      onClick={() => setShowSelector(true)}
    >
      <span className="material-icons mb-0">{currentIcon || 'add'}</span>
      <div
        className="icon-list-popup border rounded-sm shadow"
        style={{ display: showSelector ? 'block' : 'none' }}
      >
        <Form.Group size="sm">
          <Form.Control
            type="text"
            className="m-0"
            placeholder="Search icons"
            trailingElement={
              <span className="material-icons medium text-gray-500">
                search
              </span>
            }
            onChange={searchIcons}
          />
        </Form.Group>
        <div className="icon-list d-flex flex-wrap justify-items-start">
          {icons.map((icon) => (
            <Button
              variant="link"
              key={icon}
              className="icon-symbol p-2"
              onClick={(e) => selectIcon(e, icon)}
            >
              <span key={icon} className="material-icons">
                {icon}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </Button>
  );
}
