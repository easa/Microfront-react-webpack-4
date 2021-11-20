/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { httpDelete } from '../../../Types/helpers/http';

function strategyName({ name, orderBookId }: { name: string; orderBookId: string; }) {
  const [isLoading, setIsLoaing] = useState<boolean>(false);
  return (
    <div className="uk-grid" data-uk-grid>
      {isLoading && <div data-uk-spinner style={{ margin: '0 auto' }} />}
      {!isLoading
        && (
          <>
            <div className="uk-width-3-4">
              <span className="uk-text-truncate uk-text-background uk-text-primary">
                ✅
                {' '}
                {name}
              </span>
            </div>
            <div className="uk-width-1-4">
              <button
                className="button uk-text-danger"
                type="button"
                data-uk-close
                onClick={() => {
                  httpDelete(`/orderbook/strategy/${orderBookId}`).then(() => {
                    setIsLoaing(true);
                  });
                }}
              />
            </div>
          </>
        )}
    </div>
  );
}

export default strategyName;
