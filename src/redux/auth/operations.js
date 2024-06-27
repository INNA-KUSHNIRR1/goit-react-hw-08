import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = ``;
};
export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      setAuthHeader(response.data.token);
      toast.success('Account created successfully! Welcome!', {
        duration: 4000,
        position: 'top-center',
        icon: '✔️',
      });
      return response.data;
    } catch (error) {
      toast.error('Registration failed. Please try again.' + error.message, {
        duration: 4000,
        position: 'top-center',
        icon: '❌',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', loginUser);
      setAuthHeader(response.data.token);
      toast.success('Login successful! Welcome back!', {
        duration: 4000,
        position: 'top-center',
        icon: '✔️',
      });
      return response.data;
    } catch (error) {
      toast.error(
        'Login failed. Please check your credentials and try again.' +
          error.message,
        {
          duration: 4000,
          position: 'top-center',
          icon: '❌',
        },
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`/users/logout`);
    clearAuthHeader();
    toast.success("You've logged out. Come back soon!", {
      duration: 4000,
      position: 'top-center',
      icon: '✔️',
    });
  } catch (error) {
    toast.error(
      'Oops! Something went wrong. Please try logging out again.' +
        error.message,
      {
        duration: 4000,
        position: 'top-center',
        icon: '❌',
      },
    );
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const savedToken = reduxState.auth.token;

    try {
      setAuthHeader(savedToken);
      const response = await axios.get('users/current');
      //   console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  },
);
