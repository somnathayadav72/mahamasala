import Image from "next/image";
import Navbar from "@/components/site/Navbar";
import Reveal from "@/components/site/Reveal";
import ScrollProgress from "@/components/site/ScrollProgress";
import ScrollProductStory from "@/components/site/ScrollProductStory";
import ContactForm from "@/components/site/ContactForm";
import Logo from "@/components/site/Logo";
import { brandAssets } from "@/data/assets";
import { ingredients, products } from "@/data/products";
import { site } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <div className="site-texture" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <BrandIntroduction />
        <ScrollProductStory />
        <ProductRange />
        <IngredientStory />
        <Process />
        <KitchenEditorial />
        <OriginStory />
        <BigReveal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__wash hero__wash--one" aria-hidden="true" />
      <div className="hero__wash hero__wash--two" aria-hidden="true" />
      <div className="section-shell hero__inner">
        <div className="hero__copy">
          <Reveal><p className="eyebrow">Satyasee · rooted in India</p></Reveal>
          <Reveal delay={90}><h1 id="hero-title">Flavour,<br /><em>grounded</em><br />in origin.</h1></Reveal>
          <Reveal delay={180}><p className="hero__description">Thoughtfully selected spices and blends that carry the depth, warmth, and character of Indian kitchens.</p></Reveal>
          <Reveal delay={260}><div className="hero__actions"><a className="button button--coral" href="#range">Explore the range <span aria-hidden="true">↗</span></a><a className="text-link" href="#story">Discover our story <span aria-hidden="true">↓</span></a></div></Reveal>
        </div>
        <Reveal className="hero__visual" delay={170}>
          <div className="hero__stamp">01<br /><span>the land</span></div>
          <Image src={brandAssets.hero.src} alt={brandAssets.hero.alt} width={brandAssets.hero.width} height={brandAssets.hero.height} priority sizes="(max-width: 767px) 100vw, 62vw" />
          <span className="hero__caption">A collection shaped by colour, aroma, and the everyday table.</span>
        </Reveal>
        <div className="hero__meta"><span>01</span><span>Origin</span><span className="hero__line" /><span>Vita · Maharashtra</span></div>
      </div>
      <div className="hero__scroll-cue" aria-hidden="true"><span>Scroll to follow the flavour</span><i /></div>
    </section>
  );
}

function BrandMarquee() {
  return <section className="marquee" aria-label="Satyasee values"><div className="marquee__track"><span>Rooted in India</span><i>✦</i><span>Honest ingredients</span><i>✦</i><span>Distinctive blends</span><i>✦</i><span>Everyday flavour</span><i>✦</i><span>Rooted in India</span><i>✦</i><span>Honest ingredients</span><i>✦</i><span>Distinctive blends</span><i>✦</i><span>Everyday flavour</span><i>✦</i></div></section>;
}

function BrandIntroduction() {
  return (
    <section className="intro" id="story" aria-labelledby="intro-heading">
      <div className="section-shell intro__grid">
        <Reveal className="intro__copy"><p className="eyebrow">Our point of view</p><h2 className="display-heading" id="intro-heading">Spice is not an extra.<br /><em>It is where the story begins.</em></h2><p className="body-copy">The best meals are built in layers. Satyasee brings together familiar ingredients, considered blends, and a little more attention to the moments between the first pinch and the last bite.</p><span className="small-rule" /><p className="caption">The everyday kitchen, seen with fresh eyes.</p></Reveal>
        <Reveal className="intro__visual" delay={120}><Image src={brandAssets.trio.src} alt={brandAssets.trio.alt} width={brandAssets.trio.width} height={brandAssets.trio.height} sizes="(max-width: 767px) 100vw, 45vw" /><span className="image-note">02 · the ingredient</span></Reveal>
      </div>
    </section>
  );
}

function ProductRange() {
  return (
    <section className="range" id="range" aria-labelledby="range-heading">
      <div className="section-shell">
        <div className="section-intro section-intro--split"><Reveal><p className="eyebrow">Our range</p><h2 className="display-heading" id="range-heading">A blend for<br /><em>every kind of kitchen.</em></h2></Reveal><Reveal delay={120}><p className="body-copy">From the glow of turmeric to the depth of biryani masala, our collection moves easily between daily cooking and the dishes saved for sharing.</p></Reveal></div>
        <div className="product-grid">
          {products.map((product, index) => <ProductCard product={product} index={index} key={product.id} />)}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }) {
  return <Reveal className={`product-card product-card--${index === 0 ? "feature" : index === 3 ? "wide" : "standard"}`} delay={(index % 3) * 80}><article><div className="product-card__visual" style={{ "--card-accent": product.accent }}><Image src={product.image} alt={`${product.name} spice pouch`} width={product.width} height={product.height} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span>0{index + 1}</span></div><div className="product-card__copy"><p className="eyebrow">{product.category}</p><h3>{product.name}</h3><p>{product.shortDescription}</p><a href="#product-story">Explore the blend <span aria-hidden="true">↗</span></a></div></article></Reveal>;
}

function IngredientStory() {
  return (
    <section className="ingredients" id="ingredients" aria-labelledby="ingredients-heading">
      <div className="section-shell ingredients__grid"><Reveal className="ingredients__visual"><Image src={brandAssets.ingredients.src} alt={brandAssets.ingredients.alt} width={brandAssets.ingredients.width} height={brandAssets.ingredients.height} sizes="(max-width: 767px) 100vw, 55vw" /><div className="ingredient-orbit" aria-hidden="true"><span /><span /><span /></div><p className="image-note">03 · the aroma</p></Reveal><Reveal className="ingredients__copy" delay={130}><p className="eyebrow">The ingredients</p><h2 className="display-heading" id="ingredients-heading">Recognisable ingredients.<br /><em>Remarkable depth.</em></h2><p className="body-copy">The character of a blend starts with the ingredients you can name. Colour, fragrance, warmth, and balance come from giving each one room to speak.</p><div className="ingredient-list">{ingredients.map((ingredient, index) => <div className={`ingredient-row${index === 0 ? " is-active" : ""}`} key={ingredient.name} style={{ "--ingredient-accent": ingredient.accent }}><span>0{index + 1}</span><h3>{ingredient.name}</h3><p>{ingredient.note}</p><i aria-hidden="true">↗</i></div>)}</div></Reveal></div>
    </section>
  );
}

function Process() {
  const steps = [["01", "Select", "Ingredients chosen for their aroma, character, and consistency."], ["02", "Prepare", "Careful preparation helps each ingredient keep its distinctive profile."], ["03", "Blend", "Balanced proportions bring depth without one note overwhelming another."], ["04", "Pack", "The finished blend is prepared for kitchens with its flavour protected."]];
  return <section className="process" id="process" aria-labelledby="process-heading"><div className="section-shell"><Reveal><p className="eyebrow">Our process</p><h2 className="display-heading" id="process-heading">From ingredient<br /><em>to finished blend.</em></h2></Reveal><div className="process__line" aria-hidden="true"><i /></div><div className="process-grid">{steps.map(([number, title, copy], index) => <Reveal className="process-step" delay={index * 90} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div></section>;
}

function KitchenEditorial() {
  return <section className="kitchen" aria-labelledby="kitchen-heading"><div className="section-shell kitchen__grid"><Reveal className="kitchen__headline"><p className="eyebrow">At the table</p><h2 className="display-heading" id="kitchen-heading">Made for the food people remember.</h2><p className="body-copy">A good blend does more than season a dish. It becomes part of the memory of making it, serving it, and coming back for one more spoonful.</p></Reveal><Reveal className="kitchen__image kitchen__image--large" delay={100}><Image src={brandAssets.signature.src} alt={brandAssets.signature.alt} width={brandAssets.signature.width} height={brandAssets.signature.height} sizes="(max-width: 767px) 100vw, 58vw" /><span>04 · the shared table</span></Reveal><Reveal className="kitchen__image kitchen__image--small" delay={190}><Image src={brandAssets.origin.src} alt={brandAssets.origin.alt} width={brandAssets.origin.width} height={brandAssets.origin.height} sizes="(max-width: 767px) 68vw, 24vw" /></Reveal></div></section>;
}

function OriginStory() {
  return <section className="origin" aria-labelledby="origin-heading"><div className="origin__image"><Image src={brandAssets.origin.src} alt="Spice pouches and whole ingredients arranged together" width={brandAssets.origin.width} height={brandAssets.origin.height} sizes="100vw" /></div><div className="origin__overlay" /><div className="section-shell origin__content"><Reveal><p className="eyebrow">Rooted in India</p><h2 className="display-heading" id="origin-heading">A familiar feeling,<br /><em>made vivid.</em></h2><p className="body-copy">Satyasee is built around the warmth of Indian kitchens: ingredients with a point of view, blends with a sense of place, and flavour that stays with you.</p><span className="small-rule" /></Reveal></div></section>;
}

function BigReveal() {
  return <section className="big-reveal" aria-label="Satyasee brand statement"><div className="big-reveal__texture" /><div className="section-shell"><p className="eyebrow">Satyasee · rooted in India</p><h2>Flavour<br /><em>that feels</em><br />familiar.</h2><span className="big-reveal__mark" aria-hidden="true">✦</span></div></section>;
}

function Contact() {
  return <section className="contact" id="contact" aria-labelledby="contact-heading"><div className="section-shell contact__grid"><Reveal className="contact__intro"><p className="eyebrow">Let’s talk flavour</p><h2 className="display-heading" id="contact-heading">Bring Satyasee<br /><em>to your table—or shelves.</em></h2><p className="body-copy">Have a question, a retail idea, or a story to share? We would love to hear from you.</p><div className="contact__details"><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a><p>{site.address}</p></div></Reveal><Reveal className="contact__form" delay={120}><ContactForm /></Reveal></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="section-shell"><div className="footer__top"><Logo light /><p>Thoughtful spices and blends<br />for the food people remember.</p><a className="footer__back" href="#top">Back to top ↑</a></div><div className="footer__links"><div><p className="eyebrow">Explore</p><a href="#story">Our story</a><a href="#range">Products</a><a href="#ingredients">Ingredients</a><a href="#process">Process</a></div><div><p className="eyebrow">Connect</p><a href="#contact">Contact</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a></div><div><p className="eyebrow">Rooted in India</p><p>{site.address}</p></div></div><div className="footer__bottom"><span>© {new Date().getFullYear()} Satyasee</span><span>Made with care in India</span><span>Privacy · Accessibility</span></div></div></footer>;
}
