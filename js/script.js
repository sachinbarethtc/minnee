
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

openBtn.onclick = () => {
  chatbot.classList.add("open");
  openBtn.style.display = "none";

  // Show starting UI ONLY before chat starts
  if (!isChatStarted) {
    categoryRow.style.display = "flex";
    suggestionsRow.style.display = "flex";
  }
};

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
  "eyJhbGciOiJIUzUxMiJ9.eyJtb2IiOiIrODUyOTg5OTk5OSIsImVpZCI6ODE5LCJsYXN0TmFtZSI6IiBEZW1vIiwiY291bnRyeSI6IklOIiwiZGVsZWdhdGVVc2VySWQiOjAsImxvZ2luU3RyaXBNZXNzYWdlIjpudWxsLCJzY2hlbWFFbnROYW1lIjoiVGNsb3VkIiwiZW1sIjoicGF5YWwucGF5YWwxMjM0NTY3ODkxMjM0NUB0dXJuaW5nY2xvdWQuY29tIiwicm9sZXMiOiI4NDF8MTM5NiIsIlgtVEVOQU5ULUlEIjoiZDE2YzE0OTkxOTQzM2RiY2Q0YmE1YzMyNTVhZThmZTFjOTA2YTk5Yjk2N2Y1MTkzZjE5ZWNkNGJkNGI1MTkwMSIsIkJVQ0tFVCI6InRjbG91ZC1zdXBwbHltaW50LWRldmVsb3AtY29tIiwiaXNzIjoiU3VwcGx5TWludCIsInRva2VuVGltZSI6IjE3NjM2Mzc1MDMiLCJtb2JpbGVWZXJpZmllZCI6MSwibGFuZ3VhZ2UiOiJlbiIsIm9pZCI6OTU4LCJ1c2VyQXNBZG1pbiI6dHJ1ZSwiZ3N0aW4iOm51bGwsInNlc3Npb25ObyI6IjEiLCJvcmdJZCI6Ijk1OCIsImRlbGVnYXRlT3JnSWQiOjAsIm9jb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwidVR5cGUiOiJWRU5ET1IiLCJpcGEiOiJJUEEiLCJmdW5jdGlvblR5cGUiOiJERUZBVUxUX0ZVTkNUSU9OIiwiZXhwIjoxNzYzNjU5MTA0LCJqdGkiOjk4MCwiZGVsZWdhdGVFbnRJZCI6MCwib3JnTmFtZSI6IkRlbW9yIFRDbG91ZCIsImNvcmVPcmdJRCI6Ijk1OCIsInNsQ29kZSI6Ijg5MjY2IiwibmV3TW9kdWxlU3RydWN0dXJlIjowLCJwcm4iOiJmYXNoaW9uZGVtbyIsImVjb2RlIjoiMjAyMDU1NDctZTg2ZS00MmI1LWFjMGYtNDRlMTBjMzlmZTczIiwiYXVkIjoiRmFzaGlvbiAgRGVtbyIsInNjaGVtYUVudElEIjoiMSIsImVtYWlsVmVyaWZpZWQiOjEsImZpcnN0TmFtZSI6IkZhc2hpb24iLCJlbmFtZSI6IkRlbW9yIFRDbG91ZCIsInN1YlVzZXJUeXBlIjoiViIsIndlYklkIjpudWxsLCJ0ZW5hbnRPcmdJRCI6Ijk1OCIsImRldmljZVNvdXJjZSI6IldFQiIsImlzTWVyZ2VFbGlnaWJsZSI6MCwic2NoZW1hT3JnSUQiOiIyIiwiRU5UX1RZUEUiOiJWRU5ET1IiLCJsb2dpblNvdXJjZSI6IlNFTEYiLCJvcmdfbG9nbyI6Imh0dHBzOi8vYXNzZXRzLXN1cHBseW1pbnQtY29tLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9vcmdfYXNzZXRzL2ltZ19wbGFjZWhvbGRlci9wcm9maWxlUGxhY2Vob2xkZXIuc3ZnIn0.bx_21PWQd4PGbXd-ir9aCqUddwTeuiqlUVMkLS6UnS7uZxgoCGlyBeC10EDjssdRQ6uGjHoMTqgMjP1OVVh7aQ";


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
  isChatStarted = true;

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
      Provide the Qty, for Creating New ASN
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

