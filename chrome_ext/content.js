window.addEventListener("load", () => {
  const button = document.createElement("button");
  button.textContent = "Get Search Results Links";
  button.style.position = "fixed";
  button.style.top = "2px";
  button.style.left = "4px";
  button.style.padding = "5px";
  button.style.border = "none";
  button.style.color = "white";
  button.style.backgroundColor = "#9747FF";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";
  button.style.zIndex = 1000;
  // document.body.insertBefore(button, document.body.firstChild);
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    const links = Array.from(document.querySelectorAll("a"))
      .filter((a) => a.querySelector("h3")) // 子要素に<h3>を持つ<a>要素に制限
      .map((a) => a.href)
      .filter((href) => href.startsWith("http"));

    const linksText = links.join("\n");

    // クリップボードに保存
    navigator.clipboard
      .writeText(linksText)
      .then(() => {
        alert("Links copied to clipboard:\n" + linksText);
      })
      .catch((err) => {
        console.error("Could not copy links: ", err);
        alert("Failed to copy links to clipboard.");
      });
  });
});
