import { BiLogoLinkedin } from "react-icons/bi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

function SocialMedia() {
  return (
    <div className="flex flex-col items-center reg-instrument-sans text-xl space-y-2">
      <p className="bold-instrument-sans">Let's connect!</p>
      <div className="flex flex-row space-x-5">
        <a target="_blank" href="https://www.linkedin.com/in/gad-cooper/" className="hover:text-[#3698d5]">
          <BiLogoLinkedin />
        </a>
        <a target="_blank" href="https://github.com/spyingEnvelope/" className="hover:text-[#3698d5]">
          <TbBrandGithubFilled />
        </a>
        <a target="_blank" href="mailto:gad.cooper@shaw.ca" className="hover:text-[#3698d5]">
          <MdEmail />
        </a>
      </div>
      <p className="text-xs mt-2">&#169; 2025 Gad Cooper. All Rights Reserved.</p> 
    </div>
  );
}

export default SocialMedia;
