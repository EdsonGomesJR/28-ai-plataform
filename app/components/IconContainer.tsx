import { Icon } from "@phosphor-icons/react"


interface IconContainerProps {
  icon: Icon
  className?: string
  size: string | number | undefined
}

export function IconContainer({icon: Icon ,className ,size}:IconContainerProps) {
  return (
     <div className={`flex p-4 text-[#94A3B8] rounded-[1rem] bg-[#0F172A] ${className}`}>
          <Icon size={size}  />
     </div>
   
  )
}
