export type Text = {
  type: string;
  text: {
    definition: string;
    example: string;
  };
};

export type Entry = {
  word: string;
  phonetics: string;
  meanings: Text[];
};

export type EntryFromAPI = {
  word: string;
  phonetics: string[];
  meanings: MeaningsFromAPI[];
};

export type MeaningsFromAPI = {
  partOfSpeech: string;
  definitions: DefinitionsFromAPI[];
};

export type DefinitionsFromAPI = {
  definition: string;
  synonyms?: string[];
  example?: string;
};
