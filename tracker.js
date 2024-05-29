document.addEventListener("DOMContentLoaded", function() {
    var startTime = Date.now();

    window.addEventListener("beforeunload", function() {
        var endTime = Date.now();
        var visitDuration = endTime - startTime;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/track", false); // Use synchronous request to ensure it's sent before the page unloads
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        var params = "page_url=" + encodeURIComponent(window.location.href) + "&duration=" + visitDuration;
        xhr.send(params);
    });
});