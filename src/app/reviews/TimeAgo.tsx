import { useState, useEffect } from 'react';

export function TimeAgo({ timestamp }: { timestamp : string} ) {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const updateTimeAgo = () => {
      const now: Date = new Date();
      const past: Date = new Date(timestamp);
      const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

      let result: string = '';
      if (diffInSeconds < 60) {
        result = 'just now';
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        result = `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        result = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
      } else if (diffInSeconds < 604800) {
        const days = Math.floor(diffInSeconds / 86400);
        result = `${days} day${days !== 1 ? 's' : ''} ago`;
      } else if (diffInSeconds < 2592000) {
        const weeks = Math.floor(diffInSeconds / 604800);
        result = `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
      } else if (diffInSeconds < 31536000) {
        const months = Math.floor(diffInSeconds / 2592000);
        result = `${months} month${months !== 1 ? 's' : ''} ago`;
      } else {
        const years = Math.floor(diffInSeconds / 31536000);
        result = `${years} year${years !== 1 ? 's' : ''} ago`;
      }

      setTimeAgo(result);
    };

    updateTimeAgo(); // Initial update
    const interval = setInterval(updateTimeAgo, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup
  }, [timestamp]);

  return <time dateTime={timestamp}>{timeAgo}</time>;
}
