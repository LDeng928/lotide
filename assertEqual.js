const greenEmoji = String.fromCodePoint(9989);
const redEmoji = String.fromCodePoint(10060);

const assertEqual = (actual, expected) => {
    if(actual === expected) {
        console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${actual} !== ${expected}`);
    }
}

// Test assertEqual function
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual('hello', 'hello');
// assertEqual('lighthouselab', 'bootstrap');
// assertEqual(1, 'lighthouselab');

// Export assertEqual
module.exports = assertEqual