const input = document.querySelector("input");
const pre = document.querySelector("pre");

const readFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader ();
        reader.readAsText(file);

        reader.addEventListener("load", () => {
            resolve(reader.result);
        });
        reader.addEventListener("error", () => {
            reject(reader.error);
        });
    });
}

input.addEventListener("change", () => {
    let promises = [];
    for (const file of input.files) {
        promises.push(readFile(file));
    }

    Promise.all(promises).then((texts) => {
        pre.textContent = texts.join ("\n\n#########################################\n\n")
    }).catch((e) => console.error(e));
});