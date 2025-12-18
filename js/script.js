
/*******************************
 CHAT OPEN / CLOSE
*******************************/
const chatbot = document.getElementById("chatbot");
const openBtn = document.getElementById("openChat");
const closeBtn = document.getElementById("closeChat");

const categoryRow = document.querySelector(".category-row");
const suggestionsRow = document.querySelector(".suggestions");

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

// openBtn.onclick = () => {
//   chatbot.classList.add("open");
//   openBtn.style.display = "none";

//   // Show starting UI ONLY before chat starts
//   if (!isChatStarted) {
//     categoryRow.style.display = "flex";
//     suggestionsRow.style.display = "flex";
//   }
// };

closeBtn.onclick = () => {
  chatbot.classList.remove("open");
  openBtn.style.display = "block";
};


let isChatStarted = false;

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
  "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDEiLCJYLVRFTkFOVC1JRCI6ImQxNmMxNDk5MTk0MzNkYmNkNGJhNWMzMjU1YWU4ZmUxYzkwNmE5OWI5NjdmNTE5M2YxOWVjZDRiZDRiNTE5MDEiLCJCVUNLRVQiOiJ0Y2xvdWQtc3VwcGx5bWludC1kZXZlbG9wLWNvbSIsImlzcyI6IlN1cHBseU1pbnQiLCJ0b2tlblRpbWUiOiIxNzY2MDQwMjcxIiwibW9iaWxlVmVyaWZpZWQiOjEsImxhbmd1YWdlIjoiZW4iLCJvaWQiOjk1OCwidXNlckFzQWRtaW4iOnRydWUsImdzdGluIjpudWxsLCJzZXNzaW9uTm8iOiIxIiwib3JnSWQiOiI5NTgiLCJkZWxlZ2F0ZU9yZ0lkIjowLCJvY29kZSI6IjIwMjA1NTQ3LWU4NmUtNDJiNS1hYzBmLTQ0ZTEwYzM5ZmU3MyIsInVUeXBlIjoiVkVORE9SIiwiaXBhIjoiSVBBIiwiZnVuY3Rpb25UeXBlIjoiREVGQVVMVF9GVU5DVElPTiIsImV4cCI6MTc2NjA2MTg3MSwianRpIjo5ODAsImRlbGVnYXRlRW50SWQiOjAsIm9yZ05hbWUiOiJEZW1vciBUQ2xvdWQiLCJjb3JlT3JnSUQiOiI5NTgiLCJzbENvZGUiOiI4OTI2NiIsIm5ld01vZHVsZVN0cnVjdHVyZSI6MCwicHJuIjoiZmFzaGlvbmRlbW8iLCJlY29kZSI6IjIwMjA1NTQ3LWU4NmUtNDJiNS1hYzBmLTQ0ZTEwYzM5ZmU3MyIsImF1ZCI6IkZhc2hpb24gIERlbW8iLCJzY2hlbWFFbnRJRCI6IjEiLCJlbWFpbFZlcmlmaWVkIjoxLCJmaXJzdE5hbWUiOiJGYXNoaW9uIiwiZW5hbWUiOiJEZW1vciBUQ2xvdWQiLCJzdWJVc2VyVHlwZSI6IlYiLCJ3ZWJJZCI6bnVsbCwidGVuYW50T3JnSUQiOiI5NTgiLCJkZXZpY2VTb3VyY2UiOiJXRUIiLCJpc01lcmdlRWxpZ2libGUiOjAsInNjaGVtYU9yZ0lEIjoiMiIsIkVOVF9UWVBFIjoiVkVORE9SIiwibG9naW5Tb3VyY2UiOiJTRUxGIiwib3JnX2xvZ28iOiJodHRwczovL2Fzc2V0cy1zdXBwbHltaW50LWNvbS5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vb3JnX2Fzc2V0cy9pbWdfcGxhY2Vob2xkZXIvcHJvZmlsZVBsYWNlaG9sZGVyLnN2ZyJ9.0Nknj_mySvibBuKC7PGZqdYV5Z5lYFFVTcHe62Qc6ZmxkdxlqFWZVut_nJyYG_vwuBW1rAg6sIA2CdIA3txjyA";


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
 RAG BACKEND API CALL
*******************************/
// async function callRAGBackend(userQuery) {
//   try {
//     const response = await fetch("http://127.0.0.1:8000/rag/ask", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ query: userQuery }),
//     });

//     const data = await response.json();
//     return data.answer || "⚠️ No answer received.";
//   } catch (err) {
//     console.error("RAG ERROR:", err);
//     return "⚠️ Unable to reach the server.";
//   }
// }

/*******************************
 HIDE DROPDOWN
*******************************/
function hideDropdown() {
  poDropdown.style.display = "none";
}


/*******************************
 USER SEND MESSAGE
*******************************/
// function sendUserMessage() {
//   const text = poInput.value.trim();
//   if (text === "") return;

//   hideDropdown();
//   categoryRow.style.display = "none";
//   suggestionsRow.style.display = "none";
//   isChatStarted = true;

//   addUserBubble(text);

//   poInput.value = "";

//   fetchPODetails(text);
// }


// async function sendUserMessage() {
//   const text = poInput.value.trim();
//   if (!text) return;

//   addUserBubble(text);
//   poInput.value = "";

//   // 🔥 If ASN mode is active → send to direct ASN backend
//   if (window.asnMode === true) {
//       callASNBackend(text, window.activePO.documentNumber);
//       return;
//   }

//   // Normal flow (PO details)
//   categoryRow.style.display = "none";
//   suggestionsRow.style.display = "none";
//   isChatStarted = true;

//   fetchPODetails(text);
// }


async function sendUserMessage() {
  const text = poInput.value.trim();
  if (!text) return;

  addUserBubble(text);
  poInput.value = "";

   // 🟣 Hide chips + categories ALWAYS after first message
  categoryRow.style.display = "none";
  suggestionsRow.style.display = "none";
  isChatStarted = true;

  // 1️⃣ ASN MODE → backend direct ASN
  if (window.asnMode === true) {
      callASNBackend(text, window.activePO.documentNumber);
      return;
  }

  // 2️⃣ If it's a PO → run PO flow
  if (isLikelyPO(text)) {
      fetchPODetails(text);
      return;
  }

  // 3️⃣ Otherwise → it's a normal RAG question
  callRagBackend(text);
}


/*******************************
 USER SEND MESSAGE (FINAL)
*******************************/
// async function sendUserMessage() {
//   const text = poInput.value.trim();
//   if (text === "") return;

//   hideDropdown();
//   categoryRow.style.display = "none";
//   suggestionsRow.style.display = "none";
//   isChatStarted = true;

//   addUserBubble(text);
//   poInput.value = "";

//   // If user input looks like PO (only numbers, length >= 5)
//   if (/^\d{5,}$/.test(text)) {
//     fetchPODetails(text);
//     return;
//   }

//   // Otherwise → send to your RAG backend
//   const botReply = await callRAGBackend(text);
//   addBotBubble(botReply);
// }



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

// function isLikelyPO(text) {
//     // PO usually starts with "PO" OR only digits with length >= 6
//     if (text.startsWith("PO")) return true;
//     if (/^\d{6,}$/.test(text)) return true;
//     return false;
// }

function isLikelyPO(text) {
    text = text.trim();

    // reject if message contains spaces → not a PO
    if (text.includes(" ")) return false;

    // reject if user is asking a question → not PO
    if (text.endsWith("?")) return false;

    // PO usually starts with "PO" + some numbers
    if (/^PO\d{4,}/i.test(text)) return true;

    // OR full numeric PO (6+ digits)
    if (/^\d{6,}$/.test(text)) return true;

    return false;
}




/*******************************
 CARD BUTTONS
*******************************/
function generateStandaloneButtons() {
  const wrapper = document.createElement("div");
  wrapper.className = "bot-button-wrapper-alone";

  wrapper.innerHTML = `
        <button class="bot-button-alone btn-initiate">

            <img src="assets/shapes/plus.svg">
            Yes, Initiate the ASN for me
        </button>

        

        <button class="bot-button-alone navigate-btn-alone" id="btn-navigate">
            Navigate to Purchase Indent 
            <img src="assets/shapes/arrow.svg">
        </button>
    `;

  return wrapper;
}

/***********************
 ASN Card GENERATOR
 **************************/

function generateASNCard(asnData) {
  const card = document.createElement("div");
  card.className = "bot-po-card";

  let rowsHTML = "";
  asnData.items.forEach(i => {
    rowsHTML += `
      <div class="asn-row">
        <span>${i.itemName}</span>
        <span>${i.qty}</span>
        <span>${i.pending}</span>
        <span>${i.requested}</span>
      </div>
    `;
  });

  card.innerHTML = `
    <!-- TITLE -->
    <div class="asn-title-row">
      <span class="asn-title">${asnData.poNumber}</span>
      <img src="assets/shapes/S.svg" class="po-status-icon">
    </div>

    <!-- TABLE HEADER -->
    <div class="asn-header">
      <span>Line Items</span>
      <span>Qty</span>
      <span>Pending</span>
      <span>Requested</span>
    </div>

    <!-- ITEMS TABLE -->
    <div class="asn-table">
      ${rowsHTML}
    </div>

    <!-- SEPARATOR LINE -->
    <div class="asn-separator"></div>

    <!-- FOOTER TEXT -->
    <div class="asn-footer-text">
      Provide the Qty with all the details for creating New ASN
    </div>
  `;

  return card;
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
    if (!po) {
      addBotBubble("Provided PO is invalid.");
      return;
    }

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
    const allItems = r.poDetails || [];

    const mappedPO = {
      documentNumber: r.documentNumber,
      poSetType: item.setType,
      poDate: r.poDate,
      poAmount: r.poAmount,
      validFromDate: r.validFromDate,
      validToDate: r.validToDate,
      poQty: r.poQty,
      remainingQty: r.pendingQty,
      items: r.poDetails.map(d => ({
        itemName: d.itemName || d.itemCode || "Item",
        qty: d.qty || d.orderQty || 0,
        pending: d.pendingQty || d.availableQty || 0,
        requested: d.requestedQty || d.qty || 0
      }))
    };
    window.activePO = mappedPO;


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

      // btnInit.onclick = () => {
      //   addUserBubble("Yes, Initiate the ASN for me");

      //   const asnData = {
      //     poNumber: mappedPO.documentNumber,
      //     items: mappedPO.items
      //   };

      //   const card = generateASNCard(asnData);

      //   const wrapper = document.createElement("div");
      //   wrapper.className = "bot-message-wrapper";
      //   wrapper.appendChild(card);

      //   chatMessages.appendChild(wrapper);
      //   chatMessages.scrollTop = chatMessages.scrollHeight;
      // };

      document.addEventListener("click", function (e) {

        const btn = e.target.closest(".btn-initiate");
        if (!btn) return;

        // prevent multiple runs
        if (btn.dataset.used === "true") return;

        btn.dataset.used = "true";  
        btn.style.opacity = "0.4";
        btn.style.pointerEvents = "none";

        addUserBubble("Yes, Initiate the ASN for me");

        const asnData = {
          poNumber: window.activePO.documentNumber,
          items: window.activePO.items
        };

        const card = generateASNCard(asnData);

        const wrapper = document.createElement("div");
        wrapper.className = "bot-message-wrapper";
        wrapper.appendChild(card);

        chatMessages.appendChild(wrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // VERY IMPORTANT → Enable ASN Mode
        window.asnMode = true;
      });




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
  // CATEGORY WISE QUESTIONS
  const QUESTIONS = {
    purchase: [
      "Last Purchase Order creation details",
      "Can we make a PO in the backdate?",
      "ASN creation",
      "Backdate LR creation",
      "Changes in a PO automatically update the item master data?",
      "LR",
      "PO edit changes barcode?"
    ],

    planning: [
      "How is planning done for shipments?",
      "How do we calculate material requirement?",
      "What is the reorder frequency?",
      "How to check planning alerts?",
      "How to view planning dashboard?"
    ],

    sales: [
      "How to create Sales Order?",
      "Can SO be edited?",
      "How to check dispatch schedule?",
      "Sales invoice creation steps",
      "How to cancel Sales Order?"
    ]
  };
  function updateSuggestions(list) {
    const container = document.querySelector(".suggestions");
    container.innerHTML = ""; // clear old chips

    list.forEach(q => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.innerText = q;

      chip.addEventListener("click", () => {
        poInput.value = q;
        sendUserMessage();
      });

      container.appendChild(chip);
    });
  }


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

  document.querySelectorAll(".cat").forEach(btn => {
    btn.addEventListener("click", () => {

      // Remove active states
      document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));

      // Activate clicked one
      btn.classList.add("active");

      // Identify category
      let type = btn.innerText.toLowerCase().trim();

      if (type.includes("purchase")) {
        updateSuggestions(QUESTIONS.purchase);
      }
      else if (type.includes("planning")) {
        updateSuggestions(QUESTIONS.planning);
      }
      else if (type.includes("sales")) {
        updateSuggestions(QUESTIONS.sales);
      }

      // Make sure chips remain visible
      suggestionsRow.style.display = "flex";
    });
  });


});

async function callASNBackend(detailsText, poNumber) {

    const res = await fetch("http://127.0.0.1:8000/asn/direct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            poNumber: poNumber,
            userText: detailsText
        })
    });

    const data = await res.json();

    if (data.error) {
        addBotBubble("⚠️ " + data.error);
        return;
    }

    addBotBubble("ASN payload generated successfully.");
    addBotBubble("Here is your ASN JSON link: " + data.link);

    // Turn ASN mode OFF
    window.asnMode = false;
}

async function callRagBackend(text) {
    const response = await fetch("http://127.0.0.1:8000/rag/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text, session_id: "default" })
    });

    const data = await response.json();
    addBotBubble(data.answer);
}
