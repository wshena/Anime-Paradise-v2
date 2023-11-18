
/* eslint-disable react/prop-types */
export function sliceParagraph(text, targetWords) {
    const words = text?.split(' ');
    const slicedWords = words?.slice(0, Math.min(targetWords, words?.length));
    const slicedText = slicedWords?.join(' ');
  
    if (words?.length > targetWords) {
      return `${slicedText}...`;
    }
    return slicedText;
}

export default function getRandomItems(array, count) {
  const newArray = array.slice();
  newArray.sort(() => Math.random() - 0.5);
  const randomItems = newArray.slice(0, count);

  return randomItems;
}
