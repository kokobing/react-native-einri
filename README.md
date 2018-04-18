# react-native-einri

一个自用的REACT-NATIVE UI组件库，正在完善......   ...


 安装
===========================
 1、需要先安装 react-native-vector-icons  图标组件库   
 
     npm install react-native-vector-icons --save  
     react-native link  
     
 2、安装react-native-einri  
 
     npm install --save react-native-einri  
     
 使用
===========================

1、NavigationBar with Basebar  

![](https://github.com/Kokobing/react-native-einri/blob/master/temp/1.jpg)    

       import Ionicons from 'react-native-vector-icons/Ionicons';  
       import { Basebar} from 'react-native-einri';
  
        <Basebar  
          title='积跬步行千里'  
          height={100}  
          backgroundcolor='#1fae66'  
          color='#fff'  
          fontsize={22}  
          lefticon={<Ionicons name={'ios-arrow-back'} size={26} style={{ color: '#fff' }} />}  
          righticon={<Ionicons name={'ios-apps'} size={26} style={{ color: '#fff' }} />}  
        />  
        
        
        
2、NavigationBar with BarImage  
 
![](https://github.com/Kokobing/react-native-einri/blob/master/temp/2.jpg)  
 
        import { BarImage } from 'react-native-einri';  
       
        <BarImage  
          title='积跬步行千里'  
          height={160}  
          color='#fff'  
          fontsize={22}  
          imageurl='https://picjumbo.com/wp-content/uploads/picjumbo-evening-chill-premium-collection.jpg'  
        />  
        
        
        
        
        
       
       
