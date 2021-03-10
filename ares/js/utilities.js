const dayjs = require('dayjs');

export default class Utilities {
    /**
     *@description forEach polyfill for internet explorer
     *@return {void}
     */
    ieForEachPolyfill() {
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }
    }

    /**
     *@description creates html and inserts into specified location
     *@param string parent_to_append_to - selector to put new html
     *@param string html - html to add to parent
     *@param string location - where to add in relation to parent using JS method insertAdjacentHTML - arguments include beforeBegin, beforeEnd, afterBegin, afterEnd
     */
    async createHTML(html, parent_to_append_to, location) {
        return new Promise((resolve) => {
            const parent = document.querySelector(parent_to_append_to);
            if (!parent || parent == null) return;
            parent.insertAdjacentHTML(location, html);
            resolve();
        });
    }

    /**
     *@description updates an attribute tag of a specified selector
     *@param string selector - selector to update
     *@param string argument - value to update
     *@param string attribute - which attribute to update
     */
    updateAttribute(selector, argument, attribute) {
        const node_list = document.querySelectorAll(selector);

        if (!node_list) return;

        node_list.forEach((node, index) => {
            node.setAttribute(attribute, argument);
        });
    }

    /**
     *@description gets an attribute of a specified selector
     *@param string selector - selector to get
     *@param string attribute - attribute to get
     */
    getAttribute(selector, attribute) {
        if (!document.querySelector(selector)) return;

        return document.querySelector(selector).getAttribute(attribute);
    }

    /**
     *@description updates innerHTML of a node list
     *@param string selector - selector to update
     *@param string html - html to add
     */
    updateHTML(selector, html) {
        const node_list = document.querySelectorAll(selector);

        if (!node_list) return;

        node_list.forEach((node, index) => {
            node.innerHTML = html;
        });
    }

    /**
     *@description moves a child element into a parent element
     *@param string child_selector - selector to move into parent
     *@param string parentSelector - selector to move child element into
     */
    appendToParent(child_selector, parent_selector) {
        const child_element = document.querySelector(child_selector);
        const parent_element = document.querySelector(parent_selector);

        if (!child_element || !parent_element) return;

        parent_element.appendChild(child_element);
    }

    // should do this using mutationObserver
    async waitForSelectorInDOM(selector) {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                    clearInterval(interval);
                    return element;
                }
            }, 500);
        });
    }

    async waitForSelectorToBeGone(selector) {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                const element = document.querySelector(selector);
                if (!element) {
                    resolve();
                    clearInterval(interval);
                    return true;
                }
            }, 500);
        });
    }

    /**
     * @description checks every 500 miliseconds for the textContent of the element passed in to equeal the text in the dom after the page loads. This method is used for when an element's textContent is updated multiple times before the page finishes loading and you want to update it again.
     * @param element - the element you are waiting on to load the expected textContent
     * @param string - The string that the element's textContent will equal when the page has loaded.
     */
    async waitForTextInDOM(selector, text) {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                const dom_text = document.querySelector(selector).textContent;
                if (dom_text === text) {
                    resolve(dom_text);
                    clearInterval(interval);
                    return dom_text;
                }
            }, 500);
        });
    }

    moveElementIntoExistingWrapper(element_to_move, wrapper, adjacent_position) {
        if (!document.querySelector(wrapper) || !document.querySelector(element_to_move)) return;

        document.querySelector(wrapper).insertAdjacentElement(adjacent_position, document.querySelector(element_to_move));
    }

    // duplicate of createWrapper(), use createWrapper and move any existing use of this method to createWrapper()
    async moveOrphanedElementsIntoNewWrapper(elements_array, wrapper_id, adjacent_element_class, adjacent_position) {
        return new Promise((resolve) => {
            if (document.querySelector(adjacent_element_class)) {
                document.querySelector(adjacent_element_class).insertAdjacentHTML(adjacent_position, `<div class id="${wrapper_id}"></div>`);
                elements_array.forEach((element) => {
                    document.getElementById(wrapper_id).insertAdjacentElement('beforeEnd', element);
                    resolve();
                });
            }
        });
    }

    async createWrapper(query_selectors, wrapper_parent, new_wrapper_class, adjacent_location) {
        const wrapper = document.createElement('div');

        if (!wrapper) return;

        wrapper.setAttribute('class', new_wrapper_class);
        Array.prototype.forEach.call(document.querySelectorAll(query_selectors), (children) => {
            wrapper.appendChild(children);
        });

        document.querySelector(wrapper_parent).insertAdjacentElement(adjacent_location, wrapper);
    }

    createModal(array_of_elements_to_put_in_modal_body, modal_title, page_name, open_button_parent_selector, open_button_location) {
        if (!page_name) return;

        document.querySelector(open_button_parent_selector).insertAdjacentHTML(open_button_location, `<span class="open-modal">Show ${modal_title}</span>`);

        document.body.insertAdjacentHTML(
            'beforeEnd',
            `<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>${modal_title}</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>`
        );

        array_of_elements_to_put_in_modal_body.forEach((element) => {
            document.querySelector('.modal-content').insertAdjacentElement('beforeEnd', element);
        });

        document.querySelector('.open-modal').addEventListener('click', () => {
            document.querySelector('.modal-overlay').classList.toggle('show-modal');
        });

        document.querySelector('.close-modal').addEventListener('click', () => {
            document.querySelector('.modal-overlay').classList.toggle('show-modal');
        });
    }

    /**
     * @description adds extra logos to the header, will only insert if window size is greater that 1200px
     * @param object images - an object with one or more images, their class names and insertAdjacentHtml position
     * @property string - images[].insertPosition - position for insertAdjacentHTML to insert element into header
     * @property string - images[].className - name of class tag for each element being insterted
     * @property string - images[].imageUrl - url for image src
     * @example addMultipleHeaderLogos({
                    image1: {
                        insertPosition: 'afterbegin',
                        className: 'logo-left',
                        imageUrl: 'https://...',
                    },
                })
     */
    async addMultipleHeaderLogos(images) {
        await this.waitForSelectorInDOM('header');
        const header = document.querySelector('header');
        let logos_loaded;

        function widthChange(mq) {
            if (!mq.matches || logos_loaded) return;
            try {
                Object.keys(images).forEach((e) => {
                    header.insertAdjacentHTML(images[e].insertPosition, `<img class="${images[e].className}" src="${images[e].imageUrl}">`);
                    logos_loaded = true;
                });
            } catch (error) {
                console.error(error);
            }
        }
        const mq = window.matchMedia('(min-width: 1200px)');
        widthChange(mq);
        mq.addListener(widthChange);
    }

    emailVerificationSetup() {
        const script = document.createElement('script');
        script.text = `
            const DeBounce_APIKEY = 'public_T0tSVklSNEZRTEtkc1c5MFZoUWhKZz09';
            const DeBounce_BlockFreeEmails = 'false';
        `;
        document.body.appendChild(script);

        const debounce_script = document.createElement('script');
        debounce_script.setAttribute('src', 'https://cdn.debounce.io/widget/DeBounce.js');
        debounce_script.setAttribute('async', true);
        document.body.appendChild(debounce_script);
    }

    /**
     *@description creates dropdown menu container
     *@param string label_selector - selector of the label that will open the dropdown on click
     *@param string dropdown_html - html that will display in the dropdown
     *@param string content_selector_to_show - selector for the container containing content to show on click
     *@param string content_parent - selector of parent content will be appended to
     */
    createDropdownMenu(label_selector, dropdown_html, content_selector_to_show, content_parent) {
        const label = document.querySelector(label_selector);
        const parent = document.querySelector(content_parent);

        if (!label || !parent) return;

        parent.insertAdjacentHTML('beforeEnd', `<style>${content_selector_to_show}{display: none;}${content_parent}{position: relative;}</style>${dropdown_html.outerHTML}`);

        const content_to_show = document.querySelector(content_selector_to_show);
        document.addEventListener('click', (e) => {
            const target_el = e.target;

            if (target_el === label) {
                content_to_show.classList.toggle('show-dropdown');
            }
            if (document.querySelector(`${content_selector_to_show}.show-dropdown`) && target_el !== label) {
                content_to_show.classList.toggle('show-dropdown');
            }
        });
    }

    /**
     *@description creates custom tag in a properties image
     *@param string text - text of tag
     *@param int propId - property id to add the tag to
     */
    addPropThumbTag(text, propId) {
        if (!document.querySelector(`#theArnProperty${propId} .ArnPropThumb > .propThumbTag`) && document.querySelector(`#theArnProperty${propId}`)) {
            const property_thumbnail = document.querySelector(`#theArnProperty${propId} .ArnPropThumb`);
            property_thumbnail.insertAdjacentHTML('afterbegin', `<div class="propThumbTag">${text}</div>`);
        }
    }

    /**
     *@description Replaces the "No Vacancy" text with "Rates Coming Soon" for all prop ids passed in.
     *@param Array Numbers - property id
     */
    async ratesComingSoon(propsArray) {
        if (!document.querySelector('.SearchHotels')) return;
        await this.waitForSelectorInDOM('.pollingFinished');
        propsArray.forEach((prop) => {
            if (document.querySelector(`#theArnProperty${prop} .ArnLimitedAvail`)) {
                document.querySelector(`#theArnProperty${prop} .ArnLimitedAvail`).textContent = 'Rates Coming Soon';
            }
        });
    }

    /**
     *@description Adds a class to the selector passed in.
     *@param selector grabs the element using query selector.
     *@param class gives the method the class you wish to add to the classList of that element.
     */
    addClass(selector, className) {
        document.querySelector(`.${selector}`).classList.add(className);
    }

    getMetaTagContent(meta_tag_name) {
        if (!document.querySelector(`meta[name="${meta_tag_name}"]`)) return;

        return document.querySelector(`meta[name="${meta_tag_name}"]`).content;
    }

    parseJSON(json) {
        if (!json) return;

        return JSON.parse(json);
    }

    /**
     *@description gets page name using css classes from body tag
     */
    getPageName() {
        const body_classes = document.body;
        let page_name;

        if (body_classes.classList.contains('SearchHotels') && !body_classes.classList.contains('HoldRoomsForm')) page_name = 'search-results';
        if (body_classes.classList.contains('SinglePropDetail')) page_name = 'property-detail';
        if (body_classes.classList.contains('CheckOutForm')) page_name = 'checkout';
        if (body_classes.classList.contains('ConfirmationForm')) page_name = 'confirmation';
        if (body_classes.classList.contains('RootBody')) page_name = 'landing-page';
        if (body_classes.classList.contains('WBFaq')) page_name = 'faq';
        if (body_classes.classList.contains('WBTermsAndConditions')) page_name = 'terms-conditions';
        if (body_classes.classList.contains('WBPrivacyPolicy')) page_name = 'privacy-policy';
        if (body_classes.classList.contains('WBRateGuaranteeForm2')) page_name = 'lrg-page';
        if (body_classes.classList.contains('WBValidatedRegistrationForm')) page_name = 'cug-registration';
        if (body_classes.classList.contains('HoldRoomsForm') && body_classes.classList.contains('SearchHotels')) page_name = 'hold-rooms';

        return page_name;
    }

    getElementTextContent(selector) {
        if (!document.querySelector(selector)) return;

        return document.querySelector(selector).textContent;
    }

    /**
     *@description Fetches json from URL
     *@param url url of resource
     */
    fetchJSON(url) {
        const json = () => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw response;
                    }
                    return response.json();
                })
                .catch((err) => {
                    err.text().then((error) => {
                        console.error(`Could not fetch json from ${url}`, error);
                    });
                });
        };

        return json;
    }

    /**
     *@description Fetches text from URL
     *@param url url of resource
     */
    async fetchHTMLFromFile(url) {
        let html = '';
        await fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Not 2xx response');
                }
                html = response.text();
            })
            .catch((err) => {
                html = err.toString();
                console.error(`Could not fetch text from ${url}`, err.toString());
            });

        return html;
    }

    removeMaskedElementFromTabIndex(selector) {
        const element = document.querySelector(selector);

        if (!element) return;
        element.setAttribute('tabindex', -1);
    }

    calculateNights() {
        const check_in_value = dayjs(document.querySelector('input#theCheckIn').value).format('MM/DD/YYYY');
        const check_out_value = dayjs(document.querySelector('input#theCheckOut').value).format('MM/DD/YYYY');
        const nights = dayjs(check_out_value).diff(dayjs(check_in_value), 'days');

        return nights;
    }

    /**
     * Checks the browser width and compares against what is passed in
     * @param string media_query The width to check, for example 'max-width: 800px'
     * @return bool
     */
    matchMediaQuery(media_query) {
        const mq = window.matchMedia(`(${media_query})`);

        return mq.matches;
    }

    selectCheckboxOnLabelClick(node_list) {
        const checkbox_wrappers = document.querySelectorAll(node_list);

        checkbox_wrappers.forEach((wrapper) => {
            if (!wrapper.querySelector('input[type="checkbox"]') || !wrapper) return;
            let label = wrapper.querySelector('span');
            if (!label) label = wrapper.querySelector('label');

            label.addEventListener('click', (e) => {
                wrapper.querySelector('input[type="checkbox"]').click();
            });
        });
    }

    async addAttributeToInput(element, value, attribute, page_name) {
        if (!document.querySelector(page_name)) return;
        try {
            await this.waitForSelectorInDOM(element);
            document.querySelector(element).setAttribute(attribute, value);
        } catch (error) {
            console.error(error);
        }
    }

    replaceSpecificText(selector, regex, new_text) {
        if (!document.querySelector(selector)) return;

        const string = document.querySelector(selector).textContent;
        const test = string.replace(regex, new_text);

        document.querySelector(selector).textContent = test;
    }

    /**
     *@description Checks whether the date passed in is in the past
     *@param string date - date to check
     *@return bool
     */
    checkForPastDate(date) {
        if (!date) console.error('No date passed into checkForPastDate()');

        const now = dayjs();
        const date_to_check = dayjs(date);

        const diff = date_to_check.diff(now, 'milliseconds');

        return diff < 0;
    }

    /**
     *@description returns the percent difference between two numbers
     *@param Number
     *@param Number
     *@return Number - percent difference
     */
    percentDiff(num1, num2) {
        return Math.round(((num1 - num2) / num1) * 100);
    }

    /**
     *@description Sets the Prompt for checkin popup dates as today's date. the 'promptForCheckIn' must be added as a URL parameter for this to be used.
     */
    async prepopulateDatePopupWithTodaysDate() {
        if (!document.querySelector('.SearchHotels')) return;

        await this.waitForSelectorInDOM('#theQuickCheckIn');

        const check_in_input = document.querySelector('#theDatePrompt #theQuickCheckIn');
        const check_out_input = document.querySelector('#theDatePrompt #theQuickCheckOut');

        if (!check_in_input || !check_out_input) return;

        check_in_input.setAttribute('value', dayjs().format('MM/DD/YYYY'));
        check_out_input.setAttribute('value', dayjs().add(1, 'day').format('MM/DD/YYYY'));
    }

    /**
     *@description Adds a styled tool tip to a specified element.
     *@param string - Element to insert on
     *@param string - Position to insert on element
     *@param string - Text content for tool tip
     *@param string - Tool tip - usually a '?' or 'i'
     *@param string - Color of tool tip
     *@param string - Background color of tool tip
     */
    async addToolTip(insertElement, insertPosition, tipContent, toolTip, color, backgroundColor) {
        await this.waitForSelectorInDOM(insertElement);

        document.querySelector(insertElement).insertAdjacentHTML(
            insertPosition,
            `
                <style>
                .tooltip-wrapper > span b {
                    color: ${color};
                    background: ${backgroundColor};
                }
                </style>
                    <span class="tooltip-wrapper">
                        <span>
                            <b class="tooltip">${toolTip}
                                <span>${tipContent}</span>
                            </b>
                        </span>
                    </span>
            `
        );
    }

    replacePropThumbImage(array) {
        if (!document.querySelector('.SearchHotels')) return;

        array.forEach(async (obj) => {
            await this.waitForSelectorInDOM('.pollingFinished');
            if (!document.querySelector(`#theArnProperty${obj.prop_id}`)) return;
            const property_thumb = document.querySelector(`#theArnProperty${obj.prop_id} .ArnPropThumb img`);
            property_thumb.setAttribute('src', obj.image_url);
        });
    }
}
