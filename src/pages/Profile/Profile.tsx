import {FC, useEffect} from "react";

import {Flex} from "../../shared/ui/_layout/Flex/Flex";
import {useAppDispatch, useAppSelector} from "../../shared/hooks/store.hooks";
import {getProfileThunk} from "../../store/profile/getProfileThunk.ts";
import {selectProfile} from "../../store/profile/profileSelectors.ts";
import {Button} from "../../shared/ui/Button/Button.tsx";
import {Text} from "../../shared/ui/Text/Text.tsx";

export const ProfilePage: FC = () => {
    const {loading, success, profileDTO} = useAppSelector(selectProfile);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProfileThunk());
    }, []);

    if (loading) {
        return (<div>Loading ...</div>);
    }
    if (!success) {
        return (<div>Error</div>);
    }
    const profileItem = profileDTO?.result;
    const columnWidth = {
        nameWidth : "20%",
        valueWidth: "70%",
    }
    return (
        <Flex justify="center">
            <Flex row>
                <Button variant="secondary" active={true} textSize="small">
                    Профиль
                </Button>
                <Button variant="secondary" textSize="small">
                    Анкета
                </Button>
                <Button variant="secondary" textSize="small">
                    Хакатоны
                </Button>
                <Button variant="secondary" textSize="small">
                    Команды
                </Button>
            </Flex>
            <Text tag={"h1"}>Основная информация</Text>
            <Flex row p={4}>
                <Flex w={ columnWidth.nameWidth }>Изображение профиля</Flex>
                <Flex w={ columnWidth.valueWidth }>Изображение поможет людям узнать вас и сообщит, когда вы вошли в свою учетную
                    запись.</Flex>
                <Flex justify={"center"}>Icon</Flex>
            </Flex>
            <Flex row p={4}>
                <Flex w={columnWidth.nameWidth} justify={"start"}>Имя</Flex>
                <Flex w={columnWidth.valueWidth} align={"start"}>{profileItem?.first_name}</Flex>
            </Flex>
            <Flex row p={4}>
                <Flex w={columnWidth.nameWidth} justify={"start"}>Фамилия</Flex>
                <Flex w={columnWidth.valueWidth} align={"start"}>{profileItem?.last_name}</Flex>
            </Flex>
            <Flex row p={4}>
                <Flex w={columnWidth.nameWidth} justify={"start"}>Никнейм</Flex>
                <Flex w={columnWidth.valueWidth} align={"start"}>Нет в ответе</Flex>
            </Flex>
            <Text tag={"h1"}>Контактная информация</Text>
            <Flex row p={4}>
                <Flex w={columnWidth.nameWidth} justify={"start"}>Электронная почта</Flex>
                <Flex w={columnWidth.valueWidth} align={"start"}>{profileItem?.email}</Flex>
            </Flex>

            {/* <hr/>
            Ответ API
            <pre>{JSON.stringify(profileDTO, null, 2)}</pre> */}
        </Flex>
    );
};