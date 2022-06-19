export type Slip = {
  id: number;
  advice: string;
}

export type SlipError = {
  type: string;
  text: string;
}

export type AdviceReturn = {
  slip: Slip | null;
  loading: boolean;
  error: SlipError | null;
  getNewAdvice: VoidFunction;
}