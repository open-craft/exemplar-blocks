import { useMemo, useState } from 'react';
import { Form, Formik } from 'formik';
import { type InitData } from '@/card/card-carousel/types';
import { newCard } from '@/card/common/utils';
import {
  saveStudioBlock,
  type XBlockRuntime,
} from '@opencraft/xblock-react-utils';
import CreateCarouselForm from '@/card/card-carousel/studio-ui/CreateCarouselForm';
import CarouselEditor from '@/card/common/studio-ui/CardListEditor';
import ModalFooter from '@/card/common/studio-ui/ModalFooter';

interface StudioUIProps {
  saveUrl: string;
  runtime: XBlockRuntime;
  initData: InitData;
}

function StudioUI({ runtime, saveUrl, initData }: StudioUIProps) {
  const [showCardEditor, setShowCardEditor] = useState(false);
  const initialData = useMemo(
    () =>
      initData.cards.length
        ? initData
        : {
            ...initData,
            cards: [newCard([], { orientation: 'HORIZONTAL' as const })],
          },
    [initData],
  );

  return (
    <Formik
      initialValues={initialData}
      onSubmit={(values) => {
        saveStudioBlock<InitData>({
          saveUrl,
          data: values,
          runtime,
          errorMessage: 'Failed to save the card carousel.',
        });
      }}
    >
      <Form>
        <div className="studio-ui card-carousel-studio">
          {showCardEditor ? (
            <CarouselEditor enableCardOrientation />
          ) : (
            <CreateCarouselForm />
          )}
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
