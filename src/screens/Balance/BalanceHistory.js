import {ScrollView, View, Text} from 'react-native';
import DateHorizontalBlock from '../../components/DateHorizontalBlock';
import {HistoryBlock} from '../../components/HistoryBlock';
import {Styles} from '../../styles/Styles';
import BalanceBlock from './BalanceBlock';

export const BalanceHistory = () => {
  const data = ['Все', 'Июнь 2023', 'Июнь 2023', 'Июнь 2023'];
  const data1 = [
    {
      date: '18 мая',
      item: [
        {
          img: require('../../assets/pngs/sell.png'),
          title: 'Покупки в приложении',
          type: 'Авторитет',
          price: '-₽9.99',
        },
      ],
    },
    {
        date: '9 марта',
        item: [
          {
            img: require('../../assets/pngs/gift.png'),
            title: 'Покупки в приложении',
            type: 'Подарок',
            price: '-₽9.99',
          },
          {
            img: require('../../assets/pngs/plus.png'),
            title: 'Операция',
            type: 'Пополнение',
            price: '+ ₽5,384.99',
          },
        ],
    },
    {
        date: '23 января',
        item: [
          {
            img: require('../../assets/pngs/f.png'),
            title: 'Покупки в приложении',
            type: 'Поднятие анкеты',
            price: '-₽9.99',
          },
          {
            img: require('../../assets/pngs/plus.png'),
            title: 'Операция',
            type: 'Пополнение',
            price: '+ ₽12.500',
          },
        ],
    },
  ];
  return (
    <BalanceBlock goBack title="История транзакций" add>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((elm, i) => (
          <DateHorizontalBlock text={elm} key={i} />
        ))}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} style = {{marginBottom:5}}>
        {data1.map((elm, index) => (
          <View style={{marginVertical: 10}}>
            <Text key={index} style={Styles.darkMedium15}>
              {elm.date}
            </Text>
            {elm.item.map((e, i) => (
              <HistoryBlock
                key={i}
                img={e.img}
                title={e.title}
                type={e.type}
                price={e.price}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </BalanceBlock>
  );
};
