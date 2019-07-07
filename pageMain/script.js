var electron = require('electron');
var clipboard = electron.clipboard;
var ipc = electron.ipcRenderer;
var remote = electron.remote;
var $ = require("jquery");

(function () {

   function init() { 
        let window = remote.getCurrentWindow(); 
        document.getElementById("min-btn").addEventListener("click", function (e) {
             window.minimize(); 
        });

        document.getElementById("max-btn").addEventListener("click", function (e) {
            if (!window.isMaximized()) {
                window.maximize();
            } else {
                window.unmaximize();
            }
        });

        document.getElementById("close-btn").addEventListener("click", function (e) {
          window.close();
        }); 

        document.getElementById("abt-btn").addEventListener("click", function (e) {
          ipc.send("about");
        });

        $(document).on("click", "#list div li", function( event ){
          clipboard.writeText(this.innerHTML, "clipboard");
        });
   }; 

   document.onreadystatechange = function () {
        if (document.readyState == "complete") {
             init();
             setInterval(function(){
               if (window.isMaximized()) {
                    document.getElementById("max-btn").style.backgroundImage = 'url("../assets/res.png")';
                } else {
                    document.getElementById("max-btn").style.backgroundImage = 'url("../assets/max.png")';
                }
             }, 1);
        }
   };

})();