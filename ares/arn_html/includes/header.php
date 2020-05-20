<script src="https://cdn.jsdelivr.net/npm/places.js@1.18.1"></script>

<?php
$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
if($cug && strpos($url, 'auth') === false){
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
    </form>';
} ?>
    <script type="text/javascript">
    /*<![CDATA[*/
    function arnChangeTheme(sThemeName) {
        jQuery("#inputChangeTheme").val(sThemeName);
        jQuery("#buttonChangeTheme").click();
    } /*]]>*/
    </script>
    <!-- <script type="application/javascript">
if (!window.jQuery) {
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length - 1];
    if (lastScript != undefined) {
        lastScript.insertAdjacentHTML("beforebegin", "<script type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"><\/script>");
    }
}
if (!window.console) window.console = { log: function() {} };
</script> -->

<link rel="stylesheet" type="text/css" href="../../styles/styles.css">

<?php
if(strpos($url, 'index') !== false || 'search-results' !== false){
    echo '
        <div class="config-container">
            <div class="currencies-container">
                <div id="currency-label"><span>Currency</span>
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve">
                        <polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                    </svg></div>
                <div class="currencies">
                    <div class="top-currencies">
                        <h4>Top Currencies</h4>
                    </div>
                    <h4>All Currencies</h4>
                </div>
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
?>
