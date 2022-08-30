
function myFunction() {
    alert("Hello From Mister");
    let catResponse = prompt("Are You a Cat Lover?");
    if (catResponse=="yes"){
        document.write ("WooHoo! Welcome!")
    }else if (catResponse=="no"){
        document.write ("Bummer! Cat Lovers Are Cool")
    }
}

function yourDecision() {//function definition
    const myCat = confirm("Do You Want to See Photos of my cat, Mister?");//taking confirm action from user if (black cat==true) //if press yes then value is true
    console.log('This is my Cat >',myCat)
    if (myCat == true){ 
        document.write("Excellent! You're in the Right Place");//
    }else if (myCat == false){
        document.write ("Sorry to Hear That! Take Care!");
    }
}

function blackCat() {//function definition
    const blackCat = confirm("Are You Superstitious of Black Cats?");//
    if (blackCat == true){
        document.write("Fair Warning: Mister is a Black Cat");//
    }else if (blackCat == false){
        document.write ("Great! Mister is a Black Cat and Only Brings Good Luck!");//


    }

}








