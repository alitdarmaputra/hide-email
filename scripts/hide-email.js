const observer = new MutationObserver(() => {
    const emailContainers = document.querySelectorAll(".go");

    for (const container of emailContainers) {
        const email = container.childNodes[1];

        if (!email) continue;

        const usernamePattern = /^.(.*?)(?=@)/;
        const tokens = email.textContent.match(usernamePattern);

        if (!tokens) continue;

        let censoredUsn = '';

        for (let i = 0; i < tokens[0].length; i++) {
            if (i === 0 && tokens[0].length === 1) {
                censoredUsn += '*';
            } else if (i === 0) {
                censoredUsn += email.textContent[0];
            } else {
                censoredUsn += '*';
            }
        }

        const censoredEmail = email.textContent.replace(usernamePattern, censoredUsn);
        email.textContent = censoredEmail;
    }
});

observer.observe(document.body, { childList: true, subtree: true });