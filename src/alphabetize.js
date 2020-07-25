/**
 * Quickly alphabetize a list of strings
 * @param {String} stringsId 
 * @param {String} resultId 
 */

function alphabetizeNewlines(stringsId, resultId) {

    // Grab value of textarea and split each element by newlines to create an array of strings
    var stringsArray = document.getElementById(stringsId).value.split("\n");

    // Sort the array of strings and display it
    document.getElementById(resultId).innerHTML = stringsArray.sort();

}

function alphabetizeCommas(stringsId, resultId) {

    // Grab value of textarea and split each element by commas to create an array of strings
    var stringsArray = document.getElementById(stringsId).value.split(",");

    // Sort the array of strings and display it
    document.getElementById(resultId).innerHTML = stringsArray.sort();

}