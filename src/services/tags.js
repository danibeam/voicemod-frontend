export default function getTagsFromVoices(voices) {
  const tags = voices.flatMap((voice) => voice.tags);
  return [...new Set(tags)];
}
