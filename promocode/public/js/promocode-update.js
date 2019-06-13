class PromoCode {

    constructor(siteid, data, admintoken, membertoken, couponcode, domain, username, password, email, firstname, lastname, points) {
        this.siteid = '39624';
        this.admintoken = admintoken;
        this.membertoken = membertoken;
        this.couponcode = couponcode;
        this.domain = 'https://api.travsrv.com/MemberAPI.aspx';
        this.username = 'h4h';
        this.password = 'h4hArn1234';
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.data = data;
        this.points = points;
        this.token = 'nate.ritter@hotelsforhope.com';

        this.init();
    }

    init() {
        this.getEmail();
        this.getFirstName();
        this.getLastName();
        this.getAdminToken().then(() => {
            this.getMemberToken().then(() => {
                this.getMemberPoints();
                // this.redeemCouponcode();
            })

        });
    }

    async getRequest(url) {
        let response = await fetch(url);
        return this.data = await response.json();
    }
    // promocode.localhost/cug-api/call?siteid=39624&token=ARNUSER-nate.ritter@hotelsforhope.com
    // this.domain + '?username=' + this.username + '&password=' + this.password + '&siteid=' + this.siteid + '&token=ARNUSER-' + this.token
    getAdminToken() {
        return this.getRequest('promocode.localhost/cug-api/call?siteid=39624&token=ARNUSER-nate.ritter@hotelsforhope.com')
            .then(data => this.admintoken = data['CurrentToken']);
    }

    getMemberToken() {
        return this.getRequest('https://api.travsrv.com/MemberAPI.aspx?siteid=' + this.siteid + '&token=' + this.admintoken + '&memberData=%7B%22Points%22%3A100%2C%22Names%22%3A%5B%7B%22ReferralId%22%3A%22mytestuser1%40gmail.com%22%2C%22FirstName%22%3A%22Testme%22%2C%22LastName%22%3A%22Tester%22%2C%22Email%22%3A%22mytestuser1%40gmail.com%22%2C%22Address1%22%3A%22123%20Main%20Street%22%2C%22HomePhone%22%3A%225551231212%22%7D%5D%7D')
            .then(data => this.membertoken = data['CurrentToken']);
    }

    getEmail() {
        return document.querySelector('meta[name="email"]').getAttribute('content');
    }

    getFirstName() {
        return document.querySelector('meta[name="firstName"]').getAttribute('content');
    }

    getLastName() {
        return document.querySelector('meta[name="lastName"]').getAttribute('content');
    }

    getCouponcode() {
        var code = document.getElementById('cc').value;
        return this.getRequest('https://api.travsrv.com/Coupon.aspx?username=' + this.username + '&password=' + this.password +
                '&siteid=' + this.siteid + '&type=get&couponcode=' + code)
            .then(data => this.couponcode = data['Data']['Discount']);
    }

    getMemberPoints() {
        return this.getRequest('https://api.travsrv.com/MemberAPI.aspx?siteid=' + this.siteid + '&token=' + this.admintoken + '&memberData=%7B%22Points%22%3A100%2C%22Names%22%3A%5B%7B%22ReferralId%22%3A%22mytestuser1%40gmail.com%22%2C%22FirstName%22%3A%22Testme%22%2C%22LastName%22%3A%22Tester%22%2C%22Email%22%3A%22mytestuser1%40gmail.com%22%2C%22Address1%22%3A%22123MainStreet%22%2C%22HomePhone%22%3A%225551231212%22%7D%5D%7D')
            .then(data => this.points = data['Points']);
    }

    addDiscount() {
        this.points += this.couponcode;
        console.log(this.points);
        return this.points;
    }
}

let promocode = new PromoCode();
document.querySelector('form').addEventListener('submit', function(e) {
    promocode.getCouponcode().then(() => {
        promocode.addDiscount();
    });
    e.preventDefault();
});



// 126-2526856