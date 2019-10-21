class RoomStealsModel {
    constructor(member_meta_data, additional_info_data, partner, referral_id, room_steals_api_data, partner_model, user_plan, subscribe_url, is_room_steals_trial_user, room_nights) {
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
    }

    /**
     *@description gets partners url from member_meta_tag
     *@return json of member data
     */
    async getMemberMetaData() {
        let member_meta_tag = await document.querySelector('meta[name="memberMetaTag"]');
        if (member_meta_tag) {
            return this.member_meta_data = JSON.parse(member_meta_tag.getAttribute('content'));
        }
    }

    getReferralID() {
        if (this.member_meta_data && this.member_meta_data['Names'] && this.member_meta_data['Names'][0] && this.member_meta_data['Names'][0]['ReferralId']) {
            this.referral_id = this.member_meta_data['Names'][0]['ReferralId'].split('-')[1];
            return this.referral_id;
        }
    }

    /**
     *@description list of partners from https://roomsteals.com/js/partners.json
     *@return json of partner data
     */
    getPartner() {
        if (this.member_meta_data && this.member_meta_data['AdditionalInfo']) {
            this.additional_info_data = this.member_meta_data['AdditionalInfo'];
            this.additional_info_data = JSON.parse(this.additional_info_data);
            if (this.additional_info_data && this.additional_info_data['partner']) {
                return this.partner = this.additional_info_data['partner'];
            }
        }
    }

    async getRoomStealsAPIData() {
        let response = await fetch(`https://roomsteals.com/api/partners/${this.partner}/users/${this.referral_id}?api_token=${this.api_token}`);
        if (this.partner != undefined && this.referral_id != undefined) {
            return this.room_steals_api_data = await response.json();
        }
    }

    async setRoomStealsUser() {
        if (this.room_steals_api_data) {
            this.subscribe_url = await this.room_steals_api_data['subscribe_url'];
            this.partner_model = await this.room_steals_api_data['partner_model'];
            this.user_plan = await this.room_steals_api_data['user_plan'];
        }
    }

    async checkIsRoomStealsTrialUser() {
        if (this.partner === 'roomsteals.com' && this.user_plan === null) {
            this.is_room_steals_trial_user = true;
        } else {
            this.is_room_steals_trial_user = false;
        }
    }

    showSubscribeNowButtonsForTrialUsers() {
        if (this.is_room_steals_trial_user === true) {
            if (document.querySelector('.SearchHotels')) {
                let book_now_btns = document.querySelectorAll('.ArnRateButton');
                if (book_now_btns) {
                    book_now_btns.forEach(btn => {
                        btn.innerHTML = `<a class="ArnShowRatesLink" href="${this.subscribe_url}">Subscribe to Book</a>`;
                    });
                }
            }
            if (document.querySelector('.SinglePropDetail')) {
                let book_now_btns = document.querySelectorAll('.bookRoom');
                if (book_now_btns) {
                    book_now_btns.forEach(btn => {
                        btn.text = 'Subscribe to Book';
                        btn.setAttribute('href', this.subscribe_url);
                    });
                }
            }
        }
        return false;
    }

    getRoomNights() {
        let checkin_input = document.querySelector('#theCheckIn');
        let checkout_input = document.querySelector('#theCheckOut');
        if (checkin_input && checkout_input) {
            let check_in = new Date(checkin_input.value);
            let check_out = new Date(checkout_input.value);
            let time_difference = Math.abs(check_out - check_in);
            let day_difference = Math.ceil(time_difference / (1000 * 60 * 60 * 24));
            this.room_nights = day_difference;
            return this.room_nights;
        }
    }

    showCustomerSavingsOnSearchResultsPage() {
        if (this.is_room_steals_trial_user === true) {
            if (document.querySelector('.SearchHotels')) {
                let prop_container = document.querySelectorAll('.ArnContainer');
                prop_container.forEach((prop) => {
                    let savings = prop.querySelector('.creditsValue');
                    let label = prop.querySelector('.creditsLabel');
                    let member_savings_container = prop.querySelector('.memberSavings');
                    let subscribe_btn = prop.querySelector('.ArnRateButton');
                    if (savings) {
                        let savings_int = savings.textContent.replace(/\D+/g, '');
                        let adjusted_savings = (savings_int * this.room_nights) - 5900;
                        if (adjusted_savings > 500) {
                            member_savings_container.style.display = 'block';
                            let prop_styles = 'display: block !important';
                            prop.style.cssText += prop_styles;
                            savings.style.display = 'none';
                            let label_styles = 'display: block !important; font-style: initial; text-align: center; width: 100%; margin: 12px 0 -12px 0; font-size: 13px; padding: 2px; border-radius: 5px; background: #faaf18; color: #333;letter-spacing:-.2px';
                            label.style.cssText += label_styles;
                            if (document.querySelector('.SearchHotels')) {
                                prop.insertAdjacentHTML('beforeEnd', '<style>.ArnPropThumb{min-height:225px !important; .SearchHotels .creditsLabel{margin: 8px 0 !important;} .perNight{display: none !important;}</style>');
                            }

                            adjusted_savings = adjusted_savings.toString().slice(0, -2);
                            label.innerHTML = `With the $59 subscription, you'd still save <strong>$${adjusted_savings}</strong> on this reservation!`;
                            subscribe_btn.insertAdjacentElement('afterEnd', label);

                        }
                    }
                });
            }
        }
    }

    showCustomerSavingsOnSinglePropPage() {
        if (this.is_room_steals_trial_user === true) {
            if (document.querySelector('.SinglePropDetail')) {
                let member_savings = document.querySelectorAll('.memberSavings');
                member_savings.forEach((element) => {
                    let savings = element.querySelector('.creditsValue');
                    let label = element.querySelector('.creditsLabel');
                    if (savings) {
                        let savings_int = savings.textContent.replace(/\D+/g, '');
                        let adjusted_savings = (savings_int * this.room_nights) - 5900;
                        if (adjusted_savings > 500) {
                            let element_styles = 'display: block !important';
                            element.style.cssText += element_styles;
                            savings.style.display = 'none';
                            let label_styles = 'max-width: 250px; display: block; font-style: initial; text-align: center; width: 100%; margin: 8px auto; font-size: 13px; padding: 2px; border-radius: 5px; background: #faaf18; color: #333;letter-spacing:-.2px';
                            label.style.cssText += label_styles;

                            element_styles = 'display: block !important; position: static !important;';
                            element.style.cssText += element_styles;
                            let single_prop_savings = document.querySelectorAll('.creditsLabel strong');
                            if (single_prop_savings) {
                                single_prop_savings.forEach(function(prop_saving) {
                                    let single_prop_savings_styles = 'display: inline !important; color: inherit !important; font-size: inherit !important; font-weight: inherit !important;';
                                    prop_saving.style.cssText += single_prop_savings_styles;
                                });
                            }
                            element.insertAdjacentHTML('beforeEnd', '<style>.bestPrice .creditsLabel{display: none !important;}.SinglePropDetail .bookRoomCell .memberSavings{ border-bottom: none;} .ArnNightlyRate{display: flex; flex-direction: column;} .memberSavings{order: 2;}</style>')
                            adjusted_savings = adjusted_savings.toString().slice(0, -2);
                            label.innerHTML = `With the $59 subscription, you'd still save <strong>$${adjusted_savings}</strong> on this reservation!`;
                        }
                    }
                });
            }
        }
    }
}

if (document.querySelector('.MemberAuthenticated') && document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail')) {
    let roomStealsModel = new RoomStealsModel();
    jQuery(document).on("ratesReadyEvent", () => {
        roomStealsModel.getRoomNights();
        roomStealsModel.getMemberMetaData()
            .then(() => {
                roomStealsModel.getReferralID();
                roomStealsModel.getPartner();
            })
            .then(() => {
                roomStealsModel.getRoomStealsAPIData()
                    .then(() => {
                        roomStealsModel.setRoomStealsUser()
                            .then(() => {
                                roomStealsModel.checkIsRoomStealsTrialUser()
                                    .then(() => {
                                        roomStealsModel.showSubscribeNowButtonsForTrialUsers();
                                        roomStealsModel.showCustomerSavingsOnSearchResultsPage();
                                        roomStealsModel.showCustomerSavingsOnSinglePropPage();
                                    });
                            });
                    });
            });
    });
}