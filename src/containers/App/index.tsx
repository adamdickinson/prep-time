import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core"
import React from "react"

import { PrepStepProvider } from '../../services/prepStep';
import { RecipeProvider } from "../../services/recipe"
import { ShoppingItemProvider } from '../../services/shoppingItem';
import Cook from "../Cook"
import Menu from "../Menu"
import Plan from "../Plan"
import Prep from "../Prep"
import Shop from "../Shop"
import Style from "../../components/Style"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF8A80"
    }
  },
  typography: {
    h4: {
      fontWeight: 300
    }
  }
})

export default () => (
  <RecipeProvider>
    <PrepStepProvider>
      <ShoppingItemProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <Style />
            <Route path="/:section?">
              <Menu />
            </Route>

            <Switch>
              <Route path="/shop" component={Shop} />
              <Route path="/prep" component={Prep} />
              <Route path="/cook" component={Cook} />
              <Route component={Plan} />
            </Switch>
          </ThemeProvider>
        </Router>
      </ShoppingItemProvider>
    </PrepStepProvider>
  </RecipeProvider>
)
