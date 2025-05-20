<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Navigation functionality
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the page to show
                const pageId = this.getAttribute('data-page');
                
                // Hide all pages
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show the selected page
                document.getElementById(pageId).classList.add('active');
                
                // Update active navigation link
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // Set clicked link as active
                this.classList.add('active');
                
                // Scroll to top when changing pages
                window.scrollTo(0, 0);
            });
        });
        
        // Handle buttons that navigate to different pages
        const pageButtons = document.querySelectorAll('.btn[data-page]');
        pageButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const pageId = this.getAttribute('data-page');
                const targetNavLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
                
                if (targetNavLink) {
                    targetNavLink.click();
                }
            });
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real site, you would handle form submission here
                // For demo purposes, we'll just show an alert
                alert('Thank you for your message! In a real implementation, this form would send your information to a server.');
                contactForm.reset();
            });
        }
        
        // Responsive features
        function handleResponsiveLayout() {
            const width = window.innerWidth;
            // Add any specific responsive behavior here if needed
        }
        
        // Initial call and event listener for resize
        handleResponsiveLayout();
        window.addEventListener('resize', handleResponsiveLayout);
    });
</script>
