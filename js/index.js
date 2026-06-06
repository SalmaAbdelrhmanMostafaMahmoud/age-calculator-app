const day_input = document.getElementById('day');
const month_input = document.getElementById('month');
const year_input = document.getElementById('year');
const year_output = document.getElementById('year_output');
const month_output = document.getElementById('month_output');
const day_output = document.getElementById('day_output');
const btn_form = document.querySelector('.age-calculator__btn');
const theme_toggle = document.getElementById('theme_toggle');
btn_form.addEventListener('click', (e) => {
   e.preventDefault();
      const currentYear=new Date().getFullYear();
   let valid = true;
   if (day_input.value.trim() === "") {
      day_input.parentElement.classList.add('invalid');
      day_input.parentElement.querySelector('.age-calculator__error-message').innerText = `This field is required`;
      valid = false
   } else if (parseInt(day_input.value) < 1 || parseInt(day_input.value) > 31) {
      day_input.parentElement.classList.add('invalid');
      day_input.parentElement.querySelector('.age-calculator__error-message').innerText = `Must be a valid day`;
      valid = false
   }
   else {
      day_input.parentElement.classList.remove('invalid');
      day_input.parentElement.querySelector('.age-calculator__error-message').innerText = ``
   }
   if (month_input.value.trim() === "") {
      month_input.parentElement.classList.add('invalid');
      month_input.parentElement.querySelector('.age-calculator__error-message').innerText = `This field is required`;
      valid = false
   } else if (parseInt(month_input.value) < 1 || parseInt(month_input.value) > 12) {
      month_input.parentElement.classList.add('invalid');
      month_input.parentElement.querySelector('.age-calculator__error-message').innerText = `Must be a valid month`;
      valid = false
   }
   else {
      month_input.parentElement.classList.remove('invalid');
      month_input.parentElement.querySelector('.age-calculator__error-message').innerText = ``
   }
   if (year_input.value.trim() === "") {
      year_input.parentElement.classList.add('invalid');
      year_input.parentElement.querySelector('.age-calculator__error-message').innerText = `This field is required`;
      valid = false
   } else if (parseInt(year_input.value) < 1000 || parseInt(year_input.value) > currentYear) {
      year_input.parentElement.classList.add('invalid');
      year_input.parentElement.querySelector('.age-calculator__error-message').innerText = `Must be a valid year`;
      valid = false
   }
   else {
      year_input.parentElement.classList.remove('invalid');
      year_input.parentElement.querySelector('.age-calculator__error-message').innerText = ``
   }
   const birthDay = parseInt(day_input.value);
   const birthMonth = parseInt(month_input.value);
   const birthYear = parseInt(year_input.value);
   const testDate= new Date(birthYear, birthMonth - 1, birthDay);
   const accurateDay= testDate.getDate();
   if(birthDay!==accurateDay){
day_input.parentElement.classList.add('invalid');
   day_input.parentElement.querySelector('.age-calculator__error-message').innerText = `Must be a valid date`;
   valid = false;
   }
     if (!valid) {
      return ""
   }
   const today = new Date();
   const lastDayOfPreviousMonth=new Date(birthYear,birthMonth-1,0).getDate();
   let day = today.getDate();
   let month = today.getMonth() + 1;
   let year = today.getFullYear();
   if (day < birthDay) {
      day +=lastDayOfPreviousMonth;
      month -= 1
   };
   if (month < birthMonth) {
      month += 12;
      year -= 1
   };
   const calculatedDay = day - birthDay;
   const calculatedMonth = month - birthMonth;
   const calculated_Year = year - birthYear;
   year_output.textContent = calculated_Year;
   month_output.textContent = calculatedMonth;
   day_output.textContent = calculatedDay;

})
theme_toggle.addEventListener('click', () => {
   document.body.classList.toggle('dark-theme');
   theme_toggle.classList.toggle('active')
})