import React, { useState } from 'react'
import { Map, Marker, Overlay } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'

export function MyMap() {
  const [center, setCenter] = useState([41.866333, -87.606783])
  const [zoom, setZoom] = useState(11)
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`
  return (
    <Map 
      height={500}
      center={center} 
      zoom={zoom} 
 
      
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
      
    >
      <Marker 
        width={50}
        anchor={[41.866333, -87.606783]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
    </Map>
    
  )
}