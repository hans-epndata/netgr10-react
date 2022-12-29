import React from 'react'
import { useDeviceContext } from '../contexts/DeviceContext'


const DeviceComponent = ({item}) => {
  const {invokeMethod, invokeMethodAsync,  setInvokeMethod} = useDeviceContext()

  const sendInvokeMethod = async () => {
    setInvokeMethod({ deviceId: item.DeviceId, methodName: 'on', payload: '{}'})
    console.log(invokeMethod)
    
    invokeMethodAsync()
  }


  return (
    <div className="col">
      <div className="card h-100 text-center">
        <div className="card-body">
          <i className="m-3 fa-regular fa-microchip"></i>
          <h5 className="card-title">{item.DeviceId}</h5>
          <h6 className="card-title">{item.LightState.toString()}</h6>
          <p className="card-text"></p>
        </div>
        <div className="card-footer">
          <small className="text-muted d-flex justify-content-between align-items-center">
            <span className={`dot ${(item.ConnectionState) === "Connected" ? 'online' : ''}`}></span>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={item.LightState} onClick={sendInvokeMethod} />
            </div>
          </small>
        </div>
      </div>
    </div>
  )
}

export default DeviceComponent