import { Operator } from "@/models/operatorModel";

const getRarityColor = (rarity: number) => {
  switch (rarity) {
    case 1:
      return "#A0A0A0";
    case 2:
      return "#DCDC00";
    case 3:
      return "#00AAEE";
    case 4:
      return "#D6C5D6";
    case 5:
      return "#FFFFA9";
    case 6:
      return "#FFC800";
    default:
      console.error("Invalid rarity:", rarity);
  }
};

function OperatorIcon({ operator }: { operator: Operator }) {
  const rarityColor = getRarityColor(operator.rarity);
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div
        className={`w-14 h-15 flex items-center justify-center`}
        style={{
          background: `linear-gradient(
            to top,
            ${rarityColor} 0%,
            ${rarityColor}70 50%,
            ${rarityColor}00 100%
          )`,
          borderBottom: `4px solid ${rarityColor}`,
        }}
      >
        <img
          src={`/operators/char_${operator.id}.png`}
          alt={operator.name}
          className="object-contain"
        />
      </div>
      <div className="w-full h-full text-xs text-center break-words">
        {operator.name}
      </div>
    </div>
  );
}

export default OperatorIcon;
