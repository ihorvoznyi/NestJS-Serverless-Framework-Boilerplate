import { APIGatewayEvent } from 'aws-lambda';

export function parseRequestBody(event: APIGatewayEvent): any {
  let body = event?.body;

  try {
    body = body ? JSON.parse(body) : {};
  } catch (error) {
    console.warn('Failed to parse request body:', error.message);
  }

  return body;
}
