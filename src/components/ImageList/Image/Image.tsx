import './Image.scss';

export default function Image({image}: {image: string}): JSX.Element {
  return (
    <li className="img-list__item img-item">
      <img src={image} alt="" className="img-item__img" />
    </li>
  )
}