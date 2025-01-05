import { GiBurningMeteor } from "react-icons/gi";
import { TAPE_WORDS } from "../constants";

const Tape = () => {
  return (
    <div className="py-16 lg:py-24">
        {/* Full width with rotation */}
        <div className="relative -rotate-3">
            <div className="w-screen bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex flex-none gap-4 py-3">
                        {TAPE_WORDS.map((word) => (
                            <div key={word} className="inline-flex gap-4 items-center">
                                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                                <GiBurningMeteor className="size-6 text-gray-900 -rotate-12" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Tape;
