import * as Cesium from 'cesium'
import React, { useEffect, useRef } from 'react'

/**
 * CesiumJS Map Component.
 *
 * @function CesiumMap
 * @returns {React.FC} The map with marker.
 */
export const CesiumMap: React.FC = () => {
  /**
   * Reference to the Cesium container div element.
   *
   * @type {React.RefObject<HTMLDivElement>}
   */
  const cesiumContainerRef = useRef<HTMLDivElement>(null)

  /**
   * Reference to the Cesium Viewer instance.
   *
   * @type {React.RefObject<Cesium.Viewer>}
   */
  const viewerRef = useRef<Cesium.Viewer>()

  useEffect(() => {
    /**
     * Fetches coordinates data from the API and initializes the Cesium Viewer.
     */
    const fetchData = async () => {
      try {
        const response = await fetch('/api/coordinates')
        const data = await response.json()

        if (cesiumContainerRef.current && !viewerRef.current) {
          viewerRef.current = new Cesium.Viewer(cesiumContainerRef.current, {
            animation: false,
            timeline: false,
          })

          const viewer = viewerRef.current

          const initialPosition = Cesium.Cartesian3.fromDegrees(
            parseFloat(data.budapest.lng),
            parseFloat(data.budapest.lat),
            1000
          )

          const pinEntity = new Cesium.Entity({
            position: Cesium.Cartesian3.fromDegrees(
              parseFloat(data.budapest.lng),
              parseFloat(data.budapest.lat)
            ),
            billboard: {
              image: 'pin.png',
              width: 32,
              height: 32,
            },
            label: {
              text: 'Bajcsy-Zsilinszky street 5',
              show: true,
              font: '14px sans-serif',
              horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
              verticalOrigin: Cesium.VerticalOrigin.TOP,
              pixelOffset: new Cesium.Cartesian2(0, 32),
            },
          })

          viewer.entities.add(pinEntity)

          viewer.camera.flyTo({
            destination: initialPosition,
            duration: 0,
          })
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error)
      }
    }

    fetchData()
    return () => {
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy()
      }
    }
  }, [])

  return <div ref={cesiumContainerRef} style={{ height: '100%' }} />
}
