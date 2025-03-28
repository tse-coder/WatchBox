export const calculatedNumber = (view) => {
    const numView = parseFloat(view);
    
    if (numView >= 1_000_000_000) {
        return `${(numView / 1_000_000_000).toFixed(1)} B`;
    } else if (numView >= 1_000_000) {
        return `${(numView / 1_000_000).toFixed(1)} M`;
    } else if (numView >= 1_000) {
        return `${(numView / 1_000).toFixed(1)} K`;
    }
    
    return numView.toString();
};

export const calculatedDate = (date) => {
    const now = new Date();
    const then = new Date(date);
    
    const seconds = Math.floor((now - then) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    if (years > 0) return `${years} years ago`;
    if (months > 0) return `${months} months ago`;
    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    return "< 1 minute ago";
};
