import { useState } from 'react';
import { Form, Formik } from 'formik';
import './StudioUI.css';
import { type InitData } from '../types';
import type { XBlockRuntime } from '../../types';
import CreateCarouselForm from './components/CreateCarouselForm';
import CarouselEditor from './components/CarouselEditor';
import ModalFooter from './components/ModalFooter';

interface StudioUIProps {
  saveUrl: string;
  runtime: XBlockRuntime;
  initData: InitData;
}

function StudioUI({ runtime, saveUrl, initData }: StudioUIProps) {
  const [showCardEditor, setShowCardEditor] = useState(false);

  return (
    <Formik
      initialValues={initData}
      onSubmit={async (values) => {
        runtime.notify('save', { state: 'start' });
        $.post(saveUrl, JSON.stringify(values))
          .done(() => {
            runtime.notify('save', { state: 'end' });
          })
          .fail(() => {
            runtime.notify('error', {
              title: 'Save Error',
              message: 'Failed to save the card carousel.',
            });
          });
      }}
    >
      <Form>
        <div className="card-carousel-xblock studio-ui d-flex flex-column justify-content-between">
          {showCardEditor ? <CarouselEditor /> : <CreateCarouselForm />}
          <ModalFooter
            runtime={runtime}
            showingEditor={showCardEditor}
            onContinue={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setShowCardEditor(true);
            }}
          />
        </div>
      </Form>
    </Formik>
  );
}

export default StudioUI;
