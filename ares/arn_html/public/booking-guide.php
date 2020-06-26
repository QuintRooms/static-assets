<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en" class="js-focus-visible">
<?php include $_SERVER['DOCUMENT_ROOT'] . '/ares/arn_html/includes/config.php'; ?>

<head>
    <style type="text/css">
        .algolia-places {
            width: 100%;
        }

        .ap-input,
        .ap-hint {
            width: 100%;
            padding-right: 35px;
            padding-left: 16px;
            line-height: 40px;
            height: 40px;
            border: 1px solid #CCC;
            border-radius: 3px;
            outline: none;
            font: inherit;
            appearance: none;
            -webkit-appearance: none;
            box-sizing: border-box;
        }

        .ap-input::-webkit-search-decoration {
            -webkit-appearance: none;
        }

        .ap-input::-ms-clear {
            display: none;
        }

        .ap-input:hover~.ap-input-icon svg,
        .ap-input:focus~.ap-input-icon svg,
        .ap-input-icon:hover svg {
            fill: #aaaaaa;
        }

        .ap-dropdown-menu {
            width: 100%;
            background: #ffffff;
            box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            margin-top: 3px;
            overflow: hidden;
        }

        .ap-suggestion {
            cursor: pointer;
            height: 46px;
            line-height: 46px;
            padding-left: 18px;
            overflow: hidden;
        }

        .ap-suggestion em {
            font-weight: bold;
            font-style: normal;
        }

        .ap-address {
            font-size: smaller;
            margin-left: 12px;
            color: #aaaaaa;
        }

        .ap-suggestion-icon {
            margin-right: 10px;
            width: 14px;
            height: 20px;
            vertical-align: middle;
        }

        .ap-suggestion-icon svg {
            -webkit-transform: scale(0.9) translateY(2px);
            transform: scale(0.9) translateY(2px);
            fill: #cfcfcf;
        }

        .ap-input-icon {
            border: 0;
            background: transparent;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 16px;
            outline: none;
        }

        .ap-input-icon.ap-icon-pin {
            cursor: pointer;
        }

        .ap-input-icon svg {
            fill: #cfcfcf;
            position: absolute;
            top: 50%;
            right: 0;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
        }

        .ap-cursor {
            background: #efefef;
        }

        .ap-cursor .ap-suggestion-icon svg {
            -webkit-transform: scale(1) translateY(2px);
            transform: scale(1) translateY(2px);
            fill: #aaaaaa;
        }

        .ap-footer {
            opacity: .8;
            text-align: right;
            padding: .5em 1em .5em 0;
            font-size: 12px;
            line-height: 12px;
        }

        .ap-footer a {
            color: inherit;
            text-decoration: none;
        }

        .ap-footer a svg {
            vertical-align: middle;
        }

        .ap-footer:hover {
            opacity: 1;
        }
    </style>
    <title>Booking Guide</title>
    <meta content="Online reservations at the guaranteed lowest rates! location" name="description">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <meta name="originalParams" content="siteid=62011&amp;utm_source=internal">
    <meta content="IE=EmulateIE11" http-equiv="X-UA-Compatible">
    <meta content="standard" name="theme">
    <meta content="en_US" name="locale">
    <meta content="USD" name="currency">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <meta content="events.hotelsforhope.com" name="cname">
    <meta content="<?php echo $site_id; ?>" name="siteId" />
    <meta content="ROCK" name="cid">
    <meta content="25KReEkzRh9Gowta" name="sessionId">
    <meta content="59m 47s" name="expiresIn">
    <meta content="2143" name="masterId">
    <meta content="false" name="isTestMode">
    <meta content="location" name="keywords">
    <meta content="2020-10-02" name="checkIn">
    <meta content="2020-10-05" name="checkOut">
    <meta content="2" name="numberOfAdults">
    <meta content="0" name="numberOfKids">
    <meta content="1" name="numberOfRooms">
    <meta content="936781" name="userId">
    <meta content="jason.kaplan@hotelsforhope.com" name="email">
    <meta content="Jason" name="firstName">
    <meta content="Kaplan" name="lastName">
    <meta content="45444" name="zipCode">
    <meta content="Invalid" name="memberType">
    <meta content="" name="memberMetaTag">
    <meta content="" name="memberToken">
    <meta content="Invalid" name="memberBookingType">
    <style>
        .PropFullDescription {
            display: none;
        }

        .SinglePropDetail .reportProblemLink {
            text-align: right;
            margin-top: 8px;
        }

        .CheckOutForm .reportProblemLink {
            text-align: right;
        }

        #Properties .reportProblemLink {
            margin-bottom: 15px;
        }

        .opaque {
            -moz-opacity: .50;
            filter: alpha(opacity=50);
            opacity: .50;
        }

        .propId {
            display: none;
        }

        .SimpleSearch .rowTwo {
            display: none;
        }

        .favoriteProps {
            display: inline;
        }

        .RootPage .favoriteProps {
            display: none;
        }

        .addFavHotel {
            display: inline;
        }

        .removeFavHotel {
            display: inline;
        }

        .eguestAccessAd {
            margin-left: 30px
        }

        .ArnGoDestinationSearch {
            display: none;
        }

        .S30 .conditionalPolicies {
            display: block !important;
        }
    </style>
    <meta property="og:site_name" content="ResBeat">
    <meta property="og:url" content="https://events.hotelsforhope.com/v6/search?siteid=62011&amp;theme=standard">
    <meta property="og:title" content="ResBeat">
    <meta property="og:description" content="">
    <meta name="description" content="">
    <!-- <meta property="og:image" content="https://events.hotelsforhope.com/appSkins/62011/v6/themes/standard/images/fowt-social.png"> -->
    <link rel="canonical" href="https://www.reservetravel.com/v6/booking-guide">
    <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script src="https://cdn.iubenda.com/iubenda.js?unescape_json=true"></script>
    <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-PVTQ8XV"></script>
    <script async="" src="//www.iubenda.com/cookie-solution/confs/js/14257085.js"></script>
    <script src="//cdn.iubenda.com/cons/iubenda_cons/core-67b333edc2f5f55c3a8c7c25a7004e6f.js"></script>
    <script src="//cdn.iubenda.com/cons/iubenda_cons/core-67b333edc2f5f55c3a8c7c25a7004e6f.js"></script>
    <script src="//cdn.iubenda.com/cookie_solution/iubenda_cs/core-9464d9682481b266de45bb83236e4229.js"></script>
    <script src="//cdn.iubenda.com/cookie_solution/iubenda_cs/core-9464d9682481b266de45bb83236e4229.js"></script>
    <script type="text/javascript" src="//media.travsrv.com/appSkins/60846/v6/themes/standard/first-included.js?8255+17081"></script>
    <script src="//cdn.iubenda.com/cs/iubenda_cs.js" async="true" charset="UTF-8"></script>
    <script src="https://cdn.iubenda.com/cons/iubenda_cons.js?unescape_json=true" async="true" charset="UTF-8"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js?8255+17081"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js?8255+17081"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/scriptaculous/1.8.1/builder.js?8255+17081"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/scriptaculous/1.8.1/effects.js?8255+17081"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/scriptaculous/1.8.1/controls.js?8255+17081"></script>
    <script type="text/javascript" src="//media.travsrv.com/appSkins/64/v6/themes/global/globalScripts.js?8255+17081"></script>
    <script type="text/javascript" src="//media.travsrv.com/appSkins/64/v6/themes/global/skins/translations/en_US.js?8255+17081"></script>
    <script src="//media.travsrv.com/appSkins/60846/v6/themes/standard/first-included.js?8255+17081"></script>
    <script src="//cdn.iubenda.com/cs/iubenda_cs.js" async="true" charset="UTF-8"></script>
    <script src="https://cdn.iubenda.com/cons/iubenda_cons.js?unescape_json=true" async="true" charset="UTF-8"></script>
    <script src="//media.travsrv.com/appSkins/60846/v6/themes/standard/sequence.jquery-min.js?8255+17081"></script>
    <script src="//media.travsrv.com/appSkins/60846/v6/themes/standard/sequence.js?8255+17081"></script>
    <script src="https://cdn.lr-ingest.io/logger.min.js" async=""></script>
    <link href="//fonts.googleapis.com/css?family=Montserrat:500,700" rel="stylesheet">
    <link id="favicon" rel="shortcut icon" href="https://dev-static.hotelsforhope.com/ares/site_configs/resbeat_test-62011/img/favicon-gold.png">
    <style type="text/css">
        @font-face {
            font-weight: 400;
            font-style: normal;
            font-family: 'Inter-Loom';

            src: url('https://cdn.loom.com/assets/fonts/inter/Inter-UI-Regular.woff2') format('woff2');
        }

        @font-face {
            font-weight: 400;
            font-style: italic;
            font-family: 'Inter-Loom';

            src: url('https://cdn.loom.com/assets/fonts/inter/Inter-UI-Italic.woff2') format('woff2');
        }

        @font-face {
            font-weight: 500;
            font-style: normal;
            font-family: 'Inter-Loom';

            src: url('https://cdn.loom.com/assets/fonts/inter/Inter-UI-Medium.woff2') format('woff2');
        }

        @font-face {
            font-weight: 500;
            font-style: italic;
            font-family: 'Inter-Loom';

            src: url('https://cdn.loom.com/assets/fonts/inter/Inter-UI-MediumItalic.woff2') format('woff2');
        }

        @font-face {
            font-weight: 700;
            font-style: normal;
            font-family: 'Inter-Loom';

            src: url('https://cdn.loom.com/assets/fonts/inter/Inter-UI-Bold.woff2') format('woff2');
        }

        @font-face {
            font-weight: 700;
            font-style: italic;
            font-family: 'Inter-Loom';

            src: url('https://cdn.loom.com/assets/fonts/inter/Inter-UI-BoldItalic.woff2') format('woff2');
        }

        @font-face {
            font-weight: 900;
            font-style: normal;
            font-family: 'Inter-Loom';

            src: url('https://cdn.loom.com/assets/fonts/inter/Inter-UI-Black.woff2') format('woff2');
        }

        @font-face {
            font-weight: 900;
            font-style: italic;
            font-family: 'Inter-Loom';

            src: url('https://cdn.loom.com/assets/fonts/inter/Inter-UI-BlackItalic.woff2') format('woff2');
        }
    </style>
    <style type="text/css">
        @-webkit-keyframes button_clicked {
            50% {
                -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
                opacity: 0
            }

            99% {
                -webkit-transform: scale(.001, .001);
                transform: scale(.001, .001);
                opacity: 0
            }

            100% {
                -webkit-transform: scale(.001, .001);
                transform: scale(.001, .001);
                opacity: 1
            }
        }

        @keyframes button_clicked {
            50% {
                -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
                opacity: 0
            }

            99% {
                -webkit-transform: scale(.001, .001);
                transform: scale(.001, .001);
                opacity: 0
            }

            100% {
                -webkit-transform: scale(.001, .001);
                transform: scale(.001, .001);
                opacity: 1
            }
        }

        .iubenda-alert {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            z-index: 2147483647 !important;
            background-color: rgba(0, 0, 0, .5) !important;
            font-family: "Helvetica Neue", -apple-system, sans-serif !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
            justify-content: center !important;
            font-size: 16px !important
        }

        .iubenda-alert * {
            font-size: 100% !important;
            width: auto !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            background: 0 0 !important;
            -webkit-box-sizing: border-box !important;
            box-sizing: border-box !important;
            -webkit-tap-highlight-color: transparent !important;
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            font-family: -apple-system, sans-serif !important;
            text-decoration: none !important;
            color: currentColor !important;
            background-attachment: scroll !important;
            background-color: transparent !important;
            background-image: none !important;
            background-position: 0 0 !important;
            background-repeat: repeat !important;
            border: 0 !important;
            border-color: #000 !important;
            border-color: currentColor !important;
            border-radius: 0 !important;
            border-style: none !important;
            border-width: medium !important;
            bottom: auto !important;
            clear: none !important;
            clip: auto !important;
            counter-increment: none !important;
            counter-reset: none !important;
            direction: inherit !important;
            float: none !important;
            font-style: inherit !important;
            font-variant: normal !important;
            font-weight: inherit !important;
            height: auto !important;
            left: auto !important;
            letter-spacing: normal !important;
            line-height: inherit !important;
            list-style-type: inherit !important;
            list-style-position: outside !important;
            list-style-image: none !important;
            margin: 0 !important;
            max-height: none !important;
            max-width: none !important;
            min-height: 0 !important;
            min-width: 0 !important;
            opacity: 1;
            outline: 0 !important;
            overflow: visible !important;
            padding: 0 !important;
            position: static !important;
            quotes: """" !important;
            right: auto !important;
            table-layout: auto !important;
            text-align: left !important;
            text-indent: 0 !important;
            text-transform: none !important;
            top: auto !important;
            unicode-bidi: normal !important;
            vertical-align: baseline !important;
            visibility: inherit !important;
            white-space: normal !important;
            width: auto !important;
            word-spacing: normal !important;
            z-index: auto !important;
            background-origin: padding-box !important;
            background-origin: padding-box !important;
            background-clip: border-box !important;
            background-size: auto !important;
            -o-border-image: none !important;
            border-image: none !important;
            border-radius: 0 !important;
            border-radius: 0 !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            -webkit-column-count: auto !important;
            -moz-column-count: auto !important;
            column-count: auto !important;
            -webkit-column-gap: normal !important;
            -moz-column-gap: normal !important;
            column-gap: normal !important;
            -webkit-column-rule: medium none #000 !important;
            -moz-column-rule: medium none #000 !important;
            column-rule: medium none #000 !important;
            -webkit-column-span: none !important;
            -moz-column-span: none !important;
            column-span: none !important;
            -webkit-column-width: auto !important;
            -moz-column-width: auto !important;
            column-width: auto !important;
            -webkit-font-feature-settings: normal !important;
            font-feature-settings: normal !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
            -webkit-hyphens: manual !important;
            -ms-hyphens: manual !important;
            hyphens: manual !important;
            -webkit-perspective: none !important;
            perspective: none !important;
            -webkit-perspective-origin: 50% 50% !important;
            perspective-origin: 50% 50% !important;
            text-shadow: none !important;
            -webkit-transition: all 0s ease 0s !important;
            -o-transition: all 0s ease 0s !important;
            transition: all 0s ease 0s !important;
            -webkit-transform: none !important;
            -ms-transform: none !important;
            transform: none !important;
            -webkit-transform-origin: 50% 50% !important;
            -ms-transform-origin: 50% 50% !important;
            transform-origin: 50% 50% !important;
            -webkit-transform-style: flat !important;
            transform-style: flat !important;
            word-break: normal !important
        }

        .iubenda-alert-dialog {
            margin: 16px !important;
            width: 100% !important;
            border-radius: 6px !important;
            background-color: #111 !important;
            color: #f4f4f4 !important
        }

        @media (min-width:320px) {
            .iubenda-alert-dialog {
                width: 320px !important
            }
        }

        .iubenda-alert-dialog-content {
            padding: 24px 24px 0 !important
        }

        .iubenda-alert-dialog-buttons {
            padding: 24px !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important
        }

        .iubenda-alert-dialog-buttons button {
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important
        }

        .iubenda-alert button {
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            margin: 4px !important;
            padding: 8px 16px !important;
            border-radius: 64px !important;
            cursor: pointer !important;
            font-weight: 700 !important;
            font-size: 100% !important;
            border: 0 !important;
            color: #fff;
            text-align: center !important
        }

        .iubenda-alert button:focus,
        .iubenda-alert button:hover {
            opacity: .8 !important
        }

        .iubenda-alert button.iubenda-button-confirm {
            background-color: #0073ce !important
        }

        .iubenda-alert button.iubenda-button-cancel {
            background-color: rgba(255, 255, 255, .1) !important
        }

        #iubenda-iframe {
            background-color: rgba(0, 0, 0, .8) !important;
            -webkit-transition: opacity .4s ease, visibility .4s ease !important;
            -o-transition: opacity .4s ease, visibility .4s ease !important;
            transition: opacity .4s ease, visibility .4s ease !important;
            font-size: 16px !important;
            position: fixed !important;
            z-index: 100000000 !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            border: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            line-height: 1.5 !important;
            -webkit-box-align: unset !important;
            -ms-flex-align: unset !important;
            align-items: unset !important;
            -ms-flex-line-pack: unset !important;
            align-content: unset !important;
            -ms-flex-wrap: unset !important;
            flex-wrap: unset !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
            justify-content: center !important;
            display: none !important
        }

        #iubenda-iframe * {
            -webkit-box-align: unset !important;
            -ms-flex-align: unset !important;
            align-items: unset !important;
            -ms-flex-line-pack: unset !important;
            align-content: unset !important;
            -ms-flex-wrap: unset !important;
            flex-wrap: unset !important;
            font-size: 100% !important;
            width: auto !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            background: 0 0 !important;
            -webkit-box-sizing: border-box !important;
            box-sizing: border-box !important;
            -webkit-tap-highlight-color: transparent !important;
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            font-family: -apple-system, sans-serif !important;
            text-decoration: none !important;
            color: currentColor !important;
            background-attachment: scroll !important;
            background-color: transparent !important;
            background-image: none !important;
            background-position: 0 0 !important;
            background-repeat: repeat !important;
            border: 0 !important;
            border-color: #000 !important;
            border-color: currentColor !important;
            border-radius: 0 !important;
            border-style: none !important;
            border-width: medium !important;
            bottom: auto !important;
            clear: none !important;
            clip: auto !important;
            counter-increment: none !important;
            counter-reset: none !important;
            direction: inherit !important;
            float: none !important;
            font-style: inherit !important;
            font-variant: normal !important;
            font-weight: inherit !important;
            height: auto !important;
            left: auto !important;
            letter-spacing: normal !important;
            line-height: inherit !important;
            list-style-type: inherit !important;
            list-style-position: outside !important;
            list-style-image: none !important;
            margin: 0 !important;
            max-height: none !important;
            max-width: none !important;
            min-height: 0 !important;
            min-width: 0 !important;
            opacity: 1;
            outline: 0 !important;
            overflow: visible !important;
            padding: 0 !important;
            position: static !important;
            quotes: """" !important;
            right: auto !important;
            table-layout: auto !important;
            text-align: left !important;
            text-indent: 0 !important;
            text-transform: none !important;
            top: auto !important;
            unicode-bidi: normal !important;
            vertical-align: baseline !important;
            visibility: inherit !important;
            white-space: normal !important;
            width: auto !important;
            word-spacing: normal !important;
            z-index: auto !important;
            background-origin: padding-box !important;
            background-origin: padding-box !important;
            background-clip: border-box !important;
            background-size: auto !important;
            -o-border-image: none !important;
            border-image: none !important;
            border-radius: 0 !important;
            border-radius: 0 !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            -webkit-column-count: auto !important;
            -moz-column-count: auto !important;
            column-count: auto !important;
            -webkit-column-gap: normal !important;
            -moz-column-gap: normal !important;
            column-gap: normal !important;
            -webkit-column-rule: medium none #000 !important;
            -moz-column-rule: medium none #000 !important;
            column-rule: medium none #000 !important;
            -webkit-column-span: none !important;
            -moz-column-span: none !important;
            column-span: none !important;
            -webkit-column-width: auto !important;
            -moz-column-width: auto !important;
            column-width: auto !important;
            -webkit-font-feature-settings: normal !important;
            font-feature-settings: normal !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
            -webkit-hyphens: manual !important;
            -ms-hyphens: manual !important;
            hyphens: manual !important;
            -webkit-perspective: none !important;
            perspective: none !important;
            -webkit-perspective-origin: 50% 50% !important;
            perspective-origin: 50% 50% !important;
            text-shadow: none !important;
            -webkit-transition: all 0s ease 0s !important;
            -o-transition: all 0s ease 0s !important;
            transition: all 0s ease 0s !important;
            -webkit-transform: none !important;
            -ms-transform: none !important;
            transform: none !important;
            -webkit-transform-origin: 50% 50% !important;
            -ms-transform-origin: 50% 50% !important;
            transform-origin: 50% 50% !important;
            -webkit-transform-style: flat !important;
            transform-style: flat !important;
            word-break: normal !important;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%
        }

        #iubenda-iframe.iubenda-iframe-visible {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important
        }

        #iubenda-iframe .iub-popover-trigger {
            display: inline-block !important;
            text-decoration: underline !important;
            -webkit-text-decoration-style: dashed !important;
            text-decoration-style: dashed !important;
            position: relative !important;
            margin-right: 16px !important;
            cursor: pointer !important;
            line-height: 1.25 !important
        }

        #iubenda-iframe .iub-popover-trigger:after,
        #iubenda-iframe .iub-popover-trigger:before {
            content: "";
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 12px;
            vertical-align: middle;
            background-size: 4px;
            position: absolute;
            left: calc(100% + 2px);
            top: 3px
        }

        #iubenda-iframe .iub-popover-trigger:before {
            background-color: currentColor;
            opacity: .35
        }

        #iubenda-iframe .iub-popover-trigger:after {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='13' viewBox='0 0 7 13'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Cpath d='M2.779 1.288a1.287 1.287 0 112.574 0 1.287 1.287 0 01-2.574 0zM5.467 10.422l.903 1.851-.7.341a2.496 2.496 0 01-3.545-2.717l.818-3.252a.42.42 0 00-.178-.382.422.422 0 00-.452-.041l-.844.412-.902-1.852.843-.412a2.491 2.491 0 012.576.233 2.49 2.49 0 01.989 2.389 1.105 1.105 0 01-.02.095l-.817 3.253a.42.42 0 00.178.382c.08.059.244.142.451.041l.7-.341z'/%3E%3C/g%3E%3C/svg%3E");
            background-position: center;
            background-repeat: no-repeat
        }

        #iubenda-iframe .iub-popover {
            position: absolute !important;
            top: 24px !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            border-radius: 4px !important;
            background-color: #fff !important;
            color: #222 !important;
            z-index: 2 !important;
            -webkit-box-shadow: 0 0 32px rgba(0, 0, 0, .1) !important;
            box-shadow: 0 0 32px rgba(0, 0, 0, .1) !important;
            opacity: 0 !important;
            visibility: hidden !important;
            -webkit-transform: translateY(24px) !important;
            -ms-transform: translateY(24px) !important;
            transform: translateY(24px) !important;
            -webkit-transition: opacity .3s ease, visibility .3s ease, -webkit-transform .3s ease !important;
            transition: opacity .3s ease, visibility .3s ease, -webkit-transform .3s ease !important;
            -o-transition: opacity .3s ease, visibility .3s ease, transform .3s ease !important;
            transition: opacity .3s ease, visibility .3s ease, transform .3s ease !important;
            transition: opacity .3s ease, visibility .3s ease, transform .3s ease, -webkit-transform .3s ease !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-orient: vertical !important;
            -webkit-box-direction: normal !important;
            -ms-flex-direction: column !important;
            flex-direction: column !important;
            z-index: 99 !important;
            pointer-events: none !important;
            overflow: hidden !important
        }

        #iubenda-iframe .iub-popover-header {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-pack: justify !important;
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
            z-index: 1 !important;
            -webkit-box-shadow: 0 16px 16px #fff !important;
            box-shadow: 0 16px 16px #fff !important
        }

        #iubenda-iframe .iub-popover-header>* {
            padding: 24px !important;
            padding-bottom: 0 !important
        }

        #iubenda-iframe .iub-popover-header-title {
            font-size: 18px !important;
            font-weight: 700 !important
        }

        #iubenda-iframe .iub-popover-header-close {
            font-size: 24px !important;
            font-weight: 300 !important;
            cursor: pointer !important;
            line-height: 1 !important;
            position: relative !important;
            top: -2px !important
        }

        #iubenda-iframe .iub-popover-content {
            font-size: 14px !important;
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            font-weight: 300 !important;
            line-height: 1.5 !important;
            position: relative !important
        }

        #iubenda-iframe .iub-popover-content>div {
            padding: 0 24px !important;
            overflow-y: auto !important;
            height: 100% !important
        }

        #iubenda-iframe .iub-popover-content>div:after,
        #iubenda-iframe .iub-popover-content>div:before {
            content: "";
            display: block;
            height: 24px
        }

        #iubenda-iframe .iub-popover-content h3 {
            margin-bottom: 16px !important;
            font-weight: 700 !important
        }

        #iubenda-iframe .iub-popover-content p:not(:last-of-type) {
            margin-bottom: 16px !important
        }

        #iubenda-iframe .iub-popover-content a {
            text-decoration: underline !important;
            cursor: pointer !important;
            opacity: .8 !important
        }

        #iubenda-iframe .iub-popover-content b,
        #iubenda-iframe .iub-popover-content strong {
            font-weight: 700 !important
        }

        #iubenda-iframe .iub-popover-content em,
        #iubenda-iframe .iub-popover-content i {
            font-style: italic !important
        }

        #iubenda-iframe .iub-popover-content:after {
            position: absolute;
            content: "";
            display: block;
            height: 24px;
            pointer-events: none;
            left: 0;
            right: 0;
            bottom: 0;
            background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(white));
            background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0, #fff 100%);
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0, #fff 100%)
        }

        #iubenda-iframe .iub-popover {
            top: 25% !important
        }

        #iubenda-iframe.iub-popover-visible .iub-popover {
            opacity: 1 !important;
            visibility: visible !important;
            -webkit-transform: translateY(0) !important;
            -ms-transform: translateY(0) !important;
            transform: translateY(0) !important;
            pointer-events: auto !important
        }

        #iubenda-iframe.iub-popover-visible #iubenda-iframe-popup:before {
            opacity: 1;
            visibility: visible;
            pointer-events: auto
        }

        #iubenda-iframe .iubenda-iframe-spinner {
            position: fixed !important
        }

        #iubenda-iframe .iub-legitimate-interest-checkbox {
            padding: 16px !important;
            border-radius: 4px !important;
            background-color: rgba(0, 0, 0, .02) !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-pack: justify !important;
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            margin-top: 10px !important
        }

        #iubenda-iframe .iub-legitimate-interest-checkbox label {
            margin-right: 8px !important;
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            font-weight: 400 !important
        }

        #iubenda-iframe .iub-legitimate-interest-checkbox input[type=checkbox] {
            -moz-appearance: none !important;
            appearance: none !important;
            -webkit-appearance: none !important;
            border: 0 !important;
            margin: 0 !important;
            width: 24px !important;
            height: 24px !important;
            border-radius: 4px !important;
            -webkit-box-shadow: inset 0 0 0 2px rgba(0, 0, 0, .1) !important;
            box-shadow: inset 0 0 0 2px rgba(0, 0, 0, .1) !important;
            background-color: #fff !important;
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
            cursor: pointer !important
        }

        #iubenda-iframe .iub-legitimate-interest-checkbox input[type=checkbox]:checked {
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            background-color: #1cc691 !important;
            background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' id='Capa_1' enable-background='new 0 0 515.556 515.556' height='512px' viewBox='0 0 515.556 515.556' width='512px' class=''%3E%3Cg%3E%3Cpath d='m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFFFFF'/%3E%3C/g%3E%3C/svg%3E%0A") !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: 14px !important
        }

        #iubenda-iframe #iubenda-iframe-popup {
            position: relative !important;
            width: 800px !important;
            height: 650px !important;
            -webkit-box-shadow: 0 0 16px rgba(0, 0, 0, .02) !important;
            box-shadow: 0 0 16px rgba(0, 0, 0, .02) !important;
            border-radius: 4px !important
        }

        #iubenda-iframe #iubenda-iframe-popup:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            z-index: 98;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            -webkit-transition: opacity .3s ease, visibility .3s ease;
            -o-transition: opacity .3s ease, visibility .3s ease;
            transition: opacity .3s ease, visibility .3s ease
        }

        @media (max-height:649px) {
            #iubenda-iframe #iubenda-iframe-popup {
                height: calc(100% - 32px) !important
            }
        }

        @media (max-width:799px) {
            #iubenda-iframe #iubenda-iframe-popup {
                width: calc(100% - 32px) !important
            }
        }

        #iubenda-iframe .iubenda-iframe-close-btn {
            cursor: pointer !important;
            width: 24px !important;
            height: 24px !important;
            border-radius: 24px !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
            justify-content: center !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            font-weight: 300 !important;
            background-color: #fff !important;
            position: absolute !important;
            top: 0 !important;
            right: 0 !important;
            -webkit-transform: translate(50%, -50%) !important;
            -ms-transform: translate(50%, -50%) !important;
            transform: translate(50%, -50%) !important;
            -webkit-transition: -webkit-transform .4s ease !important;
            transition: -webkit-transform .4s ease !important;
            -o-transition: transform .4s ease !important;
            transition: transform .4s ease !important;
            transition: transform .4s ease, -webkit-transform .4s ease !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21'%3E%3Cpath fill='%23000' fill-rule='nonzero' d='M18.5.379L20.621 2.5l-8 8 8 8-2.121 2.121-8-8-8 8L.379 18.5l8-8-8-8L2.5.379l8 8z'/%3E%3C/svg%3E") !important;
            background-size: 8px 8px !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            -webkit-box-shadow: 0 0 32px rgba(0, 0, 0, .3) !important;
            box-shadow: 0 0 32px rgba(0, 0, 0, .3) !important
        }

        #iubenda-iframe .iubenda-iframe-close-btn:hover {
            -webkit-transform: translate(50%, -50%) scale(1.15) !important;
            -ms-transform: translate(50%, -50%) scale(1.15) !important;
            transform: translate(50%, -50%) scale(1.15) !important
        }

        @media (max-width:799px) {
            #iubenda-iframe .iubenda-iframe-close-btn {
                width: 36px !important;
                height: 36px !important;
                border-radius: 36px !important;
                -webkit-transform: translate(25%, -25%) !important;
                -ms-transform: translate(25%, -25%) !important;
                transform: translate(25%, -25%) !important;
                -webkit-transition: none !important;
                -o-transition: none !important;
                transition: none !important
            }

            #iubenda-iframe .iubenda-iframe-close-btn:hover {
                -webkit-transform: translate(25%, -25%) !important;
                -ms-transform: translate(25%, -25%) !important;
                transform: translate(25%, -25%) !important
            }
        }

        #iubenda-iframe iframe {
            width: 100% !important;
            height: 100% !important
        }

        #iubenda-iframe #iubenda-iframe-content {
            height: 100% !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-orient: vertical !important;
            -webkit-box-direction: normal !important;
            -ms-flex-direction: column !important;
            flex-direction: column !important
        }

        #iubenda-iframe .iubenda-modal-navigation {
            position: relative !important;
            z-index: 3 !important
        }

        #iubenda-iframe .iubenda-modal-navigation:not(.iubenda-modal-navigation-brand) {
            color: #555 !important;
            -webkit-box-shadow: 0 18px 10px -8px #fff !important;
            box-shadow: 0 18px 10px -8px #fff !important
        }

        @media (max-width:799px) {
            #iubenda-iframe .iubenda-modal-navigation:not(.iubenda-modal-navigation-brand) {
                -webkit-box-shadow: 0 28px 12px -8px #fff !important;
                box-shadow: 0 28px 12px -8px #fff !important
            }
        }

        #iubenda-iframe .iubenda-modal-navigation-brand {
            position: relative;
            -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .075) !important;
            box-shadow: 0 1px 0 rgba(0, 0, 0, .075) !important
        }

        #iubenda-iframe .iubenda-modal-navigation-brand .iubenda-modal-navigation-logo {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            margin-right: 16px !important
        }

        #iubenda-iframe .iubenda-modal-navigation-brand .iubenda-modal-navigation-logo img {
            max-width: 192px !important;
            max-height: 56px !important;
            min-width: auto !important;
            min-height: auto !important
        }

        @media (max-width:799px) {
            #iubenda-iframe .iubenda-modal-navigation-brand .iubenda-modal-navigation-logo img {
                max-width: 75% !important
            }
        }

        #iubenda-iframe .iubenda-modal-navigation-brand .purposes-top {
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important
        }

        #iubenda-iframe .iubenda-iframe-top-container {
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            background-color: #fff !important;
            overflow: hidden !important;
            border-radius: 4px !important
        }

        #iubenda-iframe .iubenda-iframe-top-container.bottom-border-radius {
            border-radius: 0 0 4px 4px !important
        }

        #iubenda-iframe .zero-border-radius {
            border-radius: 0 !important
        }

        #iubenda-iframe .zero-bottom-border-radius {
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important
        }

        #iubenda-iframe .iubenda-iframe-footer {
            background-color: #fff !important;
            color: #555 !important;
            font-size: 16px !important;
            position: relative !important;
            z-index: 10 !important;
            border-bottom-left-radius: 4px !important;
            border-bottom-right-radius: 4px !important
        }

        #iubenda-iframe .iubenda-iframe-footer:not(.iubenda-iframe-footer-absolute):before {
            content: "";
            height: 48px;
            display: block;
            width: 100%;
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(white));
            background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0, #fff 100%);
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #fff 100%);
            position: absolute;
            bottom: 100%;
            pointer-events: none
        }

        @media (min-width:800px) {
            #iubenda-iframe .iubenda-iframe-footer:not(.iubenda-iframe-footer-absolute)>* {
                margin-top: 8px !important
            }
        }

        #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            background: -webkit-gradient(linear, left bottom, left top, color-stop(80%, #fff), to(rgba(255, 255, 255, 0))) !important;
            background: -o-linear-gradient(bottom, #fff 80%, rgba(255, 255, 255, 0) 100%) !important;
            background: linear-gradient(0deg, #fff 80%, rgba(255, 255, 255, 0) 100%) !important;
            pointer-events: none !important
        }

        #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute>* {
            pointer-events: auto !important
        }

        #iubenda-iframe .iubenda-iframe-footer #iubBackBtn {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
            justify-content: center !important;
            border-radius: 4px !important;
            color: rgba(0, 0, 0, .4) !important;
            font-size: 13px !important;
            font-weight: 700 !important;
            cursor: pointer !important
        }

        @media (max-width:799px) {
            #iubenda-iframe .iubenda-iframe-footer #iubBackBtn {
                text-align: center !important;
                width: 100% !important;
                margin: 16px 0 20px !important
            }
        }

        @media (min-width:800px) {
            #iubenda-iframe .iubenda-iframe-footer #iubBackBtn {
                padding: 8px 10px !important;
                border: 1px solid rgba(0, 0, 0, .25) !important
            }
        }

        #iubenda-iframe .iubenda-iframe-footer #iubBackBtn svg {
            margin-right: 4px !important;
            width: 16px !important;
            height: 16px !important
        }

        @media (min-width:800px) {
            #iubenda-iframe .iubenda-iframe-footer {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center !important;
                -ms-flex-align: center !important;
                align-items: center !important;
                -webkit-box-pack: justify !important;
                -ms-flex-pack: justify !important;
                justify-content: space-between !important
            }

            #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterIabBtnContainer {
                opacity: 0 !important;
                pointer-events: none !important;
                -webkit-transform: translateY(16px) !important;
                -ms-transform: translateY(16px) !important;
                transform: translateY(16px) !important
            }
        }

        @media (max-width:799px) {
            #iubenda-iframe .iubenda-iframe-footer {
                text-align: center !important
            }

            #iubenda-iframe .iubenda-iframe-footer #iubFooterIabBtnContainer {
                position: absolute !important;
                bottom: 18px !important;
                left: 50% !important;
                -webkit-transform: translateX(-50%) !important;
                -ms-transform: translateX(-50%) !important;
                transform: translateX(-50%) !important;
                margin: 0 !important;
                width: 100% !important
            }

            #iubenda-iframe .iubenda-iframe-footer #iubFooterIabBtnContainer+#iubFooterBtnContainer {
                -webkit-transform: translateY(-10px) !important;
                -ms-transform: translateY(-10px) !important;
                transform: translateY(-10px) !important
            }

            #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical !important;
                -webkit-box-direction: normal !important;
                -ms-flex-direction: column !important;
                flex-direction: column !important;
                padding: 0 !important;
                text-align: center !important
            }

            #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterBtnContainer,
            #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterIabBtnContainer {
                -webkit-box-ordinal-group: 2;
                -ms-flex-order: 1;
                order: 1
            }

            #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubBackBtn {
                -webkit-box-ordinal-group: 3;
                -ms-flex-order: 2;
                order: 2;
                margin-top: 0 !important;
                padding-top: 0 !important;
                margin-top: -4px !important
            }

            #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterIabBtnContainer {
                opacity: 0 !important;
                pointer-events: none !important;
                -webkit-transform: translate(-50%, 16px) !important;
                -ms-transform: translate(-50%, 16px) !important;
                transform: translate(-50%, 16px) !important
            }

            #iubenda-iframe .iubenda-iframe-footer.iubenda-iframe-footer-absolute #iubFooterIabBtnContainer+#iubFooterBtnContainer {
                -webkit-transform: translateY(0) !important;
                -ms-transform: translateY(0) !important;
                transform: translateY(0) !important
            }
        }

        #iubenda-iframe .iubenda-iframe-footer>* {
            -webkit-transition: opacity .4s ease, -webkit-transform .4s ease !important;
            transition: opacity .4s ease, -webkit-transform .4s ease !important;
            -o-transition: opacity .4s ease, transform .4s ease !important;
            transition: opacity .4s ease, transform .4s ease !important;
            transition: opacity .4s ease, transform .4s ease, -webkit-transform .4s ease !important;
            margin: 24px 20px !important
        }

        @media (max-width:799px) {
            #iubenda-iframe .iubenda-iframe-footer>* {
                margin: 16px 12px !important
            }
        }

        #iubenda-iframe #iubFooterBtnIab {
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            display: block !important;
            width: 100% !important;
            font-size: 12px !important;
            text-decoration: underline !important;
            color: currentColor !important;
            text-align: center !important;
            cursor: pointer !important
        }

        #iubenda-iframe #iubFooterBtnIab:hover {
            opacity: .6 !important
        }

        #iubenda-iframe #iubFooterBtnContainer button {
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            margin: 4px !important;
            padding: 8px 24px !important;
            border-radius: 64px !important;
            cursor: pointer !important;
            font-weight: 700 !important;
            font-size: 100% !important;
            background-color: #0073ce !important;
            color: #fff !important;
            text-align: center !important
        }

        #iubenda-iframe #iubFooterBtnContainer button:focus,
        #iubenda-iframe #iubFooterBtnContainer button:hover {
            opacity: .8 !important
        }

        @media (min-width:800px) {
            #iubenda-iframe #iubFooterBtnContainer {
                -ms-flex-item-align: end !important;
                align-self: end !important;
                margin-left: auto !important
            }
        }

        @media (max-width:799px) {
            #iubenda-iframe #iubFooterBtnContainer {
                display: -webkit-box !important;
                display: -ms-flexbox !important;
                display: flex !important
            }

            #iubenda-iframe #iubFooterBtnContainer button {
                -webkit-box-flex: 1 !important;
                -ms-flex: 1 !important;
                flex: 1 !important
            }
        }

        #iubenda-iframe .purposes-top-right {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            position: relative !important;
            text-align: right !important;
            -webkit-box-pack: end !important;
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
            max-width: 50% !important
        }

        #iubenda-iframe .purposes-top-right>* {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important
        }

        #iubenda-iframe .purposes-top-right .purposes-btn-cp {
            -webkit-box-ordinal-group: 2 !important;
            -ms-flex-order: 1 !important;
            order: 1 !important;
            opacity: 1 !important;
            -webkit-transition: opacity .4s ease !important;
            -o-transition: opacity .4s ease !important;
            transition: opacity .4s ease !important;
            display: -webkit-inline-box !important;
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
            max-width: 100% !important
        }

        #iubenda-iframe .purposes-top-right .purposes-btn-cp svg {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important
        }

        #iubenda-iframe .purposes-top-right .purposes-btn-cp span {
            display: block;
            overflow: hidden !important;
            -o-text-overflow: ellipsis !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important
        }

        #iubenda-iframe .purposes-top-right .iub-iframe-brand-button {
            -webkit-box-ordinal-group: 3 !important;
            -ms-flex-order: 2 !important;
            order: 2 !important
        }

        #iubenda-iframe .purposes-top-right .iub-iframe-brand-button.hover {
            width: 154px !important
        }

        #iubenda-iframe .purposes-top-right .iub-iframe-brand-button.hover svg {
            margin-left: -30px !important
        }

        @media (max-width:799px) {
            #iubenda-iframe .purposes-top-right .iub-iframe-brand-button.hover~.purposes-btn-cp {
                pointer-events: none !important;
                opacity: 0 !important
            }
        }

        #iubenda-iframe .iub-iframe-brand-button {
            width: 42px !important;
            height: 38px !important;
            margin-left: 8px !important;
            margin-right: -24px !important;
            color: currentColor !important;
            display: inline-block !important;
            background-color: rgba(0, 0, 0, .075) !important;
            overflow: hidden !important;
            border-top-left-radius: 32px !important;
            border-bottom-left-radius: 32px !important;
            cursor: pointer !important;
            -webkit-transition: width .4s ease, -webkit-transform .4s ease !important;
            transition: width .4s ease, -webkit-transform .4s ease !important;
            -o-transition: transform .4s ease, width .4s ease !important;
            transition: transform .4s ease, width .4s ease !important;
            transition: transform .4s ease, width .4s ease, -webkit-transform .4s ease !important
        }

        #iubenda-iframe .iub-iframe-brand-button svg {
            -webkit-transition: margin .4s ease !important;
            -o-transition: margin .4s ease !important;
            transition: margin .4s ease !important;
            height: 38px !important;
            width: 174px !important;
            margin-left: 4px !important
        }

        @media (max-width:799px) {
            #iubenda-iframe .iub-iframe-brand-button {
                margin-right: -16px !important
            }
        }

        #iubenda-iframe #iubenda-iframe-content.cookie-policy-no-logo #purposes-container .iubenda-modal-navigation-logo {
            display: none
        }

        #iubenda-iframe #iubenda-iframe-content.cookie-policy-no-logo .iubenda-iframe-footer #iubBackBtn {
            display: none !important
        }

        #iubenda-iframe #iubenda-iframe-content:not(.cookie-policy-no-logo) #purposes-container .purposes-btn-back {
            display: none
        }

        #iubenda-iframe #iubenda-iframe-content:not(.cookie-policy-no-logo) .iubenda-modal-navigation-brand .purposes-top>div {
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important
        }

        #iab-container .iab-top-container {
            padding: 24px !important;
            font-size: 16px !important;
            font-family: Helvetica, Helvetica Neue, Arial, sans-serif !important;
            background-color: #fff !important;
            border-radius: 0 !important;
            border-top-left-radius: 5px !important;
            border-top-right-radius: 5px !important;
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-pack: justify !important;
            -ms-flex-pack: justify !important;
            justify-content: space-between !important
        }

        #iab-container .iab-top-container button {
            font-size: 14px !important;
            font-weight: 700 !important;
            color: rgba(0, 0, 0, .65) !important;
            display: inline-block !important;
            padding: 8px 16px !important;
            background-color: rgba(0, 0, 0, .07) !important;
            border-radius: 6px !important;
            text-decoration: none !important;
            background-size: 21px !important;
            background-position: center left 10px !important;
            background-repeat: no-repeat !important;
            cursor: pointer !important
        }

        #iab-container .iab-top-container button:before {
            content: attr(data-str-desktop)
        }

        @media (max-width:799px) {
            #iab-container .iab-top-container button:before {
                content: attr(data-str-mobile)
            }
        }

        #iab-container .iab-top-container button:hover {
            opacity: .8 !important
        }

        #iab-container .iab-top-container button.cp-button {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23535353'%3E%3Cpath d='M3 2h5c1.773 0 5 2.634 5 5v7H3V2z'/%3E%3Cpath d='M13 7H8V2h0'/%3E%3C/g%3E%3C/svg%3E") !important;
            padding-left: 40px !important
        }

        #iab-container .iab-top-container button.back-button {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23535353' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6.72 12.243L2.477 8h0L6.72 3.757M3 8h10.548'/%3E%3C/g%3E%3C/svg%3E") !important;
            padding-left: 40px !important
        }

        #iab-container .iab-top-container button.stroked-button {
            background-color: transparent !important;
            border: 1px solid rgba(0, 0, 0, .25) !important
        }

        #iab-container .iab-top-container button.stroked-button:hover {
            background-color: transparent !important;
            border-color: rgba(0, 0, 0, .45) !important
        }

        #purposes-container {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-orient: vertical !important;
            -webkit-box-direction: normal !important;
            -ms-flex-direction: column !important;
            flex-direction: column !important;
            line-height: 1.5 !important
        }

        #purposes-container a {
            color: rgba(0, 0, 0, .7) !important;
            text-decoration: underline !important
        }

        #purposes-container a.trigger-link {
            font-weight: 700 !important;
            background-color: #eaeaea !important;
            padding: 8px 16px !important;
            color: rgba(0, 0, 0, .75) !important;
            border-radius: 6px !important;
            display: inline-block !important;
            text-decoration: none !important;
            white-space: nowrap !important
        }

        #purposes-container button {
            position: relative !important
        }

        #purposes-container .purposes-btn {
            font-size: 14px !important;
            font-weight: 700 !important;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
            justify-content: center !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            padding: 8px 16px !important;
            background-color: rgba(0, 0, 0, .07) !important;
            border-radius: 6px !important;
            text-decoration: none !important;
            background-size: 21px !important;
            background-position: center left 10px !important;
            background-repeat: no-repeat !important;
            cursor: pointer !important
        }

        #purposes-container .purposes-btn:hover {
            opacity: .8 !important
        }

        #purposes-container .purposes-btn svg {
            margin-right: 4px !important;
            width: 20px !important;
            height: 20px !important
        }

        #purposes-container .purposes-btn-tcf {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='none' fill-rule='evenodd' stroke='%23535353' d='M9.803 2.5v.77h0c.499.199.958.478 1.363.822l.642-.364a.5.5 0 0 1 .686.197l1.273 2.35a.5.5 0 0 1-.193.673l-.659.373h0a5.244 5.244 0 0 1 0 1.358l.659.373a.5.5 0 0 1 .193.673l-1.273 2.35a.5.5 0 0 1-.686.197l-.642-.364h0a4.932 4.932 0 0 1-1.362.823v.769a.5.5 0 0 1-.5.5H6.696a.5.5 0 0 1-.5-.5l-.001-.77h0a4.932 4.932 0 0 1-1.362-.822l-.642.364a.5.5 0 0 1-.686-.197l-1.273-2.35a.5.5 0 0 1 .193-.673l.659-.373h0a5.244 5.244 0 0 1 0-1.359l-.658-.372a.5.5 0 0 1-.193-.674l1.272-2.349a.5.5 0 0 1 .686-.197l.642.364h0a4.932 4.932 0 0 1 1.362-.823V2.5a.5.5 0 0 1 .5-.5h2.607a.5.5 0 0 1 .5.5zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'/%3E%3C/svg%3E") !important;
            padding-left: 40px !important
        }

        #purposes-container .purposes-btn-primary {
            background-color: #0073ce !important;
            color: #fff !important
        }

        #purposes-container .purposes-btn-stroked {
            background-color: transparent !important;
            border: 1px solid rgba(0, 0, 0, .25) !important
        }

        #purposes-container .purposes-btn-stroked:hover {
            background-color: transparent !important;
            border-color: rgba(0, 0, 0, .45) !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-btn.purposes-desktop {
                display: none !important
            }
        }

        @media (min-width:800px) {
            #purposes-container .purposes-btn.purposes-mobile {
                display: none !important
            }
        }

        #purposes-container .purposes-top {
            padding: 24px !important;
            position: relative !important;
            z-index: 2 !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-pack: justify !important;
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-top {
                padding: 16px !important
            }
        }

        #purposes-container .purposes-content {
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            overflow-y: scroll !important
        }

        #purposes-container .purposes-header {
            padding: 24px !important;
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-header {
                padding: 16px 16px 32px !important
            }
        }

        #purposes-container .purposes-header-title {
            font-weight: 700 !important;
            font-size: 48px !important;
            margin-bottom: 8px !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-header-title {
                font-size: 24px !important
            }
        }

        #purposes-container .purposes-header-text {
            font-size: 15px !important;
            font-weight: 300 !important
        }

        #purposes-container .purposes-buttons {
            position: sticky !important;
            position: -webkit-sticky !important;
            top: 0 !important;
            background-color: #fff !important;
            -webkit-box-shadow: 0 1px rgba(0, 0, 0, .07) !important;
            box-shadow: 0 1px rgba(0, 0, 0, .07) !important;
            z-index: 3 !important;
            padding: 24px 16px !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-pack: end !important;
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-buttons {
                padding: 16px 12px !important
            }
        }

        @media (max-width:799px) {
            #purposes-container .purposes-buttons {
                -webkit-box-pack: center !important;
                -ms-flex-pack: center !important;
                justify-content: center !important
            }

            #purposes-container .purposes-buttons>div {
                display: -webkit-box !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-box-flex: 1 !important;
                -ms-flex: 1 !important;
                flex: 1 !important
            }

            #purposes-container .purposes-buttons>div button {
                -webkit-box-flex: 1 !important;
                -ms-flex: 1 !important;
                flex: 1 !important
            }
        }

        #purposes-container .purposes-buttons button {
            margin: 0 8px !important;
            border-radius: 32px !important;
            -webkit-box-shadow: 0 4px 8px -6px rgba(0, 0, 0, .2) !important;
            box-shadow: 0 4px 8px -6px rgba(0, 0, 0, .2) !important;
            padding: 8px 20px !important;
            background-color: #ededed !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            cursor: pointer !important;
            text-align: center !important;
            color: #3c3c3c !important;
            background-repeat: no-repeat !important;
            background-position: center left 16px !important;
            padding-left: 38px !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            -o-text-overflow: ellipsis !important;
            text-overflow: ellipsis !important;
            display: block !important
        }

        #purposes-container .purposes-buttons button:before {
            content: '';
            background-color: #fff;
            border-radius: 32px !important;
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            -webkit-transform: scale(.001, .001);
            -ms-transform: scale(.001, .001);
            transform: scale(.001, .001)
        }

        #purposes-container .purposes-buttons button:focus {
            outline: 0;
            color: #fff
        }

        #purposes-container .purposes-buttons button:focus:before {
            -webkit-animation: button_clicked .8s ease-out;
            animation: button_clicked .8s ease-out
        }

        #purposes-container .purposes-buttons button.purposes-btn-accept {
            background-color: #1cc691 !important;
            color: #fff !important;
            background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' id='Capa_1' enable-background='new 0 0 515.556 515.556' height='512px' viewBox='0 0 515.556 515.556' width='512px' class=''%3E%3Cg%3E%3Cpath d='m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23FFFFFF'/%3E%3C/g%3E%3C/svg%3E%0A") !important;
            background-size: 16px !important
        }

        #purposes-container .purposes-buttons button.purposes-btn-reject {
            background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 386.667 386.667' height='512px' viewBox='0 0 386.667 386.667' width='512px' class=''%3E%3Cg%3E%3Cpath d='m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%233c3c3c'/%3E%3C/g%3E%3C/svg%3E%0A") !important;
            background-size: 14px !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-buttons button {
                padding: 8px 10px !important;
                padding-left: 32px !important;
                background-position: center left 12px !important;
                margin: 0 4px !important
            }
        }

        #purposes-container .purposes-body:after {
            content: "";
            display: block;
            height: 128px !important
        }

        #purposes-container .purposes-items {
            border-radius: 4px !important;
            background-color: #fff !important
        }

        #purposes-container .purposes-badge {
            display: inline-block !important;
            padding: 2px 16px !important;
            border-radius: 32px !important;
            font-size: 10px !important;
            font-weight: 700 !important;
            text-align: center !important;
            margin: 6px 0 !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-badge {
                margin: 6px 0 !important
            }
        }

        #purposes-container .purposes-badge-primary {
            color: #25a247 !important;
            text-align: left !important;
            padding: 0 !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important
        }

        #purposes-container .purposes-badge-primary:before {
            content: "";
            width: 24px !important;
            height: 24px !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 14 16'%3E%3Cpath fill='%2325a247' fill-rule='evenodd' d='M6.592 0L0 2.783v6.611C0 12.502 6.222 15.902 6.588 16c.366-.098 6.588-3.735 6.588-6.258V2.783L6.592 0z'/%3E%3C/svg%3E") !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            background-size: 12px 12px !important;
            display: inline-block !important;
            background-color: #47c51e21 !important;
            vertical-align: middle !important;
            border-radius: 32px !important;
            margin-right: 6px !important;
            border-top-left-radius: 8px !important;
            -ms-flex-negative: 0;
            flex-shrink: 0
        }

        #purposes-container .purposes-first {
            -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .1), inset 0 4px 0 rgba(0, 0, 0, .04), 0 4px 4px rgba(0, 0, 0, .05) !important;
            box-shadow: 0 1px 0 rgba(0, 0, 0, .1), inset 0 4px 0 rgba(0, 0, 0, .04), 0 4px 4px rgba(0, 0, 0, .05) !important;
            position: sticky !important;
            position: -webkit-sticky !important;
            top: 0 !important;
            background-color: #f8f8f8 !important;
            z-index: 2 !important;
            padding: 16px 24px !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-pack: justify !important;
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            display: none !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-first {
                padding: 16px 16px !important
            }
        }

        #purposes-container .purposes-first>:first-of-type {
            text-transform: uppercase !important;
            text-align: right !important;
            font-weight: 700 !important;
            font-size: 12px !important;
            letter-spacing: 1.25px !important;
            color: rgba(0, 0, 0, .75) !important;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1
        }

        @media (max-width:799px) {
            #purposes-container .purposes-first>:first-of-type {
                font-size: 10px !important
            }
        }

        #purposes-container .purposes-checkbox {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            margin-left: 24px !important
        }

        #purposes-container .purposes-checkbox input {
            -moz-appearance: none !important;
            appearance: none !important;
            -webkit-appearance: none !important;
            padding: 0 !important;
            border: 0 !important;
            margin: 0 !important
        }

        #purposes-container .purposes-checkbox input::-ms-check {
            visibility: hidden
        }

        #purposes-container .purposes-checkbox input.style1 {
            width: 64px !important;
            height: 32px !important;
            border-radius: 32px !important;
            -webkit-transition: background-position .4s ease, background-color .4s ease !important;
            -o-transition: background-position .4s ease, background-color .4s ease !important;
            transition: background-position .4s ease, background-color .4s ease !important;
            background-color: #ccc !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zM5.729 5.033a.5.5 0 0 0-.638.058l-.058.07a.5.5 0 0 0 .058.637l3.201 3.201-3.201 3.203a.5.5 0 0 0 .707.707l3.201-3.203 3.203 3.203.07.058a.5.5 0 0 0 .637-.058l.058-.07a.5.5 0 0 0-.058-.637L9.706 8.999l3.203-3.201a.5.5 0 0 0-.707-.707L8.999 8.292 5.798 5.091z'/%3E%3C/svg%3E") !important;
            background-repeat: no-repeat !important;
            background-position: top 4px left 4px !important;
            background-size: 24px 24px !important
        }

        #purposes-container .purposes-checkbox input.style1:checked {
            background-color: #1cc691 !important;
            background-position: top 4px left 36px !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm4.646 5.646l-6.198 6.2-3.1-3a.5.5 0 1 0-.696.718l3.454 3.342a.5.5 0 0 0 .701-.006l6.547-6.546a.5.5 0 1 0-.708-.708z'/%3E%3C/svg%3E") !important
        }

        #purposes-container .purposes-checkbox input.style1:checked.sm {
            background-position: top 3px left 27px !important
        }

        #purposes-container .purposes-checkbox input.style1:checked.half {
            background-color: #ffd24d !important;
            background-position: top 4px left 20px !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%23FFF' fill-rule='evenodd' d='M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm4 8.5H5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z'/%3E%3C/svg%3E") !important
        }

        #purposes-container .purposes-checkbox input.style1:checked.half.sm {
            background-position: top 3px left 15px !important
        }

        #purposes-container .purposes-checkbox input.style1.sm {
            width: 48px !important;
            height: 24px !important;
            border-radius: 24px !important;
            background-size: 18px 18px !important;
            background-position: top 3px left 3px !important
        }

        #purposes-container .purposes-checkbox input:focus {
            outline: 0 !important
        }

        #purposes-container .purposes-checkbox input::-ms-check {
            visibility: hidden !important
        }

        #purposes-container .purposes-checkbox input:not([disabled]) {
            cursor: pointer !important
        }

        #purposes-container .purposes-checkbox input[disabled] {
            opacity: .35
        }

        #purposes-container .purposes-item {
            position: relative !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-orient: vertical !important;
            -webkit-box-direction: normal !important;
            -ms-flex-direction: column !important;
            flex-direction: column !important;
            margin: 0 24px !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-item {
                margin: 0 16px !important
            }
        }

        #purposes-container .purposes-item:not(:last-of-type) {
            border-bottom: 1px solid rgba(0, 0, 0, .075) !important
        }

        #purposes-container .purposes-item-shown .purposes-item-body {
            max-height: 1000px !important;
            padding: 0 0 24px !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-item-shown .purposes-item-body {
                padding: 0 0 16px !important
            }
        }

        #purposes-container .purposes-item-shown .purposes-item-title-btn:after {
            -webkit-transform: rotate(180deg) !important;
            -ms-transform: rotate(180deg) !important;
            transform: rotate(180deg) !important
        }

        #purposes-container .purposes-item-shown .purposes-item-title-btn:before {
            content: attr(data-str-on)
        }

        #purposes-container .purposes-item-header {
            background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), color-stop(15%, #fff)) !important;
            background: -o-linear-gradient(bottom, rgba(255, 255, 255, 0) 0, #fff 15%) !important;
            background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0, #fff 15%) !important;
            position: sticky !important;
            position: -webkit-sticky !important;
            top: 58px !important;
            z-index: 1 !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            padding: 24px 0 !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-item-header {
                top: 52px !important
            }
        }

        #purposes-container .purposes-item-title {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            -webkit-box-pack: justify !important;
            -ms-flex-pack: justify !important;
            justify-content: space-between !important
        }

        #purposes-container .purposes-item-title>div:first-of-type {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important
        }

        @media (min-width:800px) {
            #purposes-container .purposes-item-title>div:first-of-type {
                -webkit-box-align: center !important;
                -ms-flex-align: center !important;
                align-items: center !important
            }
        }

        @media (max-width:799px) {
            #purposes-container .purposes-item-title>div:first-of-type {
                -webkit-box-orient: vertical !important;
                -webkit-box-direction: normal !important;
                -ms-flex-direction: column !important;
                flex-direction: column !important
            }
        }

        @media (max-width:799px) {
            #purposes-container .purposes-item-title {
                -webkit-box-orient: vertical !important;
                -webkit-box-direction: normal !important;
                -ms-flex-direction: column !important;
                flex-direction: column !important
            }
        }

        #purposes-container .purposes-item-title label {
            font-weight: 700 !important;
            font-size: 16px !important;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1
        }

        @media (max-width:799px) {
            #purposes-container .purposes-item-title label {
                font-size: 14px !important
            }
        }

        #purposes-container .purposes-item-title-btn {
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            font-size: 12px !important;
            color: rgba(0, 0, 0, .75) !important;
            font-weight: 300 !important;
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            -webkit-box-align: center !important;
            -ms-flex-align: center !important;
            align-items: center !important;
            cursor: pointer !important
        }

        #purposes-container .purposes-item-title-btn:after {
            content: "";
            width: 10px !important;
            height: 10px !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='5' viewBox='0 0 10 5'%3E%3Cpath fill='none' fill-rule='evenodd' stroke='%23979797' stroke-linecap='round' stroke-linejoin='round' d='M9.243 0L5 4.243h0L.757 0'/%3E%3C/svg%3E") !important;
            opacity: .5 !important;
            background-size: 10px 10px !important;
            background-repeat: no-repeat !important;
            display: inline-block !important;
            margin: 8px 6px !important
        }

        #purposes-container .purposes-item-title-btn:before {
            content: attr(data-str-off)
        }

        #purposes-container .purposes-item-body {
            max-height: 0 !important;
            overflow: hidden !important;
            -webkit-transition: max-height .4s ease, padding .4s ease !important;
            -o-transition: max-height .4s ease, padding .4s ease !important;
            transition: max-height .4s ease, padding .4s ease !important;
            font-size: 14px !important;
            font-weight: 300 !important;
            color: rgba(0, 0, 0, .75) !important
        }

        @media (max-width:799px) {
            #purposes-container .purposes-item-body {
                font-size: 12px !important
            }
        }

        #purposes-container .purposes-item-body p:not(:last-of-type) {
            margin-bottom: 8px !important
        }

        #purposes-container .purposes-sub-container {
            color: #5f5f5f !important
        }

        #purposes-container .purposes-sub-container:not(:last-of-type) {
            padding-bottom: 32px !important
        }

        #purposes-container .purposes-sub-container>div:first-of-type {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-bottom: 8px !important
        }

        #purposes-container .purposes-sub-container>div:first-of-type>div:first-of-type {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1
        }

        #purposes-container .purposes-sub-container label {
            font-weight: 700 !important
        }

        #purposes-container .purposes-sub-container p:not(:last-of-type) {
            margin-bottom: 16px !important
        }
    </style>
    <style type="text/css"></style>
</head>

<body onkeydown="onKeyDown(event)" class="CheckoutMode-WBCheckoutForm3 CUG-ResBeatTestPortal CanManageOrgs CanManageProfiles CanLogin HandlesPermissionRequests events-hotelsforhope-com MemberAuthenticated PrivateSite MemberTypeInvalid booking-guidePage WK" id="theBody" data-gr-c-s-loaded="true">
    <div class="config-container">
        <div id="language">
            <div id="language-label" class="config-label"><span><img src="https://dev-static.hotelsforhope.com/ares/images/flags/us.svg" alt="US Flag">English</span>
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve">
                    <polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                </svg>
            </div>
            <div class="language-container">
                <div onclick="arnChangeTheme('standard')" value="standard" class="active-language"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/us.svg" alt="US Flag">English</div>
                <div onclick="arnChangeTheme('french')" value="french"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/france.svg" alt="French Flag">Français</div>
                <div onclick="arnChangeTheme('german')" value="german"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/germany.svg" alt="German Flag">Deutsch</div>
                <div onclick="arnChangeTheme('indonesia')" value="indonesia"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/indonesia.svg" alt="Indonesian Flag">Bahasa Indonesia</div>
                <div onclick="arnChangeTheme('mandarin')" value="mandarin"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/china.svg" alt="Chinese Flag">普通话</div>
                <div onclick="arnChangeTheme('tw_mandarin')" value="tw_mandarin"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/china.svg" alt="Chinese Flag">普通話傳統</div>
                <div onclick="arnChangeTheme('portuguese')" value="portuguese"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/portugal.svg" alt="Portugeuse Flag">Português</div>
                <div onclick="arnChangeTheme('spanish')" value="spanish"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/spain.svg" alt="Spanish Flag">Español</div>
                <div onclick="arnChangeTheme('thai')" value="thai"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/thailand.svg" alt="Thai Flag">ภาษาไทย</div>
                <div onclick="arnChangeTheme('vietnamese')" value="vietnamese"><img src="https://dev-static.hotelsforhope.com/ares/images/flags/vietnam.svg" alt="Vietnamese Flag">Tiếng Việt</div>
            </div>
        </div>
        <div class="currencies-container">
            <div class="config-label" id="currency-label"><span>USD - US Dollar</span>
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 50 80" xml:space="preserve">
                    <polyline fill="none" stroke="#333" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                </svg>
            </div>
            <div class="dropdown">
                <style>
                    .currency-content {
                        display: none;
                    }

                    .dropdown {
                        position: relative;
                    }
                </style>
                <div class="currency-content">
                    <h4>Top Currencies</h4>
                    <div class="top-currencies">
                        <span id="AUD"><strong>AUD</strong> - Australian Dollar</span>
                        <span id="CAD"><strong>CAD</strong> - Canadian Dollar</span>
                        <span id="EUR"><strong>EUR</strong> - Euro</span>
                        <span id="MXN"><strong>MXN</strong> - Mexican Peso</span>
                        <span id="GBP"><strong>GBP</strong> - British Pound Sterling</span>
                        <span id="USD" class="active-currency"><strong>USD</strong> - US Dollar</span>
                    </div>
                    <h4>All Currencies</h4>
                    <div class="all-currencies"><span id="AED"><strong>AED</strong> - United Arab Emirates Dirham</span><span id="AOA"><strong>AOA</strong> - Angolan Kwanza</span><span id="AMD"><strong>AMD</strong> - Armenian Dram</span><span id="ARS"><strong>ARS</strong> - Argentine Peso</span><span id="AUD"><strong>AUD</strong> - Australian Dollar</span><span id="AWG"><strong>AWG</strong> - Aruban Florin</span><span id="AZN"><strong>AZN</strong> - Azerbaijani Manat</span><span id="BBD"><strong>BBD</strong> - Barbadian Dollar</span><span id="BHD"><strong>BHD</strong> - Bahraini Dinar</span><span id="BMD"><strong>BMD</strong> - Bermudian Dollar</span><span id="BRL"><strong>BRL</strong> - Brazilian Real</span><span id="BSD"><strong>BSD</strong> - Bahamian Dollar</span><span id="CAD"><strong>CAD</strong> - Canadian Dollar</span><span id="CHF"><strong>CHF</strong> - Swiss Franc</span><span id="CLP"><strong>CLP</strong> - Chilean Peso</span><span id="CNY"><strong>CNY</strong> - Chinese Yuan</span><span id="COP"><strong>COP</strong> - Colombian Peso</span><span id="CRC"><strong>CRC</strong> - Costa Rican Colón</span><span id="CZK"><strong>CZK</strong> - Czech Republic Koruna</span><span id="DKK"><strong>DKK</strong> - Danish Krone</span><span id="DZD"><strong>DZD</strong> - Algerian Dinar</span><span id="EGP"><strong>EGP</strong> - Egyptian Pound</span><span id="EUR"><strong>EUR</strong> - Euro</span><span id="FJD"><strong>FJD</strong> - Fijian Dollar</span><span id="GBP"><strong>GBP</strong> - British Pound Sterling</span><span id="HKD"><strong>HKD</strong> - Hong Kong Dollar</span><span id="HUF"><strong>HUF</strong> - Hungarian Forint</span><span id="IDR"><strong>IDR</strong> - Indonesian Rupiah</span><span id="ISK"><strong>ISK</strong> - Icelandic Króna</span><span id="ILS"><strong>ILS</strong> - Israeli New Shekel</span><span id="INR"><strong>INR</strong> - Indian Rupee</span><span id="JPY"><strong>JPY</strong> - Japanese Yen</span><span id="KGS"><strong>KGS</strong> - Kyrgyzstani Som</span><span id="KRW"><strong>KRW</strong> - South Korean Won</span><span id="KWD"><strong>KWD</strong> - Kuwaiti Dinar</span><span id="KYD"><strong>KYD</strong> - Cayman Islands dollar</span><span id="KZT"><strong>KZT</strong> - Kazakhstani Tenge</span><span id="LVL"><strong>LVL</strong> - Latvian Lats</span><span id="MAD"><strong>MAD</strong> - Moroccan Dirham</span><span id="MXN"><strong>MXN</strong> - Mexican Peso</span><span id="MYR"><strong>MYR</strong> - Malaysian Ringgit</span><span id="NGN"><strong>NGN</strong> - Nigerian Naira</span><span id="NOK"><strong>NOK</strong> - Norwegian Krone</span><span id="NZD"><strong>NZD</strong> - New Zealand Dollar</span><span id="OMR"><strong>OMR</strong> - Omani Rial</span><span id="PAB"><strong>PAB</strong> - Panamanian Balboa</span><span id="PGK"><strong>PGK</strong> - Papua New Guinean Kina</span><span id="PHP"><strong>PHP</strong> - Philippine Peso</span><span id="PLN"><strong>PLN</strong> - Polish Zloty</span><span id="QAR"><strong>QAR</strong> - Qatari Rial</span><span id="RON"><strong>RON</strong> - Romanian Leu</span><span id="RUB"><strong>RUB</strong> - Russian Ruble</span><span id="SAR"><strong>SAR</strong> - Saudi Riyal</span><span id="SEK"><strong>SEK</strong> - Swedish Krona</span><span id="SGD"><strong>SGD</strong> - Singapore Dollar</span><span id="THB"><strong>THB</strong> - Thai Baht</span><span id="TRY"><strong>TRY</strong> - Turkish Lira</span><span id="TTD"><strong>TTD</strong> - Trinidad and Tobago Dollar</span><span id="TWD"><strong>TWD</strong> - New Taiwan Dollar</span><span id="UAH"><strong>UAH</strong> - Ukrainian Hryvnia</span><span id="USD"><strong>USD</strong> - US Dollar</span><span id="VEF"><strong>VEF</strong> - Venezuelan Bolívar</span><span id="VND"><strong>VND</strong> - Vietnamese Dong</span><span id="ZAR"><strong>ZAR</strong> - South African Rand</span></div>
                </div>
            </div>
        </div>

    </div>
    <!--[if IE]><script>Element.addClassName(document.body, "IE")</script><![endif]-->
    <script>
        if (navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1) {
            Element.addClassName(document.body, "WK");
        }
    </script>
    <script>
        function tagBodyMobile() {
            if (document.viewport.getWidth() < 805)
                $(document.body).addClassName("mobile");
            else $(document.body).removeClassName("mobile");
        }
        tagBodyMobile();
        Event.observe(window, "resize", tagBodyMobile);
    </script>

    <!-- 
Booking Engine by Alliance Reservations Network http://www.alliancereservations.com
-->
    <div id="ajaxStatus" style="display:none;">Loading...</div>
    <script type="text/javascript">
        /*<![CDATA[*/
        Element.observe(window, "load", function() {
            Ajax.Responders.register({
                onCreate: function(request) {
                    if ($("ajaxStatus"))
                        $("ajaxStatus").show();

                },
                onComplete: function(request) {
                    if ($("ajaxStatus"))
                        $("ajaxStatus").hide();
                }
            });
        });
        /*]]>*/
    </script>

    <form accept-charset="utf-8" method="post" action="https://events.hotelsforhope.com/v6/booking-guide" id="formChangeTheme" style="display:none;" data-children-count="1"><input id="inputChangeTheme" name="4" type="text" class="text"><button id="buttonChangeTheme" type="submit" class="submit">Change Theme</button>
        <div><input name="_s" value="25KReEkzRh9Gowta" type="hidden" class="hidden"><input name="_k" value="W_jwCndb" type="hidden" class="hidden"><input name="siteId" value="62011" type="hidden" class="hidden"><input name="theme" value="standard" type="hidden" class="hidden"></div>
    </form>
    <script type="text/javascript">
        /*<![CDATA[*/
        function arnChangeTheme(sThemeName) {
            jQuery("#inputChangeTheme").val(sThemeName);
            jQuery("#buttonChangeTheme").click();
        } /*]]>*/
    </script><!-- Google Tag Manager -->
    <script type="text/javascript" class="_iub_cs_activate-inline _iub_cs_activate-activated" async="false">
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-PVTQ8XV');
    </script>
    <div></div>
    <!-- End Google Tag Manager -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=UA-21296367-2&amp;_iub_cs_suppressed=1" class="_iub_cs_activate _iub_cs_activate-activated" async="false"></script>
    <div></div>
    <script type="text/javascript" class="_iub_cs_activate-inline _iub_cs_activate-activated" async="false">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-21296367-2');
    </script>
    <div></div>
    <script src="https://cdn.jsdelivr.net/npm/places.js@1.18.1"></script>
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
    <link rel="stylesheet" type="text/css" href="https://static.hotelsforhope.com/ares/styles/styles.css">

    <script>
        jQuery(document).ready(function() {
            jQuery.each(jQuery(".ArnPages #batch"),
                function(index, batch) {
                    batch = jQuery(batch);
                    batch.html(batch.html().replace("&lt;&lt;", "<span class=\"pagesPrev\">Prev</span>").replace("&gt;&gt;", "<span class=\"pagesNext\">Next</span>").replace(/&nbsp;(\d+)&nbsp;/, "<span class=\"active-page\">&nbsp;$1&nbsp;</span>"));
                });
        });
    </script>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/ares/arn_html/includes/header.php'; ?>

    <div class="subHeaderContainer">
        <div class="subHeader"><a href="https://events.hotelsforhope.com/v6" class="refineLink"><span class="refine"><img src="//media.travsrv.com/appSkins/64/v6/themes/global/skins/brownstone/images/icons/search.png" class="searchIcon"></span><span class="translateMe">Search</span></a></div>
    </div>
    <div class="ArnSupportLinks ArnSupportTop"><a class="ARN_ServiceLinks searchLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;5" target="_blank">Search</a><span class="dvd"> | </span><a class="ARN_ServiceLinks lowRateLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;6" target="_blank">Low Rate Guarantee</a><span class="dvd"> | </span><a class="ARN_ServiceLinks faqLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;7" target="_blank">FAQ</a><span class="dvd"> | </span><a class="ARN_ServiceLinks termsLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;8" target="_blank">Terms &amp; Conditions</a><span class="dvd"> | </span><a class="ARN_ServiceLinks privacyLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;9" target="_blank">Privacy Policy</a><span class="dvd"> | </span><span class="dvd"> | </span><a class="ARN_ServiceLinks cancelLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;11" target="_blank">Cancel/Modify</a><span class="dvd"> | </span><a class="ARN_ServiceLinks ArnPageLink static-booking-guideLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;12" target="_blank">Booking Guide</a><span class="dvd"> | </span><a class="ARN_ServiceLinks ArnPageLink static-rewards-guideLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;13" target="_blank">Rewards Guide</a></div>
    <div class="ArnSubPage WBStaticForm static-booking-guide">
        <div id="booking-guide" class="guide-container">
        </div>
    </div>
    <div class="ArnSupportLinks ArnSupportBottom"><a class="ARN_ServiceLinks searchLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;14" target="_blank">Search</a><span class="dvd"> | </span><a class="ARN_ServiceLinks lowRateLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;15" target="_blank">Low Rate Guarantee</a><span class="dvd"> | </span><a class="ARN_ServiceLinks faqLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;16" target="_blank">FAQ</a><span class="dvd"> | </span><a class="ARN_ServiceLinks termsLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;17" target="_blank">Terms &amp; Conditions</a><span class="dvd"> | </span><a class="ARN_ServiceLinks privacyLink iubenda-nostyle no-brand iubenda-embed" href="https://www.iubenda.com/privacy-policy/14257085" target="_blank">Privacy Policy</a>
        <script type="text/javascript" src="https://cdn.iubenda.com/iubenda_i_badge.js"></script><span class="dvd"> | </span><a href="https://www.iubenda.com/privacy-policy/14257085/cookie-policy" class="cookie-policy-link iubenda-nostyle no-brand iubenda-embed" title="Cookie Policy ">Cookie Policy</a>
        <script type="text/javascript" src="https://cdn.iubenda.com/iubenda_i_badge.js"></script><span class="dvd"> | </span><a class="ARN_ServiceLinks supportLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;19" target="_blank">Support</a><span class="dvd"> | </span><a class="ARN_ServiceLinks cancelLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;20" target="_blank">Cancel/Modify</a><span class="dvd"> | </span><a class="ARN_ServiceLinks ArnPageLink static-booking-guideLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;21" target="_blank">Booking Guide</a><span class="dvd"> | </span><a class="ARN_ServiceLinks ArnPageLink static-rewards-guideLink" href="https://events.hotelsforhope.com/v6-guide?_s=25KReEkzRh9Gowta&amp;_k=W_jwCndb&amp;siteId=62011&amp;theme=standard&amp;22" target="_blank">Rewards Guide</a>
        <div class="pb-container">
            <a href="https://www.hotelsforhope.com/" target="_blank"><img src="https://dev-static.hotelsforhope.com/ares/images/h4h/pb-h4h.png" alt="Powered by Hotels for Hope logo"></a>
        </div>
    </div>
    <script async="" src="https://dev-static.hotelsforhope.com/ares/dist/resbeat_test-62011.js"></script>
    <script src="https://cdn.lr-ingest.io/LogRocket.min.js" crossorigin="anonymous"></script>
    <script>
        window.LogRocket && window.LogRocket.init('von3vd/h4h-portals');
    </script>
    <script type="text/javascript">
        /*<![CDATA[*/
        $$("a").each(function(link) {
            if (link.href) link.href = link.href.replace("~sessionid~", "25KReEkzRh9Gowta")
        }); /*]]>*/
    </script><noscript>
        <style>
            body {
                background-color: white;
                background-image: none;
            }

            .ArnSearchContainerMainDiv,
            .ArnHeader,
            .ArnSupportLinks,
            .ArnFooter,
            .ArnSubPage {
                display: none;
            }
        </style>
        <h1 style="text-align: center;font-size:80px;font-family: Lucida Grande" ,Arial; width: 100; height:100; position: absolute; top: 0px; left: 0px;background-color:white;margin:auto auto;line-height:1.2em;padding-top: 100px;">This site will not function correctly with JavaScript disabled, please re-enable JavaScript.</h1>
    </noscript>
    <script src="//media.travsrv.com/appSkins/62011/v6/themes/standard/footer.js?8255+17081" type="text/javascript">
        /*<![CDATA[*/
        nil /*]]>*/
    </script><span style="display:none">add footer-site.js to theme directory for sitewide global javascript</span>
    <script>
        /*<![CDATA[*/
        (function() {})() /*]]>*/
    </script>
    <style>
        /* Header */

        header {
            justify-content: space-between;
            background: #fff;
        }

        .logo img {
            max-width: 300px;
        }

        body,
        #thePropertyAmenities legend,
        .WBRateGuaranteeForm2 .zsFormClass {
            background-color: #fff;
        }

        /* Primary Background Color */
        #searching h2:after,
        #theConfirmationButton,
        .ArnPrimarySearchContainer,
        .ArnShowRatesLink,
        .ArnTripAdvisorDetails.HasReviews .ratingCount,
        .CreateAnAccountAction,
        .RootBody #theOtherSubmitButton,
        .SimpleSearch,
        .WBForgotPasswordFormActions .submit,
        .WBLoginFormActions .submit,
        .WBValidatedRegistrationFormActions .submit,
        .arn-leaflet-reset-button,
        .bookRoom,
        .HoldRoomsForm .submit,
        #datePromptContainer+.SimpleSearch .CheckRates .submit,
        .yui3-skin-sam .yui3-calendar-day:hover,
        .sort-wrapper .active,
        .sort-wrapper a:hover {
            background: #215853
        }

        @media screen and (max-width:1105px) {

            #arnCloseAnchorId,
            #arnCloseAnchorId:active,
            #arnCloseAnchorId:focus,
            #arnCloseAnchorId:hover {
                border: 1px solid #215853
            }

            .closeMap {
                border: 1px solid #fff !important;
                background-color: #215853 !important;
                color: #fff !important;
            }
        }

        @media screen and (max-width:800px) {

            #commands a:active,
            #commands a:focus,
            #commands a:hover,
            #commands button:active,
            #commands button:focus,
            #commands button:hover,
            .sort-wrapper a:before,
            .sort-wrapper a.active-filter:before,
            .sort {
                background: #215853
            }
        }

        #searching,
        #theConfirmationButton,
        .HoldRoomsForm .submit,
        .ArnPrimarySearchContainer,
        .ArnShowRatesLink,
        .ArnTripAdvisorDetails.HasReviews .ratingCount,
        .SinglePropDetail .CheckRates .submit,
        .CreateAnAccountAction,
        .RootBody #theOtherSubmitButton,
        .SearchHotels #theSubmitButton,
        .SimpleSearch,
        .WBForgotPasswordFormActions .submit,
        .WBLoginFormActions .submit,
        .WBValidatedRegistrationFormActions .submit,
        .arnMapPopup .rate,
        #datePromptContainer+.SimpleSearch .CheckRates .submit,
        .bookRoom,
        .sort-wrapper .active,
        .sort-wrapper a:hover {
            color: #fff
        }

        span.exclusive-rate {
            background: #e2ad37;
            color: #fff;
        }


        @media screen and (max-width:1105px) {

            #arnCloseAnchorId,
            #arnCloseAnchorId:active,
            #arnCloseAnchorId:focus,
            #arnCloseAnchorId:hover {
                color: #215853
            }
        }

        @media screen and (max-width: 800px) {

            #commands a:active,
            #commands a:focus,
            #commands a:hover,
            #commands button:active,
            #commands button:focus,
            #commands button:hover,
            .sort {
                color: #fff
            }
        }

        .holdRoom,
        .reviewCount a,
        #theAdditionalEmailsLink a,
        #theOtherSubmitButton,
        .SinglePropDetail .ArnRateCancelAnchor,
        .open-modal,
        .lowest-rate-link,
        .SinglePropDetail .RateCalendarPopupAnchor,
        .ArnContentContainer legend,
        #theRoomsOnHold h2,
        .confirmation-messaging a,
        .receiptLink,
        .returnResultsInfo a,
        .supportInfo a,
        .SinglePropDetail #show-more-or-less {
            color: #215853;
        }

        .percentSavings {
            color: #e2ad37;
        }

        input#theSubmitButton,
        .RootBody #theOtherSubmitButton,
        .bookRoom,
        .arn-leaflet-reset-button,
        input#theConfirmationButton,
        a.ArnShowRatesLink {
            background: #215853;
            color: #fff;
            border: 1px solid #215853;
        }

        .CheckRates input.submit,
        .CheckRates input.submit,
        .CheckRates input.submit {
            background: #215853;
            color: #fff;
        }

        input#theSubmitButton:hover,
        input#theSubmitButton:focus,
        input#theSubmitButton:active,
        #theOtherSubmitButton:hover,
        #theOtherSubmitButton:focus,
        #theOtherSubmitButton:active,
        .RootBody #theOtherSubmitButton:hover,
        .RootBody #theOtherSubmitButton:focus,
        .RootBody #theOtherSubmitButton:active,
        .bookRoom:hover,
        .bookRoom:focus,
        .bookRoom:active,
        .arn-leaflet-reset-button:hover,
        .arn-leaflet-reset-button:focus,
        .arn-leaflet-reset-button:active,
        input#theConfirmationButton:hover,
        input#theConfirmationButton:focus,
        input#theConfirmationButton:active,
        a.ArnShowRatesLink:hover {
            background: #fff;
            color: #215853;
            border: 1px solid #215853;
        }

        .CheckRates input.submit:hover,
        .CheckRates input.submit:focus,
        .CheckRates input.submit:active {
            background: #fff;
            color: #215853;
        }

        .SinglePropDetail #moreRatesLink {
            color: #215853;
            border-color: #215853;
        }

        .SinglePropDetail #moreRatesLink:hover {
            background-color: #215853
        }

        @media screen and (max-width:800px) {
            #theBookingPage legend#policies-legend {
                color: #215853
            }
        }

        header {
            border-bottom: 3px solid #215853
        }

        .arnMapMarker.contracted-pin,
        .arnMapMarker.contracted-pin.highlight {
            border: 1px solid #fff;
            background: #e2ad37;
            color: #fff;
        }

        .arnMapMarker.contracted-pin:hover {
            border: 1px solid #e2ad37;
            background: #fff;
            color: #e2ad37;
        }

        .arnMapMarker.contracted-pin .arnMapMarkerTriangle {
            border-top-color: #e2ad37;
        }

        #theOtherSubmitButton,
        .ArnSecondarySearchOuterContainer select,
        .ArnShowRatesLink,
        .RootBody #theOtherSubmitButton,
        .bookRoom,
        .sort,
        .HoldRoomsForm .submit {
            border: 1px solid #215853
        }

        .holdRoom {
            border: 1px solid #215853
        }

        @media screen and (max-width:1105px) {

            #arnCloseAnchorId,
            .sort {
                border: 1px solid #215853
            }
        }

        @media screen and (max-width:800px) {
            .sort-wrapper a:before {
                border: 2px solid #215853
            }
        }

        .active-page {
            background: #215853 !important;
            color: #fff !important;
            border: 1px solid #215853 !important;
        }
    </style>


    <style>
        .RootBody {
            background: #fff;
        }
    </style>
    <style>
        *,
        .taxFeeRow td,
        .discount td,
        .totalRow td,
        .balanceDueRow td,
        .guestNameFields td {
            font-family: Montserrat, 'Helvetica';
        }
    </style>
    <style>
        .ArnPropClass,
        #PropertyClassesContainer {
            display: block !important;
        }
    </style>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/ares/arn_html/includes/footer.php'; ?>

    <link href="https://dev-static.hotelsforhope.com/ares/site_configs/resbeat_test-62011/62011.css" rel="stylesheet"><iframe src="https://cdn.iubenda.com/cs/bridge/iframe_bridge-1.2.0.html?origin=https%3A%2F%2Fevents.hotelsforhope.com%2Fv6%2Fbooking-guide&amp;meth=%22getGoogle%22&amp;c_name=%22_iub_cs-14257085-granular%22" style="width:0px; height:0px; display:none; visibility:hidden"></iframe><iframe src="https://cdn.iubenda.com/cs/bridge/iframe_bridge-1.2.0.html?origin=https%3A%2F%2Fevents.hotelsforhope.com%2Fv6%2Fbooking-guide&amp;meth=%22compact%22" style="width:0px; height:0px; display:none; visibility:hidden"></iframe>
</body>
<loom-container id="lo-engage-ext-container">
    <div></div>
    <loom-shadow classname="resolved"></loom-shadow>
</loom-container>

</html>