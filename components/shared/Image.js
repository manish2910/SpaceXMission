import React from 'react'

const Image = ({source, alternateName}) => <img src={source} alt={alternateName} className="image" />

export default React.memo(Image)
