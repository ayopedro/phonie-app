let phoneNum = document.getElementById("phoneNum");
let btn = document.querySelector(".btn");
let messageBox = document.querySelector(".message");
let provider = document.getElementById("provider");
let form = document.getElementById("form");

btn.addEventListener("click", (event) => {

    // prevents button default behavior
    event.preventDefault();

  let pattern = /((\+234?)|0)?(?<network>\d{4})(\d{7})/;
  let str = phoneNum.value;

  if (str === "" || !(str.match(pattern))) {
    phoneNum.classList.add("invalid");
    messageBox.classList.add("invalid");
    messageBox.innerText = "Please enter a valid number";
    setTimeout(() => {
      phoneNum.classList.remove("invalid");
      messageBox.classList.remove("invalid");
      messageBox.innerText = " ";
    }, 3000);
    return;
  }

  let groups = str.match(pattern).groups;

  let network = groups.network;

  const MOBILE_NETWORKS = {
    MTN: [
      "803",
      "806",
      "703",
      "706",
      "810",
      "813",
      "814",
      "816",
      "903",
      "906",
      "916",
    ],
    ETISALAT: ["809", "817", "818", "908", "909"],
    AIRTEL: ["802", "808", "812", "701", "708", "902", "907", "901"],
    GLO: ["805", "807", "811", "705", "815", "905"],
  };

  function numContains(a, obj) {
    for (let i = 0; i < a.length; i++) {
      if (obj.includes(a[i])) {
        return true;
      }
    }
    return false;
  }

  if (numContains(MOBILE_NETWORKS.MTN, network)) {
    phoneNum.classList.add("valid");
    messageBox.classList.add("valid");
    messageBox.innerText = "SUCCESSFUL. Your mobile network is MTN";
    provider.style.backgroundImage = "url(./images/mtn-nigeria.png)";
  } else if (numContains(MOBILE_NETWORKS.ETISALAT, network)) {
    phoneNum.classList.add("valid");
    messageBox.classList.add("valid");
    messageBox.innerText = "SUCCESSFUL. Your mobile network is 9MOBILE";
    provider.style.backgroundImage = "url(./images/9mobile.png)";
  } else if (numContains(MOBILE_NETWORKS.AIRTEL, network)) {
    phoneNum.classList.add("valid");
    messageBox.classList.add("valid");
    messageBox.innerText = "SUCCESSFUL. Your mobile network is AIRTEL";
    provider.style.backgroundImage = "url(./images/airtel-nigeria.png)";
  } else if (numContains(MOBILE_NETWORKS.GLO, network)) {
    phoneNum.classList.add("valid");
    messageBox.classList.add("valid");
    messageBox.innerText = "SUCCESSFUL. Your mobile network is GLO";
    provider.style.backgroundImage = "url(./images/globacom-limited.png)";
  } else {
    phoneNum.classList.add("invalid");
    messageBox.classList.add("invalid");
    messageBox.innerText = "UNSUCCESSFUL. Your mobile network is Unverifiable";
    provider.style.backgroundImage = "url(./images/rectangle.png)";

    setTimeout(() => {
        phoneNum.classList.remove("invalid");
        messageBox.classList.remove("invalid");
      }, 5000);
  }
});


// Setting the enter key to perform the button function

phoneNum.addEventListener("keypress", (event) => {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action
      event.preventDefault();
      // Trigger the button element with a click
      btn.click();
    }
  });