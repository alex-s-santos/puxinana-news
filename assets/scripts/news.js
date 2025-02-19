let mainLink = document.querySelector("#main-news-link");
let mainImage = document.querySelector("#main-news-image");
let mainTitle = document.querySelector("#main-news-title");
let maintext = document.querySelector("#main-news-text");

mainImage.style.backgroundImage = "url(./assets/images/news-images/ubs-jenipapo.jpg)";
mainLink.setAttribute('url', 'https://www.google.com/maps/place/UBS+-+Jenipapo/@-7.1680832,-36.4695187,9z/data=!4m10!1m2!2m1!1subs+jenipapo!3m6!1s0x7ac21d1142c98c3:0xb5a45d72369c278d!8m2!3d-7.1680832!4d-35.909216!15sCgx1YnMgamVuaXBhcG-SARdjb21tdW5pdHlfaGVhbHRoX2NlbnRlcuABAA!16s%2Fg%2F11gsn6b70k?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D')
mainLink.setAttribute('target', '_blank')
mainTitle.innerHTML = 'Vacinas disponíveis';
maintext.innerHTML = 'UBS libera vacinas para gripe <br> <span style="color: red; font-size: 1.3rem">Saiba mais';