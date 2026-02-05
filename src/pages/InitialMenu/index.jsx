import SelectButton from "../../components/SelectButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function InitialMenu() {
  return (
    <section className="h-full w-full bg-gray-600">
      <SelectButton Icon={ArrowLeft}></SelectButton>

      <SelectButton Icon={ArrowRight}></SelectButton>
    </section>
  );
}
