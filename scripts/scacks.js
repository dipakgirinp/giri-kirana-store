//menu button
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".bi");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  menuButton.addEventListener("click", () => {
      dropdownMenu.style.display = 
          dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (event) => {
      if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = "none";
      }
  });
});

//only in mobile
document.addEventListener('DOMContentLoaded', () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
  
    if (!isMobile) {
        document.body.innerHTML = `
          <style>
           body{
            background:black;
           }
          </style> 
         <h1 style="text-align:center; margin-top:200px; letter-spacing:1px; color:white;">
             This website is only available on mobile devices <br><br>
             <span style="font-size:0.9rem;">( try again in a mobile device )</span>
         </h1>
        `;
    }
  });


