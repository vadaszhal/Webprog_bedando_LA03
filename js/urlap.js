document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefonszam = document.getElementById('telefonszam').value.trim();
    var urhajo = document.getElementById('urhajo').value.trim();
    var kuldetes = document.getElementById('kuldetes').value.trim();
 
  
    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');
  
    
    errorMessage.textContent = "";
    successMessage.textContent = "";
  
    
    if (!name || !email || !telefonszam || !urhajo ) {
              errorMessage.textContent = "Kérjük, töltse ki az összes mezőt!";
      return;
    }
    
   
    if (name.length < 10) {
      errorMessage.textContent = "A név legalább 10 karakter hosszúnak kell lennie!";
      return;
    }
    if (email.length < 10) {
      errorMessage.textContent = "Az e-mail legalább 10 karakter hosszúnak kell lennie!";
      return;
    }
    if (telefonszam.length < 10) {
      errorMessage.textContent = "A telefonszám legalább 10 karakter hosszú kell lennie!";
      return;
    }
    if (urhajo.length < 10) {
      errorMessage.textContent = "Az űrhajó mező legalább 10 karakter hosszúnak kell lennie!";
      return;
    }
    if (kuldetes.length < 10) {
      errorMessage.textContent = "A küldetés mező legalább 10 karakter hosszúnak kell lennie!";
      return;
    }
    
    
   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.textContent = "Kérjük, érvényes e-mail címet adjon meg!";
      return;
    }
    
    
    successMessage.textContent = "Sikeres jelentkezés!";
    document.getElementById('contactForm').reset();
  });