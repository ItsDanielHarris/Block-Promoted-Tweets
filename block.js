// ==UserScript==
// @name         Block Promoted Tweets
// @author       Daniel Harris @thewebauthor
// @match http://twitter.com/*
// @match https://twitter.com/*
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready( function() {
        $(window).scroll( function() {
            setTimeout(function() {
                $("span").each(function(i, span) {
                    if ($(span).text().indexOf("Promoted") >= 0) {
                        $(span).parent().parent().parent().parent().parent().parent().parent().parent().hide();
                    }
                });
            }, 500);
        });
    });
})();
