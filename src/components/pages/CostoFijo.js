// import React from 'react'

// const CostoFijo = () => {
//   return (
//     <div>Aca va un formulario xd</div>
//   )
// }

// export default CostoFijo

import React from 'react';

export default class CostoFijo extends React.Component {

    constructor() {
        super();
        this.state = {
            luz: '',
            gas: '',
            agua: '',

        };

    }

    render() {
        return (
            <div className="">

                <div>
                    <label>Luz</label>
                    <input name="luz" value={this.state.luz} />
                </div>
                <div>
                    <label >Gas</label>
                    <input name="gas" value={this.state.gas} />
                </div>
                <div>
                    <label >Agua</label>
                    <input name="agua" value={this.state.agua} />
                </div>

                <button >Add</button>

            </div>
        )
    }
}