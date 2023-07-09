import React, { useRef, useState } from "react";
import { Styles } from "../../styles/Styles";
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { SeenIcon } from "../../assets/svgs/HomeSvgs";


export default function ChatScreen(){
    const [message, setMessage] = useState('')
    const scrollViewRef = useRef()
    const [chatInfo, setChatInfo] = useState([
        { author: 'me', message: 'Здравствуйте', time: '10:19', seen: true },
        { author: 'me', message: 'Подскажите, как я могу воспользоваться накопленными баллами?', time: '10:20' },
        { author: 'John Smith', message: 'Вы можете тратить накопленные баллы ', time: '10:20' },
    ])

    function onSendMessage() {
        if(!message){
            return
        }
        let myChatInfo = chatInfo;
        let date = new Date()
        let minutes = date.getMinutes();
        let hour = date.getHours();

        myChatInfo.push({ author: 'me', message: message, time: `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}` })
        scrollViewRef.current.scrollToEnd({ animated: true })
        setMessage('')
    }


    return <View style={Styles.containerTopPadding}>
         <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            style={{ paddingHorizontal: 15 }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                {chatInfo.map((item, i) => {
                    return item.author === 'me' ?
                        <View style={[ { marginBottom: 20, alignSelf: 'flex-end' }]} key={i}>
                            <View style={styles.myMessageContainer}>
                                <Text style={Styles.whiteMedium13}>{item.message}</Text>
                            </View>
                            <Text style={[Styles.blackMedium12, ]}>Вы {item.time} {item.seen && <SeenIcon/>} </Text>
                        </View>
                        :
                        <View style={[ { marginBottom: 20, alignSelf: 'flex-start'}]} key={i}>
                            <View style={styles.messageContainer}>
                                <Text style={Styles.darkMedium13}>{item.message}</Text>
                            </View>
                            <Text style={[{textAlign: 'right', }, Styles.blackMedium12]}>{item.author} {item.time}</Text>
                        </View>
                })}
            </View>
        </ScrollView>
        <View style={styles.inputContainer}>
            <TextInput
                value={message}
                onChangeText={setMessage}
                style={styles.input}
                placeholder={'Сообщение'}
                // placeholderTextColor={AppColors.ALUMINIUM_COLOR}
                onBlur={() => {
                }}
            />
            <TouchableOpacity style={{ width: 32, height: 32, backgroundColor: AppColors.FIRST_SNOW_COLOR, borderRadius: 38, alignItems: 'center', justifyContent: 'center' }} onPress={onSendMessage}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    </View>
}
const styles = StyleSheet.create({
    myMessageContainer: {
        backgroundColor: AppColors.STEEL_BLUE_COLOR,
        padding: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        maxWidth: 320,
    },
    messageContainer: {
        backgroundColor: AppColors.FIRST_SNOW_COLOR,
        padding: 12,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        maxWidth: 350,
    },
    myMessage: {
        color: AppColors.WHITE_COLOR,
        fontFamily: 'Inter-Regular',
    },
    message: {
        color: AppColors.BLACK_COLOR,
        fontFamily: 'Inter-Regular',
    },
    inputContainer: {
        backgroundColor: AppColors.FIRST_SNOW_COLOR,
        borderRadius: 70,
        paddingRight: 5,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '87%',
        paddingHorizontal: 15,
        color: AppColors.BLACK_COLOR,
        fontFamily: 'Inter-Regular',
    }
})