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

export function getFilteredVoices(voices, filter) {
  return voices.filter((voice) => voice.tags.includes(filter.toLowerCase()));
}

export default {
  getOrderedVoices,
  getFilteredVoices,
};
