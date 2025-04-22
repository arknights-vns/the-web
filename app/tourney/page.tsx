"use client";

import Image from "next/image";
import VNS_Banner from "@/public/VNS_Banner.png";
import { Operator } from "@/models/operatorModel";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function TournamentBan() {
  const bannedList: Operator[] = [
    // testing long operator names
    { id: "151_myrtle", name: "Texas the Omertosa", rarity: 4, class: 1 },
    { id: "151_myrtle", name: "Vulpisfoglia", rarity: 4, class: 1 },
    { id: "151_myrtle", name: "Entelechia", rarity: 4, class: 1 },
    { id: "151_myrtle", name: "Executor the Ex Foedere", rarity: 4, class: 1 },
    { id: "151_myrtle", name: "Silence the Paradigmatic", rarity: 4, class: 1 },
    { id: "151_myrtle", name: "Myrtle", rarity: 4, class: 1 },
  ];
  const OperatorClasses: string[] = [
    "Vanguard",
    "Guard",
    "Defender",
    "Sniper",
    "Caster",
    "Medic",
    "Supporter",
    "Specialist",
  ];
  const [activeClass, setActiveClass] = useState<number>(0);
  const [activeRarity, setActiveRarity] = useState<number>(5);
  return (
    <div className="block w-screen h-screen">
      <div className="flex flex-col w-full h-full items-start justify-start">
        <div className="flex justify-center items-center w-full h-10 my-3 sticky top-16">
          <Image
            src={VNS_Banner}
            alt="VNS_Banner"
            height={40}
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-6 w-full min-h-25">
          {bannedList.map((operator, _) => {
            return (
              <div className="flex flex-col items-center justify-start h-full w-full">
                <div className="w-12 h-12 bg-gray-400">
                  <Image
                    src={`/operators/char_${operator.id}.png`}
                    alt={operator.name}
                    width={48}
                    height={48}
                    className="object-contain grayscale"
                  />
                </div>
                <div className="w-full text-center text-[10px] break-words px-1">
                  {operator.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-between w-full h-8 bg-gray-300 px-2">
          <div className="text-xs leading-8">
            Thời gian còn lại: <span className="text-red-500">30</span> giây
          </div>
          <div className="text-xs leading-8">
            Đã cấm: <span className="text-red-500">0</span>/6 Op
          </div>
        </div>
        <div className="grid grid-rows-2 w-full">
          <div className="grid grid-cols-8 w-full h-9 my-1">
            {OperatorClasses.map((operatorClass, index) => {
              return (
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <div
                    className={`flex items-center justify-center w-9 h-9
                      ${index === activeClass ? "bg-[#22BBFF] border-2" : "bg-black"}
                    `}
                    onClick={() => setActiveClass(index)}
                    key={index}
                  >
                    <Image
                      src={`/operator_classes/${operatorClass}.png`}
                      alt={operatorClass}
                      width={28}
                      height={28}
                      className={`object-contain
                        ${index === activeClass ? "invert grayscale" : ""}
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-6 h-9 my-1 gap-4">
              {Array.from({ length: 6 }).map((_, index) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center"
                    onClick={() => setActiveRarity(index)}
                    key={index}
                  >
                    <FaStar
                      className={`w-8 h-8
                      ${index <= activeRarity ? "text-yellow-400" : "text-gray-400"}
                    `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
