"use client"

import "./portfolio.css"
import React, { useEffect, useState } from "react"

export default function Portfolio() {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("portfolio-animate-in")
        }
      })
    }, observerOptions)

    // Observe all animated elements
    const animatedElements = document.querySelectorAll("[data-animate]")
    animatedElements.forEach((el) => observer.observe(el))

    const initStickyScroll = () => {
      const isMobile = window.innerWidth <= 768
      if (isMobile) {
        return // Exit early on mobile devices
      }

      const fullScreenProjects = document.querySelectorAll(".portfolio-fullscreen-project")

      fullScreenProjects.forEach((project, projectIndex) => {
        const images = project.querySelectorAll(".portfolio-project-image-slide")
        const totalImages = images.length

        if (totalImages <= 1) return

        let currentImageIndex = 0
        let isScrollingWithinProject = false
        let scrollTimeout

        const handleScroll = (e) => {
          const rect = project.getBoundingClientRect()
          const isProjectInView = rect.top <= 0 && rect.bottom > window.innerHeight

          if (isProjectInView && !isScrollingWithinProject) {
            // Project is sticky, handle image transitions
            e.preventDefault()
            isScrollingWithinProject = true

            // Clear any existing timeout
            clearTimeout(scrollTimeout)

            // Determine scroll direction
            const deltaY = e.deltaY || e.detail || -e.wheelDelta

            if (deltaY > 0 && currentImageIndex < totalImages - 1) {
              // Scroll down - next image
              currentImageIndex++
              updateActiveImage()
            } else if (deltaY < 0 && currentImageIndex > 0) {
              // Scroll up - previous image
              currentImageIndex--
              updateActiveImage()
            } else if (deltaY > 0 && currentImageIndex === totalImages - 1) {
              // Last image reached, allow normal scroll
              isScrollingWithinProject = false
              return
            } else if (deltaY < 0 && currentImageIndex === 0) {
              // First image reached, allow normal scroll
              isScrollingWithinProject = false
              return
            }

            // Reset scroll lock after delay
            scrollTimeout = setTimeout(() => {
              isScrollingWithinProject = false
            }, 100)
          }
        }

        const updateActiveImage = () => {
          images.forEach((img, index) => {
            img.classList.toggle("portfolio-active-slide", index === currentImageIndex)
          })
        }

        // Add wheel event listener for desktop only
        project.addEventListener("wheel", handleScroll, { passive: false })

        // Touch events removed to prevent sticky scroll behavior on mobile

        // Initialize first image as active
        updateActiveImage()
      })
    }

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(initStickyScroll, 100)

    return () => observer.disconnect()
  }, [])

  const websiteDevelopmentLinks = {
    "Jewellery & Accessories": [
      { name: "Tieva Jewels", url: "https://tievajewels.com" },
      { name: "Geum Jewels", url: "https://geumjewels.com" },
      { name: "Ayka Jewels", url: "https://aykajewels.com" },
      { name: "Shop Aura Studio", url: "https://shopaurastudio.in" },
      { name: "Nauvab", url: "https://nauvab.com" },
      { name: "Meko Studio", url: "https://meko-studio.com" },
    ],
    "Fashion & Apparel": [
      { name: "July Issue", url: "https://julyissue.com" },
      { name: "Manvi Daga", url: "https://manvidaga.com" },
      { name: "Clothes On My Mind", url: "https://clothesonmymind.com" },
      { name: "Abracadabra Kids", url: "https://abracadabrakids.com" },
      { name: "Fllae", url: "https://fllae.com" },
      { name: "Rosatelier", url: "https://xn--rosatelier-d7a.com" },
      // { name: "Label Inara", url: "https://labelinara.com" },
      // { name: "Cecil", url: "https://cecil.co.in" },
      // { name: "Gauri Designer", url: "https://gauridesigner.com" },
    ],
    // "Footwear": [
    //     { name: "Nauvab", url: "https://nauvab.com" },
    //     { name: "Meko Studio", url: "https://meko-studio.com" },
    // ],
    "Natural Beauty & Wellness": [
      { name: "Anthi Naturals", url: "https://anthinaturals.com" },
      { name: "Senthera World", url: "https://sentheraworld.com" },
      { name: "Style Aroma", url: "https://stylearoma.in" },
      { name: "Drink Sober", url: "https://drinksober.co" },
      { name: "Sitara Rum", url: "https://sitararum.com" },
      { name: "Samsara Gin", url: "https://samsaragin.com" },
    ],
    // "Beverage": [
    //     { name: "Drink Sober", url: "https://drinksober.co" },
    //     { name: "Sitara Rum", url: "https://sitararum.com" },
    //     { name: "Samsara Gin", url: "https://samsaragin.com" },
    // ],
    Sports: [
      { name: "Elephant Racquet Club", url: "https://elephantracquetclub.com" },
      { name: "Nackers", url: "https://nackers.in" },
      { name: "Monica Khosla", url: "https://monicakhosla.in" },
      { name: "Sunehari Dhaga", url: "https://suneharidhaga.com" },
      { name: "Label Inara", url: "https://labelinara.com" },
      { name: "Cecil", url: "https://cecil.co.in" },
    ],
    // "Indian Traditional Wear": [
    //     { name: "Monica Khosla", url: "https://monicakhosla.in" },
    //     { name: "Sunehari Dhaga", url: "https://suneharidhaga.com" },
    // ],
  }

  const socialMediaBrands = {
    "BEVERAGE BRANDS": [
      { name: "Samsara Gin", url: "https://www.instagram.com/samsaragin/" },
      { name: "Amara Vodka", url: "https://www.instagram.com/amaravodka" },
      { name: "Sitara Rum", url: "https://www.instagram.com/sitara.rum/" },
      { name: "Drink Sober", url: "https://www.instagram.com/drink.sober/" },
      { name: "Hindraj Tea", url: "https://www.instagram.com/hindrajtea/" },
      // { name: "Suria Grofresh", url: "https://www.instagram.com/suriagrofresh" },
      // { name: "HiMarket India", url: "https://www.instagram.com/himarketindia" },
      // { name: "Feel Blissful", url: "https://www.instagram.com/feel_blissful/" },
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
    // "💡 TECH / ELECTRONICS": [
    //     { name: "Eairtec", url: "https://www.instagram.com/eairtec" },
    // ],
    // "🏡 HOME DÉCOR": [
    //     { name: "Delhi Brass", url: "https://www.instagram.com/delhibrass" },
    // ],
    // "👟 FOOTWEAR": [
    //     { name: "Nauvab", url: "https://www.instagram.com/nauvab.co" },
    //     { name: "StepT6 India", url: "https://www.instagram.com/stept6.india" },
    // ],
    // "🧴 SKINCARE PRODUCTS": [
    //     { name: "Senthera World", url: "https://www.instagram.com/sentheraworld" },
    //     { name: "Formulo", url: "https://www.instagram.com/formulo.in" },
    // ],
  }

  const services = [
    {
      id: "01",
      title: "WEBSITE DEVELOPMENT",
      description: "Unlock the potential of your online presence with our expert website development services.",
      projects: [
        {
          name: "Manvi Daga",
          type: "Fashion E-commerce",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJjG8PEryZwDZQNmV5MgymQcfp85r3.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJjG8PEryZwDZQNmV5MgymQcfp85r3.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
          ],
          description: "Elegant jewelry website with premium product photography and seamless shopping experience",
        },
        {
          name: "INARA Fashion",
          type: "Traditional Fashion E-commerce",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJjG8PEryZwDZQNmV5MgymQcfp85r3.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJjG8PEryZwDZQNmV5MgymQcfp85r3.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
          ],
          description: "Vibrant traditional Indian fashion website with mobile-responsive design",
        },
        {
          name: "Fashion Portfolio",
          type: "E-commerce Platform",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
          ],
          description: "Complete fashion e-commerce solution with advanced filtering and product showcase",
        },
        {
          name: "Delhi Digital Company",
          type: "Corporate Website",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
          ],
          description: "Modern corporate website with professional design and user-friendly navigation",
        },
      ],
      showLinks: true,
      links: websiteDevelopmentLinks,
    },
    {
      id: "02",
      title: "SOCIAL MEDIA MANAGEMENT",
      description: "Building meaningful connections in the digital age through our tailored social media services.",
      projects: [
        {
          name: "Multi-Brand Management",
          type: "Instagram Growth Strategy",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbWjcrYmC2Unu1UYBk8XYNGLnUDcW4.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvwo0qWD65ihY6Q1eib4hBMccHVKWr.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbWjcrYmC2Unu1UYBk8XYNGLnUDcW4.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvwo0qWD65ihY6Q1eib4hBMccHVKWr.png",
          ],
          description:
            "Managing 20K+ followers across luxury fashion and lifestyle brands including Samsaragin, DrinkSober, and 121Couture",
        },
        {
          name: "Fashion Brand Portfolio",
          type: "Social Media Strategy",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbWjcrYmC2Unu1UYBk8XYNGLnUDcW4.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbWjcrYmC2Unu1UYBk8XYNGLnUDcW4.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
          ],
          description: "Comprehensive social media management for fashion brands with consistent engagement growth",
        },
      ],
      showLinks: true,
      links: socialMediaBrands,
    },
    {
      id: "03",
      title: "PERFORMANCE MARKETING",
      description:
        "Our performance marketing tactics drive success and elevate your brand. Efficiency meets effectiveness in our performance marketing solutions.",
      projects: [
        {
          name: "Analytics Dashboard",
          type: "Marketing Analytics & ROI",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJjG8PEryZwDZQNmV5MgymQcfp85r3.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJjG8PEryZwDZQNmV5MgymQcfp85r3.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
          ],
          description:
            "₹125,558.40 revenue generated with 85% conversion rate improvement and comprehensive performance tracking",
        },
        {
          name: "Campaign Optimization",
          type: "Performance Metrics",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbWjcrYmC2Unu1UYBk8XYNGLnUDcW4.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbWjcrYmC2Unu1UYBk8XYNGLnUDcW4.png",
          ],
          description:
            "Advanced analytics showing 67% increase in online store sessions and improved customer acquisition",
        },
      ],
    },
    {
      id: "04",
      title: "PHOTOGRAPHY/VIDEOGRAPHY",
      description: "Professional visual content creation for brands and digital marketing campaigns.",
      type: "video", // Special type for video carousel
      videos: [
        {
          name: "Fashion Brand Campaign",
          type: "Commercial Video",
          thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvwo0qWD65ihY6Q1eib4hBMccHVKWr.png",
          videoUrl: "public/assets/DdcWebsiteVideo-mobile.mp4",
          description: "High-end fashion commercial showcasing traditional Indian wear with cinematic quality",
        },
        {
          name: "Product Showcase Reel",
          type: "Product Video",
          thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
          videoUrl: "/public/assets/DdcWebsiteVideo-mobile.mp4",
          description: "Dynamic product showcase video highlighting jewelry collection with premium aesthetics",
        },
        {
          name: "Brand Story Video",
          type: "Brand Documentary",
          thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
          videoUrl: "public/assets/DdcWebsiteVideo-mobile.mp4",
          description: "Compelling brand story video capturing the essence of luxury fashion and craftsmanship",
        },
        {
          name: "Social Media Content",
          type: "Social Video",
          thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
          videoUrl: "public/assets/DdcWebsiteVideo-mobile.mp4",
          description: "Engaging social media video content designed for maximum engagement and brand awareness",
        },
        {
          name: "Event Coverage",
          type: "Event Video",
          thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
          videoUrl: "public/assets/DdcWebsiteVideo-mobile.mp4",
          description: "Professional event coverage capturing key moments with cinematic storytelling approach",
        },
      ],
      projects: [
        {
          name: "INARA Fashion Shoot",
          type: "Fashion Photography",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvwo0qWD65ihY6Q1eib4hBMccHVKWr.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvwo0qWD65ihY6Q1eib4hBMccHVKWr.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
          ],
          description: "Traditional Indian fashion brand with vibrant product photography and professional styling",
        },
        {
          name: "AURA Jewelry Collection",
          type: "Product Photography",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJjG8PEryZwDZQNmV5MgymQcfp85r3.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fi1mv1WoEedWxVgL54nqyIv1ENCwWn.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XJjG8PEryZwDZQNmV5MgymQcfp85r3.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
          ],
          description: "Luxury jewelry photography with elegant lighting and premium presentation",
        },
      ],
    },
    {
      id: "05",
      title: "BRANDING & PACKAGING",
      description: "Complete brand identity solutions from concept to packaging design.",
      projects: [
        {
          name: "Delhi Digital Branding",
          type: "Corporate Identity",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xR8vNC4a7pqhWSoFwxdD84JWnAOcvS.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8VqhQZnW87FNaa7QlT2BmxdV3NQ8W.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaFAA1qAshcASBggChicWM3g1384DE.png",
          ],
          description: "Complete brand identity design with modern logo and professional presentation",
        },
        {
          name: "Fashion Brand Identity",
          type: "Brand Development",
          images: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbWjcrYmC2Unu1UYBk8XYNGLnUDcW4.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvwo0qWD65ihY6Q1eib4hBMccHVKWr.png",
          ],
          mobileImages: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kRyeCHl2ptWcMapOHLOKXTw75Cfux7.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbWjcrYmC2Unu1UYBk8XYNGLnUDcW4.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvwo0qWD65ihY6Q1eib4hBMccHVKWr.png",
          ],
          description: "Comprehensive branding solutions for fashion and lifestyle brands with packaging design",
        },
      ],
    },
  ]

  return (
    <div className="portfolio-main-container">
      {/* Hero Section */}
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
              src="public/assets/all_logos/ddc logo/ddc logo cropped.png"
              alt="Delhi Digital"
              className="portfolio-logo-image"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="portfolio-services-section">
        <div className="portfolio-services-header" data-animate="fade-up">
          <div className="portfolio-services-accent-bar"></div>
          <h2 className="portfolio-services-title">OUR SERVICES</h2>
        </div>

        <div className="portfolio-services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="portfolio-service-card"
              data-animate={index % 2 === 0 ? "slide-left" : "slide-right"}
            >
              <div className="portfolio-service-number">{service.id}</div>
              <div className="portfolio-service-content">
                <div className="portfolio-service-title-bar">
                  <h3 className="portfolio-service-title">{service.title}</h3>
                </div>
                <p className="portfolio-service-description">{service.description}</p>

                {service.type === "video" ? (
                  <>
                    <VideoCarousel videos={service.videos} />
                    {service.projects && service.projects.length > 0 && (
                      <div className="portfolio-photography-section">
                        <div className="portfolio-photography-header ">
                          <div className="portfolio-photography-accent-line"></div>
                          <h3 className="portfolio-photography-title">Photography</h3>
                        </div>
                        <p className="portfolio-photography-description">
                          Professional photography services capturing the essence of your brand with stunning visuals.
                        </p>
                        <div className="portfolio-fullscreen-projects-container">
                          {service.projects.map((project, projectIndex) => (
                            <FullScreenProject key={projectIndex} project={project} />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="portfolio-fullscreen-projects-container">
                    {service.projects.map((project, projectIndex) => (
                      <FullScreenProject key={projectIndex} project={project} />
                    ))}
                  </div>
                )}

                {service.showLinks && (
                  <div className="portfolio-service-links" data-animate="fade-up">
                    <h4 className="portfolio-links-title">
                      {service.title === "WEBSITE DEVELOPMENT"
                        ? "List Of Websites Developed By Us:"
                        : "Our Social Media Brands:"}
                    </h4>
                    <div className="portfolio-links-categories">
                      {Object.entries(service.links).map(([category, links]) => (
                        <div key={category} className="portfolio-links-category-section">
                          <h5 className="portfolio-category-heading">{category}</h5>
                          <div className="portfolio-links-list">
                            {links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="portfolio-service-link"
                                data-animate="fade-up"
                                style={{ animationDelay: `${linkIndex * 0.1}s` }}
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
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function VideoCarousel({ videos }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(true)
  const [touchStart, setTouchStart] = React.useState(null)
  const [touchEnd, setTouchEnd] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const videoRef = React.useRef(null)
  const playPromiseRef = React.useRef(null)

  const minSwipeDistance = 50

  const safePlay = async () => {
    if (!videoRef.current || isLoading) return

    setIsLoading(true)
    try {
      if (playPromiseRef.current) {
        await playPromiseRef.current
      }

      playPromiseRef.current = videoRef.current.play()
      await playPromiseRef.current
      setIsPlaying(true)
    } catch (error) {
      console.log("Play interrupted or failed:", error)
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
      playPromiseRef.current = null
    }
  }

  const safePause = () => {
    if (!videoRef.current || isLoading) return

    try {
      videoRef.current.pause()
      setIsPlaying(false)
    } catch (error) {
      console.log("Pause failed:", error)
    }
  }

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      safePlay()
    }
  }, [])

  React.useEffect(() => {
    if (videoRef.current) {
      safePause()

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.muted = true
          videoRef.current.currentTime = 0
          setIsMuted(true)
          safePlay()
        }
      }, 100)
    }
  }, [currentIndex])

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    if (!isLoading) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }
  }

  const prevSlide = () => {
    if (!isLoading) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
    }
  }

  const goToSlide = (index) => {
    if (!isLoading && index !== currentIndex) {
      setCurrentIndex(index)
    }
  }

  const handleVideoClick = async () => {
    if (!videoRef.current || isLoading) return

    if (isPlaying) {
      safePause()
    } else {
      await safePlay()
    }
  }

  return (
    <div className="portfolio-videography-section">
      <div className="portfolio-videography-header">
        <div className="portfolio-videography-accent-line"></div>
        <h3 className="portfolio-videography-title">Videography</h3>
      </div>
      <p className="portfolio-videography-description">
        We don't just film moments; we create cinematic experiences. Capturing the magic of movement and sound.
      </p>

      <div className="portfolio-video-carousel-wrapper">
        <div
          className="portfolio-video-slides-container"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {videos.map((video, index) => {
            const position = index - currentIndex
            let className = "portfolio-video-slide"

            if (position === 0) className += " portfolio-center"
            else if (position === -1 || (position === videos.length - 1 && currentIndex === 0))
              className += " portfolio-left"
            else if (position === 1 || (position === -(videos.length - 1) && currentIndex === videos.length - 1))
              className += " portfolio-right"
            else className += " portfolio-hidden"

            return (
              <div key={index} className={className} onClick={() => goToSlide(index)}>
                <div className="portfolio-video-thumbnail-wrapper">
                  {position === 0 ? (
                    <div className="portfolio-video-player-container" onClick={handleVideoClick}>
                      <video
                        ref={videoRef}
                        className="portfolio-video-player"
                        loop
                        playsInline
                        poster={video.thumbnail}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {!isPlaying && !isLoading && (
                        <div className="portfolio-video-play-overlay portfolio-show-button">
                          <div className="portfolio-video-play-button">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                              <circle cx="30" cy="30" r="30" fill="rgba(0, 188, 212, 0.9)" />
                              <path d="M24 18L24 42L42 30L24 18Z" fill="white" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.name}
                        className="portfolio-video-thumbnail-image"
                      />
                      <div className="portfolio-video-play-overlay portfolio-show-button">
                        <div className="portfolio-video-play-button">
                          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="25" fill="rgba(255, 255, 255, 0.9)" />
                            <path d="M20 15L20 35L35 25L20 15Z" fill="#333" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="portfolio-video-controls">
          <button className="portfolio-video-nav-btn" onClick={prevSlide} disabled={isLoading}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12 16L6 10L12 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="portfolio-video-info-center">
            <span className="portfolio-video-counter">
              {currentIndex + 1} / {videos.length}
            </span>
          </div>

          <button className="portfolio-video-nav-btn" onClick={nextSlide} disabled={isLoading}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M8 16L14 10L8 4"
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
        {/* <span className="portfolio-video-more-text">Click Here for More Videos</span> */}
        <button className="portfolio-watch-videos-btn" onClick={handleVideoClick} disabled={isLoading}>
          {isLoading ? "LOADING..." : isPlaying ? "PAUSE VIDEO" : "PLAY VIDEO"}
        </button>
      </div>
    </div>
  )
}

function FullScreenProject({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const images = isMobile && project.mobileImages ? project.mobileImages : project.images
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Auto-slide every 4 seconds

    return () => clearInterval(interval)
  }, [project.images, project.mobileImages, isMobile])

  const goToSlide = (index) => {
    setCurrentImageIndex(index)
  }

  const images = isMobile && project.mobileImages ? project.mobileImages : project.images

  return (
    <div className="portfolio-fullscreen-project">
      <div className="portfolio-fullscreen-project-content">
        <div className="portfolio-fullscreen-project-info">
          <h3 className="portfolio-fullscreen-project-name">{project.name}</h3>
          <p className="portfolio-fullscreen-project-type">{project.type}</p>
          <p className="portfolio-fullscreen-project-description">{project.description}</p>

          {isMobile && images.length > 1 && (
            <div className="portfolio-image-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`portfolio-dot ${index === currentImageIndex ? "portfolio-dot-active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="portfolio-fullscreen-project-images">
          {images.map((image, index) => (
            <div
              key={index}
              className={`portfolio-project-image-slide ${index === currentImageIndex ? "portfolio-active-slide" : ""}`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.name} - Image ${index + 1}`}
                className="portfolio-fullscreen-project-image"
              />
            </div>
          ))}

          {!isMobile && images.length > 1 && (
            <div className="portfolio-image-dots-desktop">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`portfolio-dot ${index === currentImageIndex ? "portfolio-dot-active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
