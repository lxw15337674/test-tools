import type { DiffOnMount } from '@monaco-editor/react';
import { DiffEditor } from '@monaco-editor/react';
import React, { useRef } from 'react';

function App() {
  const diffEditorRef = useRef(null);
  const handleEditorMount: DiffOnMount = (editor) => {
    diffEditorRef.current = editor;
  };

  return (
    <>
      <DiffEditor
        language="json"
        onMount={handleEditorMount}
        options={{
          readOnly: false,
          originalEditable: true,
        }}
      />
    </>
  );
}

export default App;
