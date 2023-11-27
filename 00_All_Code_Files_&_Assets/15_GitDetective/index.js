// searchBox container 
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");

// user details container 
const userImage = document.querySelector("img.user-img");
const displayName = document.getElementById("display-name");
const joinDate = document.getElementById("join-date");
const userName = document.getElementById("username");
const userBio = document.getElementById("bio");

// repository container 
const repoCount = document.getElementById("repos-count");
const followersCount = document.getElementById("followers-count");
const followingCount = document.getElementById("following-count");

// extra details 
const userLocation = document.getElementById("location");
const userLink = document.getElementById("link");
const userTwitterLink = document.getElementById("twitter");
const userEmail = document.getElementById("email");

// Function to get and display user details
async function getAndDisplayUserDetails(username) {
    try{
        const API = `https://api.github.com/users/${username}`;
        const response = await fetch(API);
    
        if (response.status === 200) {
            const data = await response.json();
            getUserDetails(data);
            getJoinDate(data);
            getRepoDetails(data);
            getUserExtraDetails(data);
        } else {
            // case when the user is not found
            resetUserDetails();
        }
    }catch(err){
        console.log("ERROR:Something is wrong!!");
    }

}

// Function to reset user details to default values
function resetUserDetails() {
    userImage.src = "../03_Weather_App/00_Assets/clouds.png";
    displayName.innerText = "User Not Found";
    joinDate.innerText = "Joined date not found";
    userName.href = "#";
    userName.innerText = "@user-not-found";
    userBio.innerText = "Bio not found";
    repoCount.innerText = "0";
    followersCount.innerText = "0";
    followingCount.innerText = "0";
    userLocation.innerText = "Location";
    userLink.href = "#";
    userTwitterLink.innerText = "Twitter";
    userEmail.innerText = "Email";
}

// Function to get and display join date
function getJoinDate(data) {
    let year = data.created_at.slice(0, 4);
    let month = data.created_at.slice(5, 7);
    let day = data.created_at.slice(8, 10);
    joinDate.innerText = `Joined ${day} ${month} ${year}`;
}

// Function to get and display user details
function getUserDetails(data) {
    userImage.src = `${data.avatar_url}`;
    displayName.innerText = data.name || "Not available";
    userName.innerText = `@${data.login}`;
    userName.href = `${data.html_url}`;
    userBio.innerText = data.bio || "Not available";
}

// Function to get and display repository details
function getRepoDetails(data) {
    repoCount.innerText = data.public_repos;
    followersCount.innerText = data.followers;
    followingCount.innerText = data.following;
}

// Function to get and display extra user details
function getUserExtraDetails(data) {
    userLocation.innerText = data.location || "Not available";
    userLink.href = data.html_url || "#";
    userTwitterLink.href = data.twitter_username || "#"
    userTwitterLink.innerText = data.twitter_username || "Not available";
    userEmail.href = `mailto:${data.mail}`;
    userEmail.innerText = data.email || "Not available";
}


// Initial user details reset
resetUserDetails();

// Fetch and display details for the default user "dashvanth" initially
getAndDisplayUserDetails("dashvanth");

// Event listener for the search form
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = searchBox.value.trim().replace(/\s+/g, '-');
    getAndDisplayUserDetails(username);
});



// Event listener for dark mode
const darkModeIcon = document.querySelector("#dark-mode-icon");
const darkModeText = document.querySelector(".dark-mode p");

darkModeIcon.addEventListener("click", (e) => {
    // Toggle dark mode class on the body
    document.body.classList.toggle("dark-mode-active");

    // Update dark mode text
    const isDarkMode = document.body.classList.contains("dark-mode-active");
    darkModeText.innerText = isDarkMode ? "Light" : "Dark";

    // ... (other style changes you may need)
});
