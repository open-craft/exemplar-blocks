import { type XBlockConfig as BaseXBlockConfig } from '@opencraft/xblock-react-utils';

export interface XBlockConfig extends BaseXBlockConfig {
  file_picker_url: string;
}

export type UploadFileTypes =
  | 'image'
  | 'video'
  | 'audio'
  | 'document'
  | 'code'
  | 'other';
