import { FC } from "react";
import { Flex } from "../_layout/Flex/Flex";
import { Text } from "../Text/Text";

interface TrackFullProps {
  track: {
    title: string;
    description: string;
    lists: { title: string; items: string[] }[];
  };
}

export const TrackFull: FC<TrackFullProps> = ({ track }) => {
  return (
    <Flex gap={6}>
      <Flex gap={2}>
        <Text tag="h1">{track.title}</Text>
        <Text>{track.description}</Text>
      </Flex>

      <Flex gap={8}>
        {track.lists.map((list) => (
          <Flex key={list.title}>
            <Text tag="h2">{list.title}</Text>
            <Flex gap={0}>
              {list.items.map((item) => (
                <Text key={item}>
                  <li>{item}</li>
                </Text>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
