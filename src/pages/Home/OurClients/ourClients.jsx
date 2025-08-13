import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import "./ourClients.css"

const TrustedPartnerSection = () => {
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const row3Ref = useRef(null)
  const row1Animation = useRef(null)
  const row2Animation = useRef(null)
  const row3Animation = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)



  const partners = [
    {
      id: 1,
      name: "Company One",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/MENWORKS_LOGO.png?v=1751619275",
      url: "https://example.com/1",
    },
    {
      id: 2,
      name: "Company Two",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/nakhrali_dhani_logo.png?v=1751619278",
      url: "https://example.com/2",
    },
    {
      id: 3,
      name: "Company Three",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/nauvab_logo_black.png?v=1751619275",
      url: "https://example.com/3",
    },
    {
      id: 4,
      name: "Company Four",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/noua_nails_logo_black.png?v=1751619278",
      url: "https://example.com/4",
    },
    {
      id: 5,
      name: "Company Five",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Ornod_black.png?v=1751619278",
      url: "https://example.com/5",
    },
    {
      id: 6,
      name: "Company Six",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Palashindia_Logo_5_5.png?v=1751619275",
      url: "https://example.com/6",
    },
    

  ]

  //row 2 partners data
  const partners2 = [
    {
      id: 1,
      name: "Company One",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Samsara_Logo-01.png?v=1751619275",
      url: "https://example.com/1",
    },
    {
      id: 2,
      name: "Company Two",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/black_ribion_logo_png.png?v=1751619278",
      url: "https://example.com/2",
    },
    {
      id: 3,
      name: "Company Three",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Sitara.png?v=1751619275",
      url: "https://example.com/3",
    },
    {
      id: 4,
      name: "Company Four",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Sober.png?v=1751619274",
      url: "https://example.com/4",
    },
    {
      id: 5,
      name: "Company Five",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/logo_1.png?v=1751619275",
      url: "https://example.com/5",
    },
    {
      id: 6,
      name: "",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/suri_fresh_logo.png?v=1751619276",
      url: "https://example.com/6",
    },
    // {
    //   id: 7,
    //   name: "Technical Associates",
    //   logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/logo-geum_1.png?v=1751619278",
    //   url: "https://example.com/9",
    // },

  ]

  const partners3 = [

    {
      id: 1,
      name: "Company Seven",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/The_wouff_Logo-01.png?v=1751619275",
      url: "https://example.com/7",
    },
    {
      id: 2,
      name: "Company Eight",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Vanilla_Clothing-18.png?v=1751619278",
      url: "https://example.com/8",
    },
    {
      id: 3,
      name: "Company Nine",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/black_logo.png?v=1751619276",
      url: "https://example.com/7",
    },
    {
      id: 7,
      name: "Company Seven",
      logo: "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/please-me_0001_PLEASE-ME-logo-18.png?v=1751619275",
      url: "https://example.com/7",
    },
    {
      id: 5,
      name: "Company Eleven",
      logo: "/assets/all_logos/allLogo/Hi Pink Logo.png",
      url: "https://example.com/8",
    },
    {
      id: 6,
      name: "Company Twelve",
      logo: "/assets/all_logos/allLogo/Seryeon logo-04.png",
      url: "https://example.com/7",
    },
    // {
    //   id: 7,
    //   name: "Company Ten",
    //   logo: "/assets/all_logos/Geum Jewel/logo-geum black.png",
    //   url: "https://example.com/8",
    // },


  ]

  // Duplicate the partners array to create a seamless loop
  // Add more duplicates for mobile to ensure smooth scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]
  const duplicatedPartners2 = [...partners2, ...partners2, ...partners2, ...partners2]
  const duplicatedPartners3 = [...partners3, ...partners3, ...partners3, ...partners3]

  useEffect(() => {
    // Check for mobile and tablet on mount and window resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 992)
    }

    // Initial check
    checkScreenSize()

    // Add resize listener
    window.addEventListener("resize", checkScreenSize)

    // Initialize animations
    initAnimations()

    // Cleanup on component unmount
    return () => {
      if (row1Animation.current) row1Animation.current.kill()
      if (row2Animation.current) row2Animation.current.kill()
      if (row3Animation.current) row3Animation.current.kill()
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  // Re-initialize animations when screen size changes
  useEffect(() => {
    if (row1Animation.current) row1Animation.current.kill()
    if (row2Animation.current) row2Animation.current.kill()
    if (row3Animation.current) row3Animation.current.kill()
    initAnimations()
  }, [isMobile, isTablet])

  const initAnimations = () => {
    // Adjust animation speed based on device
    const duration = isMobile ? 15 : isTablet ? 18 : 20

    // First row animation (right to left)
    row1Animation.current = gsap.fromTo(
      row1Ref.current,
      { x: "0%" },
      {
        x: "-25%",
        duration: duration,
        ease: "none",
        repeat: -1,
        paused: false,
      },
    )

    // Second row animation (left to right)
    row2Animation.current = gsap.fromTo(
      row2Ref.current,
      { x: "-25%" },
      {
        x: "0%",
        duration: duration,
        ease: "none",
        repeat: -1,
        paused: false,
      },
    )
    // Third row animation (right to left)
    row3Animation.current = gsap.fromTo(
      row3Ref.current,
      { x: "0%" },
      {
        x: "-25%",
        duration: duration,
        ease: "none",
        repeat: -1,
        paused: false,
      },
    )
  }

  const handleMouseEnter = (animation) => {
    if (animation.current) {
      animation.current.pause()
    }
  }

  const handleMouseLeave = (animation) => {
    if (animation.current) {
      animation.current.play()
    }
  }

  return (
    <section className="trustedClient_section">
      <div className="trustedClient_container">
        <div className="trustedClient_header">
          <div className="trustedClient_titleContainer">
            {/* <div className="trustedClient_titleBar"></div> */}
            <h2 className="trustedClient_title">Our Clients </h2>
          </div>
          {/* <p className="trustedClient_subtitle">SOME OF OUR CLIENTS WHO HAVE TRUSTED US.</p> */}
        </div>

        <div className="trustedClient_partnersContainer">
          {/* First row - moving right to left */}
          <div
            className="trustedClient_row"
            onMouseEnter={() => handleMouseEnter(row1Animation)}
            onMouseLeave={() => handleMouseLeave(row1Animation)}

          >
            <div className="trustedClient_track" ref={row1Ref}>
              {duplicatedPartners.map((partner, index) => (
                <a
                  key={`row1-${partner.id}-${index}`}
                  href={partner.url}
                  className="trustedClient_logoWrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="trustedClient_logo"
                    onMouseEnter={() => handleMouseEnter(row1Animation)}
                    onMouseLeave={() => handleMouseLeave(row1Animation)}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Second row - moving left to right */}
          <div
            className="trustedClient_row"
            onMouseEnter={() => handleMouseEnter(row2Animation)}
            onMouseLeave={() => handleMouseLeave(row2Animation)}
          >

            <div className="trustedClient_track trustedClient_track-reverse" ref={row2Ref}>
              {duplicatedPartners2.map((partner2, index) => (
                <a
                  key={`row2-${partner2.id}-${index}`}
                  href={partner2.url}
                  className="trustedClient_logoWrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner2.logo || "/placeholder.svg"}
                    alt={partner2.name}
                    className="trustedClient_logo"
                    onMouseEnter={() => handleMouseEnter(row2Animation)}
                    onMouseLeave={() => handleMouseLeave(row2Animation)}
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Third row - moving right to left */}
          <div
            className="trustedClient_row"
            onMouseEnter={() => handleMouseEnter(row3Animation)}
            onMouseLeave={() => handleMouseLeave(row3Animation)}
          >
            <div className="trustedClient_track" ref={row3Ref}>
              {duplicatedPartners3.map((partner3, index) => (
                <a
                  key={`row3-${partner3.id}-${index}`}
                  href={partner3.url}
                  className="trustedClient_logoWrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner3.logo || "/placeholder.svg"}
                    alt={partner3.name}
                    className="trustedClient_logo"
                    onMouseEnter={() => handleMouseEnter(row3Animation)}
                    onMouseLeave={() => handleMouseLeave(row3Animation)}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default TrustedPartnerSection

