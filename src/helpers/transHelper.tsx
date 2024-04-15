import translation from '@data/translation.json';

export const getTranslate = (val) => {
  if (translation[val]) {
    return translation[val];
  } else {
    return val;
  }
};
