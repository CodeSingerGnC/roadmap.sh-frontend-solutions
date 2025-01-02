import datepicker from 'js-datepicker';
import { DateTime } from "luxon";

// datepicker
import 'js-datepicker/dist/datepicker.min.css';

const today = DateTime.now().toJSDate();
const picker = datepicker('#datePicker', {
    startDate: new Date(), // 默认开始日期
    maxDay: today,
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString();
        input.value = value; // 自定义格式化
    },
});

const luxonNow = DateTime.now();
const jsNow = luxonNow.toJSDate();

picker.setDate(jsNow);

// datecount

const form = document.getElementById('dateForm');
const dynamic = document.getElementById('dynamic');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const inputDate = document.getElementById('datePicker').value;

    if(inputDate) {
        const format = "yyyy/M/d";
        const selectedDate = DateTime.fromFormat(inputDate, format);
        const now = DateTime.now();

        const diff = now.diff(selectedDate, ['year', 'months']);
        const years = Math.floor(diff.years);
        const months = Math.floor(diff.months);

        dynamic.textContent = `${years} years ${months} months`;
    }
});

