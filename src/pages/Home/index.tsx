/*
 * @Descripttion: 
 * @version: 
 * @Author: wonder.d.wang
 * @Date: 2021-04-30 10:39:25
 * @LastEditors: wonder.d.wang
 */
import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/style/index.scss'
class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            leftData: [],
            rightData: [],
        }
    }
    componentWillMount() {
        let data = [
            {
                src: require('../../assets/images/webp.png').default,
                title: '标题111🍑',
                user: '桃子姐'
            },
            {
                src: require('../../assets/images/webp (1).png').default,
                title: '标题222',
                user: '桃子姐'
            },{
                src: require('../../assets/images/webp (2).png').default,
                title: '标题333',
                user: '桃子姐'
            },{
                src: require('../../assets/images/webp (3).png').default,
                title: '标题444',
                user: '桃子姐'
            },{
                src: require('../../assets/images/webp (4).png').default,
                title: '标题555',
                user: '桃子姐'
            },{
                src: require('../../assets/images/webp (5).png').default,
                title: '标题666',
                user: '桃子姐'
            },{
                src: require('../../assets/images/webp (6).png').default,
                title: '标题333',
                user: '桃子姐'
            },{
                src: require('../../assets/images/webp (7).png').default,
                title: '标题444',
                user: '桃子姐'
            },{
                src: require('../../assets/images/webp (8).png').default,
                title: '标题555',
                user: '桃子姐'
            },{
                src: require('../../assets/images/webp (9).png').default,
                title: '标题666',
                user: '桃子姐'
            }
        ]
        this.getHW(data)
    }
    isAssetTypeAnVideo(type: string) {
        return [
        'mp4'].
        indexOf(type.toLowerCase()) !== -1;
    }
    getHW(data:any){
        let heightDate = [0,0];//接收累计高度的容器数组
        let rightData:any[] = [] //渲染右侧盒子的数组
        let leftData:any[] = []//渲染左侧盒子的数组
        data.forEach((item:any) => {
            var img = new Image();
            img.src = item.src
            let height = img.height; // 拿到高度
            let minNum = Math.min.apply(null,heightDate)// 从heighetData筛选最小项
            let minIndex = heightDate.indexOf(minNum);// 获取 最小项的小标 准备开始进行累加
            heightDate[minIndex] = heightDate[minIndex] + height;//从 heightData 中找到最小的项后进行累加， 
            if(minIndex === 0){//[0]加到left [1]加到 right
                leftData.push(item)
            }else{
                rightData.push(item)
            }
        })
        this.setState({ leftData,rightData  });//重新set state
    }
    linkDetailPage(data:any) {
        this.props.history.push("/Detail")
    }
    render() {
        return (
            <Layout>
                <div className="home-container">
                    <div className="clearfix">
                        <div className="left-column">
                            {
                                this.state.leftData && this.state.leftData.map((item:any,index:any)=>{
                                    return <div className="list-item" key={index} onClick={this.linkDetailPage.bind(this, item)}>
                                                <img src={item.src} alt={index}/>
                                                <div className="list-item-content">
                                                    <p className="content__title">{item.title}</p>
                                                    <p className="content__info">
                                                        <span>
                                                            <i className="iconfont icon-woman"></i>
                                                            {item.user}
                                                        </span>
                                                        <span>
                                                            <i className="iconfont icon-collect"></i>
                                                            32
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                        <div className="right-column">
                            {
                                this.state.rightData && this.state.rightData.map((item:any,index:any)=>{
                                    return <div className="list-item" key={index}>
                                                <img src={item.src} alt={index}/>
                                                <div className="list-item-content">
                                                    <p className="content__title">{item.title}</p>
                                                    <p className="content__info">
                                                        <span>
                                                            <i className="iconfont icon-man"></i>
                                                            {item.user}
                                                        </span>
                                                        <span>
                                                            <i className="iconfont icon-collect"></i>
                                                            32
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
export default Home;