const observer = new MutationObserver(() => {
    // get all tag that contain email
    const emailContainers = document.querySelectorAll(".go");

    for (const container of emailContainers) {
        // get email node
        const email = container.childNodes[1];

        if (!email) continue;

        // regex to get username in email address
        const usernamePattern = /^.(.*?)(?=@)/;

        const tokens = email.textContent.match(usernamePattern);

        if (!tokens) continue;

        let censoredUsn = '';

        // censor the username
        for (let i = 0; i < tokens[0].length; i++) {
            if (i === 0 && tokens[0].length === 1) {
                censoredUsn += '*';
            } else if (i === 0) {
                censoredUsn += email.textContent[0];
            } else {
                censoredUsn += '*';
            }
        }

        // update website ui with the censored email address
        const censoredEmail = email.textContent.replace(usernamePattern, censoredUsn);
        email.textContent = censoredEmail;
    }
});

observer.observe(document.body, { childList: true, subtree: true });