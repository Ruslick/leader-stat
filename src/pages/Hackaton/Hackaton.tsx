import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { useAppDispatch } from "../../shared/hooks/store.hooks";
import { getHackatonsThunk } from "../../store/hackatons/getHackatonsThunk";
import { Hackaton } from "../../components/Hackatons/Hackaton";
import { HackatonAside } from "../../components/Hackatons/HackatonAside";

export const HackatonPage: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    console.log("ss");
    dispatch(getHackatonsThunk({ id: params.id }));
  }, []);
  return (
    <Flex row justify="space-between">
      <Hackaton />
      <HackatonAside />
    </Flex>
  );
};
