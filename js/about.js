// Setting up Intersection Observer API for scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((ele) => {
    observer.observe(ele);
});

// Loading Indicator
const loader = document.querySelector(".loader");

// Show loading indicator
function showLoader() {
    loader.style.display = "flex";
}

// Hide loading indicator
function hideLoader() {
    loader.style.display = "none";
}

// Required document elements
let searchBtn = document.querySelector("#search-button");
let searchBox = document.querySelector(".searchBox");
let searchInput = searchBox.querySelector("#searchInput");
let suggBox = searchBox.querySelector(".suggestionBox");

// Open search box on click
let searchClickCounter = 2;
searchBtn.onclick = () => {
    searchInput.setAttribute("placeholder", `Recent : ${getData()}`);
    if (searchClickCounter % 2 === 0) {
        searchBox.classList.add("searchBox-active");
    } else {
        searchBox.classList.remove("searchBox-active");
    }
    searchClickCounter++;
};

// Get typed data in the search input
searchInput.onkeyup = (e) => {
    let searchKey = e.target.value;
    if (searchKey.length) {
        let arr = [];
        arr = suggestions.filter((data) => {
            let lowerSearchKey = searchKey.toLowerCase();
            let lowerCaseData = data.toLowerCase();
            return lowerCaseData.startsWith(lowerSearchKey);
        });
        arr = arr.map((toConvertData) => {
            return `<li>${toConvertData}</li>`;
        });
        showSuggestions(arr);
        suggBox.classList.add('suggestionBox-active');

        let allDynamicList = suggBox.querySelectorAll("li");
        allDynamicList.forEach((item) => {
            item.onclick = () => select(item);
        });
    } else {
        suggBox.classList.remove('suggestionBox-active');
    }
};

// Function to select the suggestion and navigate
function select(ele) {
    let selection = ele.textContent;
    saveData(selection);
    showLoader(); // Show loader before navigating

    setTimeout(() => { // Simulate loading delay
        switch (selection) {
            case "Thynia Odoris (Sandal Wood) 40ml | Red Diffuser":
                window.location.href = "https://shopee.co.id/THYINA-ODORIS-40ml-SANDALWOOD-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.21281195661?xptdk=80125db2-9642-4c06-8d07-3c82ef0af8f1";
                break;
            case "Cherry Blossom 40ml | Red Diffuser":
                window.location.href = "https://shopee.co.id/CHERRY-BLOSSOM-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.20181551489?sp_atk=6c92003a-0d45-40e9-ab83-2cbd14004846";
                break;
            case "Lemon Grass 40ml | Red Diffuser":
                window.location.href = "https://shopee.co.id/LEMONGRASS-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.18881571490?xptdk=efa5fb2f-71f1-4519-8351-e0fe72fcb8a4";
                break;
            case "Black Coffee 40ml | Red Diffuser":
                window.location.href = "https://shopee.co.id/BLACK-COFFEE-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.18181208282?xptdk=622a2372-def1-496b-9cf1-37e58df6f3f2";
                break;
            case "Products Page":
                window.location.href = "./html/products.html";
                break;
            case "About Page":
                window.location.href = "#about";
                break;
            case "Contributors":
                window.location.href = "#about";
                break;
            case "Contact Us":
                window.location.href = "#ContactUs";
                break;
            case "How to contact for issue":
                window.location.href = "#ContactUs";
                break;
            case "How to report an issue":
                window.location.href = "#ContactUs";
                break;
            case "Summer Fruits 40ml | Red Diffuser":
                window.location.href = "https://shopee.co.id/SUMMER-FRUITS-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.24875751815?xptdk=27bfcdb9-1b04-410b-9e62-9a844fb2be22";
                break;
            case "Vanille Douce 40ml | Red Diffuser":
                window.location.href = "https://shopee.co.id/VANILLE-DOUCE-40ml-SWEET-VANILLA-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.23046356021";
                break;
            case "Refill Red Diffuser 100ml | Cherry Blossom":
                window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-CHERRY-BLOSSOM-by-Sandarma.Official-i.1544359.20091709193?sp_atk=bbfec801-d1eb-4d6c-9b85-eba7c70927aa";
                break;
            case "Refill Red Diffuser 100ml | Lemon Grass":
                window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-LEMONGRASS-by-Sandarma.Official-i.1544359.21682769411?sp_atk=e7c99130-2dcf-4b90-aa77-9591fceb3bc6";
                break;
            case "Refill Red Diffuser 100ml | Rosemine":
                window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-ROSEMINE-by-Sandarma.Official-i.1544359.23276362426?sp_atk=226b7378-f2be-4ee6-b176-6344f58831f0";
                break;
            case "Refill Red Diffuser 100ml | Sweet Vanilla":
                window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-SWEET-VANILLA-by-Sandarma.Official-i.1544359.23650863466?sp_atk=edf24cf4-b828-4bf6-b82d-184691459250";
                break;
            case "Refill Red Diffuser 100ml | Sandal Wood":
                window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-THYINA-ODORIS-SANDALWOOD-by-Sandarma.Official-i.1544359.19391726166?sp_atk=50d7a542-823b-426f-8d27-679d82ac5f73";
                break;
            case "Refill Red Diffuser 100ml | Black Coffee":
                window.location.href = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-BLACK-COFFEE-by-Sandarma.Official-i.1544359.23550789281?sp_atk=094437db-4c24-4878-bd5b-85fb5c3d633b";
                break;
            case "Gift Box Red Diffuser | Hampers":
                window.location.href = "https://shopee.co.id/Gift-Box-Reed-Diffuser-Hampers-Kado-Pernikahan-Kado-Ulang-Tahun-Graduation-by-Sandarma.Official-i.1544359.21486348076?sp_atk=b5cdba68-c0b5-4a93-b83a-93e962b87e81&xptdk=b5cdba68-c0b5-4a93-b83a-93e962b87e81";
                break;
        }
    }, 500); // Adjust loading delay as needed
    suggBox.classList.remove('suggestionBox-active');
}

// Function to show the suggestion data
function showSuggestions(arr) {
    let arrData;
    if (!arr.length) {
        let inputValue = searchInput.value;
        arrData = `<li>${inputValue} - not found 🙁</li>`;
    } else {
        arrData = arr.join('');
    }
    suggBox.innerHTML = arrData;
}

function saveData(data) {
    localStorage.setItem("recentSearch", data);
}

function getData() {
    return localStorage.getItem("recentSearch");
}
