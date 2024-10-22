window.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdown = document.querySelector(".dropdown-content");
  const dropdownBtn2 = document.querySelector(".dropbtn2");
  const dropdown2 = document.querySelector(".dropdown2-content");

  // const overlay = document.querySelector(".overlay");

  // overlay.addEventListener("click", (e) => {
  //   if (e.target !== dropdown || e.target.getElementById("dropbtn") == "") {
  //     dropdown.classList.remove("df");
  //     dropdownBtn.classList.remove("ba");
  //     dropdown2.classList.remove("df");
  //     dropdownBtn2.classList.remove("ba");

  //     overlay.classList.remove("overlay--visible");
  //     overlay.classList.remove("overlay--visiblity");
  //   }
  // });

  function dropdownEnter() {
    dropdown.classList.add("df");
    dropdownBtn.classList.add("ba");
  }

  function dropdownLeave() {
    dropdown.classList.remove("df");
    dropdownBtn.classList.remove("ba");
  }

  function dropdownEnterTwo() {
    dropdown2.classList.add("df");
    dropdownBtn2.classList.add("ba");
  }

  function dropdownLeaveTwo() {
    dropdown2.classList.remove("df");
    dropdownBtn2.classList.remove("ba");
  }
  dropdownBtn.addEventListener("mouseenter", () => {
    dropdownEnter();
  });
  dropdown.addEventListener("mouseleave", () => {
    dropdownLeave();
  });
  dropdown.addEventListener("mouseenter", () => {
    dropdownEnter();
  });
  dropdownBtn.addEventListener("mouseleave", () => {
    dropdownLeave();
  });

  dropdownBtn2.addEventListener("mouseenter", () => {
    dropdownEnterTwo();
  });
  dropdown2.addEventListener("mouseleave", () => {
    dropdownLeaveTwo();
  });
  dropdown2.addEventListener("mouseenter", () => {
    dropdownEnterTwo();
  });
  dropdownBtn2.addEventListener("mouseleave", () => {
    dropdownLeaveTwo();
  });

  const listOrderbook = document.querySelectorAll(".orderbook-list__link");
  const list = document.querySelectorAll(".nav-list__link");
  function activeLink() {
    // list.forEach((item) => item.classList.remove("active-after"));
    // this.classList.add("active-after");

    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));

  const tabs = document.querySelectorAll(".trading-tab");
  const tabsRate = document.querySelectorAll(".wallet-rate-tab");

  function colorTab() {
    tabs.forEach((item) => item.classList.remove("active-tab"));
    this.classList.add("active-tab");
  }
  tabs.forEach((item) => item.addEventListener("click", colorTab));
  function colorRateTab() {
    tabsRate.forEach((item) => item.classList.remove("active-rate-tab"));
    this.classList.add("active-rate-tab");
  }
  tabsRate.forEach((item) => item.addEventListener("click", colorRateTab));

  const orderList = document.querySelectorAll(".orderbook-list__link");
  function activeNavOrder() {
    orderList.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  orderList.forEach((item) => item.addEventListener("click", activeNavOrder));

  // Active navlink
  const underline = document.querySelector(".active-after");

  document.querySelectorAll(".nav-list__link").forEach((item) => {
    item.addEventListener("click", () => {
      underline.style.width = item.offsetWidth + "px";
      underline.style.left = item.offsetLeft + "px";
    });
  });

  // Active navlink-orderbook
  const underlineOrderbook = document.querySelector(".active-list");

  document.querySelectorAll(".orderbook-list__link").forEach((item) => {
    item.addEventListener("click", () => {
      // underlineOrderbook.style.width = item.offsetWidth / 2 + "px";
      underlineOrderbook.style.left = item.offsetLeft + "px";
    });
  });

  // TABS

  const tabsItem = document.querySelectorAll(".orderbook-list__link");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".orderbook-list");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabsItem.forEach((item) => {
      item.classList.remove("tab-active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabsItem[i].classList.add("tab-active");
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("orderbook-list__link")) {
      tabsItem.forEach((item, i) => {
        if (item == target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // WALLET TABS
  const tabsWalletItem = document.querySelectorAll(".wallet-tab");
  const tabsWalletContent = document.querySelectorAll(".wallet-tabcontent");
  const tabsWalletParent = document.querySelector(".wallet-tabs");

  function hideTabContentWallet() {
    tabsWalletContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabsWalletItem.forEach((item) => {
      item.classList.remove("active-wallet-tab");
    });
  }

  function showTabContentWallet(i = 1) {
    tabsWalletContent[i].classList.add("show");
    tabsWalletContent[i].classList.remove("hide");
    tabsWalletItem[i].classList.add("active-wallet-tab");
  }
  hideTabContentWallet();
  showTabContentWallet();

  tabsWalletParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("wallet-tab")) {
      tabsWalletItem.forEach((item, i) => {
        if (item == target) {
          hideTabContentWallet();
          showTabContentWallet(i);
        }
      });
    }
  });

  const textOne = document.querySelector("#text1");
  const textTwo = document.querySelector("#text2");
  const textThree = document.querySelector("#text3");
  const textFour = document.querySelector("#text4");

  function changeForm() {
    textTwo.value = this.value * 3.3;
  }

  textOne.addEventListener("keyup", changeForm);

  function changeFormTwo() {
    textFour.value = this.value * 6.4;
  }

  textThree.addEventListener("keyup", changeFormTwo);

  document.getElementById("checkbox").addEventListener("click", function (e) {
    var els = document.querySelectorAll("input[name=all]");

    Array.prototype.forEach.call(els, function (cb) {
      cb.checked = e.target.checked;
    });
  });

  // document.getElementById("darkmode-toggle").addEventListener("change", () => {
  //   document.body.classList.toggle("dark");
  //   document.querySelectorAll(".darkwrap").forEach((i) => {
  //     i.classList.toggle("dark-wrap");
  //   });
  //   document.querySelectorAll(".container-dashboard").forEach((i) => {
  //     i.classList.toggle("dark");
  //   });

  //   const tagTd = document.getElementsByTagName("td");
  //   for (let tag of tagTd) {
  //     tag.classList.toggle("light");
  //   }
  //   document.querySelectorAll(".table-block__text-status").forEach((i) => {
  //     i.classList.remove("light");
  //   });
  //   document.querySelectorAll(".darkbutton").forEach((i) => {
  //     i.classList.toggle("dark-button");
  //   });
  //   const tagSpan = document.getElementsByTagName("span");
  //   for (let span of tagSpan) {
  //     span.classList.toggle("light");
  //   }
  //   const tagA = document.getElementsByTagName("a");
  //   for (let a of tagA) {
  //     a.classList.toggle("light");
  //   }
  //   document.querySelector('.table-block__titles').classList.toggle('after-dark')
  //   document.querySelector('.logo-link').style.backgroundImage = 'url(../img/logo-light.svg)'
  //   document.querySelector('.text-box').style.color = '#DCE1F5'
  //   document.querySelector('.active-rate-tab').classList.toggle('active-tab-dark')
  // });

  localStorage.setItem("theme", "dark");

  //accessed the user's machine theme
  localStorage.getItem("theme");
  // dark

  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";

    applyTheme(savedTheme);

    for (const optionElement of document.querySelectorAll("#theme option")) {
      optionElement.selected = savedTheme === optionElement.value;
    }

    document.querySelector("#theme").addEventListener("change", function () {
      localStorage.setItem("theme", this.value);
      applyTheme(this.value);
    });
  });
});

// Select
function show(value) {
  document.querySelector(".text-box").value = value;
}
let dropdownSelect = document.querySelector(".orderbook-dropdown");
let dropdownSelectMenu = document.querySelector(".dropdown-menu");

dropdownSelect.addEventListener("click", () => {
  dropdownSelectMenu.classList.toggle("df");
});

// pole

var pole = document.querySelector(".pole");
var inputText = document.querySelector(".inputText").value;
var elemInp = document.querySelector(".inputText");

pole.addEventListener(
  "click",
  function (event) {
    var target = event.target;

    var minus = target.parentElement.classList.contains("minus");
    var plus = target.parentElement.classList.contains("plus");

    if (minus && inputText >= 10) {
      --inputText;
      elemInp.value = inputText;
    }
    if (plus) {
      ++inputText;
      elemInp.value = inputText;
    }
  },
  false
);
