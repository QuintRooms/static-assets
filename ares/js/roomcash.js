// import Utilities from './utilities';
import Path from './build_tools/path';

const env_path = new Path();

// const utilities = new Utilities();

export default class Roomcash {
    constructor(config) {
        this.config = config;
        this.init();
    }

    init() {
        // console.log('Roomcash: ', this.config);
        this.buildFooterMenu('.ArnSearchContainerMainDiv', 'afterend');
    }

    buildFooterMenu(insertElement, position) {
        const footer_menu = `
        <div id="footer-menu-container">
            <div id="links-container">
                <div class="links">
                        <li class="links-header">Learn More</li>
                        <li><a href="">How it Works</a></li>
                        <li><a href="">FAQs</a></li>
                </div>
                <div class="links">
                        <li class="links-header">About RoomCash</li>
                        <li><a href="">Our Mission</a></li>
                        <li><a href="">Contact Us</a></li>
                </div>
                <div class="links">
                        <li class="links-header">Partner with RoomCash</li>
                        <li><a href="">Add Your Hotel</a></li>
                        <li><a href="">Corporate Partners</a></li>
                </div>
            </div>
            <div id="policy-social">
                <div id="social-container">
                    <div class="social-icon">
                        <a href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/facebook.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/instagram.png">
                        </a>
                    </div>
                    <div class="social-icon">
                        <a href="">
                            <img src="">m
                        </a>
                    </div>
                    <div class="social-icon">
                        <a href="">
                            <img src="${env_path.path}/site_configs/${this.config.directory_name}/icons/app-store.png">
                        </a>
                    </div>
                </div>
                <hr>
                <div id="copyright">
                    <p>Copyright &copy; 2020. All rights reserved</p>
                    <div><a href="">Privacy Policy</a><span id="pipe">|</span><a href="">Terms & Conditions</a></div>
                </div>
            </div>
        </div>
        `;
        const container = document.querySelector(insertElement);

        container.insertAdjacentHTML(position, footer_menu);
    }
}
