export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-yellow-400 font-bold text-xl py-4 px-4">
        <div className="container ml-4">
          <a
            className="m-0 font-mono from-red-400 to-red-800 cursor-pointer"
            id="#todo"
          >
            Todo Application
          </a>
        </div>
      </header>
    </>
  );
}
