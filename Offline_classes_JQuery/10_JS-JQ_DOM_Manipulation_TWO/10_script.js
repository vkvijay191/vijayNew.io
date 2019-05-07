// Example 1 Count the Zeros
$('#inputField-1').keyup(function () {
   $('#output-1').text(countZeros($(this).val()));
});

// Example 2 Reverse String
$('#inputField-2').keyup(function () {
   $('#output-2').text(reverseString($(this).val()))
});

// Example 3
$('#inputField-3').keyup(function () {
    $('#output-3').text(isPalindrome($(this).val()))
});

// Example 4
$('#inputField-4').keyup(function () {
    $('#output-4').text(convertToPalindrome($(this).val()))
});

// Example 5
$('#inputField-5').keyup(function () {
    $('#output-5').text(triangleOne($(this).val()))
});

// Example 6
$('#inputField-6').keyup(function () {
    $('#output-6').text(triangleTwo($(this).val()))
});

// Example 7
$('#inputField-7').keyup(function () {
    $('#output-7').text(triangleThree($(this).val()))
});

// Example 8
$('#inputField-8').keyup(function () {
    $('#output-8').text(triangleFour($(this).val()))
});

// Example 9
$('#inputField-9').keyup(function () {
    $('#output-9').text(displayWordNumbers($(this).val()))
});

// Example 10
$('#inputField-10').keyup(function () {
    $('#output-10').text(palindromeWord($(this).val()))
});