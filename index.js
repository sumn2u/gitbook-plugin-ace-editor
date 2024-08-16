module.exports = {
    website: {
        assets: "./assets",

        js: [
            "ace.min.js",
            "ace/theme-tomorrow.js",
            "ace/mode-javascript.js",
            "main.js"
        ],
        css: [
            "style.css"
        ]
    },
    blocks: {
        aceeditor: {
            process: function (block) {
                // Extract parameters with default values
                const kwargs = block.kwargs || {};
                const compilerTitle = kwargs.compilerTitle || "Try Yourself!";
                const compilerOutputTitle = kwargs.compilerOutputTitle || "Output:";

                // HTML content for the Ace Editor
                return `
                    <div class="compiler-container">
                        <h2 class="compiler-title">${compilerTitle}</h2>
                        <div id="editor" class="compiler-textarea" style="height: 200px; width: 100%;"></div>
                        <button id="run" class="compiler-button">Run Code</button>
                        <h3 class="compiler-output-title">${compilerOutputTitle}</h3>
                        <pre id="compiler-output" class="compiler-output"></pre>
                    </div>
                `;
            }
        }
    }
};
