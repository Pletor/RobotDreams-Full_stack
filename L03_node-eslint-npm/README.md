📋 Shrnutí úkolu - Lekce 3: Full-stack pro začátečníky
📊 Základní info

Body: 10
Deadline: 14.7.2025
Assignee: @ladariha

🎯 Cíl úkolu
Naučit se základy GitHub flow, npm package management a ESLint konfiguraci.
✅ Checklist kroků
1️⃣ GitHub setup

 Vytvořit nový repozitář na GitHubu
 Přidat pouze soubor README.md
 Vytvořit novou branch pro změny

2️⃣ Struktura projektu

 Vytvořit adresář playground/
 Vytvořit soubor playground/package.json
 Doplnit do package.json:

Informace o autorovi
URL repozitáře
Odkaz na hlášení chyb (issues)



3️⃣ ESLint konfigurace

 Nainstalovat ESLint verze 9
 Přidat @eslint/js (recommended config)
 Přidat @stylistic/eslint-plugin-js
 Vytvořit konfigurační soubor pro ESLint

4️⃣ NPM scripty

 Přidat script pro spuštění ESLint
 Přidat script pro ESLint s --fix parametrem

5️⃣ JavaScript soubor

 Vytvořit playground/index.js
 Přidat kód: console.log(new Date().toLocaleTimeString())

6️⃣ Pull Request

 Vytvořit PR z vaší branch do main
 Nastavit @ladariha jako assignee
 Počkat na code review
 Zapracovat případné připomínky

💡 Příklad struktury
projekt/
├── README.md
└── playground/
    ├── package.json
    ├── eslint.config.js
    └── index.js
🔧 Příklad package.json
json{
  "name": "playground",
  "version": "1.0.0",
  "author": "Vaše Jméno <email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/username/repo-name"
  },
  "bugs": {
    "url": "https://github.com/username/repo-name/issues"
  },
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
⚠️ Důležité poznámky

Používejte GitHub flow (branch → changes → PR → review → merge)
ESLint v9 má nový config formát (flat config)
Ujistěte se, že váš kód prochází ESLint kontrolou před vytvořením PR

