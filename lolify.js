/*global document, window, loljs*/

/************************************************************ 
 * LOLIFY.JS - WE CAN HAS SCRIPT TYPE="TEXT/LOLCODE"        *
 * requires lol.js (from https://code.google.com/p/loljs/   *
 *                                                          *
 * o= PASSED JSLINT                                         *
 *                                                          *
 * amodo@residualmind.com                                   *
 ***********************************************************/


(function(LOL) {

    "use strict";
    // DOIN IT RITE

    // LOLITY CHECK
    if (LOL !== 'LOL') {
        return;
    }

    var lolify = function() {
        var head, script, node, type, scriptTags = document.getElementsByTagName('script');
        for (node in scriptTags) {
            if (typeof (scriptTags[node]) === 'object') {
                type = scriptTags[node].getAttribute("type");
                if (type && type.toUpperCase() === "TEXT/LOLCODE") {
                    head = document.getElementsByTagName('head')[0];
                    script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.text = loljs(scriptTags[node].text);
                    head.appendChild(script);
                }
            }
        }
    };

    if (window.addEventListener) {
        window.addEventListener('load', lolify, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', lolify);
    }

}('LOL'));




