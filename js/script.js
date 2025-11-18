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
// PO SUGGEST SYSTEM
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {

  const AUTH_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM0NDU0OTkiLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNDY3MDk5LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.UDs5eLZfQ_daxApr7jQRwxeTZ-cHYX1bypNsi3XFGXP2OpsTOXvRgZmn1i0B2XsB733HD2xppliRwEK4ogwqww";
  const API_URL = "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data";

  const poInput = document.getElementById("poInput");
  const poDropdown = document.getElementById("poDropdown");
  const poList = document.getElementById("poList");
  const poError = document.getElementById("poError");

  let timer = null;
  let currentItems = [];
  const sessionCache = new Map();

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function hideDropdown() {
    poDropdown.style.display = "none";
  }

  function showError(msg) {
    poList.innerHTML = "";
    poError.innerHTML = msg;
    poError.style.display = "block";
    poDropdown.style.display = "block";
  }

  // Format dates into Figma format
  function formatDate(dateString) {
    if (!dateString) return "";
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date(dateString);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  async function fetchPO(query) {
    const key = query.toLowerCase();
    if (sessionCache.has(key)) return sessionCache.get(key);

    const body = {
      type: 1,
      pageNo: 1,
      pageSize: 200,
      search: query,
      status: "APPROVED",
      filter: {},
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
      showError("❌ Unable to fetch PO suggestions.");
      return [];
    }
  }

// function renderList(list, q) {
//   poList.innerHTML = "";
//   poError.style.display = "none";

//   const items = list.slice(0, 10);

//   if (!items.length) {
//     poList.innerHTML = `<div class="po-row">No matches found</div>`;
//     poDropdown.style.display = "block";
//     return;
//   }

//   const regex = new RegExp(q, "ig");

//   items.forEach(item => {
//     const row = document.createElement("div");
//     row.className = "po-row";

//     const erp = item.orderNumber || "";
//     const doc = item.documentNumber || "";
//     const status = item.poSetType || "S";

//     const fromDate = formatDate(item.validFromDate);
//     const toDate = formatDate(item.validToDate);

//     row.innerHTML = `
//       <div class="po-left">
//         <span class="erp-label">ERP</span>
//         <span class="erp-number">${erp.replace(regex, m => `<mark>${m}</mark>`)}</span>

//         <span class="status-pill">${status === "APPROVED" ? "S" : "P"}</span>

//         <span class="separator">|</span>

//         <span class="po-doc">${doc.replace(regex, m => `<mark>${m}</mark>`)}</span>

//         <span class="po-date">${fromDate} – ${toDate}</span>
//       </div>

//       <img src="assets/shapes/arrow.svg" class="arrow-icon">
//     `;

//     row.addEventListener("click", () => {
//       poInput.value = item.documentNumber;
//       hideDropdown();
//     });

//     poList.appendChild(row);
//   });

//   poDropdown.style.display = "block";
// }


function renderList(list, q) {
  poList.innerHTML = "";
  poError.style.display = "none";

  const items = list.slice(0, 10);
  if (!items.length) {
    // poList.innerHTML = `<div class="po-row">No matches found</div>`;
    // poDropdown.style.display = "block";
    hideDropdown();
    return;
  }
    // if (!items.length) {
    // hideDropdown();
    // return;
    // }



  const regex = new RegExp(q, "ig");

  items.forEach(item => {
    const row = document.createElement("div");
    row.className = "po-row";

    const erp = item.orderNumber || "";
    const doc = item.documentNumber || "";

    const fromDate = formatDate(item.validFromDate);
    const toDate = formatDate(item.validToDate);

    // STATUS ICON LOGIC
    let statusIcon = "";
    if (item.poSetType === "SET") {
      statusIcon = `<img src="assets/shapes/S.svg" class="status-icon"/>`;
    } else if (item.poSetType === "NON-SET") {
      statusIcon = `<img src="assets/icons/P.svg" class="status-icon"/>`;
    }

    row.innerHTML = `
      <div class="po-left">
        <span class="erp-label">ERP</span>

        <span class="erp-number">${erp.replace(regex, m => `<mark>${m}</mark>`)}</span>

        <span class="status-icon-wrapper">${statusIcon}</span>

        <span class="separator">|</span>

        <span class="po-doc">${doc.replace(regex, m => `<mark>${m}</mark>`)}</span>

        <span class="po-date">${fromDate} – ${toDate}</span>
      </div>

      <img src="assets/shapes/arrow.svg" class="arrow-icon">
    `;

    row.addEventListener("click", () => {
      poInput.value = item.documentNumber;
      hideDropdown();
    });

    poList.appendChild(row);
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
