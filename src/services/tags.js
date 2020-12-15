import capitalizeFirstLetter from './utils';

export default function getTagsFromVoices(voices) {
  const tags = voices.flatMap((voice) =>
    voice.tags.map((tag) => capitalizeFirstLetter(tag))
  );
  tags.unshift('All');
  return [...new Set(tags)];
}
