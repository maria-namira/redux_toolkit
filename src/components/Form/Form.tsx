import './Form.scss';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { change, saveImage, resetForm, selectFact, selectImage } from '../../slices/changeFieldsSlice';

export default function Form(): JSX.Element {
  const fact = useAppSelector(selectFact);
  const image = useAppSelector(selectImage);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(change({ name, value }));
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(saveImage(image));
    dispatch(resetForm());
  }

  return (
    <div className='app__form form'>
      <div className="form__item item">
        <input
          onChange={handleChange}
          value={fact}
          name='fact'
          id='fact'
          type="number"
          min={1}
          max={5}
          className="item__input"
          placeholder='Введите количество фактов от 1 до 5'
        />
        <label htmlFor="fact" className="item__label">Факты о Star Wars</label>
      </div>
      <form onSubmit={handleSubmit} className="form__item item">
        <input
          onChange={handleChange}
          value={image}
          name='image'
          id='fact'
          type="url"
          className="item__input"
          placeholder='Введите ссылку на изображение'
          required
        />
        <button className="item__btn">Сохранить изображение</button>
      </form>
    </div>
  )
}