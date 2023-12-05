//import { mockData } from "@/data/products"
import Boton from "@/components/ui/Boton"
import Image from "next/image"

const Admin =async () => {
    const items = await fetch('http://localhost:3000/api/productos/all',
    {
        cache: 'force-cache',
        next: {
            tags: ['productos']
        }
    }
).then(r => r.json())

    return (

        <div className="container m-auto mt-8 mb-2 bg-win-gray-light w-3/4 min-w-min border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray">
            <div className="text-white bg-win-blue">
                <p className="ml-2 p-1">Panel de administración</p>
            </div>
            <div className="md:flex px-4">
                <section className="flex flex-wrap justify-between gap-2 text-sm mb-4">
                    <Boton className="mt-2">Agregar producto</Boton>

                    <table class="table-fixed">
                        <thead>
                            <tr className="bg-win-gray-dark">
                                <th className="border-2 border-win-gray-light p-2">Descripcion</th>
                                <th className="border-2 border-win-gray-light p-2">Precio</th>
                                <th className="border-2 border-win-gray-light p-2">Categoria</th>
                                <th className="border-2 border-win-gray-light p-2">Stock</th>
                                <th className="border-2 border-win-gray-light p-2">Producto</th>
                                <th className="border-2 border-win-gray-light p-2">Imagen</th>
                                <th className="border-2 border-win-gray-light p-2"></th>
                            </tr>

                        </thead>

                        {items.map(product =>
                            <tbody>
                                <tr className="border-2 border-r-win-btn-border-gray border-b-win-btn-border-gray text-center">
                                    <td className="p-2 border-2 border-win-gray-dark">{product.title}</td>
                                    <td className="p-2 border-2 border-win-gray-dark text-sm text-win-gray-dark">{product.description}</td>
                                    <td className="p-2 border-2 border-win-gray-dark">{product.price}</td>
                                    <td className="p-2 border-2 border-win-gray-dark">{product.type}</td>
                                    <td className="p-2 border-2 border-win-gray-dark">{product.inStock}</td>
                                    <td className="p-2 border-2 border-win-gray-dark"><Image
                                        alt={product.title}
                                        src={`/img/products/${product.image}`}
                                        height={288}
                                        width={288}
                                        className="object-contain h-56 w-80 sm:w-96 items-center"
                                    /></td>
                                    <td className="flex flex-col gap-4 p-4"><Boton>Editar</Boton><Boton>Eliminar</Boton></td>
                                </tr>

                            </tbody>

                        )}

                    </table>

                </section>

            </div>

        </div>
    )
}


export default Admin