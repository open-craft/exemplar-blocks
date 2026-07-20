import Stack from '@openedx/paragon/dist/Stack';
import type { RichListItem } from '@/card/common/types';
import MaterialIcon from './MaterialIcon';

export function RichList({ items }: { items: RichListItem[] }) {
  return (
    <div className="p-4 pt-5">
      {items.map((item, i) => (
        <div key={i}>
          <Stack direction="horizontal">
            <MaterialIcon name={item.icon} />
            <div className="ml-4">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Stack>
          {i < items.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
