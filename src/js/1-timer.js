import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
   
  const refs = {
        startButton: document.querySelector('[data-start]'),
        dateTimePicker: document.querySelector('#datetime-picker'),
        days: document.querySelector('[data-days]'),
        hours: document.querySelector('[data-hours]'),
        minutes: document.querySelector('[data-minutes]'),
        seconds: document.querySelector('[data-seconds]'),
    };
    let userSelectedDate;
    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            userSelectedDate = selectedDates[0];
            if (userSelectedDate <= new Date()) {
                iziToast.error({
                    title: 'Error',
                    message: 'Please choose a date in the future',
                    position: 'topRight',
                    backgroundColor: '#ef4040',
                    theme: 'dark',
                });
                refs.startButton.disabled = true;
            } else {
                refs.startButton.disabled = false;
            }
        },
    };
    
    flatpickr(refs.dateTimePicker, options);
    refs.startButton.disabled = true;

    refs.startButton.addEventListener('click', () => {

        refs.startButton.disabled = true;
        refs.dateTimePicker.disabled = true

        const targetDate = new Date(userSelectedDate).getTime();

        const timerInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeLeft = targetDate - currentTime;
    
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                refs.startButton.disabled = false;
            refs.dateTimePicker.disabled = false;

                refs.days.textContent = '00';
                refs.hours.textContent = '00';
                refs.minutes.textContent = '00';
                refs.seconds.textContent = '00';
                return;
            }
    
            const time = convertMs(timeLeft);
            getTime(time);
        }, 1000);

    });

    function getTime ({ days, hours, minutes, seconds }) {
        refs.days.textContent = addLeadingZero(days);
        refs.hours.textContent = addLeadingZero(hours);
        refs.minutes.textContent = addLeadingZero(minutes);
        refs.seconds.textContent = addLeadingZero(seconds);
    }
    function addLeadingZero(value) {
        return String(value).padStart(2, '0');
      }


    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      
      
