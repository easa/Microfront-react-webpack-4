/* eslint-disable @typescript-eslint/no-unused-vars */
import type { } from 'avanza';
import { logger } from '../../logger';
import avanza from './avanza';

const accountId = process.env.AVANZA_ACCOUNT as string;
const username = process.env.AVANZA_USER as string;
const password = process.env.AVANZA_PASSWORD as string;
const totpSecret = process.env.AVANZA_TOTP as string;
console.log(accountId, username);
export const authenticate = (userId: string) => avanza.authenticate({
  username, password, totpSecret,
})
  .then((i) => i)
  .catch((e) => {
    logger({ authenticate: e });
    return undefined;
  });
export const getAccount = (userId: string) => avanza.getAccountOverview(accountId)
  .then((i) => i)
  .catch((e) => {
    logger({ getAccountOverviewError: e });
    return undefined;
  });
