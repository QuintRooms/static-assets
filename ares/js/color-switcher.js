function addColorSwitcherToDOM() {
    document.body.insertAdjacentHTML(
        'beforeEnd',
        `
        <div class="colors-container">
            <span id="adjust-colors">Adjust Colors</span>
            <div class="color-configs">
                <div>
                    <label for="header-background-color">Header Background Color</label>
                    <input type="color" name="header-background-color" id="header-background-color">
                </div>
                <div>
                    <label for="background-color">Background Color</label>
                    <input type="color" name="background-color" id="background-color">
                </div>
                <div>
                    <label for="primary-color">Primary Color</label>
                    <input type="color" name="primary-color" id="primary-color">
                </div>
                <div>
                    <label for="secondary-color">Secondary Color</label>
                    <input type="color" name="secondary-color" id="secondary-color">
                </div>
                <div>
                    <label for="primary-text-color">Primary Text Color</label>
                    <input type="color" name="primary-text-color" id="primary-text-color">
                </div>
                <div>
                    <label for="secondary-text-color">Secondary Text Color</label>
                    <input type="color" name="secondary-text-color" id="secondary-text-color">
                </div>
                <div>
                    <label for="border-color">Border Color</label>
                    <input type="color" name="border-color" id="border-color">
                </div>
                <div>
                    <label for="button-color">Button Color</label>
                    <input type="color" name="button-color" id="button-color">
                </div>
                <div>
                    <label for="button-hover-background-color">Button Hover Backround Color</label>
                    <input type="color" name="button-hover-background-color" id="button-hover-background-color">
                </div>
                <div>
                    <label for="button-hover-text-color">Button Hover Text Color</label>
                    <input type="color" name="button-hover-text-color" id="button-hover-text-color">
                </div>
                <div>
                    <label for="button-hover-border-color">Button Hover Border Color</label>
                    <input type="color" name="button-hover-border-color" id="button-hover-border-color">
                </div>
            </div>
            <style>
                .color-configs {
                    display: none;
                    background: rgba(0, 0, 0, .75);
                    padding: 12px;
                    margin-top: 4px;
                }

                .color-configs div{
                    margin-bottom: 8px;
                }

                .show-color-configs {
                    display: block;
                }

                .color-configs label {
                    display: block;
                    margin-bottom: 4px;
                }

                .colors-container  {
                    position: absolute;
                    top: 18px;
                    left: 18px;
                    z-index: 8;
                    color: #ccc;
                }

                #adjust-colors{
                    text-decoration: underline;
                    margin-bottom: 12px;
                }
            </style>
        </div>
    `
    );
}

function showColorPickers() {
    const adjust_colors_btn = document.querySelector('#adjust-colors');

    adjust_colors_btn.addEventListener('click', () => {
        document.querySelector('.color-configs').classList.toggle('show-color-configs');
    });
}

async function adjustColors() {
    await addColorSwitcherToDOM();
    await showColorPickers();

    document.getElementById('header-background-color').addEventListener('change', (event) => {
        document.querySelector('header').style.background = event.target.value;
    });

    document.getElementById('background-color').addEventListener('change', (event) => {
        const elements = document.querySelectorAll('body, #thePropertyAmenities span, .WBRateGuaranteeForm2 .zsFormClass, #lightbox .window, .WBConfirmedBooking .informMessage');

        elements.forEach((element) => {
            if (!element) return;
            element.style.background = event.target.value;
        });
    });

    document.getElementById('primary-color').addEventListener('change', (event) => {
        const elements = document.querySelectorAll(
            '#searching h2:after, #theConfirmationButton, .ArnPrimarySearchContainer, .ArnShowRatesLink, .ArnTripAdvisorDetails.HasReviews .ratingCount, .CreateAnAccountAction, .RootBody #theOtherSubmitButton, .SimpleSearch, .WBForgotPasswordFormActions .submit, .WBLoginFormActions .submit, .WBValidatedRegistrationFormActions .submit, .arn-leaflet-reset-button, .bookRoom, .HoldRoomsForm .submit, #datePromptContainer+.SimpleSearch .CheckRates .submit, .yui3-skin-sam .yui3-calendar-day:hover, .sort-wrapper .active, .sort-wrapper a:hover, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, .WBConfirmedBooking .submit, .GroupHoldForm .bookRoomButton, .stay-22-banner, .custom-button a, .WBForgotPasswordFormActions input:hover, .SinglePropDetail #moreRatesLink, #lightbox .dialog-button-ok input,input#theSubmitButton, #theOtherSubmitButton, .bookRoom, .arn-leaflet-reset-button, input#theConfirmationButton, a.ArnShowRatesLink, .WBConfirmedBooking .submit .MemberAuthenticated .SearchHotels .arnMapMarker, .MemberAuthenticated .arnMapMarker:hover .arnMapMarkerTriangle, .MemberAuthenticated .SearchHotels .arnMapMarkerTriangle, .yui3-skin-sam .yui3-calendar-day:hover, .yui3-skin-sam .yui3-calendar-day-selected, .active-page, .CheckRates input.submit, .CheckRates input.submit, .CheckRates input.submit, #lightbox, #lightbox .dialog-button-ok input:hover'
        );

        elements.forEach((element) => {
            if (!element) return;
            element.style.background = event.target.value;
        });
    });

    document.getElementById('secondary-color').addEventListener('change', (event) => {
        const elements = document.querySelectorAll('span.exclusive-rate, .percentSavings');

        elements.forEach((element) => {
            if (!element) return;
            element.style.background = event.target.value;
        });
    });

    document.getElementById('primary-text-color').addEventListener('change', (event) => {
        const elements = document.querySelectorAll(
            '#searching, #theConfirmationButton, .HoldRoomsForm .submit, .ArnPrimarySearchContainer, .ArnShowRatesLink, .ArnTripAdvisorDetails.HasReviews .ratingCount, .SinglePropDetail .CheckRates .submit, .CreateAnAccountAction, .RootBody #theOtherSubmitButton, .SearchHotels #theSubmitButton, .SimpleSearch, .WBForgotPasswordFormActions .submit, .WBLoginFormActions .submit, .WBValidatedRegistrationFormActions .submit, .arnMapPopup .rate, #datePromptContainer+.SimpleSearch .CheckRates .submit, .bookRoom, .sort-wrapper .active, .sort-wrapper a:hover, #lightbox .WBChangePasswordFormActions .ChangePasswordAction:hover, .WBConfirmedBooking .submit, .GroupHoldForm .bookRoomButton, // input#theSubmitButton, #theOtherSubmitButton, .bookRoom, .arn-leaflet-reset-button, input#theConfirmationButton, a.ArnShowRatesLink, .WBConfirmedBooking .submit, .CheckRates input.submit, .CheckRates input.submit, .CheckRates input.submit, #lightbox, #lightbox .dialog-button-ok input:hover'
        );

        elements.forEach((element) => {
            if (!element) return;
            element.style.color = event.target.value;
        });
    });

    document.getElementById('secondary-text-color').addEventListener('change', (event) => {
        const elements = document.querySelectorAll(
            '.holdRoom, .reviewCount a, #theAdditionalEmailsLink a, .SinglePropDetail .ArnRateCancelAnchor, .open-modal, .lowest-rate-link, .SinglePropDetail .RateCalendarPopupAnchor, .ArnContentContainer legend, #theRoomsOnHold h2, .confirmation-messaging a, .receiptLink, .returnResultsInfo a, .supportInfo a, .SinglePropDetail #show-more-or-less'
        );

        elements.forEach((element) => {
            if (!element) return;
            element.style.color = event.target.value;
        });
    });

    document.getElementById('border-color').addEventListener('change', (event) => {
        const elements = document.querySelectorAll(
            'input#theSubmitButton, #theOtherSubmitButton, .bookRoom, .arn-leaflet-reset-button, input#theConfirmationButton, a.ArnShowRatesLink, .WBConfirmedBooking .submit, header, .arnMapMarker.contracted-pin, .arnMapMarker.contracted-pin.highlight, .arnMapMarker.contracted-pin:hover,#theOtherSubmitButton, .ArnSecondarySearchOuterContainer select, .ArnShowRatesLink, .RootBody #theOtherSubmitButton, .bookRoom, .sort, .HoldRoomsForm .submit, #lightbox .WBChangePasswordFormActions .ChangePasswordAction, .custom-button a .holdRoom, .active-page, .yui3-skin-sam .yui3-calendar-content'
        );

        elements.forEach((element) => {
            if (!element) return;
            element.style.borderColor = event.target.value;
        });
    });
}

adjustColors();

// @media screen and (max-width:1105px) {

//     #arnCloseAnchorId,
//     #arnCloseAnchorId:active,
//     #arnCloseAnchorId:focus,
//     #arnCloseAnchorId:hover {
//         border: 1px solid $primary_color;
//     }

//     .closeMap {
//         border: 1px solid $primary_text_color!important;
//         background-color: $primary_color!important;
//         color: $primary_text_color!important;
//     }
// }

// @media screen and (max-width:800px) {

//     #commands a:active,
//     #commands a:focus,
//     #commands a:hover,
//     #commands button:active,
//     #commands button:focus,
//     #commands button:hover,
//     .sort-wrapper a:before,
//     .sort-wrapper a.active-filter:before,
//     .sort {
//         background: $primary_color;
//     }
// }

// @media screen and (max-width:1105px) {

//     #arnCloseAnchorId,
//     #arnCloseAnchorId:active,
//     #arnCloseAnchorId:focus,
//     #arnCloseAnchorId:hover {
//         color: $secondary_text_color;
//     }
// }

// @media screen and (max-width: 800px) {
//     #commands a:active,
//     #commands a:focus,
//     #commands a:hover,
//     #commands button:active,
//     #commands button:focus,
//     #commands button:hover,
//     .sort, .SearchHotels .ArnSecondarySearchOuterContainer #theOtherSubmitButton {
//         color: $primary_text_color;
//     }

// input#theSubmitButton:hover,
// input#theSubmitButton:focus,
// input#theSubmitButton:active,
// #theOtherSubmitButton:hover,
// #theOtherSubmitButton:focus,
// #theOtherSubmitButton:active,
// .RootBody #theOtherSubmitButton:hover,
// .RootBody #theOtherSubmitButton:focus,
// .RootBody #theOtherSubmitButton:active,
// .bookRoom:hover,
// .bookRoom:focus,
// .bookRoom:active,
// .arn-leaflet-reset-button:hover,
// .arn-leaflet-reset-button:focus,
// .arn-leaflet-reset-button:active,
// input#theConfirmationButton:hover,
// input#theConfirmationButton:focus,
// input#theConfirmationButton:active,
// a.ArnShowRatesLink:hover, .WBConfirmedBooking .submit:hover, .GroupHoldForm .bookRoomButton:hover {
//     background: $button_hover_background_color;
//     color: $button_hover_text_color;
//     border: 1px solid $button_hover_border_color;
// }

// .CheckRates input.submit:hover,
// .CheckRates input.submit:focus,
// .CheckRates input.submit:active {
//     background: $button_hover_background_color;
//     color: $button_hover_text_color;
// }

// .SinglePropDetail #moreRatesLink:hover {
//     background-color: $primary_color
// }

// @media screen and (max-width:800px) {
//     #theBookingPage legend#policies-legend {
//         color: $secondary_text_color
//     }
// }

// header {
//     border-bottom:3px solid $border_color;
// }

// .arnMapMarker.contracted-pin,
// .arnMapMarker.contracted-pin.highlight{
//     border: 1px solid $primary_text_color;
//     background: $secondary_color;
//     color: $primary_text_color;
// }

// .arnMapMarker.contracted-pin:hover {
//     border: 1px solid $secondary_color;
//     background: $primary_text_color;
//     color: $secondary_color;
// }

// .arnMapMarker.contracted-pin .arnMapMarkerTriangle {
//     border-top-color: $secondary_color;
// }

// @media screen and (max-width:1105px) {
//     #arnCloseAnchorId,
//     .sort {
//         border:1px solid $primary_color;
//     }
// }

// @media screen and (max-width:800px) {
//     .sort-wrapper a:before {
//         border:2px solid $primary_color;
//     }
// }

// .active-page{
//     color: $primary_text_color !important;
// }

// .yui3-skin-sam .yui3-calendar-day-selected {
//     color: $primary_text_color !important;
// }

// .MemberAuthenticated .SearchHotels .arnMapMarker {
//     border-color:  $primary_text_color;
//     color: $primary_text_color;
// }
