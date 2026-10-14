# AMELI — nowy projekt lokalny

Nowy, edytowalny projekt źródłowy React + Vite + CSS, bez folderu `dist` i bez gotowego builda.

## Uruchomienie

1. Zainstaluj Node.js 20 LTS lub nowszy.
2. Otwórz terminal w katalogu projektu.
3. `npm install`
4. `npm run dev`
5. Otwórz `http://localhost:5173`.

## Co jest gotowe
- Responsywna strona główna, nowe sekcje i stylistyka premium inspirowana kierunkiem referencji (bez kopiowania treści).
- Katalog kursów, licznik dostępnych kursów i osobne adresy każdego kursu.
- Animowany przycisk Instagram, z obsługą ograniczenia ruchu.
- Nawigacja, widok 404 i podstawowe metadane SEO.
- Wszystkie pliki źródłowe do dalszej pracy lokalnej.

## Co wymaga uzupełnienia przed publikacją
- Dane kursów w `src/data/courses.js` są PRZYKŁADOWE, a nie rzeczywistą ofertą.
- Podaj prawdziwy adres Instagram w `src/App.jsx` (`INSTAGRAM_URL`).
- Podmień placeholder graficzny i treści „O mnie” na zaakceptowane materiały klientki.
- Podłącz PHP API, panel administracyjny, koszyk i Przelewy24; obecnie nie są aktywne.
- Dodaj zweryfikowane dokumenty prawne, cookie consent (jeśli wymagany) i prawidłowe dane kontaktowe.
- Testy na prawdziwych urządzeniach i kontrola dostępności przed wdrożeniem.

## Architektura
`src/App.jsx` — routing i komponenty strony; `src/data/courses.js` — dane kursów; `src/styles.css` — wszystkie style.


## Responsywność — v3
Projekt dostosowano do szerokości 320–1920+ px. Menu mobilne włącza się poniżej 1081 px, karty kursów przechodzą w 2 kolumny na tabletach i 1 na telefonach. Uwzględniono dotykowe pola min. 44 px, redukcję animacji oraz brak poziomego przewijania. Test końcowy wykonaj w przeglądarce na urządzeniach docelowych.
