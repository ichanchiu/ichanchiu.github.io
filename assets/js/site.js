document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => window.print());
});

const languageSwitch = document.querySelector(".language-switch");

if (languageSwitch && window.location.hash) {
  const alternatePage = new URL(languageSwitch.href, window.location.href);
  alternatePage.hash = window.location.hash;
  languageSwitch.href = alternatePage.href;
}

const isLegacyGrantAnchor = window.location.hash === "#grants-heading"
  && /\/(?:zh\/)?research\/$/.test(window.location.pathname);

if (isLegacyGrantAnchor) {
  const homePath = window.location.pathname.startsWith("/zh/") ? "/zh/" : "/";
  window.location.replace(`${homePath}#grants-heading`);
}

document.querySelectorAll("a[href]").forEach((link) => {
  let destination;

  try {
    destination = new URL(link.getAttribute("href"), window.location.href);
  } catch {
    return;
  }

  const isWebLink = destination.protocol === "http:" || destination.protocol === "https:";
  const isExternal = destination.origin !== window.location.origin;

  if (!isWebLink || !isExternal) return;

  link.target = "_blank";

  const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
  rel.add("noopener");
  rel.add("noreferrer");
  link.rel = [...rel].join(" ");
});
