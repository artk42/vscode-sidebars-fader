# VSCode Sidebars Fader

A small JavaScript hack for [VS Code](https://code.visualstudio.com/) that fades or hides all text, icons, badges, and buttons in the **sidebar, activity bar, auxiliary bar, and panel (terminal/output/debug)** when the editor has focus.  
On hover, the sidebars restore to full visibility.

Works with the [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) extension.

![demo](https://github.com/user-attachments/assets/00e70b87-73ee-443e-b555-bdcc396c0044)


## Installation

1. Install **Custom CSS and JS Loader** from VS Code marketplace.
2. Clone or copy this repo/folder somewhere on your system.
3. Add the script path to your VS Code settings (`settings.json`):

   ```json
   {
     "vscode_custom_css.imports": [
       "file:///absolute/path/to/vscode-sidebars-fader.js"
     ]
   }
   ```

   Use an absolute `file:///` URL.

4. Reload VS Code with command palette:
   - Open `Ctrl+Shift+P` / `Cmd+Shift+P`
   - Run **Reload Custom CSS and JS**

5. If you want to disable, remove the import line and reload.

## Configuration

Inside `vscode-sidebars-fader.js` you can tweak:

- `blackout` → `true` for full blackout mode, `false` for colored fade mode.
- `fadeColor` → overlay color used in color fill mode.
- `fadeBrightness` → brightness factor used in blackout mode.

## Notes

- This hack modifies VS Code UI DOM directly, so it only works if Custom CSS and JS Loader is active.
- Tested on latest stable VS Code with dark and light themes.
