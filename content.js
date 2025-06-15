function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(
      /njeri wa baba/gi,
      "njeri wa milk"
    );
    //   njeri_wa_babaa
    node.textContent = node.textContent.replace(
      /njeri_wa_babaa/gi,
      "njeri_ wa_milk"
    );
    node.textContent = node.textContent.replace(/ruto/gi, "Kasongo must go");
    node.textContent = node.textContent.replace(
      /ruto/gi,
      "Kasongo must go"
    );
    node.textContent = node.textContent.replace(
      /William ruto/gi,
      "Kasongo must go"
    );
  } else {
    for (let child of node.childNodes) {
      replaceText(child);
    }
  }
}

// Run when the page is ready
replaceText(document.body);

// Optional: Observe for changes in dynamic content (like SPA pages)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    for (let node of mutation.addedNodes) {
      replaceText(node);
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
