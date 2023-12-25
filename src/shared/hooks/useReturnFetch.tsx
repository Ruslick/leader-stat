import { ReactNode } from "react";
import { ApiError } from "../types/general";

type ReturnFetchProps = {
  loading: boolean;
  error: ApiError | null;
  component: ReactNode;
};

export const useReturnFetch = ({ loading, error, component }: ReturnFetchProps) => {
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (component) {
    return component;
  }
};
