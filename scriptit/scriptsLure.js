$(document).ready(function() {
    $("#LureReturn").click(function() {
        $("#MenuBudy").fadeOut(500, function() {
            window.location.href = "menu.html";
          });
        });
    });
    $(document).ready(function() {
        // Populate the "Sunny" select element
        $("#Sunny").append('<option value="Sunny">Sunny</option>');
        $("#Sunny").append('<option value="Cloudy">Cloudy</option>');

        // Populate the "Rain" select element
        $("#Rain").append('<option value="Yes">Yes</option>');
        $("#Rain").append('<option value="No">No</option>');

        // Populate the "Temp" select element
        $("#Temp").append('<option value="Cold">Cold 5...(-5)</option>');
        $("#Temp").append('<option value="Warm">Warm 6...15</option>');
        $("#Temp").append('<option value="Hot">Hot 16...25</option>');

        // Populate the "AirPress" select element
        $("#AirPress").append('<option value="High">High</option>');
        $("#AirPress").append('<option value="Low">Low</option>');

        //Water clarity
        $("#WaterClr").append('<option value="Clear">Clear</option>');
        $("#WaterClr").append('<option value="Cloudy">Cloudy</option>');
        $("#WaterClr").append('<option value="Murky">Murky</option>');

        //Water depth
        $("#WaterDpth").append('<option value="Shallow">Shallow 1-5m</option>');
        $("#WaterDpth").append('<option value="MidDpth">Mid-depth 6-12m</option>');
        $("#WaterDpth").append('<option value="Deep">Deep 13-23m</option>');
        $("#WaterDpth").append('<option value="UltraDeep">Ultra Deep 24m->...</option>');
    });
    function lisaa(event) {
        event.preventDefault();
        
        var sunny = $("#Sunny").val();
        var rain = $("#Rain").val();
        var temp = $("#Temp").val();
        var airPress = $("#AirPress").val();
        var waterclr = $("#WaterClr").val();
        var waterdpth = $("#WaterDpth").val();
        
        var params = $.param({
            Sunny: sunny,
            Rain: rain,
            Temp: temp,
            AirPress: airPress,
            WaterClr: waterclr,
            WaterDpth: waterdpth
        });
        $("body").fadeOut(1000, function() { 
        window.location.href = 'LureSelected.html?' + params;
    });

    return false;

    }
    $(function() {
        $('body').hide().fadeIn('slow');
        
        });
    
        $(document).ready(function() {
            // Function to get URL parameters
            function getUrlParams() {
                var params = {};
                var parser = document.createElement('a');
                parser.href = window.location.href;
                var query = parser.search.substring(1);
                var vars = query.split('&');
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split('=');
                    params[pair[0]] = decodeURIComponent(pair[1]);
                }
                return params;
            }
    
            var params = getUrlParams();
            var result = '';
            var imgResult = '';
    
            // Determine the result based on parameters
            if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.AirPress === 'High' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'Deep') {
                result = 'Green';
                imgResult = 'LureImg/green.jpg';
            } else {
                result = 'No matching result found.';
            }
    
            // Display the result
            $("#result").text(result);

            if (imgResult) {
                $("#resultImage").attr("src", imgResult).show();
            }

        });
    