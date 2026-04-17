import { useHandlerUrl } from '../../lib/hooks.ts';
import { useContext } from 'react';
import { RuntimeContext } from '../../lib/context.ts';
import { Formik } from 'formik';
import Editor from './components/Editor.tsx';
import type { CoverBlockFields } from '../apiTypes.ts';

const App = (data: CoverBlockFields) => {
  const { runtime } = useContext(RuntimeContext);
  const studioSaveUrl = useHandlerUrl('studio_save');
  const handleSave = (saveData: CoverBlockFields) => {
    runtime.notify('save', { state: 'start' });
    $.post(studioSaveUrl, JSON.stringify(saveData))
      .done(() => {
        runtime.notify('save', { state: 'end' });
      })
      .fail(() => {
        runtime.notify('error', {
          title: 'Save Error',
          message: 'Failed to save cover block configuration',
        });
      });
  };
  return (
    <Formik initialValues={data} onSubmit={handleSave}>
      <Editor />
    </Formik>
  );
};

export default App;
