//dates 
const date  = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
const months= ["January" , "Febuary" , "March" , "April" , " May" , "June" ,"July" ,"August" , "September" , "October" , "November" , "December"];
//dom element
const monthYear = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn= document.getElementById("next-month");
const calendarDates = document.querySelector('.calendar-dates');

//renderCalendar

function renderCalendar(month , year){
    //clearing the dom
    calendarDates.innerHTML = "";
    //adding the month and year to the dom
    monthYear.textContent = `${months[month]} ${year}`;
    //getting the day index of the first day of month
    const firstDay = new Date(year , month , 1).getDay();
    //getting totalDates in the month
    const totalDates = new Date(year , month+1 , 0).getDate();
    //appending the blank space 
    for(let i = 0 ; i < firstDay ; i++){
        const blank = document.createElement("div");
        calendarDates.appendChild(blank);
    }
    //getting today 
    const today = new Date();
    //appending dates in the calender
    for(let i = 1 ; i <=totalDates ; i++){
        const date = document.createElement("div");
        date.innerText = i;
        // console.log(today.getDate() );
        // console.log(today.getMonth() );
        // console.log(today.getFullYear)
        if( i === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
            date.classList.add('current-date');
        }
        date.classList.add('dates');
        calendarDates.appendChild(date);
    }
}

renderCalendar(currentMonth , currentYear);

//eventListeners
prevMonthBtn.addEventListener('click' , ()=>{
    currentMonth--;
    if(currentMonth<0){
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth , currentYear);
})
nextMonthBtn.addEventListener('click' , ()=>{
    currentMonth++;
    if(currentMonth>11){
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth , currentYear);
})


