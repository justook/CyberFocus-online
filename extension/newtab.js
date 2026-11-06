// CyberFocus 新标签页：把浏览器默认的 NTP 换成用户的 CyberFocus 实例。
// 地址复用 popup 的 navPageUrl（同一个 storage key）——扩展里一处配置，两处生效。
// 跳转用 location.replace：用户按后退是回到真正的上一页，而不是先经过一个空白跳板。
// MV3 扩展页禁内联脚本，所以 JS 单独成文件；normalizeBase 与 popup.js 保持同款语义。

const KEY = 'navPageUrl';

// 默认导航页地址（r14）：storage 里没存过时直接跳线上站点，不再让新用户面对空白设置页。
// 与 popup.js 的 DEFAULT_NAV_URL 保持同值（两个独立脚本，无法共享模块）。
const DEFAULT_NAV_URL = 'https://cyberfocus.justoky.xyz';

function normalizeBase(raw) {
  let s = String(raw || '').trim().replace(/#.*$/, '');
  if (!s) return '';
  // 用户直接粘贴 Windows 路径（D:\...\index.html）：转成 file:// URL 而不是误补 https://
  if (/^[a-z]:[\\/]/i.test(s)) s = 'file:///' + s.replace(/\\/g, '/');
  if (!/^https?:\/\//i.test(s) && !/^file:\/\//i.test(s)) {
    if (/^[a-z]+:/i.test(s)) return '';   // chrome:// 等内部协议不是合法导航页地址
    s = 'https://' + s;
  }
  return s;
}

function showSetup(msg) {
  document.getElementById('status').textContent = '';
  document.getElementById('setup').style.display = 'block';
  if (msg) document.getElementById('err').textContent = msg;
  const input = document.getElementById('url');
  input.focus();
}

function saveAndGo() {
  const base = normalizeBase(document.getElementById('url').value);
  if (!base) {
    document.getElementById('err').textContent = '地址不合法：填 https:// 开头的网址，或本地文件的完整路径。';
    return;
  }
  chrome.storage.local.set({ [KEY]: base }, () => location.replace(base));
}

async function main() {
  let stored = null;
  try {
    const got = await chrome.storage.local.get(KEY);
    stored = got[KEY];
  } catch (e) {
    // storage 读不出来（极少见）也要把设置界面放出来，别把人晾在黑屏上
    showSetup('读取配置失败：' + (e && e.message ? e.message : e));
    return;
  }
  const base = normalizeBase(stored || DEFAULT_NAV_URL);
  if (base) {
    location.replace(base);
  } else {
    showSetup();
  }
}

document.getElementById('save').addEventListener('click', saveAndGo);
// 回车直接提交，输入框是页面里唯一的焦点目标
document.getElementById('url').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') saveAndGo();
});

main();
