const daysContainer=document.querySelector(".days");
nextBtn = document.querySelector(".nextBtn");
prevBtn = document.querySelector(".prevBtn");
month = document.querySelector(".month");
todaybtn = document.querySelector(".todayBtn");

const months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const days= ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];

// get current date 
const date = new Date();
// get current month
let currentMonth = date.getMonth()
// get current year
let currentYear = date.getFullYear();

// function to render days 
function renderCalendar(){
    date.setDate(1);
    const firstDay = new Date(currentYear,currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear,currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex -1;
    // update current year and month in header
    month.innerHTML =`${months[currentMonth]}  ${currentYear}`;
    //  update days html 
    let days ="";

    // prev days html
    for (let x = firstDay.getDay(); x > 0; x--){
        days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
    }
    // current month days
    for (let i = 1; i <= lastDayDate; i++){
        //  check if its today then add today class 
        if (
            i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ){
            // if date month year matches add today
            days += `<div class="day today"> ${i}</div>`;
        }else{
            days += `<div class="day"> ${i}</div>`;

        }
    }
    // next days update 
    for ( let j = 1; j<= nextDays; j++){
        days +=`<div class="day next">${j}</div>`;
    }
    hideFunction()
    // calendar update here 
    daysContainer.innerHTML=days;
}

renderCalendar();


nextBtn.addEventListener("click", ()=>{
    // current month
    currentMonth++;
    if(currentMonth > 11){
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});
prevBtn.addEventListener("click", ()=>{
    // current month
    currentMonth--;
    if(currentMonth < 0){
        currentMonth = 11;
        currentYear++;
    }
    renderCalendar();
});
todaybtn.addEventListener("click", () => {
    // current month
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();

    renderCalendar();
});

function hideFunction(){
    if(currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
        todaybtn.style.display = "none";
        
    }else{
        todaybtn.style.display = "flex";
    }
    
};
