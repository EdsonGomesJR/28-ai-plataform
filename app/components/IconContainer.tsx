import { Icon } from "@phosphor-icons/react"


interface IconContainerProps {
  icon: Icon
  className?: string
}

export function IconContainer({icon: Icon ,className}:IconContainerProps) {
  return (
     <div className={`flex  p-4  text-[#94A3B8] rounded-[1rem] border-[#1E293B] bg-[#0F172A] ${className}`}>
          <Icon size={32} />
     </div>
   
  )
}
