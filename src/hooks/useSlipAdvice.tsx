import { useCallback, useEffect, useState } from "react";
import { AdviceReturn, Slip, SlipError } from "../types/advice.types";

export const useAdvice = (url: string): AdviceReturn => {
  const [slip, setSlip] = useState<Slip | null>(null)
  const [error, setError] = useState<SlipError | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getNewAdvice()
  }, [])


  const getNewAdvice = useCallback(
    async () => {
      if (!loading) setLoading(true)
      if (slip) setSlip(null)
      if (error) setError(null)
      await fetch(url)
      .then(data => data.json())
      .then(slipData => {
          if (slipData.message) return setError(slipData.message)
          return setSlip(slipData.slip)
        })
        .catch(error => {
          if (error instanceof Error) setError({ type: error.name, text: error.message })
        })
        .finally(() => setLoading(false))
    },
    [url],
  )

  return {
    slip,
    loading,
    error,
    getNewAdvice,
  }
}