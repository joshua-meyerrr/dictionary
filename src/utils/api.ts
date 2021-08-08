import { Entry, EntryFromAPI } from '../types';

export async function getEntry(search?: string): Promise<Entry[]> {
  let response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en_US/${
      search ? search : 'error'
    }`
  );
  if (response.status === 404) {
    response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/error`
    );
  }

  const data: EntryFromAPI[] = await response.json();

  const formattedEntries: Entry[] = data.map((entry) => {
    const formattedEntry: Entry = {
      word: entry.word,
      phonetics: entry.phonetics[0].text,
      meanings: entry.meanings.map((meaning) => {
        const formattedMeaning = {
          type: meaning.partOfSpeech,
          text: {
            definition: meaning.definitions[0].definition,
            example: meaning.definitions[0].example,
          },
        };
        return formattedMeaning;
      }),
    };
    return formattedEntry;
  });
  return formattedEntries;
}
