const PostSearchMenuMobile = () => {
  return (
    <section className="border-b border-t border-slate-300 mt-3">
      <ul className="flex blue-text justify-center items-center">
        <li className="flex-grow border-b-2 border-red-600 text-center py-2 mx-3 ml-12">
          Home
        </li>
        <li className="flex-grow hover:border-b-2 border-red-600 text-center py-2 mx-3">
          Sell/Trade
        </li>
        <li className="flex-grow hover:border-b-2 border-red-600 text-center py-2 mx-3 mr-12">
          Finance
        </li>
      </ul>
    </section>
  );
};

export default PostSearchMenuMobile;
