// ==UserScript==
// @name         GitHub Helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://github.com/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let match = window.location.href.match("https://github.com/[^/]+/[^/]+/([^/]+)/[^/]+/?(.*)");
    if (!match) {
        repoDirectory();
        return;
    }

    const action = match[1];

    const comment = message => {
        document.getElementsByName("message")[0].value = `- ${decodeURIComponent(message)}`;
    };

    switch (action) {
        case "edit":
            comment(`update ${document.getElementById("blob-edit-path").value}`);
            break;
        case "new":
            document.getElementsByName("filename")[0].addEventListener("change", function(e) {
                comment(`add ${document.getElementById("blob-edit-path").value}`);
            });
            break;
        case "upload":
            var fileList = [];
            document.getElementsByTagName("file-attachment")[0].addEventListener("drop", function (e) {
                comment(`upload files`);
            });
            break;
        case "delete":
            comment(`delete ${document.getElementById("blob-edit-path").value}`);
            break;
    }

    function repoDirectory() {
         let intervalHandle = setInterval(function(){
             let timeAgoList;

             while (!timeAgoList || timeAgoList.length < 1) {
                 console.log(timeAgoList, "!!!");
                 timeAgoList = document.getElementsByTagName("time-ago");
             }

             clearInterval(intervalHandle);

             console.log(timeAgoList.length, "!?!!");
             var t = document.createTextNode(`\xA0\xA0${timeAgoList.length} files / folders here`);
             document.querySelector(".file-navigation > div:nth-child(2) > a:nth-child(2)").parentNode.appendChild(t);
         }, 1000);
    }
})();
