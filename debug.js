console.log(1); // 1=>◯=>◯=>1


function toOneDimension(previousValue, currentValue) {
    console.log(sampleArrayA); // 4=>？=>4, 5
    return currentValue.concat(previousValue);
    console.log(3); // 5=>？

}
console.log(4); // 2=>◯=>◯=>2



var sampleArrayA = [
['A1', 'A2', 'A3'],
['B1', 'B2', 'B3'],
['C1', 'C2', 'C3']
];
console.log(5); // 3=>◯=>◯=>3


var sampleArrayB = sampleArrayA.reduce(toOneDimension);
console.log(6); // 6=>◯6


//console.log(sampleArrayA);
//console.log(sampleArrayB);
//console.log(toOneDimension);


console.log(7); // 7=>◯7
for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++) {
    console.log(sampleArrayA);
    document.write('sampleArrayB[' + counterVar + ']: ');
    document.write(sampleArrayB[counterVar]);
    document.write('<br />');

}
console.log(8); // 8=>◯8

console.log(9); // 9=>◯9


console.log(toOneDimension(sampleArrayA));