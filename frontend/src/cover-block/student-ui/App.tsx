import * as React from 'react';
import CourseCover from './components/Course.tsx';
import SectionCover from './components/Section.tsx';
import Separator from './components/Separator.tsx';
import { type CoverBlockFields, Variant } from '../apiTypes.ts';

const variants: Record<Variant, React.FC<CoverBlockFields>> = {
  course: CourseCover,
  section: SectionCover,
  separator: Separator,
};

const App: React.FC<CoverBlockFields> = (props: CoverBlockFields) => {
  const Component = variants[props.variant];
  return <Component {...props} />;
};

export default App;
