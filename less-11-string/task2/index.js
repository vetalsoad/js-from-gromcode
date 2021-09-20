const sortContacts = (contacts, bool = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  return contacts.sort((a,b) => {
    if (bool) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
};
const contakts = [
  { name: "Anton", phoneNumber: "999-99-99" },
  { name: "Bob", phoneNumber: "777-99-99" },
  { name: "Daddy", phoneNumber: "222-99-55" },
  { name: "Endrew", phoneNumber: "223-99-99" },
  { name: "Clint", phoneNumber: "555-99-99" },
  { name: "Frank", phoneNumber: "333-99-99" },
];

console.log(sortContacts(contakts, true));