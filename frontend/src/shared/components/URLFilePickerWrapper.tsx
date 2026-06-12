import { Button, Form, InputGroup } from '@openedx/paragon';
import type { Field, FormikErrors } from 'formik';
import { useXBlockConfig } from '../../lib/context.ts';
import type { UploadFileTypes } from '../../types.ts';
import { type FilePickerConfig, FilePickerModal } from './FilePickerModal.tsx';
import { useCallback, useState } from 'react';

export const URLFilePickerWrapper = <T extends FilePickerConfig>({
  children,
  setValue,
  fileTypes = null,
}: {
  children: typeof Field | typeof Form.Control;
  setValue: (url: string) => Promise<FormikErrors<unknown> | string | void>;
  fileTypes: UploadFileTypes[] | null;
}) => {
  const [showFilePicker, setShowFilePicker] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const config = useXBlockConfig<T>();
  const handleSelectFile = useCallback(
    async (url: string) => {
      try {
        await setValue(url);
        setError(null);
      } catch (e) {
        setError((e as Error).message);
      }
      setShowFilePicker(false);
    },
    [setValue],
  );
  if (!config?.file_picker_url) return children;
  return (
    <>
      <InputGroup>
        {children}
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            onClick={() => setShowFilePicker(true)}
          >
            Select File
          </Button>
        </InputGroup.Append>
      </InputGroup>
      {error && (
        <Form.Control.Feedback type="default">{error}</Form.Control.Feedback>
      )}
      {showFilePicker && (
        <FilePickerModal<T>
          fileTypes={fileTypes}
          onFileSelect={handleSelectFile}
          onError={setError}
          onClose={() => setShowFilePicker(false)}
        />
      )}
    </>
  );
};
