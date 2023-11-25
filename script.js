document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('doctorForm');
  const tableBody = document.getElementById('doctorTableBody');
  const filterSelect = document.getElementById('filter');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const doctorId = document.getElementById('doctor_id').value;
    const specialization = document.getElementById('specialization').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    
    let role;
    if (experience > 5) {
      role = 'Senior';
    } else if (experience >= 2 && experience <= 5) {
      role = 'Junior';
    } else {
      role = 'Trainee';
    }

    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${doctorId}</td>
      <td>${specialization}</td>
      <td>${experience}</td>
      <td>${email}</td>
      <td>${mobile}</td>
      <td>${role}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

  
    form.reset();
  });


  window.deleteRow = function (button) {
    const row = button.parentNode.parentNode;
    tableBody.removeChild(row);
  };

  filterSelect.addEventListener('change', function () {
    const selectedSpecialization = filterSelect.value.toLowerCase();
    const rows = tableBody.getElementsByTagName('tr');

    for (const row of rows) {
      const cells = row.getElementsByTagName('td');
      const rowSpecialization = cells[2].innerText.toLowerCase();

      if (selectedSpecialization === '' || rowSpecialization === selectedSpecialization) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  });
});
