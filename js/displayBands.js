function displayBands() {
  const container = document.getElementById('bandsContainer');
  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Typ</th>
          <th>Frequenzbereich (kHz)</th>
          <th>Name</th>
          <th>WebSDR</th>
        </tr>
      </thead>
      <tbody>
  `;

  bands.forEach(band => {
    tableHTML += `
      <tr>
        <td>${band.type}</td>
        <td>${band.start} - ${band.end}</td>
        <td>${band.name}</td>
        <td><a href="${band.webSDR}" target="_blank">WebSDR öffnen</a></td>
      </tr>
    `;
  });

  tableHTML += `
      </tbody>
    </table>
  `;

  container.innerHTML = tableHTML;
}

document.addEventListener('DOMContentLoaded', displayBands);

