var assertEqual = require('./assertEqual');

const head = (arr) => {
    return arr[0];
} 

// Test the head function with assertEqual
assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthosue', 'Labs']), 'Hello');
assertEqual(head([5,6,7]), 9);