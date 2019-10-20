class RoomStealsModel {
    constructor(member_meta_data, additional_info_data, partner, referral_id, room_steals_api_data, partner_model, user_plan, subscribe_url, isRoomStealsTrialUser) {
        this.api_token = 'NWJzBYUfpAmNXtJzayXGfxE2owHVPQ5fWxkvPSNMdMp3FKPpDs0TBWyvqrUa';
        this.member_meta_data = member_meta_data;
        this.additional_info_data = additional_info_data;
        this.partner = partner;
        this.referral_id = referral_id;
        this.room_steals_api_data = room_steals_api_data;
        this.partner_model = partner_model;
        this.user_plan = user_plan;
        this.subscribe_url = subscribe_url;
        this.isRoomStealsTrialUser = isRoomStealsTrialUser;

        this.init();
    }

    init() {
        this.getMemberMetaData()
            .then(() => {
                this.getReferralID();
                this.getPartner();
            })
            .then(() => {
                this.getRoomStealsAPIData()
                    .then(() => {
                        this.setRoomStealsUser()
                            .then(() => {
                                this.checkIsRoomStealsTrialUser()
                                    .then(() => {
                                        this.showSubscribeNowButtonsForTrialUsers();
                                    });
                            });
                    });
            });
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
        return this.room_steals_api_data = await response.json();
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
            this.isRoomStealsTrialUser = true;
        } else {
            this.isRoomStealsTrialUser = false;
        }
    }

    showSubscribeNowButtonsForTrialUsers() {
        if (this.isRoomStealsTrialUser === true) {
            if (document.querySelector('.SearchHotels')) {
                let book_now_btns = document.querySelectorAll('.ArnRateButton');
                if (book_now_btns) {
                    book_now_btns.forEach(btn => {
                        btn.innerHTML = `<a class="ArnShowRatesLink" href="${this.subscribe_url}" target="_blank">Subscribe Now</a>`;
                    });
                }
            }
            if (document.querySelector('.SinglePropDetail')) {
                let book_now_btns = document.querySelectorAll('.bookRoom');
                if (book_now_btns) {
                    book_now_btns.forEach(btn => {
                        btn.text = 'Subscribe Now';
                        btn.setAttribute('href', this.subscribe_url);
                        btn.setAttribute('target', '_blank');
                    });
                }
            }
        }
        return false;
    }
}

if (document.querySelector('.MemberAuthenticated') && document.querySelector('.SearchHotels') || document.querySelector('.SinglePropDetail')) {
    let roomStealsModel = new RoomStealsModel();
}