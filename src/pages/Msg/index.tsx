/*
 * @Descripttion: 
 * @version: 
 * @Author: wonder.d.wang
 * @Date: 2021-04-30 10:40:27
 * @LastEditors: wonder.d.wang
 */
import React from 'react'
import Layout from '../../components/Layout'
interface IProps {}
interface IState {}

const Header = () => (
    <div className="Header">
        header
    </div>
);
class Msg extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout header={<Header />}>
                <div>Msg</div>
            </Layout>
        )
    }
}
export default Msg;