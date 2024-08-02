// Pastikan untuk mendapatkan elemen-elemen yang benar dari HTML
let loder = document.querySelector(".loder"); // Periksa apakah elemen ini ada di HTML
let productCards = document.querySelectorAll(".product-card"); // Pastikan semua kartu produk sudah diberi kelas 'product-card'
let buyModal = document.querySelector(".buy-modal"); // Sama dengan ini
let navheader = document.querySelector(".nav-header"); // Sama dengan ini
let mobileNav = document.querySelector(".mobile-nav"); // Sama dengan ini

// Fungsi stopLoading
let time = 1000;
let setTime;
function stopLoading() {
  setTimeout(() => {
    time = setTime ?? 1000;
    loder.style = "display:none;";
    setTime = null;
  }, time);
}
stopLoading(); // jalankan sekali saat halaman dimuat (stop loading)

// Fungsi startLoading
function startLoading(newTime) {
  loder.style = "display:flex";
  setTime = newTime;
  stopLoading(setTime);
}

// Fungsi yang akan dijalankan saat produk diklik
const buttonPressed = (e) => {
  let productName = e.target.getAttribute("data-product-name");
  let productLink = "";

  switch (productName) {
    case "Thynia Odoris (Sandal Wood) 40ml | Red Diffuser":
      productLink = "https://shopee.co.id/THYINA-ODORIS-40ml-SANDALWOOD-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.21281195661?xptdk=80125db2-9642-4c06-8d07-3c82ef0af8f1";
      break;
    case "Cherry Blosom 40ml | Red Diffuser":
      productLink = "https://shopee.co.id/CHERRY-BLOSSOM-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.20181551489?sp_atk=6c92003a-0d45-40e9-ab83-2cbd14004846";
      break;
    case "Lemon Grass 40ml | Red Diffuser":
      productLink = "https://shopee.co.id/LEMONGRASS-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.18881571490?xptdk=efa5fb2f-71f1-4519-8351-e0fe72fcb8a4";
      break;
    case "Black Coffe 40ml | Red Diffuser":
      productLink = "https://shopee.co.id/BLACK-COFFEE-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.18181208282?xptdk=622a2372-def1-496b-9cf1-37e58df6f3f2";
      break;
    case "Summer Fruits 40ml | Red Diffuser":
      productLink = "https://shopee.co.id/SUMMER-FRUITS-40ml-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.24875751815?xptdk=27bfcdb9-1b04-410b-9e62-9a844fb2be22";
      break;
    case "Vanille Douce 40ml | Red Diffuser":
      productLink = "https://shopee.co.id/VANILLE-DOUCE-40ml-SWEET-VANILLA-Reed-Diffuser-Pengharum-Ruangan-Aromaterapi-by-Sandarma.Official-i.1544359.23046356021";
      break;
    case "Refill Red Diffuser 100ml | Cherry Blosom":
      productLink = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-CHERRY-BLOSSOM-by-Sandarma.Official-i.1544359.20091709193?sp_atk=bbfec801-d1eb-4d6c-9b85-eba7c70927aa";
      break;
    case "Refill Red Diffuser 100ml | Lemon Grass":
      productLink = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-LEMONGRASS-by-Sandarma.Official-i.1544359.21682769411?sp_atk=e7c99130-2dcf-4b90-aa77-9591fceb3bc6";
      break;
    case "Refill Red Diffuser 100ml | Rosemine":
      productLink = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-ROSEMINE-by-Sandarma.Official-i.1544359.23276362426?sp_atk=226b7378-f2be-4ee6-b176-6344f58831f0";
      break;
    case "Refill Red Diffuser 100ml | Sweet Vanilla":
      productLink = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-SWEET-VANILLA-by-Sandarma.Official-i.1544359.23650863466?sp_atk=edf24cf4-b828-4bf6-b82d-184691459250";
      break;
    case "Refill Red Diffuser 100ml | Sandal Wood":
      productLink = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-THYINA-ODORIS-SANDALWOOD-by-Sandarma.Official-i.1544359.19391726166?sp_atk=50d7a542-823b-426f-8d27-679d82ac5f73";
      break;
    case "Refill Red Diffuser 100ml | Black Coffe":
      productLink = "https://shopee.co.id/Refill-(Isi-ulang)-Reed-Diffuser-Pengharum-Ruangan-100ml-BLACK-COFFEE-by-Sandarma.Official-i.1544359.23550789281?sp_atk=094437db-4c24-4878-bd5b-85fb5c3d633b";
      break;
    case "Gift Box Red Diffuser | Hampers":
      productLink = "https://shopee.co.id/Gift-Box-Reed-Diffuser-Hampers-Kado-Pernikahan-Kado-Ulang-Tahun-Graduation-by-Sandarma.Official-i.1544359.21486348076?sp_atk=b5cdba68-c0b5-4a93-b83a-93e962b87e81&xptdk=b5cdba68-c0b5-4a93-b83a-93e962b87e81";
      break;
    case "Gift Box Red Diffuser | Kado Ulang Tahun":
      productLink = "https://shopee.co.id/Gift-Box-Reed-Diffuser-Hampers-Kado-Pernikahan-Kado-Ulang-Tahun-Graduation-by-Sandarma.Official-i.1544359.21486348076?sp_atk=b5cdba68-c0b5-4a93-b83a-93e962b87e81&xptdk=b5cdba68-c0b5-4a93-b83a-93e962b87e81";
      break;
    case "Gift Box Red Diffuser | Kado Pernikahan":
      productLink = "https://shopee.co.id/Gift-Box-Reed-Diffuser-Hampers-Kado-Pernikahan-Kado-Ulang-Tahun-Graduation-by-Sandarma.Official-i.1544359.21486348076?sp_atk=b5cdba68-c0b5-4a93-b83a-93e962b87e81&xptdk=b5cdba68-c0b5-4a93-b83a-93e962b87e81";
      break;
    // Tambahkan case lain jika diperlukan
  }

  if (productLink) {
    window.location.href = productLink;
  }
};

// Event listener untuk setiap kartu produk
productCards.forEach((card) => {
  card.addEventListener("click", buttonPressed);
});

// Fungsi searchToggle
let seachClickCounter = 0;
const searchToggle = () => {
  const searchModal = document.querySelector(".search-modal");
  const searchBox = document.querySelector(".search-box");

  if (seachClickCounter % 2 == 0) {
    searchModal.style.display = "block";
    searchBox.classList.add("active-modal");
  } else {
    searchModal.style.display = "none";
    searchBox.classList.remove("active-modal");
  }
  seachClickCounter++;
};
