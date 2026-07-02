import { RuntimeContext } from '@opencraft/xblock-react-utils';
import { ActionRow, Button, StandardModal } from '@openedx/paragon';
import { useContext, useEffect, useRef, useState } from 'react';
import { useXBlockConfig } from '../../lib/context.ts';
import type { UploadFileTypes, XBlockConfig } from '../../types.ts';

export interface FilePickerConfig extends XBlockConfig {
  file_picker_url: string;
}

export const FilePickerModal = <T extends FilePickerConfig>({
  fileTypes,
  onFileSelect,
  onError,
  onClose,
}: {
  fileTypes: UploadFileTypes[] | null;
  onFileSelect: (url: string) => Promise<string | void>;
  onError: (error: string | null) => void;
  onClose: () => void;
}) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const { element } = useContext(RuntimeContext);
  const config = useXBlockConfig<T>();
  const filePickerRef = useRef<HTMLIFrameElement>(null);
  const usageKey = element.getAttribute('data-usage-id')!;
  useEffect(() => {
    const handleMessage = async ({ data, source }: MessageEvent) => {
      if (
        source === filePickerRef.current?.contentWindow &&
        data.type === 'org.openedx.assets.selected.v1'
      ) {
        try {
          if (data.data.length === 0) {
            setSelectedFile(null);
          } else {
            setSelectedFile(data.data[0].externalUrl);
          }
          onError(null);
        } catch {
          onError('Invalid response from server.');
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onError]);
  if (!config?.file_picker_url) return null;
  const filePickerUrl = new URL(config.file_picker_url);
  filePickerUrl.searchParams.set('multiSelect', 'false');
  filePickerUrl.searchParams.set('embedded', 'true');
  if (fileTypes) {
    filePickerUrl.searchParams.set('fileTypes', fileTypes.join(','));
  }
  filePickerUrl.searchParams.set('usageKey', usageKey);
  return (
    <StandardModal
      title="File Picker"
      size="xl"
      isOpen
      className="bg-light-200"
      onClose={onClose}
      footerNode={
        <ActionRow>
          <ActionRow.Spacer />
          <Button variant="tertiary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={!selectedFile}
            onClick={async () => {
              await onFileSelect(selectedFile!);
            }}
          >
            Use Selected File
          </Button>
        </ActionRow>
      }
      isOverflowVisible
    >
      <iframe
        title="File Picker"
        ref={filePickerRef}
        width="100%"
        height="800"
        src={filePickerUrl.toString()}
      />
    </StandardModal>
  );
};
