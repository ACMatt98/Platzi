import React from 'react';
import { useRouter } from 'next/dist/client/router';

const ProductItem = () =>{
    const router = useRouter()
    return(
        <div>
            Pagina del producto:{router.query.id}
        </div>
    )
}

export default ProductItem