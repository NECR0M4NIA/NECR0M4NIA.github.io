import GithubLogo from "../icons/single-page-developer-portfolio/github.svg";
import YouTubeLogo from "../icons/single-page-developer-portfolio/youtube.svg";
import FrontEndLogo from "../icons/single-page-developer-portfolio/frontendmentor.svg";
import LinkedInLogo from "../icons/single-page-developer-portfolio/linkedin.svg";

function Component() {
  return (
    <header className="mt-10 mb-20 mr-auto ml-auto flex flex-col md:justify-between md:items-end md:flex-row md:mx-12 md:my-2 2xl:mx-24 2xl:mt-14">
      <p className="header-username font-bold text-2xl text-center text-white md:text-3xl">
        @necr0m4nia
      </p>
      <div className="header-logos-container flex justify-evenly mt-10 md:gap-10">
        <a
          className="hover:brightness-75 hover:scale-115 duration-300 ease-out transition-all"
          href="https://github.com/NECR0M4NIA"
        >
          <img className="header-logo-item w-7 2xl:w-8" src={GithubLogo} alt="" />
        </a>
        <a
          className="hover:brightness-75 hover:scale-115 duration-300 ease-out transition-all"
          href="https://www.youtube.com/@NECROMANIA"
        >
          <img
            className="header-logo-item w-7 2xl:w-8 grayscale brightness-1000"
            src={YouTubeLogo}
            alt=""
          />
        </a>
        <a
          className="hover:brightness-75 hover:scale-115 duration-300 ease-out transition-all"
          href="#"
        >
          <img className="header-logo-item w-7 2xl:w-8" src={FrontEndLogo} alt="" />
        </a>
        <a
          className="hover:brightness-75 hover:scale-115 duration-300 ease-out transition-all"
          href="#"
        >
          <img className="header-logo-item w-7 2xl:w-8" src={LinkedInLogo} alt="" />
        </a>
      </div>
    </header>
  );
}

export default Component;
