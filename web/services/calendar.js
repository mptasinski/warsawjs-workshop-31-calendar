const dayJs = require('dayjs');

const buildCalendar = (fromDate) => {
  const startDate = dayJs(fromDate).startOf('month').startOf('week');

  const calendarWidth = 7;
  const calendarHeight = 6;

  return Array
    .from({ length: calendarHeight * calendarWidth })
    .map((_, index) => startDate.add((index + 1), 'day').toString());

};

const buildEventsCalendar = (date) => {
  return buildCalendar(date).map((date) => ({
    date,
    events: []
  }))
};


module.exports = buildEventsCalendar;
