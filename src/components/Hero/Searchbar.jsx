import Image from "next/image";

const Searchbar = () => {
  return (
    <section className="searchbar flex justify-center md:mt-6 mt-4 px-4 sm:px-0">
      <form action="" className="w-full">
        <div className="relative flex items-center">
          <input
            type="text"
            name="search"
            placeholder="Search by make, model, or keyword"
            autocomplete="off"
            aria-label="search talk"
            className="
              py-2
              md:placeholder-slate-600
              hover:placeholder-slate-300
              focus:placeholder-slate-300
              text-black
              rounded-md
              border-none
              ring-2
              ring-slate-300
              w-full
              drop-shadow-xs
              focus:ring-slate-500
              focus:ring-2
              bg-slate-50
              hover:bg-white
              pr-3
              sm:pl-10
              pl-2
              "
          />
          <Image
            src="/search.svg"
            alt="search icon"
            width="24"
            height="24"
            className="absolute right-4 sm:right-10 pointer-events-none h-4 md:h-8"
          />
        </div>
      </form>
    </section>
  );
};

export default Searchbar;
