export default class RoomSteals {
    constructor(
        member_meta_data,
        additional_info_data,
        partner,
        referral_id,
        room_steals_api_data,
        partner_model,
        user_plan,
        subscribe_url,
        is_room_steals_trial_user,
        room_nights,
        property_url
    ) {
        this.api_token = 'NWJzBYUfpAmNXtJzayXGfxE2owHVPQ5fWxkvPSNMdMp3FKPpDs0TBWyvqrUa';
        this.member_meta_data = member_meta_data;
        this.additional_info_data = additional_info_data;
        this.partner = partner;
        this.referral_id = referral_id;
        this.room_steals_api_data = room_steals_api_data;
        this.partner_model = partner_model;
        this.user_plan = user_plan;
        this.subscribe_url = subscribe_url;
        this.is_room_steals_trial_user = is_room_steals_trial_user;
        this.room_nights = room_nights;
        this.property_url = property_url;
    }

    /**
     *@description gets partners url from member_meta_tag
     *@return json of member data
     */
    async getMemberMetaData() {
        const member_meta_tag = await document.querySelector('meta[name="memberMetaTag"]');
        console.log(member_meta_tag);
        if (!member_meta_tag) return;

        this.member_meta_data = JSON.parse(member_meta_tag.getAttribute('content'));

        return this.member_meta_data;
    }

    getReferralID() {
        if (this.member_meta_data && this.member_meta_data.Names && this.member_meta_data.Names[0] && this.member_meta_data.Names[0].ReferralId) {
            // eslint-disable-next-line prefer-destructuring
            this.referral_id = this.member_meta_data.Names[0].ReferralId.split('-')[1];
            return this.referral_id;
        }
    }

    /**
     *@description list of partners from https://roomsteals.com/js/partners.json
     *@return json of partner data
     */
    async getPartner() {
        if (this.member_meta_data && this.member_meta_data.AdditionalInfo) {
            this.additional_info_data = this.member_meta_data.AdditionalInfo;
            this.additional_info_data = JSON.parse(this.additional_info_data);
            if (this.additional_info_data && this.additional_info_data.partner) {
                this.partner = this.additional_info_data.partner;

                return this.partner;
            }
        }
    }

    async getRoomStealsAPIData() {
        const response = await fetch(`https://roomsteals.com/api/partners/${this.partner}/users/${this.referral_id}?api_token=${this.api_token}`);
        if (this.partner !== undefined && this.referral_id !== undefined) {
            this.room_steals_api_data = await response.json();
        }
    }

    async setRoomStealsUser() {
        if (!this.room_steals_api_data) return;

        this.subscribe_url = this.room_steals_api_data.subscribe_url;
        this.partner_model = this.room_steals_api_data.partner_model;
        this.user_plan = this.room_steals_api_data.user_plan;
    }

    async checkIsRoomStealsTrialUser() {
        if (this.partner === 'roomsteals.com' && this.user_plan === null) {
            this.is_room_steals_trial_user = true;
        } else {
            this.is_room_steals_trial_user = false;
        }
    }

    updateBookingButtons() {
        if (document.querySelector('.SearchHotels')) {
            const book_now_btns = document.querySelectorAll('.ArnRateButton');
            if (!book_now_btns) return;
            if (this.is_room_steals_trial_user === true) {
                book_now_btns.forEach((btn) => {
                    btn.querySelector('.ArnShowRatesLink').textContent = 'Show More';
                });
            } else {
                book_now_btns.forEach((btn) => {
                    btn.querySelector('.ArnShowRatesLink').textContent = 'See My Rate';
                });
            }
        }

        if (document.querySelector('.SinglePropDetail')) {
            const book_now_btns = document.querySelectorAll('.bookRoom');
            if (!book_now_btns) return;
            if (this.is_room_steals_trial_user === true) {
                let total;
                let total_el;

                book_now_btns.forEach((btn) => {
                    total_el = btn.parentNode.querySelector('.ArnNightlyRate');

                    if (!total_el) return;

                    total = total_el.getAttribute('total');
                    btn.text = 'Subscribe to Book';
                    btn.setAttribute('href', `${this.subscribe_url}/?return_to=${this.property_url}&total=${total}`);
                });
            } else {
                book_now_btns.forEach((btn) => {
                    btn.textContent = 'Book My Room';
                });
            }
        }
        return false;
    }

    getRoomNights() {
        const checkin_input = document.querySelector('#theCheckIn');
        const checkout_input = document.querySelector('#theCheckOut');
        if (checkin_input && checkout_input) {
            const check_in = new Date(checkin_input.value);
            const check_out = new Date(checkout_input.value);
            const time_difference = Math.abs(check_out - check_in);
            const day_difference = Math.ceil(time_difference / (1000 * 60 * 60 * 24));
            this.room_nights = day_difference;
            return this.room_nights;
        }
    }

    showCustomerSavings() {
        if (this.is_room_steals_trial_user !== true) return;

        let property_container = '';
        let prop = '';

        if (document.querySelector('.SearchHotels')) {
            property_container = document.querySelectorAll('.ArnContainer');
        }

        if (document.querySelector('.SinglePropDetail')) {
            property_container = document.querySelectorAll('.rateRow');
        }

        property_container.forEach((property) => {
            const savings_el = property.querySelector('.originalPrice');

            if (document.querySelector('.SearchHotels')) {
                prop = property.querySelector('.ArnPropName');
            } else if (document.querySelector('.SinglePropDetail')) {
                prop = property.querySelector('.bookRoom');
            }

            if (!savings_el) return;

            const savings = savings_el.getAttribute('amount');

            const savings_int = savings.replace(/\D+/g, '');
            let adjusted_savings = savings_int * this.room_nights - 5900;

            if (adjusted_savings > 500) {
                adjusted_savings = adjusted_savings.toString().slice(0, -2);
                if (!property.querySelector('.savings-tag')) {
                    prop.insertAdjacentHTML(
                        'beforeEnd',
                        `<div class="savings-tag">With the $59 subscription, you'd still <strong>save $${adjusted_savings}</strong> on this reservation!</div>
                      `
                    );
                }
            }
        });
    }

    async setPropertyURL() {
        if (document.querySelector('.SinglePropDetail')) {
            let property_id = document.querySelector('meta[name="aPropertyId"]');
            let check_in = document.querySelector('meta[name="checkIn"]');

            if (property_id && check_in) {
                property_id = property_id.getAttribute('content');
                check_in = check_in.getAttribute('content');
            }

            this.property_url = encodeURI(`https://hotels.roomsteals.com/v6?siteid=52342&type=property&property=${property_id}&checkin=${check_in}&nights=${this.room_nights}`);
        }
    }
}

if ((document.querySelector('.MemberAuthenticated') && document.querySelector('.SearchHotels')) || document.querySelector('.SinglePropDetail')) {
    const roomsteals = new RoomSteals();

    roomsteals.getRoomNights();
    roomsteals
        .getMemberMetaData()
        .then((member_data) => {
            roomsteals.getReferralID();
            roomsteals.getPartner();
        })
        .then(() => {
            roomsteals.getRoomStealsAPIData().then(() => {
                roomsteals.setRoomStealsUser().then(() => {
                    roomsteals.checkIsRoomStealsTrialUser().then(() => {
                        roomsteals.setPropertyURL().then(() => {
                            roomsteals.updateBookingButtons();
                        });

                        if (document.querySelector('.SearchHotels')) {
                            // jQuery(document).on('ratesReadyEvent', () => {
                            roomsteals.showCustomerSavings();
                            // });
                        }

                        if (document.querySelector('.SinglePropDetail')) {
                            roomsteals.showCustomerSavings();
                        }
                    });
                });
            });
        });
}
