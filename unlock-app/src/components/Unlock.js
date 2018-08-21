import UnlockPropTypes from '../propTypes'
import React from 'react'
import { Route, Switch } from 'react-router'

import LockMaker from './creator/LockMaker'
import Lock from './consumer/Lock'
import Home from './Home'
import Network from './Network'
import { withConfig } from '../utils/withConfig'

import MainLayout from './layout/MainLayout'
import BlankLayout from './layout/BlankLayout'

const UnlockRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

export function Unlock({ config }) {

  if (!config.web3Available) {
    return (<div>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">A Web3 provider is required</h5>
          </div>
          <div className="modal-body">
            <p>This early version of Unlock requires you to use an injected Web3 provider such as <a href="https://metamask.io/">Metamask</a>. </p>
          </div>
        </div>
      </div>
    </div>)
  }
  return (
    <Switch>
      <UnlockRoute path="/network" layout={BlankLayout} component={Network} />
      <UnlockRoute path="/creator" layout={MainLayout} component={LockMaker} />
      <UnlockRoute path="/lock/:lockAddress" layout={MainLayout} component={Lock} />
      <UnlockRoute path="*" layout={BlankLayout} component={Home} />
    </Switch>
  )
}

Unlock.propTypes = {
  config: UnlockPropTypes.configuration,
}

export default withConfig(Unlock)
