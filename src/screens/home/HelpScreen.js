import React from "react";
import { View } from "react-native";
import { Styles } from "../../styles/Styles";
import HorizontalBlock from "../../components/HorizontalBlock";
import { PersonCalls, QuestionAnswer, TermsOfUseIcon } from "../../assets/svgs/HomeSvgs";


export default function HelpScreen(){
    return <View style={[Styles.containerTopPadding, {paddingHorizontal: 20}]}>
        <HorizontalBlock text={'Вопросы и ответы'} backImagePath={require('../../assets/pngs/BlockBack8.png')} Icon={QuestionAnswer}/>
        <HorizontalBlock text={'Условия использования'} backImagePath={require('../../assets/pngs/BlockBack9.png')} Icon={TermsOfUseIcon}/>
        <HorizontalBlock text={'Обратная связь'} backImagePath={require('../../assets/pngs/BlockBack10.png')} Icon={PersonCalls}/>
    </View>
}