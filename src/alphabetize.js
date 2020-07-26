/**
 * Quickly alphabetize a list of strings
 * @param {String} wordsId
 * @param {String} resultId
 */

function alphabetize(wordsId, resultId) {

    // Grab value of textarea, replace newline characters with commas
    var textArea = document.getElementById(wordsId).value.replace(/\n/g, ",");

    // Convert string to array by splitting elements on commas
    var wordsArray = textArea.split(",");

    // Alphabetize array in case-insensitive manner
    wordsArray.sort(function(a, b) {
        return a.localeCompare(b, "en", { "sensitivity": "base" });
    });

    // Convert array to string, add spaces between strings
    var wordsString = wordsArray.toString().replace(/,/g, ", ");

    // Display sorted list of words
    document.getElementById(resultId).innerHTML = wordsString;

}