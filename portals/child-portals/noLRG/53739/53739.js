import NoLRGPortal from '../../../js/portal-setup.js';

let noLRGPortal = new NoLRGPortal();

noLRGPortal.updateText('title', 'Formula 1 Vietnam Grand Prix Rooms');
noLRGPortal.updateRoomDescription('.RoomDescription', 'Formula 1 Vietnam Grand Prix Exclusive Rate');
noLRGPortal.updateAttribute('#favicon', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/51108/images/favicon.png', 'href');

jQuery(document).on('ratesReadyEvent', function() {
    setTimeout(function() {
        noLRGPortal.ratesReadyEventMethods();
        noLRGPortal.updateText('.event-rate', 'Exclusive Rates');
        addMessagingIfLessThanThreeNights();
        if (noLRGPortal.language === 'vietnamese') {
            noLRGPortal.updateText('.perNight', 'mỗi đêm');
            noLRGPortal.updateText('.event-rate', 'Giá độc quyền');
            noLRGPortal.updateText('.bookRoom', 'Đặt giá này');
            noLRGPortal.updateText('.openMapBtn', 'Mở bản đồ');
            noLRGPortal.updateText('.nights-message', 'Giá tốt nhất có sẵn nếu bạn đặt 3 đêm trở lên!');
            document.querySelector('.openMapBtn').addEventListener('click', function() {
                noLRGPortal.updateText('.openMapBtn', 'Mở bản đồ');
            });
        }
    }, 1);
});

function waitForElementToLoad(elementWaitingFor) {
    let element = document.querySelector(elementWaitingFor);
    let config = { attributes: false, childList: true, subtree: false };

    function callback(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                let contact_us_url = document.querySelector('.ArnSupportBottom .supportLink');
                if (contact_us_url) {
                    contact_us_url = contact_us_url.getAttribute('href');
                }
                noLRGPortal.updateAttribute('.logo img', 'https://static.hotelsforhope.com/portals/child-portals/noLRG/53739/images/logo-white.png', 'src');
                noLRGPortal.updateAttribute('.logo', 'https://events.hotelsforhope.com/v6/?siteid=53739', 'href');
                noLRGPortal.createHTML('#language', '<a id="group-request" href="https://form.jotform.com/92754977819176" target="_blank">Group Request</a><a id="contact-us" href="' + contact_us_url + '" target="_blank">Contact Us</a>', 'beforeBegin');
                document.querySelector('select#language').insertAdjacentHTML('beforeEnd', '<option value="vietnamese">Tiếng Việt (Vietnamese)</option>');

                if (noLRGPortal.language === 'vietnamese') {
                    setTimeout(function() {
                        noLRGPortal.updateText('#group-request', 'yêu cầu nhóm');
                        noLRGPortal.updateText('#contact-us', 'Liên hệ chúng tôi');
                        noLRGPortal.updateText('.open span.translateMe', 'Ủng hộ');
                        noLRGPortal.updateText('.title .translateMe', 'Ủng hộ');
                        noLRGPortal.updateText('.cookie-policy-link', 'Chính sách cookie');
                        noLRGPortal.updateText('#language .translateMe', 'Chọn ngôn ngữ');
                    }, 500)
                }
                observer.disconnect();
            }
        }
    }
    let observer = new MutationObserver(callback);
    observer.observe(element, config);
};

waitForElementToLoad('header');

noLRGPortal.updateText('#theMarketingOptInAjax label', 'Opt in to receive communication from the event and its partners.');

function vietnameseLanguageFixes() {
    if (noLRGPortal.language === 'vietnamese') {
        document.querySelector('body').insertAdjacentHTML('beforeEnd', `
            <style>
            .ArnTripAdvisorDetails{     
                display: flex !important;
                flex-direction: row;
                align-items: center;
            }
                .ArnPropName div.reviewCount{
                    max-width: none !important;
                    position: static;
                }
                .ArnTripAdvisorDetails .reviewCount{
                    display: none;
                    order: 2;
                }
                .HasReviews .reviewCount{
                    display: block !important;
                }

            </style>
        `)
        noLRGPortal.updateText('#speakToRep', 'Nếu bạn muốn nói chuyện với một đại diện, xin vui lòng gọi');
        noLRGPortal.updateText('#phoneCenterHours', 'Giờ trung tâm điện thoại');
        noLRGPortal.updateText('#weekdayHours', 'Trung tâm điện thoại Giờ trong tuần:');
        noLRGPortal.updateText('#weekendHours', 'Trung tâm điện thoại Giờ cuối tuần: Đóng cửa');
        noLRGPortal.updateText('#useForm', 'Hoặc, vui lòng sử dụng mẫu dưới đây và một trong những chuyên gia tư vấn của chúng tôi sẽ trả lời kịp thời.');
        noLRGPortal.updateText('#theMarketingOptInAjax label', 'Chọn tham gia nhận thông tin từ sự kiện và các đối tác của nó.');
    }
}
vietnameseLanguageFixes();

function addBackToResults() {
    let arn_subpage = document.querySelector('.ArnSubPage');
    if (arn_subpage) {
        let referrer_url = document.referrer;
        if (referrer_url) {
            arn_subpage.insertAdjacentHTML('beforeBegin', '<a style="display:block; max-width: 1280px; margin: 12px auto -18px; text-align: right; text-decoration: underline;"class="backToResults" href="' + referrer_url + '">Back ></a>');
        }
    }
}
addBackToResults();

function addMessagingIfLessThanThreeNights() {
    if (document.querySelector('.SearchHotels')) {
        let check_in_input = document.querySelector('#theCheckIn');
        let check_out_input = document.querySelector('#theCheckOut');
        if (check_in_input && check_out_input) {

            let check_in_euro = check_in_input.value;
            let check_in_euro_arr = check_in_euro.split('/');
            check_in_euro = check_in_euro_arr[1] + '/' + check_in_euro_arr[0] + '/' + check_in_euro_arr[2];
            check_in_euro = new Date(check_in_euro);

            let check_out_euro = check_out_input.value;
            let check_out_euro_arr = check_out_euro.split('/');
            check_out_euro = check_out_euro_arr[1] + '/' + check_out_euro_arr[0] + '/' + check_out_euro_arr[2];
            check_out_euro = new Date(check_out_euro);

            let time_difference = Math.abs(check_out_euro - check_in_euro);
            let nights = Math.ceil(time_difference / (1000 * 60 * 60 * 24));
            if (nights < 3 && !document.querySelector('.nights-message')) {
                let properties_container = document.querySelector('#currentPropertyPage');
                properties_container.insertAdjacentHTML('afterBegin', '<div style="background: #93040c; color: #fff; border-radius: 5px; padding: 8px; margin: 20px 0 20px 15px;" class="nights-message">The best rates are available if you book 3 nights or more!</div>')
            }
        }
    }
}

document.querySelector('body').insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/portals/child-portals/noLRG/53739/53739.css">');