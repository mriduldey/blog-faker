// Make each word's first letter of a sentence Capital
// ex. "word power made easy" --> "Word Power Made Easy"; "WORD POWER" --> "Word Power"
export function capitalise(text) {
  return text
    .split(" ")
    .map(word =>
      word[0]
        .toUpperCase()
        .concat(word.slice(1, word.length).toLocaleLowerCase())
    )
    .join(" ");
}
