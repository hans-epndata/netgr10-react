const { createContext, useContext, useState } = require("react");

const DeviceContext = createContext()

export const useDeviceContext = () => {
    return useContext(DeviceContext)
}

export const DeviceProvider = ({children}) => {
    const default_invoke = { deviceId: '', methodName: '', payload: '' }  
    const baseUrl = 'https://netgr10-fa.azurewebsites.net/api/devices'
    const [devices, setDevices] = useState([])
    const [invokeMethod, setInvokeMethod] = useState(default_invoke)

    const getDevicesAsync = async () => {
        const res = await fetch(baseUrl + '?code=iykL5iTsP7crnCdccVclgYVJ7FbzyEoDEV9iet57wwq1AzFuapShDg==')
        setDevices(await res.json())  
    }

    const invokeMethodAsync = async () => {
        const res = await fetch(baseUrl + '/invoke?code=fEGBHfz59F_3wiZysmGBfOj2GZXwYqQTX6js2znmChHPAzFuADVEnA==', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({deviceId: 'light', methodName: 'on'})
        })

        return await res.json();
    }

    return <DeviceContext.Provider value={{devices, invokeMethod, setInvokeMethod, getDevicesAsync, invokeMethodAsync}}>
        {children}
    </DeviceContext.Provider>
}