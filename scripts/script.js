document.getElementById('hamburger').addEventListener('click', function() {
    // Toggle the 'show' class only on the links other than 'Home' and 'Hamburger'
    document.querySelectorAll('.navbar a:not(#home-button):not(#hamburger)').forEach(function(link) {
        link.classList.toggle('show');
    });
});