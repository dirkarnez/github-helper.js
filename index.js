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
    let match = window.location.href.match("https://github.com/[^/]+/[^/]+/([^/]+)/[^/]+/?(.*)");
    if (match[1] == "edit") {
        document.getElementsByName("message")[1].value = `- update ${match[2]}`;
    } else if (match[1] == "new") {
        document.getElementsByName("filename")[0].addEventListener("change", function(e) {
            document.getElementsByName("message")[1].value = `- add ${e.target.value}`;
        });
    }
})();
