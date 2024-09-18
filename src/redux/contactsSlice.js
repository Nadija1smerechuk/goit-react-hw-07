
import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },

extraReducers: (builder) => {
  builder
    .addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    })
    .addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    })
    .addCase(addContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    
    .addCase(deleteContact.pending, state => {
      state.loading = true;
    })
    
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
  .addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
      
  },
});

export default contactsSlice.reducer;


export const selectContacts = (state) => state.contacts.items;

export const selectContactsLoading = (state) => state.contacts.loading;

export const selectContactsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactName.toLowerCase())
    );
  }
);

