module.exports = {
    website: {
        assets: "./assets",
        js: [
            "ace.min.js",
            "main.js"
        ],
        css: [
            "style.css"
        ]
    },
    blocks: {
        aceeditor: {
            process: function(block) {
                // HTML content for the Ace Editor
                return `
                    <div class="compiler-container">
                        <h2 class="compiler-title">Try Yourself!</h2>
                        <div id="editor" class="compiler-textarea" style="height: 200px; width: 100%;"></div><br>
                        <button id="run" class="compiler-button">Run Code</button><br>
                        <h3 class="compiler-output-title">Output:</h3>
                        <pre id="output" class="compiler-output"></pre>
                    </div>
                `;
            }
        }
    }
};
