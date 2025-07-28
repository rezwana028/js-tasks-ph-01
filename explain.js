// ### Task - 4
//     Explain your answers.
// What will be the result of the following codes:

// **var a = isNaN(‘11’);**

// **var a = isNaN(2 - 10);**


var a = isNaN('11');
// console.log(a);   //[output is false]

for this case, the output is false.Because isNaN is used for judge the number which is assigned.If the input assigned part was string then it would show true as the output

Explanation:

'11' হলো একটি string, কিন্তু JavaScript এটিকে number - এ convert করতে পারে isNaN() চেক করে কোনো ভ্যালু NaN(Not - a - Number) কিনা। যেহেতু '11' string কে সংখ্যা ১১-তে রূপান্তর করা যায়, তাই এটি NaN নয়। ফলে output হবে: false.


var b = isNaN('bristi')
// console.log(b);       //[ output is true ]

bristi' একটি string যা সংখ্যায় রূপান্তরযোগ্য নয়।

তাই isNaN('bristi') → true রিটার্ন করে, কারণ এটি NaN.



var a = isNaN(2 - 10);
console.log(a);  // [ output is false]
//  also for this case the same method is working behind




