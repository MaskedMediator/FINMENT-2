export const formatDate = (date) => {
  if (!date) return '';

  let dateObj = date;

  // Handle Firestore Timestamp objects
  if (date && typeof date.toDate === 'function') {
    dateObj = date.toDate();
  } else if (typeof date === 'string') {
    dateObj = new Date(date);
  }

  return dateObj.toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDateTime = (date, time) => {
  return `${formatDate(date)} at ${time}`;
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'NAD',
  }).format(amount);
};

export const formatBookingStatus = (status) => {
  const statusMap = {
    pending: 'Pending',
    assigned: 'Technician Assigned',
    in_progress: 'In Progress',
    completed: 'Completed',
    cancelled: 'Cancelled',
  };
  return statusMap[status] || status;
};

export const getStatusColor = (status) => {
  const colorMap = {
    pending: 'bg-yellow-100 text-yellow-800',
    assigned: 'bg-blue-100 text-blue-800',
    in_progress: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };
  return colorMap[status] || 'bg-gray-100 text-gray-800';
};
