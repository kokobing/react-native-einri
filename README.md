# react-native-einri

一个自用的UI组件库，正在完善。  


 安装
===========================
 1、需要先安装 react-native-vector-icons 图标组件库  
 
     npm install react-native-vector-icons --save  
     react-native link  
     
 2、安装react-native-einri  
 
     npm install --save react-native-einri  
     
 使用
===========================

1、NavigationBar with Basebar

       import Ionicons from 'react-native-vector-icons/Ionicons';  
       import { Basebar} from './react-native-einri/index';
  
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
 
        import Ionicons from 'react-native-vector-icons/Ionicons';
        import { BarImage } from './react-native-einri/index';  
       
        <BarImage  
          title='积跬步行千里'  
          height={160}  
          color='#fff'  
          fontsize={22}  
          imageurl='http://img.hb.aicdn.com/3a3ce5f235183ee74486057ae6dbdaf4916df57294ade-lQgCPE_fw658'  
        />  
        
        
        
        
        
       
       
