/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

var loadFile = function(event) {
    var image = document.getElementById('image');
	image.src = URL.createObjectURL(event.target.files[0]);
	fileName = event.target.files[0].name;
	document.getElementById("description").style.visibility = "hidden";
	document.getElementById("parag").textContent = '"' + fileName + '"' + " File is opened";
};

