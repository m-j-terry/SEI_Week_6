const test = 'THE Mole had been working very hard all the morning, spring-cleaning his little home. First with brooms, then with dusters; then on ladders and steps and chairs, with a brush and a pail of whitewash; till he had dust in his throat and eyes, and splashes of whitewash all over his black fur, and an aching back and weary arms. Spring was moving in the air above and in the earth below and around him, penetrating even his dark and lowly little house with its spirit of divine discontent and longing. It was small wonder, then, that he suddenly flung down his brush on the floor, said, "Bother!" and "O blow!" and also "Hang spring-cleaning!" and bolted out of the house without even waiting to put on his coat. Something up above was calling him imperiously, and he made for the steep little tunnel which answered in his case to the gravelled carriage-drive owned by animals whose residences are nearer to the sun and air. So he scraped and scratched and scrabbled and scrooged, and then he scrooged again and scrabbled and scratched and scraped, working busily with his little paws and muttering to himself, "Up we go! Up we go!" till at last, pop! his snout came out into the sunlight and he found himself rolling in the warm grass of a great meadow.'
// Create a function called mostFrequentWord(paragraph)that takes a string as input and returns the most frequently used word.
const wordFrequency = {}
function mostFrequentWord(str) {
// To handle the capitalization, convert the input paragraph to lowercase using the toLowerCase()method.
    str = str.toLowerCase()
    str = str.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`"~()]/g, '')
// Split the paragraph into an array of words and create a frequency counter object to keep track of the word occurrences.
    const arr = Array.from(str.split(' ', str.length))
// Iterate through the words and update the frequency counter object accordingly.
    for (let el of arr) {
        if (!wordFrequency[el]) {
            wordFrequency[el] = 1
        } else {
            wordFrequency[el] += 1
        }
    }
    // Create a new array from the wordFrequency values; store the index value of the highest number from the counter; use this index value to return the word which is most often used.
const keysArr = Array.from(Object.keys(wordFrequency))
const valuesArr = Array.from(Object.values(wordFrequency))
const indexVal = valuesArr.indexOf(Math.max(...valuesArr))
return `The most common word in the string is '${keysArr[indexVal]}', it occurs ${Math.max(...valuesArr)} times.`
}

console.log(mostFrequentWord(test))