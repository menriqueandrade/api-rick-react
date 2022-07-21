import React from 'react';

const Personaje = ({ personaje }) => {
    /*aca ponemos los atributos del api*/
    const { name, species, image } = personaje;
    return (
        <div className='col-md-4 mb-2'>
            <div className='card'>
                <img src={image} alt={'imagen-${name}'} className='card-img-top'></img>
                <div className='card-body'>
                    <h5>
                        {name}
                    </h5>
                    <p>{species}</p>
                </div>
            </div>
        </div>
    );
}

export default Personaje;
