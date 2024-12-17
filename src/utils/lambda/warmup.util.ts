import { APIGatewayEvent } from 'aws-lambda';

export function isWarmupEvent(event: APIGatewayEvent): boolean {
  // TODO: enhance
  return event?.body === 'serverless-plugin-warmup';
}
