// Code.jsx
import React, { useState } from 'react';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-md overflow-hidden bg-[#0d1117] border border-[#30363d]">
      <div className="flex justify-between items-center bg-[#161b22] px-4 py-2 border-b border-[#30363d]">
        <span className="text-sm text-[#8b949e]">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-sm text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4 text-[#3fb950]" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <ClipboardDocumentIcon className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: '#0d1117',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            color: '#c9d1d9'
          }
        }}
        showLineNumbers={true}
        lineNumberStyle={{
          color: '#8b949e',
          minWidth: '2.25em'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;