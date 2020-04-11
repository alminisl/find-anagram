let words = [
  "Old West action",
  "elegant man",
  "Dormitory",
  "integrals",
  "terracing",
  "Clint Eastwood",
  "below",
  "arc",
  "treason",
  "retracing",
  "Dirty room",
  "triangles",
  "senator",
  "wolf",
  "cratering",
  "thing",
  "Night",
  "Elbow",
  "gnarliest",
  "Flow",
  "A gentleman",
  "car"
]

let results = []
let anagramList = []

findWordInArray = (word) => {
  return results.find(elem => {
    return elem.word === word
  })
}

addWordToResult = (string, occurence, secondString) => {
  results.push({word: string, occurence: occurence + 1, anagramWords: [secondString]})
}

increaseNumberOfAnagrams = (foundWord, secondString) => {
  foundWord.occurence = foundWord.occurence + 1
  foundWord.anagramWords.push(secondString)
}

for (let i = 0; i < words.length; i++) {
  const string = words[i]
  let occurence = 0
  // Make the string lowerCase, remove spaces, split every 
  const alphabetical = string.toLowerCase().replace(/\s/g, '').split("").sort().join("")

  for (let j = 0; j < words.length; j++) {
    if (i === j) {
      continue
    }

    const secondString = words[j]
    const secondStringAlphabetical = secondString.toLowerCase().replace(/\s/g, '').split("").sort().join("")
    // Check if the first string and the second string have the same letters
    if (alphabetical === secondStringAlphabetical) {
      let foundWord = findWordInArray(string)

      // if word is found in the results, just increase the occurence of the word
      // else if the word is not found just add it to the result array
      if (foundWord) {
        increaseNumberOfAnagrams(foundWord, secondString)
      } else {
        addWordToResult(string, occurence, secondString)
       
      }
    }
  }
}

console.log(results.sort( (a,b) => { return b.occurence - a.occurence }))


