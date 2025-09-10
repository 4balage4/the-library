

export function Welcome({ user, name }: { user: string, name?: string }) {

  const cleanName = (name ?? '').trim();

  return (
    <div>
      <h1>{`Welcome, ${user}`}</h1>
      <p>{cleanName ?
        `Nice to meet you, ${cleanName}!`
        : "Nice to meet you noname person!"}</p>
    </div>
  );
}
