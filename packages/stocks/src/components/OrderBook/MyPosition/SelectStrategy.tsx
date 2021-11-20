import React, { useEffect, useState } from 'react';
import { httpGet, httpPost } from '../../../Types/helpers/http';

function SelectStrategy({ orderBookId }: { orderBookId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [strategies, setStrategies] = useState<{ params: unknown, id: string, name: string }[]>([]);
  useEffect(() => {
    httpGet<{
      error: string;
      strategies: { params: unknown, id: string, name: string }[];
    }>('/strategies').then(({ error, strategies: str }) => {
      if (error) {
        setIsLoading(true);
      } else {
        setStrategies(str);
      }
    });
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
              httpPost('/orderbook/strategy', { orderBookId, strategyName }).then(() => {
                setIsLoading(true);
              });
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
