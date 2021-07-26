/*
 * @Descripttion: Layout
 * @version: 
 * @Author: wonder.d.wang
 * @Date: 2021-04-26 16:03:14
 * @LastEditors: wonder.d.wang
 * @LastEditTime: 2021-07-23 16:08:27
 */
import {Component} from "react";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import {Home, Store, Markunread, Face, AddAPhoto, Search} from '@material-ui/icons'
import '../assets/style/layout.scss'
import { withRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import routes from '../constants/routes'
import {Animated} from 'react-animated-css'
// 设置主题颜色
const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#fff',
                boxShadow: 'none',
                color: '#000'
            }
        }
    },
    palette: {
        primary: {
            // light: 这将从 palette.primary.main 中进行计算，
            main: '#fe2741',
            // dark: 这将从 palette.primary.main 中进行计算，
            // contrastText: 这将计算与 palette.primary.main 的对比度
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: 这将从 palette.secondary.main 中进行计算，
            contrastText: '#ffcc00',
        },
        // 使用 `getContrastText()` 来最大化
        // 背景和文本的对比度
        contrastThreshold: 3,
        // 使用下面的函数用于将颜色的亮度在其调色板中
        // 移动大约两个指数。
        // 例如，从红色 500（Red 500）切换到 红色 300（Red 300）或 红色 700（Red 700）。
        tonalOffset: 0.2,
    },
});
class Layout extends Component<any, any> {
    constructor(props:any) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: 'home',
            title: '首页',
            isFirstLevel: true
        }
    }
    callBackValue() {
        let locationData = this.props.history.location
        if (locationData) {
            // 设置标题
            // let currentLocation = routes.filter(item => item.path === locationData.pathname) || []
            // if (currentLocation.length > 0) {
            //     this.setState({
            //         title: currentLocation[0].meta.title
            //     })
            // }
            switch(locationData.pathname) {
                case '/':
                case '/Home':
                    this.setState({
                        isFirstLevel: true
                    })
                    return 'recents'
                case '/Store':
                    this.setState({
                        isFirstLevel: true
                    })
                    return 'favorites'
                case '/Msg':
                    this.setState({
                        isFirstLevel: true
                    })
                    return 'nearby'
                case '/Mine':
                    this.setState({
                        isFirstLevel: true
                    })
                    return 'folder'
                default:
                    this.setState({
                        isFirstLevel: false
                    })
                    return ''
            }
        }
    }
    handleChange(event: any, newValue: any) {
        if (newValue === 'recents') {
            this.props.history.push("/Home")
        } else if (newValue === 'favorites') {
            this.props.history.push("/Store")
        } else if (newValue === 'nearby') {
            this.props.history.push("/Msg")
        } else if (newValue === 'folder') {
            this.props.history.push("/Mine")
        }
        this.setState({
            value: newValue
        })
    }
    componentDidMount() {
        this.setState({
            value: this.callBackValue()
        })
    }
    public render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="red-app-demo-container">
                    {this.state.isFirstLevel ?
                        <div className="red-app-demo-header">
                            <AddAPhoto className="header-left-icon" color="primary"></AddAPhoto>
                            <span className="header-middle-text">标题</span>
                            <Search className="header-right-icon"></Search>
                        </div>
                        :
                        <div>{this.props.header}</div>
                    }
                    <div className="react-app-demo-content">
                        <Animated 
                            animationIn="fadeIn" 
                            animationOut="fadeOut" 
                            animationInDuration={1000} 
                            animationOutDuration={1000} 
                            isVisible={true}>
                            {this.props.children}
                        </Animated>
                    </div>
                    <BottomNavigation className="react-app-demo-bottom-navigation" showLabels value={this.state.value} onChange={this.handleChange}>
                        <BottomNavigationAction label="首页" value="recents" icon={<Home />} />
                        <BottomNavigationAction label="商城" value="favorites" icon={<Store />} />
                        <BottomNavigationAction label="消息" value="nearby" icon={<Markunread />} />
                        <BottomNavigationAction label="我的" value="folder" icon={<Face />} />
                    </BottomNavigation>
                </div>
            </ThemeProvider>
        )
    }
}

export default withRouter(Layout);