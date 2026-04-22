function checkPlagiarism() {
    let text1 = document.getElementById("text1").value.toLowerCase();
    let text2 = document.getElementById("text2").value.toLowerCase();

    let words1 = text1.split(/\s+/);
    let words2 = text2.split(/\s+/);

    let matchCount = 0;
    let matchedWords = new Set();

    words2.forEach(word => {
        if (words1.includes(word)) {
            matchCount++;
            matchedWords.add(word);
        }
    });

    let similarity = (matchCount / words2.length) * 100;
    document.getElementById("percentage").innerText = similarity.toFixed(2) + "%";

    // Highlight matched words in text2
    let output = words2.map(word => {
        if (matchedWords.has(word)) {
            return `<span class="highlight">${word}</span>`;
        }
        return word;
    }).join(" ");

    document.getElementById("output").innerHTML = output;
}
