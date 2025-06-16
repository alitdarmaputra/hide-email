# Hide Email

A simple Chrome extension to censor or hide email addresses on the Gmail web interface. The purpose of this extension is to provide privacy for email sender addresses (e.g., when the recipient wants to take a screenshot and share the email publicly).

## Installation

This extension is not publicly published, so users who want to try must install it manually.

1. **Download** the latest release of the extension from the [Releases section](#) (or the provided zip file).
2. **Extract** the downloaded ZIP file to a folder on your computer.
3. Open Chrome
4. Go to: <a>chrome://extensions/</a>
5. Enable "Developer mode" (toggle switch at the top right).
6. Click "Load unpacked".
7. Select the folder where you extract the extension (the folder contain a manifest.json file).
8. The extension will now appear in your extensions list and be active.

![preview-1](/img/preview-1.png)

## Preview

Email address `google-noreply@google.com` will be censored into `g*************@google.com`

![preview-2](/img/preview-2.png)

## ⚠️ Disclaimer

- This extension does **not collect, store, or transmit any data**.
- All operations are performed **locally in the browser**, and are **read-only**, modifying only the way existing data is displayed.
- Installing this extension manually means any updates to the code **will not automatically update** the extension on your browser. If you want to use the latest version, you’ll need to manually reload or re-install it.