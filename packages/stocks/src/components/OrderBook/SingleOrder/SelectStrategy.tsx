import { createAction } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function SelectStrategy({ orderBookId }: { orderBookId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [strategies, setStrategies] = useState<{ params: unknown, id: string, name: string }[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(false);
    // setStrategies(str);
  }, []);
  return (
    <div className="uk-form-select" data-uk-form-select>
      {(isLoading) && <div data-uk-spinner />}
      {(!isLoading)
        && (
          <select
            className="uk-button small uk-card-primary"
            onChange={(event) => {
              const strategyName = event.target.value;
              const addStrategy = createAction('strategy', (state) => {
                return state
              })
              dispatch(addStrategy({ orderBookId, strategyName }));
            }}
          >
            <option>select a strategy</option>
            {strategies.map(({ name, id }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        )}
    </div>
  );
}

export default SelectStrategy;
