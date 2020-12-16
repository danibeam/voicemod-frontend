/* eslint-disable no-nested-ternary */
export function getOrderedVoices(voices, order) {
  let orderedVoices;
  if (order === 'ASC') {
    orderedVoices = voices.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
  } else {
    orderedVoices = voices.sort((a, b) =>
      a.name < b.name ? 1 : b.name < a.name ? -1 : 0
    );
  }
  return orderedVoices;
}

export function getFilteredVoices(voices, filter, order) {
  return getOrderedVoices(voices, order).filter((voice) =>
    voice.tags.includes(filter.toLowerCase())
  );
}

export function getFoundVoices(voices, search) {
  return voices.filter((voice) => voice.name.toLowerCase().includes(search));
}

export function getRandomVoice(voices) {
  return voices[Math.floor(Math.random() * voices.length)];
}

export default {
  getOrderedVoices,
  getFilteredVoices,
  getFoundVoices,
  getRandomVoice,
};
