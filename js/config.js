window.sdrConfig = [
    { name: "Twente WebSDR", url: "http://websdr.ewi.utwente.nl:8901/", type: "websdr" },
    { name: "Glockenhof WebSDR", url: "http://websdr.ddnss.org:8080/", type: "websdr" },
    { name: "Heppen PhantomSDR +, Belgien", url: "http://websdr.heppen.be/", type: "phantomsdrplus" },
    { name: "Dillberg WebSDR", url: "http://dillberg.dyndns.org:8100/", type: "websdr" },
    { name: "Lucern PhantomSDR +, Schweiz", url: "http://websdr.hb3xdc.ch:8074/", type: "phantomsdrplus" },
    { name: "Rigi PhantomSDR +, Schweiz", url: "http://rigi.dyndns-remote.com:8074/", type: "phantomsdrplus" },
    { name: "PhantomSDR +, Frankreich", url: "http://linkz.ddns.net:8088/", type: "phantomsdrplus" },
];

const defaultSDR = sdrConfig[0].url;
const minFreq = 0;    // 0 kHz
const maxFreq = 30000; // 30 MHz

