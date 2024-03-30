import { BeatLoader  } from "react-spinners";

interface ILoadingProps {
  color: string;
}

export function Loading({ color }: ILoadingProps) {
  return <BeatLoader color={color} size={10} />;
}