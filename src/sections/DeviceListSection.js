import React, {useEffect} from 'react'
import { useDeviceContext } from '../contexts/DeviceContext'
import DeviceComponent from '../components/DeviceComponent'

const DeviceListSection = () => {
    const {devices, getDevicesAsync} = useDeviceContext()

    useEffect(() => {
        getDevicesAsync()
    }, [])
    

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                { devices.map(device => (<DeviceComponent key={device.DeviceId} item={device} />)) }
            </div>
        </div>
    )
}

export default DeviceListSection