import { useState } from "react";
import type { HoverListData } from "../../types";
import "./HoverList.css";
import MaterialIcon from "./MaterialIcon";

export function HoverList({ items }: HoverListData) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <ol className="hover-list">
      {
        items.map((item, i) => (
          <li
            className={`hover-list-item ${activeItem === i ? 'is-active': ''}`}
            key={i}
            onClick={() => setActiveItem(activeItem === i ? null : i)}
          >
            <div className="hover-list-content-wrapper">
              <div
                className="hover-list-description"
                aria-hidden={activeItem === i}
                style={activeItem === i ? { visibility: 'hidden', opacity: 0 } : {}}
              >
                {item.description}
              </div>
              {
                item.hoverContent && (
                  <div
                    className="hover-content"
                    aria-hidden={activeItem !== i}
                    style={activeItem === i ? { visibility: 'visible', opacity: 1 } : {}}
                  >
                    {item.icon && <MaterialIcon name={item.icon} size="sm" fg="text-primary-500" bg="bg-light-100" />}
                    <div className="ml-2">
                      {item.hoverContent}
                    </div>
                  </div>
                )
              }
            </div>
          </li>
        ))
      }
    </ol>
  )
}
