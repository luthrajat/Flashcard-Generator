
/**
1. The **full text**. This is the entire sentence users need to remember:  _"George Washington was the first president of the United States."_
2. The **cloze deletion**. This is the text we've chosen to remove: _"George Washington"_.
3. The **partial text**. This is what we get if we remove the **cloze deletion** from the **full text**: _"... was the first president of the United States._
*/

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var basicCard = new BasicCard("George Washington was the first president of the United States.", 'George Washington');
var clozeCard = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');

// Basic Card
console.log("\nBasic Card:\n");
console.log("\tFront Text:\t", basicCard.front);
console.log("\tBack Text:\t", basicCard.back);

// Cloze Card
console.log("\n\nCloze Card:\n");
console.log("\tQuestion Text:\t", clozeCard.partialText);
console.log("\tCloze Text:\t", clozeCard.cloze);
console.log("\tFull Text:\t", clozeCard.text);
console.log("\n");
