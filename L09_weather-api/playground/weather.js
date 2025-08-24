const button = document.getElementById('submit');
const input = document.getElementById('cityName');
const weatherCard = document.querySelector('.weather-card');

// Definované funkce na mazání, zobrazení chyb a formátování. 
const msgError = (msg) => {
    const oldError = document.querySelector('.error');
    if (oldError) {
        oldError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.style.color = 'red';
    errorDiv.style.padding = '10px'; 
    errorDiv.style.textAlign = 'center';
    errorDiv.textContent = msg;
    
    weatherCard.appendChild(errorDiv);
};

const deleteResults = () => {
    const oldResults = document.querySelector('.results');
    if (oldResults) {
        oldResults.remove();
    }
};

const splitCities = (text) => {
    const cities = text.split(/[,;]/);
    const cleanCities = [];
    for (let i = 0; i < cities.length; i++) {
        const city = cities[i].trim();
        if (city.length > 0) {
            cleanCities.push(city);
        }
    }
    return cleanCities;
};

// Weather API a zobrazení výsledků.
const findGPS = async (city) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=cs`;
    const response = await fetch(url);
    
    const data = await response.json();
    if (data.results.length === 0) {
        throw new Error(`Město "${city}" nebylo nalezeno.`);
    }
    return data.results[0];
};
/*     try {
        const response = await fetch(url);
        
        // Kontrola HTTP status kódu
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} pro město "${city}"`);
        }
        
        const data = await response.json();
        
        // Kontrola, zda results existuje a je to pole
        if (!data.results || !Array.isArray(data.results)) {
            throw new Error(`Neplatná odpověď API pro město "${city}"`);
        }
        
        // Kontrola, zda bylo město nalezeno
        if (data.results.length === 0) {
            throw new Error(`Město "${city}" nebylo nalezeno`);
        }
        
        // Kontrola, zda má výsledek potřebné souřadnice
        const result = data.results[0];
        if (!result.latitude || !result.longitude) {
            throw new Error(`Chybí souřadnice pro město "${city}"`);
        }
        
        return {
            ...result,
            originalCityName: city // Uchováme původní název pro případ chyby
        };
    } catch (error) {
        // Přeposlání chyby s kontextem
        throw new Error(`Chyba při hledání GPS pro "${city}": ${error.message}`);
    } */



const getWeather = async (latitude, longitude) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`;
    const response = await fetch(url);
    const data = await response.json();
    if (!data.daily) {
        throw new Error('Nepodařilo se získat data o počasí.');
    }
    return {
        min: data.daily.temperature_2m_min[0],
        max: data.daily.temperature_2m_max[0]
    };
   
    /*   try {
        const response = await fetch(url);
        
        // Kontrola HTTP status kódu
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Detailní kontrola struktury dat
        if (!data.daily || 
            !Array.isArray(data.daily.temperature_2m_min) || 
            !Array.isArray(data.daily.temperature_2m_max) ||
            data.daily.temperature_2m_min.length === 0 ||
            data.daily.temperature_2m_max.length === 0) {
            throw new Error('Neplatná struktura dat o počasí');
        }
        
        return {
            name: name || originalCityName,
            min: data.daily.temperature_2m_min[0],
            max: data.daily.temperature_2m_max[0],
            success: true
        };
    } catch (error) {
        // Vrátíme objekt s chybou místo vyhození výjimky
        return {
            name: name || originalCityName,
            error: error.message,
            success: false
        };
    }
};*/
};

const showResults = (results) => {
    const container = document.createElement('div');
    container.className = 'results';
    container.style.padding = '10px';
    for (let i = 0; i < results.length; i++) {
        const city = results[i];
       
        const cityDiv = document.createElement('div');
        cityDiv.style.border = '1px solid #000';
        cityDiv.style.borderRadius = '5px';
        cityDiv.style.padding = '10px';
        cityDiv.style.marginTop = '10px';
        cityDiv.style.background = 'rgba(255, 255, 255, 0.9)';        
    
        if (city.min === 'error' || city.max === 'error') {
            cityDiv.textContent = `Město: ${city.name} - Chyba: ${city.min}`;
        } else {
            cityDiv.innerHTML = `
                <strong style="font-size: 20px;">${city.name}</strong><br>
                <span style="color: #0066cc;">Min: ${city.min}°C</span><br>
                <span style="color: #cc0000;">Max: ${city.max}°C</span>
            `;
        }
        container.appendChild(cityDiv);
    };
    weatherCard.appendChild(container);
};

// Ovládání formuláře
const processForm = async () => {
    deleteResults();
    msgError();

    const cityName = input.value.trim();
    if (cityName.length === 0) {
        msgError('Zadejte název města.');
        return;
    }

    let cities = splitCities(cityName);
    if (cities.length > 3) {
        msgError('Zadejte maximálně 3 města.');
        cities = cities.slice(0, 3);
    }

    button.disabled = true;
    button.textContent = 'Hledám...';

    const results = [];
    for (let i = 0; i < cities.length; i++) {
        try {
            const city = cities[i];
            const gps = await findGPS(city);
            const weather = await getWeather(gps.latitude, gps.longitude);
            results.push({
                name: gps.name,
                min: weather.min,
                max: weather.max
            });
        } catch (error) {
            console.error(`Chyba pro město ${cities[i]}:`, error.message);
                 
        }
    }
    if (results.length > 0) {
        showResults(results);
    } else {
        msgError('Žádné výsledky nebyly nalezeny.');
    }
    button.disabled = false;
    button.textContent = 'Vyhledat počasí';
};

button.addEventListener('click', processForm);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        processForm();
    }
});

