function toggleDetails(button) {
    const details = button.parentElement.nextElementSibling.querySelector('.details');
    if (details.style.display === 'block') {
        details.style.display = 'none';
        button.textContent = 'إظهار التفاصيل';
    } else {
        details.style.display = 'block';
        button.textContent = 'إخفاء التفاصيل';
    }
}
