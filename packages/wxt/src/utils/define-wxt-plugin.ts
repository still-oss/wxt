/** @module wxt/utils/define-wxt-plugin */
export type WxtPlugin = () => void;

export function defineWxtPlugin(plugin: WxtPlugin): WxtPlugin {
  return plugin;
}
