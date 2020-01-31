import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import * as styles from '../../themes/app.scss';
import { UsersView } from '../UsersView/UsersView';
import { Routes } from '../../enums/routes';
import { StartView } from '../startView/StartView';
import { DocumentsView } from '../documentsView/DocumentsView';
import { AppHeader } from '../appHeader/AppHeader';
import { SideMenu } from '../menuView/SideMenu';

/**
 * The application component that displays the application.
 */
export class App extends React.PureComponent {
    public render() {
        return (
            <Router>
                <div>
                    <AppHeader/>
                    <div className={styles.appContainer}>
                        <SideMenu/>
                        <div className={styles.menuContainer}>
                            <Route path={Routes.START} component={StartView} exact={true}/>
                            <Route path={Routes.USERS} component={UsersView} exact={true}/>
                            <Route path={Routes.DOCUMENTS} component={DocumentsView} exact={true}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
