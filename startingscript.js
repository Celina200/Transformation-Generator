document.addEventListener("DOMContentLoaded", function() {
    localStorage.removeItem("name");
    document.getElementById("start-button").addEventListener("click", function(event) {
        event.preventDefault();
        var name = document.querySelector("#name").value;
        localStorage.setItem("name", name);
        window.location.href = "file:///C:\Users\PC\Downloads\Transformation-Generator-136904bfce1862658c2533cf219269753afe7297\Transformation-Generator-136904bfce1862658c2533cf219269753afe7297";
    });
});
