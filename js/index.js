// required document elements
let searchBtn = document.querySelector("#search-button");
let searchModal = document.querySelector("#searchModal");
let searchBox = document.querySelector(".searchBox");
let searchInput = searchBox.querySelector("#searchInput");
let suggBox = searchBox.querySelector(".suggestionBox");

// open search box on click
let seachClickCounter = 2;
searchBtn.onclick = () => {
  searchInput.setAttribute(
    "placeholder",
    `Recent : ${getData("recentSearch")}`
  );
  if (seachClickCounter % 2 == 0) {
    searchBox.classList.add("searchBox-active");
  } else {
    searchBox.classList.remove("searchBox-active");
  }
  seachClickCounter++;
};

//ge typed data in the search input
searchInput.onkeyup = (e) => {
  let searchKey = e.target.value;
  // / if search key is present
  if (searchKey.length) {
    let arr = [];
    // put search value into array and make it lowercase
    arr = suggestions.filter((data) => {
      // convert everything to lower case
      let lowerSearchKey = searchKey.toLocaleLowerCase();
      let loweCaseData = data.toLocaleLowerCase();
      // only pass value which mach the search key
      let suggPresent = loweCaseData.startsWith(lowerSearchKey);
      return suggPresent;
    });
    // wrap data with li tags
    arr = arr.map((toConvertData) => {
      return `<li>${toConvertData}</li>`;
    });
    // show data on suggestion box
    showSuggestions(arr);
    suggBox.classList.add("suggestionBox-active");

    //sectict data from suggestion box to input
    let allDynamicList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allDynamicList.length; i++) {
      allDynamicList[i].setAttribute("onclick", "select(this)");
    }
  }
  // / else search key is empty
  else {
    suggBox.classList.remove("suggestionBox-active");
  }
};

// function to select the suggestion to input
function select(ele) {
  let selection = ele.textContent;
  saveData(selection);
  //........... what will the selection do (imp: have to update after every changeing searchSuggestion)..........
  switch (selection) {
    // thses urls are taken with respect to the index page
    case "Thynia Odoris (Sandal Wood) 40ml |  Red Diffuser": {
      window.location.href = "https://shopee.co.id/THYINA-ODORIS-40ml-SANDALWOOD-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.21281195661?xptdk=80125db2-9642-4c06-8d07-3c82ef0af8f1";
      break;
    }
    case "Cherry Blosom 40ml | Red Diffuser": {
      window.location.href = "https://shopee.co.id/CHERRY-BLOSSOM-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.20181551489?sp_atk=6c92003a-0d45-40e9-ab83-2cbd14004846";
      break;
    }
    case "Lemon Grass 40ml | Red Diffuser": {
      window.location.href = "https://shopee.co.id/LEMONGRASS-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.18881571490?xptdk=efa5fb2f-71f1-4519-8351-e0fe72fcb8a4";
      break;
    }
    case "Black Coffe 40ml | Red Diffuser": {
      window.location.href = "https://shopee.co.id/BLACK-COFFEE-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.18181208282?xptdk=622a2372-def1-496b-9cf1-37e58df6f3f2";
      break;
    }
    case "Products Page": {
      window.location.href = "../html/products.html";
      break;
    }
    case "About Page": {
      window.location.href = "#about";
      break;
    }
    case "Contributors": {
      window.location.href = "#about";
      break;
    }
    case "Contact Us": {
      window.location.href = "#ContactUs";
      break;
    }
    case "How to contact for issue": {
      window.location.href = "#ContactUs";
      break;
    }
    case "How to repote a issue": {
      window.location.href = "#ContactUs";
      break;
    }
    case "Summer Fruits 40ml | Red Diffuser": {
      window.location.href = "https://shopee.co.id/SUMMER-FRUITS-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.24875751815?xptdk=27bfcdb9-1b04-410b-9e62-9a844fb2be22https://shopee.co.id/SUMMER-FRUITS-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.24875751815?xptdk=27bfcdb9-1b04-410b-9e62-9a844fb2be22";
      break;
    }
    case "Refill Red Diffuser | Cherry Blosom": {
      window.location.href = "https://shopee.co.id/VANILLE-DOUCE-40ml-SWEET-VANILLA-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.23046356021";
      break;
    }
    case "Refill Red Diffuser 100ml | Cherry Blosom": {
      window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-CHERRY-BLOSSOM-by-Sandarma.Official-i.1544359.20091709193?sp_atk=bbfec801-d1eb-4d6c-9b85-eba7c70927aa";
      break;
    }
    case "Refill Red Diffuser 100ml | Lemon Grass": {
      window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-LEMONGRASS-by-Sandarma.Official-i.1544359.21682769411?sp_atk=e7c99130-2dcf-4b90-aa77-9591fceb3bc6";
      break;
    }
    case "Refill Red Diffuser 100ml | Rosemine": {
      window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-ROSEMINE-by-Sandarma.Official-i.1544359.23276362426?sp_atk=226b7378-f2be-4ee6-b176-6344f58831f0";
      break;
    }
    case "Refill Red Diffuser 100ml | Sweet Vanilla": {
      window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-SWEET-VANILLA-by-Sandarma.Official-i.1544359.23650863466?sp_atk=edf24cf4-b828-4bf6-b82d-184691459250";
      break;
    }
    case "Refill Red Diffuser 100ml | Sandal Wood": {
      window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-THYINA-ODORIS-SANDALWOOD-by-Sandarma.Official-i.1544359.19391726166?sp_atk=50d7a542-823b-426f-8d27-679d82ac5f73";
      break;
    }
    case "Refill Red Diffuser 100ml | Black Coffe": {
      window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-BLACK-COFFEE-by-Sandarma.Official-i.1544359.23550789281?sp_atk=094437db-4c24-4878-bd5b-85fb5c3d633b";
      break;
    }
    case "Gift Box Red Diffuser | Hampers": {
      window.location.href = "https://shopee.co.id/Gift-Box-Reed-Diffuser-Hampers-Kado-Pernikahan-Kado-Ulang-Tahun-Graduation-by-Sandarma.Official-i.1544359.21486348076?sp_atk=b5cdba68-c0b5-4a93-b83a-93e962b87e81&xptdk=b5cdba68-c0b5-4a93-b83a-93e962b87e81";
      break;
    }
    case "Gift Box Red Diffuser | Kado Ulang Tahun": {
      window.location.href = "https://shopee.co.id/Gift-Box-Reed-Diffuser-Hampers-Kado-Pernikahan-Kado-Ulang-Tahun-Graduation-by-Sandarma.Official-i.1544359.21486348076?sp_atk=b5cdba68-c0b5-4a93-b83a-93e962b87e81&xptdk=b5cdba68-c0b5-4a93-b83a-93e962b87e81";
      break;
    }
    case "Gift Box Red Diffuser | Kado Pernikahan": {
      window.location.href = "https://shopee.co.id/Gift-Box-Reed-Diffuser-Hampers-Kado-Pernikahan-Kado-Ulang-Tahun-Graduation-by-Sandarma.Official-i.1544359.21486348076?sp_atk=b5cdba68-c0b5-4a93-b83a-93e962b87e81&xptdk=b5cdba68-c0b5-4a93-b83a-93e962b87e81";
      break;
    }
  }
  suggBox.classList.remove("suggestionBox-active");
}

//function to show the suggestion data
function showSuggestions(arr) {
  let arrData;
  if (!arr.length) {
    let inputValue = searchInput.value;
    arrData = "<li>" + inputValue + " - not found 🙁</li>";
  } else {
    //join the arry
    arrData = arr.join("");
  }
  // pass arr to suggestion box
  suggBox.innerHTML = arrData;
}
function saveData(data) {
  localStorage.setItem("recentSearch", `${data}`);
}
function getData() {
  return localStorage.getItem("recentSearch");
}

// scroll feature in javascript




let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}