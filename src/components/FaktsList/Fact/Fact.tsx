import './Fact.scss';

export default function Fact({fact}: {fact: string}): JSX.Element {

  return (
    <li className="facts-list__item facts-item">
      {fact}
    </li>
  )
}