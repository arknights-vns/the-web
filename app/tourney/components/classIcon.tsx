import Image from "next/image";

function ClassIcon({
  operatorClass,
  active,
  onClick,
}: {
  operatorClass: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`flex items-center justify-center w-9 h-9
        ${active ? "bg-[#22BBFF] border-2" : "bg-black"}
      `}
      onClick={onClick}
    >
      <Image
        src={`/operator_classes/${operatorClass}.png`}
        alt={operatorClass}
        width={28}
        height={28}
        className={`object-contain
          ${active ? "invert grayscale" : ""}
        `}
      />
    </div>
  );
}

export default ClassIcon;
