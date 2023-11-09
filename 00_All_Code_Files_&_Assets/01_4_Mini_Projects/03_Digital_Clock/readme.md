# ⛳Project 03 

# DIGITAL CLOCK 💛

[click here to see the live link!]()

## Solution Code 🧑🏻‍💻
```javascript
const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)
```
<br>

### Made with ❤️ by Dashvanth