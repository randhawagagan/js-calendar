//!------HTML
<div class="calendar">
  <div class="days"></div>
</div>


  <div class="calendar">
    <span class="year"></span> <!-- year -->
  <span class="month"></span> <!-- month-->
  <div class="week-days"> <!-- show week days -->
    <b>Su</b><b>Mo</b><b>Tu</b><b>We</b><b>Th</b><b>Fr</b><b>Sa</b>
    </div>
    <div class="days"></div>
  </div>
///----->

//----CSSS
.calendar { width: 250px; }
.calendar.days button {
  width: calc(100 % / 7);}
//-->


function getLeadingDays(date, staDay = 0) { // 0: sunday
      const ret = [];
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstWeekday = new Date(year, month, 1).getDay();
      const days = (firstWeekday + 7) - (staDay + 7) - 1;
      for (let i = days * -1; i <= 0; i++) {
        ret.push(new Date(year, month, i).getDate());
      }
      return ret;
    }
// getLeadingDays(new Date('2019-02-15')) // [27, 28, 29, 30, 31]
// getLeadingDays(new Date('2019-03-15')) // [24, 25, 26, 27, 28]

function getMonthDays(date) {
      const ret = [];
      const year = date.getFullYear();
      const month = date.getMonth();
      const lastDay = new Date(year, month + 1, 0).getDate();
      for (let i = 1; i <= lastDay; i++) ret.push(i);
      return ret;
    }
// getMonthDays(new Date('2019-02-15')) // [1,2...28]
// getMonthDays(new Date('2019-03-15')) // [1,2,...31]

function getTrailingDays(leadingDays, monthDays) {
      const ret = [];
      const days = 42 - (leadingDays.length + monthDays.length);
      for (let i = 1; i <= days; i++) ret.push(i);
      return ret;
    }
// For March 2019, it will be 42 days
//  minus 5 days for the previous month days, 24th .. 28th,
//  miuns, 31 days for days of this month
// Thus, It would be 6 days. (42 - 5 - 31)


function showCalendar(year, month) {
      const date = new Date(year, month + 1, 1);
      const daysPrevMonth = getLeadingDays(date);
      const daysThisMonth = getMonthDays(date);
      const daysNextMonth = getTrailingDays(daysPrevMonth, daysThisMonth);
      const daysEl = document.querySelector('.calendar .days');
      [...daysPrevMonth, ...daysThisMonth, ...daysNextMonth]
        .forEach(num => {
          daysEl.insertAdjacentHTML('beforeend',
            `<button>${num}</button>`
          );
        });
    }
showCalendar(2019, 3);




  const monthEl = document.querySelector('.calendar .month'); const yearEl = document.querySelector('.calendar .year');
  monthEl.innerHTML = monthNames[date.getMonth()];
  yearEl.innerHTML = date.getFullYear();
