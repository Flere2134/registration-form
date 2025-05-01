const regionToProvinces = {
    'NCR': ['Metro Manila'],
    'Region I': ['Ilocos Norte', 'Ilocos Sur', 'La Union', 'Pangasinan'],
    'Region II': ['Batanes', 'Cagayan', 'Isabela', 'Nueva Vizcaya', 'Quirino'],
    'Region III': ['Aurora', 'Bataan', 'Bulacan', 'Nueva Ecija', 'Pampanga'],
    'Region IV-A': ['Batangas', 'Cavite', 'Laguna', 'Rizal', 'Quezon']
};

const provinceToCities = {
    'Ilocos Norte': ['Laoag', 'Batac', 'Pagudpud', 'Paoay', 'Sarrat'],
    'Ilocos Sur': ['Vigan', 'Candon', 'Santa Maria', 'Bantay', 'Sinait'],
    'La Union': ['San Fernando', 'Bauang', 'Agoo', 'Aringay', 'Rosario'],
    'Pangasinan': ['Dagupan', 'San Carlos', 'Urdaneta', 'Alaminos', 'Lingayen'],
    'Batanes': ['Basco', 'Mahatao', 'Ivana', 'Sabtang', 'Uyugan'],
    'Cagayan': ['Tuguegarao', 'Aparri', 'Peñablanca', 'Solana', 'Gonzaga'],
    'Isabela': ['Ilagan', 'Cauayan', 'Santiago', 'Echague', 'Reina Mercedes'],
    'Nueva Vizcaya': ['Bayombong', 'Solano', 'Villaverde', 'Sta. Fe', 'Dupax del Sur'],
    'Quirino': ['Cabarroguis', 'Maddela', 'Nagtipunan', 'Saguday', 'Diffun'],
    'Aurora': ['Baler', 'Casiguran', 'Dilasag', 'Dipaculao', 'Maria Aurora'],
    'Bataan': ['Balanga', 'Dinalupihan', 'Limay', 'Mariveles', 'Hermosa'],
    'Bulacan': ['Malolos', 'San Jose del Monte', 'Meycauayan', 'Baliuag', 'Pulilan'],
    'Nueva Ecija': ['Cabanatuan', 'Gapan', 'San Jose', 'Talavera', 'Muñoz'],
    'Pampanga': ['Angeles', 'San Fernando', 'Mabalacat', 'Bacolor', 'Lubao'],
    'Batangas': ['Batangas City', 'Lipa', 'Tanauan', 'Santo Tomas', 'Bauan'],
    'Cavite': ['Tagaytay', 'Imus', 'Dasmariñas', 'Bacoor', 'Cavite City'],
    'Laguna': ['Santa Rosa', 'Biñan', 'Calamba', 'San Pedro', 'Cabuyao'],
    'Rizal': ['Antipolo', 'Cainta', 'Taytay', 'Rodriguez', 'Binangonan'],
    'Quezon': ['Lucena', 'Tayabas', 'Mauban', 'Sariaya', 'Gumaca'],
    'Metro Manila': ['Manila', 'Quezon City', 'Makati', 'Pasig', 'Taguig']
};

const cityToBarangays = {
  'Laoag': ['San Lorenzo', 'Santa Joaquina', 'San Felipe', 'San Guillermo', 'San Pedro'],
  'Batac': ['Nalupta', 'Quiling Norte', 'Quiling Sur', 'Tabug', 'Valdez'],
  'Pagudpud': ['Balaoi', 'Caparispisan', 'Pasaleng', 'Saud', 'Subec'],
  'Paoay': ['Nagbacalan', 'Nanguyudan', 'Pasil', 'Poblacion 1', 'Poblacion 2'],
  'Sarrat': ['San Agustin', 'San Andres', 'San Antonio', 'San Francisco', 'San Joaquin'],
  'Vigan': ['Ayusan Norte', 'Ayusan Sur', 'Bantay', 'Capangpangan', 'Mindoro'],
  'Candon': ['Bagani Campo', 'Bagani Gabor', 'Bagani Tocgo', 'Calaoaan', 'Darapidap'],
  'Santa Maria': ['Baliw', 'Basug', 'Cabaroan', 'Cabittaogan', 'Calumbaya'],
  'Bantay': ['Aggay', 'Banaoang', 'Bulag', 'Cabaroan', 'Cabusligan'],
  'Sinait': ['Barikir', 'Cabangtalan', 'Calanutan', 'Casantolan', 'Dardarat'],
  'San Fernando': ['Bangbangolan', 'Biday', 'Catbangen', 'Dalumpinas Este', 'Dalumpinas Oeste'],
  'Bauang': ['Baccuit Norte', 'Baccuit Sur', 'Cabalayangan', 'Calumbaya', 'Casilagan'],
  'Agoo': ['Ambitacay', 'Aringay', 'Consolacion', 'Macalva Central', 'San Antonio'],
  'Aringay': ['Alaska', 'Aringay', 'Dulao', 'Macabato', 'San Benito'],
  'Rosario': ['Agoo', 'Bacani', 'Balite', 'Bani', 'Benteng'],
  'Dagupan': ['Bacayao Norte', 'Bacayao Sur', 'Bonuan Binloc', 'Bonuan Gueset', 'Bonuan Boquig'],
  'San Carlos': ['Alos', 'Balaya', 'Balococ', 'Bocboc', 'Bugallon-Posadas'],
  'Urdaneta': ['Anonas', 'Bayaoas', 'Cabaruan', 'Camantiles', 'Casantaan'],
  'Alaminos': ['Amandiego', 'Amangbangan', 'Balangobong', 'Bued', 'Cayucay'],
  'Lingayen': ['Aliwekwek', 'Baay', 'Balangobong', 'Bantayan', 'Baritao'],
  'Basco': ['Chanarian', 'Ihubok I', 'Ihubok II', 'Kayvaluganan', 'Kaychanarianan'],
  'Mahatao': ['Hanib', 'Kaumbagan', 'Panatayan', 'Uvoy', 'Vatang'],
  'Ivana': ['Radiwan', 'Salagao', 'San Vicente', 'Tuhel', 'Yaru'],
  'Sabtang': ['Chavayan', 'Malakdang', 'Nakanmuan', 'Savidug', 'Sinakan'],
  'Uyugan': ['Itbud', 'Kayuganan', 'Imnajbu', 'Kayvaluganan', 'Kayuganan'],
  'Tuguegarao': ['Annafunan East', 'Annafunan West', 'Atulayan Norte', 'Atulayan Sur', 'Bagay'],
  'Aparri': ['Ballesteros', 'Barraca', 'Centro 1', 'Centro 2', 'Centro 3'],
  'Peñablanca': ['Aggugaddan', 'Bugatay', 'Cabbo', 'Callao', 'Camasi'],
  'Solana': ['Andarayan', 'Bagay', 'Basi', 'Cataggaman', 'Dummun'],
  'Gonzaga': ['Baua', 'Callao', 'Caroan', 'Casitan', 'Dungeg'],
  'Ilagan': ['Alibagu', 'Baculud', 'Baligatan', 'Bliss Village', 'Cab. 1'],
  'Cauayan': ['Alicaocao', 'Bacabac', 'Cabaruan', 'Cabugao', 'Calamagui 1st'],
  'Santiago': ['Batal', 'Buenavista', 'Divisoria', 'Dubinan East', 'Dubinan West'],
  'Echague': ['Alibagu', 'Bimmotobot', 'Buenavista', 'Cabugao', 'Calamagui'],
  'Reina Mercedes': ['Baculud', 'Baligatan', 'Bliss Village', 'Cab. 1', 'Cab. 2'],
  'Bayombong': ['Banganan', 'Bonfal East', 'Bonfal Proper', 'Bonfal West', 'Buag'],
  'Solano': ['Aggub', 'Bagahabag', 'Bangar', 'Bascaran', 'Bintawan'],
  'Villaverde': ['Bintawan Norte', 'Bintawan Sur', 'Cabuluan', 'Ibung', 'Nagbitin'],
  'Sta. Fe': ['Baliling', 'Bantinan', 'Baracbac', 'Binalian', 'Buag'],
  'Dupax del Sur': ['Abaca', 'Balete', 'Binuangan', 'Bitnong', 'Bugkalot'],
  'Cabarroguis': ['Andres Bonifacio', 'Burgos', 'Calaocan', 'Del Pilar', 'Dibibi'],
  'Maddela': ['Balligui', 'Cabaruan', 'Cabugao', 'Calabayan', 'Caliguian'],
  'Nagtipunan': ['Anak', 'Asaklat', 'Dipantan', 'Disimungal', 'Guingin'],
  'Saguday': ['Cardenas', 'Dibul', 'Diodol', 'La Paz', 'Rizal'],
  'Diffun': ['Andres Bonifacio', 'Aurora East', 'Aurora West', 'Baguio Village', 'Burgos'],
  'Baler': ['Obligacion', 'Pingit', 'Reserva', 'Sabang', 'Zabali'],
  'Casiguran': ['Esteves', 'Lual', 'Marikit', 'San Ildefonso', 'Tinib'],
  'Dilasag': ['Esperanza', 'Lawang', 'Maligaya (Poblacion)', 'Manggitahan', 'Masagana (Poblacion)'],
  'Dipaculao': ['Bayabas', 'Borlongan', 'Buenavista', 'Calaocan', 'Diamanen'],
  'Maria Aurora': ['Estonilo', 'Florida', 'Galintuja', 'Malasin', 'San Jose'],
  'Balanga': ['Bagumbayan', 'Cabog-Cabog', 'Munting Batangas (Cadre)', 'Cataning', 'Central'],
  'Dinalupihan': ['Bangal', 'Bonifacio', 'Burgos', 'Colo', 'Daang Bago'],
  'Limay': ['Alangan', 'Kitang I', 'Kitang II', 'Lamao', 'Poblacion'],
  'Mariveles': ['Alas-asin', 'Balon Anito', 'Batangas II', 'Biaan', 'Camaya'],
  'Hermosa': ['Almacen', 'Bamban', 'Burgos-Soliman', 'Cataning', 'Mabiga'],
  'Malolos': ['Mojon', 'Namayan', 'Niugan', 'Pamarawan', 'Panasahan'],
  'San Jose del Monte': ['Kaybanban', 'Kaypian', 'Maharlika', 'Muzon East', 'Gaya-Gaya'],
  'Meycauayan': ['Bagbaguin', 'Bahay Pare', 'Banga', 'Bayugo', 'Caingin'],
  'Baliuag': ['Bagong Nayon', 'Bagong Silang', 'Barangca', 'Calantipay', 'Catulinan'],
  'Pulilan': ['Balatong A', 'Balatong B', 'Cutcot', 'Dampol 1st', 'Dampol 2nd A'],
  'Cabanatuan': ['Bagong Sikat', 'Bakero', 'Balite', 'Bangad', 'Barrio Kapitan Pepe'],
  'Gapan': ['Balante', 'Bayanihan', 'Bulak', 'Cacaritan', 'Concepcion'],
  'San Jose': ['A. Pascual', 'Abar Primero', 'Abar Segundo', 'Bagong Sikat', 'Caanawan'],
  'Talavera': ['Bagong Silang', 'Bakal I', 'Bakal II', 'Bakal III', 'Bulac'],
  'Muñoz': ['Bantug', 'Bantug Hacienda', 'Bantug Norte', 'Bantug Sur', 'Bantug West'],
  'Angeles': ['Agapito del Rosario', 'Amsic', 'Anunas', 'Balibago', 'Capaya'],
  'San Fernando': ['Alasas', 'Baliti', 'Bulaon', 'Calulut', 'Del Carmen'],
  'Mabalacat': ['Atlu-Bola', 'Bical', 'Camachiles', 'Dapdap', 'Dolores'],
  'Bacolor': ['Balas', 'Cabalantian', 'Cabalantian', 'Cabalantian', 'Cabalantian'],
  'Lubao': ['Bancal Pugad', 'Bancal Sinubli', 'Bancal Sinubli', 'Bancal Sinubli', 'Bancal Sinubli'],
  'Batangas City': ['Alangilan', 'Balagtas', 'Banaba Center', 'Banaba East', 'Banaba South'],
  'Lipa': ['Anilao', 'Antipolo del Norte', 'Antipolo del Sur', 'Balintawak', 'Banaybanay'],
  'Tanauan': ['Altura Bata', 'Altura Matanda', 'Altura South', 'Ambulong', 'Bagbag'],
  'Santo Tomas': ['San Antonio', 'San Bartolome', 'San Felix', 'San Francisco', 'San Isidro'],
  'Bauan': ['Alagao', 'Aplaya', 'As-is', 'Bagalangit', 'Bagong Silang'],
  'Tagaytay': ['Asisan', 'Bagong Tubig', 'Calabuso', 'Dapdap East', 'Dapdap West'],
  'Imus': ['Alapan I-A', 'Alapan I-B', 'Alapan II-A', 'Alapan II-B', 'Anabu I-A'],
  'Dasmariñas': ['Burol I', 'Burol II', 'Burol III', 'Burol IV', 'Burol V'],
  'Bacoor': ['Alima', 'Aniban I', 'Aniban II', 'Aniban III', 'Aniban IV'],
  'Cavite City': ['Barangay 1', 'Barangay 2', 'Barangay 3', 'Barangay 4', 'Barangay 5'],
  'Santa Rosa': ['Aplaya', 'Balibago', 'Caingin', 'Dila', 'Dita'],
  'Biñan': ['Canlalay', 'De La Paz', 'Bungahan', 'Canlalay', 'Ganado'],
  'Calamba': ['Bagong Kalsada', 'Banadero', 'Banlic', 'Barandal', 'Bubuyan'],
  'San Pedro': ['Bagong Silang', 'Calendola', 'Cuyab', 'Fatima', 'G.S.I.S.'],
  'Cabuyao': ['Banay-Banay', 'Banlic', 'Bigaa', 'Butong', 'Casile'],
  'Antipolo': ['Bagong Nayon', 'Beverly Hills', 'Cupang', 'Dalig', 'Dela Paz'],
  'Cainta': ['Santo Domingo', 'San Juan', 'San Isidro', 'San Roque', 'Santa Rosa'],
  'Taytay': ['Dolores', 'Muzon', 'San Isidro', 'San Juan', 'Santa Ana'],
  'Rodriguez': ['Balite', 'Burgos', 'Geronimo', 'Macabud', 'Manggahan'],
  'Binangonan': ['Bilibiran', 'Binitagan', 'Buhangin', 'Calumpang', 'Ginoong Sanay'],
  'Lucena': ['Barra', 'Bocohan', 'Cotta', 'Domoit', 'Isabang'],
  'Tayabas': ['Alitao', 'Angeles Zone I', 'Angeles Zone II', 'Angeles Zone III', 'Angeles Zone IV'],
  'Mauban': ['Barangay 1', 'Barangay 2', 'Barangay 3', 'Barangay 4', 'Barangay 5'],
  'Sariaya': ['Antipolo', 'Balubal', 'Bignay I', 'Bignay II', 'Bignay III'],
  'Gumaca': ['Adia Bitaog', 'Anonangin', 'Bamban', 'Tumayan', 'San Diego'],
  'Manila': ['Binondo', 'Ermita', 'San Nicolas', 'Pandacan', 'Malate'],
  'Quezon City': ['Bagong Pag-asa', 'Bagumbayan', 'Bagumbuhay', 'Bagong Silangan', 'Bahay Toro'],
  'Makati': ['Bangkal', 'Bel-Air', 'Carmona', 'Cembo', 'Comembo'],
  'Pasig': ['Bagong Ilog', 'Bagong Katipunan', 'Bagong Tanyag', 'Bagong Tanyag', 'Bagong Tanyag'],
  'Taguig': ['Bagumbayan', 'Bambang', 'Calzada', 'Central Bicutan', 'Central Signal Village']
};
 


//DOM refs//
const regionSelect = document.getElementById('region');
const provinceSelect = document.getElementById('province');
const citySelect = document.getElementById('city');
const barangaySelect = document.getElementById('barangay');
const regPasswordInput = document.getElementById('regPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordFeedback = document.getElementById('passwordFeedback');


//switching from Register to Login pages
function switchToRegister() {
    document.querySelector('section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

function switchToLogin() {
    document.getElementById('register-section').style.display = 'none';
    document.querySelector('section').style.display = 'block';
}

//password strength test
function validatePasswordStrength(password) {
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  return strongRegex.test(password);
}

regPasswordInput.addEventListener('input', () => {
  const password = regPasswordInput.value;

  if (!validatePasswordStrength(password)) {
      passwordFeedback.textContent = "Password must include uppercase, lowercase, number, and special character.";
      passwordFeedback.classList.remove("valid");
  } 
  else {
      passwordFeedback.textContent = "Strong password ✅";
      passwordFeedback.classList.add("valid");
  }
});

//show password toggle
document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', () => {
    const targetInput = document.getElementById(icon.dataset.target);
    const isPassword = targetInput.type === 'password';
    targetInput.type = isPassword ? 'text' : 'password';
    icon.classList.toggle('bx-show');
    icon.classList.toggle('bx-hide');
  });
});

//validate password
document.getElementById('register-form').addEventListener('submit', function(e) {
  const password = document.getElementById('regPassword').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  //block if password and confirm password are not same
  if(password !== confirmPassword) {
    e.preventDefault(); //prevents submitting
    alert('Passwords do not match. Try again.');
    document.getElementById('confirmPassword').focus();
  }
  else {
    document.getElementById('confirmPassword').classList.remove('mismatch');
  }

  // Block if password is weak
  if (!validatePasswordStrength(password)) {
    e.preventDefault();
    alert('Password is not strong enough.\nIt must include uppercase, lowercase, number, and special character.');
    regPasswordInput.focus();
    return;
  }
});

//Address Input
regionSelect.addEventListener('change', () => {
    const region = regionSelect.value;
  
    // Reset provinces
    provinceSelect.innerHTML = '<option value="">-- Select Province --</option>';
    provinceSelect.disabled = !region;
  
    // Reset cities
    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    citySelect.disabled = true;

    // Reset barangay
    barangaySelect.innerHTML = '<option value="">-- Select Barangay --</option>';
    barangaySelect.disabled = true;
  
    if (regionToProvinces[region]) {
      regionToProvinces[region].forEach(prov => {
        const opt = document.createElement('option');
        opt.value = prov;
        opt.textContent = prov;
        provinceSelect.appendChild(opt);
      });
    }
});

provinceSelect.addEventListener('change', () => {
    const province = provinceSelect.value;
  
    // Reset cities
    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    citySelect.disabled = !province;

    // Reset barangay
    barangaySelect.innerHTML = '<option value="">-- Select Barangay --</option>';
    barangaySelect.disabled = true;  
  
    if (provinceToCities[province]) {
      provinceToCities[province].forEach(city => {
        const opt = document.createElement('option');
        opt.value = city;
        opt.textContent = city;
        citySelect.appendChild(opt);
      });
    }
});

citySelect.addEventListener('change', () => {
  const city = citySelect.value;

  // Reset barangay
  barangaySelect.innerHTML = '<option value="">-- Select Barangay --</option>';
  barangaySelect.disabled = !barangay; 

  if(cityToBarangays[city]) {
    cityToBarangays[city].forEach(barangay => {
      const opt = document.createElement('option');
      opt.value = barangay;
      opt.textContent = barangay;
      barangaySelect.appendChild(opt);
    });
  }
});