import localFont from "next/font/local";

// font-weight of light: 300
// font-weight of regular: 400

export const anekLatinExpanded = localFont({
    src: [
      {
        path: '../fonts/AnekLatin_Expanded-Light.ttf',
        weight: '300'
      }, 
      {
        path: "../fonts/AnekLatin_Expanded-Regular.ttf",
        weight: '400'
      }
    ],
    variable: "--font-anek-latin-expanded",
  });
  
export const ppMonumentExtended = localFont({
    src: [
      {
        path: "../fonts/PPMonumentExtended-Regular.otf",
        weight: '400'
      }
    ],
    variable: "--font-pp-monument-extended"
  });