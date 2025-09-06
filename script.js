document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');

  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(e){

    e.preventDefault();

    const name = document.getElementById('name').value || 'Friend';

    formMessage.style.color = 'lightgreen';

    formMessage.innerText = `✅ Thanks ${name}! Your message has been received (demo).`;

    this.reset();

  });

  // Resume download button

  document.getElementById('downloadBtn').addEventListener('click', function(e){

    e.preventDefault();

    const data = `Resume - Jayapradha S\\n\\nAspiring BCA Student\\nCollege: Ratankanwar Bhawarlal Gothi Jain College for Women\\nAim: App Developer\\nSkills: Python, C++, SQL, Front-end Development`;

    const blob = new Blob([data], {type: 'text/plain'});

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');

    a.href = url; a.download = 'Jayapradha_Resume.txt';

    document.body.appendChild(a); a.click(); a.remove();

    URL.revokeObjectURL(url);

  });

});