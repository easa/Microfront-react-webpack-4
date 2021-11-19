import { format, transports, createLogger } from 'winston';
import 'winston-daily-rotate-file';

const log = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    format.align(),
    format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
    format.splat(),
    format.printf(
      (msg) => `[${msg.timestamp}] ${msg.message}`,
    ),
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.splat(),
        format.printf((msg) => `[${msg.timestamp}] ${msg.message}`),
        format.colorize(),
      ),
    }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.DailyRotateFile({
      filename: 'logs/%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '10m',
      maxFiles: '30d',
      level: 'info',
    })],
});

type Value = string | number | unknown | undefined;

export const logger = (...values: Value[]) => {
  const formattedText = values.map((v) => (typeof v === 'object' ? JSON.stringify(v) : v));
  log.info({ message: formattedText });
};

const isError = (values: any) => values[0].level === 'error';
// TODO replace the logger with this function to have a better debugging
export const loggerDebug = (stockId: string) => (...values: Value[]) => {
  const formattedText = values.map((v) => (typeof v === 'object' ? JSON.stringify(v) : v));
  if (isError(values)) {
    log.error(formattedText);
  } else {
    log.info({ message: `${formattedText} [${stockId}]` });
  }
};
