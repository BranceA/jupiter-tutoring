var brance = {
        color: function (newColor){
            document.body.style.color = newColor;
        },
        font: function (newFont){
            document.body.style.fontFamily = newFont;
        },
        log: function (thingToLog){
            var html = document.createElement("div");
            html.innerHTML = "<h1>" + thingToLog + "</h1>";
            document.body.appendChild(html);
    }}