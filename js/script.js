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


// /*******************************
//  GLOBAL DOM
// *******************************/
// const poInput = document.getElementById("poInput");
// const chatMessages = document.getElementById("chatMessages");
// const sendBtn = document.querySelector(".send-btn");

// const poDropdown = document.getElementById("poDropdown");
// const poList = document.getElementById("poList");
// const poError = document.getElementById("poError");

// const AUTH_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM1NDc0MTkiLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNTY5MDE5LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.w79nNsZLR53yhtYQLs9CcqTbaqJuX9dFEFJ7AxYHoxRF__IR9TyWdhhKmv4FJCF8FGgV4HF4QHZUt-uzwmcmDQ";  // REPLACE with real token if needed


// /*******************************
//  HIDE DROPDOWN
// *******************************/
// function hideDropdown() {
//   poDropdown.style.display = "none";
// }


// /*******************************
//  USER SEND MESSAGE
// *******************************/
// function sendUserMessage() {
//   const text = poInput.value.trim();
//   if (text === "") return;

//   hideDropdown();
//   categoryRow.style.display = "none";
//   suggestionsRow.style.display = "none";

//   // USER BUBBLE
//   const bubble = document.createElement("div");
//   bubble.className = "msg-bubble";
//   bubble.innerText = text;
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

//   // 🔥 Fetch PO details
//   fetchPODetails(text);
// }


// // CLICK SEND
// sendBtn.addEventListener("click", sendUserMessage);

// // PRESS ENTER
// poInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     sendUserMessage();
//   }
// });

// /*******************************
//  PO CARD GENERATOR
// *******************************/
// function generatePOCard(po) {

//   const statusIcon = po.poSetType === "S"
//     ? `<img src="assets/shapes/S.svg" class="po-status-icon">`
//     : `<img src="assets/shapes/N.svg" class="po-status-icon">`;

//   const card = document.createElement("div");
//   card.className = "bot-po-card";

//   card.innerHTML = `
//         <h3>Here are the details of the provided ERP number :</h3>

//         <div class="po-section-header">ERP Number</div>
//         <div class="po-bold-value icon-flex">
//             ${po.documentNumber}
//             ${statusIcon}
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

//            <div>
//                 <span class="po-small-label">PO Validity</span>
//                 <span class="po-small-value">
//                     ${po.validFromDate || "N/A"} - ${po.validToDate || "N/A"}
//                 </span>
//             </div>


//             <div>
//                 <span class="po-small-label">PO Qty.</span>
//                 <span class="po-small-value">${po.poQty}</span>
//             </div>

//             <div>
//                 <span class="po-small-label">Remaining Qty.</span>
//                 <span class="po-small-value">${po.remainingQty}</span>
//             </div>

//         </div>

//         <div class="sep-line"></div>

//         <div class="bot-po-footer-text">
//             Would you like to Create ASN of the provided PO ?
//         </div>
//     `;

//   return card;
// }

// function generateStandaloneButtons() {

//   const wrapper = document.createElement("div");
//   wrapper.className = "bot-button-wrapper-alone";

//   wrapper.innerHTML = `
//         <button class="bot-button-alone" id="btn-initiate">
//             <img src="assets/shapes/plus.svg">
//             Yes, Initiate the ASN for me
//         </button>

//         <button class="bot-button-alone" id="btn-create-all">
//             <img src="assets/shapes/plus.svg">
//             Create ASN for all the remaining qty.
//         </button>

//         <button class="bot-button-alone navigate-btn-alone" id="btn-navigate">
//             Navigate to Purchase Indent 
//             <img src="assets/shapes/arrow.svg">
//         </button>
//     `;

//   return wrapper;
// }


// /*******************************
//  FETCH PO DETAILS (FINAL WORKING)
// *******************************/
// async function fetchPODetails(docNum) {
//   try {

//     // STEP 1 → search PO (to get orderId)
//     const listRes = await fetch(
//       "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Auth-Token": AUTH_TOKEN,
//           "X-Scope-Id": "vendor.purchase.shipment.create"
//         },
//         body: JSON.stringify({
//           type: 1,
//           pageNo: 1,
//           pageSize: 200,
//           search: docNum,
//           status: "APPROVED",
//           filter: {},
//           isDashboardComment: 0,
//           displayName: "VENDOR_PENDING_ALL"
//         })
//       }
//     );

//     const listJson = await listRes.json();
//     const list = listJson?.resource || listJson?.data?.resource || [];

//     const po = list.find(p => p.documentNumber === docNum);

//     if (!po) {
//       console.log("PO not found.");
//       return;
//     }

//     console.log("PO FOUND:", po);

//     // STEP 2 → fetch PO details from your API
//     const detailRes = await fetch(
//       "https://qaserver.supplymint.com/vendorportal/vendorpo/get/poDetail",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Auth-Token": AUTH_TOKEN,
//           "X-Scope-Id": "vendor.purchase.shipment.create"
//         },
//         body: JSON.stringify({
//           detailType: "set",
//           orderId: po.orderId,
//           poType: "adhoc",
//           setHeaderId: "",
//           version: "v2",
//           dataType: "create"
//         })
//       }
//     );

//     const detailJson = await detailRes.json();
//     console.log("DETAIL API RESPONSE:", detailJson);

//     const r = detailJson?.data?.resource;
//     const item = r.poDetails?.[0] || {};
//     if (!r) {
//       console.log("No resource returned.");
//       return;
//     }

//     const mappedPO = {
//       documentNumber: r.documentNumber,
//       poSetType: item.setType,
//       poDate: r.poDate,
//       poAmount: r.poAmount,
//       validFromDate: r.validFromDate,
//       validToDate: r.validToDate,
//       poQty: r.poQty,
//       remainingQty: item.availableQty
//     };


//     console.log("MAPPED PO:", mappedPO);

//     // UI CARD
//     const card = generatePOCard(mappedPO);

//     const wrapper = document.createElement("div");
//     wrapper.className = "bot-message-wrapper";
//     wrapper.appendChild(card);

//     chatMessages.appendChild(wrapper);

//     const btns = generateStandaloneButtons();
//     chatMessages.appendChild(btns);

//     chatMessages.scrollTop = chatMessages.scrollHeight;

//   } catch (err) {
//     console.error("ERROR:", err);
//   }
// }



// /*******************************
//  PO SUGGESTION SYSTEM
// *******************************/
// document.addEventListener("DOMContentLoaded", () => {

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
//     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
//       const list = json?.resource || json?.data?.resource || [];

//       sessionCache.set(key, list);
//       return list;

//     } catch {
//       showError("❌ Unable to fetch PO suggestions.");
//       return [];
//     }
//   }


//   /**********************************
//    RENDER PO SUGGESTION LIST
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

//       const doc = item.documentNumber || "";
//       const erp = item.orderNumber || "";
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

//       // 📌 When selecting PO from dropdown
//       row.addEventListener("click", () => {
//         poInput.value = doc;
//         hideDropdown();
//         sendUserMessage();
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

const AUTH_TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM2MTEyMzkiLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNjMyODM5LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.RUwus0mEAa1noATLM5j3KOP4F_Xwan6PDHkdKtxrq8imqMfXRZJ1O8vp-vgQrWPbQX6ft7aeTY6E9jAdArpihQ";


/*******************************
 UTIL BUBBLE MAKERS
*******************************/
function addUserBubble(text) {
  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  bubble.innerText = text;

  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotBubble(text) {
  const bubble = document.createElement("div");
  bubble.className = "msg-bubble bot-bubble";
  bubble.innerText = text;

  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}


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

  addUserBubble(text);

  poInput.value = "";

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
 PO CARD CREATOR
*******************************/
function generatePOCard(po) {
  const statusIcon =
    po.poSetType === "S"
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
                <span class="po-small-label">PO Validity</span>
                <span class="po-small-value">
                    ${po.validFromDate || "N/A"} - ${po.validToDate || "N/A"}
                </span>
            </div>

            <div>
                <span class="po-small-label">PO Qty.</span>
                <span class="po-small-value">${po.poQty}</span>
            </div>

            <div>
                <span class="po-small-label">Remaining Qty.</span>
                <span class="po-small-value">${po.remainingQty}</span>
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
 CARD BUTTONS
*******************************/
function generateStandaloneButtons() {
  const wrapper = document.createElement("div");
  wrapper.className = "bot-button-wrapper-alone";

  wrapper.innerHTML = `
        <button class="bot-button-alone" id="btn-initiate">
            <img src="assets/shapes/plus.svg">
            Yes, Initiate the ASN for me
        </button>

        <button class="bot-button-alone" id="btn-create-all">
            <img src="assets/shapes/plus.svg">
            Create ASN for all the remaining qty.
        </button>

        <button class="bot-button-alone navigate-btn-alone" id="btn-navigate">
            Navigate to Purchase Indent 
            <img src="assets/shapes/arrow.svg">
        </button>
    `;

  return wrapper;
}


/*******************************
 FETCH PO DETAILS (FINAL WORKING)
*******************************/
async function fetchPODetails(docNum) {
  try {
    // STEP 1 → get orderId
    const listRes = await fetch(
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

    const listJson = await listRes.json();
    const list = listJson?.resource || listJson?.data?.resource || [];

    const po = list.find((p) => p.documentNumber === docNum);
    if (!po) return;

    // STEP 2 → fetch PO detail
    const detailRes = await fetch(
      "https://qaserver.supplymint.com/vendorportal/vendorpo/get/poDetail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": AUTH_TOKEN,
          "X-Scope-Id": "vendor.purchase.shipment.create"
        },
        body: JSON.stringify({
          detailType: "set",
          orderId: po.orderId,
          poType: "adhoc",
          setHeaderId: "",
          version: "v2",
          dataType: "create"
        })
      }
    );

    const detailJson = await detailRes.json();
    const r = detailJson?.data?.resource;
    const item = r.poDetails?.[0] || {};

    const mappedPO = {
      documentNumber: r.documentNumber,
      poSetType: item.setType, // FIXED (S/N)
      poDate: r.poDate,
      poAmount: r.poAmount,
      validFromDate: r.validFromDate,
      validToDate: r.validToDate,
      poQty: r.poQty,
      remainingQty: r.pendingQty
    };

    // RENDER CARD
    const card = generatePOCard(mappedPO);

    const wrapper = document.createElement("div");
    wrapper.className = "bot-message-wrapper";
    wrapper.appendChild(card);

    chatMessages.appendChild(wrapper);

    // BUTTON ROW
    const btns = generateStandaloneButtons();
    chatMessages.appendChild(btns);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    /*******************************
     BUTTON CLICK → CHAT BUBBLE
    *******************************/
    setTimeout(() => {
      const btnInit = document.getElementById("btn-initiate");
      const btnCreateAll = document.getElementById("btn-create-all");
      const btnNavigate = document.getElementById("btn-navigate");

      btnInit.onclick = () => addUserBubble("Yes, Initiate the ASN for me");
      btnCreateAll.onclick = () =>
        addUserBubble("Create ASN for all the remaining qty.");
      btnNavigate.onclick = () => addUserBubble("Navigate to Purchase Indent");
    }, 100);
  } catch (err) {
    console.error("ERROR:", err);
  }
}


/*******************************
 PO SUGGESTION SYSTEM
*******************************/
document.addEventListener("DOMContentLoaded", () => {
  const API_URL =
    "https://smbackendqa.supplymint.com/purchase/order/get/pending/order/data";

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
    const d = new Date(dateString);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
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

  function renderList(list, q) {
    poList.innerHTML = "";
    poError.style.display = "none";

    const items = list.slice(0, 10);
    if (!items.length) {
      hideDropdown();
      return;
    }

    const regex = new RegExp(q, "ig");

    items.forEach((item) => {
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
          <span class="erp-number">${erp.replace(regex, (m) => `<mark>${m}</mark>`)}</span>
          <span class="status-icon-wrapper">${statusIcon}</span>
          <span class="separator">|</span>
          <span class="po-doc">${doc.replace(regex, (m) => `<mark>${m}</mark>`)}</span>
          <span class="po-date">${fromDate} – ${toDate}</span>
        </div>
        <img src="assets/shapes/arrow.svg" class="arrow-icon">
      `;

      row.addEventListener("click", () => {
        poInput.value = doc;
        hideDropdown();
        sendUserMessage();
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

      const filtered = list.filter((r) =>
        (r.documentNumber || "")
          .toLowerCase()
          .includes(q.toLowerCase())
      );

      renderList(filtered, q);
    }, 300);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".chat-footer")) hideDropdown();
  });
});

