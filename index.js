// 
let match = window.location.href.match("https://github.com/[^/]+/[^/]+/([^/]+)/[^/]+/?(.*)");
console.log(match[1], match[2]);

// name
document.getElementsByName("filename")[0].value

// commit message
document.getElementsByName("message")[1].value
