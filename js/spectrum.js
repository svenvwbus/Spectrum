// Referenzen zu DOM-Elementen
const spectrum = document.getElementById('spectrum');
const scale = document.getElementById('scale');
const tooltip = document.getElementById('tooltip');
const contextMenu = document.getElementById('context-menu');

// Hilfsfunktionen
function freqToPercent(freq) {
    return ((freq - minFreq) / (maxFreq - minFreq)) * 100;
}

function percentToFreq(percent) {
    return minFreq + (percent / 100) * (maxFreq - minFreq);
}

function getSDRNameFromUrl(url) {
    const sdr = sdrConfig.find(sdr => sdr.url === url);
    return sdr ? sdr.name : 'Unbekannt';
}

function isBandDefined(freq) {
    return bands.some(band => freq >= band.start && freq <= band.end);
}

function getBandForFreq(freq) {
    return bands.find(band => freq >= band.start && freq <= band.end);
}

// Hauptfunktionen
function createBands() {
    spectrum.innerHTML = '';
    scale.innerHTML = '';
    bands.forEach(band => {
        const bandElement = document.createElement('div');
        bandElement.className = `band ${band.type}`;
        bandElement.style.left = `${freqToPercent(band.start)}%`;
        bandElement.style.width = `${freqToPercent(band.end) - freqToPercent(band.start)}%`;
        bandElement.addEventListener('click', (e) => openWebSDR(e, band));
        spectrum.appendChild(bandElement);
    });

    spectrum.addEventListener('click', (e) => {
        const clickedFreq = percentToFreq((e.offsetX / spectrum.offsetWidth) * 100);
        if (!isBandDefined(clickedFreq)) {
            openWebSDR(e);
        }
    });

    spectrum.addEventListener('mousemove', showTooltip);
    spectrum.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
    spectrum.addEventListener('contextmenu', showContextMenu);

    for (let freq = 0; freq <= maxFreq; freq += 1000) {
        const mark = document.createElement('div');
        mark.className = 'scale-mark';
        mark.style.left = `${freqToPercent(freq)}%`;
        scale.appendChild(mark);

        if (freq % 5000 === 0) {
            const label = document.createElement('div');
            label.className = 'scale-label';
            label.style.left = `${freqToPercent(freq)}%`;
            label.textContent = `${freq / 1000}`;
            scale.appendChild(label);
        }
    }
}

function showTooltip(e) {
    const rect = spectrum.getBoundingClientRect();
    const freq = percentToFreq((e.clientX - rect.left) / rect.width * 100);
    const band = getBandForFreq(freq);
    
    let tooltipContent = '';
    if (band) {
        tooltipContent = `${band.name}: ${freq.toFixed(2)} kHz<br>WebSDR: ${getSDRNameFromUrl(band.webSDR)}`;
    } else {
        tooltipContent = `Frequenz: ${freq.toFixed(2)} kHz<br>WebSDR: ${getSDRNameFromUrl(defaultSDR)}`;
    }
    tooltip.innerHTML = tooltipContent;
    
    tooltip.style.display = 'block';
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let left = e.clientX + 10;
    let top = e.clientY + 10;
    
    if (left + tooltipRect.width > window.innerWidth) {
        left = e.clientX - tooltipRect.width - 10;
    }
    
    if (top + tooltipRect.height > window.innerHeight) {
        top = e.clientY - tooltipRect.height - 10;
    }
    
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

function openWebSDR(e, band = null) {
    const rect = spectrum.getBoundingClientRect();
    const freq = percentToFreq((e.clientX - rect.left) / rect.width * 100);
    let mode = 'usb';
    let webSDRUrl = defaultSDR;

    if (band) {
        if (band.type === 'amateur') {
            mode = freq < 10000 ? 'lsb' : 'usb';
        } else if (band.type === 'broadcast') {
            mode = 'am';
        }
        webSDRUrl = band.webSDR;
    }

    window.open(`${webSDRUrl}?tune=${freq.toFixed(2)}${mode}`, '_blank');
}

// Kontextmenü-Funktionen
let selectedFreq = 0;

function showContextMenu(e) {
    e.preventDefault();
    const rect = spectrum.getBoundingClientRect();
    selectedFreq = percentToFreq((e.clientX - rect.left) / rect.width * 100);
    
    contextMenu.style.display = 'block';
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.top = `${e.clientY}px`;
}

function hideContextMenu() {
    contextMenu.style.display = 'none';
}

function createContextMenu() {
    const menuList = contextMenu.querySelector('ul');
    menuList.innerHTML = '';
    sdrConfig.forEach(sdr => {
        const li = document.createElement('li');
        li.textContent = sdr.name;
        li.setAttribute('data-sdr', sdr.url);
        menuList.appendChild(li);
    });
}

// Event Listener für das Kontextmenü
document.addEventListener('click', hideContextMenu);
contextMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const webSDRUrl = e.target.getAttribute('data-sdr');
        const mode = selectedFreq < 10000 ? 'lsb' : 'usb';
        window.open(`${webSDRUrl}?tune=${selectedFreq.toFixed(2)}${mode}`, '_blank');
        hideContextMenu();
    }
});

// Initialisierung
createContextMenu();
createBands();
window.addEventListener('resize', createBands);

