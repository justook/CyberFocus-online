# 插件安装图解（Chrome / Edge）

本插件为 Manifest V3 扩展，目前通过「开发者模式加载」安装，不需要应用商店账号。

## 一、拿到插件文件

两种方式任选：

- **推荐**：到 [Releases](https://github.com/justook/CyberFocus-online/releases/latest) 页面下载最新版 `cyberfocus-ext-x.y.z.zip`，解压到任意位置（建议放在不会随手清理的目录，比如 `D:\CyberFocus\extension`）。
- 或者直接把本仓库 `extension/` 目录的内容下载下来（Code → Download ZIP 后取其中的 `extension`）。

解压后目录里应包含：

```
extension/
├── manifest.json
├── popup.html
├── popup.js
├── newtab.html
├── newtab.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

**`manifest.json` 必须和其余文件在同一级**——只解压出一个嵌套目录（如 `extension/extension/...`）会导致加载失败，报"找不到 manifest"。

## 二、加载扩展

1. 打开扩展管理页：
   - Chrome 地址栏输入 `chrome://extensions`
   - Edge 地址栏输入 `edge://extensions`
2. 打开页面右上角的「**开发者模式**」开关。
3. 点左上角「**加载已解压的扩展程序**」（Edge 叫「加载解压缩的扩展」），选中第一步解压出的 `extension` 文件夹。
4. 列表里出现「CyberFocus 导航收藏」即安装成功。建议点一下「固定」把图标常驻工具栏。

## 三、首次配置

1. 点工具栏的插件图标。插件默认已指向官方实例：`https://cyberfocus.justoky.xyz`，无需配置即可使用。
2. 自托管用户在此改成自己的实例地址（以 `https://` 开头），填一次即记住。
3. 之后在任意网页点插件图标 →「添加到导航页」，会自动打开导航页并弹出预填确认框，选好分组和图标后保存（投递一律经人工确认，不会静默写入你的导航页）。

## 四、新标签页直达

安装后，浏览器新标签页会自动跳转到上面填的实例地址。想让浏览器启动时也直达：

- Chrome：`设置 → 启动时` → 选「打开新标签页」
- Edge：`设置 → 开始、主页和新建标签页` → 启动时选「打开新标签页」

## 五、常见问题

**每次启动浏览器都弹"请停用开发者模式的扩展"？**
正常现象。开发者模式加载的扩展没有签名，Chrome / Edge 每次启动会提示一次，点「保留」即可，不影响功能。

**点了"添加到导航页"没反应？**
确认实例地址填对了（以 `https://` 开头、末尾不带路径）。可以先用浏览器直接打开实例地址验证能登录。

**想让新标签页指回默认页？**
在扩展管理页把「CyberFocus 导航收藏」停用即可恢复浏览器默认新标签页；重新启用后仍使用之前填的地址。

**升级插件版本怎么办？**
下载新 Release 的 zip 覆盖原目录（保持文件夹路径不变），回到 `chrome://extensions` 点该扩展卡片上的「刷新」按钮。
