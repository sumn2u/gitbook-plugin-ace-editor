# GitBook Ace Editor Plugin

This GitBook plugin integrates the Ace Editor into your GitBook documentation, allowing users to write and execute JavaScript code directly within your GitBook pages. It provides a syntax-highlighted code editor and an output area for displaying results or error messages.

## Features

- **Syntax Highlighting**: Use Ace Editor to highlight JavaScript syntax.
- **Code Execution**: Execute JavaScript code within the GitBook page.
- **Custom Styling**: Apply custom CSS to style the editor and output areas.

## Installation

To use this plugin in your GitBook project, follow these steps:

1. **Clone or Download the Plugin**

   Clone this repository or download the plugin files into your GitBook project's `plugins` directory.

   ```bash
   git clone https://github.com/sumn2u/gitbook-plugin-ace-editor.git
   ```

2. **Install the Plugin**

    Add the plugin to your `book.json` or `gitbook.yaml` file:

    ```json
    {
        "plugins": [
            "gitbook-plugin-ace-editor"
        ]
    }
    ```

    or

    ```yaml
    plugins:
    - gitbook-plugin-ace-editor
    ```

3. **Install Dependencies**

    Navigate to your GitBook project directory and install the plugin dependencies:

    ```sh
    gitbook install
    ```

## Usage

To include the Ace Editor in your GitBook pages, use the custom block in your Markdown files. Here’s an example:

```markdown
{% aceeditor %}
{% endaceeditor %}
```



## Files Overview

- **`assets/ace.min.js`**: Minified version of the Ace Editor library.
- **`assets/main.js`**: JavaScript file for handling code execution and console output.
- **`assets/style.css`**: Custom CSS for styling the Ace Editor and its container.
- **`index.js`**: Main plugin file that integrates Ace Editor into GitBook.

## Customization

### Editor Theme

Change the theme of the Ace Editor by modifying the `editor.setTheme("ace/theme/monokai");` line in `assets/main.js`. Available themes include `monokai`, `github`, `solarized_light`, and more.

### Syntax Mode

Change the syntax mode by updating `editor.session.setMode("ace/mode/javascript");` in `assets/main.js`. You can set it to other programming languages supported by Ace, such as `python`, `java`, or `html`.

### Styling

Modify `assets/style.css` to adjust the appearance of the editor and output areas to better fit your documentation's design.

## Contributing

Contributions to the plugin are welcome. Please submit pull requests or issues on the [GitHub repository](https://github.com/sumn2u/gitbook-plugin-ace-editor).

## License

This plugin is licensed under the [MIT License](LICENSE).


