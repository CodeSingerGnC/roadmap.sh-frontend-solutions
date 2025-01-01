const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

const maxChars = 250;

textarea.addEventListener('input', ()=>{
    const currentLength = textarea.value.length;

    charCount.textContent = `${currentLength} / ${maxChars}`;

    if (currentLength >= maxChars) {
        textarea.classList.add('limit-reached'); // 添加红色边框
    } else {
        textarea.classList.remove('limit-reached'); // 移除红色边框
    }
});