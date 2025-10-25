document.addEventListener('DOMContentLoaded', function (event) {
    console.log('load');

    // DÉROULEMENT DES SECTIONS VIA LE MENU
    document.querySelectorAll('a[href^="#"]').forEach($anchor => {
        $anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Fermer le menu burger si ouvert
            const menuBtn = document.getElementById('menu-toggle');
            if (menuBtn && menuBtn.checked) {
                menuBtn.checked = false;
            }

            // Calculer la position avec offset pour la navigation
            const navHeight = 80; // Hauteur de la navigation
            const targetPosition = targetElement.offsetTop - navHeight;

            // Pour la section accueil, aller directement au top
            if (targetId === 'acc') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } 
            // Pour la section contact, ajuster l'offset
            else if (targetId === 'contact') {
                const contactPosition = targetElement.offsetTop - 40; // Offset plus important
                window.scrollTo({
                    top: contactPosition,
                    behavior: 'smooth'
                });
            } 
            // Pour les autres sections, utiliser l'offset normal
            else {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});