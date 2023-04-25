const calendarDaysEl = document.querySelector('.calendar-days');
const prevBtnEl = document.querySelector('#prevBtn');
const nextBtnEl = document.querySelector('#nextBtn');
const monthYearEl = document.querySelector('#monthYear');

let currentDate = new Date();

function renderCalendar() {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

  const days = [];

  for (let i = firstDayOfMonth.getDay() - 1; i >= 0; i--) {
    days.push(prevMonthLastDay - i);
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    days.push(i);
  }

  for (let i = 1; i <= 42 - days.length; i++) {
    days.push(i);
  }

  let calendarDaysHTML = '';

  days.forEach((day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const isToday = date.toDateString() === new Date().toDateString();
    const isEvent = day % 2 === 0;

    calendarDaysHTML += `
      <div class="calendar-day${isToday ? ' today' : ''}${isEvent ? ' event' : ''}">
        ${day}
      </div>
    `;
  });

  calendarDaysEl.innerHTML = calendarDaysHTML;

  monthYearEl.innerHTML = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
}

renderCalendar();

nextBtnEl.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });
  
  prevBtnEl.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });