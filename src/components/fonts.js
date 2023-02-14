var fonts = function () {
  let availablefonts = {
    "Adobe Arabic":
      "https://static.vrv.co/vilos/assets/fonts/AdobeArabic-Bold.otf",
    "Andale Mono": "https://static.vrv.co/vilos/assets/fonts/andalemo.ttf",
    "Arial Black": "https://static.vrv.co/vilos/assets/fonts/ariblk.ttf",
    "Arial Bold Italic": "https://static.vrv.co/vilos/assets/fonts/arialbi.ttf",
    "Arial Bold": "https://static.vrv.co/vilos/assets/fonts/arialbd.ttf",
    "Arial Italic": "https://static.vrv.co/vilos/assets/fonts/ariali.ttf",
    "Arial Unicode MS": "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
    Arial: "https://static.vrv.co/vilos/assets/fonts/arial.ttf",
    "Comic Sans MS Bold":
      "https://static.vrv.co/vilos/assets/fonts/comicbd.ttf",
    "Comic Sans MS": "https://static.vrv.co/vilos/assets/fonts/comic.ttf",
    "Courier New Bold Italic":
      "https://static.vrv.co/vilos/assets/fonts/courbi.ttf",
    "Courier New Bold": "https://static.vrv.co/vilos/assets/fonts/courbd.ttf",
    "Courier New Italic": "https://static.vrv.co/vilos/assets/fonts/couri.ttf",
    "Courier New": "https://static.vrv.co/vilos/assets/fonts/cour.ttf",
    "DejaVu LGC Sans Mono Bold Oblique":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuLGCSansMono-BoldOblique.ttf",
    "DejaVu LGC Sans Mono Bold":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuLGCSansMono-Bold.ttf",
    "DejaVu LGC Sans Mono Oblique":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuLGCSansMono-Oblique.ttf",
    "DejaVu LGC Sans Mono":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuLGCSansMono.ttf",
    "DejaVu Sans Bold Oblique":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSans-BoldOblique.ttf",
    "DejaVu Sans Bold":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSans-Bold.ttf",
    "DejaVu Sans Condensed Bold Oblique":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSansCondensed-BoldOblique.ttf",
    "DejaVu Sans Condensed Bold":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSansCondensed-Bold.ttf",
    "DejaVu Sans Condensed Oblique":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSansCondensed-Oblique.ttf",
    "DejaVu Sans Condensed":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSansCondensed.ttf",
    "DejaVu Sans ExtraLight":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSans-ExtraLight.ttf",
    "DejaVu Sans Mono Bold Oblique":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSansMono-BoldOblique.ttf",
    "DejaVu Sans Mono Bold":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSansMono-Bold.ttf",
    "DejaVu Sans Mono Oblique":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSansMono-Oblique.ttf",
    "DejaVu Sans Mono":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSansMono.ttf",
    "DejaVu Sans Oblique":
      "https://static.vrv.co/vilos/assets/fonts/DejaVuSans-Oblique.ttf",
    "DejaVu Sans": "https://static.vrv.co/vilos/assets/fonts/DejaVuSans.ttf",
    Gautami: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
    "Georgia Bold Italic":
      "https://static.vrv.co/vilos/assets/fonts/georgiaz.ttf",
    "Georgia Bold": "https://static.vrv.co/vilos/assets/fonts/georgiab.ttf",
    "Georgia Italic": "https://static.vrv.co/vilos/assets/fonts/georgiai.ttf",
    Georgia: "https://static.vrv.co/vilos/assets/fonts/georgia.ttf",
    Impact: "https://static.vrv.co/vilos/assets/fonts/impact.ttf",
    mangal: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
    Mangal: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
    MeeraInimai: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
    "Rubik Black Italic":
      "https://static.vrv.co/vilos/assets/fonts/Rubik-BlackItalic.ttf",
    "Rubik Black": "https://static.vrv.co/vilos/assets/fonts/Rubik-Black.ttf",
    "Rubik Bold Italic":
      "https://static.vrv.co/vilos/assets/fonts/Rubik-BoldItalic.ttf",
    "Rubik Bold": "https://static.vrv.co/vilos/assets/fonts/Rubik-Bold.ttf",
    "Rubik Italic": "https://static.vrv.co/vilos/assets/fonts/Rubik-Italic.ttf",
    "Rubik Light Italic":
      "https://static.vrv.co/vilos/assets/fonts/Rubik-LightItalic.ttf",
    "Rubik Light": "https://static.vrv.co/vilos/assets/fonts/Rubik-Light.ttf",
    "Rubik Medium Italic":
      "https://static.vrv.co/vilos/assets/fonts/Rubik-MediumItalic.ttf",
    "Rubik Medium": "https://static.vrv.co/vilos/assets/fonts/Rubik-Medium.ttf",
    Rubik: "https://static.vrv.co/vilos/assets/fonts/Rubik-Regular.ttf",
    Tahoma: "https://static.vrv.co/vilos/assets/fonts/tahoma.ttf",
    "Times New Roman Bold Italic":
      "https://static.vrv.co/vilos/assets/fonts/timesbi.ttf",
    "Times New Roman Bold":
      "https://static.vrv.co/vilos/assets/fonts/timesbd.ttf",
    "Times New Roman Italic":
      "https://static.vrv.co/vilos/assets/fonts/timesi.ttf",
    "Times New Roman": "https://static.vrv.co/vilos/assets/fonts/times.ttf",
    "Trebuchet MS Bold Italic":
      "https://static.vrv.co/vilos/assets/fonts/trebucbi.ttf",
    "Trebuchet MS Bold":
      "https://static.vrv.co/vilos/assets/fonts/trebucbd.ttf",
    "Trebuchet MS Italic":
      "https://static.vrv.co/vilos/assets/fonts/trebucit.ttf",
    "Trebuchet MS": "https://static.vrv.co/vilos/assets/fonts/trebuc.ttf",
    "Verdana Bold Italic":
      "https://static.vrv.co/vilos/assets/fonts/verdanaz.ttf",
    "Verdana Bold": "https://static.vrv.co/vilos/assets/fonts/verdanab.ttf",
    "Verdana Italic": "https://static.vrv.co/vilos/assets/fonts/verdanai.ttf",
    Verdana: "https://static.vrv.co/vilos/assets/fonts/verdana.ttf",
    "Vrinda Bold": "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
    Vrinda: "https://static.vrv.co/vilos/assets/fonts/arialuni.ttf",
    Webdings: "https://static.vrv.co/vilos/assets/fonts/webdings.ttf"
  };
  return availablefonts;
};

if (typeof exports !== "undefined") {
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = fonts;
  }
}
