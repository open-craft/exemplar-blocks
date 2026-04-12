import * as React from 'react';
import type { InitData, Variant } from '../types.ts';
import CourseCover from './components/Course.tsx';
import SectionCover from './components/Section.tsx';
import Separator from './components/Separator.tsx';

const variants: Record<Variant, React.FC<InitData>> = {
  course: CourseCover,
  section: SectionCover,
  separator: Separator,
};

const App: React.FC<InitData> = (props: InitData) => {
  const Component = variants[props.variant];
  return <Component {...props} />;
};

export default App;
