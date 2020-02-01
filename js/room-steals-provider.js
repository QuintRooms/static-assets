class RoomStealsNavigation {

    constructor(adminToken, email, firstName, lastName, partnerURL, partnersJSON, memberName, memberPartner, data) {
        this.adminToken = adminToken;
        this.domain = '';
        this.username = '';
        this.password = '';
        this.token = '';
        this.siteID = 52342;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.memberName = memberName;
        this.partnerURL = partnerURL;
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
                this.checkLogin();
                this.updateNavigation();
            }).catch(() => {

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
     *@description gets partners url from memberMetaTag
     *@return json of member data
     */
    async getMemberPartner() {
        let memberMetaTag = await document.querySelector('meta[name="memberMetaTag"]');
        if (memberMetaTag) {
            memberMetaTag = JSON.parse(memberMetaTag.getAttribute('content'));
            let additionalInfo = JSON.parse(memberMetaTag['AdditionalInfo']);
            return this.memberPartner = additionalInfo['partner'];
        }
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
        Object.keys(this.partnersJSON['partners'][this.memberPartner]['nav']['primary']).forEach(key => {
            profileAnchor.insertAdjacentHTML('beforeBegin', '<a href="' + this.partnersJSON['partners'][this.memberPartner]['nav']['primary'][key] + '">' + key + '</a>');
        });

        if (this.memberPartner = 'roomsteals.com') {
            if (document.querySelector('.room-steals')) {
                document.querySelector('.room-steals').setAttribute('href', 'https://' + this.memberPartner + '/home');
                return false;
            }
        }
    }

    checkLogin() {
        let logoutButton = document.querySelector('.logoutCommand');
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.setItem('loggedOut', 'true');
            window.location.href = 'https://' + this.memberPartner + '/home';
        });
    }
}

if (document.querySelector('.MemberAuthenticated')) {
    let roomStealsNavigation = new RoomStealsNavigation();
}