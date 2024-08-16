require(["gitbook"], function (gitbook, $) {

    function loadAceEditor() {
        // Initialize Ace Editor
        var editorElement = document.getElementById("editor");
        if (editorElement) {
            editor = ace.edit("editor");
            editor.setTheme("ace/theme/tomorrow");
            editor.session.setMode("ace/mode/javascript");
            editor.setValue("// Write your JavaScript code here");

            // Disable worker.js
            if (editor && editor.session) {
                editor.session.setOption("useWorker", false);
            }

            // Auto Completion For the Js interpreter
            ace.require("ace/ext/langauge_tools");
            editor.setOptions({
                enableBasicAutoCompletion: true,
                enableLiveAutoCompletion: true,
                enableSnippets: true,
            })

            // Handle the run button click event
            document.getElementById("run").addEventListener("click", function () {
                // Get the code from the editor
                var code = editor.getValue();

                // Reset the output area
                var outputElement = document.getElementById("compiler-output");
                outputElement.textContent = "";

                // Store the original console.log function
                var originalConsoleLog = console.log;

                // Override console.log to display output in the designated area
                console.log = function (...messages) {
                    // Format each message
                    var formattedMessages = messages.map(message => {
                        if (typeof message === "object") {
                            // Pretty-print objects
                            return JSON.stringify(message, null, 2);
                        }
                        return message.toString();
                    });
                    // Join messages and append to the output area
                    outputElement.textContent += formattedMessages.join(" ") + "\n";
                }

                try {
                    // Execute the user's code
                    eval(code);
                } catch (error) {
                    // Display error message in the output area
                    console.log("Error: " + error.message);
                }

                // Restore the original console.log function
                console.log = originalConsoleLog;
            });
        }
    }
    window.onload = function () {
        loadAceEditor();
        // When GitBook is ready
        gitbook.events.bind("page.change", function () {
            loadAceEditor();

        });
    }
});
