/* Change <icon> to <i class="material-icons"> */
(function () {
    const headings = document.querySelectorAll('icon');

    Array.prototype.forEach.call(headings, function (heading) {
        const icon = document.createElement("i");
        icon.innerText = heading.innerText;
        icon.className = "material-icons";
        heading.parentNode.insertBefore(icon, heading);

        heading.parentNode.removeChild(heading);
    })
}());

/* Add "link here" links to <h2> headings */
(function () {
    const headings = document.querySelectorAll('h1,h2,h3,h4,h5,h6');

    Array.prototype.forEach.call(headings, function (heading) {
        const id = heading.getAttribute('id');

        if (id) {
            const newHeading = heading.cloneNode(true);
            newHeading.setAttribute('tabindex', '-1');

            const container = document.createElement('div');
            container.setAttribute('class', 'link-container');
            container.appendChild(newHeading);

            heading.parentNode.insertBefore(container, heading);

            const link = document.createElement('a');
            link.setAttribute('href', '#' + id);
            const headingText = heading.textContent;
            link.setAttribute('aria-label', 'This ' + headingText + ' section');
            link.innerHTML = '<i class="material-icons">link</i>';

            container.appendChild(link);

            heading.parentNode.removeChild(heading);
        }
    })
}());

/* https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/ */
function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.title = "Copy to clipboard";
        button.style.cursor = "pointer";

        const ibutton = document.createElement('i');
        ibutton.className = 'material-icons';
        ibutton.innerText = 'file_copy';

        button.appendChild(ibutton);

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                ibutton.innerText = 'check_circle';

                setTimeout(function () {
                    ibutton.innerText = 'file_copy';
                }, 2000);
            }, function (error) {
                ibutton.innerText = 'error';
            });
        });

        const pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            const highlight = pre.parentNode;
            highlight.parentNode.insertBefore(button, highlight);
        } else {
            pre.parentNode.insertBefore(button, pre);
        }
    });
}

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}