import { ArrowRight, Icon } from "@phosphor-icons/react"
import { IconContainer } from "./IconContainer"

interface InterfaceButtonProps {
  text: string
  icon: Icon
}
export function InterfaceButton({text, icon : Icon}: InterfaceButtonProps) {
  return (
    <div className="flex p-4 items-center justify-between self-stretch rounded-[1rem] border border-[#334155] bg-[#0F172A]">
      <div className="flex items-center  gap-6 ">
       <IconContainer icon={Icon} className=" border border-[#1E293B] "/>
        <p className="text-[#E2E8F0] text-lg leading-normal font-semibold">{text}</p>
      </div>
         <IconContainer icon={ArrowRight} className="transition hover:text-[#E2E8F0]"/>
        
    </div>
  )
}
