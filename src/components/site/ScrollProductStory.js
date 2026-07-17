"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { storyProducts } from "@/data/products";

export default function ScrollProductStory() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduced(media.matches);
    updateMotion();
    media.addEventListener?.("change", updateMotion);
    return () => media.removeEventListener?.("change", updateMotion);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;
    const updateStage = () => {
      const section = sectionRef.current;
      if (!section) return;
      const travel = section.offsetHeight - window.innerHeight;
      const progress = Math.min(0.999, Math.max(0, -section.getBoundingClientRect().top / travel));
      setActiveIndex(Math.min(storyProducts.length - 1, Math.floor(progress * storyProducts.length)));
    };
    updateStage();
    window.addEventListener("scroll", updateStage, { passive: true });
    window.addEventListener("resize", updateStage);
    return () => {
      window.removeEventListener("scroll", updateStage);
      window.removeEventListener("resize", updateStage);
    };
  }, [reduced]);

  const jumpToStage = (index) => {
    const section = sectionRef.current;
    if (!section) return;
    const start = window.scrollY + section.getBoundingClientRect().top;
    const travel = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: start + travel * ((index + 0.15) / storyProducts.length), behavior: "smooth" });
  };

  if (reduced) {
    return (
      <section className="story story--reduced" id="product-story" aria-labelledby="story-heading">
        <div className="section-shell">
          <p className="eyebrow">Four notes of flavour</p>
          <h2 className="display-heading" id="story-heading">A blend is a journey.</h2>
          <div className="story-static-grid">
            {storyProducts.map((product, index) => <StoryPanel product={product} index={index} key={product.id} />)}
          </div>
        </div>
      </section>
    );
  }

  const product = storyProducts[activeIndex];

  return (
    <section className="story" id="product-story" ref={sectionRef} aria-labelledby="story-heading">
      <div className="story-sticky">
        <div className="story-backdrop" style={{ "--story-accent": product.accent }} />
        <div className="story-sticky__inner section-shell">
          <div className="story-copy">
            <p className="eyebrow">Four notes of flavour</p>
            <p className="story-kicker">0{activeIndex + 1} / 04</p>
            <h2 className="display-heading" id="story-heading">A blend is a journey.</h2>
            <div className="story-copy__active" key={product.id}>
              <p className="story-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
              <span className="story-note">{product.flavourNote}</span>
            </div>
          </div>
          <div className="story-visual" aria-live="polite">
            <div className="aroma-line" aria-hidden="true" />
            {storyProducts.map((item, index) => (
              <div className={`story-product${activeIndex === index ? " is-active" : ""}`} key={item.id}>
                <Image src={item.image} alt={`${item.name} spice pouch`} width={item.width} height={item.height} sizes="(max-width: 767px) 80vw, 55vw" />
              </div>
            ))}
          </div>
          <div className="story-nav" aria-label="Product story stages">
            {storyProducts.map((item, index) => (
              <button type="button" className={activeIndex === index ? "is-active" : ""} onClick={() => jumpToStage(index)} key={item.id} aria-label={`Show ${item.name}`}>
                <span>0{index + 1}</span><strong>{item.name}</strong>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryPanel({ product, index }) {
  return (
    <article className="story-panel" style={{ "--panel-accent": product.accent }}>
      <div className="story-panel__visual">
        <Image src={product.image} alt={`${product.name} spice pouch`} width={product.width} height={product.height} sizes="(max-width: 767px) 100vw, 50vw" />
      </div>
      <div className="story-panel__copy">
        <span>0{index + 1} · {product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <strong>{product.flavourNote}</strong>
      </div>
    </article>
  );
}
