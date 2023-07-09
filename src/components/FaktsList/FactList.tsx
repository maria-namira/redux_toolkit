import './FactsList.scss';
import { useAppSelector } from '../../hooks/hooks';
import { selectFacts, selectFact } from '../../slices/changeFieldsSlice';
import Fact from './Fact/Fact';
import { nanoid } from '@reduxjs/toolkit';

export default function FactsList(): JSX.Element {
  const facts = useAppSelector(selectFacts);
  const quantity = useAppSelector(selectFact);
  const calculated = facts.slice(0, +quantity);

  return (
    <ul className="app__facts-list facts-list">
      {calculated.length ? calculated.map((el: string) => <Fact key={nanoid()} fact={el} />) : null}
    </ul>
  )
}