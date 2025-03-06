import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/filtersSelectors";

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, serched) => {
    const arrayByName = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(serched.toLowerCase())
    );

    const contactsByPhone = contacts.filter((contact) =>
      contact.number.includes(serched.toLowerCase())
    );

    if (arrayByName.length > 0) return arrayByName;
    if (contactsByPhone.length > 0) return contactsByPhone;

    return contacts;
  }
);
