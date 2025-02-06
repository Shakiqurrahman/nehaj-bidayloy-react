export const dateFormatter = (dateString) => {
    const date = new Date(dateString);
  
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };