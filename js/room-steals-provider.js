class RoomStealsNavigation {

    constructor(adminToken, email, firstName, lastName, partnersJSON, memberName, memberPartner, data) {
        this.adminToken = adminToken;
        this.domain = 'https://api.travsrv.com/';
        this.username = 'h4h';
        this.password = 'h4hArn1234';
        this.token = 'nate.ritter@hotelsforhope.com';
        this.siteID = 52342;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.memberName = memberName;
        this.memberPartner = memberPartner;
        this.partnersJSON = partnersJSON;
        this.data = data;

        this.init();
    }

    init() {
        this.getPartner();
        this.getMemberName();
        this.getAdminToken().then(() => {
            this.getMemberPartner().then(() => {
                this.updateNavigation();
            });
        });
    }

    /**
     *@description fetches json from specified url
     *@param string url - url to fetch
     *@return json object
     */
    async getRequest(url) {
        let response = await fetch(url);
        return this.data = await response.json();
    }

    /**
     *@description posts to API from specified url
     *@param string url - url to fetch
     *@return json object
     */
    async postRequest(url) {
        let response = await fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: url
            })
            .then(response => response.json())
            .then(response => this.data = response)
            .catch(() => {
                throw new Error('Post not performed.');
            });
    }

    /**
     *@description encodes url param into string
     *@param string
     */
    encodeString(string) {
        return encodeURIComponent(JSON.stringify(string));
    }

    /**
     *@description fetches admin token from API call
     *@return string admin token
     */
    getAdminToken() {
        return this.getRequest(this.domain + 'MemberAPI.aspx?username=' + this.username + '&password=' + this.password + '&siteid=' + this.siteID + '&token=ARNUSER-' + this.token)
            .then((data) => {
                this.adminToken = data['CurrentToken'];
            })
            .catch(() => {
                throw new Error('Admin token not received.');
            });
    }

    /**
     *@description fetches names, referralid, firstname, lastname, and email
     *@return json of member data
     */
    getMemberName() {
        this.lastName = document.querySelector('meta[name="lastName"]').getAttribute('content');
        this.firstName = document.querySelector('meta[name="firstName"]').getAttribute('content');
        this.email = document.querySelector('meta[name="email"]').getAttribute('content');

        this.memberName = {
            "Names": [{
                "ReferralId": this.email,
                "FirstName": this.firstName,
                "LastName": this.lastName,
                "Email": this.email,
            }]
        };
        return this.memberName;
    }

    /**
     *@description fetches names, referralid, firstname, lastname, and email
     *@return json of member data
     */
    getMemberPartner() {
        return this.postRequest(this.domain + 'MemberAPI.aspx?siteid=' + this.siteID + '&token=' + this.adminToken + '&memberData=' + this.encodeString(this.memberName))
            .then(data => {
                this.memberPartner = JSON.parse(this.data['AdditionalInfo']);
                this.memberPartner = this.memberPartner['partner'];
            })
            .catch(() => {
                throw new Error('Member not received.');
            });
    }
    /**
     *@description list of partners from https://roomsteals.com/js/partners.json
     *@return json of partner data
     */
    getPartner() {
        return this.getRequest('https://roomsteals.com/js/partners.json')
            .then(data => {
                this.partnersJSON = this.data;
            }).catch(() => {
                throw new Error('Partner data not received.');
            });
    }

    /**
     *@description updates the profile url to that of the partner url
     */
    updateNavigation() {
        let profileAnchor = document.querySelector('#commands .profileCommand');
        profileAnchor.style.display = 'none';
        Object.keys(this.partnersJSON['partners'][this.memberPartner]['nav']['primary']).forEach(key => {
            profileAnchor.insertAdjacentHTML('beforeBegin', '<a href="' + this.partnersJSON['partners'][this.memberPartner]['nav']['primary'][key] + '">' + key + '</a>');
        });
    }
}

if(document.querySelector('.MemberAuthenticated')){
	let roomStealsNavigation = new RoomStealsNavigation();
}