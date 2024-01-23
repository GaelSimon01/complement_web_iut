let button = document.querySelector('button');
button.addEventListener('click', function(e){
    let paragraphe = document.querySelector('p');
    paragraphe.classList.remove('design');
});

"ECMAScript" == prompt("quel est le nom officiel de javascript") ? alert("bien joué") : alert("non")

switch(+prompt('a?', '')){

    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
        alert( '2,3' );
        break;
    case 3 :
        alert( '2,3' );
        break;
    default:
        alert("nope")
};

alert(null ?? false);
let i =0;

do{
    i++;
    console.log(i)
}while(i<10);


function pow(x,n){
    let val=1;
    for(let i=0;i<n ;i++){
        val=val*x
    }
    return val;
}

alert(pow(+prompt("valeur a multiplier"),+prompt("la puissance")))

let fruits = ["Apple", "Orange", "Plum"];
// itère sur des éléments de tableau
for (let fruit of fruits) {
  console.log( fruit );
}


var best = ["Javascript","CSS"];
console.info(best);
best.push("PHP");
console.info(best);
best[Math.ceil((best.length-1)/2)]="SCSS";
console.info(best);
alert(best[0]);
best.push("Python");
console.info(best);


let vals = [];
function calculSumInput(){
    let fin = true;
    while(fin){
        let input = prompt("entrez valeur");
        if(isNaN(input) || input=="" || input==null){
            fin=false;
        }
        else{
            vals.push(parseInt(input));
            let res=0;
            for( let num of vals){
                res+=num;
            }
            console.info(res)
        }
    }

}


calculSumInput();



