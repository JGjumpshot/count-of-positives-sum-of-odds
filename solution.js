function countPositivesSumNegatives(input) {
    //initialize variables
    var evens = [];
    var odds = [];
    var result = [];
    var sumOfOdds = 0;
    var count = 0;

    for (var i = 0; i < input.length; i++) { //loop through and find all even numbers
        if (input[i] % 2 === 0) { // if even push it into the evens array
            //console.log(i);
            evens.push(input[i]); //evens push
            //console.log(evens);
            count++; //increment the count of how many indices were pushed
        } else {
            odds.push(input[i]); //if odd push into the odds array
            //console.log(odds);
            sumOfOdds += input[i]; //add each each of the indices together
            //console.log(sumOfOdds);
        }
    }

    result.push(count); //push results into an array that is empty first the number of even indices
    result.push(sumOfOdds); //next push the sum of odds

    return result; //return the result
}

countPositivesSumNegatives([4, 22, 5, 6, 3, 7]); //data
