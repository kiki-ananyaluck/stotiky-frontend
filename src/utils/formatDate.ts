  // Convert added_at (ISO string) to a readable date
export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("th-TH", { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }
