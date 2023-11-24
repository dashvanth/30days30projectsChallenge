const searchContainer = document.getElementById("search-container");
const searchBox = document.getElementById("search-box");
const searchBtn = document.querySelector("#search-btn");
const searchResult = document.getElementById("search-result");
const viewMoreBtn = document.getElementById("view-more-btn");


let keyword = "";
let page = 1;

const accessKey = "PoiEnnGG0hDcDZJUUHxlAKuAsU3FDkasIpVepMcZluk"

async function getImages(){
    keyword = searchBox.value;
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    const response = await fetch(URL);
    const data = await response.json();

    if(page == 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    viewMoreBtn.style.display = "block";

}
searchContainer.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    getImages();
})
viewMoreBtn.addEventListener("click",()=>{
    page++;
    getImages();
})