document.addEventListener('DOMContentLoaded', function() {
  // Initialisierung des Spektrums
  createBands();
  createContextMenu();

  // Event Listener für das Fenster-Resize
  window.addEventListener('resize', createBands);

  // Überprüfung und Hinzufügen von Event Listenern für Buttons
  var sdrButton = document.getElementById('sdrButton');
  if (sdrButton) {
    sdrButton.addEventListener('click', function() {
      const frequency = 3955; // Frequenz in kHz
      const webSDRUrl = 'http://websdr.ewi.utwente.nl:8901/'; // URL des WebSDR
      const mode = 'am'; // Modulationsmodus
      window.open(`${webSDRUrl}?tune=${frequency}${mode}`, '_blank');
    });
  } else {
    console.log('Element mit ID "sdrButton" nicht gefunden');
  }

  var sdrButton2 = document.getElementById('sdrButton2');
  if (sdrButton2) {
    sdrButton2.addEventListener('click', function() {
      const frequency = 29190; // Frequenz in kHz
      const webSDRUrl = 'http://dillberg.dyndns.org:8100/'; // URL des WebSDR
      const mode = 'fm'; // Modulationsmodus
      window.open(`${webSDRUrl}?tune=${frequency}${mode}`, '_blank');
    });
  } else {
    console.log('Element mit ID "sdrButton2" nicht gefunden');
  }

  // Tab-Funktionalität
  const tabs = document.querySelectorAll('.tabs li');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      tab.classList.add('active');
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Füllen Sie hier die Frequenzbänder und SDR-Liste
  displayBands();
  displaySDRs();
  displayFrequencyBands();
});

function displaySDRs() {
  const sdrList = document.getElementById('sdrList');
  if (sdrList) {
    sdrConfig.forEach(sdr => {
      const li = document.createElement('li');
      li.textContent = `${sdr.name}: ${sdr.url}`;
      sdrList.appendChild(li);
    });
  } else {
    console.error('Element mit ID "sdrList" nicht gefunden');
  }
}

function displayFrequencyBands() {
  const container = document.getElementById('bandsContainer');
  if (!container) {
    console.error('Element mit ID "bandsContainer" nicht gefunden');
    return;
  }

  let content = '<table><thead><tr><th>Typ</th><th>Frequenzbereich (kHz)</th><th>Name</th><th>WebSDR</th></tr></thead><tbody>';
  
  bands.forEach(band => {
    content += `
      <tr>
        <td>${band.type}</td>
        <td>${band.start} - ${band.end}</td>
        <td>${band.name}</td>
        <td>${band.webSDR}</td>
      </tr>
    `;
  });

  content += '</tbody></table>';
  container.innerHTML = content;
}
document.addEventListener('DOMContentLoaded', function() {
  // Bestehender Code...

  createFrequencyButtons();
  setupContextMenu();
});

function createFrequencyButtons() {
  const container = document.getElementById('frequencyButtons');
  if (!container) return;

  bands.forEach(band => {
    const button = document.createElement('button');
    button.textContent = `${band.name} (${band.start}-${band.end} kHz)`;
    button.addEventListener('click', (e) => openSDR(e, band));
    button.addEventListener('contextmenu', (e) => showSDRContextMenu(e, band));
    container.appendChild(button);
  });
}

function openSDR(event, band) {
  event.preventDefault();
  const frequency = (band.start + band.end) / 2; // Mittlere Frequenz des Bandes
  const webSDRUrl = band.webSDR.replace('sdrConfig[', '').replace('].url', '');
  const sdr = sdrConfig[parseInt(webSDRUrl)];
  window.open(`${sdr.url}?tune=${frequency}am`, '_blank');
}

function setupContextMenu() {
  const contextMenu = document.getElementById('context-menu');
  document.addEventListener('click', () => contextMenu.style.display = 'none');
  document.addEventListener('contextmenu', (e) => e.preventDefault());
}

function showSDRContextMenu(event, band) {
  event.preventDefault();
  const contextMenu = document.getElementById('context-menu');
  contextMenu.innerHTML = '';
  contextMenu.style.display = 'block';
  contextMenu.style.left = `${event.pageX}px`;
  contextMenu.style.top = `${event.pageY}px`;

  sdrConfig.forEach((sdr, index) => {
    const item = document.createElement('li');
    item.textContent = sdr.name;
    item.addEventListener('click', () => {
      const frequency = (band.start + band.end) / 2;
      window.open(`${sdr.url}?tune=${frequency}am`, '_blank');
    });
    contextMenu.appendChild(item);
  });
}

//spezial
let datenSpeicher = "Y29weXJpZ2h0IGJ5IERMMVNKTg==";

function inhaltsVerarbeitung() {
  let anzeigeFeld = document.getElementById('blockAnzeige');
  if (anzeigeFeld) {
    anzeigeFeld.textContent = window.atob(datenSpeicher);
  }
}

document.addEventListener('DOMContentLoaded', inhaltsVerarbeitung);
