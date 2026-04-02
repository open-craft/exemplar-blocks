import { type ContentHighlightData, Orientation } from '../../types';

interface ContentHighlightProps extends ContentHighlightData {
  orientation: Orientation;
}

export function ContentHighlight({
  title,
  subtitle,
  description,
  orientation,
}: ContentHighlightProps) {
  const roundedCorners =
    orientation === Orientation.HORIZONTAL
      ? {
          borderTopRightRadius: 'var(--pgn-size-border-radius-lg)',
          borderBottomRightRadius: 'var(--pgn-size-border-radius-lg)',
        }
      : {
          borderBottomRightRadius: 'var(--pgn-size-border-radius-lg)',
          borderBottomLeftRadius: 'var(--pgn-size-border-radius-lg)',
        };
  return (
    <div className="p-4 bg-primary-500 h-100" style={roundedCorners}>
      <h4 className="text-brand-400 h3 mb-4">{subtitle}</h4>
      <h3 className="text-light-100">{title}</h3>
      <p className="text-light-100">{description}</p>
    </div>
  );
}
