   function toOneDimension(previousValue, currentValue) {
       return currentValue.concat(previousValue);
   }

   var sampleArrayA = [
['A1', 'A2', 'A3'],
['B1', 'B2', 'B3'],
['C1', 'C2', 'C3'],
['D1', 'D2', 'D3']
];

   var sampleArrayB = sampleArrayA.reduce(toOneDimension);


   console.count(toOneDimension);
   console.log(sampleArrayB);


   for (var counterVar = 0; counterVar < sampleArrayB.length; counterVar++) {
       document.write('sampleArrayB[' + counterVar + ']: ');
       document.write(sampleArrayB[counterVar]);
       document.write('<br />');
   }
