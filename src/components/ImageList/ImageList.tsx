import './ImagesList.scss';
import {useAppSelector} from '../../hooks/hooks';
import { nanoid } from 'nanoid';
import {selectImages} from '../../slices/changeFieldsSlice';
import Image from './Image/Image';

export default function ImagesList(): JSX.Element {
  const images = useAppSelector(selectImages);

  return (
    <ul className="app__img-list img-list">
      {images.length ? images.map((el) => <Image key={nanoid()} image={el} />) : null}
    </ul>
  )
}