import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { isWarmupEvent } from './utils/lambda/warmup.util';
import { parseRequestBody } from './utils/lambda/body-parser.util';
import { bootstrapNestApp } from './bootstrap';

let cachedHandler: Handler;

async function initializeHandler(): Promise<Handler> {
  if (!cachedHandler) {
    console.log('Initializing the Lambda handler...');
    cachedHandler = await bootstrapNestApp();
  }

  return cachedHandler;
}

export const lambdaHandler: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const WATCH_KEY = 'REQUEST_EXECUTION_TIME';

  console.time(WATCH_KEY);

  if (isWarmupEvent(event)) {
    console.log('Warmup event detected. Returning early...');
    return { statusCode: 200, body: 'Warmup event handled' };
  }

  const handler = await initializeHandler();

  //
  const parsedBody = parseRequestBody(event);
  console.info('Parsed Request Body:', parsedBody);

  //
  const response = await handler(event, context, callback);

  console.timeEnd(WATCH_KEY);

  return response;
};
