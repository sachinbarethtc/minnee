(function () {
  const BASE_URL = "https://minnee.onrender.com";

  // 1️⃣ Load CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${BASE_URL}/css/style.css`;
  document.head.appendChild(link);

  async function load() {
    // 2️⃣ Fetch full HTML content
    const res = await fetch(`${BASE_URL}/index.html`);
    const html = await res.text();

    // 3️⃣ Create temporary container
    const temp = document.createElement("div");
    temp.innerHTML = html;

    // 4️⃣ Extract YOUR chatbot + YOUR button
    const chatbot = temp.querySelector("#chatbot");
    const openBtn = temp.querySelector("#openChat");

    if (!chatbot || !openBtn) {
      console.error("❌ Chatbot elements not found in index.html");
      return;
    }

    // 5️⃣ Add to client website
    document.body.appendChild(chatbot);
    document.body.appendChild(openBtn);

    // 6️⃣ Make sure positioning works like widget
    chatbot.style.position = "fixed";
    chatbot.style.bottom = "80px";
    chatbot.style.right = "40px";
    chatbot.style.zIndex = "999999";

    openBtn.style.zIndex = "1000000";
    openBtn.style.position = "fixed";
    openBtn.style.bottom = "40px";
    openBtn.style.right = "40px";

    // 7️⃣ Now load your JS logic AFTER element mounted
    const script = document.createElement("script");
    script.src = `${BASE_URL}/js/script.js`;
    script.defer = true;
    document.body.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", load);
})();
