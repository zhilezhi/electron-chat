import { Menu, MenuItemConstructorOptions } from "electron";
export function createMenu() {
  const template: MenuItemConstructorOptions[] = [
    {
      label: "文件",

      submenu: [
        //role配置快捷键

        {
          label: "新建",
          accelerator: "ctrl+n",
          click: () => {
            console.log("新建文件");
          },
        },

        {
          label: "打开",
          accelerator: "ctrl+o",
          click: () => {
            console.log("打开文件");
          },
        },

        //分割线

        { type: "separator" },

        {
          label: "保存",
          accelerator: "ctrl+s",
          click: () => {
            console.log("保存文件");
          },
        },
      ],
    },

    {
      label: "编辑",

      submenu: [
        // role按角色进行配置

        {
          label: "复制",
          role: "copy",
          click: () => {
            console.log("复制文件");
          },
        },

        {
          label: "粘贴",
          role: "paste",
          click: () => {
            console.log("粘贴文件");
          },
        },
      ],
    },

    {
      label: "关于",

      submenu: [
        { label: "关于", role: "about" },

        { label: "工具栏", role: "toggleDevTools" },

        { label: "退出", accelerator: "ctrl+Esc", role: "quit" },

        { label: "全屏", accelerator: "ctrl+F11", role: "togglefullscreen" },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
