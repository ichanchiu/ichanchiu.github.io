document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => window.print());
});

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
