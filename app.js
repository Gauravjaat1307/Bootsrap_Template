document.addEventListener('DOMContentLoaded', (e) => {
    
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const overlay = document.getElementById('overlay');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuToggle.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    closeMenu.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

     dropdownToggle.addEventListener('click', (e) => {
         e.stopPropagation();
         dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
     });

     document.addEventListener('click', () => {
         dropdownMenu.style.display = 'none';
     });

     dropdownMenu.addEventListener('click', (e) => {
         e.stopPropagation();
     });
});
