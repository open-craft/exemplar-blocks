import { Editor } from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
import 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model';
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';
// This whole app is rendered in a shadow dom, so we also need this
import 'tinymce/skins/ui/oxide/skin.shadowdom.js';

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
// import 'tinymce/plugins/advlist';
// import 'tinymce/plugins/anchor';
// import 'tinymce/plugins/autolink';
// import 'tinymce/plugins/autoresize';
// import 'tinymce/plugins/autosave';
// import 'tinymce/plugins/charmap';
// import 'tinymce/plugins/code';
// import 'tinymce/plugins/codesample';
// import 'tinymce/plugins/directionality';
// import 'tinymce/plugins/emoticons';
// import 'tinymce/plugins/fullscreen';
// import 'tinymce/plugins/help';
// import 'tinymce/plugins/help/js/i18n/keynav/en';
// import 'tinymce/plugins/image';
// import 'tinymce/plugins/importcss';
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/lists';
// import 'tinymce/plugins/media';
// import 'tinymce/plugins/nonbreaking';
// import 'tinymce/plugins/quickbars';
// import 'tinymce/plugins/searchreplace';
// import 'tinymce/plugins/table';
// import 'tinymce/plugins/visualblocks';
// import 'tinymce/plugins/visualchars';

// importing plugin resources
// import 'tinymce/plugins/emoticons/js/emojis';

// Content styles, including inline UI like fake cursors
import 'tinymce/skins/content/default/content';
import 'tinymce/skins/ui/oxide/content';

interface TinyMceEditorProps {
  value: string;
  onEditorChange: (content: string) => void;
  height?: string;
}

// A simple editor with restricted styling, for the two-column block, text content.
export const TextLayoutTinyMCE = ({
  value,
  onEditorChange,
  height,
}: TinyMceEditorProps) => (
  <Editor
    licenseKey="gpl"
    value={value}
    onEditorChange={onEditorChange}
    init={{
      promotion: false,
      menubar: false,
      plugins: [],
      toolbar: ['undo redo | blocks | bold italic forecolor'],
      height,
    }}
  />
);
