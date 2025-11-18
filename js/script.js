// ------------------------------
// CHAT OPEN / CLOSE
// ------------------------------
const chatbot = document.getElementById("chatbot");
const openBtn = document.getElementById("openChat");
const closeBtn = document.getElementById("closeChat");

openBtn.onclick = () => {
  chatbot.classList.add("open");
  openBtn.style.display = "none";
};

closeBtn.onclick = () => {
  chatbot.classList.remove("open");
  openBtn.style.display = "block";
};



// ------------------------------
// PO SUGGEST SYSTEM (FINAL WORKING VERSION)
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {

  const AUTH_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM0NDU0OTkiLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNDY3MDk5LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.UDs5eLZfQ_daxApr7jQRwxeTZ-cHYX1bypNsi3XFGXP2OpsTOXvRgZmn1i0B2XsB733HD2xppliRwEK4ogwqww"; 
  const API_URL = "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data";

  const poInput = document.getElementById("poInput");
  const poDropdown = document.getElementById("poDropdown");
  const poList = document.getElementById("poList");
  const poError = document.getElementById("poError");

  let timer = null;
  let activeIndex = -1;
  let currentItems = [];
  const sessionCache = new Map();


  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function hideDropdown() {
    poDropdown.style.display = "none";
    activeIndex = -1;
  }

  function showError(msg) {
    poList.innerHTML = "";
    poError.innerHTML = msg;
    poError.style.display = "block";
    poDropdown.style.display = "block";
  }


  async function fetchPO(query) {
    const key = query.toLowerCase();
    if (sessionCache.has(key)) return sessionCache.get(key);

    const body = {
      type: 1,
      pageNo: 1,
      pageSize: 300,
      search: query,
      sortedBy: "",
      sortedIn: "",
      filter: {},
      status: "APPROVED",
      isDashboardComment: 0,
      displayName: "VENDOR_PENDING_ALL"
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": AUTH_TOKEN,
          "X-Scope-Id": "vendor.purchase.shipment.create"
        },
        body: JSON.stringify(body)
      });

      const json = await response.json();
      const list = json?.data?.resource ?? [];

      sessionCache.set(key, list);
      return list;

    } catch (error) {
      console.error(error);
      showError("❌ Unable to fetch PO suggestions. Check network/token.");
      return [];
    }
  }


  function renderList(list, q) {
    poList.innerHTML = "";
    currentItems = list.slice(0, 10);

    if (!currentItems.length) {
      poList.innerHTML = `<div class="po-item">No matches found</div>`;
      poDropdown.style.display = "block";
      return;
    }

    const re = new RegExp(escapeRegex(q), "ig");

    currentItems.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "po-item";

      const doc = item.documentNumber || "";
      const highlighted = doc.replace(re, (m) => `<mark>${m}</mark>`);

      div.innerHTML = `
        <div>${highlighted}</div>
        <div style="font-size:12px;opacity:0.6;">₹${item.poAmount ?? ""}</div>
      `;

      div.addEventListener("click", () => {
        poInput.value = item.documentNumber;
        hideDropdown();
      });

      poList.appendChild(div);
    });

    poDropdown.style.display = "block";
  }


  poInput.addEventListener("input", () => {
    clearTimeout(timer);

    const q = poInput.value.trim();
    if (!q) return hideDropdown();

    timer = setTimeout(async () => {
      const list = await fetchPO(q);

      const filtered = list.filter(r =>
        (r.documentNumber || "").toLowerCase().includes(q.toLowerCase())
      );

      renderList(filtered, q);
    }, 300);
  });


  document.addEventListener("click", (e) => {
    if (!e.target.closest(".chat-footer")) hideDropdown();
  });

});
