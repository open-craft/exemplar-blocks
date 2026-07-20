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
  const roundedCorners =
    orientation === 'HORIZONTAL'
      ? {
          borderTopRightRadius: 'var(--pgn-size-border-radius-lg)',
          borderBottomRightRadius: 'var(--pgn-size-border-radius-lg)',
        }
      : {
          borderBottomRightRadius: 'var(--pgn-size-border-radius-lg)',
          borderBottomLeftRadius: 'var(--pgn-size-border-radius-lg)',
        };
  return (
    <div className="p-5 bg-primary-500 h-100" style={roundedCorners}>
      <h4 className="text-accent">{subtitle}</h4>
      <h3 className="text-light-100 mb-3">{title}</h3>
      <p className="text-light-100">{description}</p>
    </div>
  );
}
