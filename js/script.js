// Heart Count
let heartCount = 0;
const heartCountBtn = document.getElementById("heart-count");

const clickBtn = document.querySelectorAll(".click-btn");
for (const heart of clickBtn) {
  heart.addEventListener("click", function () {
    heartCount++;
    heartCountBtn.innerText = heartCount;
  });
}

//copy count
let copyCount = 0;
const copyCountBtn = document.getElementById("copy-count");
const copyBtn = document.querySelectorAll(".copy-btn");

for (const copy of copyBtn) {
  copy.addEventListener("click", function () {
    copyCount++;
    copyCountBtn.innerText = copyCount;
  });
}

//call button click

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//delegation

getElement("all-card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const callButton = e.target;

    const cardTitle =
      callButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

    const cardTitleNumber =
      callButton.parentNode.parentNode.childNodes[5].childNodes[5].innerText;

    // console.log(cardTitleNumber);

    const cardTitleDate = new Date().toLocaleTimeString();

    //call history add

    const detailCallHistory = getElement("detail-call-history");

    // new call history Div

    const newCallHistory = document.createElement("div");

    newCallHistory.innerHTML = `
               <div class="flex justify-between items-center p-8 bg-[#FAFAFA] rounded-xl">
                  <div>
                    <h4 class="font-normal">${cardTitle}</h4>
                    <p class="">${cardTitleNumber}</p>
                  </div>
                  <div>
                 <h5>${cardTitleDate}</h5>
                 </div>

                </div>
                `;

    //  Add coin

    const coinCount = getElement("coin-count").innerText;
    const currentCoin = Number(coinCount);

    if (currentCoin === 0) {
      alert("Your coin less then 20 please add some coin");
      return;
    }

    const updatedCoin = currentCoin - 20;
    getElement("coin-count").innerText = updatedCoin;
    if (currentCoin > 0 && currentCoin < 20) {
      alert("Your coin less then 20 please add some coin");
      return;
    }
    detailCallHistory.append(newCallHistory);
  }
});

//remove call information

document.getElementById("clear-btn").addEventListener("click", function () {
  const detailCallHistory = getElement("detail-call-history");
  detailCallHistory.innerHTML = "";
});

// Alert button

document
  .getElementById("জাতীয় জরুরি সেবা")
  .addEventListener("click", function () {
    alert("জাতীয় জরুরি সেবা       999");
  });

document.getElementById("পুলিশ").addEventListener("click", function () {
  alert("পুলিশ       999");
});

document
  .getElementById("ফায়ার সার্ভিস")
  .addEventListener("click", function () {
    alert("ফায়ার সার্ভিস          999");
  });

document.getElementById("অ্যাম্বুলেন্স").addEventListener("click", function () {
  alert("অ্যাম্বুলেন্স      1994-999999");
});

document
  .getElementById("নারী ও শিশু সহায়তা")
  .addEventListener("click", function () {
    alert("নারী ও শিশু সহায়তা     109");
  });

document.getElementById("দুদক").addEventListener("click", function () {
  alert("দুদক      106");
});

document
  .getElementById("বিদ্যুৎ বিভ্রাট")
  .addEventListener("click", function () {
    alert("বিদ্যুৎ বিভ্রাট      16216");
  });

document.getElementById("ব্র্যাক").addEventListener("click", function () {
  alert("ব্র্যাক      16445");
});

document
  .getElementById("বাংলাদেশ রেলওয়ে")
  .addEventListener("click", function () {
    alert("বাংলাদেশ রেলওয়ে      163");
  });

//alert 2

document.getElementById("one").addEventListener("click", function () {
  alert("জাতীয় জরুরি সেবা       999");
});

document.getElementById("two").addEventListener("click", function () {
  alert("পুলিশ       999");
});

document.getElementById("three").addEventListener("click", function () {
  alert("ফায়ার সার্ভিস          999");
});

document.getElementById("four").addEventListener("click", function () {
  alert("অ্যাম্বুলেন্স      1994-999999");
});

document.getElementById("five").addEventListener("click", function () {
  alert("নারী ও শিশু সহায়তা     109");
});

document.getElementById("six").addEventListener("click", function () {
  alert("দুদক      106");
});

document.getElementById("seven").addEventListener("click", function () {
  alert("বিদ্যুৎ বিভ্রাট      16216");
});

document.getElementById("eight").addEventListener("click", function () {
  alert("ব্র্যাক      16445");
});

document.getElementById("nine").addEventListener("click", function () {
  alert("বাংলাদেশ রেলওয়ে      163");
});

// ChatGPT Mamma korche-----

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
}

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".p-5");
    const number = card.querySelector("h3").innerText.trim();
    copyToClipboard(number);
  });
});
