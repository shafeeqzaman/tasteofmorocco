export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/background-pattern.svg')] bg-cover px-6 text-center">
      <h1 className="text-5xl font-extrabold text-orange-800 mb-6 font-heading">
        404 - Introuvable / Not Found
      </h1>


      <p className="text-md text-orange-600 mb-2">
        🇫🇷 <span className="italic">Tu t’es perdu, sahbi. Cette page est comme un couscous sans tfaya — ça n’existe pas !</span>
      </p>

      <p className="text-md text-orange-600 mb-6">
        🇬🇧 You’ve wandered too far, sahbi. This page is like couscous without tfaya — it just doesn’t exist.
      </p>

      <a
        href="/"
        className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-full shadow hover:bg-orange-700 transition"
      >
        ⬅️ Retourner / Go Home
      </a>
    </div>
  );
}
