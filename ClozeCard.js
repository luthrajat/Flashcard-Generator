
function ClozeCard(text, cloze) {
	// Validate if cloze is part of the main text.
        if (text.indexOf(cloze) >= 0) {
            this.partialText = text.replace(cloze, '...');
        } else {
            throw new Error("Please provide a valid cloze.");
        }
        this.text = text;
        this.cloze = cloze;
}

module.exports = ClozeCard;
