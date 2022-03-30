let fileTool = {
    download: function (path, name) {
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = path;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}