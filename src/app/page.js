export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
     <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold tracking-tight">
        Welcome to <span className="text-blue-600">Hireloop</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Smart hiring starts here.
      </p>
    </main>
    </div>
  );
}
