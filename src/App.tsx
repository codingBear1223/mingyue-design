import React, { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import BottomFloatCard from "./components/BottomFloatCard";
import Transition from "./components/Transition/transition";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="danger" size="10x" />
        <Button
          className="custom"
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
          onClick={() => {
            setShow(!show);
          }}
        >
          click
        </Button>
        <Menu
          defaultIndex="0"
          onSelect={(index) => alert(index)}
          //mode="vertical"
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <MenuItem>cool link 3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
        </Menu>
        {/* <Alert
          type="default"
          //title="提示信息"
          description="这是一段自定义的提示内容，可以根据实际需求进行修改。"
          show={true}
        /> */}
        {/* <Alert
          type="warning"
          title="提示信息"
          description="这是一段自定义的提示内容，可以根据实际需求进行修改。"
          show={true}
        /> */}
      </header>

      <Transition in={show} timeout={800} animation="zoom-in-bottom" wrapper>
        <h2>hello hhhhhhhhhh</h2>
        <h2>hello eeeeeeeeee</h2>
        <h2>hello cccccccccc</h2>
        <h2>hello dddddddddd</h2>
      </Transition>

      <BottomFloatCard type="primary">
        <div style={{ padding: "20px", height: "90px" }}>
          <Icon icon="arrow-down" theme="primary" size="5x" />
        </div>
      </BottomFloatCard>
    </div>
  );
}

export default App;
