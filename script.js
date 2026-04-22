body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.app {
    width: 90%;
    margin: auto;
    padding: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    background: #ff7eb3;
    color: white;
    cursor: pointer;
}

.controls {
    margin: 20px 0;
    display: flex;
    gap: 10px;
}

.editor {
    display: flex;
    gap: 20px;
}

textarea {
    width: 50%;
    height: 200px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    resize: none;
}

.stats {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.progress-container {
    width: 100%;
    height: 20px;
    background: #ddd;
    border-radius: 10px;
    margin-top: 10px;
}

#progress-bar {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #00f260, #0575e6);
    border-radius: 10px;
}

.highlight {
    background: yellow;
    color: black;
    padding: 2px;
}

.output {
    margin-top: 20px;
    background: rgba(255,255,255,0.1);
    padding: 15px;
    border-radius: 10px;
}

/* Dark Mode */
.dark {
    background: #121212;
    color: #eee;
}
