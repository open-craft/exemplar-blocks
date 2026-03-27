import Stack from "@openedx/paragon/dist/Stack";
import type { RichListData } from "../../types";
import MaterialIcon from "./MaterialIcon";

export function RichList({ items }: RichListData) {
  return (
    <div className="p-4">
      {items.map((item, i) => (
        <div key={i}>
        <Stack direction="horizontal">
          <MaterialIcon name={item.icon} />
          <div className="ml-4">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </Stack>
        {(i < items.length - 1) && <hr />}
        </div>
      ))}
    </div>
  )
}
