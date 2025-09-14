# VSCode Sidebars Fader

A small JavaScript hack for VS Code and it's forks, like Cursor, Windsurf, etc. It fades and hides all text, icons, badges, and buttons in the **sidebars, activity bar, auxiliary bar, and panel (terminal/output/debug)** when the editor has focus.
On hover of any, the sidebars restore to full visibility. It's like Zen mode, but in auto-mode and thus much faster.

Works with the [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) extension.

![demo](https://github.com/user-attachments/assets/00e70b87-73ee-443e-b555-bdcc396c0044)


## Installation (VS Code)

1. Install **Custom CSS and JS Loader** from VS Code marketplace and run **Enable Custom CSS and JS** in palette.
2. Clone or copy **VSCode Sidebars Fader** repo/folder somewhere on your system.
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

## Installation (Cursor, VS Code forks)

You might miss **Custom CSS and JS Loader** in extensions marketplace and need to build and install vsix manually:

1. Clone or copy:
```
https://github.com/be5invis/vscode-custom-css.git
```
2. 
```bash
  npm install
  npm run vscode:prepublish
  vsce publish # `brew install vsce` if missing
```
3. Run **Enable Custom CSS and JS** in Cursor's palette.
4. Go to step (2) of section above.

## Configuration

Inside `vscode-sidebars-fader.js` you can tweak:

- `blackout` → `true` for full blackout mode, `false` for colored fade mode.
- `fadeColor` → overlay color used in color fill mode.
- `fadeBrightness` → brightness factor used in blackout mode.

## Notes

This hack modifies VS Code UI DOM directly, so it only works after Custom CSS and JS Loader activation. You can disable that after, but might need to re-enable after every next update.
