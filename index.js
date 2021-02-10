let nombre = "Juan Carlos y soy Frontend Developer.";
let i = 0;

const typing = () => {

     if ( i < nombre.length) {
    
        document.getElementById("name").innerHTML += nombre.charAt(i);
        i++;
        setTimeout(typing, 100);
           
    }
}

typing();

