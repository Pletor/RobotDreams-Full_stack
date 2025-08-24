📋 Shrnutí úkolu – Lekce 11: Full-stack pro začátečníky
📊 Základní info
Body: 10
Deadline: 25.8.2025
Assignee: @ladariha
🎯 Cíl úkolu
Procvičit GitHub flow, vytvoření React aplikace s TypeScript, ESLint konfiguraci a psaní komponentových testů.
✅ Checklist kroků
1️⃣ GitHub flow

Vytvořte novou branch z main
Vytvořte pull request s následujícími změnami

2️⃣ Vytvoření React aplikace

Vytvořte v hlavním adresáři projektu nový React projekt pomocí Vite a TypeScript
Nazvěte aplikaci a adresář "client"
Pracujte v hlavním adresáři (ten který obsahuje README a playground složku)

3️⃣ ESLint konfigurace

Nainstalujte balíčky pro ESLint verze 9
Použijte @eslint/js doporučené nastavení (recommended)
Přidejte pravidla pro TypeScript
Přidejte @stylistic/eslint-plugin-js
Nezapomeňte na React pravidla

4️⃣ React komponenta "Event"

Vytvořte komponentu nazvanou "Event"
Komponenta představuje událost pro plánování akce
Použijte zadané TypeScript typy:

typescripttype UserRecord = {
  name: string;
  answer: "yes" | "no" | "if-needed";
}

type DateRecord = {
  timestamp: number;
  records: UserRecord[];
}

type EventProps = {
  location?: string;
  id: string;
  title: string;
  dates: DateRecord[];
}
5️⃣ Zobrazení komponenty

Zobrazit místo konání akce
Zobrazit název akce
Zobrazit tabulku s výsledky hlasování:

Řádky = jména účastníků
Sloupce = data
Buňky = reprezentace odpovědi (yes/no/if-needed)


Ošetřete různé situace z TypeScript typů
Rozložte práci na menší komponenty (pokud to dává smysl)

6️⃣ Testy

Napište unit/component testy pro komponentu Event
Jedná se jen o zobrazení dat (žádný formulář není třeba)

7️⃣ Pull Request

Vytvořte PR z vaší branch do main
Nastavte @ladariha jako assignee
Počkejte na code review a případně zapracujte připomínky

💡 Příklad struktury
projekt/
├── README.md
├── playground/
└── client/
    ├── package.json
    └── tsconfig.json
⚠️ Důležité poznámky

Používejte GitHub flow (branch → changes → PR → review → merge)
Komponenta zobrazuje pouze existující data (bez formulářů)
Dodržte přesně zadané TypeScript typy
Aplikace musí používat Vite a TypeScript
