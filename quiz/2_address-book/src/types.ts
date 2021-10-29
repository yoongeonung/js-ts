// api
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  HOME = 'home',
  OFFICE = 'office',
  STUDIO = 'studio',
}

export { Contact, PhoneType };
