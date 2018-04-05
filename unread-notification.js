setTimeout(() => {
    const target = $("[title=Inbox]").first().next()[0];

    const observer = new MutationObserver(function() {
        updateBadge(target.textContent);
    });

    function updateBadge(count) {
        document.title = `(${count}) ${document.title.replace(/^\(\d+\)/g, "")}`;
    }

    updateBadge(target.textContent);

    observer.observe(target, { subtree: true, characterData: true });
}, 3000);
