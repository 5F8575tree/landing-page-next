const BudgetSearch = () => {
  return (
    <section id="budget-calculator-section" className="px-6">
      <div
        id="budget-search-container"
        className="-mt-8 py-8 bg-white drop-shadow-xl rounded-2xl"
      >
        <h2
          id="budget-search-header"
          className="text-center blue-text text-2xl font-bold"
        >
          Pre-qualify with <br />
          no impact to your credit
        </h2>
        <div id="inner-budget-container">
          <div id="top-row">
            <h2 className="text-xs text-slate-400">
              What kinds of cars do you want?
            </h2>
            <div id="carousel"></div>
          </div>
          <div id="input-container"></div>
          <div id="bottom-row"></div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSearch;
