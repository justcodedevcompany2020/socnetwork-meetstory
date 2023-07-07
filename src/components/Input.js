import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";
import SelectDropdown from "react-native-select-dropdown";
import { BlackArrowDown, ClosedEye, OpenedEye } from "../assets/svgs/AuthSvgs";
import DatePicker from "react-native-date-picker";
import moment from "moment";


export default function Input({ labelText, inputType, value, setValue, minLengthPass, error, data,placeholder }) {

    const [open, setOpen] = useState(false)
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [date, setDate] = useState(new Date())
    const [isOpenEye, setIsOpenEye] = useState(false)

    return <View style={styles.container}>
        <View style={Styles.flexRowJustifyBetween}>
            <Text style={Styles.darkMedium15}>{labelText}</Text>
            {minLengthPass && <Text style={Styles.blueSemiBold12}>Минимум 8 символов</Text>}
        </View>
        {inputType == 'dropdown' ?
            <SelectDropdown
                data={data}
                onBlur={() => setOpen(false)}
                onFocus={() => setOpen(true)}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                    setValue(selectedItem)
                }}
                defaultValue={value}
                buttonStyle={[styles.inputContainer, { paddingHorizontal: 5, width: '100%' }, error && { borderColor: 'red' }, open && { borderRadius: 0 }]}
                dropdownStyle={{ marginTop: -26, backgroundColor: AppColors.FIRST_SNOW_COLOR }}
                buttonTextStyle={[Styles.darkRegular15, { textAlign: 'left' }]}
                defaultButtonText={' '}
                rowTextStyle={[Styles.darkRegular15, { textAlign: 'left' }]}
                renderDropdownIcon={BlackArrowDown}
            />
            : inputType == 'date' ?
                <TouchableOpacity
                    style={[
                        styles.container,
                        styles.inputContainer
                    ]} onPress={() => setOpenDatePicker(true)}>
                    <Text style={styles.input}>{value ? moment(date).format('D.M.YYYY') : 'Неограниченно'}</Text>
                    <DatePicker
                        modal
                        mode="date"
                        cancelText="отменить"
                        confirmText="подтвердить"
                        title={'Выберите дату'}
                        open={openDatePicker}
                        date={date}
                        minimumDate={new Date()}
                        onConfirm={date => {
                            setOpenDatePicker(false)
                            setValue(date)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpenDatePicker(false)
                        }}
                    />
                </TouchableOpacity>
                : <View style={[Styles.flexRow, { backgroundColor: 'red', }, styles.inputContainer]}>
                    <TextInput
                        style={[styles.input, inputType == 'pass' && { width: '88%' }]}
                        value={value}
                        onChangeText={setValue}
                        maxLength={inputType == 'code' ? 6 : 50}
                        secureTextEntry={inputType === 'pass' && !isOpenEye ? true : false}
                        keyboardType={inputType == 'phone' || inputType == 'code' ? 'phone-pad' : 'ascii-capable'}
                        placeholder ={placeholder}
                    />
                    {inputType === 'pass' && (isOpenEye ?
                        <TouchableOpacity onPress={() => setIsOpenEye(false)} style={styles.eyeContainer}>
                            <OpenedEye />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setIsOpenEye(true)} style={styles.eyeContainer}>
                            <ClosedEye />
                        </TouchableOpacity>)}
                </View>
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    inputContainer: {
        backgroundColor: AppColors.FIRST_SNOW_COLOR,
        marginTop: 10,
        height: 50,
        borderRadius: 6,
    },
    input: {
        width: '100%',
        paddingHorizontal: 15,
        height: 50,
        color: AppColors.DARK_CHARCOAL_COLOR,
        textAlignVertical: 'center'
    },
    eyeContainer: {
        height: 50,
        width: '12%',
        justifyContent: 'center',
        alignItems: 'center',
    }

})