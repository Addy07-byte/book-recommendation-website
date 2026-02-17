// Put your Lambda Function URL here:
const LAMBDA_URL = "https://YOUR_ID.lambda-url.YOUR_REGION.on.aws/";

function setStatus(msg) {
  document.getElementById("status").textContent = msg || "";
}

function escapeHtml(str) {
  return String(str || "").replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}

function renderAiBooks(items) {
  const container = document.getElementById("aiResults");
  container.innerHTML = "";

  if (!items || items.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#777;">No recommendations returned.</p>`;
    return;
  }

  items.forEach((b, idx) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.style.setProperty("--i", String(idx + 1));

    // If Lambda returns a local filename, it will load from your site (S3).
    // If it returns an https URL, it will load from there.
    const img = b.image || "ikigai.jpg";

    card.innerHTML = `
      <img src="${escapeHtml(img)}" alt="${escapeHtml(b.title || "Book")}">
      <span class="tag">${escapeHtml(b.genre || "Recommended")}</span>
      <h3>${escapeHtml(b.title || "")}</h3>
      <p>${escapeHtml(b.author || "")}</p>
      <p class="desc">${escapeHtml(b.reason || "")}</p>
    `;

    container.appendChild(card);
  });
}

async function askRecommendations(query) {
  const res = await fetch(LAMBDA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  return res.json();
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("askBtn");
  const input = document.getElementById("userQuery");

  if (!btn || !input) return;

  btn.addEventListener("click", async () => {
    const q = input.value.trim();
    if (!q) return setStatus("Type something first.");

    setStatus("Loading...");
    try {
      const data = await askRecommendations(q);
      renderAiBooks(data.recommendations);
      setStatus("");
    } catch (e) {
      console.error(e);
      setStatus("Failed. Check Lambda URL + CORS.");
    }
  });
});
