import GithubLogo from "../icons/single-page-developer-portfolio/github.svg";
import YouTubeLogo from "../icons/single-page-developer-portfolio/youtube.svg";
import FrontEndLogo from "../icons/single-page-developer-portfolio/frontendmentor.svg";
import LinkedInLogo from "../icons/single-page-developer-portfolio/linkedin.svg";

function Component() {
  return (
    <>
      <footer className="bg-slate-800 pb-16">
        <hr className="border-white w-72 ml-auto mr-auto mb-24 md:mb-12" />
        <div className="md:flex md:justify-between md:items-baseline md:px-12">
          <p className="header-username font-bold text-2xl text-center text-white">
            @necr0m4nia
          </p>
          <div className="header-logos-container flex justify-evenly mt-10 md:gap-10">
            <a
              className="hover:brightness-75 hover:scale-115 duration-300 ease-out transition-all"
              href="https://github.com/NECR0M4NIA"
            >
              <img className="header-logo-item w-7" src={GithubLogo} alt="" />
            </a>
            <a
              className="hover:brightness-75 hover:scale-115 duration-300 ease-out transition-all"
              href="https://www.youtube.com/@NECROMANIA"
            >
              <img
                className="header-logo-item w-7 grayscale brightness-1000"
                src={YouTubeLogo}
                alt=""
              />
            </a>
            <a
              className="hover:brightness-75 hover:scale-115 duration-300 ease-out transition-all"
              href="#"
            >
              <img className="header-logo-item w-7" src={FrontEndLogo} alt="" />
            </a>
            <a
              className="hover:brightness-75 hover:scale-115 duration-300 ease-out transition-all"
              href="#"
            >
              <img className="header-logo-item w-7" src={LinkedInLogo} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Component;
