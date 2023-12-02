function toggleTheme() {
    if (localStorage.getItem('theme') == 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    setTheme();
}

function setTheme() {
    light_mode_icon = document.getElementById('light-mode-icon');
    dark_mode_icon = document.getElementById('dark-mode-icon');
    if (localStorage.getItem('theme') == 'dark') {
        document.documentElement.classList.add('dark');
        light_mode_icon.classList.add('hidden');
        dark_mode_icon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        light_mode_icon.classList.remove('hidden');
        dark_mode_icon.classList.add('hidden');
    }
}

setTheme();
