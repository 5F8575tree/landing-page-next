import Image from "next/image";

const Searchbar = () => {
  return (
    <section className="searchbar flex justify-center mt-6">
      <form
        action="/cars"
        className="blue-text bg-white w-10/12 rounded-lg drop-shadow"
      >
        <fieldset>
          <div className="search-container flex justify-between content-center p-3">
            <input
              type="search"
              placeholder="Search by make, model, or keyword"
              className="w-full"
            />
            <Image src="/search.svg" alt="search icon" width="20" height="20" />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Searchbar;
