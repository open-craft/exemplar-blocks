import {
  type ContentHighlightData,
  type Orientation,
} from '@/card/common/types';

export interface ContentHighlightProps extends ContentHighlightData {
  orientation: Orientation;
}

export function ContentHighlight({
  title,
  subtitle,
  description,
  orientation,
}: ContentHighlightProps) {
  const orientationClass =
    orientation === 'HORIZONTAL'
      ? 'content-highlight--horizontal'
      : 'content-highlight--vertical';

  return (
    <div className={`content-highlight ${orientationClass}`}>
      <h4 className="content-highlight-subtitle text-accent">{subtitle}</h4>
      <h3 className="content-highlight-title">{title}</h3>
      <p className="content-highlight-description">{description}</p>
    </div>
  );
}
