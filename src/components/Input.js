import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../styles/Styles";
import { AppColors } from "../styles/AppColors";
import SelectDropdown from "react-native-select-dropdown";
import { BlackArrowDown, ClosedEye, OpenedEye } from "../assets/svgs/AuthSvgs";
import DatePicker from "react-native-date-picker";
import moment from "moment";


export default function Input({ labelText, inputType, value, setValue, minLengthPass, error, data, placeholder, loading, dropdownRef }) {

    const [open, setOpen] = useState(false)
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [date, setDate] = useState(subtractYears(new Date(), 16))
    const [isOpenEye, setIsOpenEye] = useState(false)

    function formatPhone(value) {
        let x = value
            .replace(/\D/g, '')
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        let myPhone = !x[2]
            ? '+7 ' + (x[1] != '7' ? x[1] : '')
            : !x[3]
                ? '+7 (' + x[2]
                : '+7 (' +
                x[2] +
                ') ' +
                (x[3] ? x[3] : '') +
                (x[4] ? ' - ' + x[4] : '') +
                (x[5] ? ' - ' + x[5] : '');
        setValue(myPhone);
    }

    function subtractYears(date, years) {
        date.setFullYear(date.getFullYear() - years);
        return date;
    }

    return <View style={styles.container}>
        {labelText && <View style={Styles.flexRowJustifyBetween}>
            <Text style={Styles.darkMedium15}>{labelText}</Text>
            {minLengthPass && <Text style={Styles.blueSemiBold12}>Минимум 8 символов</Text>}
        </View>}
        {inputType == 'dropdown' ?
            <SelectDropdown
                data={data}
                ref={dropdownRef}
                buttonTextAfterSelection={selectedItem => selectedItem.value}
                rowTextForSelection={item => item.value}
                onBlur={() => setOpen(false)}
                onFocus={() => setOpen(true)}
                onSelect={(el, i) => setValue(el.id)}
                disabled={loading}
                defaultButtonText={data[value]?.value ?? placeholder}
                buttonStyle={[styles.inputContainer, { paddingHorizontal: 5, width: '100%', marginBottom: 10 }, error && { borderColor: AppColors.RED_COLOR, borderWidth: 1 }, open && { borderRadius: 0 }]}
                dropdownStyle={{ marginTop: -26, backgroundColor: AppColors.FIRST_SNOW_COLOR, }}
                buttonTextStyle={[Styles.darkRegular15, { textAlign: 'left' }]}
                rowTextStyle={[Styles.darkRegular15, { textAlign: 'left' }]}
                renderDropdownIcon={BlackArrowDown}
            />
            : inputType == 'date' ?
                <TouchableOpacity
                    style={[styles.inputContainer, error && { borderColor: AppColors.RED_COLOR, borderWidth: 1 }]} onPress={() => setOpenDatePicker(true)}>
                    <Text style={styles.input}>{value}</Text>
                    <DatePicker
                        modal
                        mode="date"
                        cancelText="отменить"
                        confirmText="подтвердить"
                        title={'Выберите дату'}
                        open={openDatePicker}
                        date={date}
                        maximumDate={subtractYears(new Date(), 16)}
                        onConfirm={date => {
                            setOpenDatePicker(false)
                            setValue(moment(date).format('YYYY-MM-DD'))
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpenDatePicker(false)
                        }}
                    />
                </TouchableOpacity>
                : <View style={[Styles.flexRow, styles.inputContainer, !labelText && { marginTop: 0 }, error && { borderWidth: 1, borderColor: AppColors.RED_COLOR }]}>
                    <TextInput
                        style={[styles.input, inputType == 'pass' && { width: '88%' }]}
                        value={value}
                        onChangeText={inputType == 'phone' ? formatPhone : setValue}
                        maxLength={inputType == 'code' ? 4 : inputType == 'phone' ? 22 : 50}
                        secureTextEntry={inputType === 'pass' && !isOpenEye ? true : false}
                        keyboardType={inputType == 'phone' || inputType == 'code' || inputType == 'age' || inputType == 'num' ? 'numeric' : 'ascii-capable'}
                        placeholder={placeholder}
                        placeholderTextColor={AppColors.DARK_CHARCOAL_COLOR}
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
        marginBottom: 15,
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