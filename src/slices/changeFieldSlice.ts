import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Fields {
  fact: string,
  image: string,
  images: string[],
  facts: string[],
}

const initialState: Fields = {
  fact: '',
  image: '',
  images: [],
  facts: [
    'Прообразом Чубакки стал пес режиссера.',
    'Актерам разрешили подобрать любимый цвет для своих световых мечей.',
    'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.',
    'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.',
    'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок'
  ],
}

export const changeFieldsSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    change: (state: Fields, action: PayloadAction<{ [key: string]: string }>) => {
      const { name, value } = action.payload;
      let prop;
      if (value && (+value <= 0 || +value > 5)) {
        prop = ''
      } else {
        prop = value;
      }
      
      if (name === 'fact' || name === 'image') {
        state[name] = prop;
      }
    },
    saveImage: (state: Fields, action: PayloadAction<string>) => {
      state.images = [action.payload, ...state.images];
    },
    resetForm: (state: Fields) => {
      state.image = '';
    }
  }
});

export const selectFact = (state: RootState) => state.field.fact;
export const selectImage = (state: RootState) => state.field.image;
export const selectImages = (state: RootState) => state.field.images;
export const selectFacts = (state: RootState) => state.field.facts;
export const { change, saveImage, resetForm } = changeFieldsSlice.actions;
export default changeFieldsSlice.reducer;