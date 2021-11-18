export type ContextState = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}