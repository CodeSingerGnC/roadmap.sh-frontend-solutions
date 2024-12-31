const cookiePopup = document.getElementById('cookiePopup');
const acceptButton = document.getElementById('acceptCookies');
const closeButton = document.getElementById('closePopup');

const isCookieAccepted = localStorage.getItem('cookieAccepted');

if(!isCookieAccepted) {
    cookiePopup.classList.remove('hidden');
}

window.alert(isCookieAccepted);
window.alert(cookiePopup.classList);

acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    cookiePopup.classList.add('hidden')
});

closeButton.addEventListener('click', ()=>{
    cookiePopup.classList.add('hidden');
});
