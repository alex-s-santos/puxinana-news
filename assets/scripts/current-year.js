let time = new Date;
let currentYear = time.getFullYear();
let footerCurrentYear = document.querySelector("#footer-current-year");

footerCurrentYear.innerHTML = currentYear;