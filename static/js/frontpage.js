$(document).ready(function() {
    // Common request options
    const requestOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ba329ea629mshac0d3dc662ede7ap16d897jsn19e9d55d9290',
            'X-RapidAPI-Host': 'odds-api1.p.rapidapi.com'
        }
    };

    // Function to capitalize the first letter of a string
    function capitalizeWords(string) {
        return string
            // Replace hyphens with spaces
            .replace(/-/g, ' ')
            .toLowerCase()
            //.toUpperCase()
            // Split the string into words
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    function formatUrlSegment(segment) {
        return segment.toLowerCase().replace(/\s+/g, '-');
    }

    // Assuming this for Soccer to simplify
    fetchCompetitions('soccer');
    fetchCompetitions('basketball');
    fetchCompetitions('tennis');
    fetchCompetitions('ice-hockey');
    fetchCompetitions('american-football');

    fetchCompetitions('aussie-rules');
    fetchCompetitions('baseball');
    fetchCompetitions('beach-volley');
    fetchCompetitions('boxing');
    fetchCompetitions('cricket');
    fetchCompetitions('darts');
    fetchCompetitions('field-hockey');
    fetchCompetitions('floorball');
    fetchCompetitions('futsal');
    fetchCompetitions('handball');
    fetchCompetitions('mma');
    fetchCompetitions('rugby-league');
    fetchCompetitions('rugby-union');
    fetchCompetitions('snooker');
    fetchCompetitions('squash');
    fetchCompetitions('table-tennis');
    fetchCompetitions('volleyball');
    fetchCompetitions('waterpolo');


    function fetchCompetitions(sport, submenu) {
            const requestOptions = {
            method: 'GET'
        };
        $.ajax({
            url: `api/v2/competitions?sport=${sport}`,
            ...requestOptions,
            success: function(response) {

                let countries = {};

                // Collect competitions by country
                $.each(response, function(index, item) {
                    let country = capitalizeWords(item.country);
                    if (!countries[country]) countries[country] = [];
                    countries[country].push(capitalizeWords(item.competition));
                });

                // After all data is fetched, populate the sidebar
                // Call the populateSidebar function here with the correct data
                populateSidebar(sport, countries);
            },
            error: function(xhr, status, error) {
                console.log("Error fetching data: " + error);
            }
        });
    }


    function populateSidebar(sport, countryData) {
        let sportSubmenu = $('#' + sport + '-sidebar').find('.sub-menu').first().empty();
        const countryToCode = {
        "australia": "au", "england": "gb-eng", "scotland": "gb-sct", "wales": "gb-wls", "burkina faso": "bf", "costa rica": "cf",
        "northern ireland": "gb-nir", "saudi arabia": "sa", "sierra leone": "sl", "south africa": "za", "south korea": "kr",
        "new zealand": "nz"
        };
        const countriesData = [{"name":"Afghanistan","alpha-2":"AF","country-code":"004"},{"name":"Åland Islands","alpha-2":"AX","country-code":"248"},
        {"name":"Albania","alpha-2":"AL","country-code":"008"},{"name":"Algeria","alpha-2":"DZ","country-code":"012"},{"name":"American Samoa","alpha-2":"AS","country-code":"016"},
        {"name":"Andorra","alpha-2":"AD","country-code":"020"},{"name":"Angola","alpha-2":"AO","country-code":"024"},{"name":"Anguilla","alpha-2":"AI","country-code":"660"},
        {"name":"Antarctica","alpha-2":"AQ","country-code":"010"},{"name":"Antigua and Barbuda","alpha-2":"AG","country-code":"028"},{"name":"Argentina","alpha-2":"AR","country-code":"032"},
        {"name":"Armenia","alpha-2":"AM","country-code":"051"},{"name":"Aruba","alpha-2":"AW","country-code":"533"},{"name":"Australia","alpha-2":"AU","country-code":"036"},
        {"name":"Austria","alpha-2":"AT","country-code":"040"},{"name":"Azerbaijan","alpha-2":"AZ","country-code":"031"},{"name":"Bahamas","alpha-2":"BS","country-code":"044"},
        {"name":"Bahrain","alpha-2":"BH","country-code":"048"},{"name":"Bangladesh","alpha-2":"BD","country-code":"050"},{"name":"Barbados","alpha-2":"BB","country-code":"052"},
        {"name":"Belarus","alpha-2":"BY","country-code":"112"},{"name":"Belgium","alpha-2":"BE","country-code":"056"},{"name":"Belize","alpha-2":"BZ","country-code":"084"},
        {"name":"Benin","alpha-2":"BJ","country-code":"204"},{"name":"Bermuda","alpha-2":"BM","country-code":"060"},{"name":"Bhutan","alpha-2":"BT","country-code":"064"},
        {"name":"Bolivia","alpha-2":"BO","country-code":"068"},{"name":"Bonaire, Sint Eustatius and Saba","alpha-2":"BQ","country-code":"535"},
        {"name":"Bosnia","alpha-2":"BA","country-code":"070"},{"name":"Botswana","alpha-2":"BW","country-code":"072"},{"name":"Bouvet Island","alpha-2":"BV","country-code":"074"},
        {"name":"Brazil","alpha-2":"BR","country-code":"076"},{"name":"British Indian Ocean Territory","alpha-2":"IO","country-code":"086"},{"name":"Brunei","alpha-2":"BN","country-code":"096"},
        {"name":"Bulgaria","alpha-2":"BG","country-code":"100"},{"name":"Burkina Faso","alpha-2":"BF","country-code":"854"},{"name":"Burundi","alpha-2":"BI","country-code":"108"},
        {"name":"Cabo Verde","alpha-2":"CV","country-code":"132"},{"name":"Cambodia","alpha-2":"KH","country-code":"116"},{"name":"Cameroon","alpha-2":"CM","country-code":"120"},
        {"name":"Canada","alpha-2":"CA","country-code":"124"},{"name":"Cayman Islands","alpha-2":"KY","country-code":"136"},{"name":"Central African Republic","alpha-2":"CF","country-code":"140"},
        {"name":"Chad","alpha-2":"TD","country-code":"148"},{"name":"Chile","alpha-2":"CL","country-code":"152"},{"name":"China","alpha-2":"CN","country-code":"156"},
        {"name":"Christmas Island","alpha-2":"CX","country-code":"162"},{"name":"Cocos (Keeling) Islands","alpha-2":"CC","country-code":"166"},{"name":"Colombia","alpha-2":"CO","country-code":"170"},
        {"name":"Comoros","alpha-2":"KM","country-code":"174"},{"name":"Congo","alpha-2":"CG","country-code":"178"},{"name":"Congo, Democratic Republic of the","alpha-2":"CD","country-code":"180"},
        {"name":"Cook Islands","alpha-2":"CK","country-code":"184"},{"name":"Côte d'Ivoire","alpha-2":"CI","country-code":"384"},
        {"name":"Croatia","alpha-2":"HR","country-code":"191"},{"name":"Cuba","alpha-2":"CU","country-code":"192"},{"name":"Curaçao","alpha-2":"CW","country-code":"531"},
        {"name":"Cyprus","alpha-2":"CY","country-code":"196"},{"name":"Czechia","alpha-2":"CZ","country-code":"203"},{"name":"Denmark","alpha-2":"DK","country-code":"208"},
        {"name":"Djibouti","alpha-2":"DJ","country-code":"262"},{"name":"Dominica","alpha-2":"DM","country-code":"212"},{"name":"Dominican Republic","alpha-2":"DO","country-code":"214"},
        {"name":"Ecuador","alpha-2":"EC","country-code":"218"},{"name":"Egypt","alpha-2":"EG","country-code":"818"},{"name":"El Salvador","alpha-2":"SV","country-code":"222"},
        {"name":"Equatorial Guinea","alpha-2":"GQ","country-code":"226"},{"name":"Eritrea","alpha-2":"ER","country-code":"232"},{"name":"Estonia","alpha-2":"EE","country-code":"233"},
        {"name":"Eswatini","alpha-2":"SZ","country-code":"748"},{"name":"Ethiopia","alpha-2":"ET","country-code":"231"},{"name":"Falkland Islands (Malvinas)","alpha-2":"FK","country-code":"238"},
        {"name":"Faroe Islands","alpha-2":"FO","country-code":"234"},{"name":"Fiji","alpha-2":"FJ","country-code":"242"},{"name":"Finland","alpha-2":"FI","country-code":"246"},
        {"name":"France","alpha-2":"FR","country-code":"250"},{"name":"French Guiana","alpha-2":"GF","country-code":"254"},{"name":"French Polynesia","alpha-2":"PF","country-code":"258"},
        {"name":"French Southern Territories","alpha-2":"TF","country-code":"260"},{"name":"Gabon","alpha-2":"GA","country-code":"266"},{"name":"Gambia","alpha-2":"GM","country-code":"270"},
        {"name":"Georgia","alpha-2":"GE","country-code":"268"},{"name":"Germany","alpha-2":"DE","country-code":"276"},{"name":"Ghana","alpha-2":"GH","country-code":"288"},
        {"name":"Gibraltar","alpha-2":"GI","country-code":"292"},{"name":"Greece","alpha-2":"GR","country-code":"300"},{"name":"Greenland","alpha-2":"GL","country-code":"304"},
        {"name":"Grenada","alpha-2":"GD","country-code":"308"},{"name":"Guadeloupe","alpha-2":"GP","country-code":"312"},{"name":"Guam","alpha-2":"GU","country-code":"316"},{"name":"Guatemala","alpha-2":"GT","country-code":"320"},{"name":"Guernsey","alpha-2":"GG","country-code":"831"},{"name":"Guinea","alpha-2":"GN","country-code":"324"},{"name":"Guinea-Bissau","alpha-2":"GW","country-code":"624"},{"name":"Guyana","alpha-2":"GY","country-code":"328"},{"name":"Haiti","alpha-2":"HT","country-code":"332"},{"name":"Heard Island and McDonald Islands","alpha-2":"HM","country-code":"334"},{"name":"Holy See","alpha-2":"VA","country-code":"336"},{"name":"Honduras","alpha-2":"HN","country-code":"340"},{"name":"Hong Kong","alpha-2":"HK","country-code":"344"},{"name":"Hungary","alpha-2":"HU","country-code":"348"},{"name":"Iceland","alpha-2":"IS","country-code":"352"},{"name":"India","alpha-2":"IN","country-code":"356"},{"name":"Indonesia","alpha-2":"ID","country-code":"360"},{"name":"Iran","alpha-2":"IR","country-code":"364"},{"name":"Iraq","alpha-2":"IQ","country-code":"368"},{"name":"Ireland","alpha-2":"IE","country-code":"372"},{"name":"Isle of Man","alpha-2":"IM","country-code":"833"},{"name":"Israel","alpha-2":"IL","country-code":"376"},{"name":"Italy","alpha-2":"IT","country-code":"380"},{"name":"Jamaica","alpha-2":"JM","country-code":"388"},{"name":"Japan","alpha-2":"JP","country-code":"392"},{"name":"Jersey","alpha-2":"JE","country-code":"832"},{"name":"Jordan","alpha-2":"JO","country-code":"400"},{"name":"Kazakhstan","alpha-2":"KZ","country-code":"398"},{"name":"Kenya","alpha-2":"KE","country-code":"404"},{"name":"Kiribati","alpha-2":"KI","country-code":"296"},{"name":"Korea (Democratic People's Republic of)","alpha-2":"KP","country-code":"408"},{"name":"South-Korea","alpha-2":"KR","country-code":"410"},{"name":"Kuwait","alpha-2":"KW","country-code":"414"},{"name":"Kyrgyzstan","alpha-2":"KG","country-code":"417"},{"name":"Lao People's Democratic Republic","alpha-2":"LA","country-code":"418"},{"name":"Latvia","alpha-2":"LV","country-code":"428"},{"name":"Lebanon","alpha-2":"LB","country-code":"422"},{"name":"Lesotho","alpha-2":"LS","country-code":"426"},{"name":"Liberia","alpha-2":"LR","country-code":"430"},{"name":"Libya","alpha-2":"LY","country-code":"434"},{"name":"Liechtenstein","alpha-2":"LI","country-code":"438"},{"name":"Lithuania","alpha-2":"LT","country-code":"440"},{"name":"Luxembourg","alpha-2":"LU","country-code":"442"},{"name":"Macao","alpha-2":"MO","country-code":"446"},{"name":"Madagascar","alpha-2":"MG","country-code":"450"},{"name":"Malawi","alpha-2":"MW","country-code":"454"},{"name":"Malaysia","alpha-2":"MY","country-code":"458"},{"name":"Maldives","alpha-2":"MV","country-code":"462"},{"name":"Mali","alpha-2":"ML","country-code":"466"},{"name":"Malta","alpha-2":"MT","country-code":"470"},{"name":"Marshall Islands","alpha-2":"MH","country-code":"584"},{"name":"Martinique","alpha-2":"MQ","country-code":"474"},{"name":"Mauritania","alpha-2":"MR","country-code":"478"},{"name":"Mauritius","alpha-2":"MU","country-code":"480"},{"name":"Mayotte","alpha-2":"YT","country-code":"175"},{"name":"Mexico","alpha-2":"MX","country-code":"484"},{"name":"Micronesia (Federated States of)","alpha-2":"FM","country-code":"583"},{"name":"Moldova, Republic of","alpha-2":"MD","country-code":"498"},{"name":"Monaco","alpha-2":"MC","country-code":"492"},{"name":"Mongolia","alpha-2":"MN","country-code":"496"},{"name":"Montenegro","alpha-2":"ME","country-code":"499"},{"name":"Montserrat","alpha-2":"MS","country-code":"500"},{"name":"Morocco","alpha-2":"MA","country-code":"504"},{"name":"Mozambique","alpha-2":"MZ","country-code":"508"},{"name":"Myanmar","alpha-2":"MM","country-code":"104"},{"name":"Namibia","alpha-2":"NA","country-code":"516"},{"name":"Nauru","alpha-2":"NR","country-code":"520"},{"name":"Nepal","alpha-2":"NP","country-code":"524"},{"name":"Netherlands","alpha-2":"NL","country-code":"528"},{"name":"New Caledonia","alpha-2":"NC","country-code":"540"},{"name":"New-Zealand","alpha-2":"NZ","country-code":"554"},{"name":"Nicaragua","alpha-2":"NI","country-code":"558"},{"name":"Niger","alpha-2":"NE","country-code":"562"},{"name":"Nigeria","alpha-2":"NG","country-code":"566"},{"name":"Niue","alpha-2":"NU","country-code":"570"},{"name":"Norfolk Island","alpha-2":"NF","country-code":"574"},{"name":"North Macedonia","alpha-2":"MK","country-code":"807"},{"name":"Northern Mariana Islands","alpha-2":"MP","country-code":"580"},{"name":"Norway","alpha-2":"NO","country-code":"578"},{"name":"Oman","alpha-2":"OM","country-code":"512"},{"name":"Pakistan","alpha-2":"PK","country-code":"586"},{"name":"Palau","alpha-2":"PW","country-code":"585"},{"name":"Palestine, State of","alpha-2":"PS","country-code":"275"},{"name":"Panama","alpha-2":"PA","country-code":"591"},{"name":"Papua New Guinea","alpha-2":"PG","country-code":"598"},{"name":"Paraguay","alpha-2":"PY","country-code":"600"},{"name":"Peru","alpha-2":"PE","country-code":"604"},{"name":"Philippines","alpha-2":"PH","country-code":"608"},{"name":"Pitcairn","alpha-2":"PN","country-code":"612"},{"name":"Poland","alpha-2":"PL","country-code":"616"},{"name":"Portugal","alpha-2":"PT","country-code":"620"},{"name":"Puerto Rico","alpha-2":"PR","country-code":"630"},{"name":"Qatar","alpha-2":"QA","country-code":"634"},{"name":"Réunion","alpha-2":"RE","country-code":"638"},{"name":"Romania","alpha-2":"RO","country-code":"642"},{"name":"Russia","alpha-2":"RU","country-code":"643"},{"name":"Rwanda","alpha-2":"RW","country-code":"646"},{"name":"Saint Barthélemy","alpha-2":"BL","country-code":"652"},{"name":"Saint Helena, Ascension and Tristan da Cunha","alpha-2":"SH","country-code":"654"},{"name":"Saint Kitts and Nevis","alpha-2":"KN","country-code":"659"},{"name":"Saint Lucia","alpha-2":"LC","country-code":"662"},{"name":"Saint Martin (French part)","alpha-2":"MF","country-code":"663"},{"name":"Saint Pierre and Miquelon","alpha-2":"PM","country-code":"666"},{"name":"Saint Vincent and the Grenadines","alpha-2":"VC","country-code":"670"},{"name":"Samoa","alpha-2":"WS","country-code":"882"},{"name":"San Marino","alpha-2":"SM","country-code":"674"},{"name":"Sao Tome and Principe","alpha-2":"ST","country-code":"678"},{"name":"Saudi-Arabia","alpha-2":"SA","country-code":"682"},{"name":"Senegal","alpha-2":"SN","country-code":"686"},{"name":"Serbia","alpha-2":"RS","country-code":"688"},{"name":"Seychelles","alpha-2":"SC","country-code":"690"},{"name":"Sierra-Leone","alpha-2":"SL","country-code":"694"},{"name":"Singapore","alpha-2":"SG","country-code":"702"},{"name":"Sint Maarten (Dutch part)","alpha-2":"SX","country-code":"534"},{"name":"Slovakia","alpha-2":"SK","country-code":"703"},{"name":"Slovenia","alpha-2":"SI","country-code":"705"},{"name":"Solomon Islands","alpha-2":"SB","country-code":"090"},{"name":"Somalia","alpha-2":"SO","country-code":"706"},{"name":"South-Africa","alpha-2":"ZA","country-code":"710"},{"name":"South Georgia and the South Sandwich Islands","alpha-2":"GS","country-code":"239"},{"name":"South Sudan","alpha-2":"SS","country-code":"728"},{"name":"Spain","alpha-2":"ES","country-code":"724"},{"name":"Sri Lanka","alpha-2":"LK","country-code":"144"},{"name":"Sudan","alpha-2":"SD","country-code":"729"},{"name":"Suriname","alpha-2":"SR","country-code":"740"},{"name":"Svalbard and Jan Mayen","alpha-2":"SJ","country-code":"744"},{"name":"Sweden","alpha-2":"SE","country-code":"752"},{"name":"Switzerland","alpha-2":"CH","country-code":"756"},{"name":"Syrian Arab Republic","alpha-2":"SY","country-code":"760"},{"name":"Taiwan, Province of China","alpha-2":"TW","country-code":"158"},{"name":"Tajikistan","alpha-2":"TJ","country-code":"762"},{"name":"Tanzania","alpha-2":"TZ","country-code":"834"},{"name":"Thailand","alpha-2":"TH","country-code":"764"},{"name":"Timor-Leste","alpha-2":"TL","country-code":"626"},{"name":"Togo","alpha-2":"TG","country-code":"768"},{"name":"Tokelau","alpha-2":"TK","country-code":"772"},{"name":"Tonga","alpha-2":"TO","country-code":"776"},{"name":"Trinidad and Tobago","alpha-2":"TT","country-code":"780"},{"name":"Tunisia","alpha-2":"TN","country-code":"788"},{"name":"Turkey","alpha-2":"TR","country-code":"792"},{"name":"Turkmenistan","alpha-2":"TM","country-code":"795"},{"name":"Turks and Caicos Islands","alpha-2":"TC","country-code":"796"},{"name":"Tuvalu","alpha-2":"TV","country-code":"798"},{"name":"Uganda","alpha-2":"UG","country-code":"800"},{"name":"Ukraine","alpha-2":"UA","country-code":"804"},{"name":"UAE","alpha-2":"AE","country-code":"784"},{"name":"Northern Ireland","alpha-2":"gb-nir","country-code":"826"},{"name":"USA","alpha-2":"US","country-code":"840"},{"name":"United States Minor Outlying Islands","alpha-2":"UM","country-code":"581"},{"name":"Uruguay","alpha-2":"UY","country-code":"858"},{"name":"Uzbekistan","alpha-2":"UZ","country-code":"860"},{"name":"Vanuatu","alpha-2":"VU","country-code":"548"},{"name":"Venezuela (Bolivarian Republic of)","alpha-2":"VE","country-code":"862"},{"name":"Vietnam","alpha-2":"VN","country-code":"704"},{"name":"Virgin Islands (British)","alpha-2":"VG","country-code":"092"},{"name":"Virgin Islands (U.S.)","alpha-2":"VI","country-code":"850"},{"name":"Wallis and Futuna","alpha-2":"WF","country-code":"876"},{"name":"Western Sahara","alpha-2":"EH","country-code":"732"},{"name":"Yemen","alpha-2":"YE","country-code":"887"},{"name":"Zambia","alpha-2":"ZM","country-code":"894"},{"name":"Zimbabwe","alpha-2":"ZW","country-code":"716"}]

        // Loop through each country object in the array
        countriesData.forEach(country => {
            // Convert country name to lowercase to match the existing dictionary keys
            const countryName = country.name.toLowerCase();
            // Update the dictionary with the country's alpha-2 code
            countryToCode[countryName] = country["alpha-2"].toLowerCase();
        });
        $.each(countryData, function(country, competitions) {
             let countryId = sport + '-' + country.replace(/\s+/g, '-').toLowerCase();
             let countryCode = countryToCode[country.toLowerCase()];
             let flagSrc = countryCode ? `static/4x3/${countryCode}.svg` : 'static/4x3/World_Flag.svg'; // Make sure the path is correct

             // Create flag image and country item
             let flagImg = $('<img>').attr({
                        src: flagSrc,
                        alt: `${country} Flag`,
                        class: 'flag-icon'
             });
             let countryItem = $('<div>').addClass('sub-item country-item').attr('id', countryId);
             countryItem.append(flagImg).append(country);

             let competitionsContainer = $('<div>').addClass('sub-menu competitions-container').hide();
             // ... Rest of your code for appending competitions
             $.each(competitions, function(index, competition) {
                 let competitionItem = $('<div>').addClass('sub-item competition-item').text(competition);

                 // Set the data attributes
                 competitionItem.data('sport', sport);
                 competitionItem.data('country', country);
                 competitionItem.data('competition', competition);

                 competitionItem.on('click', function() {
                     fetchCompetitionDetails(sport, country, competition);
                     // Format the URL segments using the data attributes / Unnecessary?
                     var sportSegment = formatUrlSegment($(this).data('sport'));
                     var countrySegment = formatUrlSegment($(this).data('country'));
                     var competitionSegment = formatUrlSegment($(this).data('competition'));

                     //var newUrl = `/${sportSegment}/${countrySegment}/${competitionSegment}`;
                     //history.pushState(null, '', newUrl);
                 });

                 competitionsContainer.append(competitionItem);
            });

             sportSubmenu.append(countryItem);
             sportSubmenu.append(competitionsContainer);

             // Click handler for the country item to toggle its competitions
             countryItem.on('click', function() {
                 competitionsContainer.slideToggle('fast');
             });

             });
        }


    // Define global variables
    var currentSport = "";
    var currentCountry = "";
    var currentCompetition = "";

    var allMatchData = [];
    function fetchCompetitionDetails(sport, country, competition) {
        // Update global variables
        currentSport = sport;
        currentCountry = country;
        currentCompetition = competition;
        const requestOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ba329ea629mshac0d3dc662ede7ap16d897jsn19e9d55d9290', // Use your actual API key
                'X-RapidAPI-Host': 'odds-api1.p.rapidapi.com'
            }
        };

            // Inside your Ajax call, use the formatUrlSegment function to preprocess the parameters
            $.ajax({
                url: `https://odds-api1.p.rapidapi.com/matches?sport=${encodeURIComponent(formatUrlSegment(sport))}&country=${encodeURIComponent(formatUrlSegment(country))}&competition=${encodeURIComponent(formatUrlSegment(competition))}&match_urls=True`,
                ...requestOptions,
                success: function(response) {
                    allMatchData = response; // Store the response
                    // If the response is an array and you want the first event
                    var eventData = response[0]; // Assuming the first event is what you want

                    // Concatenate the sport, country, and competition information with " > " as separator
                    var displayText =
                        (eventData.sport.charAt(0).toUpperCase() + eventData.sport.slice(1)) + " ＞ " +
                        (eventData.country.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1))) + " ＞ " +
                        eventData.competition.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

                    // Set the concatenated text as the content for the competition description
                    $('.competition-navigation').text(displayText);
                    // Display pre-match events by default
                    displayEvents(allMatchData, 'pre-game');
                },
                error: function(xhr, status, error) {
                    // Handle any errors
                    console.log("Error fetching competition details: " + error);
                }
            });
        }


    // Define global variables
    var currentSportHistorical = "";
    var currentCountryHistorical = "";
    var currentCompetitionHistorical = "";

    var allMatchDatahistorical = [];
    function fetchHistoricalDetails(sport, country, competition) {
        // Check if the current sport, country, and competition match the requested parameters
        if (currentSportHistorical === sport && currentCountryHistorical === country && currentCompetitionHistorical === competition) {
            // Data for the current parameters is already fetched or considered fetched
            displayEvents(allMatchDatahistorical, "historical");
            return; // Avoid making the API call again
        } else {
            // Update global variables with the new request parameters
            document.getElementById('loadingScreenDetails').style.display = 'flex';
            currentSportHistorical = sport;
            currentCountryHistorical = country;
            currentCompetitionHistorical = competition;

            const requestOptions = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ba329ea629mshac0d3dc662ede7ap16d897jsn19e9d55d9290', // Use your actual API key
                    'X-RapidAPI-Host': 'odds-api1.p.rapidapi.com'
                }
            };

            // Inside your Ajax call, use the formatUrlSegment function to preprocess the parameters
            $.ajax({
                url: `https://odds-api1.p.rapidapi.com/historical/matches?sport=${encodeURIComponent(formatUrlSegment(sport))}&country=${encodeURIComponent(formatUrlSegment(country))}&competition=${encodeURIComponent(formatUrlSegment(competition))}&match_urls=True`,
                ...requestOptions,
                success: function(response) {
                    document.getElementById('loadingScreenDetails').style.display = 'none';
                    allMatchDatahistorical = response;
                    // If the response is an array and you want the first event
                    var eventData = allMatchDatahistorical[0]; // Assuming the first event is what you want

                    // Assuming eventData.sport is "table-tennis"
                    // Concatenate the sport, country, and competition information with " > " as separator
                    var displayText =
                        (sport.charAt(0).toUpperCase() + eventData.sport.slice(1)) + " ＞ " +
                        (eventData.country.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1))) + " ＞ " +
                        eventData.competition.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


                    // Set the concatenated text as the content for the competition description
                    $('.competition-navigation').text(displayText);
                    // Display pre-match events by default
                    displayEvents(allMatchDatahistorical, "historical");
                },
                error: function(xhr, status, error) {
                    // Handle any errors
                    console.log("Error fetching competition details: " + error);
                }
            });
        }
    }


    function displayEvents(response, statusFilter) {
        // Empty the events list to prepare for new data
        $('.events-list').empty();

        var eventsDisplayed = 0; // Counter for displayed events

        const appendMatchDetails = (eventData) => {
            var matchElement = $('<div>').addClass('event-item').attr('data-matchid', eventData.matchid);

            // Format the date and time from the response
            var matchDate = new Date(eventData.match_timestamp * 1000).toLocaleDateString('en-GB', {
                month: '2-digit',
                day: '2-digit',
                year: '2-digit',
            });
            var matchTime = new Date(eventData.match_timestamp * 1000).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });

            var dateTimeContainer = $('<div>').addClass('event-date-time');
            dateTimeContainer.append($('<div>').addClass('event-date').text(matchDate)); // Use 'div' to make it block-level
            dateTimeContainer.append($('<div>').addClass('event-time').text(matchTime)); // Use 'div' to make it block-level

            // Append the date and time container to the match element
            matchElement.append(dateTimeContainer);

            // Append the teams involved in the match
            //matchElement.append($('<div>').addClass('event-teams').text(`${eventData.home_team.trim()} - ${eventData.away_team.trim()}`));
            // Create a container for the teams
            var teamsContainer = $('<div>').addClass('event-teams-container');
            teamsContainer.append($('<div>').addClass('event-team-home').text(eventData.home_team.trim()));
            teamsContainer.append($('<div>').addClass('event-team-away').text(eventData.away_team.trim()));

            matchElement.append(teamsContainer);

            // Append the match element to the events list
            $('.events-list').append(matchElement);
            eventsDisplayed++; // Increment counter for each displayed event


            matchElement.on('click', function() {
                var matchid = $(this).data('matchid');
                var effectiveStatusFilter = eventData.match_status ? statusFilter : 'historical';
                try {
                    fetchMatchDetails(matchid, effectiveStatusFilter);
                } catch (error) {
                    console.error("Error occurred in fetchMatchDetails: ", error);
                }
            });
        };

        // Iterate over each event in the response
        $.each(response, function(index, eventData) {
            if (statusFilter === "historical" || eventData.match_status === statusFilter) {
                appendMatchDetails(eventData);
            }
        });

        // If no events were displayed, show a message indicating no available events for this status
        if (eventsDisplayed === 0) {
            var noEventsMessage = $(`<div class="no-events-message">No ${statusFilter} events available at the moment.</div>`);
            $('.events-list').append(noEventsMessage);
        }
    }




    function setupCountdownForFirstMatch(firstMatchTimestamp) {
    var countdownElement = $('<div>').addClass('event-countdown');
    $('.events-list').prepend(countdownElement); // Add countdown at the top of the list

    var updateCountdown = function() {
        var now = new Date().getTime(); // Get current time in milliseconds
        var countdownTime = firstMatchTimestamp * 1000 - now; // Calculate remaining time until match

        // Check if the match has already started
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.text('The match has started!'); // Display match start message
            return;
        }

        // Calculate days, hours, minutes, and seconds from countdownTime
        var days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

        // Format and display the countdown
        countdownElement.text(`Countdown to match: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    // Initialize countdown
    updateCountdown();
    // Update countdown every second
    var countdownInterval = setInterval(updateCountdown, 1000);
}


    function fetchMatchDetails(matchid, time_status) {
        const oddsFormat = localStorage.getItem('oddsFormat') || 'decimal';
        // Retrieve the stored bookmaker preference or default to 'german'
        const bookmaker = localStorage.getItem('bookmaker') || 'bet365,pinnacle';

        const requestOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ba329ea629mshac0d3dc662ede7ap16d897jsn19e9d55d9290',
                'X-RapidAPI-Host': 'odds-api1.p.rapidapi.com'
            }
        };

        // Perform the API call using the matchid
        document.getElementById('loadingScreenDetails').style.display = 'flex';
        //document.getElementById('loadingScreenMatch').style.display = 'flex';
        // Decide the URL based on time_status
        const baseUrl = time_status === 'historical'
            ? `https://odds-api1.p.rapidapi.com/historical/odds?matchid=${encodeURIComponent(matchid)}&bookmakers=${encodeURIComponent(bookmaker)}`
            : `https://odds-api1.p.rapidapi.com/odds?matchid=${encodeURIComponent(matchid)}&bookmakers=${encodeURIComponent(bookmaker)}`;
        $.ajax({
            url: baseUrl,
            ...requestOptions,
            success: function(response) {
                // Assuming response[0] contains the match details
                document.getElementById('loadingScreenDetails').style.display = 'none';
                //document.getElementById('loadingScreenMatch').style.display = 'none';
                try {
                    // Call the function to display the match details
                    displayMatchDetails(response[0]);
                } catch (error) {
                    // If an error occurs within displayMatchDetails, log it and do nothing else
                    console.error("Error occurred within displayMatchDetails:", error);
                }
            },
            error: function(xhr, status, error) {
                // Handle errors here
                document.getElementById('loadingScreenDetails').style.display = 'none';
                //document.getElementById('loadingScreenMatch').style.display = 'none';
                console.log("Error fetching odds details:", error);
            }
        });
    }


    function displayMatchDetails(matchData) {
        // Clear the existing contents of the .match-list
        $('.match-list').empty();

        // Create a container for the match details
        var matchContainer = $('<div>').addClass('match-container');

        // Create elements for teams, time, and date
        var homeTeamElement = $('<div>').addClass('home-team').text(matchData.home_team.trim());
        var awayTeamElement = $('<div>').addClass('away-team').text(matchData.away_team.trim());
        var timeElement = $('<div>').addClass('match-time');
        var dateElement = $('<div>').addClass('match-date');
        var dateTimeContainer = $('<div>').addClass('date-time-container'); // Container for time and date

        // Format the date and time from the matchData object
        var matchTime = new Date(matchData.match_timestamp * 1000);
        var dateString = matchTime.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }); // German format
        var timeString = matchTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });

        // Set the text for the time and date elements
        timeElement.text(timeString);
        dateElement.text(dateString);

        // Append time and date to their container
        dateTimeContainer.append(timeElement).append(dateElement);

        // Append the teams and dateTimeContainer to the match container
        matchContainer.append(homeTeamElement).append(dateTimeContainer).append(awayTeamElement);

        // Append the match container to the .match-list
        $('.match-list').append(matchContainer);
    }




    $('.menu-item').on('click', function() {
        // Close all sub-menus except the one next to the clicked menu item
        $('.sub-menu').not($(this).next('.sub-menu')).slideUp('fast');
        // Remove 'arrow-up' class from all dropdown arrows except the one within the clicked menu item
        $('.dropdown-arrow').not($(this).children('.dropdown-arrow')).removeClass('arrow-up');

        // Toggle the dropdown arrow and sub-menu for the clicked menu item
        $(this).children('.dropdown-arrow').toggleClass('arrow-up');
        $(this).next('.sub-menu').slideToggle('fast');
    });



    // Assuming jQuery is used
    $(document).ready(function() {
     initializePreferences();
        // Check for saved user preferences, if any, otherwise set to dark mode
        if (localStorage.getItem('theme') === 'bright-mode') {
            $('body').addClass('bright-mode');
        } else {
            // Default to dark mode
            $('body').addClass('dark-mode');
        }

        // --------------------------------------------- EVENT SWITCHER ------------------
        // Set 'UPCOMING' as the default active tile
        $('#upcoming-events').addClass('active');
        $('.nav-button-events').click(function() {
            $('.nav-button-events').removeClass('active');
            $(this).addClass('active');
            // ... rest of the click handler
        });

        // --------------------------------------------- DETAILS SWITCHER ----------------
        // Set 'ODDS' as the default active button and show its details
        $('#lineup-details').addClass('active');
        // Since we're now using the details-list to contain images, it should always be visible.
        // We'll toggle visibility of images inside it instead.
        $('.details-list').show();
        // Hide all images initially
        $('.details-image').hide();
        // Show the default image associated with the 'ODDS' button
        let defaultImageToShow = $('#lineup-details').data('target');
        $('#' + defaultImageToShow).show();
        // Click event for all nav buttons
        $('.nav-button-details').click(function() {
            // Remove 'active' class from all buttons and add to the clicked one
            $('.nav-button-details').removeClass('active');
            $(this).addClass('active');
            // Hide all images
            $('.details-image').hide();
            // Show the associated image
            let imageToShow = $(this).data('target');
            $('#' + imageToShow).show();
        });


        $('#odds-format-trigger').click(function() {
            $('#odds-format-settings').toggleClass('open');
        });
        $('#bookmakers-trigger').click(function() {
            $('#bookmakers-settings').toggleClass('open');
        });
        $('#language-trigger').click(function() {
            $('#language-settings').toggleClass('open');
        });
        // Click handler for upcoming events button
        $('#live-events').click(function() {
            // Call display function for non-finished matches
            displayEvents(allMatchData, 'live'); // You may need to adjust the status text based on your API response
        });
        // Click handler for upcoming events button
        $('#upcoming-events').click(function() {
            displayEvents(allMatchData, 'pre-game'); // You may need to adjust the status text based on your API response
        });
        // Click handler for finished events button
        $('#finished-events').click(function() {
            // Call display function for finished matches
            displayEvents(allMatchData, "finished"); // You may need to adjust the status text based on your API response
        });
        // Click handler for finished events button
        $('#historical-events').click(function() {
            // Call display function for finished matches
            fetchHistoricalDetails(currentSport, currentCountry, currentCompetition);
            //displayEvents(allMatchDatahistorical, "historical"); // You may need to adjust the status text based on your API response
        });




        // Save and apply odds format preference
        $('input[name="odds-format"]').change(function() {
            localStorage.setItem('oddsFormat', $(this).val());
            applyOddsFormat();
        });

        $('input[name="bookmakers"]').change(function() {
            // This should capture the value of the selected bookmaker radio button
            localStorage.setItem('bookmaker', $(this).val());
            applyBookmakerPreference();
        });

        // Toggle dark mode
        $('.menu-item').on('click', function() {
            // Check if the clicked item is the Dark Mode toggle
            if ($(this).text().trim().includes('Dark Mode')) {
                $('body').toggleClass('dark-mode bright-mode');
                // Save the preference to local storage
                if ($('body').hasClass('dark-mode')) {
                    localStorage.setItem('theme', 'dark-mode');
                } else {
                    localStorage.setItem('theme', 'bright-mode');
                }
            }
        });

        function initializePreferences() {
            // Apply stored preferences or defaults
            applyOddsFormat();
            applyBookmakerPreference();
            // Existing dark mode initialization can remain here
        }

        function applyOddsFormat() {
            const oddsFormat = localStorage.getItem('oddsFormat') || 'decimal';
            $('input[name="odds-format"][value="' + oddsFormat + '"]').prop('checked', true);
        }

        // Then to apply the preference, make sure you are selecting the radio button by its value
        function applyBookmakerPreference() {
            const bookmaker = localStorage.getItem('bookmaker') || 'german-bookmaker'; // Set a valid default value
            $('input[name="bookmakers"][value="' + bookmaker + '"]').prop('checked', true);
        }
    });

    fetchCompetitionDetails('soccer', 'england', 'premier-league');

});
// for table: https://stats.fn.sportradar.com/sp77/en/Europe:Berlin/gismo/stats_season_tables/106501