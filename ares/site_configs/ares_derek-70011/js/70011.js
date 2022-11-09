import BasePortal from '../../../js/build';
import SiteConfig from './70011-config';
// import ModalSeacret from '../../../js/components/modal_seacret/modal_seacret';

// const html_str = `
// <h4>Test</h4>
// <p>this is only a test</p>
// `;
// const modal_id = 'test-modal';

const site_config = new SiteConfig();
// const test_modal = new ModalSeacret(modal_id);

class ChildPortal extends BasePortal {
    constructor() {
        super(site_config);
        super.init();
        // this.useIconStarsFromNodes();
        // test_modal.init();
    }

    // async useIconStarsFromNodes() {
    //     // const star_boxes = await document.querySelectorAll('.lbl5stars', '.lbl4stars', '.lbl3stars', '.lbl2stars', '.lbl1stars');
    //     const star_boxes = document.querySelector('.V5StarsBox').parentElement.children;
    //     const star_boxes_arr = Array.from(star_boxes);
    //     star_boxes_arr.shift();
    //     const star_svg =
    //         '<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

    //     star_boxes_arr.forEach((star_box) => {
    //         const star_box_divs = star_box.children;
    //         const star_div = star_box_divs[star_box_divs.length - 1];
    //         const star_num = star_div.textContent.replace(/\D/g, '');
    //         star_div.innerHTML = star_svg.repeat(star_num);
    //     });
    // }

    // createTriggerElement() {
    //     const trigger_container = document.querySelectorAll(`originalPrice`);
    //     trigger_container.classList.add(`${modal_id}-trigger`);
    // }
}

//  trigger_container.insertAdjacentHTML(
//             'beforeend',
//             `<button class='${modal_id}-trigger btm-right'>i</button>
//             <style>
//                 .${modal_id}-trigger {
//                     border: none;
//                     display: inline-block;
//                     padding: 0px;
//                     margin-right: 16px;
//                     margin-bottom: 8px;
//                     vertical-align: middle;
//                     overflow: hidden;
//                     text-decoration: none;
//                     background-color: inherit;
//                     text-align: center;
//                     cursor: pointer;
//                     white-space: nowrap
//                 }
//                 .upper-right {
//                     position: absolute;
//                     right: 0;
//                     bottom: 0
//                 }
//             </style>
//         `

// const useIconStars = () => {
//     const star_box_parent = document.querySelector('.V5StarsBox').parentElement;
//     const star_svg ='<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

//     star_box_parent.forEach((starBox) => {
//         const star_box_classes = starBox.classList;
//         if(star_box_classes.contains('StarsBox')) {
//             const stars_text = starBox.forEach((starBoxDiv) => {
//                 const star_box_div_classes = starBoxDiv.classList;
//                 if(star_box_div_classes.contains('Stars')){
//                     return starBoxDiv;
//                 }

//                 const number_of_stars = stars_text.textContent;
//                 const num = number_of_stars.replace(/\D/g, '');

//                 stars_text.innerHTML =  star_svg.repeat(num);
//             });
//         }
//     })
// }

// const useIconStars = () => {
//     const star_boxes = document.querySelector('.V5StarsBox').parentElement.children;

//     for (star_box of star_boxes){
//         if (!star_box.classList.contains('StarsBox')) return
//             const star_box_divs = star_box.children;
//             for (star_box_div of star_box_divs) {
//                 if (star_box_div.classList.contains('Stars')) {
//                     star_box_div.innerHTML = 'fart';
//                 }
//             }
//     }
// };

// function loadStarDivs(callback) {

//        xhr.onload = function() {
//          if(xhr.status === 200) {
//            callback();
//          }
//        }
//     }

//     loadStarDivs(()=>{
//     const star_texts = document.querySelectorAll('.lbl5stars, .lbl4stars, .lbl3stars, .lbl2stars, .lbl1stars');
//     star_texts.forEach((star_text)=>{
//      console.log('fart');
//     });
//    });

// const useIconStars = () => {
//     const star_boxes = document.querySelector('.V5StarsBox').parentElement.children;
//     const star_svg =
//         '<svg height="21" width="20" class="star rating" data-rating="1"><polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill: #faaf18"/></svg>';

//     for (let i = 1; i < star_boxes.length; i++) {
//         const star_box_divs = star_boxes[i].children;
//         const star_div = star_box_divs[star_box_divs.length - 1];
//         const star_div_text = star_div.textContent;
//         const star_num = star_div_text.replace(/\D/g, '');
        
//         star_div.innerHTML = star_svg.repeat(star_num);
//     }
// };

new ChildPortal();

async function addTestText() {
    await utilities.waitForSelectorInDOM('header');
    document.querySelector('header').insertAdjacentHTML(
        'beforeend',
        `<div class="test-text pull-right">
            <p>TESTING UBUNTU SETUP</p>
        </div>`
    );
}

addTestText();