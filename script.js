document.addEventListener("DOMContentLoaded", () => {
    console.log("Web 2.0 Frontend: JavaScript file connected successfully.");
});


document.addEventListener("DOMContentLoaded", () => {
    const descTextArea = document.getElementById("incidentDesc");
    const charCounterSpan = document.getElementById("charCount");

   
    if (descTextArea && charCounterSpan) {
        descTextArea.addEventListener("input", () => {
            const currentLength = descTextArea.value.length;
            charCounterSpan.textContent = currentLength;

           
            if (currentLength >= 280) {
                charCounterSpan.style.color = "red";
                charCounterSpan.style.fontWeight = "bold";
            } else {
                charCounterSpan.style.color = "#666";
                charCounterSpan.style.fontWeight = "normal";
            }
        });
    }
});