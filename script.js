let moviephrase ;
let favoriteMov =  "jaws";

switch(favoriteMov){
    case "jaws":
        moviephrase = "You're gonna need a bigger boat.";
    break;
    case "the shining":
        moviephrase =  "All work and no play makes Jack a dull boy.";
    break;
    case "star wars":
        moviephrase =  "Do. Or do not. There is no try.";
    break;
    case "forrest gump":
        moviephrase = "Life was like a box of chocolates.";
    break;    
    case "back to the future":
        moviephrase = "Where we're going, we don't need roads.";
    break;
    default:
        moviephrase = "Great movie choice!"; 
           
    }
    console.log(moviephrase);
