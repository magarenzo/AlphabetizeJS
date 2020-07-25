/**
 * Quickly alphabetize a list of strings
 * @param {String} stringsId 
 * @param {String} resultId 
 */

function alphabetize(stringsId, resultId) {

    // Grab value of textarea, replace newline characters with commas
    var textArea = document.getElementById(stringsId).value.replace(/\n/g, ",");

    // Convert string to array by splitting elements on commas
    var stringsArray = textArea.split(",");

    // Alphabetize array in case-insensitive manner
    stringsArray.sort(function(a, b) {
        return a.localeCompare(b, "en", { "sensitivity": "base" });
    });

    // Display sorted list of strings
    document.getElementById(resultId).innerHTML = stringsArray;

}