const upstashRedisUrl = process.env.UPSTASH_REDIS_REST_URL;
const authToken = process.env.UPSTASH_REDIS_REST_TOKEN;

type Command = "zrange" | "sismember" | "get" | "smembers" | "zrem" | "set";

export async function fetchRedis(command: Command, ...args: (string | number)[]) {
  const commandUrl = `${upstashRedisUrl}/${command}/${args.join("/")}`;

  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Error executing Redis command: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result;
}

export async function deleteFromRedis(key: string, n: number) {
  const data = await fetchRedis("zrange", key, 0, n - 1);
  const ids = data.map((item: string) => item.split(":")[0]);
  await fetchRedis("zrem", key, ...ids);
}
