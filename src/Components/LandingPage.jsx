import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./Maincontainer";


function LandingPage() {
  return (
    <div className="container ">
      <div className="bg-yellow-700/70 flex justify-center items-center min-h-screen ">
        <div className="w-[100%] px-14 max-w-5xl ">


          {/* Main Heading */}
          <div className="text-center">
            <h1 className="text-3xl text-white font-bold">LANDING PAGE</h1>
            <p className="text text-white pb-1">MARKETING</p>
 

            {/* Mid Container */}
            <section className="container overflow-hidden bg-white">
              <Header />
              <MainContent />
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

