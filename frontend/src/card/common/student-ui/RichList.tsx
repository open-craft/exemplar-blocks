import Stack from '@openedx/paragon/dist/Stack';
import type { RichListItem } from '@/card/common/types';
import MaterialIcon from './MaterialIcon';

export function RichList({ items }: { items: RichListItem[] }) {
  return (
    <div className="rich-list">
      {items.map((item, i) => (
        <div className="rich-list-item" key={i}>
          <Stack direction="horizontal" className="rich-list-row">
            <MaterialIcon name={item.icon} />
            <div className="rich-list-content">
              <h4 className="rich-list-title">{item.title}</h4>
              <p className="rich-list-description">{item.description}</p>
            </div>
          </Stack>
          {i < items.length - 1 && <hr className="rich-list-divider" />}
        </div>
      ))}
    </div>
  );
}
