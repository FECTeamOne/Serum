import CSS_COLOR_NAMES from "lib/cssColors";

export default function parseStyle(styleName) {
  const styleColors = styleName.toUpperCase().replace(/\s+/g, '').split('&');

  let cssStyleColors = styleColors.map((styleColor) => {
    let matchingColors = CSS_COLOR_NAMES.filter(color => styleColor.includes(color));
    if (matchingColors.length === 0) {
      matchingColors = 'GREY';
    }
    const maxLength = Math.max(...matchingColors.map(color => color.length));
    return matchingColors.find(color => color.length === maxLength);
  });

  if (cssStyleColors[0] === cssStyleColors?.[1]) {
    cssStyleColors = cssStyleColors.slice(0, 1);
  }

  return cssStyleColors;
}
