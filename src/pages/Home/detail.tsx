/*
 * @Descripttion: 
 * @version: 
 * @Author: wonder.d.wang
 * @Date: 2021-07-23 13:56:01
 * @LastEditors: wonder.d.wang
 */

import '../../assets/style/index.scss'
import {Animated} from 'react-animated-css'
import HeaderWithNavigation from '../../components/HeaderWithNavigation'
const Detail = () => {
    return (
        <Animated 
            animationIn="fadeIn" 
            animationOut="fadeOut" 
            animationInDuration={1000} 
            animationOutDuration={1000} 
            isVisible={true}>
            <div className="detail-container">
                <HeaderWithNavigation />
            </div>
        </Animated>
    )
}
export default Detail