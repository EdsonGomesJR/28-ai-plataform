'use client'
import { Horse, Heart, Cube, MagicWand, Code, ImageSquare, PlayCircle, MusicNotesPlus, MusicNotesSimple, MusicNotes } from "@phosphor-icons/react";
import { InterfaceButton } from "./components/InterfaceButton";
import { IconContainer } from "./components/IconContainer";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
  <main className="flex flex-col bg-[rgba(2,6,23,0.80)] gap-10 border  border-[#334155] rounded-[2rem] w-[76rem] p-[3.75rem] items-center justify-center">
    
    <div className=" flex flex-col gap-10 items-center justify-center">
      <div className="border border-[#1E293B]">
        <IconContainer icon={MagicWand}  className="border-none "/>
      </div>
      <h1 className="text-[#F8FAFC] font-semibold text-[2rem]">Experimente o poder da Inteligência Artificial  </h1>
    </div>
    <div className="flex flex-col gap-4 p-4 w-[38rem] items-start"> 
      <InterfaceButton text='Gerador de códigos' icon={Code}  />
      <InterfaceButton text='Gerador de códigos' icon={ImageSquare} />
      <InterfaceButton text='Gerador de códigos' icon={PlayCircle} />
      <InterfaceButton text='Gerador de códigos' icon={MusicNotes} />
    </div>
    <div className="w-full border border-[#334155]"/>
    <Footer />
  </main>
  )
}
