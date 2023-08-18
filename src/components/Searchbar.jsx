import Image from "next/image";

const Searchbar = () => {
  return (
    <section className="searchbar flex justify-center mt-6">
      <form action="" className="w-10/12">
        <div className="relative flex items-center">
          <input
            type="text"
            name="search"
            placeholder="Search by make, model, or keyword"
            autocomplete="off"
            aria-label="search talk"
            className="px-3
              py-2
              placeholder-slate-600
              hover:placeholder-slate-300
              focus:placeholder-slate-300
              text-black
              rounded-2xl
              border-none
              ring-2
              ring-slate-300
              w-full
              drop-shadow
              focus:ring-slate-500
              focus:ring-2
              bg-slate-50
              hover:bg-white
              pr-3
              pl-10
              "
          />
          <Image
            src="/search.svg"
            alt="search icon"
            width="24"
            height="24"
            className="absolute right-10 pointer-events-none"
          />
        </div>
      </form>
    </section>
  );
};

export default Searchbar;
