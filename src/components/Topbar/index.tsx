import Icon from "@mdi/react";
import { mdiMenu } from '@mdi/js'


export function Topbar() {
    return (
        <header className="navbar">
            <div id="navbar_f1" className="d-flex">
                <span className="button-menu-mobile open-left">
                    <Icon
                        path={mdiMenu}
                        title="User Profile"
                        size={1}
                    />
                </span>
                <div className="input-group">
                    <input type="text" className="form-control dropdown-toggle" placeholder="buscar por..."
                        id="top-search" />
                    <span className="mdi mdi-magnify search-icon"></span>
                    <button className="input-group-text btn btn-primary" type="submit">Buscar</button>
                </div>
            </div>
        </header>
    )
}