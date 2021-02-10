const miNombre = document.getElementById("name");
const navbar = document.querySelector(".header-a");

let nombre = "Juan Carlos y soy Frontend Developer.";
let i = 0;

const typing = () => {
    
     if ( i < nombre.length) {
    
        miNombre.innerHTML += nombre.charAt(i);
        i++;
        setTimeout(typing, 100);
        
    }

}
typing();

navbar.addEventListener('click', () => {
    miNombre.innerText = '';
    i = 0;
    typing();
} );

