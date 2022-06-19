import { Slip as SlipType } from "../types/advice.types"

export const Slip = ({ slip }: {slip: SlipType}) => {
  return (
    <div className="p-4 max-w-screen-mobile">
      <div className="
        text-neonGreen
        text-sm
        tracking-[0.4em]
        mt-6
        mb-4
      ">
        ADVICE #{slip.id}
      </div>
      <q className="text-lightCyan text-quote">
        {slip.advice}
      </q>
    </div>
  )
}
