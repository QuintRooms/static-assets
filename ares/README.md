## Contents

1. [Ares Portal Configuration Keys](#Ares-Portal-Configuration-Keys)
2. [Components](#Components)
3. [Email](#Email)
4. [EsLint/Prettier](#EsLint-&-Prettier)
5. [Build Tools](#Build-Tools)
6. [Styles](#Styles)
7. [Webpack](#Webpack)
8. [Testing](#Testing)
9. [Build a Portal](#Build-a-Portal)

# Ares Portal Configuration Keys

Documented below are the configuration keys for the Ares portal build system. Each config will enable or disable certain features within a portal.


## Contents



1. [Autocomplete](#Autocomplete)
2. [Site Type](#Site-Type)
3. [Property Thumbnail Image Tags](#Property-Thumbnail-Image-Tags)
4. [Showing Tax Inclusive Rates](#Showing-Tax-Inclusive-Rates)
5. [Dayjs Date format](#Dayjs-Date-format)
6. [Property Reviews Page Position](#Property-Reviews-Page-Position)
7. [Property Filtering](#Property-Filtering)
8. [Language](#Language)
9. [Currency](#Currency)
10. [Page Load Date Prompt](#Page-Load-Date-Prompt)
11. [Social Sharing](#Social-Sharing)
12. [Assets (Logos/Images)](#Assets)
13. [Theme](#Theme)
14. [Fonts](#Fonts)
15. [Advertizing](#Advertizing)
16. [Hybrid Compensation Model Text Changes](#heading=h.p09xqhqcpigk)
17. [Search Page Header Text](#heading=h.2wk6kclacn79)
18. [Custom Emails](#Custom-Emails)




### **Autocomplete**

(Boolean)


```
algolia_app_id: 'plCZXR0GZ7J1',
algolia_api_key: '123445',
```


Ares autocomplete is migrating to use Google Places autocomplete as of April 2021.

If a portal has the key “use_google_autocomplete: true”, it will use Google instead of the default that is Algolia.

Algolia requires an app ID and and API key, both are required in a portal’s config.js file. Resbeat sites use a different app ID and API key so that the searches from those portals can be tracked separately from our event portals.

Algolia log in information can be found [here](https://docs.google.com/document/d/1JAM-oDEG-y9PErLlCmBxD1pra8zLFxQpPNNAw9PntwQ/edit?usp=sharing).


### **Site Type**

(String)


```
site_type: 'lodging',
lodging: {
            event_id: '',
            event_name: '',
            event_dates: '',
            redirect_date: '',
            redirect_url: '',
            is_lrg: false,
        }
cug: {
    is_cug: false,
    show_points: false,
    allow_registration: false,
}
```


The site type indicates whether a site is a lodging - linked to an event with contracted inventory, or a CUG (Closed User Group) - a site that shows inventory for any location the user searches, the user must be a member/signed up to legally be showed discounted rates.

Within the lodging object, there are two keys, “redirect_date” and “redirect_url”, we use these when a site is old/expired to automatically redirect any user that finds their way to the site, to the current site. For example, ACL Festival portal from 2020 should be redirected to ACL Festival 2021.


### **Property Thumbnail Image Tags**

(string)


```
exclusive_rate_text: 'Exclusive Rate',
partner_hotel_text: 'Partner Hotel',
host_hotel_text: 'Host Hotel',
```


Within the ARN Groups app, an ops team member can customize the long URL in order to specify the search criteria for an events’ portal. Within that URL, the parameter “properties” can be used to order specific properties to the top of the search results. Each property ID can be prepended with an X or a Y, doing this will enable certain cong keys to be active on that property’s thumbnail image.

For Example:


```
&properties=x209332,y1235556,x209333,x13333
```


“X” will enable the “`partner_hotel_text`”, “Y” will enable “`host_hotel_tex`t”. The values for each of these keys can be whatever text the event manager wants. (These keys probably should have been called x_prop_tag and y_prop_tag)

As well as the property tags, we also have the contracted property tag, this is to signify that a specific property has contracted rates and are exclusive to the event. It is represented by the “exclusive_rate_text” key. When A property is contracted, it will have a class added to it in the dom to enable this tag.

Find URL parameter documentation [here](https://docs.google.com/document/d/12TO-uBpY7YA9XPkFEeJAu_TKtbr-3AtpPNzXF8D1mZk/edit?usp=sharing) and [here](https://implementation-guide.alliancereservations.com/booking-engine-url-parameters.html).


### **Showing Tax Inclusive Rates**

(Boolean)


```
show_tax_inclusive_rates: false,
```



### **Dayjs Date Format**

(string)


```
dayjs_date_format: 'M/D/YYYY',
```


The Ares portal uses dayjs to calculate dates, some sites use a european style date format. Simply set this format here.


### **Property Review Page Position**

(Boolean)


```
reviews_before_info: true,
```


This boolean will switch between the reviews section on the property page being either below or above the map.


### **Property Filtering**

(Boolean)

```
show_stars: false,
show_property_type: false,
```


The stars and property type filers can have their display toggled using a boolean value. These filters will appear on the RootBody search page and the search results page.


### **Language**

(Boolean)
```
 show_language_select: false,
```
Turns on the language select component in the header of a portal.


### **Currency**

(Boolean), (String)


```
show_currency_select: false,
currency: 'USD',
```


Turns on the currency select component in the header and sets the default currency.


### **Page Load Date Prompt**

(Boolean)


```
show_date_prompt: false,
```


*Not Functional*


### **Social Sharing**

(Boolean)


```
has_social_sharing: true,
```


*Not Functional*


### **Assets**

(String)


```
fav_icon_url
     header: {
         logo_file_location: `${env_path.path}/site_configs/${directory_name}/img/logo.png`,
            logo_outbound_url: 'http://www..com/',
        },
   map_marker_image_url:`${env_path.path}/site_configs/${directory_name}/img/favicon.png`,
```


These config keys are the paths to a portals’ images. All images should be located in the events’ directory in a directory called `'img'`. We use the `path` property of the `env_path` object to set our paths between local/develop/production environments. The `directory_name `is a config key within the same file.


### **Theme**

(String)


```
theme: 'light',['dark']
```


We have built in two options for a portals’ theme: light and dark. Light is the most common, dark will swap the background to be black with white text where appropriate.

See an example of a dark theme [here](https://book.hofhotels.com/group-event?id=46202&utm_source=internal).


### **Fonts**

(String)


```
google_font_url: '//fonts.googleapis.com/css?family=Montserrat:100,500,700',
```


Simply sets the font for the portal.


### **Advertizing**

```
    ads: {
            sidebar_ad: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
            between_property_ad: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
            confirmation_page_top: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
            confirmation_page_bottom: {
                is_active: false,
                image_url: '',
                outbound_url: '',
            },
        },
```



### **Hybrid Compensation model**

(Boolean)
Having the Hybrid Compensation Model set to true changes the text in two places on the checkout page.

See an example on [this](https://bookrooms.formula1.com/group-event?id=46260&utm_source=internal) portal (on the Checkout page)

```
uses_hybrid_compensation_model: true,
```

### **Search Page Header Text**

(String)

These two keys represent the text that is shown on the search (.RootBody) page.

```
 root_page_header_text: 'Start Your Search',
 root_page_subheader_text: 'Reservations at 600K+ Hotels at Unbeatable Rates',
```

### **Custom Emails**

(Boolean)

When `has_custom_emails` is set to `true`, it will trigger a conditional in the [build_emails](#Build-Email-Script) script that will use the custom [mjml](#MJML) file inside that site's directory instead of the default confirmation email template.

For a good example of the use of custom emails, see the RoomCash emails directory.

```
has_custom_emails: true,
```


            percent_off_text: 'off',

            show_percent_savings: false

        is_resbeat_client: false,

        confirmation_email_from: 'Quint Rooms',

### **Email Logo**

(String)

Sometimes a site's logo may not work with the default confirmation email template - for example if the logo has white text, the logo will not be visible (the default email template has a white background), therefore a second logo can be provided by specifiying the path to it as the value for the below key. The [email build script](#Build-Email-Script) will use this logo if the config key exists.

```
Email_logo_file_location: ‘path’
```

# Components


## Contents



1. [Group Booking Banner](#Group-Booking-Banner)
2. [Landing Page](#Landing-Page)
3. [Popup](#Popup)
4. [Property Image Replacement](#Property-Image-Replacement)




### **Group Booking Banner**

(Boolean, String)


```
has_group_booking_banner: true,
group_booking_form_url: 'https:{jorform url}?bookingPortal=BJAC%20Las%20Vegas',
```


The group booking banner component will add a full width banner below the header of a portal with the message:


“_Need 10+ rooms for {event_name} or another event? We're here to help you secure great rates._”

NOTE: {event_name} is taken from that portal’s config `event_name.`

The parameter `bookingPortal `in the Jot Form url is simply a reference to the event name so conversion can be tracked in Google Analytics.


### **Landing Page**

(Boolean, String)

Config.js:


```
has_landing_page: true,
hide_search_on_landing_page: true,
landing_page_events: [
             {
                 name: ',
                 display_date: ',
                 end_date: '', // M/D/YYYY
                 portal_url: '',
             },
```


{site_id}.js:


```
new LandingPage(site_config.landing_page_events, site_config.hide_search_on_landing_page).init();
```


The landing page component changes the DOM of the RootBody (search) page to show tiles for each event object that is passed into the `landing_page_events` array. The actual search field along with checkin/out can optionally be hidden with the boolean config `hide_search_on_landing_page. `See an example of a landing page [here](https://events.quintrooms.com/v6/?siteid=64189&utm_source=internal).


### **Popup**

-Child.js file
```
Import “popUp” from js/components/event_popup/multiple-event-weekends

popUp(
    site_config,
    'Sakhir Grand Prix',
    'https://bookrooms.formula1.com/group-event?id=44125&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Bahrain%202020',
    'https://bookrooms.formula1.com/group-event?id=44126&utm_source=Website&utm_medium=Index%20Page&utm_campaign=Sakhir%202020'
);
```




The popup will display a message on load of a portal, it is used to switch between two weekends of an event. For example ACL weekend 1 & 2.


### **Property Image Replacement**


```
prop_image_replacement: [
            {
              prop_id: '663849',
              Image_url: 'https://media.travsrv.com/663849/1089261127_804480.jpg',
            },
        ],
```


This component will update the thumbnail image for a given property on the search results page. Ares has code that sets each property to show the `'featureImage'` from the API but sometimes those images are not desirable. The property image replacement is simply a method that is evoked when `prop_image_replacement `is truthy. The arry takes objects that have the property id for the hotel that needs its image replacing and the url for the image to be added.


# Email


## Contents



1. [MJML](#MJML)
2. [Build Email Script](#Build-Email-Script)
3. [Site names Json File](#Site-names-Json-File)
4. [Integromat Confirmation Email Scenario](#Integromat-Confirmation-Email-Scenario)
5. [Custom Email](#Custom-Email)


### **MJML**
MJML is a markup language designed to reduce the pain of coding a responsive email. Its semantic syntax makes it easy and straightforward and its rich standard components library speeds up your development time and lightens your email codebase. MJML’s open-source engine generates high quality responsive HTML compliant with best practices.

Find MJML documentation [here](https://mjml.io/documentation/).

Withing the Ares repo, all mjml is compiled into HTML. To compiles a single mjml file into an HTML file on demand, run the following command:

```
npm run mjml [../dir/emails/input.mjml] -0 [../dir/emails/output.html]

```

*Note: The npm command `mjml` is a custom script in `package.json` that is just running `./node_modules/.bin/mjml` before the specified input file name.


### **Build Email Script**
Located in: `ares/js/build_tools/build-emails.js`

This script will be called for each site being built through webpack when in either Develop or Production environment.

The script handles a few things:
- It gathers key data for the current site like primary/secondary colors, logo path and client name etc and creates an object out of that for later use.
- It will create an `emails` directory inside that site's directory, within that emails directory a json file is created to hold the object with key data, and, unless the site is using a [custom email design](#Custom-Emails), will create a confirmation email in HTML using the client's colors and logo.
- Adds the name and site ID of the current site to `site-names.json` in `ares/js/json/site-names.json`. For more info on this, see [Site names Json File](#Site-names-Json-File)

### **Site names Json File**

This file exists purely to serve as a helper to the tool we use to parse and send the confirmation email to customers using [Integromat](www.integromat.com). It is just a list of every site that has an email HTML file that the Integromat scenario checks against to then do a Get request for that HTML.

### **Integromat Confirmation Email Scenario**
Integromat handles a few things in regards to sending a confirmation email. First it receieves the data payload from our CRM (ZOHO) then it checks to see if that site ID has its own confirmation.HTML. If it doesn't, it will send a fallback confirmation email (located in: `ares/emails/default_templates_mjml/quintrooms.mjml`) as well as an email to `dev@quintrooms` with a description of the error that caused it to send the fallback email.

See the confirmation email workflow inside Integromat [here](https://www.integromat.com/scenario/2011949/edit).


### **Custom Email**
As long as a site has the following config:
```
has_custom_emails: true,
```
For every file within a site's `/emails` directory that has the file extension `.mjml`, a function within the [build-emails.js script](#Build-Email-Script) will be run on that file. It will compile it into HTML using the site specific colors and logo.

# EsLint & Prettier


## Contents



1. [About](#About)
2. [EsLint](#EsLint)
3. [Prettier](#Prettier)


### **About**
The Ares codebase uses EsLint and Prettier to give our code a uniform style. Both Eslint and Prettier are set to run/format on a git hook. This means that when you attempt to commit code, if there are significant issues, it won't allow it. If issues exist that Prettier can handle, it will fix them for you. To view the code for the on commit hook, look in `package.json` of Static Assets.

For more documentation on the pre-commit hook, see [this](https://docs.google.com/document/d/1Z1bUbdvngcxNKbKeHSnOwxBAZGHN5cDAhHasgotjyTk/edit?usp=sharing) SOP.

```
"husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{js, html}": [
            "eslint --fix",
            "prettier --single-quote --write",
            "npm run test --verbose --passWithNoTests --findRelatedTests",
            "git add"
        ]
    },
```

### **EsLint**
Our EsLint setup extends the Air-Bnb style guide. See the `.eslintrc.js` file in the root of Static Assets for more specific rules we have applied.

Documentation: [EsLint](https://eslint.org/)

### **Prettier**
Prettier formats our code to keep spacing and other such things uniform within the repo. See the `.prettierrc` file in the root of Static Assets to add to or view the rules.
Documentation: [Prettier](https://prettier.io/docs/en/index.html)

# Build Tools

## Contents

1. [About](#About)
2. [entry-points.js](#entry-points.js)
3. [path.js](#path.js)
4. [site-build.js](#site-build.js)

### **About**
The directory `build_tools`, located: `ares/js/build_tools`, is where files that aid us in creating sites - general helper tools.

Below is a description of the most commonly used.
### **entry-points**
Entry points is where every site within Ares is listed. The position of where this site is listed within this file dictates is environment/what path and urls its assets are given. For example:

Develop Environment:
```
logo_path: 'https://dev-static.quintrooms/ares/logo'
```
Local Environment:
```
logo_path: '../../logo'
```

As a site is built and developed, it should be moved to the list of Production environment sites and commented out.
### **path.js**
Path.js sets the path for asset paths (as described in [entry-points](#entry-points)) depending on the `process.env.NODE_ENV` (our `NODE_ENV` is set based on which script from `package.json` is run - `npm run local/dev/prod`)
### **site-build.js**

The `site-build.js` script will create all necessary files for a new site. Simply type:
```
npm run build-site
```
into the command line and answer the questions.

# Styles

## Contents


1. [Sass/Scss](#Sass/Scss)
2. [base-styles](#base-styles)
3. [config-styles](#config-styles)
4. [sass-functions](#sass-functions)
5. [Site Specific Styles](#Site-Specific-Styles) ([site_id].scss)

### **Sass/Scss**
All styles written in the Ares repo should be written in SCSS.

[Sass or Scss](https://sass-lang.com/guide) is a CSS extension that allos us to use variables, functions and nesting to make it quicker and easier to write styles. All styles written in Scss end up as CSS when a build is run. For Example, when adding colors to a site's `.scss` file, you won't see any CSS files within the `site_name/styles` directory. When the build is run, the Scss is compiled into CSS and eventually injected into the DOM on load of the page.

### **base-styles**
The `base-styles` directory holds the `.scss` files for three different types of sites. These styles aren't specific to a site (they do not hold client specific colors or logos etc), they simply apply styles that are consistent across all of our portals.

### **config-styles**
The `config-styles` directory holds `.scss` files that use the variables that are definied in each site's `/styles/[site_id].scss` file. If you look in a site's `/styles/[site_id].scss` file, you will see that the `base-styles.config.scss` file is imported AFTER the variables are definied.

### **sass-functions**
One major advantage of using Sass is that we are able to write functions just like we would in JavaScript or any other language.

See Sass docs on functions [here](https://sass-lang.com/documentation/at-rules/function)

*Note: In sass a `@function` returns a single response, a `@mixin` returns some styles that can be reused over and over - it's easy to get these confused with each other.

We currently only have one Sass function within the Ares repo. It is performs the same task as [path.js](#path.js) but for our assets in any sass files.

Here is an example:

-styles/12345.scss
```
$site_name: 'voodoo_21-60792';
$path: set-path($env);
$banner_image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(#{$path}/site_configs/#{$site_name}/img/banner.jpg) no-repeat center center / cover;
```
-styles/sass/sass-functions/func.scss
```
@function set-path($env) {
    @if ($env == 'local') {
        $path: '../../..';
        @return $path;
    }
    @if ($env == 'develop') {
        $path: 'https://dev-static.#{$domain}/ares';
        @return $path;
    }
    @if ($env == 'production') {
        $path: 'https://static.#{$domain}/ares';
        @return $path;
    }
}
```
-Webpack.config.js
```
 options: {
        sourceMap: false,
        additionalData: `$env: ${process.env.NODE_ENV};\n $domain: '${process.env.domain}';`,
},
```
There's a few things going on here, so let's start with the `$env`. The current environment is passed as a sass variable to our stylesheets when they are run through webpack (when running a build, `npm run local/dev/prod`). So when `npm run dev` is run, `$env` will equal `'develop'`.

Now in the `12345.scss` file we can see we have a few variables defined:
- $site_name
- $path
- $banner_image

`$path` is set to the returned value of the sass function `set-path($env)` called with the variable we mentioned about `$env`. The Sass function `set-path()` is simply taking the variable of $env (which holds a string) and returning the string inside which ever conditional matches $env's value.

We are then able to create `$banner_image` using [sass string inerpolation](https://sass-lang.com/documentation/interpolation), thus making our asset paths fully dynamic for whichever environment we choose to run the site in.

### **Site Specific Styles**

When a site is first built, the site specific sass stylesheet is where we add the brand/client colors and logos.

If you are building a site for the first time, I suggest throwing some colors in the variable values, updating the `.env` file to the new site details and running a local build. Try switching the colors between `$primary_color` and `$secondary_color` etc to see how these colors are implemented.

# Webpack
Webpack bundles all our code for each site together, into one convenient file (dist file). In the Ares set up, it takes its input from any uncommented sites in [Entry Points](#entry-points.js) (entry-points.js) for whichever environment you're building in. For each site running through Webpack, certain processes are performed on it using various [plugins](https://webpack.js.org/concepts/#plugins) and [loaders](https://webpack.js.org/concepts/#loaders). For example, this is where we convert any `.Scss` files that are run through Webpack into a `.css` file that is added to the current site's directory in `[site_name]/styles/[site_id].css`. Another example is the [sass-loader](https://www.npmjs.com/package/sass-loader) which is used to parse our Sass/Sccs and crucially, pass extra variables to Scss files using the sass-loader `options > additionalData`. See below:

```
{
    loader: 'sass-loader',
    options: {
        sourceMap: false,
        additionalData: `$env: ${process.env.NODE_ENV};\n $domain: '${process.env.domain}';`,
    },
}
```
# Testing

A test file can be created for any JavaScript file within Ares using [Jest](https://jestjs.io/docs/getting-started). For a good example of some Jest unit tests against an Ares file, see the `autocomplete` directory located: `ares/js/components/autocomplete`.

For a file you wish to also write tests for, create another file next to the file being tested and name it `[name].test.js`, import the file you want to test at the top, then write your unit tests.

All test suites within Ares can be run in the command line like so:
```
npm run test
```

*Note: when a pull request is made to the Develop branch, a GitHub action is performed to run all tests on the repo. If any tests fail, the pull request will fail.

# Build a Portal
Listed below are the steps that need to be taken when building a new portal. Many of these steps will refer to other items listed in this documentation. So it would be a good idea to have a read through it all first... or just wing it.

1. See [this](https://docs.google.com/document/d/1XU0msvclGuaBw6ToYxCqytQy17-_pz8Vso5jbA3QLoM/edit?usp=sharing) SOP document for creating and naming the site ID you wish to use for the new site.
2. Now you have the site ID and the record has been added to the CRM you can build the files for the site. If the site is for a new client, it's easiest to run the [Build site](#site-build.js) command in the command line. It will ask for the site ID and site name then create all the files necessary (site directory with img, js & styles child directories; a src file and an entry in [entry-points.js](#entry-points.js)) pre-populated with the specified ID and name. It will also ask if you want to update the `.env` file to show the new site locally - say `Y` to this and you will be able to view your the site before making it live.
3. When happy with the site locally, go to [entry-points.js](#entry-points.js) (located `ares/js/build_tools/entry-points.js`), cut and paste the line for the site and move it up to the `develop` environment object.
4. Now, in the command line, run `npm run dev`. This will do multiple things, it will compile the site's `.scss` files into `.css`, it will build an HTML confirmation email using the colors and logo from the scss file, and it will create a `dist` (compiled code) file in `ares/dist`.
5. You're ready to push to the dev server! Stage and commit the code, write a descriptive commit message and push.
6. The code and all assets for the new site is now on the QuintRooms dev server - `https://dev-static.quintrooms/ares`, the compiled file that Webpack created can be found using this path: `https://dev-static.quintrooms/ares/dist/[site_name]-[site_id].js`. Therefore this is the url we need to the Skin Editor for our site inside the `footer.html` file like so:

```
<script async src="https://dev-static.quintrooms/ares/dist/[site_name]-[site_id].js"></script>
```
7. Click `Save` followed by `Publish`. Now the site is live.
