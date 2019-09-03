if (document.querySelector('.input-div')) {

    let stadiumSelect = document.querySelector('#stadiumSelection');
    let upperLevel = document.querySelector('#upper-level');
    let lowerLevel = document.querySelector('#lower-level');
    let submit = document.querySelector('#goButton');
    let package;
    let stadium = stadiumSelect[stadiumSelect.selectedIndex].value;
    let stars;

    upperLevel.addEventListener('click', function() {
        package = upperLevel.dataset.package;
        stars = '&propertyclasses=2%20Stars,3%20Stars';
        this.parentNode.classList.add('activePackage');
        lowerLevel.parentNode.classList.remove('activePackage');
    });

    lowerLevel.addEventListener('click', function() {
        package = lowerLevel.dataset.package;
        stars = '&propertyclasses=3%20Stars,4%20Stars,5%20Stars';
        this.parentNode.classList.add('activePackage');
        upperLevel.parentNode.classList.remove('activePackage');

    });

    stadiumSelect.addEventListener('change', function() {
        stadium = this.value;
    });

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        if (stadium && package != undefined) {
            window.open(stadium + '&package=' + package + stars, '_blank');
            return;
        }
        alert('Please select both a stadium and a package.');
    });


    let arnStyles = document.querySelector('#arn-styles');
    if (arnStyles) {
        arnStyles.disabled = true;
        arnStyles.parentNode.removeChild(arnStyles);
    }

    document.querySelector('.ArnSupportLinks').style.display = 'none';
    document.querySelector('.ArnSupportBottom').style.display = 'none';
    document.querySelector('.subHeaderContainer').style.display = 'none';
    document.querySelector('.ArnSubPage').style.padding = '0';
}



if (document.querySelector('.ArnProperty')) {
    let params = new URLSearchParams(document.location.search.substring(1));
    let package = params.get('package');
    localStorage.setItem('package', package);
    jQuery(document).on('ratesReadyEvent', function() {
        setTimeout(function() {
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

    let checkIn = new Date(document.querySelector('#theCheckIn').value);
    let checkOut = new Date(document.querySelector('#theCheckOut').value);
    let timeDiff = checkOut.getTime() - checkIn.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);
    console.log(dayDiff);

    if (tier === 'LowerLevel') {
        limit = 400 / dayDiff;
    } else {
        limit = 250 / dayDiff;
    }

    list.forEach(function(element) {
        price = element.querySelector('.arnUnit');
        if (price) {
            price = price.textContent;
            price = parseFloat(price);
            var divTag = document.createElement("div");
            divTag.setAttribute('class', 'budgetTag');
            divTag.setAttribute('style', 'color: white; position: relative; padding-top: 7px; font-weight: 500; text-align: center;');
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