// ==UserScript==
// @name         Block Promoted Tweets
// @author       Daniel Harris @thewebauthor
// @match http://twitter.com/home
// @match https://twitter.com/home
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
                        $("div[aria-label='Timeline: Trending now'").show();
                        $("div", "div[aria-label='Timeline: Trending now'").show();
                    }
                });
            }, 500);
        });
    });
})();
