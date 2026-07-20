interface MaterialIconProps {
  name: string;
  size?: 'sm';
  bg?: string;
  fg?: string;
}
export default function MaterialIcon({
  name,
  bg,
  fg,
  size,
}: MaterialIconProps) {
  const classes = `${size === 'sm' ? 'p-2' : 'p-3'} ${bg || 'bg-secondary-500'} ${fg || 'text-light-100'} rounded-circle`;
  const dimension = size === 'sm' ? '2.5rem' : '3.5rem';
  return (
    <div className={classes} style={{ width: dimension, height: dimension }}>
      <span className="material-icons-outlined">{name}</span>
    </div>
  );
}
