"use strict";

/* eslint-disable */
module.exports = {
  languageData: {
    "plurals": function plurals(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);
      if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
      return n == 1 && v0 ? "one" : "other";
    }
  },
  messages: {
    "About Us": "About Us",
    "Cameroon": "Cameroon",
    "Congo": "Congo",
    "Contact": "Contact",
    "Doc": "Doc",
    "English": "English",
    "French": "French",
    "Guinea": "Guinea",
    "Home": "Home",
    "Ivory Coast": "Ivory Coast",
    "Learn More": "Learn More",
    "Liberia": "Liberia",
    "about.text": "Learn all about our history, our vision, our strategy to become the african bank of the 3rd millennium. So far, the bank counts about forty (40) branches in the ten (10) <0/><1/>regions of Cameroon despite the country\u2019s unfavourable economic situation and the general tendency of banks going bankrupt.<2/><3/>Obtain information on corporate governance, our network, our relationships with investors.",
    "rights": "All rights reserved"
  }
};