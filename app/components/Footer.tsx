import { PaperPlaneRight, PlusCircle, SneakerMove } from "@phosphor-icons/react";
import { IconContainer } from "./IconContainer";

export function Footer() {
  return (
    <div className="flex w-full gap-4  self-stretch items-center">
      <div className=" flex-1 p-4 gap-4  items-center rounded-[1rem] border border-[#334155] flex bg-[#0F172A]">
        <IconContainer icon={PlusCircle} className="border-none p-0 " />
        <input type="text" className=" hover:opacity-80 outline-none focus:outline-[#334155] focus:rounded-md  text-[#E2E8F0] p-1 w-full bg-[#0F172A] placeholder:text-[#E2E8F0]"  placeholder="Envie uma mensagem ou digite “/” para exibir os comandos "/>
      </div>
      <div className="border border-[#334155] rounded-[1rem]">
        <IconContainer icon={PaperPlaneRight} className="border-none transition hover:text-[#E2E8F0]"  />
      </div>
    </div>
  )
}
