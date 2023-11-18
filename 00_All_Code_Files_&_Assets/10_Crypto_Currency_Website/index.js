const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");

const settings = {
    async: true,
    crossDomain: true,
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    method: "GET",
    headers: {}
};

function updateCryptoPrices() {
    $.ajax(settings).done(function (response) {
        bitcoin.innerHTML = `$ ${response.bitcoin.usd}`;
        ethereum.innerHTML = `$ ${response.ethereum.usd}`;
        dogecoin.innerHTML = `$ ${response.dogecoin.usd}`;
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Error fetching data:", textStatus, errorThrown);
    });
}

// Initial update
updateCryptoPrices();

// Set interval for periodic updates (every 10 seconds)
const updateInterval = 10000;
window.setInterval(updateCryptoPrices, updateInterval);
