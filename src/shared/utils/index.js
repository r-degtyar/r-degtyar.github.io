/**
 *
 * @param {string} text
 * @returns
 */
export function splitText(text) {
  const splitTitle = text.split(" ");
  const lastPart = splitTitle.pop();
  const firstPart = splitTitle.join(" ");

  return [firstPart, lastPart];
}

/**
 * @typedef {Record<string, Record<string, string>>} Image
 */

/**
 *
 * @param {Image} image
 * @returns {string}
 */
export function getImageUrl(image) {
  const imageSets = Object.entries(image).map(([format, images]) => {
    return Object.entries(images).map(([key, value]) => {
      return `url(${value}) ${key} type('image/${format}')`;
    });
  });

  return `image-set(${imageSets.join(", ")})`;
}
