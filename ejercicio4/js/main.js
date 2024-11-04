let hidden = true;
        
function toggleText() {
    const additionalText = document.getElementById('myText');
    const link = document.getElementById('myButton');

    if (hidden) {
     // cambio texto a ocultar
     additionalText.classList.remove('hidden');
     additionalText.classList.add('visible');
     link.innerHTML = 'Ocultar texto';
    } else {
     // cambio texto a mostrar
     additionalText.classList.remove('visible');
     additionalText.classList.add('hidden');
     link.innerHTML = 'Mostrar texto';
    }

    hidden = !hidden;
    

}