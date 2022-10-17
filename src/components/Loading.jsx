import React from 'react'
import ReactLoading from 'react-loading'

const Loading = (barras, black) => {
    return (
        <div className='load'>
					<h1>Loading</h1>       
					<ReactLoading tipo={barras}  color={black} alto={667} ancho={375} /></div>
    )
}

export default Loading