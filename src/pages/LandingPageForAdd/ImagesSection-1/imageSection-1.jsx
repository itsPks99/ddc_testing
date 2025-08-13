
// import { useEffect, useState } from "react"
// import "./imageSection-1.css"

// const ImageSection = () => {
//   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

//   const logoImages = [
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/MENWORKS_LOGO.png?v=1751619275",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/nakhrali_dhani_logo.png?v=1751619278",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/nauvab_logo_black.png?v=1751619275",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/noua_nails_logo_black.png?v=1751619278",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Ornod_black.png?v=1751619278",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Palashindia_Logo_5_5.png?v=1751619275",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/please-me_0001_PLEASE-ME-logo-18.png?v=1751619275",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Samsara_Logo-01.png?v=1751619275",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/black_ribion_logo_png.png?v=1751619278",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/black_ribion_logo_png.png?v=1751619278",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Sitara.png?v=1751619275",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Sober.png?v=1751619274",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/logo_1.png?v=1751619275",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/suri_fresh_logo.png?v=1751619276",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/logo-geum_1.png?v=1751619278",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/The_wouff_Logo-01.png?v=1751619275",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/Vanilla_Clothing-18.png?v=1751619278",
//     "https://cdn.shopify.com/s/files/1/0595/5459/4871/files/black_logo.png?v=1751619276",
//   ]

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth)
//     }

//     setWindowWidth(window.innerWidth)
//     window.addEventListener("resize", handleResize)

//     const handleScroll = () => {
//       const rows = document.querySelectorAll(".image-row")
//       const scrollPosition = window.scrollY
//       const windowHeight = window.innerHeight

//       rows.forEach((row, index) => {
//         const rowElement = row
//         const rect = rowElement.getBoundingClientRect()
//         const isVisible = rect.top < windowHeight && rect.bottom > 0

//         if (isVisible) {
//           const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
//           const clampedProgress = Math.max(0, Math.min(1, scrollProgress))

//           const isEven = index % 2 === 0
//           const direction = isEven ? -1 : 1
//           const maxTranslation = windowWidth > 768 ? 200 : 100
//           const initialOffset = !isEven ? -130 : 0

//           let translation = initialOffset + direction * maxTranslation * clampedProgress
//           translation = Math.max(Math.min(translation, maxTranslation), -maxTranslation)

//           rowElement.style.transform = `translateX(${translation}px)`
//         }
//       })
//     }

//     window.addEventListener("scroll", handleScroll)
//     handleScroll()

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [windowWidth])

//   const generateRows = () => {
//     const numberOfRows = 3
//     const logosPerRow = windowWidth > 768 ? 6 : 4
//     const rows = []
//     let logoIndex = 0

//     for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
//       const row = []

//       for (let i = 0; i < logosPerRow; i++) {
//         row.push({
//           src: logoImages[logoIndex % logoImages.length],
//           alt: `Client logo ${logoIndex + 1}`,
//         })
//         logoIndex++
//       }

//       rows.push(row)
//     }

//     return rows
//   }

//   const rows = generateRows()

//   return (
//     <div className="add-image-section">
//       {rows.map((row, rowIndex) => (
//         <div key={`row-${rowIndex}`} className={`image-row ${rowIndex % 2 === 0 ? "even" : "odd"}`}>
//           {row.map((item, itemIndex) => (
//             <div key={`image-${rowIndex}-${itemIndex}`} className="image-item">
//               <div className="image-container">
//                 <img src={item.src || "/placeholder.svg"} alt={item.alt} />
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ImageSection
