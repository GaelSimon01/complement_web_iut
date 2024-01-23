
    HTML : afin de structurer des éléments textuels du document
    CSS : mettr e en forme le document
    JS : Gestion des interactions utlisateurs dans le document

il faut mettre le js apres le code html car celui ci doit etre charger avant de pouvoir etre modifier

l'attribut defer de script doit erte utiliser uniquemetn si le script est externe  : ```<script src="...">```

les console.log permettent de deboguer le code js, de meme les console.trace permette de savoir qui a appeler

Peut être déclaré en utilisant :

    let : à une portée de bloc
    const : constant, ne peut pas être changé, immuable
    var : à l’ancienne, nous le verrons plus tard

Un nom de variable peut inclure :

    Lettres et chiffres, mais le premier caractère ne peut pas être un chiffre.
    Les caractères $ et _ sont normaux, à égalité avec les lettres.
    Les alphabets et les hiéroglyphes non latins sont également autorisés, mais ils ne sont généralement pas utilisés.
    Les variables sont typées dynamiquement. Elles peuvent stocker n’importe quelle valeur :

Il y a 8 types de données :

    number pour les nombres à virgule flottante et les nombres entiers,
    bigint pour des nombres entiers de longueur arbitraire,
    string pour les chaînes de caractères,
    boolean pour les valeurs logiques : true/false,
    null – un type avec une seule valeur null, signifiant “vide” ou “n’existe pas”,
    undefined – un type avec une seule valeur undefined, signifiant “non assigné”,
    object et symbol – pour les structures de données complexes et les identifiants uniques, nous ne les avons pas encore appris.

les chaines de caractere : 
    
    let str = "Hello";
    let str2 = 'Single quotes are ok too';
    let phrase = `can embed another ${str}`;

