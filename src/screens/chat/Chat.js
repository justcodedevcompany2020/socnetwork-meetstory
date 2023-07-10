import React, { useRef, useState } from "react";
import { Styles } from "../../styles/Styles";
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { ImageIcon, MicrophoneIcon, SeenIcon, SendIcon } from "../../assets/svgs/HomeSvgs";


export default function ChatScreen() {
    const [message, setMessage] = useState('')
    const scrollViewRef = useRef()
    const [chatInfo, setChatInfo] = useState([
        { author: 'me', message: 'Здравствуйте', time: '10:19', seen: true },
        { author: 'me', message: 'Подскажите, как я могу воспользоваться накопленными баллами?', time: '10:20', seen: true },
        { author: 'John Smith', message: 'Вы можете тратить накопленные баллы ', time: '10:20' },
    ])

    function onSendMessage() {
        if (!message) {
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
                        <View style={[{ marginBottom: 15, alignSelf: 'flex-end' }]} key={i}>
                            <View style={styles.myMessageContainer}>
                                <Text style={Styles.whiteMedium13}>{item.message}</Text>
                            </View>
                            <View style={[Styles.flexRow, { justifyContent: 'flex-end' }]}>
                                <Text style={[Styles.blackMedium12, { textAlign: 'right' }]}>Вы</Text>
                                <Text style={{ color: AppColors.DARK_CHARCOAL_COLOR, fontSize: 12 }}> {item.time}  </Text>
                                {item.seen && <SeenIcon />}
                            </View>
                        </View>
                        :
                        <View style={[{ marginBottom: 15, alignSelf: 'flex-start' }]} key={i}>
                            <View style={styles.messageContainer}>
                                <Text style={Styles.darkMedium13}>{item.message}</Text>
                            </View>
                            <View style={[Styles.flexRow, { justifyContent: 'flex-end' }]}>
                                <Text style={[{ textAlign: 'right', }, Styles.blackMedium12]}>{item.author}</Text>
                                <Text style={{ color: AppColors.DARK_CHARCOAL_COLOR, fontSize: 12 }}> {item.time}</Text>
                            </View>
                        </View>
                })}
            </View>
        </ScrollView>
        <View style={[Styles.flexRowJustifyBetween, { padding: 20 }]}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    style={[styles.input, message && {}]}
                    placeholder={'Введите сообщение...'}
                    placeholderTextColor={AppColors.DARK_CHARCOAL_COLOR}
                    multiline
                />
                {<View style={[Styles.flexRow, { position: 'absolute', right: 0 }]}>
                    <TouchableOpacity>
                        <MicrophoneIcon />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageIcon />
                    </TouchableOpacity>
                </View>}
            </View>
            <TouchableOpacity onPress={onSendMessage}>
                <SendIcon />
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
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%'
    },
    input: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 50,
        color: AppColors.BLACK_COLOR,
        fontFamily: 'Raleway-Regular',
    }
})