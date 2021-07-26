import { render } from "@testing-library/react";

/*
 * @Descripttion:
 * @version:
 * @Author: wonder.d.wang
 * @Date: 2021-07-26 14:18:02
 * @LastEditors: wonder.d.wang
 */
const HeaderWithNavigation = () => {
  return (
    <div className="header-with-navigation-container">
      <i className="iconfont icon-arrow-left navigation-back"></i>
      <div className="navigation-info">
        <i className="iconfont icon-woman navigation-avator"></i>
        <span>
					<p className="navigation-info-name">桃子姐</p>
					<p className="navigation-info-location">IFS国金中心广场</p>
				</span>
      </div>
    </div>
  );
};
export default HeaderWithNavigation;
