"use client";

import "./portfolio.css";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";


/* ============================ */
/* Main Component               */
/* ============================ */
export default function Portfolio() {
  const sectionRefs = useRef({});
  const tabsRef = useRef(null);
  const servicesRef = useRef(null);
  const stickySentinelRef = useRef(null);

  // Tabs state
  const [activeTab, setActiveTab] = useState("website-development");
  const [isTabsSticky, setIsTabsSticky] = useState(false);

  // Mobile detection (for dropdown vs pills)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ---- Animate on appear + sticky slides init ---- */
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("portfolio-animate-in"));
    }, observerOptions);

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

    // In-section sticky image wheel (desktop only)
    const initStickyScroll = () => {
      if (window.innerWidth <= 768) return;
      const fullScreenProjects = document.querySelectorAll(".portfolio-fullscreen-project");

      fullScreenProjects.forEach((project) => {
        const images = project.querySelectorAll(".portfolio-project-image-slide");
        const totalImages = images.length;
        if (totalImages <= 1) return;

        let currentImageIndex = 0;
        let isScrollingWithinProject = false;
        let scrollTimeout;

        const updateActiveImage = () => {
          images.forEach((img, index) => img.classList.toggle("portfolio-active-slide", index === currentImageIndex));
        };

        const handleScroll = (e) => {
          const rect = project.getBoundingClientRect();
          const inView = rect.top <= 0 && rect.bottom > window.innerHeight;
          if (!inView || isScrollingWithinProject) return;

          e.preventDefault();
          isScrollingWithinProject = true;
          clearTimeout(scrollTimeout);

          const deltaY = e.deltaY || e.detail || -e.wheelDelta;
          if (deltaY > 0 && currentImageIndex < totalImages - 1) currentImageIndex++;
          else if (deltaY < 0 && currentImageIndex > 0) currentImageIndex--;
          else {
            isScrollingWithinProject = false;
            return;
          }

          updateActiveImage();
          scrollTimeout = setTimeout(() => (isScrollingWithinProject = false), 120);
        };

        project.addEventListener("wheel", handleScroll, { passive: false });
        updateActiveImage();
      });
    };

    setTimeout(initStickyScroll, 100);
    return () => observer.disconnect();
  }, []);

  /* ---- Sticky behavior: stays fixed until you scroll back to top ---- */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel is NOT intersecting, tabs should be sticky.
        // When it intersects (you scrolled back up), unstick.
        setIsTabsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (stickySentinelRef.current) io.observe(stickySentinelRef.current);
    return () => io.disconnect();
  }, []);

  /* ---- Data (unchanged) ---- */
  const websiteDevelopmentLinks = {
    "Jewellery & Accessories": [
      { name: "Tieva Jewels", url: "https://tievajewels.com" },
      { name: "Geum Jewels", url: "https://geumjewels.com" },
      { name: "Ayka Jewels", url: "https://aykajewels.com" },
      { name: "Shop Aura Studio", url: "https://shopaurastudio.in" },
      { name: "Nauvab", url: "https://nauvab.com" },
      { name: "Meko Studio", url: "https://meko-studio.com" },
    ],
    "Fashion And Apparel": [
      { name: "July Issue", url: "https://julyissue.com" },
      { name: "Manvi Daga", url: "https://manvidaga.com" },
      { name: "Clothes On My Mind", url: "https://clothesonmymind.com" },
      { name: "Abracadabra Kids", url: "https://abracadabrakids.com" },
      { name: "Fllae", url: "https://fllae.com" },
      { name: "Rosatelier", url: "https://xn--rosatelier-d7a.com" },
    ],
    "Natural Beauty And Wellness": [
      { name: "Anthi Naturals", url: "https://anthinaturals.com" },
      { name: "Senthera World", url: "https://sentheraworld.com" },
      { name: "Style Aroma", url: "https://stylearoma.in" },
      { name: "Drink Sober", url: "https://drinksober.co" },
      { name: "Sitara Rum", url: "https://sitararum.com" },
      { name: "Samsara Gin", url: "https://samsaragin.com" },
    ],
    Sports: [
      { name: "Elephant Racquet Club", url: "https://elephantracquetclub.com" },
      { name: "Nackers", url: "https://nackers.in" },
      { name: "Monica Khosla", url: "https://monicakhosla.in" },
      { name: "Sunehari Dhaga", url: "https://suneharidhaga.com" },
      { name: "Label Inara", url: "https://labelinara.com" },
      { name: "Cecil", url: "https://cecil.co.in" },
    ],
  };

  const socialMediaBrands = {
    "BEVERAGE BRANDS": [
      { name: "Samsara Gin", url: "https://www.instagram.com/samsaragin/" },
      { name: "Amara Vodka", url: "https://www.instagram.com/amaravodka" },
      { name: "Sitara Rum", url: "https://www.instagram.com/sitara.rum/" },
      { name: "Drink Sober", url: "https://www.instagram.com/drink.sober/" },
      { name: "Hindraj Tea", url: "https://www.instagram.com/hindrajtea/" },
    ],
    "JEWELRY BRANDS": [
      { name: "Geum Jewels", url: "https://www.instagram.com/geumjewels" },
      { name: "Tieva Jewels", url: "https://www.instagram.com/tievajewels" },
      { name: "Diamos Labgrown Diamonds", url: "https://www.instagram.com/diamos_labgrown_diamonds" },
      { name: "Shop Aura Studio", url: "https://www.instagram.com/shopaurastudio" },
      { name: "Kiaar", url: "https://www.instagram.com/kiaar.in" },
    ],
    "FASHION & APPAREL BRANDS": [
      { name: "Meirpret", url: "https://www.instagram.com/meirpret" },
      { name: "Stubborn Factory", url: "https://www.instagram.com/stubbornfactory" },
      { name: "Manvi Tejpal", url: "https://www.instagram.com/manvi.tejpal" },
      { name: "Monica Khosla", url: "https://www.instagram.com/monicakhosla_" },
      { name: "Delhi Brass", url: "https://www.instagram.com/delhibrass" },
    ],
    OTHERS: [
      { name: "The Wouff", url: "https://www.instagram.com/thewouff" },
      { name: "Eairtec", url: "https://www.instagram.com/eairtec" },
      { name: "StepT6 India", url: "https://www.instagram.com/stept6.india" },
      { name: "Senthera World", url: "https://www.instagram.com/sentheraworld" },
      { name: "Formulo", url: "https://www.instagram.com/formulo.in" },
    ],
  };

  const photographyImages = {
    all: [
      { id: 20, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC09527_copy.jpg?v=1756384651", alt: "Packshot / product frame" },
      { id: 1, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/5.jpg?v=1756384649", alt: "Editorial fashion portrait" },
      { id: 2, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08926_copy.jpg?v=1756384649", alt: "Jewelry / product close-up" },
      { id: 3, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00519_copy.jpg?v=1756384643", alt: "Cosmetic / accessory product shot" },
      { id: 4, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/4_1.jpg?v=1756384638", alt: "Lifestyle brand shot" },

      { id: 5, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC07722_copy.jpg?v=1756384636", alt: "Product on-set / studio" },
      { id: 6, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/4.jpg?v=1756384634", alt: "Lifestyle brand imagery" },
      { id: 7, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/2.jpg?v=1756384632", alt: "Model portrait" },
      { id: 8, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/3.jpg?v=1756384631", alt: "Fashion model profile" },

      { id: 11, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC09093_copy.jpg?v=1756384662", alt: "Live event highlight" },
      { id: 12, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0852_copy.jpg?v=1756384659", alt: "Editorial portrait" },
      { id: 13, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00367_copy.jpg?v=1756384660", alt: "Backstage / event moment" },
      { id: 14, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08231_copy.jpg?v=1756384658", alt: "Lifestyle outdoor" },
      { id: 15, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00166_copy.jpg?v=1756384658", alt: "Studio model portrait" },

      { id: 16, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0765_copy.jpg?v=1756384661", alt: "Fashion editorial pose" },

      { id: 18, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00604_copy.jpg?v=1756384658", alt: "Product flatlay / detail" },

      { id: 22, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08491_copy.jpg?v=1756384651", alt: "Accessory product photo" },
      { id: 23, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08926_copy_1.jpg?v=1756384652", alt: "Cosmetic / object detail" },
      { id: 24, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08681_copy.jpg?v=1756384652", alt: "Styled product shot" },
      { id: 25, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00567_copy.jpg?v=1756384650", alt: "Minimal product composition" },
      { id: 10, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_8624_copy.jpg?v=1756384610", alt: "Runway / editorial model" },
      { id: 9, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_2316.jpg?v=1756384622", alt: "Event coverage photo" },
      { id: 17, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08740_copy.jpg?v=1756384658", alt: "Lifestyle brand storytelling" },
      // ---- NEW items ----
      { id: 26, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC01246_copy.jpg?v=1756384674", alt: "Lifestyle outdoor scene" },
      { id: 27, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC01955_copy.jpg?v=1756384676", alt: "Styled product close-up" },
      { id: 28, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00321_copy.jpg?v=1756384674", alt: "Studio model portrait" },
      { id: 29, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC02595_copy.jpg?v=1756384673", alt: "Product packshot" },
      { id: 30, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC02536_copy_1.jpg?v=1756384673", alt: "Editorial model pose" },
      { id: 31, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC01386_copy.jpg?v=1756384673", alt: "Lifestyle brand storytelling" },
      { id: 32, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC02536_copy.jpg?v=1756384673", alt: "Fashion model portrait" },
      { id: 33, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC01158_copy.jpg?v=1756384672", alt: "Product detail / macro" },
      { id: 34, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC02436_copy.jpg?v=1756384671", alt: "Lifestyle ambience" },
      { id: 35, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC03250_copy.jpg?v=1756384670", alt: "Editorial model in frame" },
      { id: 36, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC03351_copy.jpg?v=1756384669", alt: "Clean product composition" },
      { id: 37, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00814_copy.jpg?v=1756384671", alt: "Model candid / studio" },
      { id: 38, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC03063_copy.jpg?v=1756384666", alt: "Lifestyle scene" },
      { id: 39, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08151_copy.jpg?v=1756384665", alt: "Event highlight" },
      { id: 40, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_1228_copy.jpg?v=1756384665", alt: "Runway / model portrait" },
      { id: 41, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0613_copy_2.jpg?v=1756384666", alt: "Packshot / detail" },
      { id: 42, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0497_copy_2.jpg?v=1756384665", alt: "Premium product macro" },
      { id: 43, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0839_copy.jpg?v=1756384662", alt: "Event crowd / moment" },
    ],

    product: [
      { id: 2, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08926_copy.jpg?v=1756384649", alt: "Jewelry / product close-up" },
      { id: 3, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00519_copy.jpg?v=1756384643", alt: "Cosmetic / accessory product shot" },
      { id: 5, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC07722_copy.jpg?v=1756384636", alt: "Product on-set / studio" },
      { id: 42, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0497_copy_2.jpg?v=1756384665", alt: "Premium product macro" },
      { id: 18, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00604_copy.jpg?v=1756384658", alt: "Product flatlay / detail" },
      { id: 19, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08516_copy.jpg?v=1756384653", alt: "Premium product detail" },
      { id: 20, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC09527_copy.jpg?v=1756384651", alt: "Packshot / product frame" },
      { id: 21, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08551_copy.jpg?v=1756384653", alt: "Jewelry macro detail" },
      { id: 22, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08491_copy.jpg?v=1756384651", alt: "Accessory product photo" },
      { id: 23, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08926_copy_1.jpg?v=1756384652", alt: "Cosmetic / object detail" },
      { id: 24, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08681_copy.jpg?v=1756384652", alt: "Styled product shot" },
      { id: 41, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0613_copy_2.jpg?v=1756384666", alt: "Packshot / detail" },
      { id: 25, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00567_copy.jpg?v=1756384650", alt: "Minimal product composition" },
      { id: 27, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC01955_copy.jpg?v=1756384676", alt: "Styled product close-up" },
      { id: 29, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC02595_copy.jpg?v=1756384673", alt: "Product packshot" },
      { id: 33, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC01158_copy.jpg?v=1756384672", alt: "Product detail / macro" },
      { id: 36, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC03351_copy.jpg?v=1756384669", alt: "Clean product composition" },
    ],

    model: [
      { id: 1, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/5.jpg?v=1756384649", alt: "Editorial fashion portrait" },

      { id: 7, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/2.jpg?v=1756384632", alt: "Model portrait" },
      { id: 8, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/3.jpg?v=1756384631", alt: "Fashion model profile" },

      { id: 12, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0852_copy.jpg?v=1756384659", alt: "Editorial portrait" },
      { id: 15, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00166_copy.jpg?v=1756384658", alt: "Studio model portrait" },
      { id: 20, category: "product", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC09527_copy.jpg?v=1756384651", alt: "Packshot / product frame" },
      { id: 16, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0765_copy.jpg?v=1756384661", alt: "Fashion editorial pose" },

      { id: 28, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00321_copy.jpg?v=1756384674", alt: "Studio model portrait" },
      { id: 30, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC02536_copy_1.jpg?v=1756384673", alt: "Editorial model pose" },
      { id: 32, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC02536_copy.jpg?v=1756384673", alt: "Fashion model portrait" },
      { id: 35, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC03250_copy.jpg?v=1756384670", alt: "Editorial model in frame" },
      { id: 37, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00814_copy.jpg?v=1756384671", alt: "Model candid / studio" },
      { id: 40, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_1228_copy.jpg?v=1756384665", alt: "Runway / model portrait" },
      { id: 10, category: "model", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_8624_copy.jpg?v=1756384610", alt: "Runway / editorial model" },
    ],

    lifestyle: [
      { id: 4, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/4_1.jpg?v=1756384638", alt: "Lifestyle brand shot" },
      { id: 6, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/4.jpg?v=1756384634", alt: "Lifestyle brand imagery" },
      { id: 14, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08231_copy.jpg?v=1756384658", alt: "Lifestyle outdoor" },

      { id: 26, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC01246_copy.jpg?v=1756384674", alt: "Lifestyle outdoor scene" },
      { id: 31, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC01386_copy.jpg?v=1756384673", alt: "Lifestyle brand storytelling" },
      { id: 34, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC02436_copy.jpg?v=1756384671", alt: "Lifestyle ambience" },
      { id: 38, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC03063_copy.jpg?v=1756384666", alt: "Lifestyle scene" },
      { id: 17, category: "lifestyle", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08740_copy.jpg?v=1756384658", alt: "Lifestyle brand storytelling" },
    ],

    event: [
      { id: 11, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC09093_copy.jpg?v=1756384662", alt: "Live event highlight" },
      { id: 9, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_2316.jpg?v=1756384622", alt: "Event coverage photo" },

      { id: 39, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC08151_copy.jpg?v=1756384665", alt: "Event highlight" },
      { id: 43, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC_0839_copy.jpg?v=1756384662", alt: "Event crowd / moment" },
      { id: 13, category: "event", src: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/DSC00367_copy.jpg?v=1756384660", alt: "Backstage / event moment" },
    ],
  };

  const services = [
    {
      id: "01",
      slug: "website-development",
      name: "WEBSITE DEVELOPMENT",
      description: "Unlock the potential of your online presence with our expert website development services.",
      projects: [
        {
          name: "Manvi Daga",
          type: "Fashion E-commerce",
          images: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-08-29_171302.png?v=1756467805",
            "/assets/portfolioimages/manidaga/manvidagadesktop2.png",
            "/assets/portfolioimages/manidaga/manvidagadesktop3.png",
          ],
          mobileImages: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0006.jpg?v=1756884660",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0008.jpg?v=1756884660",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/WhatsApp_Image_2025-09-03_at_13.08.43_eb488f6a.jpg?v=1756885161",
          ],
          description: "Elegant jewelry website with premium product photography and seamless shopping experience",
        },
        {
          name: "Inara Fashion",
          type: "Traditional Fashion E-commerce",
          images: [
            "/assets/portfolioimages/Inara/inaradesktop1.png",
            "/assets/portfolioimages/Inara/inaradesktop2.png",
            "/assets/portfolioimages/Inara/inaradesktop3.png",
          ],
          mobileImages: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0009.jpg?v=1756893629",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0007.jpg?v=1756893631",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0010.jpg?v=1756893631",
          ],
          description: "Vibrant traditional Indian fashion website with mobile-responsive design",
        },
        {
          name: "July Issue",
          type: "Contemporary Fashion E-commerce",
          images: [
            "/assets/portfolioimages/julyissue/julyissuedesktop1.png",
            "/assets/portfolioimages/julyissue/julyissuedesktop2.png",
            "/assets/portfolioimages/julyissue/julyissuedesktop3.png",
          ],
          mobileImages: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0009.jpg?v=1756893629",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0007.jpg?v=1756893631",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0010.jpg?v=1756893631",
          ],
          description: "Complete fashion e-commerce solution with advanced filtering and product showcase",
        },
      ],
      showLinks: true,
      links: websiteDevelopmentLinks,
    },
    {
      id: "02",
      slug: "social-media-management",
      name: "SOCIAL MEDIA MANAGEMENT",
      description: "Building meaningful connections in the digital age through our tailored social media services.",
      projects: [
        {
          name: "Multi-Brand Management",
          type: "Instagram Growth Strategy",
          images: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/6.png?v=1756474836",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/2_334cc44c-cbcf-4e40-8088-8692a3dfd445.png?v=1756474838",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/3.png?v=1756474838",
          ],
          mobileImages: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/5_d86d4031-a37a-46de-9baf-14ed67a395bc.png?v=1756901594",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/1_083a66a5-a29a-46a3-a409-31bebb8a7789.png?v=1756901594",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/2_57483164-1871-4987-8243-a1536ce8a362.png?v=1756901593",
          ],
          description:
            "Managing the social presence and content strategy for luxury fashion and lifestyle brands including Samsaragin, DrinkSober, and 121Couture",
        },

        {
          name: "Visual Storytelling",
          type: "Content Creation & Curation",
          images: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/4.png?v=1756474837",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/5.png?v=1756474838",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/1_d123606c-48be-4981-9c5a-6d8133165758.png?v=1756474838",
          ],

          mobileImages: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/4_874522fa-4242-4182-a7dc-81efac564450.png?v=1756901591",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/3_7da84734-3d25-4001-833c-f475314b717f.png?v=1756901588",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/website_6_grid_1.png?v=1756895606",
          ],
          description:
            "Creating and curating visually stunning content that tells a story and engages audiences across platforms.",
        },
      ],
      showLinks: true,
      links: socialMediaBrands,
    },
    {
      id: "05",
      slug: "photography-videography",
      name: "PHOTOGRAPHY & VIDEOGRAPHY",
      description: "Professional visual content creation for brands and digital marketing campaigns.",
      type: "mixed",
      videos: [
        {
          name: "Fashion Brand Campaign",
          type: "Commercial Video",
          thumbnail: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-08-29_152744.png?v=1756461483",
          videoUrl: "https://cdn.shopify.com/videos/c/o/v/6da3d6e46aa54257a4ad35f3e74cf1bd.mp4",
          description: "High-end fashion commercial showcasing traditional Indian wear with cinematic quality",
        },
        {
          name: "Product Showcase Reel",
          type: "Product Video",
          thumbnail: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-08-29_152905.png?v=1756461587",
          videoUrl: "https://cdn.shopify.com/videos/c/o/v/f131a7be83c84f9c975a9990d7a80497.mp4",
          description: "Dynamic product showcase video highlighting jewelry collection with premium aesthetics",
        },
        {
          name: "Brand Story Video",
          type: "Brand Documentary",
          thumbnail: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-08-29_152932.png?v=1756461587",
          videoUrl: "https://cdn.shopify.com/videos/c/o/v/e3a06496d4344cb880e32b61ab7e4244.mp4",
          description: "Compelling brand story video capturing the essence of luxury fashion and craftsmanship",
        },
        {
          name: "Social Media Content",
          type: "Social Video",
          thumbnail: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-08-29_163357.png?v=1756465485",
          videoUrl: "https://cdn.shopify.com/videos/c/o/v/37304b743a6d42739ce35ef910d1f380.mp4",
          description: "Engaging social media video content designed for maximum engagement and brand awareness",
        },
        {
          name: "Event Coverage",
          type: "Event Video",
          thumbnail: "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-08-29_163034.png?v=1756465252",
          videoUrl: "https://cdn.shopify.com/videos/c/o/v/c38c7a9c520e4654820bb7e29d9843d1.mp4",
          description: "Professional event coverage capturing key moments with cinematic storytelling approach",
        },
      ],
      photography: photographyImages,
    },
    {
      id: "03",
      slug: "performance-marketing",
      name: "PERFORMANCE MARKETING",
      description:
        "Our performance marketing tactics drive success and elevate your brand. Efficiency meets effectiveness in our performance marketing solutions.",
      projects: [
        {
          name: "Analytics Dashboard",
          type: "Marketing Analytics & ROI",
          images: [
            "/assets/portfolioimages/Performance/perfonrmance1.png",
            "/assets/portfolioimages/Performance/perfonrmance2.png",
            "/assets/portfolioimages/Performance/perfonrmance3.png",
          ],
          mobileImages: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-09-03_182636.png?v=1756904322",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-09-03_182548.png?v=1756904321",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-09-03_182658.png?v=1756904320",
          ],
          description:
            "₹125,558.40 revenue generated with 85% conversion rate improvement and comprehensive performance tracking",
        },
      ],
    },
    {
      id: "04",
      slug: "branding-packaging",
      name: "BRANDING & PACKAGING",
      description:
        "Creating distinctive brand identities and packaging solutions that captivate audiences and drive business growth.",
      projects: [
        {
          name: "Brand Identity Suite",
          type: "Complete Brand Package",
          images: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-09-01_121250.png?v=1756709106",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-09-01_121408.png?v=1756709106",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/WhatsApp_Image_2025-09-03_at_18.50.30_20b42e97.jpg?v=1756905685",
          ],
          mobileImages: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/WhatsApp_Image_2025-09-03_at_18.50.31_13aec277.jpg?v=1756905685",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/WhatsApp_Image_2025-09-03_at_18.50.31_3fe92019.jpg?v=1756905685",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/WhatsApp_Image_2025-09-03_at_18.50.30_20b42e97.jpg?v=1756905685",
          ],
          description:
            "Comprehensive brand identity development including logo design, color palette, typography, and brand guidelines for luxury and lifestyle brands",
        },
        {
          name: "Packaging Design",
          type: "Product Packaging",
          images: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-09-01_120951.png?v=1756709107",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-09-01_120901.png?v=1756709107",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/Screenshot_2025-09-01_120700.png?v=1756709107",
          ],
          mobileImages: [
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/WhatsApp_Image_2025-09-03_at_18.39.39_a9a81175.jpg?v=1756905296",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/IMG-20250903-WA0018_1.jpg?v=1756905296",
            "https://cdn.shopify.com/s/files/1/0596/9965/8889/files/WhatsApp_Image_2025-09-03_at_18.39.40_f04423c6.jpg?v=1756905296",
          ],
          description:
            "Premium packaging solutions that enhance product appeal and create memorable unboxing experiences for fashion, jewelry, and lifestyle brands",
        },
      ],
      // showLinks: true,
      // links: brandingPackagingProjects,
    },

  ];

  /* ---- UI handlers ---- */
  const handleTabClick = (slug) => {
    setActiveTab(slug);
    if (servicesRef.current) {
      const offsetTop = servicesRef.current.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleDropdownChange = (e) => handleTabClick(e.target.value);

  const activeService = services.find((s) => s.slug === activeTab);

  return (
    <div className="portfolio-main-container">
      {/* Hero / About */}
      <section className="portfolio-about-section" data-animate="fade-up">
        <div className="portfolio-about-content">
          <div className="portfolio-about-text-section">
            <div className="portfolio-about-accent-bar"></div>
            <h2 className="portfolio-about-title">DDC PORTFOLIO</h2>
            <div className="portfolio-about-text">
              <p>
                Since 2019, Delhi Digital Company has been a visionary in the digital realm, transforming businesses
                through versatile expertise in social media marketing, photography, performance marketing, website
                development, branding, packaging, and more.
              </p>
            </div>
          </div>
          <div className="portfolio-about-logo">
            <img
              src="/assets/all_logos/ddc logo/ddc logo 2 cropped.png"
              alt="Delhi Digital Company Logo"
              className="portfolio-logo-image"
            />
          </div>
        </div>
      </section>

      {/* Sticky sentinel */}
      <div ref={stickySentinelRef} style={{ height: 1 }} aria-hidden />

      {/* Tabs (sticky and always visible once you pass the sentinel) */}
      <div
        ref={tabsRef}
        className={`portfolio-tabs ${isTabsSticky ? "portfolio-tabs-sticky" : ""}`}
        aria-label="Services navigation"
      >
        {/* Desktop/Tablet: Pills — Mobile: Dropdown */}
        {isMobile ? (
          <div className="portfolio-tabs-mobile">
            <select
              className="portfolio-tabs-dropdown"
              value={activeTab}
              onChange={handleDropdownChange}
              aria-label="Select service"
              style={{ fontSize: "1.1rem", backgroundPosition: "right 1rem center" }}
            >
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="portfolio-tabs-container">
            {services.map((service) => (
              <button
                key={service.slug}
                className={`portfolio-tab ${activeTab === service.slug ? "portfolio-tab-active" : ""}`}
                onClick={() => handleTabClick(service.slug)}
              >
                {service.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Services */}
      <section ref={servicesRef} className="portfolio-services-section">
        <div className="portfolio-services-grid">
          {activeService && (
            <div
              key={activeService.slug}
              ref={(el) => (sectionRefs.current[activeService.slug] = el)}
              id={activeService.slug}
              className="portfolio-service-card"
              data-animate="fade-up"
            >
              <div className="portfolio-service-number">{activeService.id}</div>
              <div className="portfolio-service-content">
                <div className="portfolio-service-title-bar">
                  <h3 className="portfolio-service-title">{activeService.name}</h3>
                </div>
                <p className="portfolio-service-description">{activeService.description}</p>


                {activeService.type === "video" ? (
                  <VideoCarousel key={`video-${activeService.slug}`} videos={activeService.videos} />
                ) : activeService.type === "mixed" ? (
                  <PhotoVideoSection key={`photo-video-${activeService.slug}`} service={activeService} />
                ) : (
                  <div className="portfolio-fullscreen-projects-container">
                    {activeService.projects.map((project, projectIndex) => (
                      <FullScreenProject key={`${activeService.slug}-${projectIndex}`} project={project} />
                    ))}
                  </div>
                )}

                {activeService.showLinks && (
                  <div className="portfolio-service-links" data-animate="fade-up">
                    <h4 className="portfolio-links-title">
                      {activeService.name === "WEBSITE DEVELOPMENT"
                        ? "List Of Websites Developed By Us:"
                        : activeService.name === "BRANDING & PACKAGING"
                          ? "List Of Branding & Packaging Projects:"
                          : "Our Social Media Brands:"}
                    </h4>
                    <div className="portfolio-links-categories">
                      {Object.entries(activeService.links).map(([category, links]) => (
                        <div key={`${activeService.slug}-${category}`} className="portfolio-links-category-section">
                          <h5 className="portfolio-category-heading">{category} <br /></h5>
                          <div className="portfolio-links-list">
                            {links.map((link, linkIndex) => (
                              <a
                                key={`${activeService.slug}-${category}-${linkIndex}`}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio-service-link as-button"
                                data-animate="fade-up"
                                style={{ animationDelay: `${linkIndex * 0.1}s`, textDecoration: "none" }}
                                aria-label={`Open ${link.name} in new tab`}
                              >
                                {link.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Connect With Us */}
              <div style={{ textAlign: "center", paddingTop: "50px" }}>
                <h1 style={{ paddingBottom: "20px", fontSize: "1.2rem" }}>CONNECT WITH US</h1>
                <p>We would love to hear from you! Reach out to us through any of the platforms below:</p>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <li>
                    <a href="https://wa.me/+919205110208" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp size={40} color="#0e0e0eff" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/delhidigitalco/" target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={40} color="#0e0e0eff" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/delhidigitalco/?hl=en" target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={40} color="#0e0e0eff" />
                    </a>
                  </li>
                  <li>
                    <a href="https://in.linkedin.com/company/delhidigitalco" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={40} color="#0e0e0eff" />
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ============================ */
/* Video Carousel (ratio-safe)  */
/* ============================ */
function VideoCarousel({ videos }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const videoRef = React.useRef(null);
  const playPromiseRef = React.useRef(null);

  // NEW: ratio + container sizing
  const containerRef = React.useRef(null);
  const [aspectMap, setAspectMap] = React.useState({}); // index -> ratio number
  const DEFAULT_ASPECT = 1080 / 1920; // 9:16 portrait

  const minSwipeDistance = 50;

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const computeContainerHeight = (vw, aspect = DEFAULT_ASPECT) => {
    // mirrors CSS widths (center card)
    const centerW =
      vw <= 768 ? clamp(vw * 0.70, 220, 360) : clamp(vw * 0.42, 260, 460);
    return `${Math.round(centerW / aspect)}px`;
  };

  const safePlay = async () => {
    if (!videoRef.current || isLoading) return;
    setIsLoading(true);
    try {
      if (playPromiseRef.current) await playPromiseRef.current;
      playPromiseRef.current = videoRef.current.play();
      await playPromiseRef.current;
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
      playPromiseRef.current = null;
    }
  };

  const safePause = () => {
    if (!videoRef.current || isLoading) return;
    try {
      videoRef.current.pause();
      setIsPlaying(false);
    } catch { }
  };

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      safePlay();
    }
  }, []);

  React.useEffect(() => {
    if (videoRef.current) {
      safePause();
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.currentTime = 0;
          setIsMuted(true);
          safePlay();
        }
      }, 100);
    }
  }, [currentIndex]);

  // Swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  const nextSlide = () =>
    !isLoading && setCurrentIndex((p) => (p + 1) % videos.length);
  const prevSlide = () =>
    !isLoading && setCurrentIndex((p) => (p - 1 + videos.length) % videos.length);
  const goToSlide = (i) =>
    !isLoading && i !== currentIndex && setCurrentIndex(i);

  const handleVideoClick = async () => {
    if (!videoRef.current || isLoading) return;
    if (isPlaying) {
      safePause();
    } else {
      await safePlay();
      videoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // NEW: Record real aspect ratio from metadata
  const handleMeta = (idx) => (e) => {
    const v = e.currentTarget;
    if (!v.videoWidth || !v.videoHeight) return;
    const ratio = v.videoWidth / v.videoHeight; // e.g. 1080/1920 = 0.5625
    setAspectMap((m) => ({ ...m, [idx]: ratio }));
  };

  // NEW: Keep container height in sync with viewport & active video ratio
  React.useEffect(() => {
    const setH = () => {
      const ratio = aspectMap[currentIndex] || DEFAULT_ASPECT;
      const h = computeContainerHeight(window.innerWidth, ratio);
      if (containerRef.current) {
        containerRef.current.style.setProperty("--container-h", h);
        containerRef.current.style.setProperty("--video-aspect", ratio);
      }
    };
    setH();
    window.addEventListener("resize", setH);
    return () => window.removeEventListener("resize", setH);
  }, [currentIndex, aspectMap]);

  return (
    <div className="portfolio-videography-section">
      <div className="portfolio-videography-header">
        <div className="portfolio-videography-accent-line"></div>
        <h3 className="portfolio-videography-title">Videography</h3>
      </div>
      <p className="portfolio-videography-description">
        We don't just film moments; we create cinematic experiences. Capturing the magic of movement and sound.
      </p>

      <div className="portfolio-video-carousel-wrapper portfolio-social-style">
        <div
          ref={containerRef}
          className="portfolio-video-slides-container portfolio-social-carousel"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          // safe defaults for first paint
          style={{ "--video-aspect": 1080 / 1900, "--container-h": "70vh" }}
        >
          {videos.map((video, index) => {
            const position = index - currentIndex;
            let className = "portfolio-video-slide portfolio-social-video";
            if (position === 0)
              className += " portfolio-center portfolio-active-video";
            else if (
              position === -1 ||
              (position === videos.length - 1 && currentIndex === 0)
            )
              className += " portfolio-left";
            else if (
              position === 1 ||
              (position === -(videos.length - 1) &&
                currentIndex === videos.length - 1)
            )
              className += " portfolio-right";
            else className += " portfolio-hidden";

            const ratio = aspectMap[index] || 1080 / 1920; // per-slide ratio

            return (
              <div
                key={index}
                className={className}
                style={{ "--video-aspect": ratio }}
                onClick={() =>
                  position === 0 ? handleVideoClick() : goToSlide(index)
                }
              >
                <div className="portfolio-video-thumbnail-wrapper portfolio-social-video-wrapper">
                  {position === 0 ? (
                    <div
                      className="portfolio-video-player-container portfolio-social-player"
                      onClick={handleVideoClick}
                    >
                      <video
                        ref={videoRef}
                        className="portfolio-video-player portfolio-social-video-player"
                        loop
                        playsInline
                        muted
                        poster={video.thumbnail}
                        onLoadedMetadata={handleMeta(index)}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {!isPlaying && !isLoading && (
                        <div className="portfolio-video-play-overlay portfolio-social-play-overlay">
                          <div className="portfolio-video-play-button portfolio-social-play-button">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                              <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
                              <path d="M32 24L32 56L56 40L32 24Z" fill="#000" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="portfolio-video-engagement">
                        <div className="portfolio-video-info">
                          <h4 className="portfolio-video-title">{video.name}</h4>
                          <p className="portfolio-video-type">{video.type}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.name}
                        className="portfolio-video-thumbnail-image portfolio-social-thumbnail"
                      />
                      <div className="portfolio-video-play-overlay portfolio-social-play-overlay">
                        <div className="portfolio-video-play-button portfolio-social-play-button-small">
                          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="25" fill="rgba(255, 255, 255, 0.8)" />
                            <path d="M20 15L20 35L35 25L20 15Z" fill="#000" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="portfolio-video-controls portfolio-social-controls">
          <button
            className="portfolio-video-nav-btn portfolio-social-nav"
            onClick={prevSlide}
            disabled={isLoading}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="portfolio-video-info-center portfolio-social-info">
            <span className="portfolio-video-counter portfolio-social-counter">
              {currentIndex + 1} / {videos.length}
            </span>
          </div>

          <button
            className="portfolio-video-nav-btn portfolio-social-nav"
            onClick={nextSlide}
            disabled={isLoading}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="portfolio-video-actions">
        <button
          className="portfolio-watch-videos-btn portfolio-social-action-btn"
          onClick={async () =>
            isPlaying ? safePause() : await safePlay()
          }
          disabled={isLoading}
        >
          {isLoading ? "LOADING..." : isPlaying ? "PAUSE VIDEO" : "PLAY VIDEO"}
        </button>
      </div>
    </div>
  );
}

/* ============================ */
/* Photo Loader shimmer       */

function PhotoSkeletonImage({ src, alt, minDurationMs = 180 }) {
  const [loaded, setLoaded] = React.useState(false);
  const imgRef = React.useRef(null);
  const startRef = React.useRef(performance.now());

  // Reset shimmer every time the src changes (so it appears on each load)
  React.useEffect(() => {
    setLoaded(false);
    startRef.current = performance.now();
  }, [src]);

  const settle = React.useCallback(() => {
    const elapsed = performance.now() - startRef.current;
    const left = Math.max(0, minDurationMs - elapsed);
    // Ensure shimmer is visible at least minDurationMs
    const id = setTimeout(() => setLoaded(true), left);
    return () => clearTimeout(id);
  }, [minDurationMs]);

  const handleLoad = React.useCallback(() => { settle(); }, [settle]);
  const handleError = React.useCallback(() => { settle(); }, [settle]);

  return (
    <div className={`portfolio-photo-imgwrap ${loaded ? "is-loaded" : ""}`} aria-busy={!loaded}>
      {/* Real image (renders immediately under shimmer) */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "8px",
          opacity: loaded ? 1 : 0.01,   // keep in flow, avoid layout shifts
          transition: "opacity .25s ease"
        }}
      />
      {/* Shimmer overlay (always shown while loading, even if cached) */}
      {!loaded && (
        <div className="portfolio-photo-skeleton" role="status" aria-label="Loading image">
          <div className="portfolio-photo-shimmer" />
          <div className="portfolio-photo-meta">
            <span className="portfolio-photo-line" />
            <span className="portfolio-photo-line short" />
          </div>
        </div>
      )}
    </div>
  );
}



/* Photo + Video Section        */
/* ============================ */
function PhotoVideoSection({ service }) {
  const [activePhotoTab, setActivePhotoTab] = useState("all");
  const photoCategories = [
    { key: "all", label: "All" },
    { key: "product", label: "Product" },
    { key: "model", label: "Human Model" },
    { key: "lifestyle", label: "Lifestyle" },
    { key: "event", label: "Event" },
  ];
  const currentImages = service.photography[activePhotoTab] || service.photography.all;

  return (
    <div className="portfolio-photo-video-section">
      <VideoCarousel videos={service.videos} />

      <div className="portfolio-photography-section">
        <div className="portfolio-photography-header">
          <div className="portfolio-photography-accent-line"></div>
          <h3 className="portfolio-photography-title">Photography</h3>
        </div>
        <p className="portfolio-photography-description">
          Capturing moments that tell your brand's story through stunning visual narratives and professional photography.
        </p>

        <div className="portfolio-photo-tabs">
          {photoCategories.map((category) => (
            <button
              key={category.key}
              className={`portfolio-photo-tab ${activePhotoTab === category.key ? "portfolio-photo-tab-active" : ""}`}
              onClick={() => setActivePhotoTab(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* masonry via CSS columns (unchanged) */}
        <div className="" style={{ columns: "3 100px", columnGap: "10px" }}>
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              className={`portfolio-photo-item portfolio-photo-item-${(index % 6) + 1}`}
              data-animate="fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <PhotoSkeletonImage src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ============================ */
/* Sticky Project Section       */
/* ============================ */
function FullScreenProject({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const imgs = isMobile && project.mobileImages ? project.mobileImages : project.images;
    if (imgs.length <= 1) return;
    const id = setInterval(() => setCurrentImageIndex((i) => (i + 1) % imgs.length), 4000);
    return () => clearInterval(id);
  }, [project.images, project.mobileImages, isMobile]);

  const images = isMobile && project.mobileImages ? project.mobileImages : project.images;

  return (
    <div className="portfolio-fullscreen-project">
      <div className="portfolio-fullscreen-project-content">
        <div className="portfolio-fullscreen-project-info">
          <h3 className="portfolio-fullscreen-project-name">{project.name}</h3>
          <p className="portfolio-fullscreen-project-type">{project.type}</p>
          <p className="portfolio-fullscreen-project-description">{project.description}</p>


        </div>

        <div className="portfolio-fullscreen-project-images">
          {images.map((image, index) => (
            <div
              key={index}
              className={`portfolio-project-image-slide ${index === currentImageIndex ? "portfolio-active-slide" : ""}`}
            >
              {/* <div style={{padding:"15px"}}>
                <h2 style={{padding:"10px"}}>{project.name}</h2>
                
              </div> */}
              {isMobile && images.length > 1 && (
                <div style={{paddingBottom:"10px"}} className="portfolio-image-dots">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`portfolio-dot ${index === currentImageIndex ? "portfolio-dot-active" : ""}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
              <img src={image || "/placeholder.svg"} alt={`${project.name} - Image ${index + 1}`} className="portfolio-fullscreen-project-image" />
            </div>
          ))}

          {!isMobile && images.length > 1 && (
            <div className="portfolio-image-dots-desktop">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`portfolio-dot ${index === currentImageIndex ? "portfolio-dot-active" : ""}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
