async function generateMeme() {
    const top = document.getElementById("topText").value.trim() || "_";
    const bottom = document.getElementById("bottomText").value.trim() || "_";
    const template = document.getElementById("template").value;
    const errorBox = document.getElementById("error");
    const img = document.getElementById("memeImage");

    errorBox.textContent = "";

    try {
        const res = await fetch(`/meme?template=${template}&top=${top}&bottom=${bottom}`);
        const data = await res.json();

        if (data.url) {
            img.src = data.url;
        } else {
            errorBox.textContent = "Something went wrong.";
        }
    } catch {
        errorBox.textContent = "Something went wrong.";
    }
}
