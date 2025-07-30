📋 Shrnutí úkolu – Lekce 5: Full-stack pro začátečníky
📊 Základní info

Body: 10  
Deadline: 23.7.2025  
Assignee: @ladariha

🎯 Cíl úkolu  
Procvičit GitHub flow, práci s HTML tabulkou a formulářem, základní DOM manipulaci v JavaScriptu.

✅ Checklist kroků

1️⃣ GitHub flow
- Vytvořte novou branch z main.
- Pracujte v adresáři `playground`.

2️⃣ Vytvoření souboru
- V adresáři `playground` vytvořte soubor `table.html`.

3️⃣ Struktura HTML souboru
- Použijte standardní HTML5 strukturu (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- Vytvořte tabulku s atributem `id="data"`.
- Tabulka musí obsahovat:
  - **Caption** (popisek tabulky)
  - **Hlavičku** (`<thead>`) se 4 sloupci: jméno, příjmení, email, telefon (v tomto pořadí)
  - **Patičku** (`<tfoot>`) – např. počet kontaktů
  - **Tělo** (`<tbody>`) – bude se dynamicky plnit

4️⃣ Formulář
- Na stejnou stránku přidejte HTML formulář pro zadání jména, příjmení, emailu a telefonu.
- Každé pole musí mít správný `id`:
  - Jméno: `first_name`
  - Příjmení: `last_name`
  - Email: `email`
  - Telefon: `phone`

5️⃣ JavaScript pro přidání řádku
- Do souboru vložte následující kód pro přidání řádku do tabulky:

```html
<script>
const addRow = () => {
  const table = document.getElementById("data");
  const newRow = table.insertRow(-1);
  ["phone", "email", "last_name", "first_name"].forEach((fieldName) => {
    const newValue = document.getElementById(fieldName).value;
    const newCell = newRow.insertCell(0);
    let newText = document.createTextNode(newValue);
    newCell.appendChild(newText);
  });
};
</script>
<button onclick="addRow()">Přidej řádek</button>
```

6️⃣ Funkčnost
- Ověřte, že vyplnění formuláře a kliknutí na tlačítko přidá nový řádek do tabulky.

7️⃣ Pull Request
- Vytvořte PR z vaší branch do main.
- Nastavte @ladariha jako assignee.
- Počkejte na code review a případně zapracujte připomínky.

💡 Příklad struktury
projekt/
├── README.md
└── playground/
    └── table.html

⚠️ Důležité poznámky
- Používejte GitHub flow (branch → changes → PR → review → merge).
- Dodržte přesně požadovanou strukturu tabulky a formuláře.
- JavaScript kód použijte přesně