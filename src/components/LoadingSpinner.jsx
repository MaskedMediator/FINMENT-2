import React from 'react';

// eslint-disable-next-line react/prop-types
export default function LoadingSpinner({ fullScreen = false }) {
  const content = (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-3 h-3 bg-primary rounded-full animate-spin" />
      <span className="text-gray-600">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return <div className="min-h-screen flex items-center justify-center">{content}</div>;
  }

  return content;
}
