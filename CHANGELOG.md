# Changelog

本仓库的更新日志只记录**插件版本与文档变更**。Web 应用本体的迭代在本仓库不可见。

格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号与 Release tag（`ext-v*`）一一对应。

## [Unreleased]

### 计划中

- Edge 加载项商店上架评估

## [0.2.0] - 2026-11-06

首个公开发布版本。插件此前一直随闭源仓库内部迭代，本版起在本仓库独立发布。

### Added

- 默认实例地址内置为官方站点（`https://cyberfocus.justoky.xyz`），安装后开箱即连；自托管用户可在弹窗中修改
- 新标签页直达：浏览器新标签页自动打开配置的 CyberFocus 实例，未配置时显示引导页（地址与弹窗共用同一份配置）
- 一键收藏投递失败（如未授权本地文件访问）时自动降级：复制 JSON 到剪贴板，在导航页管理面板粘贴导入

### Notes

- `extension/` 源码即发布内容，无构建步骤
- 投递协议：导航页接收 `#add=<base64url(JSON)>` hash 参数；不带预选分组的投递一律经人工确认弹窗保存，无静默写入路径

[Unreleased]: https://github.com/justook/CyberFocus-online/compare/ext-v0.2.0...HEAD
[0.2.0]: https://github.com/justook/CyberFocus-online/releases/tag/ext-v0.2.0
