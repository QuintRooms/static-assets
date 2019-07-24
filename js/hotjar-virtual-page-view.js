// class HotJarVirtualView {

//     site_id;
//     page_name;
//     test_name;

//     constructor(site_id, page_name, test_name) {
//         this.site_id = site_id;
//         this.page_name = page_name;
//         this.test_name = test_name;

//         this.init();
//     }

//     init() {
//         this.getSiteId();
//         this.getPageName();
//         this.getTestName();
//     };

//     getSiteId() {
//         this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
//     }

//     getPageName() {
//         let bodyClasses = document.querySelector('body');

//         if (bodyClasses.classList.contains('SearchHotels')) {
//             this.page_name = 'search-results';
//             return;
//         }
//         if (bodyClasses.classList.contains('SinglePropDetail')) {
//             this.page_name = 'property-detail';
//             return;
//         }
//         if (bodyClasses.classList.contains('CheckOutForm')) {
//             this.page_name = 'checkout';
//             return;
//         }
//         if (bodyClasses.classList.contains('ConfirmationForm')) {
//             this.page_name = 'confirmation';
//             return;
//         }

//         // formula 1 static pages
//         if (bodyClasses.classList.contains('bookroomsLanding')) {
//             this.page_name = 'bookrooms-landing';
//             return;
//         }

//         if (bodyClasses.classList.contains('fowtPage')) {
//             this.page_name = 'fowt-landing';
//             return;
//         }
//     }

//     getTestName() {
//         let test_element = document.querySelector('.testName');

//         if (test_element) {
//             this.test_name = test_element.getAttribute('data-test');
//             return;
//         }
//     }

//     hitVirtualView() {
//         // hits hotjar for all sites
//         if (this.page_name) {
//             hj('vpv', '/' + this.page_name);
//         }
//         // hits hotjar when there is no test running - our control
//         if (this.site_id && this.page_name && this.test_name == null) {
//             hj('vpv', '/' + this.site_id + '/' + this.page_name);
//         }
//         // hits hotjar when there is a test name - our experiment
//         if (this.site_id && this.page_name && this.test_name) {
//             hj('vpv', '/' + this.site_id + '/' + this.page_name + '/' + this.test_name);
//         }
//         return;
//     }
// }

// let hotJarVirtualView = new HotJarVirtualView();
// hotJarVirtualView.hitVirtualView();
// 
// 
// function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }



// transpiled code
function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HotJarVirtualView =
/*#__PURE__*/
function () {
  "use strict";

  function HotJarVirtualView(site_id, page_name, test_name) {
    _classCallCheck(this, HotJarVirtualView);

    this.site_id = site_id;
    this.page_name = page_name;
    this.test_name = test_name;
    this.init();
  }

  _createClass(HotJarVirtualView, [{
    key: "init",
    value: function init() {
      this.getSiteId();
      this.getPageName();
      this.getTestName();
    }
  }, {
    key: "getSiteId",
    value: function getSiteId() {
      this.site_id = document.querySelector('meta[name="siteId"]').getAttribute('content');
    }
  }, {
    key: "getPageName",
    value: function getPageName() {
      var bodyClasses = document.querySelector('body');

      if (bodyClasses.classList.contains('SearchHotels')) {
        this.page_name = 'search-results';
        return;
      }

      if (bodyClasses.classList.contains('SinglePropDetail')) {
        this.page_name = 'property-detail';
        return;
      }

      if (bodyClasses.classList.contains('CheckOutForm')) {
        this.page_name = 'checkout';
        return;
      }

      if (bodyClasses.classList.contains('ConfirmationForm')) {
        this.page_name = 'confirmation';
        return;
      } // formula 1 static pages


      if (bodyClasses.classList.contains('bookroomsLanding')) {
        this.page_name = 'bookrooms-landing';
        return;
      }

      if (bodyClasses.classList.contains('fowtPage')) {
        this.page_name = 'fowt-landing';
        return;
      }
    }
  }, {
    key: "getTestName",
    value: function getTestName() {
      var test_element = document.querySelector('.testName');

      if (test_element) {
        this.test_name = test_element.getAttribute('data-test');
        return;
      }
    }
  }, {
    key: "hitVirtualView",
    value: function hitVirtualView() {
      // hits hotjar for all sites
      if (this.page_name) {
        hj('vpv', '/' + this.page_name);
      } // hits hotjar when there is no test running - our control


      if (this.site_id && this.page_name && this.test_name == null) {
        hj('vpv', '/' + this.site_id + '/' + this.page_name);
      } // hits hotjar when there is a test name - our experiment


      if (this.site_id && this.page_name && this.test_name) {
        hj('vpv', '/' + this.site_id + '/' + this.page_name + '/' + this.test_name);
      }

      return;
    }
  }]);

  return HotJarVirtualView;
}();

var hotJarVirtualView = new HotJarVirtualView();
hotJarVirtualView.hitVirtualView();