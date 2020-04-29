import CUGPortal from '../../../js/portal-setup';

const cug_portal = new CUGPortal();

jQuery(document).on('ratesReadyEvent', () => {
    setTimeout(() => {
        cug_portal.ratesReadyEventMethods();
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    const element = document.querySelector(elementWaitingFor);
    const config = {attributes: false, childList: true, subtree: false};

    function callback(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                cug_portal.updateAttribute('.logo', 'https://www.stay22.com/', 'href');
                cug_portal.appendToParent('.MemberAuthenticated .logo', '.MemberAuthenticated #AdminControlsContainer');
                cug_portal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/cug/60100/images/logo.svg', 'src');

                if (document.querySelector('#commands')) {
                    document.querySelector('header').style.display = 'none';
                    document.querySelector('#AdminControlsContainer').insertAdjacentElement('afterBegin', document.querySelector('.logo'));
                }

                observer.disconnect();
            }
        }
    }
    const observer = new MutationObserver(callback);
    observer.observe(element, config);
}

waitForElementToLoad('header');

document
    .querySelector('body')
    .insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/cug/60100/60100.css">');

cug_portal.updateText('.CreateAnAccountAction', 'Register');
cug_portal.updateText('.RootBody .reserveHotel', 'search');

function hidePromoCode() {
    const promo_code_element = document.querySelector('#thePassCodeAjax input');

    if (cug_portal.page_name !== 'cug-registration' || !promo_code_element) return;

    promo_code_element.value = 'stay22';
}

hidePromoCode();
