const UNDER_CONSTRUCTION_PATHS = new Set([
  "/showcase/",
]);

const POPUP_NAME = "abc-under-construction";

function normalizePath(href: string): string | null {
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    return url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
  } catch {
    return null;
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getPopupFeatures() {
  const width = 420;
  const height = 320;
  const left = Math.max(window.screenX + Math.round((window.outerWidth - width) / 2), 0);
  const top = Math.max(window.screenY + Math.round((window.outerHeight - height) / 2), 0);

  return `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`;
}

function buildPopupDocument(label: string) {
  const safeLabel = escapeHtml(label);

  return `
  <head>
    <meta charset="utf-8" />
    <title>${safeLabel} :: under construction</title>
    <style>
      :root {
        color-scheme: light;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background:
          linear-gradient(180deg, #070b18 0%, #10234e 100%);
        color: #111;
        font-family: "MS Sans Serif", "Chicago", "Geneva", sans-serif;
      }

      .window {
        width: min(92vw, 360px);
        border: 3px solid #111;
        background: #c0c0c0;
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.35);
      }

      .titlebar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 6px 8px;
        background: linear-gradient(90deg, #0a2a7a 0%, #2a69ff 100%);
        color: #fff;
        font-weight: 700;
      }

      .titlebar-button {
        border: 2px outset #d9d9d9;
        background: #c0c0c0;
        color: #111;
        font-weight: 700;
        min-width: 22px;
        text-align: center;
      }

      .content {
        padding: 12px;
      }

      .badge-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 12px;
      }

      .cone {
        font-size: 30px;
        line-height: 1;
      }

      marquee {
        flex: 1;
        border: 2px inset #f5f5f5;
        background: #ffef7a;
        color: #a10000;
        font-weight: 700;
        padding: 4px 0;
      }

      p {
        margin: 0 0 12px;
        font-size: 16px;
        line-height: 1.35;
      }

      .blink {
        animation: blink 1s steps(2, start) infinite;
        font-weight: 700;
      }

      .actions {
        display: flex;
        justify-content: flex-end;
      }

      button {
        border: 2px outset #fff;
        background: #c0c0c0;
        color: #111;
        cursor: pointer;
        font: inherit;
        padding: 6px 16px;
      }

      button:active {
        border-style: inset;
      }

      @keyframes blink {
        to {
          visibility: hidden;
        }
      }
    </style>
  </head>
  <body>
    <div class="window">
      <div class="titlebar">
        <span>Agentic Builders Collective.exe</span>
        <span class="titlebar-button">X</span>
      </div>
      <div class="content">
        <div class="badge-row">
          <span class="cone" aria-hidden="true">🚧</span>
          <marquee behavior="alternate" scrollamount="4">UNDER CONSTRUCTION</marquee>
        </div>
        <p><span class="blink">${safeLabel}</span> is not ready yet.</p>
        <p>Please check back later after a few more geocities-quality renovations.</p>
        <div class="actions">
          <button type="button" onclick="window.close()">OK</button>
        </div>
      </div>
    </div>
  </body>
`;
}

function getLinkLabel(link: HTMLAnchorElement): string {
  const text = link.textContent?.replace(/\s+/g, " ").trim();
  if (text) return text;
  return "This page";
}

function closeOpenMenus() {
  document.querySelectorAll<HTMLElement>(".mobile-menu-overlay").forEach((overlay) => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  });

  document.querySelectorAll<HTMLElement>(".mobile-hamburger").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });

  document.body.style.overflow = "";
}

function showPopup(label: string) {
  const popup = window.open("", POPUP_NAME, getPopupFeatures());
  if (!popup) {
    window.alert(`${label} is under construction.`);
    return;
  }

  popup.document.documentElement.lang = "en";
  popup.document.documentElement.innerHTML = buildPopupDocument(label);
  popup.focus();
}

document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href) return;

  const path = normalizePath(href);
  if (!path || !UNDER_CONSTRUCTION_PATHS.has(path)) return;

  const label = getLinkLabel(link);
  link.dataset.underConstruction = "true";
  if (!link.title) {
    link.title = `${label} is under construction`;
  }

  link.addEventListener("click", (event) => {
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== 0) return;

    event.preventDefault();
    closeOpenMenus();
    showPopup(label);
  });
});
