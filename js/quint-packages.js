if (document.querySelector('.input-div')) {

    function setPackage(stadium) {
        document.querySelector('#packageSelection').value = stadium;

        if (stadium === 'UpperLevel') {
            document.querySelector('.ULbtn').style.backgroundColor = 'rgb(62, 84, 2)';
            document.querySelector('.LLbtn').style.backgroundColor = 'rgb(84, 104, 29)';
            document.querySelector('.ULcard').style.border = '1px solid rgba(255, 255, 255, 0.68)';
            document.querySelector('.LLcard').style.border = 'none';

        } else {
            document.querySelector('.LLbtn').style.backgroundColor = 'rgb(62, 84, 2)';
            document.querySelector('.ULbtn').style.backgroundColor = 'rgb(84, 104, 29)';
            document.querySelector('.LLcard').style.border = '1px solid rgba(255, 255, 255, 0.68)';
            document.querySelector('.ULcard').style.border = 'none';
        }

        buildURL(package);
        buildURL(stadium);
    }

    let stadium = document.querySelector('#stadiumSelection');
    let package = document.querySelector('#packageSelection');


    function buildURL(input) {
        let goButton = document.querySelector('#goButton');
        let finalURL;
        finalURL = stadium.value + '&package=' + package.value;
        goButton.href = finalURL;
        input.addEventListener("change", function () {
            finalURL = stadium.value + '&package=' + package.value;
            goButton.href = finalURL;
        });
    }

    let arnStyles = document.querySelector('#arn-styles');
    if (arnStyles) {
        arnStyles.disabled = true;
        arnStyles.parentNode.removeChild(arnStyles);
    }

    buildURL(package);
    buildURL(stadium);

    let ArnSupportLinks = document.querySelector('.ArnSupportLinks');
    ArnSupportLinks.style.display = 'none';
    let ArnSupportBottom = document.querySelector('.ArnSupportBottom');
    ArnSupportBottom.style.display = 'none';
    let subHeaderContainer = document.querySelector('.subHeaderContainer');
    subHeaderContainer.style.display = 'none';
    let ArnSubPage = document.querySelector('.ArnSubPage');
    ArnSubPage.style.padding = '0';
}



if (document.querySelector('.ArnProperty')) {
    let params = new URLSearchParams(document.location.search.substring(1));
    let package = params.get('package');
    localStorage.setItem('package', package);
    jQuery(document).on('ratesReadyEvent', function () {
        setTimeout(function () {
            if (!document.querySelector('.budgetTag')) {
                updateTier(package);
            }
        }, 1);
    });
}

function updateTier(tier) {
    let list = document.querySelectorAll('.ArnProperty');
    let price;
    let limit;
    if (tier === 'LowerLevel') {
        limit = 400;
    } else {
        limit = 250;
    }

    list.forEach(function (element) {
        price = element.querySelector('.arnUnit');
        if (price) {
            price = price.textContent;
            price = parseFloat(price);
            var divTag = document.createElement("div");
            divTag.setAttribute('class', 'budgetTag');
            divTag.setAttribute('style', 'color: white; position: relative; padding-top: 7px; font-weight: 500; text-align: center; height: 30px;');
            if (limit < price) {
                element.querySelector('.arnCurrency').style.color = 'red';
                element.querySelector('.arnUnit').style.color = 'red';
                divTag.style.backgroundColor = '#bf4848';
                divTag.innerHTML = '$' + Math.trunc(price - limit) + ' over budget';
            } else {
                divTag.innerHTML = '$' + Math.trunc(limit - price) + ' under budget';
                divTag.style.backgroundColor = '#04800d';
            }
            element.querySelector('.ArnPropThumb').insertAdjacentElement('afterbegin', divTag);
        }
    });
}