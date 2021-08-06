import { Entry, EntryFromAPI } from '../types';

export async function getEntry(search?: string): Promise<Entry[]> {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en_US/${search ? search : ''}`
  );
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
