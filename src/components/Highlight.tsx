import React from "react";

interface HighlightProps {
  text: string;
  query: string;
}

export const Highlight: React.FC<HighlightProps> = ({ text, query }) => {
  if (!query.trim()) return <span>{text}</span>;
  
  // Escape special characters for regex
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
  
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === query.toLowerCase() 
          ? <span key={i} className="bg-yellow-200 text-black px-0.5 rounded-sm">{part}</span> 
          : part
      )}
    </span>
  );
};
