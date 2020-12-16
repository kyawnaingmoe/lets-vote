import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from '../pages/home'

import Candidate from '../pages/candidate'
import CandidateDetail from '../pages/candidate/detail'

import Party from '../pages/party'
import PartyDetail from '../pages/party/detail'

import VoterList from '../pages/voter'
import VoterDetail from '../pages/voter/detail'

import Constituency from '../pages/constituency'
import ConstituencyDetail from '../pages/constituency/detail'

import About from '../pages/about'

import ContactUs from '../pages/contactus'

const Routes = () => {
    return <Switch>

        <Route path="/" exact><Home /></Route>

        <Route path="/candidate" exact><Candidate /></Route>
        <Route path='/candidate/:id' exact={true}><CandidateDetail /></Route>

        <Route path="/party" exact><Party /></Route>
        <Route path='/party/:id' exact={true}><PartyDetail /></Route>

        <Route path="/voter" exact><VoterList /></Route>
        <Route path='/voter/:id' exact={true}><VoterDetail /></Route>

        <Route path='/constituency' exact={true}><Constituency /></Route>
        <Route path='/constituency/:id' exact={true}><ConstituencyDetail /></Route>

        <Route path="/about" exact><About /></Route>

        <Route paty='/contactus' exact={true}><ContactUs /></Route>
    </Switch>
}

export default Routes;