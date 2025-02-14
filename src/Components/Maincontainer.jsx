const MainContent = () => {
  return (
    <>
      <section className="mt-4 flex flex-col md:flex-row items-start justify-between w-full overflow-hidden">

        {/* left Section */}
        <div className="md:w-1/2 flex flex-col">
          {/* upper part */}
          <div className="container md:w-full sm:w-[80%] text-left md:mx-auto mb-8 px-8 sm:relative sm:z-30">
            <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-[80%] font-bold text-gray-900/90 sm:min-w-[100%]">
              Helping you to create a big brand
            </h1>
          </div>
          {/* lower part */}
          <div className="bg-yellow-500 md:py-4 py-0 text-left mx-auto pl-8">
            <h3 className="my-4 text-2xl font-semibold">What you get</h3>
            <p className="text-xs sm:text-sm pb-10 min-h-20 md:max-w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores necessitatibus omnis excepturi cum deleniti eius sed enim rerumhsu magni. Ex omnis nihil ullam animi, maiores necessitatibus omnis excepturi</p>
          </div>
        </div>

        {/* right section */}

        <div className="container w-full mt-4 md:w-1/2">
          <img src="/src/assets/image.png" alt="image" className="md:scale-150 sm:scale-125 left-[100px] sm:left-[220px] md:left-[220px] -mb-8 h-[350px] relative  top-20 min-h-26" />
          
        </div>
      </section>
    </>
  );
};

export default MainContent;
