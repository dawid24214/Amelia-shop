// Dane demonstracyjne. Docelowo można je pobierać z istniejącego PHP API.
export const courses = [
  { id: 'swiadoma-manifestacja', title: 'Świadoma manifestacja', category: 'Kurs online', price: 249, duration: '6 modułów', description: 'Zacznij budować codzienność, która jest zgodna z Tobą, Twoimi wartościami i pragnieniami.', accent: 'rose', available: true, lessons: ['Fundamenty pracy z przekonaniami', 'Intencja i codzienne rytuały', 'Praktyka i utrwalanie zmian'] },
  { id: 'kobieca-energia', title: 'Kobieca energia', category: 'Warsztat', price: 189, duration: '4 moduły', description: 'Zadbaj o siebie, swoje granice i poczucie wewnętrznej równowagi.', accent: 'sage', available: true, lessons: ['Poznawanie własnych potrzeb', 'Granice i samoakceptacja', 'Codzienna praktyka'] },
  { id: 'nowa-ja', title: 'Nowa JA', category: 'Program rozwojowy', price: 329, duration: '8 modułów', description: 'Program wspierający budowanie pewności siebie i świadomych wyborów.', accent: 'sand', available: true, lessons: ['Poznaj swoje schematy', 'Nowe nawyki', 'Plan działania'] },
];
export const formatPrice = value => new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(value);
