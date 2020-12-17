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

export function getRandomVoice(voices) {
  return voices[Math.floor(Math.random() * voices.length)];
}

export function getVoices(voices, filter, search, order) {
  return filter === 'All'
    ? getOrderedVoices(
        voices.filter((voice) => voice.name.toLowerCase().includes(search)),
        order
      )
    : getOrderedVoices(
        voices.filter(
          (voice) =>
            voice.name.toLowerCase().includes(search) &&
            voice.tags.includes(filter.toLowerCase())
        )
      );
}

export default {
  getOrderedVoices,
  getRandomVoice,
  getVoices,
};
