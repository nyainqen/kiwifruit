/* ===== 全站配置 ===== */
const SITE = {
  brand: "周至翠香猕猴桃",
  wechat: "XXXXXXX",
  phone: "XXXXXXXXXXX",
  qrImage: "/images/wechat/wechat-qr.png",
nav: [
  { href: "/index.html",          label: "首页",     icon: "🏠", navText: "首页" },
  { href: "/pages/products.html", label: "产品中心", icon: "🥝", navText: "产品" },
  { href: "/pages/story.html",    label: "产地故事", icon: "🌿", navText: "故事" },
  { href: "/pages/about.html",    label: "关于我们", icon: "ℹ️", navText: "关于" },
  { href: "/pages/contact.html",  label: "联系购买", icon: "💬", navText: "联系" }
]
};

/* 判断当前页 */
const currentPath = location.pathname;
function isActive(href) {
  if (href === "/index.html") {
    return currentPath === "/" || currentPath === "/index.html" || currentPath.endsWith("/");
  }
  return currentPath.endsWith(href);
}

/* 1. 导航栏 */
function renderNav() {
  const el = document.getElementById("site-nav");
  if (!el) return;
  const links = SITE.nav.map(item =>
    `<a href="${item.href}"${isActive(item.href) ? ' class="active"' : ''}>${item.label}</a>`
  ).join("");
  el.innerHTML = `
    <nav class="navbar">
      <div class="logo">${SITE.brand}</div>
      <div class="nav-links">${links}</div>
      <a href="/contact.html" class="nav-wechat">加微信</a>
    </nav>
  `;
}

/* 2. 页脚 */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <footer>
      <img src="${SITE.qrImage}" alt="微信二维码" class="qr-small">
      <p>陕西周至翠香猕猴桃 · 产地直供</p>
      <p>微信：${SITE.wechat} &nbsp;|&nbsp; 电话：${SITE.phone}</p>
      <p style="margin-top:14px; opacity:0.5;">© 2026 ${SITE.brand}</p>
    </footer>
  `;
}


/* 4. 悬浮按钮 */
function renderFloatButton() {
  const el = document.createElement("a");
  el.href = "/contact.html";
  el.className = "float-wechat";
  el.textContent = "微信咨询";
  document.body.appendChild(el);
}

/* 5. 手机底部导航 */
function renderMobileNav() {
  const el = document.getElementById("site-mobile-nav");
  if (!el) return;
  const links = SITE.nav.map(item =>
    `<a href="${item.href}"${isActive(item.href) ? ' class="active"' : ''}>${item.icon}<span class="nav-icon">${item.navText}</span></a>`
  ).join("");
  el.innerHTML = `<nav class="mobile-nav">${links}</nav>`;
}

/* ===== 执行 ===== */
renderNav();
renderFooter();
renderFloatButton();
renderMobileNav();
