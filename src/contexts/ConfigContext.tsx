import { parseCookies, setCookie } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import { ButtonWhatsapp } from "../components/ButtonWhatsapp";
import { api } from "../services/api";
import { IConfig, IMenu } from "../types/interfaces";

interface ConfigContextProps {
    config: IConfig;
    menus: IMenu[];
}

const ConfigContext = createContext({} as ConfigContextProps);

const ConfigProvider = ({ children }) => {
    const [menus, setMenus] = useState<IMenu[]>([]);
    const [config, setConfig] = useState<IConfig>(null);

    useEffect(() => {
        findMenus();
        findConfig();
    }, []);

    const setCookieData = (name: string, data: string) => {
        setCookie(undefined, name, data, { maxAge: 60 * 60 * 1, path: '/', })
    }

    const findMenus = async () => {
        const { 'am.menus': menusCache } = parseCookies();
        if (!menusCache) {
            await api.get(`real-estate/${process.env.NEXT_PUBLIC_REAL_ESTATE_ID}/menus`).then(({ data }) => {
                { data.results && setMenus(data.results) }
                { data.results && setCookieData('am.menus', JSON.stringify(data.results)) }
            });
        } else {
            setMenus(JSON.parse(menusCache));
        }
    }

    const findConfig = async () => {
        const { 'am.config': configCache } = parseCookies();
        if (!configCache) {
            await api.get(`real-estate/${process.env.NEXT_PUBLIC_REAL_ESTATE_ID}/config`).then(({ data }) => {
                { data.config && setConfig(data.config) }
                { data.config && setCookieData('am.config', JSON.stringify(data.config)) }
            });
        } else {
            setConfig(JSON.parse(configCache));
        }
    }

    return (
        <ConfigContext.Provider value={{
            config,
            menus
        }}>
            {config && config.whatsapp && <ButtonWhatsapp />}
            {children}
        </ConfigContext.Provider>
    )
}

const useConfig = () => useContext(ConfigContext);

export {useConfig, ConfigProvider};