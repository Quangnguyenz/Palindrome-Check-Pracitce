function getValue(){
    //make sure the box is invisble 
    document.getElementById("alert").classList.add("invisible");
    //get user string from the page
    let inputWord = document.getElementById("inputWord").value;

    //check for a palindrome
    let returnObj = checkForPalindrome(inputWord);
    
    //display out message
    displayMessage(returnObj);

}

//check for a palindrome
function checkForPalindrome(userString){
    userString = userString.toLowerCase();
    
    //remove spaces and special characters 
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "")


    let revString = [];
    let returnObj = {};
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
        
    }

    if(revString == userString){
        returnObj.msg="Well Done! you entered a Palindrome!";
    }
    else{
        returnObj.msg = "sorry! you did not enter a palindrome";
    }

    returnObj.reverse = revString;

    return returnObj;
}

//display message to the string
function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is ${returnObj.reverse}`;
    document.getElementById("alert").classList.remove("invisible"); 
}