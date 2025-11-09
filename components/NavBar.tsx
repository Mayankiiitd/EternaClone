

export default function Header() {

  return (
    <header className="sticky top-0 z-30 bg-gray-700 mb-1.5 flex justify-center items-center">
      <div className=" w-11/12 mx-auto px-4 h-14 flex items-center justify-between">
        {/*left side */}
        <div className="flex items-center gap-6">
          <div className="text-white font-bold">
            AXIOM <span className="opacity-60 font-semibold">Pro</span>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
        </div>
      </div>
    </header>
  );
}
