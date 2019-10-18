import { Paper, Tab, Tabs } from "@material-ui/core"

import { useParams, useHistory } from "react-router"
import React from "react"
import styled from "styled-components"

export default () => {
  const { section } = useParams()
  const history = useHistory()
  return (
    <Wrap>
      <Paper elevation={0} square={true}>
        <Tabs
          value={section ? `/${section}` : "/plan"}
          onChange={(_: any, newValue: string) => history.push(newValue)}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab value="/plan" label="Plan" />
          <Tab value="/shop" label="Shop" />
          <Tab value="/prep" label="Prep" />
          <Tab value="/cook" label="Cook" />
        </Tabs>
      </Paper>
    </Wrap>
  )
}

const Wrap = styled.div`
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`
