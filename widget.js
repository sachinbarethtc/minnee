(function () {
  const chatUrl = "https://minnee.onrender.com/";
  const token = document.currentScript.getAttribute("data-auth-token");
  window.AUTH_TOKEN = token;

  const btn = document.createElement("div");
  btn.id = "chat-launcher";
  btn.innerHTML = "💬";
  btn.style = `
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 55px;
    height: 55px;
    background: #535cf2;
    border-radius: 50%;
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 55px;
    cursor: pointer;
    z-index: 99999;
  `;
  document.body.appendChild(btn);

  const iframe = document.createElement("iframe");
  iframe.src = chatUrl;
  iframe.id = "chat-iframe";
  iframe.style = `
    position: fixed;
    bottom: 90px;
    right: 25px;
    width: 380px;
    height: 520px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    display: none;
    z-index: 99999;
  `;
  document.body.appendChild(iframe);

  btn.addEventListener("click", () => {
    iframe.style.display =
      iframe.style.display === "none" ? "block" : "none";
  });
})();
