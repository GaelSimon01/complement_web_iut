let button = document.querySelector('button');
button.addEventListener('click', function(e){
    let paragraphe = document.querySelector('p');
    paragraphe.classList.remove('design');
});

"ECMAScript" == prompt("quel est le nom officiel de javascript") ? alert("bien joué") : alert("non")

let a = +prompt('a?', ''); // + permet de caster en nombre le résultat du prompt
switch(a){

    case 0:
        alert( 0 );
    case 1:
        alert( 1 );
    case 2,3:
        alert( '2,3' );

};



