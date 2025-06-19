// script.js

// Toggle password visibility for login page
function togglePassword() {
  const passwordInput = document.getElementById('password');
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// Doctors data for appointments page
const doctors = {
  Cardiology: [
    { name: "Dr. Alice Heart", spec: "Cardiologist", bio: "Expert in heart care and cardiac surgery." },
    { name: "Dr. John Valve", spec: "Cardiologist", bio: "Specialist in interventional cardiology." },
    { name: "Dr. Emma Pulse", spec: "Cardiologist", bio: "Focuses on preventive heart health." },
    { name: "Dr. Mark Artery", spec: "Cardiologist", bio: "Experienced in vascular treatments." },
    { name: "Dr. Nina Beat", spec: "Cardiologist", bio: "Renowned for electrophysiology." },
  ],
  Neurology: [
    { name: "Dr. Brian Mind", spec: "Neurologist", bio: "Treats brain and nervous system disorders." },
    { name: "Dr. Sophia Nerve", spec: "Neurologist", bio: "Specialist in neurodegenerative diseases." },
    { name: "Dr. Leo Spine", spec: "Neurologist", bio: "Expert in spinal cord injuries." },
    { name: "Dr. Chloe Brainy", spec: "Neurologist", bio: "Focuses on epilepsy treatment." },
    { name: "Dr. Noah Synapse", spec: "Neurologist", bio: "Researcher in neuroplasticity." },
  ],
  Orthopedics: [
    { name: "Dr. Mason Joint", spec: "Orthopedic", bio: "Specialist in joint replacements." },
    { name: "Dr. Olivia Bone", spec: "Orthopedic", bio: "Expert in pediatric orthopedics." },
    { name: "Dr. Liam Fracture", spec: "Orthopedic", bio: "Focuses on trauma surgeries." },
    { name: "Dr. Ava Spine", spec: "Orthopedic", bio: "Spine surgery specialist." },
    { name: "Dr. Ethan Limb", spec: "Orthopedic", bio: "Proficient in sports injuries." },
  ],
  Pediatrics: [
    { name: "Dr. Lily Child", spec: "Pediatrician", bio: "Child healthcare expert." },
    { name: "Dr. Jack Tiny", spec: "Pediatrician", bio: "Specializes in infant care." },
    { name: "Dr. Grace Young", spec: "Pediatrician", bio: "Focuses on adolescent medicine." },
    { name: "Dr. Henry Smile", spec: "Pediatrician", bio: "Skilled in pediatric emergencies." },
    { name: "Dr. Emily Happy", spec: "Pediatrician", bio: "Nutrition and development specialist." },
  ],
  Dermatology: [
    { name: "Dr. Zoe Skin", spec: "Dermatologist", bio: "Treats skin conditions and cosmetic concerns." },
    { name: "Dr. Mia Glow", spec: "Dermatologist", bio: "Specializes in acne and skin rejuvenation." },
    { name: "Dr. Ryan Smooth", spec: "Dermatologist", bio: "Focuses on laser treatments." },
    { name: "Dr. Ella Derm", spec: "Dermatologist", bio: "Expert in psoriasis care." },
    { name: "Dr. Luke Clear", spec: "Dermatologist", bio: "Specialist in hair and scalp disorders." },
  ],
  "General Medicine": [
    { name: "Dr. Sarah Care", spec: "General Physician", bio: "Handles general health concerns." },
    { name: "Dr. Daniel Heal", spec: "General Physician", bio: "Focuses on routine check-ups." },
    { name: "Dr. Hannah Well", spec: "General Physician", bio: "Expert in lifestyle diseases." },
    { name: "Dr. Benjamin Treat", spec: "General Physician", bio: "Experienced in chronic illnesses." },
    { name: "Dr. Victoria Health", spec: "General Physician", bio: "Promotes preventive healthcare." },
  ],
};

// Filter doctors on appointments page
function filterDoctors(department) {
  const container = document.getElementById('doctor-cards');
  const welcome = document.getElementById('welcome-message');
  if (!container) return;
  if (welcome) welcome.style.display = 'none';
  container.innerHTML = '';
  doctors[department].forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doctor-card';
    card.innerHTML = `
      <div class="doctor-info">
        <h3>${doc.name}</h3>
        <p><strong>${doc.spec}</strong></p>
        <p>${doc.bio}</p>
      </div>
      <a href="/booking?department=${encodeURIComponent(department)}&doctor=${encodeURIComponent(doc.name)}" class="book-btn">Book Now</a>
    `;
    container.appendChild(card);
  });
}

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Show the popup
  const popup = document.getElementById('success-popup');
  popup.style.display = 'block';
  // Optional: clear form
  this.reset();
  // Wait 5 sec, then redirect
  setTimeout(() => {
    window.location.href = "/appointment";
  }, 5000);
});
