const MarkdownText = ({ text }: { text: string }) => {
  // First, split by new lines to handle line breaks
  const lines = text.split('\n');
  
  return (
    <>
      {lines.map((line, lineIndex) => {
        // Split each line by ** markers to handle bold text
        const parts = line.split(/(\*\*.*?\*\*)/g);
        
        return (
          <span key={lineIndex}>
            {parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                // Remove the ** markers and wrap in strong
                const boldText = part.slice(2, -2);
                return <strong key={`${lineIndex}-${partIndex}`}>{boldText}</strong>;
              }
              return part;
            })}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
};
export default MarkdownText;