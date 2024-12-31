const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        tabs.forEach(t => {
            t.classList.remove('active')
            contents.forEach(content => {
                content.classList.add('hidden');
            });
        });

        tab.classList.add('active');
        const tabNumber = tab.getAttribute('data-tab');
        document.getElementById(`content-${tabNumber}`).classList.remove('hidden')
    });
});
