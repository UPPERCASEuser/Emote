var electron = require('electron');
var ipc = electron.ipcRenderer;
var shell = electron.shell;
var remote = electron.remote;

(function () {

   function init() { 
        let window = remote.getCurrentWindow(); 

        document.getElementById("close-btn").addEventListener("click", function (e) {
          window.close();
        });
        document.getElementById("extLink").addEventListener("click", function (e) {
          shell.openExternal('https://github.com/UPPERCASEuser/Emote')
        }); 
   }; 

   document.onreadystatechange = function () {
        if (document.readyState == "complete") {
             init();
        }
   };

})();