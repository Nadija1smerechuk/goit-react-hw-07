import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://66e9ad4987e41760944a5f82.mockapi.io";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/contacts");
            return res.data;
        }catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContacts, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", newContacts);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactsId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactsId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);