const dateToString = d => {
  const year = d.toLocaleString('default', {year: 'numeric'});
  const month = d.toLocaleString('default', {month: '2-digit'});
  const day = d.toLocaleString('default', {day: '2-digit'});

  return [year, month, day].join('-');
};

export default dateToString;