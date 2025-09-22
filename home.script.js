document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    
    const fetchWeather = async () => {
        // IMPORTANT: Replace with your OpenWeatherMap API key
        const apiKey = 'YOUR_API_KEY_HERE'; 
        const city = 'Varanasi'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const weatherLoadingEl = document.getElementById('weather-loading');
        const weatherDataEl = document.getElementById('weather-data');

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Weather data not available.');
            const data = await response.json();
            
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById('weather-temp').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('weather-desc').textContent = data.weather[0].description;
            document.getElementById('weather-location').textContent = data.name;
            
            weatherLoadingEl.classList.add('hidden');
            weatherDataEl.classList.remove('hidden');

        } catch (error) {
            console.error('Error fetching weather:', error);
            weatherLoadingEl.textContent = 'Could not load weather.';
        }
    };

    const translations = {
        en: {
            appTitle: "Farmer's Dashboard", selectLanguage: 'Language:', welcome: 'Welcome, Farmer!', tagline: 'Here are your smart farming tools.', weatherTitle: 'Weather Forecast', weatherLoading: 'Loading weather...', marketTitle: 'Market Prices', marketDesc: 'Track live crop prices from nearby markets.', cropTitle: 'Crop Advisory', cropDesc: 'Personalized advice on which crops to sow.', pestTitle: 'Pest Detection', pestDesc: 'Upload a photo to identify pests and diseases.'
        },
        hi: {
            appTitle: 'किसान डैशबोर्ड', selectLanguage: 'भाषा:', welcome: 'आपका स्वागत है, किसान!', tagline: 'आपके स्मार्ट खेती उपकरण यहाँ हैं।', weatherTitle: 'मौसम पूर्वानुमान', weatherLoading: 'मौसम लोड हो रहा है...', marketTitle: 'बाजार मूल्य', marketDesc: 'आस-पास के बाजारों से फसलों की लाइव कीमतें ट्रैक करें।', cropTitle: 'फसल सलाह', cropDesc: 'कौन सी फसल बोनी है, इस पर व्यक्तिगत सलाह।', pestTitle: 'कीट पहचान', pestDesc: 'कीटों और रोगों की पहचान के लिए एक फोटो अपलोड करें।'
        },
        pa: {
            appTitle: 'ਕਿਸਾਨ ਦਾ ਡੈਸ਼ਬੋਰਡ', selectLanguage: 'ਭਾਸ਼ਾ:', welcome: 'ਜੀ ਆਇਆਂ ਨੂੰ, ਕਿਸਾਨ!', tagline: 'ਤੁਹਾਡੇ ਸਮਾਰਟ ਖੇਤੀ ਸੰਦ ਇੱਥੇ ਹਨ।', weatherTitle: 'ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ', weatherLoading: 'ਮੌਸਮ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...', marketTitle: 'ਬਾਜ਼ਾਰ ਦੀਆਂ ਕੀਮਤਾਂ', marketDesc: 'ਨੇੜਲੇ ਬਾਜ਼ਾਰਾਂ ਤੋਂ ਫਸਲਾਂ ਦੀਆਂ ਲਾਈਵ ਕੀਮਤਾਂ ਨੂੰ ਟਰੈਕ ਕਰੋ।', cropTitle: 'ਫਸਲ ਸਲਾਹ', cropDesc: 'ਕਿਹੜੀਆਂ ਫਸਲਾਂ ਬੀਜਣੀਆਂ ਹਨ ਇਸ ਬਾਰੇ ਵਿਅਕਤੀਗਤ ਸਲਾਹ।', pestTitle: 'ਕੀੜਿਆਂ ਦੀ ਪਛਾਣ', pestDesc: 'ਕੀੜਿਆਂ ਅਤੇ ਬਿਮਾਰੀਆਂ ਦੀ ਪਛਾਣ ਕਰਨ ਲਈ ਇੱਕ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ।'
        },
        ta: {
            appTitle: 'விவசாயியின் டாஷ்போர்டு', selectLanguage: 'மொழி:', welcome: 'வருக, விவசாயி!', tagline: 'உங்கள் έξυπனான விவசாய கருவிகள் இங்கே உள்ளன.', weatherTitle: 'வானிலை முன்னறிவிப்பு', weatherLoading: 'வானிலை ஏற்றப்படுகிறது...', marketTitle: 'சந்தை விலைகள்', marketDesc: 'அருகிலுள்ள சந்தைகளிலிருந்து நேரடி பயிர் விலைகளைக் கண்காணிக்கவும்.', cropTitle: 'பயிர் ஆலோசனை', cropDesc: 'எந்த பயிர்களை விதைக்க வேண்டும் என்பது குறித்த தனிப்பட்ட ஆலோசனை.', pestTitle: 'பூச்சி கண்டறிதல்', pestDesc: 'பூச்சிகள் மற்றும் நோய்களை அடையாளம் காண ஒரு புகைப்படத்தைப் பதிவேற்றவும்.'
        },
        te: {
            appTitle: 'రైతు డాష్‌బోర్డ్', selectLanguage: 'భాష:', welcome: 'స్వాగతం, రైతు!', tagline: 'మీ స్మార్ట్ వ్యవసాయ సాధనాలు ఇక్కడ ఉన్నాయి.', weatherTitle: 'వాతావరణ సూచన', weatherLoading: 'వాతావరణం లోడ్ అవుతోంది...', marketTitle: 'మార్కెట్ ధరలు', marketDesc: 'సమీప మార్కెట్ల నుండి ప్రత్యక్ష పంట ధరలను ట్రాక్ చేయండి.', cropTitle: 'పంట సలహా', cropDesc: 'ఏ పంటలు వేయాలో వ్యక్తిగత సలహా.', pestTitle: 'తెగుళ్ల గుర్తింపు', pestDesc: 'తెగుళ్లు మరియు వ్యాధులను గుర్తించడానికి ఫోటోను అప్‌లోడ్ చేయండి.'
        },
        kn: {
            appTitle: 'ರೈತರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', selectLanguage: 'ಭಾಷೆ:', welcome: 'ಸುಸ್ವಾಗತ, ರೈತ!', tagline: 'ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಉಪಕರಣಗಳು ಇಲ್ಲಿವೆ.', weatherTitle: 'ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ', weatherLoading: 'ಹವಾಮಾನ ಲೋಡ್ ಆಗುತ್ತಿದೆ...', marketTitle: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು', marketDesc: 'ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆಗಳಿಂದ ನೇರ ಬೆಳೆ ಬೆಲೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.', cropTitle: 'ಬೆಳೆ ಸಲಹೆ', cropDesc: 'ಯಾವ ಬೆಳೆಯನ್ನು ಬಿತ್ತನೆ ಮಾಡಬೇಕು ಎಂಬುದರ ಕುರಿತು ವೈಯਕਤੀਗਤ ಸಲಹೆ.', pestTitle: 'ಕೀਟ ಪತ್ತೆ', pestDesc: 'ಕೀਟಗಳು ಮತ್ತು ರೋಗಗಳನ್ನು ಗುರುತಿಸಲು ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.'
        }
    };

    const translatePage = (language) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    };

    languageSelect.addEventListener('change', (event) => translatePage(event.target.value));

    fetchWeather();
    translatePage('en');
});
