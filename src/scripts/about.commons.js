document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button[aria-expanded]');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'hidden md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-50';
    mobileMenu.innerHTML = `
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" class="block px-3 py-2 text-gray-900 hover:text-blue-600">Home</a>
            <a href="#" class="block px-3 py-2 text-blue-600 border-l-4 border-blue-600">About</a>
            <a href="#" class="block px-3 py-2 text-gray-900 hover:text-blue-600">Services</a>
            <a href="#" class="block px-3 py-2 text-gray-900 hover:text-blue-600">Doctors</a>
            <a href="#" class="block px-3 py-2 text-gray-900 hover:text-blue-600">Contact</a>
            <a href="#" class="block px-3 py-2 bg-blue-600 text-white rounded-md mx-3 mt-2">Book Appointment</a>
        </div>
    `;
    document.querySelector('nav').appendChild(mobileMenu);
    
    let isMenuOpen = false;
    
    mobileMenuButton.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (isMenuOpen) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
                    isMenuOpen = false;
                }
            }
        });
    });
});