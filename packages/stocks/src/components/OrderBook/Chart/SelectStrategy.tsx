import React, { useEffect, useState } from 'react';

function SelectStrategy({ orderBookId }: { orderBookId: string }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [strategies, setStrategies] = useState<{ params: unknown, id: string, name: string }[]>([]);
  useEffect(() => {
    setIsLoading(false);
    setStrategies([]);
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
