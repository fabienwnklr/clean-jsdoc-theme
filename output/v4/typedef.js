/* eslint-disable no-unused-vars */
/* global document */
/**
 * Function for get all typdefs and insert it into function description instead à simple link
 */
function generateHTMLTypedef() {
    var typeWithLinkAnchor = document.querySelectorAll(
        '.method-member-container .params .param-type a[href*="#"]'
    );

    if (typeWithLinkAnchor) {
        typeWithLinkAnchor.forEach(function(type) {
            var id = type.href.split('#')[1];
            var elType = document.getElementById(id).nextElementSibling;
            var cloneElType;

            while (elType) {
                if (elType.classList.contains('allow-overflow')) {
                    cloneElType = elType.querySelector('table').cloneNode(true);
                    break;
                }

                elType = elType.nextElementSibling;
            }

            type.after(cloneElType);
        });
    }
}

document.addEventListener('DOMContentLoaded', generateHTMLTypedef);