import IconWithGlow from "./custom/IconWithGlow";
import { IconGithub } from "./Icons/GitHub";
import { IconGmail } from "./Icons/Gmail";
import { IconLinkedin } from "./Icons/LinkedIn";

export default function Socials() {
  return (
    <ul className="flex gap-10 text-slate-500 text-base font-semibold">
      <li className="flex justify-center items-center">
        <a
          href="https://github.com/infernall92"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-[inherit]"
        >
          <IconWithGlow
            Icon={<IconGithub className="w-6 h-6 group-hover:text-[#000000]" />}
            glowColor="#ffffff"
          />
        </a>
      </li>
      <li className="flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/hristo-hristov-931349285/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-[inherit]"
        >
          <IconWithGlow
            Icon={
              <IconLinkedin className="w-6 h-6 group-hover:text-[#0A66C2]" />
            }
            glowColor="#ffffff"
          />
        </a>
      </li>
      <li className="flex justify-center items-center">
        <a
          href="mailto:hhristo.hristovv@gmail.com"
          className="cursor-[inherit]"
        >
          <IconWithGlow
            Icon={<IconGmail className="w-8 h-8 group-hover:text-[#c71610]" />}
            glowColor="#f2a60c"
          />
        </a>
      </li>
    </ul>
  );
}
