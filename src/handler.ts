import { APIGatewayProxyHandler } from 'aws-lambda';

export const graphql: APIGatewayProxyHandler = async (event) => {
	  return {
		      statusCode: 200,
		          body: JSON.stringify({
				        message: 'Hello from Lambda!',
					    }),
					      };
};

