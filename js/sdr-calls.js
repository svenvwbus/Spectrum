// sdr-calls.js

function findBand(frequency) {
    return window.bands.find(band => frequency >= band.start && frequency <= band.end);
}

function openSDR(frequency, sdrUrl, sdrType) {
    let url;
    const freqInHz = frequency * 1000; // Convert kHz to Hz

    switch(sdrType) {
        case 'websdr':
        case 'openwebrx':
            url = `${sdrUrl}?tune=${frequency}am`;
            break;
        case 'phantomsdrplus':
        case 'phantomsdr':
        case 'kiwisdr':
            url = `${sdrUrl}?frequency=${freqInHz}&modulation=AM`;
            break;
        default:
            console.error('Unbekannter SDR-Typ:', sdrType);
            return;
    }
    window.open(url, '_blank');
}

function showSDRContextMenu(event, frequency) {
    event.preventDefault();
    const contextMenu = document.getElementById('context-menu');
    contextMenu.innerHTML = '';
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;

    const band = findBand(frequency);
    if (band) {
        const preferredSDR = sdrConfig.find(sdr => sdr.url === band.webSDR);
        if (preferredSDR) {
            const item = document.createElement('li');
            item.textContent = `${preferredSDR.name} (Empfohlen für ${band.name})`;
            item.addEventListener('click', () => {
                openSDR(frequency, preferredSDR.url, preferredSDR.type);
                contextMenu.style.display = 'none';
            });
            contextMenu.appendChild(item);
        }
    }

    sdrConfig.forEach(sdr => {
        if (!band || sdr.url !== band.webSDR) {
            const item = document.createElement('li');
            item.textContent = sdr.name;
            item.addEventListener('click', () => {
                openSDR(frequency, sdr.url, sdr.type);
                contextMenu.style.display = 'none';
            });
            contextMenu.appendChild(item);
        }
    });
}

document.addEventListener('click', () => {
    document.getElementById('context-menu').style.display = 'none';
});

// Diese Funktion sollte in Ihrer spectrum.js oder main.js implementiert werden
function calculateFrequency(event) {
    const spectrum = document.getElementById('spectrum');
    const rect = spectrum.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    return minFreq + (x / width) * (maxFreq - minFreq);
}

// Event Listener für das Spektrum
document.getElementById('spectrum').addEventListener('click', function(event) {
    const frequency = calculateFrequency(event);
    const band = findBand(frequency);
    if (band) {
        const sdr = sdrConfig.find(s => s.url === band.webSDR);
        openSDR(frequency, sdr.url, sdr.type);
    } else {
        openSDR(frequency, defaultSDR, sdrConfig[0].type);
    }
});

document.getElementById('spectrum').addEventListener('contextmenu', function(event) {
    const frequency = calculateFrequency(event);
    showSDRContextMenu(event, frequency);
});

