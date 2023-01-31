import React from 'react'
import { Dimensions, FlatList, Image, LayoutAnimation, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackGroundImage from './BackGround'
import Footer from './Footer';
import Header from './Header';
import ModifiedList from './ModifiedList';
import TopStatus from './TopStatusBar';
const DATA = [
  {
    Itemid: '159755373',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '1597553732',
    title: 'Anatomic Baby Batch Chair-Gr....',
    total:'790'
  },
  {
    Itemid: '159755371',
    title: 'Shirt',
    total:'790'
  },
  {
    Itemid: '159755374',
    title: 'Bag',
    total:'790'
  },
  {
    Itemid: '159755375',
    title: 'Jeans',
    total:'790'
  },
  {
    Itemid: '159755376',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '159755377',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '159755378',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '1597553781',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '159755399',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '159755310',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '1597553101',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '1597553102',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  {
    Itemid: '1597553103',
    title: 'Henry Wooden Crib - White',
    total:'790'
  },
  
];
console.log(DATA.length);
const Item = ({ Itemid,title,total}) => (
  <View style={styles.item}>
    <View style={styles.itemlist}>
    <Text >{title}</Text>
    <Text >total  {total}</Text>
    </View>
    <View style={styles.itemDetails}>
    <Text style={styles.itemshow}>{Itemid}</Text>
    <Text style={styles.itemshow} >SAR  {total}</Text>
    <Text  style={styles.itemshow}>{"Qty"}</Text>
    </View>
  </View>
);

const ItemList = () => {
  const [data, setData] = React.useState(DATA);
  const [toggled, setToggled] = React.useState(false);
  const renderItem = ({ item},indexing) => (

    <><TouchableOpacity onPress={() => setToggled(indexing)}><Item
      Itemid={item.Itemid}
      title={item.title}
      total={item.total} />
    </TouchableOpacity>
    {console.log("indexing",indexing)}
    {/* {toggled?<ModifiedList Itemid={item.Itemid} />:""} */}
    </>

  );

  return (
<View style={styles.container} >
<TopStatus/>
        <Header PageName={'SignIn'}/>
        <FlatList
        data={DATA}
        renderItem={(item)=>{
          let indexing=item.index
          return(
            
            <View>
              {renderItem(item,indexing)}
              {item.index ===toggled ?<ModifiedList Itemid={item} Index={indexing} />:""}
            </View>
          )
        }}
        keyExtractor={(item,index)=> item.Itemid}
      />

      <Footer Quantity={DATA.length}/>
    </View>

  )
}
const styles =StyleSheet.create({
  container: {
    flex:1,   
  },
  item: {
    borderBottomColor: '#43BD50',
    borderBottomWidth: 2,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title:{
    fontSize: 10,
  },
  itemlist: {
    display:"flex",
    flexDirection:'row',
    justifyContent:"space-between",

  },
  itemDetails:{
    display:"flex",
    flexDirection:'row',
    justifyContent:"space-between",
  },
  itemshow:{
    marginVertical:3
  }
})

export default ItemList
