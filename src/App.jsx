import heroRoses from './assets/hero-roses.webp';
import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BookOpen, Check, Instagram, Menu, Sparkles, X, ShoppingBag, Trash2 } from 'lucide-react';
import { courses, formatPrice } from './data/courses';

const INSTAGRAM_URL = 'https://www.instagram.com/'; // TODO: uzupełnić prawdziwy profil klientki
const availableCourses = courses.filter(course => course.available);
function Header({ cartCount }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link to="/" className="brand" onClick={close}>Amelia<span>Maślakiewicz</span><span className="brand-dot">.</span></Link>
    <nav id="main-navigation" className={open ? 'nav open' : 'nav'} aria-label="Menu główne">
      <NavLink to="/" end onClick={close}>Strona główna</NavLink>
      <Link to="/#courses" onClick={close}>Kursy</Link>
      <Link to="/#testimonials" onClick={close}>Opinie</Link>
      <NavLink to="/regulamin/" onClick={close}>Regulamin sklepu</NavLink>
      <NavLink to="/kontakt/" onClick={close}>Dane kontaktowe</NavLink>
    </nav>
    <div className="nav-actions">
      <NavLink to="/koszyk/" className="cart-link" aria-label={`Koszyk, liczba kursów: ${cartCount}`} onClick={close}>
        <ShoppingBag size={21}/><span className="cart-label">Koszyk</span><span className="cart-count">{cartCount}</span>
      </NavLink>
      <button className="menu-toggle" aria-controls="main-navigation" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={24}/> : <Menu size={24}/>}</button>
    </div>
  </div></header>;
}
function ScrollToSection() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView(), 30);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
function CourseCard({ course }) {
  return <article className="course-card"><Link className={`course-art ${course.accent}`} to={`/kursy/${course.id}`} aria-label={`Zobacz kurs ${course.title}`}><span className="art-orbit"/><span className="art-star">✦</span><span className="art-name">AMELI</span></Link><div className="course-card-content"><div className="course-meta"><span>{course.category}</span><span>{course.duration}</span></div><h3><Link to={`/kursy/${course.id}`}>{course.title}</Link></h3><p>{course.description}</p><div className="course-bottom"><strong>{formatPrice(course.price)}</strong><Link to={`/kursy/${course.id}`} className="circle-arrow" aria-label={`Szczegóły kursu ${course.title}`}><ArrowUpRight size={20}/></Link></div></div></article>;
}
function Home() {
  return <main><section className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><Sparkles size={16}/> PRZESTRZEŃ TWOJEJ TRANSFORMACJI</div><h1>Wszystko zaczyna się <em>od Ciebie.</em></h1><p>Odkryj przestrzeń, w której możesz zatrzymać się na chwilę, wsłuchać w siebie i świadomie tworzyć życie na własnych zasadach.</p><div className="hero-actions"><Link className="button button-dark" to="/kursy">Poznaj moje kursy <ArrowUpRight size={18}/></Link><a className="text-link" href="#o-mnie">Poznaj mnie <ArrowRight size={18}/></a></div></div><div className="hero-visual hero-visual-photo"><div className="hero-photo-frame"><img className="hero-photo" src={heroRoses} alt="Elegancka kompozycja róż, delikatnych tkanin i kamiennego łuku w ciepłym świetle" width="1024" height="1536" fetchPriority="high" decoding="async" /></div><div className="floating-note">Twoja droga.<br/><b>Twoje tempo.</b> ✧</div></div></div></section>
  <section className="intro section"><div className="container intro-grid"><span className="section-kicker">01 / TWOJA PRZESTRZEŃ</span><div><h2>Nie musisz czekać na idealny moment, żeby <em>zacząć od nowa.</em></h2><p>Małe kroki, świadome decyzje i chwila tylko dla siebie mogą stać się początkiem pięknej zmiany. Znajdź kurs, który odpowiada na Twoje potrzeby.</p></div></div></section>
  <section className="courses-section section" id="courses"><div className="container"><div className="section-heading"><div><span className="section-kicker">02 / ODKRYJ MOJĄ OFERTĘ</span><h2>Kursy stworzone <em>dla Ciebie.</em></h2></div><Link className="text-link" to="/kursy">Wszystkie kursy <ArrowUpRight size={18}/></Link></div><div className="course-grid">{availableCourses.slice(0,3).map(course => <CourseCard key={course.id} course={course}/>)}</div></div></section>
  <section className="testimonials section" id="testimonials"><div className="container"><span className="section-kicker">03 / OPINIE</span><h2>Wasze historie <em>i doświadczenia.</em></h2><p>Wkrótce znajdziesz tutaj autentyczne opinie kursantek. Opinie dodamy po otrzymaniu treści i zgody na publikację.</p></div></section>
  <section className="steps section"><div className="container"><span className="section-kicker">03 / TO PROSTE</span><h2>Twoja zmiana w <em>trzech krokach.</em></h2><div className="steps-grid">{[['01','Wybierz kurs','Znajdź temat, który najlepiej odpowiada Twoim potrzebom.'],['02','Rozpocznij swoją drogę','Poznaj materiały i pracuj we własnym tempie.'],['03','Wracaj do siebie','Wdrażaj nowe spojrzenie i odkrywaj swoje możliwości.']].map(([n,t,d])=><div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
  <section className="about section" id="o-mnie"><div className="container about-grid"><div className="about-art"><span>✺</span><div>twórz życie<br/><em>po swojemu</em></div></div><div className="about-copy"><span className="section-kicker">04 / POZNAJ MNIE</span><h2>Witaj w moim <em>świecie.</em></h2><p>Wierzę, że rozwój zaczyna się od poznania siebie. Tworzę przestrzeń do refleksji, świadomych wyborów i odkrywania własnej siły.</p><p className="muted">Tutaj dodamy autentyczną historię Amelii, jej zdjęcie oraz informacje o doświadczeniu i metodzie pracy.</p><a className="button button-outline" href="#kontakt">Skontaktuj się <ArrowUpRight size={18}/></a></div></div></section>
  <section className="contact section" id="kontakt"><div className="container contact-inner"><span className="section-kicker">05 / BĄDŹMY W KONTAKCIE</span><h2>Twój kolejny rozdział <em>zaczyna się tutaj.</em></h2><p>Masz pytania o kursy? Napisz do mnie — z przyjemnością pomogę.</p><a className="button button-dark" href="mailto:amelia.maslakiewicz47@o2.pl">Napisz wiadomość <ArrowUpRight size={18}/></a></div></section></main>;
}
function Courses() { return <main className="inner-page container"><span className="section-kicker">OFERTA AMELI</span><h1>Wybierz kurs <em>dla siebie.</em></h1><p className="page-lead">Aktualnie dostępne kursy: <strong>{availableCourses.length}</strong>. Każdy z nich ma osobną stronę z opisem i programem.</p><div className="course-grid">{availableCourses.map(course=><CourseCard key={course.id} course={course}/>)}</div></main>; }
function CourseDetail({ addToCart }) { const { slug } = useParams(); const course = courses.find(c=>c.id===slug && c.available); if(!course) return <main className="inner-page container"><h1>Nie znaleziono kursu</h1><Link className="text-link" to="/kursy">Wróć do kursów <ArrowRight size={18}/></Link></main>; return <main className="inner-page container"><Link to="/kursy" className="back-link">← Wszystkie kursy</Link><div className="detail-grid"><div><span className="section-kicker">{course.category.toUpperCase()}</span><h1>{course.title}</h1><p className="page-lead">{course.description}</p><div className="detail-features"><span><BookOpen size={19}/> {course.duration}</span><span><Check size={19}/> Kurs dostępny</span></div><h2>Czego się nauczysz?</h2><ul className="lesson-list">{course.lessons.map(item=><li key={item}><Check size={18}/>{item}</li>)}</ul><div className="purchase-box"><strong>{formatPrice(course.price)}</strong><p>Dodaj kurs do koszyka. Finalizacja zamówienia będzie dostępna po uruchomieniu płatności.</p><button className="button button-dark" onClick={() => addToCart(course)}>Dodaj do koszyka <ShoppingBag size={17}/></button></div></div><div className={`detail-art course-art ${course.accent}`}><span className="art-orbit"/><span className="art-star">✦</span><span className="art-name">AMELI</span></div></div></main>; }
function Cart({ cart, removeFromCart }) {
  const selected = cart.map(id => courses.find(c => c.id === id)).filter(Boolean);
  return <main className="inner-page container"><span className="section-kicker">TWOJE ZAMÓWIENIE</span><h1>Twój <em>koszyk.</em></h1>
    {selected.length === 0 ? <><p className="page-lead">Twój koszyk jest pusty.</p><Link className="button button-dark" to="/kursy">Przeglądaj kursy <ArrowRight size={18}/></Link></> :
    <><div className="cart-items">{selected.map(course => <div className="cart-item" key={course.id}><div><Link to={`/kursy/${course.id}`}><strong>{course.title}</strong></Link><p>{course.category}</p></div><strong>{formatPrice(course.price)}</strong><button className="remove-cart" aria-label={`Usuń ${course.title} z koszyka`} onClick={() => removeFromCart(course.id)}><Trash2 size={20}/></button></div>)}</div><div className="cart-total"><span>Razem</span><strong>{formatPrice(selected.reduce((sum,c) => sum + Number(c.price),0))}</strong></div><p>Płatności online są jeszcze przygotowywane. Na tym etapie koszyk działa lokalnie, ale nie pobiera opłat.</p><button className="button button-dark" disabled>Przejdź do płatności — wkrótce</button></>}
  </main>;
}
function Regulations() {
  return <main className="inner-page container legal-page"><span className="section-kicker">DOKUMENTY SKLEPU</span><h1>Regulamin <em>sklepu.</em></h1><p className="page-lead">Trwa przenoszenie zatwierdzonego regulaminu do nowego projektu. Przed publikacją w tym miejscu umieścimy pełną, aktualną treść dokumentu klientki.</p><p>W sprawie warunków zakupu skontaktuj się z nami: <a href="mailto:amelia.maslakiewicz47@o2.pl">amelia.maslakiewicz47@o2.pl</a>.</p></main>;
}
function ContactPage() {
  return <main className="inner-page container"><span className="section-kicker">SKONTAKTUJ SIĘ</span><h1>Dane <em>kontaktowe.</em></h1><div className="contact-details"><p><strong>Amelia Maślakiewicz</strong></p><p>ul. Jedności Robotniczej 15/020<br/>69-100 Słubice</p><p>NIP: 5981660200<br/>REGON: 541312396</p><p>E-mail: <a href="mailto:amelia.maslakiewicz47@o2.pl">amelia.maslakiewicz47@o2.pl</a></p><p>Telefon: <a href="tel:+48693050582">+48 693 050 582</a></p></div></main>;
}
function Footer() { return <footer className="footer"><div className="container footer-grid"><div><Link to="/" className="brand">Amelia<span>Maślakiewicz</span><span className="brand-dot">.</span></Link><p>Przestrzeń świadomego rozwoju.</p></div><div><b>Odkrywaj</b><Link to="/#courses">Kursy</Link><Link to="/#testimonials">Opinie</Link><Link to="/regulamin/">Regulamin sklepu</Link><Link to="/kontakt/">Dane kontaktowe</Link></div><div><b>Kontakt</b><a href="mailto:amelia.maslakiewicz47@o2.pl">amelia.maslakiewicz47@o2.pl</a><a href="tel:+48693050582">+48 693 050 582</a></div></div><div className="container footer-bottom">© {new Date().getFullYear()} Amelia Maślakiewicz. Wszelkie prawa zastrzeżone. <span>Projekt w wersji lokalnej · Regulamin do uzupełnienia</span></div></footer>; }
export default function App() {
  const [cart, setCart] = useState(() => {
    try { const saved = JSON.parse(localStorage.getItem('ameli-cart') || '[]'); return Array.isArray(saved) ? saved.filter(id => courses.some(c => c.id === id && c.available)) : []; }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem('ameli-cart', JSON.stringify(cart)); }, [cart]);
  const addToCart = course => setCart(previous => previous.includes(course.id) ? previous : [...previous, course.id]);
  const removeFromCart = id => setCart(previous => previous.filter(item => item !== id));
  return <><ScrollToSection/><Header cartCount={cart.length}/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/kursy" element={<Courses/>}/>
    <Route path="/kursy/:slug" element={<CourseDetail addToCart={addToCart}/>}/>
    <Route path="/koszyk/" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
    <Route path="/regulamin/" element={<Regulations/>}/>
    <Route path="/kontakt/" element={<ContactPage/>}/>
    <Route path="*" element={<main className="inner-page container"><h1>Nie znaleziono strony</h1><Link to="/">Wróć na stronę główną</Link></main>}/>
  </Routes><Footer/><a className="instagram-float" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram — otwórz profil (link do uzupełnienia)"><Instagram size={25}/><span>Instagram</span></a></>;
}
