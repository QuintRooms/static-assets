<?php
require_once '../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable('../../');
$dotenv->load();
?>

<script>
    Array.from = (function() {
        var symbolIterator;
        try {
            symbolIterator = Symbol.iterator ? Symbol.iterator : 'Symbol(Symbol.iterator)';
        } catch (e) {
            symbolIterator = 'Symbol(Symbol.iterator)';
        }

        var toStr = Object.prototype.toString;
        var isCallable = function(fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function(value) {
            var number = Number(value);
            if (isNaN(number)) return 0;
            if (number === 0 || !isFinite(number)) return number;
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        var setGetItemHandler = function setGetItemHandler(isIterator, items) {
            var iterator = isIterator && items[symbolIterator]();
            return function getItem(k) {
                return isIterator ? iterator.next() : items[k];
            };
        };

        var getArray = function getArray(T, A, len, getItem, isIterator, mapFn) {
            var k = 0;

            while (k < len || isIterator) {
                var item = getItem(k);
                var kValue = isIterator ? item.value : item;

                if (isIterator && item.done) {
                    return A;
                } else {
                    if (mapFn) {
                        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                }
                k += 1;
            }

            if (isIterator) {
                throw new TypeError(
                    'Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1');
            } else {
                A.length = len;
            }

            return A;
        };

        return function from(arrayLikeOrIterator /*, mapFn, thisArg */ ) {
            var C = this;

            var items = Object(arrayLikeOrIterator);
            var isIterator = isCallable(items[symbolIterator]);

            if (arrayLikeOrIterator == null && !isIterator) {
                throw new TypeError(
                    'Array.from requires an array-like object or iterator - not null or undefined');
            }

            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                if (!isCallable(mapFn)) {
                    throw new TypeError(
                        'Array.from: when provided, the second argument must be a function');
                }

                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            var len = toLength(items.length);

            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            return getArray(T, A, len, setGetItemHandler(isIterator, items), isIterator, mapFn);
        };
    })();
</script>

<script src="https://cdn.jsdelivr.net/npm/places.js@1.18.1"></script>
<script type="text/javascript"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDColLOUX1Sid_vsTUKgy9EI3byMcy2Y8o&libraries=places"></script>

<!-- <link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css'
    rel='stylesheet' /> -->



<?php
$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

if (getenv('isCUG') == "true" && strpos($url, 'auth') == false) {
    echo '
            <div id="AdminControlsContainer">
                <div id="commands"><a class="profileCommand" href="https://events.hotelsforhope.com/v6/search?_s=i9OeMFOgz_0aLKzN&amp;_k=X1p01Dcn&amp;siteId=39624&amp;theme=standard&amp;1">My Profile</a><a class="organizationsCommand" href="https://events.hotelsforhope.com/v6/search?_s=i9OeMFOgz_0aLKzN&amp;_k=X1p01Dcn&amp;siteId=39624&amp;theme=standard&amp;2">My Organizations</a>
                    <form accept-charset="utf-8"  action="../auth/login.php"><button class="logoutCommand submit" name="3" type="submit">Logout</button>
                        <div><input name="_s" value="i9OeMFOgz_0aLKzN" type="hidden" class="hidden" /><input name="_k" value="X1p01Dcn" type="hidden" class="hidden" /><input name="siteId" value="39624" type="hidden" class="hidden" /><input name="theme" value="standard" type="hidden" class="hidden" /></div>
                    </form>
                </div>
            </div>
            <form accept-charset="utf-8"  action="search-results.php" id="formChangeTheme" style="display:none;"><input id="inputChangeTheme" name="4" type="text" class="text" /><button id="buttonChangeTheme" type="submit" class="submit">Change Theme</button>
                <div><input name="_s" value="i9OeMFOgz_0aLKzN" type="hidden" class="hidden" /><input name="_k" value="X1p01Dcn" type="hidden" class="hidden" /><input name="siteId" value="39624" type="hidden" class="hidden" /><input name="theme" value="standard" type="hidden" class="hidden" /></div>
            </form>
        ';
}
?>

<div id="h4h-styles">
    <link rel="stylesheet" type="text/css" href="../../styles/styles.css">
    <!-- <link rel="stylesheet" type="text/css" href="http://roomsteals.localhost/portal/css/portal.css"> -->
</div>

<?php
if (strpos($url, 'index') !== false || 'search-results' !== false) {
    echo '
            <div class="config-container">
                <div class="currencies-container">
                    <div class="config-label" id="currency-label"><span>Currency</span>
                        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve">
                            <polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                        </svg>
                    </div>
                    <div class="dropdown"></div>
                </div>
                <div id="language">
                    <div id="language-label"><span><span id="flag"></span>Language</span>
                        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve">
                            <polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                        </svg>
                    </div>
                    <div class="language-container">
                        <div onClick="arnChangeTheme(standard)" value="standard"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/us.svg" alt="US Flag">English</div>
                        <div onClick="arnChangeTheme(french)" value="french"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/france.svg" alt="French Flag">Français</div>
                        <div onClick="arnChangeTheme(german)" value="german"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/germany.svg" alt="German Flag">Deutsch</div>
                        <div onClick="arnChangeTheme(indonesia)" value="indonesia"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/indonesia.svg" alt="Indonesian Flag">Bahasa Indonesia</div>
                        <div onClick="arnChangeTheme(mandarin)" value="mandarin"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/china.svg" alt="Chinese Flag">普通话</div>
                        <div onClick="arnChangeTheme(tw_mandarin)" value="tw_mandarin"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/china.svg" alt="Chinese Flag">普通話傳統</div>
                        <div onClick="arnChangeTheme(portuguese)" value="portuguese"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/portugal.svg" alt="Portugeuse Flag">Português</div>
                        <div onClick="arnChangeTheme(spanish)" value="spanish"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/spain.svg" alt="Spanish Flag">Español</div>
                        <div onClick="arnChangeTheme(thai)" value="thai"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/thailand.svg" alt="Thai Flag">ภาษาไทย</div>
                        <div onClick="arnChangeTheme(vietnamese)" value="vietnamese"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/vietnam.svg" alt="Vietnamese Flag">Tiếng Việt</div>
                    </div>
                </div>
            </div>
        ';
}
