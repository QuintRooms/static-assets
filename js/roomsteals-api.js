class RS {
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
        if (!member_meta_tag) return;
        this.member_meta_data = JSON.parse(member_meta_tag.getAttribute('content'));
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
    getPartner() {
        if (this.member_meta_data && this.member_meta_data.AdditionalInfo) {
            this.additional_info_data = this.member_meta_data.AdditionalInfo;
            this.additional_info_data = JSON.parse(this.additional_info_data);
            if (this.additional_info_data && this.additional_info_data.partner) {
                this.partner = this.additional_info_data.partner;
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

        this.subscribe_url = await this.room_steals_api_data.subscribe_url;
        this.partner_model = await this.room_steals_api_data.partner_model;
        this.user_plan = await this.room_steals_api_data.user_plan;
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
                const book_now_btns = document.querySelectorAll('.ArnRateButton');
                if (book_now_btns) {
                    book_now_btns.forEach((btn) => {
                        btn.querySelector('.ArnShowRatesLink').textContent = 'Show More';
                    });
                }
            }
            if (document.querySelector('.SinglePropDetail')) {
                const book_now_btns = document.querySelectorAll('.bookRoom');
                let total;
                let total_el;

                if (book_now_btns) {
                    book_now_btns.forEach((btn) => {
                        total_el = btn.closest('.ArnNightlyRate');
                        if (!total_el) return;

                        total = total_el.getAttribute('total');
                        btn.text = 'Subscribe to Book';
                        btn.setAttribute('href', `${this.subscribe_url}?return_to=${this.property_url}?total=${total}`);
                    });
                }
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

    showCustomerSavingsOnSearchResults() {
        if (this.is_room_steals_trial_user !== true || !document.querySelector('.SearchHotels')) return;
        const member_savings = document.querySelectorAll('.ArnContainer');
        member_savings.forEach((element) => {
            const savings = element.querySelector('.creditsValue');
            const btn = element.querySelector('.ArnRateButton');

            if (!savings) return;

            const savings_int = savings.textContent.replace(/\D+/g, '');
            let adjusted_savings = savings_int * this.room_nights - 5900;
            if (adjusted_savings > 500) {
                adjusted_savings = adjusted_savings.toString().slice(0, -2);
                if (!element.querySelector('.savings-tag')) {
                    btn.insertAdjacentHTML(
                        'afterEnd',
                        `<div class="savings-tag">With the $59 subscription, you'd still save <strong>$${adjusted_savings}</strong> on this reservation!</div><style>.savings-tag{max-width: 250px; display: block; font-style: initial; text-align: center; width: 100%; margin: 0 auto !important; font-size: 13px; padding: 2px; border-radius: 5px; background: #faaf18; color: #333;letter-spacing:-.2px; font-weight:normal;position:relative; top: 12px;}@media screen and (max-width:800px){.savings-tag{top: 6px;}}@media screen and (max-width:500px){.savings-tag{top: 0;}}</style>`
                    );
                }
            }
        });
    }

    showCustomerSavingsOnSinglePropPage() {
        if (this.is_room_steals_trial_user === true) {
            if (document.querySelector('.SinglePropDetail')) {
                document.body.insertAdjacentHTML(
                    'beforeEnd',
                    '<style>.bestPrice .creditsLabel{display: none !important;}.SinglePropDetail .bookRoomCell .memberSavings{ border-bottom: none;} .ArnNightlyRate{display: flex; flex-direction: column;} .memberSavings{order: 2;}</style>'
                );

                const member_savings = document.querySelectorAll('.memberSavings');
                member_savings.forEach((element) => {
                    const savings = element.querySelector('.creditsValue');
                    const label = element.querySelector('.creditsLabel');
                    if (savings) {
                        const savings_int = savings.textContent.replace(/\D+/g, '');
                        let adjusted_savings = savings_int * this.room_nights - 5900;
                        if (adjusted_savings > 500) {
                            let element_styles = 'display: block !important';
                            element.style.cssText += element_styles;
                            savings.style.display = 'none';
                            const label_styles =
                                'max-width: 250px; display: block; font-style: initial; text-align: center; width: 100%; margin: 8px auto; font-size: 13px; padding: 2px; border-radius: 5px; background: #faaf18; color: #333;letter-spacing:-.2px';
                            label.style.cssText += label_styles;

                            element_styles = 'display: block !important; position: static !important;';
                            element.style.cssText += element_styles;
                            const single_prop_savings = document.querySelectorAll('.creditsLabel strong');
                            if (single_prop_savings) {
                                single_prop_savings.forEach(function (prop_saving) {
                                    const single_prop_savings_styles =
                                        'display: inline !important; color: inherit !important; font-size: inherit !important; font-weight: bold !important;';
                                    prop_saving.style.cssText += single_prop_savings_styles;
                                });
                            }

                            adjusted_savings = adjusted_savings.toString().slice(0, -2);
                            label.innerHTML = `With the $59 subscription, you'd still save <strong>$${adjusted_savings}</strong> on this reservation!`;
                        }
                    }
                });
            }
        }
    }

    async setPropertyURL() {
        if (document.querySelector('.SinglePropDetail')) {
            let property_id = document.querySelector('meta[name="aPropertyId"]');
            let check_in = document.querySelector('meta[name="checkIn"]');

            if (property_id && check_in) {
                property_id = property_id.getAttribute('content');
                check_in = check_in.getAttribute('content');
            }

            this.property_url = await encodeURI(
                `https://hotels.roomsteals.com/v6?siteid=52342&type=property&property=${property_id}&checkin=${check_in}&nights=${this.room_nights}`
            );
        }
    }
}

if ((document.querySelector('.MemberAuthenticated') && document.querySelector('.SearchHotels')) || document.querySelector('.SinglePropDetail')) {
    const rs = new RS();
    jQuery(document).on('ratesReadyEvent', () => {
        rs.getRoomNights();
        rs.getMemberMetaData()
            .then(() => {
                rs.getReferralID();
                rs.getPartner();
            })
            .then(() => {
                rs.getRoomStealsAPIData().then(() => {
                    rs.setRoomStealsUser().then(() => {
                        rs.checkIsRoomStealsTrialUser().then(() => {
                            rs.setPropertyURL().then(() => {
                                rs.showSubscribeNowButtonsForTrialUsers();
                            });

                            rs.showCustomerSavingsOnSinglePropPage();
                            rs.showCustomerSavingsOnSearchResults();
                        });
                    });
                });
            });
    });
}
