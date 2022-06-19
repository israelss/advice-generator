import { SlipError as SlipErrorType } from "../types/advice.types"

export const SlipError = ({ error }: {error: SlipErrorType}) => {
  return (
    <div className="p-4 max-w-screen-mobile">
      <div className={`
        ${['notice', 'warning'].includes(error.type) ? 'text-neonYellow' :  'text-neonRed'}
        text-sm
        tracking-[0.4em]
        mt-6
        mb-4
      `}>
        {error.type.toUpperCase()}
      </div>
      <h1 className="text-lightCyan text-quote">
        {error.text}
      </h1>
    </div>
  );
}
