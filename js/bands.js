// bands.js

window.bands = [
    { type: 'long-wave', start: 148.5, end: 283.5, name: 'Langwelle', webSDR: sdrConfig[0].url },
    { type: 'beacon', start: 300, end: 420, name: 'Ungerichtete Funkfeuer', webSDR: sdrConfig[0].url },
    { type: 'medium-wave', start: 526.5, end: 1606.5, name: 'Mittelwelle', webSDR: sdrConfig[0].url },
    { type: 'pirate', start: 1612, end: 1750, name: 'Piratensender', webSDR: sdrConfig[0].url },
    { type: 'amateur', start: 1800, end: 2000, name: 'Amateurfunk 160m', webSDR: sdrConfig[1].url },
    { type: 'broadcast', start: 2300, end: 2495, name: 'Rundfunk 120m', webSDR: sdrConfig[0].url },
    { type: 'broadcast', start: 3200, end: 3400, name: 'Rundfunk 90m', webSDR: sdrConfig[0].url },
    { type: 'aviation', start: 3400, end: 3500, name: 'Luftfahrt', webSDR: sdrConfig[0].url },
    { type: 'amateur', start: 3500, end: 3800, name: 'Amateurfunk 80m', webSDR: sdrConfig[1].url },
    { type: 'broadcast', start: 3900, end: 4000, name: 'Rundfunk 75m', webSDR: sdrConfig[0].url },
    { type: 'military', start: 4000, end: 4063, name: 'Militär', webSDR: sdrConfig[0].url },
    { type: 'maritime', start: 4063, end: 4438, name: 'Seefunk', webSDR: sdrConfig[0].url },
    { type: 'broadcast', start: 4750, end: 4995, name: 'Rundfunk 60m', webSDR: sdrConfig[1].url },
    { type: 'time', start: 4995, end: 5005, name: 'Zeitzeichen', webSDR: sdrConfig[0].url },
    { type: 'chaos', start: 5060, end: 5450, name: 'Chaos', webSDR: sdrConfig[0].url },
    { type: 'amateur', start: 5351.5, end: 5366.5, name: 'Amateurfunk 60m', webSDR: sdrConfig[1].url },
    { type: 'aviation', start: 5450, end: 5730, name: 'Flugfunk', webSDR: sdrConfig[0].url },
    { type: 'chaos', start: 5730, end: 5900, name: 'Zwischenbereich mit Chaossender', webSDR: sdrConfig[0].url },
    { type: 'broadcast', start: 5900, end: 6200, name: 'Rundfunk 49m', webSDR: sdrConfig[0].url },
    { type: 'pirate', start: 6200, end: 6350, name: 'Piratenband 48m', webSDR: sdrConfig[0].url },
    { type: 'maritime', start: 6200, end: 6525, name: 'Seefunk', webSDR: sdrConfig[0].url },
    { type: 'overlap', start: 6200, end: 6350, name: 'Überlappung: Piratenband/Seefunk', webSDR: sdrConfig[0].url },
    { type: 'aviation', start: 6525, end: 6765, name: 'Flugfunk', webSDR: sdrConfig[0].url },
    { type: 'ism', start: 6765, end: 6795, name: 'ISM', webSDR: sdrConfig[0].url },
    { type: 'amateur', start: 7000, end: 7200, name: 'Amateurfunk 40m', webSDR: sdrConfig[1].url },
    { type: 'broadcast', start: 7200, end: 7450, name: 'Rundfunk 41m', webSDR: sdrConfig[0].url },
    { type: 'landmobile', start: 7450, end: 8195, name: 'Landgebunden', webSDR: sdrConfig[0].url },
    { type: 'maritime', start: 8195, end: 8815, name: 'Seefunk', webSDR: sdrConfig[0].url },
    { type: 'broadcast', start: 9400, end: 9900, name: 'Rundfunk 31m', webSDR: sdrConfig[0].url },
    { type: 'amateur', start: 10100, end: 10150, name: 'Amateurfunk 30m', webSDR: sdrConfig[2].url },
    { type: 'feeder', start: 10150, end: 11175, name: 'SSB-Feeder', webSDR: sdrConfig[0].url },
    { type: 'broadcast', start: 11600, end: 12100, name: 'Rundfunk 25m', webSDR: sdrConfig[0].url },
    { type: 'maritime', start: 12330, end: 13200, name: 'Seefunk', webSDR: sdrConfig[0].url },
    { type: 'ism', start: 13553, end: 13567, name: 'ISM', webSDR: sdrConfig[0].url },
    { type: 'broadcast', start: 13570, end: 13870, name: 'Rundfunk 22m', webSDR: sdrConfig[0].url },
    { type: 'amateur', start: 14000, end: 14350, name: 'Amateurfunk 20m', webSDR: sdrConfig[1].url },
    { type: 'broadcast', start: 15100, end: 15800, name: 'Rundfunk 19m', webSDR: sdrConfig[0].url },
    { type: 'broadcast', start: 17480, end: 17900, name: 'Rundfunk 16m', webSDR: sdrConfig[0].url },
    { type: 'maritime', start: 16420, end: 16420, name: 'Internationale Notfallfrequenz', webSDR: sdrConfig[0].url },
    { type: 'maritime', start: 17200, end: 17200, name: 'Seefunk', webSDR: sdrConfig[0].url },
    { type: 'fixed_mobile', start: 18000, end: 18068, name: 'Verschiedene Dienste', webSDR: sdrConfig[0].url },
    { type: 'maritime', start: 19020, end: 19020, name: 'Seefunk', webSDR: sdrConfig[0].url },
    { type: 'broadcast', start: 19680, end: 19800, name: 'Internationaler Rundfunk', webSDR: sdrConfig[0].url },
    { type: 'time', start: 20000, end: 20000, name: 'WWV/WWVH Zeitzeichendienst', webSDR: sdrConfig[0].url },
    { type: 'maritime', start: 22000, end: 22855, name: 'Seefunk', webSDR: sdrConfig[0].url },
    { type: 'aeronautical', start: 23000, end: 23000, name: 'Flugfunk', webSDR: sdrConfig[0].url },
    { type: 'fixed', start: 24000, end: 24000, name: 'Point-to-Point Kommunikation', webSDR: sdrConfig[0].url },
    { type: 'amateur', start: 18068, end: 18168, name: 'Amateurfunk 17m', webSDR: sdrConfig[1].url },
    { type: 'amateur', start: 21000, end: 21450, name: 'Amateurfunk 15m', webSDR: sdrConfig[1].url },
    { type: 'broadcast', start: 21450, end: 21850, name: 'Rundfunk 13m', webSDR: sdrConfig[0].url },
    { type: 'amateur', start: 24890, end: 24990, name: 'Amateurfunk 12m', webSDR: sdrConfig[1].url },
    { type: 'broadcast', start: 25600, end: 26100, name: 'Rundfunk 11m', webSDR: sdrConfig[0].url },
    { type: 'cb', start: 26565, end: 27405, name: 'CB-Funk', webSDR: sdrConfig[3].url },
    { type: 'ism', start: 26957, end: 27283, name: 'ISM im CB-Band', webSDR: sdrConfig[3].url },
    { type: 'amateur', start: 28000, end: 29700, name: 'Amateurfunk 10m', webSDR: sdrConfig[3].url }
];

