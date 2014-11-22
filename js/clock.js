$(document).ready(function () {
    startClock();
});

function startClock() {
    'use strict';
    var delay = 1000;

    function tick() {
        var clockDate = new Date(),
            clockHours = clockDate.getHours(),
            clockMinutes = clockDate.getMinutes(),
            fiveHours = Math.floor(clockHours / 5),
            fiveMinutes = Math.floor(clockMinutes / 5);

        $(".circle").toggleClass("off");
        $("#display").text(clockHours + ":" + ((clockMinutes < 10) ? "0" + clockMinutes : clockMinutes));
        
        $("[id^=h]").addClass("off");
        $("[id^=m]").addClass("off");
        
        // First row of lamps
        if (fiveHours > 0) {
            for (var i = 1; i <= fiveHours; i++) {
                $("#h5-" + i).removeClass("off");
            }
        }

        // Second row of lamps
        if (fiveHours % 5 > 0) {
            var singleHours = Math.floor(clockHours - (fiveHours * 5));

            for (var i = 1; i <= singleHours; i++) {
                $("#h1-" + i).removeClass("off");
            }
        }

        // Third row of lamps
        if (fiveMinutes > 0) {
            for (var i = 1; i <= fiveMinutes; i++) {
                if (i % 3 == 0) {
                    $("#m5-" + i).removeClass("off");
                } else {
                    $("#m5-" + i).removeClass("off");
                }
            }
        }

        // Fourth row of lamps
        if (fiveMinutes % 5 > 0 || fiveMinutes === 0) {
            var singleMinutes = Math.floor(clockMinutes - (fiveMinutes * 5));
            for (var i = 1; i <= singleMinutes; i++) {
                $("#m1-" + i).removeClass("off");
            }
        }

        setTimeout(tick, delay);
    }

    tick();
}