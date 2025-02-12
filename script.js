// script.js
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = window.innerHeight / 1.2;
  
      if (sectionTop < sectionVisible) {
        section.classList.add('animate__fadeInUp');
      }
    });
  });
  
  // Función para simular la subida de los certificados
  function uploadCertificates() {
    const files = document.getElementById('certificatesUpload').files;
    if (files.length > 0) {
      alert('Certificados subidos correctamente');
    } else {
      alert('Por favor, selecciona uno o más archivos');
    }
  }
  