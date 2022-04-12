// Event listener

document.getElementById("btnSubmit").addEventListener("click", getValues);

// Controller Function
function getValues(){


    document.getElementById("alert").classList.add("invisible")

    let userString = document.getElementById("userValue").value;

    isolatedString = userString.replace(/[^a-zA-Z\s]/gi, '').toLowerCase();
    isolatedString = isolatedString.replace(/\\/gi, '');

    let cString = checkString(isolatedString);


    displayString(cString, isolatedString);
        

}


// Logic Function
function checkString(userString){

    for (let index = 0; index < userString.length / 2; index++) {

        if (userString[index] != userString[userString.length - 1 - index]) {
            // return alert('It is not A Palindrom')
            return false;
        }

    }
    // return alert("Its a palindrome!")
    return true;
    
}

// View Function
function displayString(cString, userString){

    if (cString) {
        
        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("titleMsg").innerHTML = "Well done! You have entered a Palindrome!";
        document.getElementById("bodyMsg").innerHTML = `Your phrased reversed is: ${userString}`

    }else{

        document.getElementById("alert").classList.remove("invisible");
        document.getElementById("alert").classList.remove("alert-success")
        document.getElementById("alert").classList.add("alert-danger")
        document.getElementById("titleMsg").innerHTML = "Sorry! You did not enter a Palindrome! Try Again!";
        document.getElementById("bodyMsg").innerHTML = "";

    }


}