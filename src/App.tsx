import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from './modules/theme/context';

import { Calculator } from './pages/Calculator';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Switch>
                    <Route path="/" component={Calculator} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
