/* eslint-disable no-nested-ternary */
export default function getOrderedVoices(voices, order) {
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
