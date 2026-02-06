import SelectButton from "../../components/SelectButton";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CharacterLayout from "../../components/CharacterLayout";
export default function InitialMenu() {
  return (
    <section className="h-full w-full bg-gray-600 flex items-center justify-center gap-30">
      <SelectButton Icon={ArrowLeft}></SelectButton>
      <CharacterLayout></CharacterLayout>
      <SelectButton Icon={ArrowRight}></SelectButton>
    </section>
  );
}
