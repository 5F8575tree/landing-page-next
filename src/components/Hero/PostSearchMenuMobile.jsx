const PostSearchMenuMobile = () => {
  return (
    <section className="mt-3">
      <ul className="flex blue-text justify-center items-center md:text-white">
        <li className="flex-grow border-b-2 border-amber-500 text-center py-2 mx-3 ml-12 md:drop-shadow">
          Home
        </li>
        <li className="flex-grow hover:border-b-2 border-amber-500 text-center py-2 mx-3 md:drop-shadow">
          Sell/Trade
        </li>
        <li className="flex-grow hover:border-b-2 border-amber-500 text-center py-2 mx-3 mr-12 md:drop-shadow">
          Finance
        </li>
      </ul>
    </section>
  );
};

export default PostSearchMenuMobile;
