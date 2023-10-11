export function cleanImageUrl(url) {
  url = url.slice(5);
  url = url.slice(0, url.length - 2);
  return url;
}

export function cleanText(offer) {
  offer = offer.slice(4);
  return offer;
}