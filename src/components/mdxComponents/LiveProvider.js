import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ReactLiveProvider = ({ code }) => {
  return (
    <LiveProvider code={code}>
      <LivePreview className="preview" />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  );
};

export default ReactLiveProvider;
