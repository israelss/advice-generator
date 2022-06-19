import { useEffect } from "react";
import { useAdvice } from "../hooks/useSlipAdvice"
import { NewAdviceButton } from "./NewAdviceButton"
import { Slip } from "./Slip";
import { LoadingAdvice } from "./LoadingAdvice";
import { Divider } from "./Divider";
import { SlipError } from "./SlipError";

const ADVICE_SLIP_API_URL = 'https://api.adviceslip.com/advice'

export const AdviceCard = () => {
  const {slip, loading, error, getNewAdvice} = useAdvice(ADVICE_SLIP_API_URL);

  return (
    <div className="
      bg-darkGrayishBlue
      grid
      justify-items-center
      text-center
      rounded-lg
      m-4
    ">
      {
        loading
        ? <LoadingAdvice />
        : (error && <SlipError error={ error } />) || (slip && <Slip slip={ slip } />)
      }
      <Divider />
      <NewAdviceButton disabled={ loading} onClick={ getNewAdvice } />
    </div>
  )
}
