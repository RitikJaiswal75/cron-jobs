import { env } from './types/global.types';

async function doSomeTaskOnASchedule(env: env) {
	return new Response(JSON.stringify({ message: 'Done', env: env.CURRENT_ENVIRONMENT }));
}

export default {
	async scheduled(env: env, ctx: ExecutionContext) {
		ctx.waitUntil(doSomeTaskOnASchedule(env));
	},
	async fetch(env: env) {
		return new Response(JSON.stringify({ currentEnv: env.CURRENT_ENVIRONMENT, message: 'Server is up and running', status: 200 }));
	},
};
