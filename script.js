// Cut Section

let cut = document.getElementById("cut");
let cutBtn = document.getElementById("cut-btn");

cutBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(cut.value);
  cut.value = "";
});

// Copy Section

let copy = document.getElementById("copy");
let copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copy.value);
  alert("Successfully Copied");
});

// Paste Section

let paste = document.getElementById("paste");
let pasteBtn = document.getElementById("paste-btn");

pasteBtn.addEventListener("click", () => {
  paste.value = "";
  navigator.clipboard.readText().then((text) => {
    paste.value = text;
  });
});
