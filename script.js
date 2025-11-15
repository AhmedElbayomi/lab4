async function generateMeme() {
    const top = document.getElementById("topText").value || "_";
    const bottom = document.getElementById("bottomText").value || "_";
    const template = document.getElementById("template").value;
    const img = document.getElementById("memeImage");
    const errorBox = document.getElementById("error");

    try {
        const url = `https://api.memegen.link/images/${template}/${top}/${bottom}.png`;

        img.src = url;
        errorBox.textContent = "";
    } catch (err) {
        errorBox.textContent = "Something went wrong.";
    }
}
