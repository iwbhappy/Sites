document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const htmlElement = document.documentElement;

    const currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    themeBtn.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('bg-black') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function applyTheme(theme) {
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    const logoText = document.getElementById('logo-text');

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.remove('bg-zinc-50', 'text-black');
        document.body.classList.add('bg-black', 'text-white');
        
        themeBtn.classList.remove('border-black/20');
        themeBtn.classList.add('border-white/20');
        themeIcon.textContent = "🌙";
        themeText.textContent = "Dark";
        
        if(logoText) {
            logoText.classList.remove('text-black');
            logoText.classList.add('text-white');
        }
    } else {
        
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('bg-black', 'text-white');
        document.body.classList.add('bg-zinc-50', 'text-black');
                
        themeBtn.classList.remove('border-white/20');
        themeBtn.classList.add('border-black/20');
        themeIcon.textContent = "☀️";
        themeText.textContent = "Light";

        if(logoText) {
            logoText.classList.remove('text-white');
            logoText.classList.add('text-black');
        }
    }
}

            });
