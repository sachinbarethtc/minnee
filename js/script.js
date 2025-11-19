// // // // // // ------------------------------
// // // // // // CHAT OPEN / CLOSE
// // // // // // ------------------------------
// // // // // const chatbot = document.getElementById("chatbot");
// // // // // const openBtn = document.getElementById("openChat");
// // // // // const closeBtn = document.getElementById("closeChat");

// // // // // openBtn.onclick = () => {
// // // // //   chatbot.classList.add("open");
// // // // //   openBtn.style.display = "none";
// // // // // };

// // // // // closeBtn.onclick = () => {
// // // // //   chatbot.classList.remove("open");
// // // // //   openBtn.style.display = "block";
// // // // // };

// // // // // // ------------------------------
// // // // // // PO SUGGEST SYSTEM
// // // // // // ------------------------------
// // // // // document.addEventListener("DOMContentLoaded", () => {

// // // // //   const AUTH_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM0NDU0OTkiLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNDY3MDk5LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.UDs5eLZfQ_daxApr7jQRwxeTZ-cHYX1bypNsi3XFGXP2OpsTOXvRgZmn1i0B2XsB733HD2xppliRwEK4ogwqww";
// // // // //   const API_URL = "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data";

// // // // //   const poInput = document.getElementById("poInput");
// // // // //   const poDropdown = document.getElementById("poDropdown");
// // // // //   const poList = document.getElementById("poList");
// // // // //   const poError = document.getElementById("poError");

// // // // //   let timer = null;
// // // // //   let currentItems = [];
// // // // //   const sessionCache = new Map();

// // // // //   function escapeRegex(str) {
// // // // //     return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// // // // //   }

// // // // //   function hideDropdown() {
// // // // //     poDropdown.style.display = "none";
// // // // //   }

// // // // //   function showError(msg) {
// // // // //     poList.innerHTML = "";
// // // // //     poError.innerHTML = msg;
// // // // //     poError.style.display = "block";
// // // // //     poDropdown.style.display = "block";
// // // // //   }

// // // // //   // Format dates into Figma format
// // // // //   function formatDate(dateString) {
// // // // //     if (!dateString) return "";
// // // // //     const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// // // // //     const d = new Date(dateString);
// // // // //     return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
// // // // //   }

// // // // //   async function fetchPO(query) {
// // // // //     const key = query.toLowerCase();
// // // // //     if (sessionCache.has(key)) return sessionCache.get(key);

// // // // //     const body = {
// // // // //       type: 1,
// // // // //       pageNo: 1,
// // // // //       pageSize: 200,
// // // // //       search: query,
// // // // //       status: "APPROVED",
// // // // //       filter: {},
// // // // //       isDashboardComment: 0,
// // // // //       displayName: "VENDOR_PENDING_ALL"
// // // // //     };

// // // // //     try {
// // // // //       const response = await fetch(API_URL, {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           "X-Auth-Token": AUTH_TOKEN,
// // // // //           "X-Scope-Id": "vendor.purchase.shipment.create"
// // // // //         },
// // // // //         body: JSON.stringify(body)
// // // // //       });

// // // // //       const json = await response.json();
// // // // //       const list = json?.data?.resource ?? [];

// // // // //       sessionCache.set(key, list);
// // // // //       return list;

// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       showError("❌ Unable to fetch PO suggestions.");
// // // // //       return [];
// // // // //     }
// // // // //   }

// // // // // // function renderList(list, q) {
// // // // // //   poList.innerHTML = "";
// // // // // //   poError.style.display = "none";

// // // // // //   const items = list.slice(0, 10);

// // // // // //   if (!items.length) {
// // // // // //     poList.innerHTML = `<div class="po-row">No matches found</div>`;
// // // // // //     poDropdown.style.display = "block";
// // // // // //     return;
// // // // // //   }

// // // // // //   const regex = new RegExp(q, "ig");

// // // // // //   items.forEach(item => {
// // // // // //     const row = document.createElement("div");
// // // // // //     row.className = "po-row";

// // // // // //     const erp = item.orderNumber || "";
// // // // // //     const doc = item.documentNumber || "";
// // // // // //     const status = item.poSetType || "S";

// // // // // //     const fromDate = formatDate(item.validFromDate);
// // // // // //     const toDate = formatDate(item.validToDate);

// // // // // //     row.innerHTML = `
// // // // // //       <div class="po-left">
// // // // // //         <span class="erp-label">ERP</span>
// // // // // //         <span class="erp-number">${erp.replace(regex, m => `<mark>${m}</mark>`)}</span>

// // // // // //         <span class="status-pill">${status === "APPROVED" ? "S" : "P"}</span>

// // // // // //         <span class="separator">|</span>

// // // // // //         <span class="po-doc">${doc.replace(regex, m => `<mark>${m}</mark>`)}</span>

// // // // // //         <span class="po-date">${fromDate} – ${toDate}</span>
// // // // // //       </div>

// // // // // //       <img src="assets/shapes/arrow.svg" class="arrow-icon">
// // // // // //     `;

// // // // // //     row.addEventListener("click", () => {
// // // // // //       poInput.value = item.documentNumber;
// // // // // //       hideDropdown();
// // // // // //     });

// // // // // //     poList.appendChild(row);
// // // // // //   });

// // // // // //   poDropdown.style.display = "block";
// // // // // // }


// // // // // function renderList(list, q) {
// // // // //   poList.innerHTML = "";
// // // // //   poError.style.display = "none";

// // // // //   const items = list.slice(0, 10);
// // // // //   if (!items.length) {
// // // // //     // poList.innerHTML = `<div class="po-row">No matches found</div>`;
// // // // //     // poDropdown.style.display = "block";
// // // // //     hideDropdown();
// // // // //     return;
// // // // //   }
// // // // //     // if (!items.length) {
// // // // //     // hideDropdown();
// // // // //     // return;
// // // // //     // }



// // // // //   const regex = new RegExp(q, "ig");

// // // // //   items.forEach(item => {
// // // // //     const row = document.createElement("div");
// // // // //     row.className = "po-row";

// // // // //     const erp = item.orderNumber || "";
// // // // //     const doc = item.documentNumber || "";

// // // // //     const fromDate = formatDate(item.validFromDate);
// // // // //     const toDate = formatDate(item.validToDate);

// // // // //     // STATUS ICON LOGIC
// // // // //     let statusIcon = "";
// // // // //     if (item.poSetType === "SET") {
// // // // //       statusIcon = `<img src="assets/shapes/S.svg" class="status-icon"/>`;
// // // // //     } else if (item.poSetType === "NON-SET") {
// // // // //       statusIcon = `<img src="assets/icons/P.svg" class="status-icon"/>`;
// // // // //     }

// // // // //     row.innerHTML = `
// // // // //       <div class="po-left">
// // // // //         <span class="erp-label">ERP</span>

// // // // //         <span class="erp-number">${erp.replace(regex, m => `<mark>${m}</mark>`)}</span>

// // // // //         <span class="status-icon-wrapper">${statusIcon}</span>

// // // // //         <span class="separator">|</span>

// // // // //         <span class="po-doc">${doc.replace(regex, m => `<mark>${m}</mark>`)}</span>

// // // // //         <span class="po-date">${fromDate} – ${toDate}</span>
// // // // //       </div>

// // // // //       <img src="assets/shapes/arrow.svg" class="arrow-icon">
// // // // //     `;

// // // // //     row.addEventListener("click", () => {
// // // // //         poInput.value = item.documentNumber;

// // // // //         // Create chat bubble
// // // // //         const msgBox = document.getElementById("chatMessages");
// // // // //         const bubble = document.createElement("div");
// // // // //         bubble.className = "msg-bubble";
// // // // //         bubble.innerText = item.documentNumber;

// // // // //         msgBox.appendChild(bubble);

// // // // //         // scroll to bottom
// // // // //         msgBox.scrollTop = msgBox.scrollHeight;

// // // // //         hideDropdown();
// // // // //     });


// // // // //     poList.appendChild(row);
// // // // //   });

// // // // //   poDropdown.style.display = "block";
// // // // // }



// // // // //   poInput.addEventListener("input", () => {
// // // // //     clearTimeout(timer);

// // // // //     const q = poInput.value.trim();
// // // // //     if (!q) return hideDropdown();

// // // // //     timer = setTimeout(async () => {
// // // // //       const list = await fetchPO(q);

// // // // //       const filtered = list.filter(r =>
// // // // //         (r.documentNumber || "").toLowerCase().includes(q.toLowerCase())
// // // // //       );

// // // // //       renderList(filtered, q);
// // // // //     }, 300);
// // // // //   });

// // // // //   document.addEventListener("click", (e) => {
// // // // //     if (!e.target.closest(".chat-footer")) hideDropdown();
// // // // //   });

// // // // // });


// // // // // ------------------------------
// // // // // CHAT OPEN / CLOSE
// // // // // ------------------------------
// // // // const chatbot = document.getElementById("chatbot");
// // // // const openBtn = document.getElementById("openChat");
// // // // const closeBtn = document.getElementById("closeChat");

// // // // const categoryRow = document.querySelector(".category-row");
// // // // const suggestionsRow = document.querySelector(".suggestions");
// // // // // ------------------------------
// // // // // SEND BUTTON + ENTER TRIGGER
// // // // // ------------------------------
// // // // const sendBtn = document.querySelector(".send-btn");

// // // // function sendUserMessage() {
// // // //   const text = poInput.value.trim();
// // // //   if (text === "") return;

// // // //   // 🟣 ALWAYS hide categories & suggestions when message is sent
// // // //   if (categoryRow) categoryRow.style.display = "none";
// // // //   if (suggestionsRow) suggestionsRow.style.display = "none";

// // // //   // create user bubble
// // // //   const bubble = document.createElement("div");
// // // //   bubble.className = "msg-bubble";
// // // //   bubble.innerText = text;

// // // //   // animation
// // // //   bubble.style.opacity = 0;
// // // //   bubble.style.transform = "translateY(6px)";
// // // //   chatMessages.appendChild(bubble);

// // // //   requestAnimationFrame(() => {
// // // //     bubble.style.transition = "all 180ms ease";
// // // //     bubble.style.opacity = 1;
// // // //     bubble.style.transform = "translateY(0)";
// // // //   });

// // // //   // scroll to bottom
// // // //   chatMessages.scrollTop = chatMessages.scrollHeight;

// // // //   // clear input
// // // //   poInput.value = "";
// // // // }


// // // // // CLICK on send button
// // // // sendBtn.addEventListener("click", sendUserMessage);

// // // // // PRESS ENTER to send message
// // // // poInput.addEventListener("keydown", (e) => {
// // // //   if (e.key === "Enter") {
// // // //     e.preventDefault();
// // // //     sendUserMessage();
// // // //   }
// // // // });


// // // // // When opening chat
// // // // openBtn.onclick = () => {
// // // //   chatbot.classList.add("open");
// // // //   openBtn.style.display = "none";

// // // //   // Restore categories on open
// // // //   if (categoryRow) categoryRow.style.display = "flex";
// // // //   if (suggestionsRow) suggestionsRow.style.display = "flex";
// // // // };

// // // // // When closing chat
// // // // closeBtn.onclick = () => {
// // // //   chatbot.classList.remove("open");
// // // //   openBtn.style.display = "block";

// // // //   // Reset categories
// // // //   if (categoryRow) categoryRow.style.display = "flex";
// // // //   if (suggestionsRow) suggestionsRow.style.display = "flex";
// // // // };


// // // // // ------------------------------
// // // // // PO SUGGEST SYSTEM
// // // // // ------------------------------
// // // // document.addEventListener("DOMContentLoaded", () => {

// // // //   const AUTH_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM0NjcyMDgiLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNDg4ODA4LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.-m1vcfHonD-nXVnqSIWuIS_VpnTbdQbXFSA-1FKbhGJud9fFdCT3AnhwEdpKc0USojcb2YnZcAkiwu5OJWPfYQ";
// // // //   const API_URL = "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data";

// // // //   const poInput = document.getElementById("poInput");
// // // //   const poDropdown = document.getElementById("poDropdown");
// // // //   const poList = document.getElementById("poList");
// // // //   const poError = document.getElementById("poError");

// // // //   const chatMessages = document.getElementById("chatMessages");

// // // //   let timer = null;
// // // //   const sessionCache = new Map();

// // // //   function hideDropdown() {
// // // //     poDropdown.style.display = "none";
// // // //   }

// // // //   function showError(msg) {
// // // //     poList.innerHTML = "";
// // // //     poError.innerHTML = msg;
// // // //     poError.style.display = "block";
// // // //     poDropdown.style.display = "block";
// // // //   }

// // // //   function formatDate(dateString) {
// // // //     if (!dateString) return "";
// // // //     const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// // // //     const d = new Date(dateString);
// // // //     return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
// // // //   }

// // // //   async function fetchPO(query) {
// // // //     const key = query.toLowerCase();
// // // //     if (sessionCache.has(key)) return sessionCache.get(key);

// // // //     const body = {
// // // //       type: 1,
// // // //       pageNo: 1,
// // // //       pageSize: 200,
// // // //       search: query,
// // // //       status: "APPROVED",
// // // //       filter: {},
// // // //       isDashboardComment: 0,
// // // //       displayName: "VENDOR_PENDING_ALL"
// // // //     };

// // // //     try {
// // // //       const response = await fetch(API_URL, {
// // // //         method: "POST",
// // // //         headers: {
// // // //           "Content-Type": "application/json",
// // // //           "X-Auth-Token": AUTH_TOKEN,
// // // //           "X-Scope-Id": "vendor.purchase.shipment.create"
// // // //         },
// // // //         body: JSON.stringify(body)
// // // //       });

// // // //       const json = await response.json();
// // // //       const list = json?.data?.resource ?? [];

// // // //       sessionCache.set(key, list);
// // // //       return list;

// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       showError("❌ Unable to fetch PO suggestions.");
// // // //       return [];
// // // //     }
// // // //   }

// // // //   // RENDER PO LIST
// // // //   function renderList(list, q) {
// // // //     poList.innerHTML = "";
// // // //     poError.style.display = "none";

// // // //     const items = list.slice(0, 10);
// // // //     if (!items.length) {
// // // //       hideDropdown();
// // // //       return;
// // // //     }

// // // //     const regex = new RegExp(q, "ig");

// // // //     items.forEach(item => {
// // // //       const row = document.createElement("div");
// // // //       row.className = "po-row";

// // // //       const erp = item.orderNumber || "";
// // // //       const doc = item.documentNumber || "";
// // // //       const fromDate = formatDate(item.validFromDate);
// // // //       const toDate = formatDate(item.validToDate);

// // // //       let statusIcon = "";
// // // //       if (item.poSetType === "SET") {
// // // //         statusIcon = `<img src="assets/shapes/S.svg" class="status-icon"/>`;
// // // //       } else {
// // // //         statusIcon = `<img src="assets/shapes/N.svg" class="status-icon"/>`;
// // // //       }

// // // //       row.innerHTML = `
// // // //         <div class="po-left">
// // // //           <span class="erp-label">ERP</span>
// // // //           <span class="erp-number">${erp.replace(regex, m => `<mark>${m}</mark>`)}</span>
// // // //           <span class="status-icon-wrapper">${statusIcon}</span>
// // // //           <span class="separator">|</span>
// // // //           <span class="po-doc">${doc.replace(regex, m => `<mark>${m}</mark>`)}</span>
// // // //           <span class="po-date">${fromDate} – ${toDate}</span>
// // // //         </div>
// // // //         <img src="assets/shapes/arrow.svg" class="arrow-icon">
// // // //       `;

// // // //       // -----------------------
// // // //       // ON CLICK → select PO
// // // //       // -----------------------
// // // //       row.addEventListener("click", () => {
// // // //         // fill input only briefly
// // // //         poInput.value = item.documentNumber;

// // // //         // hide categories & chips
// // // //         if (categoryRow) categoryRow.style.display = "none";
// // // //         if (suggestionsRow) suggestionsRow.style.display = "none";

// // // //         // create a chat bubble (right aligned)
// // // //         const bubble = document.createElement("div");
// // // //         bubble.className = "msg-bubble";
// // // //         bubble.innerText = item.documentNumber;

// // // //         // animation
// // // //         bubble.style.opacity = 0;
// // // //         bubble.style.transform = "translateY(6px)";
// // // //         chatMessages.appendChild(bubble);

// // // //         requestAnimationFrame(() => {
// // // //           bubble.style.transition = "all 180ms ease";
// // // //           bubble.style.opacity = 1;
// // // //           bubble.style.transform = "translateY(0)";
// // // //         });

// // // //         // scroll to bottom
// // // //         chatMessages.scrollTop = chatMessages.scrollHeight;

// // // //         // clear input (VERY IMPORTANT)
// // // //         poInput.value = "";
// // // //         poInput.placeholder = "Ask anything. Track PO, create ASN or view Gate Entry or more...";

// // // //         hideDropdown();
// // // //       });

// // // //       poList.appendChild(row);
// // // //     });

// // // //     poDropdown.style.display = "block";
// // // //   }

// // // //   // INPUT LISTENER
// // // //   poInput.addEventListener("input", () => {
// // // //     clearTimeout(timer);

// // // //     const q = poInput.value.trim();
// // // //     if (!q) return hideDropdown();

// // // //     timer = setTimeout(async () => {
// // // //       const list = await fetchPO(q);

// // // //       const filtered = list.filter(r =>
// // // //         (r.documentNumber || "").toLowerCase().includes(q.toLowerCase())
// // // //       );

// // // //       renderList(filtered, q);
// // // //     }, 300);
// // // //   });

// // // //   // CLICK OUTSIDE → hide dropdown
// // // //   document.addEventListener("click", (e) => {
// // // //     if (!e.target.closest(".chat-footer")) hideDropdown();
// // // //   });

// // // // });



// /*******************************
//  CHAT OPEN / CLOSE
// *******************************/
// const chatbot = document.getElementById("chatbot");
// const openBtn = document.getElementById("openChat");
// const closeBtn = document.getElementById("closeChat");

// const categoryRow = document.querySelector(".category-row");
// const suggestionsRow = document.querySelector(".suggestions");

// openBtn.onclick = () => {
//   chatbot.classList.add("open");
//   openBtn.style.display = "none";

//   categoryRow.style.display = "flex";
//   suggestionsRow.style.display = "flex";
// };

// closeBtn.onclick = () => {
//   chatbot.classList.remove("open");
//   openBtn.style.display = "block";

//   categoryRow.style.display = "flex";
//   suggestionsRow.style.display = "flex";
// };

// /**********************************
//  GLOBAL DOM VARIABLES
// **********************************/
// const poInput = document.getElementById("poInput");
// const chatMessages = document.getElementById("chatMessages");
// const sendBtn = document.querySelector(".send-btn");
// const poDropdown = document.getElementById("poDropdown");
// const poList = document.getElementById("poList");
// const poError = document.getElementById("poError");


// /**********************************
//  UNIVERSAL DROPDOWN HIDE FUNCTION
// **********************************/
// function hideDropdown() {
//   poDropdown.style.display = "none";
// }


// /**********************************
//  SEND MESSAGE FUNCTION (AUTO HIDE EVERYTHING)
// **********************************/
// function sendUserMessage() {
//   const text = poInput.value.trim();
//   if (text === "") return;

//   hideDropdown();  // 🔥 MOST IMPORTANT

//   categoryRow.style.display = "none";
//   suggestionsRow.style.display = "none";

//   const bubble = document.createElement("div");
//   bubble.className = "msg-bubble";
//   bubble.innerText = text;

//   // animation
//   bubble.style.opacity = 0;
//   bubble.style.transform = "translateY(6px)";
//   chatMessages.appendChild(bubble);

//   requestAnimationFrame(() => {
//     bubble.style.transition = "all 180ms ease";
//     bubble.style.opacity = 1;
//     bubble.style.transform = "translateY(0)";
//   });

//   chatMessages.scrollTop = chatMessages.scrollHeight;
//   poInput.value = "";
// }


// /**********************************
//  SEND BTN + ENTER KEY
// **********************************/
// sendBtn.addEventListener("click", sendUserMessage);
// poInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     sendUserMessage();
//   }
// });


// /**********************************
//  PO SUGGESTION SYSTEM
// **********************************/
// document.addEventListener("DOMContentLoaded", () => {

//   const AUTH_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM1MjU0ODciLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNTQ3MDg3LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.8ZwWvCN99gwPbEVcKi37bf3MlgIKpmegO4nryGee90cDF0c13_qGFb_fL26Fj7hVC3Kvsz2d8MN1SwNLiVrOPA";
//   const API_URL = "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data";

//   let timer = null;
//   const sessionCache = new Map();

//   function showError(msg) {
//     poList.innerHTML = "";
//     poError.innerHTML = msg;
//     poError.style.display = "block";
//     poDropdown.style.display = "block";
//   }

//   function formatDate(dateString) {
//     if (!dateString) return "";
//     const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//     const d = new Date(dateString);
//     return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
//   }

//   async function fetchPO(query) {
//     const key = query.toLowerCase();
//     if (sessionCache.has(key)) return sessionCache.get(key);

//     const body = {
//       type: 1,
//       pageNo: 1,
//       pageSize: 200,
//       search: query,
//       status: "APPROVED",
//       filter: {},
//       isDashboardComment: 0,
//       displayName: "VENDOR_PENDING_ALL"
//     };

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Auth-Token": AUTH_TOKEN,
//           "X-Scope-Id": "vendor.purchase.shipment.create"
//         },
//         body: JSON.stringify(body)
//       });

//       const json = await response.json();
//       const list = json?.data?.resource ?? [];

//       sessionCache.set(key, list);
//       return list;

//     } catch (error) {
//       console.error(error);
//       showError("❌ Unable to fetch PO suggestions.");
//       return [];
//     }
//   }


//   /**********************************
//    RENDER PO LIST
//   **********************************/
//   function renderList(list, q) {
//     poList.innerHTML = "";
//     poError.style.display = "none";

//     const items = list.slice(0, 10);
//     if (!items.length) {
//       hideDropdown();
//       return;
//     }

//     const regex = new RegExp(q, "ig");

//     items.forEach(item => {
//       const row = document.createElement("div");
//       row.className = "po-row";

//       const erp = item.orderNumber || "";
//       const doc = item.documentNumber || "";
//       const fromDate = formatDate(item.validFromDate);
//       const toDate = formatDate(item.validToDate);

//       const statusIcon =
//         item.poSetType === "SET"
//           ? `<img src="assets/shapes/S.svg" class="status-icon"/>`
//           : `<img src="assets/shapes/N.svg" class="status-icon"/>`;

//       row.innerHTML = `
//         <div class="po-left">
//           <span class="erp-label">ERP</span>
//           <span class="erp-number">${erp.replace(regex, m => `<mark>${m}</mark>`)}</span>
//           <span class="status-icon-wrapper">${statusIcon}</span>
//           <span class="separator">|</span>
//           <span class="po-doc">${doc.replace(regex, m => `<mark>${m}</mark>`)}</span>
//           <span class="po-date">${fromDate} – ${toDate}</span>
//         </div>
//         <img src="assets/shapes/arrow.svg" class="arrow-icon">
//       `;

//       row.addEventListener("click", () => {
//         poInput.value = item.documentNumber;

//         categoryRow.style.display = "none";
//         suggestionsRow.style.display = "none";

//         const bubble = document.createElement("div");
//         bubble.className = "msg-bubble";
//         bubble.innerText = item.documentNumber;

//         bubble.style.opacity = 0;
//         bubble.style.transform = "translateY(6px)";
//         chatMessages.appendChild(bubble);

//         requestAnimationFrame(() => {
//           bubble.style.transition = "all 180ms ease";
//           bubble.style.opacity = 1;
//           bubble.style.transform = "translateY(0)";
//         });

//         chatMessages.scrollTop = chatMessages.scrollHeight;

//         poInput.value = "";
//         hideDropdown();
//       });

//       poList.appendChild(row);
//     });

//     poDropdown.style.display = "block";
//   }

  

//   /**********************************
//    INPUT LISTENER
//   **********************************/
//   poInput.addEventListener("input", () => {
//     clearTimeout(timer);

//     const q = poInput.value.trim();
//     if (!q) return hideDropdown();

//     timer = setTimeout(async () => {
//       const list = await fetchPO(q);

//       const filtered = list.filter(r =>
//         (r.documentNumber || "").toLowerCase().includes(q.toLowerCase())
//       );

//       renderList(filtered, q);
//     }, 300);
//   });


//   /**********************************
//    CLICK OUTSIDE
//   **********************************/
//   document.addEventListener("click", (e) => {
//     if (!e.target.closest(".chat-footer")) hideDropdown();
//   });

// });




/*******************************
 CHAT OPEN / CLOSE
*******************************/
const chatbot = document.getElementById("chatbot");
const openBtn = document.getElementById("openChat");
const closeBtn = document.getElementById("closeChat");

const categoryRow = document.querySelector(".category-row");
const suggestionsRow = document.querySelector(".suggestions");

openBtn.onclick = () => {
  chatbot.classList.add("open");
  openBtn.style.display = "none";
  categoryRow.style.display = "flex";
  suggestionsRow.style.display = "flex";
};

closeBtn.onclick = () => {
  chatbot.classList.remove("open");
  openBtn.style.display = "block";
  categoryRow.style.display = "flex";
  suggestionsRow.style.display = "flex";
};


/*******************************
 GLOBAL DOM
*******************************/
const poInput = document.getElementById("poInput");
const chatMessages = document.getElementById("chatMessages");
const sendBtn = document.querySelector(".send-btn");

const poDropdown = document.getElementById("poDropdown");
const poList = document.getElementById("poList");
const poError = document.getElementById("poError");

const AUTH_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM1MjU0ODciLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNTQ3MDg3LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.8ZwWvCN99gwPbEVcKi37bf3MlgIKpmegO4nryGee90cDF0c13_qGFb_fL26Fj7hVC3Kvsz2d8MN1SwNLiVrOPA";  // REPLACE with real token if needed


/*******************************
 HIDE DROPDOWN
*******************************/
function hideDropdown() {
  poDropdown.style.display = "none";
}


/*******************************
 USER SEND MESSAGE
*******************************/
function sendUserMessage() {
  const text = poInput.value.trim();
  if (text === "") return;

  hideDropdown();
  categoryRow.style.display = "none";
  suggestionsRow.style.display = "none";

  // USER BUBBLE
  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  bubble.innerText = text;
  bubble.style.opacity = 0;
  bubble.style.transform = "translateY(6px)";
  chatMessages.appendChild(bubble);

  requestAnimationFrame(() => {
    bubble.style.transition = "all 180ms ease";
    bubble.style.opacity = 1;
    bubble.style.transform = "translateY(0)";
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
  poInput.value = "";

  // 🔥 Fetch PO details
  fetchPODetails(text);
}


// CLICK SEND
sendBtn.addEventListener("click", sendUserMessage);

// PRESS ENTER
poInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendUserMessage();
  }
});


/*******************************
 PO CARD GENERATOR
*******************************/
// function generatePOCard(po) {
//   const card = document.createElement("div");
//   card.className = "bot-po-card";

//   card.innerHTML = `
//         <h3>Here is the details of the provided ERP number :</h3>

//         <div class="po-section-header">ERP Number</div>
//         <div class="po-bold-value">
//             ${po.documentNumber}
//             <span class="blue-S-badge">S</span>
//         </div>

//         <div class="po-grid-2">

//             <div>
//                 <span class="po-small-label">Document Number</span>
//                 <span class="po-small-value">${po.documentNumber}</span>
//             </div>

//             <div>
//                 <span class="po-small-label">Order Date</span>
//                 <span class="po-small-value">${po.poDate}</span>
//             </div>

//             <div>
//                 <span class="po-small-label">PO Amount</span>
//                 <span class="po-small-value">${po.poAmount}</span>
//             </div>

//             <div>
//                 <span class="po-small-label">Vendor Name</span>
//                 <span class="po-small-value">${po.vendorName || "N/A"}</span>
//             </div>

//             <div>
//                 <span class="po-small-label">No. of ASN Created</span>
//                 <span class="po-small-value">${po.asnCount ?? 0}</span>
//             </div>

//             <div>
//                 <span class="po-small-label">PO Qty.</span>
//                 <span class="po-small-value">${po.poQty}</span>
//             </div>

//             <div>
//                 <span class="po-small-label">Remaining Qty.</span>
//                 <span class="po-small-value">${po.poQty}</span>
//             </div>

//         </div>

//         <div class="sep-line"></div>

//         <div class="bot-po-footer-text">
//             Would you like to Create ASN of the provided PO ?
//         </div>
//     `;

//   return card;
// }

function generatePOCard(po) {

  const statusIcon = po.poSetType === "SET"
      ? `<img src="assets/shapes/S.svg" class="po-status-icon">`
      : `<img src="assets/shapes/N.svg" class="po-status-icon">`;

  const card = document.createElement("div");
  card.className = "bot-po-card";

  card.innerHTML = `
        <h3>Here are the details of the provided ERP number :</h3>

        <div class="po-section-header">ERP Number</div>
        <div class="po-bold-value icon-flex">
            ${po.documentNumber}
            ${statusIcon}
        </div>

        <div class="po-grid-2">

            
            <div>
                <span class="po-small-label">Document Number</span>
                <span class="po-small-value">${po.documentNumber}</span>
            </div>

            <div>
                <span class="po-small-label">Order Date</span>
                <span class="po-small-value">${po.poDate}</span>
            </div>

            <div>
                <span class="po-small-label">PO Amount</span>
                <span class="po-small-value">${po.poAmount}</span>
            </div>

            <div>
                <span class="po-small-label">Vendor Name</span>
                <span class="po-small-value">${po.vendorName || "N/A"}</span>
            </div>

            <div>
                <span class="po-small-label">No. of ASN Created</span>
                <span class="po-small-value">${po.asnCount ?? 0}</span>
            </div>

            <div>
                <span class="po-small-label">PO Qty.</span>
                <span class="po-small-value">${po.poQty}</span>
            </div>

            <div>
                <span class="po-small-label">Remaining Qty.</span>
                <span class="po-small-value">${po.poQty}</span>
            </div>

        </div>

        <div class="sep-line"></div>

        <div class="bot-po-footer-text">
            Would you like to Create ASN of the provided PO ?
        </div>
    `;

  return card;
}




/*******************************
 FETCH PO DETAILS (MAIN LOGIC)
*******************************/
async function fetchPODetails(docNum) {
  try {
    const res = await fetch(
      "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": AUTH_TOKEN,
          "X-Scope-Id": "vendor.purchase.shipment.create"
        },
        body: JSON.stringify({
          type: 1,
          pageNo: 1,
          pageSize: 200,
          search: docNum,
          status: "APPROVED",
          filter: {},
          isDashboardComment: 0,
          displayName: "VENDOR_PENDING_ALL"
        })
      }
    );

    const json = await res.json();
    const list = json?.resource || json?.data?.resource || [];

    // FIND THE PO
    const po = list.find(p => p.documentNumber === docNum);

    if (!po) {
      console.log("❌ PO not found");
      return;
    }

    // CREATE & APPEND CARD
    // const card = generatePOCard(po);
    // chatMessages.appendChild(card);
    // chatMessages.scrollTop = chatMessages.scrollHeight;
    // CREATE & APPEND CARD
    const card = generatePOCard(po);

    const wrapper = document.createElement("div");
    wrapper.className = "bot-message-wrapper";
    wrapper.appendChild(card);

    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;


  } catch (err) {
    console.error("PO detail fetch error:", err);
  }
}



/*******************************
 PO SUGGESTION SYSTEM
*******************************/
document.addEventListener("DOMContentLoaded", () => {

  const API_URL = "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data";

  let timer = null;
  const sessionCache = new Map();

  function showError(msg) {
    poList.innerHTML = "";
    poError.innerHTML = msg;
    poError.style.display = "block";
    poDropdown.style.display = "block";
  }

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
      const list = json?.resource || json?.data?.resource || [];

      sessionCache.set(key, list);
      return list;

    } catch {
      showError("❌ Unable to fetch PO suggestions.");
      return [];
    }
  }


  /**********************************
   RENDER PO SUGGESTION LIST
  **********************************/
  function renderList(list, q) {
    poList.innerHTML = "";
    poError.style.display = "none";

    const items = list.slice(0, 10);
    if (!items.length) {
      hideDropdown();
      return;
    }

    const regex = new RegExp(q, "ig");

    items.forEach(item => {
      const row = document.createElement("div");
      row.className = "po-row";

      const doc = item.documentNumber || "";
      const erp = item.orderNumber || "";
      const fromDate = formatDate(item.validFromDate);
      const toDate = formatDate(item.validToDate);

      const statusIcon =
        item.poSetType === "SET"
          ? `<img src="assets/shapes/S.svg" class="status-icon"/>`
          : `<img src="assets/shapes/N.svg" class="status-icon"/>`;

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

      // 📌 When selecting PO from dropdown
      row.addEventListener("click", () => {
        poInput.value = doc;
        hideDropdown();
        sendUserMessage();
      });

      poList.appendChild(row);
    });

    poDropdown.style.display = "block";
  }


  /**********************************
   INPUT LISTENER
  **********************************/
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


  /**********************************
   CLICK OUTSIDE
  **********************************/
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".chat-footer")) hideDropdown();
  });

});




