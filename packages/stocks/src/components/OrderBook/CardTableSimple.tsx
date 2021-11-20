/* eslint-disable react/require-default-props */
import React from 'react';
import { Position } from './types';

function CardTableSimple({ position }: {
  position?: Position;
}) {
  return (
    <table className="uk-table uk-table-tiny">
      <tbody>
        <tr>
          <td>
            <b className={position && position.profit > 0 ? 'uk-text-success' : 'uk-text-danger'}>
              {position ? `${position.profit}%` : ''}
            </b>
          </td>
          <td>
            {position && position.volume}
          </td>
          <td>
            {position && `$${position.price}`}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CardTableSimple;
