📋 Shrnutí úkolu – Lekce 9: Weather API
📊 Základní info
Body: 10
Deadline: 18.8.2025
Assignee: @ladariha

🎯 Cíl úkolu
Procvičit GitHub flow, práci s JavaScript, fetch API a zpracování dat z externího API pro získání předpovědi počasí.

✅ Checklist kroků

1️⃣ GitHub flow
- Vytvořte novou branch z main (např. feature/L09_weather-api).
- Pracujte v adresáři playground.

2️⃣ Vytvoření HTML souboru
- Vytvořte nový soubor weather.html v adresáři playground.
- Soubor musí obsahovat:
    - Formulář s jedním textovým polem pro zadání měst
    - Tlačítko pro odeslání formuláře
    - Místo pro zobrazení výsledků předpovědi

3️⃣ Zpracování vstupních dat
- Textové pole: Uživatel může zadat 1-3 města oddělená čárkou nebo středníkem
    - Příklad: "Praha, Brno" nebo "Praha;Brno;Ostrava"
- Validace: Maximálně 3 města, ošetřete prázdné hodnoty
- Parsing: Rozdělte text podle čárky nebo středníku a odstraňte mezery

4️⃣ API integrace
- Použijte Open-Meteo API: https://open-meteo.com/en/docs
- Získejte předpověď počasí na 1 den pro zadaná města
- Optimalizace: Snažte se o co nejefektivnější volání API
- Error handling: Ošetřete chybové stavy a neplatné odpovědi
- Pokud API vrací pole záznamů, vyberte první

5️⃣ Zobrazení výsledků
- Pro každé město zobrazte:
    - Název města
    - Minimální teplotu ve °C
    - Maximální teplotu ve °C
Aktualizace: Při novém hledání odstraňte předchozí výsledky
Vizuální styl není předmětem hodnocení

6️⃣ Pull Request
Vytvořte PR z vaší branch do main
Nastavte @ladariha jako assignee
Počkejte na code review a případně zapracujte připomínky

💡 Příklad struktury
projekt/
├── README.md
└── playground/
    ├── table.html
    ├── style.css
    └── weather.html    ← nový soubor

🌡️ Příklad výstupu
    Praha: Min: 15°C, Max: 25°C
    Brno: Min: 13°C, Max: 23°C
    Ostrava: Min: 14°C, Max: 22°C
    
⚠️ Důležité poznámky
Používejte GitHub flow (branch → changes → PR → review → merge)
Implementujte správné error handling pro API volání
Optimalizujte počet API requestů
Validujte uživatelský vstup (max 3 města)
Vizuální design není hodnocen, zaměřte se na funkcionalitu