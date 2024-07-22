import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      toast.success('Contact created successfully!', {
        duration: 4000,
        position: 'top-center',
        icon: '✔️',
      });
      return response.data;
    } catch (error) {
      toast.error('Failed to create contact: ' + error.message, {
        duration: 5000,
        position: 'top-center',
        icon: '❌',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted!', {
        duration: 4000,
        position: 'top-center',
        icon: '✔️',
      });
      return response.data;
    } catch (error) {
      toast.error('Failed to delete contact: ' + error.message, {
        duration: 5000,
        position: 'top-center',
        icon: '❌',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (updateContact, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/contacts/${updateContact.contactId}`,
        updateContact.updateContact,
      );
      toast.success('Contact updated successfully!', {
        duration: 4000,
        position: 'top-center',
        icon: '✔️',
      });
      return response.data;
    } catch (error) {
      toast.error('Failed to update contact: ' + error.message, {
        duration: 5000,
        position: 'top-center',
        icon: '❌',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
