import { useState } from 'react';
import { Nav, Sticky } from '@openedx/paragon';
import Form from '@openedx/paragon/dist/Form';
import IconButton from '@openedx/paragon/dist/IconButton';
import { EditOutline } from '@openedx/paragon/icons';
import { EDITOR_TABS, type StudioTab } from './constants';

export interface StudioHeaderProps {
  /** Current component name, rendered as the editable heading. */
  title: string;
  /** Called with the updated name whenever the user edits the title. */
  onTitleChange: (title: string) => void;
  /** Key of the currently active tab. */
  activeTab: string;
  /** Tabs to render in the navigation, in display order. */
  tabs?: StudioTab[];
  /** Extra class names applied to the sticky header. */
  className?: string;
}

export default function StudioHeader({
  title,
  onTitleChange,
  activeTab,
  tabs = EDITOR_TABS,
  className = '',
}: StudioHeaderProps) {
  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <Sticky className={`studio-header border-bottom ${className}`.trim()}>
      <div className="studio-header-title">
        {isEditingName ? (
          <Form.Control
            type="text"
            name="studio-title"
            aria-label="Display name"
            value={title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onTitleChange(event.target.value)
            }
            onBlur={() => setIsEditingName(false)}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === 'Escape') {
                setIsEditingName(false);
                e.preventDefault();
              }
            }}
          />
        ) : (
          <>
            <h3 className="h3 mb-0">Editing: {title}</h3>
            <IconButton
              alt="Edit display name"
              className="studio-header-title-edit"
              size="sm"
              src={EditOutline}
              onClick={() => setIsEditingName(true)}
            />
          </>
        )}
      </div>

      <Nav
        role="tablist"
        variant="button-group"
        activeKey={activeTab}
        className="studio-header-tabs-nav pgn__tabs"
        aria-label="Editor Sections"
      >
        {tabs.map(({ key, label }) => (
          <Nav.Link
            key={key}
            as="button"
            type="button"
            eventKey={key}
            tabIndex={activeTab === key ? 0 : -1}
          >
            {label}
          </Nav.Link>
        ))}
      </Nav>
    </Sticky>
  );
}
