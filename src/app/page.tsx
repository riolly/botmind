import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="bg-background min-h-screen p-4">
        <h1 className="text-xl">BotMind</h1>
      </main>
    </HydrateClient>
  );
}
