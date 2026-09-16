const themeToggleBtn = document.getElementById('theme-toggle');
const copyEmailBtn = document.getElementById('copy-email-btn');

// 1. Quản lý Dark/Light Theme
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggleBtn.addEventListener('click', () => {
  const activeTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = activeTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// 2. Xử lý Copy Email qua Clipboard API
const myEmail = 'phuongit.hoxuan@gmail.com';

copyEmailBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(myEmail).then(() => {
    const originalText = copyEmailBtn.innerText;
    copyEmailBtn.innerText = 'Đã sao chép! ✓';
    
    setTimeout(() => {
      copyEmailBtn.innerText = originalText;
    }, 1500);
  });
});