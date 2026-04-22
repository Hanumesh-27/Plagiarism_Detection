function cleanText(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, "");
}

function checkPlagiarism() {
    let t1 = cleanText(document.getElementById("text1").value);
    let t2 = cleanText(document.getElementById("text2").value);

    let words1 = t1.split(/\s+/).filter(w => w);
    let words2 = t2.split(/\s+/).filter(w => w);

    document.getElementById("w1").innerText = words1.length;
    document.getElementById("w2").innerText = words2.length;

    let matched = [];
    let matchCount = 0;

    words2.forEach(word => {
        if (words1.includes(word)) {
            matched.push(word);
            matchCount++;
        }
    });

    document.getElementById("matchCount").innerText = matchCount;

    let similarity = (matchCount / words2.length) * 100 || 0;
    document.getElementById("percentage").innerText = similarity.toFixed(2) + "%";

    document.getElementById("progress-bar").style.width = similarity + "%";

    let highlighted = words2.map(w => 
        matched.includes(w) ? `<span class="highlight">${w}</span>` : w
    ).join(" ");

    document.getElementById("output").innerHTML = highlighted;
}

function clearAll() {
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("percentage").innerText = "0%";
    document.getElementById("progress-bar").style.width = "0%";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

// File Upload
document.getElementById("file1").addEventListener("change", function(e) {
    let reader = new FileReader();
    reader.onload = () => document.getElementById("text1").value = reader.result;
    reader.readAsText(e.target.files[0]);
});

document.getElementById("file2").addEventListener("change", function(e) {
    let reader = new FileReader();
    reader.onload = () => document.getElementById("text2").value = reader.result;
    reader.readAsText(e.target.files[0]);
});
