import { View, Text } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Main = () => {
    const { t } = useTranslation();
    const name = useSelector(state => state.profile.firstName);
    return (
        <View className="mt-28">
            <Text className="text-txt"> {t('hello')} {name}</Text>
        </View>
    )
}

export default Main