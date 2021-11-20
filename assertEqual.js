const greenEmoji = String.fromCodePoint(9989);
const redEmoji = String.fromCodePoint(10060);

const assertEqual = (actual, expected) => {
    if(actual === expected) {
        console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${actual} !== ${expected}`);
    }
}

// Export assertEqual
module.exports = assertEqual