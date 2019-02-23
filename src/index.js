import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';

import './assets/styles/css/material-dashboard-react.css';

const Index = () => {
  return   <Button variant="contained" color="primary">
  Hello World
</Button>
};

ReactDOM.render(<Index />, document.getElementById("index"));