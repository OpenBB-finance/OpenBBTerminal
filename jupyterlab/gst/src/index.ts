import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';


import { ICommandPalette } from '@jupyterlab/apputils';

import { IFileBrowserFactory } from '@jupyterlab/filebrowser';

import { ILauncher } from '@jupyterlab/launcher';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

import { LabIcon } from '@jupyterlab/ui-components';

import { TerminalManager } from '@jupyterlab/services';

import { Terminal } from '@jupyterlab/terminal';

import logoStr from '../style/icon_64x64.svg';

namespace PluginOptions {
  // TO CHANGE
  export const BREAK_LINE = '\r\n';

  export const CMD_OPEN =  '@gamestonk/jupyterlab-terminal:open';

  // TO CHANGE
  export const GAMESTONK_DIRECTORY = 'D:/code/python/thirdparty/GamestonkTerminal';

  export const PALETTE_CATEGORY = 'Gamestonk Terminal extension';
  export const ICON_NAME = 'gamestonk:terminal-icon';
  export const ID = '@gamestonk/jupyterlab-terminal:plugin';
  export const ICON = new LabIcon({
    name: PluginOptions.ICON_NAME,
    svgstr: logoStr,
  });
  export const SETTINGS_SCHEMA = '@gamestonk/jupyterlab-terminal:config'
  
  // TO CHANGE
  export const VENV_REPOSITORY = 'D:/code/python/venvs/gst-venv';
}

/** 
 * Initialization data for the @gamestonk/jupyterlab-terminal extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  activate,
  autoStart: true,
  id: PluginOptions.ID,
  optional: [ICommandPalette, ILauncher, IMainMenu, ISettingRegistry],
  requires: [IFileBrowserFactory],
};

export default plugin;

async function activate(
  app: JupyterFrontEnd,
  browserFactory: IFileBrowserFactory,
  palette: ICommandPalette | null,
  launcher: ILauncher | null,
  menu: IMainMenu | null,
  settings_registry: ISettingRegistry | null,
): Promise<void> {
  console.log(browserFactory);
  const { commands } = app;
  const command = PluginOptions.CMD_OPEN;
  commands.addCommand(PluginOptions.CMD_OPEN, {
    label: (args) => (args['isPalette'] ? 'New Gamestonk Terminal' : 'Gamestonk Terminal'),
    caption: 'Create a new Python file',
    icon: (args) => (args['isPalette'] ? undefined : PluginOptions.ICON),
    execute: async (args) => {
      // Load settings
      let settings_properties = '';
      if(settings_registry) {
        const settings = await settings_registry
          .load(PluginOptions.SETTINGS_SCHEMA)
          .then((settings) => {return settings});

        settings_properties = JSON.stringify(settings.user);
        console.log('settings', settings);
        console.log('settings', settings_properties);
      }

      const manager = new TerminalManager();
      const session = await manager.startNew();
      const terminal = new Terminal(session, { theme: 'dark' });
      terminal.title.closable = true;

      session.send({
        type: 'stdin',
        content: [`cd ${PluginOptions.GAMESTONK_DIRECTORY}${PluginOptions.BREAK_LINE}`]
      });
      session.send({
        type: 'stdin',
        content: [`echo '${settings_properties}' | ${PluginOptions.VENV_REPOSITORY}/Scripts/python ${PluginOptions.GAMESTONK_DIRECTORY}/jupyterlab/scripts/jupyter_export_env.py${PluginOptions.BREAK_LINE}`]
      });
      return terminal;
    },
  });

  // Add the command to the launcher
  if (launcher) {
    launcher.add({
      command,
      category: 'Gamestonk Terminal',
      rank: 1,
    });
  }

  // Add the command to the palette
  if (palette) {
    palette.addItem({
      command,
      args: { isPalette: true },
      category: PluginOptions.PALETTE_CATEGORY,
    });
  }

  // Add the command to the menu
  if (menu) {
    menu.fileMenu.newMenu.addGroup([{ command }], 30);
  }
}