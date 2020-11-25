// ==UserScript==
// @name         GitHub Helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/dirkarnez/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const comment = message => {
        document.getElementsByName("message")[0].value = `- ${decodeURIComponent(message)}`;
    };

    let match = window.location.href.match("https://github.com/[^/]+/[^/]+/([^/]+)/[^/]+/?(.*)");

    const action = match[1];

    switch (action) {
        case "edit":
            comment(`update ${match[2]}`);
            break;
        case "new":
            document.getElementsByName("filename")[0].addEventListener("change", function(e) {
                comment(`add ${e.target.value}`);
            });
            break;
        case "upload":
            var fileList = [];
            document.getElementsByTagName("file-attachment")[0].addEventListener("drop", function (e) {
                const fileName = e.dataTransfer.files[0].name;
                fileList = [...fileList, fileName];
                if (fileList.length > 1) {
                    comment(`upload files`);
                } else {
                    comment(`upload ${fileList[0]}`);
                }
            });
            break;
        case "delete":
            comment(`delete ${match[2]}`);
            break;
    }
})();
